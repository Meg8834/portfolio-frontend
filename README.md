

```md
# 🚀 Personal Portfolio – Full Stack Web Application

## 📌 Project Overview

This project is a **full-stack personal portfolio website** developed to showcase my skills, projects, and profile as an **AI Engineer & Full-Stack Developer**.  
It consists of a **responsive frontend**, a **Python-based backend API**, and a **contact form** with PostgreSQL database storage on Render.

---

## 🛠️ Tech Stack

### 🔹 Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Responsive UI design
* Smooth animations and transitions

### 🔹 Backend

* Python
* Flask (REST API)
* Flask-CORS (frontend–backend communication)

### 🔹 Database

* PostgreSQL (Render managed database)
* Used to store contact form submissions

### 🔹 Tools & Utilities

* Git & GitHub
* Visual Studio Code
* Python Virtual Environment (venv)
* JSON (API data exchange format)

---

## 📂 Neat Project Structure

```

personal-portfolio/
│
├── backend/
│   ├── app.py              # Flask backend API
│   ├── requirements.txt    # Backend dependencies
│   └── render.yml          # Render deployment config
│
├── frontend/
│   ├── index.html          # Main portfolio UI
│   ├── style.css           # Styling and layout
│   ├── script.js           # Frontend logic & API calls
│   └── images/             # Images and assets
│
├── resume/
│   └── BCA_Fresher_Resume.pdf
│
├── .gitignore
├── README.md
└── LICENSE

````

---

## 🔄 Application Workflow

1. User fills out the **Contact Form** on the frontend  
2. JavaScript sends data using **Fetch API** in JSON format  
3. Flask backend receives data through the `/contact` API  
4. Data is validated and stored in PostgreSQL database  
5. Backend returns a JSON response  
6. Frontend displays a success or error message  

---

## 🌐 API Details

### 📩 Contact API

* **Endpoint:** `/contact`
* **Method:** `POST`
* **Content-Type:** `application/json`

**Sample Request**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Discussion",
  "message": "Let's collaborate"
}
````

**Sample Response**

```json
{
  "success": true,
  "message": "Message saved successfully"
}
```

---

## ▶️ How to Run the Project

### 1️⃣ Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

📍 Backend runs at:

```
http://127.0.0.1:5000
```

---

### 2️⃣ Frontend Setup

* Open directly in browser **OR**
* Use Live Server

```text
frontend/index.html
```

---

## ✨ Key Features

* Fully responsive portfolio design
* Clean and modern UI
* Contact form with backend API integration
* PostgreSQL database storage for user messages
* Clear separation of frontend and backend
* Maintainable and scalable project structure

---

## 🎯 Learning Outcomes

* Full-stack development workflow
* REST API development using Flask
* JSON-based frontend ↔ backend communication
* PostgreSQL integration on Render
* GitHub project structuring and version control

---

## 📌 Future Enhancements

* Convert frontend to **React + Vite**
* Upgrade backend to **FastAPI**
* Optimize PostgreSQL performance
* Add authentication system
* Cloud deployment (Render / AWS / Vercel)

---

## 👤 Author

**Megaraj M**
AI Engineer & Full-Stack Developer

🔗 GitHub: [https://github.com/Meg8834](https://github.com/Meg8834)
🔗 LinkedIn: [https://www.linkedin.com/in/megaraj-m-7b4b79341/](https://www.linkedin.com/in/megaraj-m-7b4b79341/)

---

## 🏁 Conclusion

This project demonstrates a **real-world full-stack web application** with proper separation of concerns, API integration, and PostgreSQL database handling — making it suitable for **portfolio showcasing, academic submission, and technical interviews**.


If you want next: resume project points or LinkedIn post — just tell 👍
```
