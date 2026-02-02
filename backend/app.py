from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# -------- DATABASE CONFIG (safe) --------
db = None
cursor = None

try:
    import mysql.connector
    try:
        db = mysql.connector.connect(
            host=os.environ.get('DB_HOST', 'localhost'),
            user=os.environ.get('DB_USER', 'root'),
            password=os.environ.get('DB_PASS', '1306'),
            database=os.environ.get('DB_NAME', 'portfolio')
        )
        cursor = db.cursor()
    except Exception as e:
        print('Warning: Could not connect to MySQL database:', e)
        db = None
        cursor = None
except ImportError:
    print('Warning: mysql.connector not installed. Contact form will be disabled.')


@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok', 'db_connected': bool(cursor)})


@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json() or {}

    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    subject = data.get('subject', '').strip()
    message = data.get('message', '').strip()

    if not (name and email and message):
        return jsonify({
            'success': False,
            'message': 'Name, email and message are required.'
        }), 400

    if not cursor:
        # gracefully handle missing DB dependency/connection
        return jsonify({
            'success': False,
            'message': 'Server cannot save messages right now. Please try again later.'
        }), 503

    try:
        cursor.execute(
            "INSERT INTO contacts (name, email, subject, message) VALUES (%s, %s, %s, %s)",
            (name, email, subject, message)
        )
        db.commit()
    except Exception as e:
        print('Error inserting contact:', e)
        return jsonify({
            'success': False,
            'message': 'Failed to save message.'
        }), 500

    return jsonify({
        'success': True,
        'message': 'Message saved successfully (email will be added later).'
    })


if __name__ == '__main__':
    # Use env vars when available; keep debug off by default in production
    app.run(host=os.environ.get('FLASK_RUN_HOST', '127.0.0.1'), port=int(os.environ.get('FLASK_RUN_PORT', 5000)), debug=os.environ.get('FLASK_DEBUG', '1') == '1')
