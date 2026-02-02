🚀 **Personal Portfolio – Full Stack Web Application**

📌 **Project Overview**

This is a full-stack personal portfolio website built to showcase my skills, projects, and experience as an AI Engineer & Full-Stack Developer.
The application includes a responsive frontend, a Python backend API, and a contact form that stores user messages.

**🛠️ Tech Stack Used**

**🔹 Frontend**

•HTML5

•CSS3

•JavaScript (Vanilla JS)

•Responsive UI with animations

**🔹 Backend**

•Python

•Flask (REST API)

•CORS enabled for frontend-backend communication

**🔹 Database**

•MySQL / SQLite (for storing contact form submissions)

**🔹 Tools & Others**

•Git & GitHub

•VS Code

•Virtual Environment (venv)

•JSON (for API communication)

**📂 Project Structure**

personal-portfolio/
│
├── backend/
│   └── app.py            
│
├── frontend/
│   ├── index.html          
│   ├── style.css           
│   ├── script.js           
│   └── images/           
│
├── resume/
│   └── BCA_Fresher_Resume_(1)[1].pdf
│
├── venv/                   
│
├── .gitignore
├── README.md
└── LICENSE

**🔄 How the Application Works**

•User fills the Contact Form on the frontend

•JavaScript sends data using Fetch API (JSON)

•Flask backend receives the request via /contact API

•Data is stored in the database

•Backend sends a JSON response

•Frontend shows success or error message

🌐 **API Details**

•Contact API

•Endpoint: /contact

•Method: POST

•Data Format: JSON

**Example request:**

{

  "name": "John Doe",

  "email": "john@example.com",

  "subject": "Project Discussion",

  "message": "Let's collaborate"
}


**Example response:**

{

  "success": true,

  "message": "Message saved successfully"
}

▶️ **How to Run the Project**

1️⃣ Backend Setup
cd backend
python app.py


Backend will run on:

http://127.0.0.1:5000

2️⃣ **Frontend Setup**

•Open the file directly or using Live Server:

•frontend/index.html

✨ **Features**

•Responsive portfolio design

•Smooth animations and transitions

•Contact form with backend API integration

•Database storage for messages

•Clean and maintainable structure

🎯 **Learning Outcomes**

•Full-stack development workflow

•REST API creation using Flask

•Frontend ↔ Backend communication using JSON

•Database integration

•GitHub project structuring

📌 **Future Enhancements**

•Convert frontend to React + Vite

•Upgrade backend to FastAPI

•Use PostgreSQL

•Add authentication

•Add Gmail SMTP notification

👤 **Author**

•Megaraj M
•AI Engineer & Full-Stack Developer

🔗 GitHub: https://github.com/Meg8834

🔗 LinkedIn: https://www.linkedin.com/in/megaraj-m-7b4b79341/

🏁 **Conclusion**

This project demonstrates a real-world full-stack web application with clean separation of frontend and backend, API integration, and database usage — suitable for academic submission, interviews, and portfolio showcasing.
