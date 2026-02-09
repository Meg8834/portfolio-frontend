

---

# 🚀 Personal Portfolio – Full Stack Web Application

## 📌 Project Overview

This is a **full-stack personal portfolio website** built to showcase my skills, projects, and experience as an **AI Engineer & Full-Stack Developer**.
The application includes a **responsive frontend**, a **Python backend API**, and a **contact form** that stores user messages.

🔗 **Live Demo:** [https://megaraj-portfolio.netlify.app/](https://megaraj-portfolio.netlify.app/)

---

## 🛠️ Tech Stack Used

### 🔹 Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Responsive UI with animations

### 🔹 Backend

* Python
* Flask (REST API)
* CORS enabled for frontend–backend communication

### 🔹 Database

* MySQL / SQLite
* Used for storing contact form submissions

### 🔹 Tools & Others

* Git & GitHub
* VS Code
* Virtual Environment (venv)
* JSON (API communication)

---

## 📂 Project Structure

```
personal-portfolio/
│
├── backend/
│   └── app.py              # Flask backend API
│
├── frontend/
│   ├── index.html          # Main UI
│   ├── style.css           # Styling
│   ├── script.js           # Frontend logic & API calls
│   └── images/             # Assets
│
├── resume/
│   └── BCA_Fresher_Resume_(1)[1].pdf
│
├── venv/                   # Python virtual environment
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🔄 How the Application Works

1. User fills the **Contact Form** on the frontend
2. JavaScript sends data using **Fetch API (JSON)**
3. Flask backend receives the request via `/contact` API
4. Data is stored in the database
5. Backend sends a JSON response
6. Frontend shows success or error message

---

## 🌐 API Details

### Contact API

* Endpoint: `/contact`
* Method: `POST`
* Data Format: `JSON`

Example request includes name, email, subject, and message.
Example response returns success status.

---

## ▶️ How to Run the Project

### Backend

Go to backend folder and run:

python app.py

Backend runs on:

[http://127.0.0.1:5000](http://127.0.0.1:5000)

---

### Frontend

Open the file directly or using Live Server:

frontend/index.html

---

## ✨ Features

* Responsive portfolio design
* Smooth animations and transitions
* Contact form with backend API integration
* Database storage for messages
* Clean and maintainable structure

---

## 🎯 Learning Outcomes

* Full-stack development workflow
* REST API creation using Flask
* Frontend ↔ Backend communication using JSON
* Database integration
* GitHub project structuring

---

## 📌 Future Enhancements

* Convert frontend to React + Vite
* Upgrade backend to FastAPI
* Use PostgreSQL
* Add authentication
* Cloud deployment (AWS / Render / Vercel)

---

## 👤 Author

**Megaraj M**
AI Engineer & Full-Stack Developer

GitHub: [https://github.com/Meg8834](https://github.com/Meg8834)
LinkedIn: [https://www.linkedin.com/in/megaraj-m-7b4b79341/](https://www.linkedin.com/in/megaraj-m-7b4b79341/)

---

## 🏁 Conclusion

This project demonstrates a **real-world full-stack web application** with clean separation of frontend and backend, API integration, and database usage — suitable for academic submission, interviews, and portfolio showcasing.

---

