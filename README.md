# 🏠 Smart Hostel Feedback Management System

A web-based application designed to help hostel students submit structured feedback and complaints, while enabling hostel administrators to monitor, prioritize, and resolve issues efficiently.

This project transforms informal hostel complaints into organized, trackable data to support better decision-making by hostel management.

---

## ✨ Features

### 👩‍🎓 Student Module
- Secure login and registration
- Submit feedback for:
  - 🍽️ Food (with day & session: breakfast, lunch, dinner)
  - 🏠 Facilities
  - 🧹 Cleaning
  - 🌐 Internet
- Rate feedback as **Good / Average / Bad**
- Track complaint status:
  - Not Yet Responded
  - Seen
  - Resolved
- Re-raise complaints if not resolved

---

### 🧑‍💼 Admin Module
- View all student feedback in one dashboard
- Identify high-priority complaints (Bad ratings highlighted)
- Update complaint status:
  - Seen
  - Resolved
- View summary counts:
  - Total complaints
  - Pending complaints
  - Resolved complaints
- Clean, minimal, admin-focused interface

---

## 🧠 Key Concepts Implemented

- Role-based access (Student vs Admin)
- Structured feedback system (not just free-text forms)
- Complaint lifecycle management
- Priority handling for critical issues
- Modular JavaScript architecture:
  - `auth.js` – authentication logic
  - `student.js` – student functionality
  - `admin.js` – admin functionality

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Data Storage:** Browser LocalStorage (Prototype)  
- **Version Control:** Git & GitHub  

---

## 📂 Project Structure

├── login.html
├── register.html
├── index.html # Student dashboard
├── admin.html # Admin dashboard
├── style.css
├── auth.js
├── student.js
├── admin.js
├── images/ # Screenshots
└── README.md


---

## 💾 Data Storage

This project uses **browser localStorage** to store:
- Registered users
- Logged-in session details
- Feedback and complaint data

This approach is used to simulate backend behavior in a frontend prototype.

> In a real-world deployment, localStorage can be replaced with a backend API and database.

---

## 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Srichethanapolaki/-hostel-feedback-system
Open login.html in any modern browser

Register as a student and submit feedback

Login as admin using:

Email: admin@hostel.com
Open admin.html to manage complaints

📸 Screenshots
🔐 Login Page

👩‍🎓 Student Dashboard

🧑‍💼 Admin Dashboard

🔮 Future Enhancements
Backend integration (Node.js / Django)

Database support (MongoDB / MySQL)

Real-time admin notifications

Analytics dashboards and charts

Mobile application version

Secure authentication using JWT

🎓 Academic Relevance
This project demonstrates:

Real-world problem solving

Clean UI/UX design

Structured data handling

Role-based system architecture

Scalable and extensible design

Suitable for:

Internship evaluations

Mini / major project submissions

Portfolio showcase

Technical interviews

👤 Author
Chethana
B.Tech – Computer Science
GitHub: https://github.com/Srichethanapolaki

`npm start`
5. Open `frontend/index.html` in your browser

⭐ Final Note

This project is not just a feedback form — it is a decision-support system for hostel management.
