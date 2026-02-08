import os
import sqlite3
from pathlib import Path
from urllib.parse import urlparse

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db = None
cursor = None
db_backend = None
db_error = None


def normalize_postgres_url(url):
    # Render can provide postgres://...; psycopg2 expects postgresql://...
    if not url:
        return url
    if url.startswith("postgres://"):
        return "postgresql://" + url[len("postgres://") :]
    return url


def init_sqlite():
    db_path = Path(__file__).with_name("portfolio.db")
    sqlite_db = sqlite3.connect(db_path, check_same_thread=False)
    sqlite_cursor = sqlite_db.cursor()
    sqlite_cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT,
            message TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
        """
    )
    sqlite_db.commit()
    return sqlite_db, sqlite_cursor

postgres_url = normalize_postgres_url(os.environ.get("DATABASE_URL"))

if postgres_url:
    try:
        import psycopg2

        connect_kwargs = {}
        parsed_url = urlparse(postgres_url)
        pg_sslmode = os.environ.get("PGSSLMODE")
        if pg_sslmode:
            connect_kwargs["sslmode"] = pg_sslmode
        elif parsed_url.hostname and parsed_url.hostname.endswith(".internal"):
            connect_kwargs["sslmode"] = "disable"
        else:
            connect_kwargs["sslmode"] = "require"

        db = psycopg2.connect(postgres_url, **connect_kwargs)
        cursor = db.cursor()
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS contacts (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                subject VARCHAR(150),
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        db.commit()
        db_backend = "postgres"
    except ImportError:
        db_error = "psycopg2_not_installed"
        print("Warning: psycopg2 not installed. Falling back to MySQL/SQLite.")
    except Exception as e:
        db_error = f"postgres_connect_failed: {type(e).__name__}: {e}"
        print("Warning: Could not connect to PostgreSQL. Falling back to MySQL/SQLite:", e)

if not cursor:
    try:
        import mysql.connector

        db = mysql.connector.connect(
            host=os.environ.get("DB_HOST", "localhost"),
            user=os.environ.get("DB_USER", "root"),
            password=os.environ.get("DB_PASS", ""),
            database=os.environ.get("DB_NAME", "portfolio"),
        )
        cursor = db.cursor()
        db_backend = "mysql"
    except ImportError:
        if not db_error:
            db_error = "mysql_connector_not_installed"
        print("Warning: mysql.connector not installed. Falling back to SQLite.")
    except Exception as e:
        if not db_error:
            db_error = f"mysql_connect_failed: {type(e).__name__}: {e}"
        print("Warning: Could not connect to MySQL database. Falling back to SQLite:", e)

if not cursor:
    db, cursor = init_sqlite()
    db_backend = "sqlite"


@app.route("/health", methods=["GET"])
def health():
    payload = {"status": "ok", "db_connected": bool(cursor), "backend": db_backend}
    if db_error:
        payload["db_error"] = db_error
    payload["has_database_url"] = bool(postgres_url)
    return jsonify(payload)


@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json() or {}

    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    subject = data.get("subject", "").strip()
    message = data.get("message", "").strip()

    if not (name and email and message):
        return (
            jsonify({"success": False, "message": "Name, email and message are required."}),
            400,
        )

    if not cursor:
        return (
            jsonify(
                {
                    "success": False,
                    "message": "Server cannot save messages right now. Please try again later.",
                }
            ),
            503,
        )

    try:
        if db_backend in ("mysql", "postgres"):
            cursor.execute(
                "INSERT INTO contacts (name, email, subject, message) VALUES (%s, %s, %s, %s)",
                (name, email, subject, message),
            )
        else:
            cursor.execute(
                "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)",
                (name, email, subject, message),
            )
        db.commit()
    except Exception as e:
        print("Error inserting contact:", e)
        return jsonify({"success": False, "message": "Failed to save message."}), 500

    return jsonify({"success": True, "message": "Message saved successfully."})


if __name__ == "__main__":
    app.run(
        host=os.environ.get("FLASK_RUN_HOST", "127.0.0.1"),
        port=int(os.environ.get("FLASK_RUN_PORT", 5000)),
        debug=os.environ.get("FLASK_DEBUG", "1") == "1",
    )
