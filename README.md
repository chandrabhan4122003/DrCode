# Lead Management System (LMS)

## 🚀 Overview
The **Lead Management System (LMS)** is a full-stack application designed to capture leads, score them using AI (Gemini API), and send personalized emails based on the lead score. The system includes both a **backend (Node.js, Express, MongoDB)** and a **frontend (React.js, module.css)** to provide a seamless experience for managing leads.

## ✨ Features
- **Lead Capture:** APIs to collect and store lead information.
- **AI Lead Scoring:** Automatically scores leads based on user interactions.
- **Email Automation:** Sends personalized emails using the **Gemini API** when users log out.
- **E-commerce Interface:** A simple store-like frontend where users add products (interactions affect lead score).
- **User Authentication:** Secure login/logout with JWT authentication.
- **Role-Based Access:** Admin and user roles for lead tracking.

---

- **Use your email while registering**

---

## 🏗️ Tech Stack
### **Backend:**
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Gemini API (AI email generation)

### **Frontend:**
- React.js
- CSS Modules for styling
- Fetch API for backend communication

---

## 📌 Installation & Setup
### 1️⃣ Clone the repository
```sh
git clone https://github.com/yourusername/lead-management-system.git
cd lead-management-system
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
npm start
```
- The backend will run on `http://localhost:5000`

### 3️⃣ Frontend Setup
```sh
cd frontend
npm install
npm start
```
- The frontend will run on `http://localhost:5173`

---

## 🔄 API Endpoints
### **User & Authentication**
| Method | Endpoint       | Description            |
|--------|--------------|------------------------|
| POST   | `/api/register` | Register a new user  |
| POST   | `/api/login`  | Login user & get token |
| POST   | `/api/logout` | Logout & trigger AI email |

### **Lead Management**
| Method | Endpoint        | Description |
|--------|--------------|-------------|
| POST   | `/api/leads` | Capture a new lead |
| GET    | `/api/leads` | Get all leads |

---

## 📧 AI-Powered Email Automation
- When a user logs out, the system automatically:
  1. Fetches the **lead score** from the backend.
  2. Uses the **Gemini API** to generate a personalized email.
  3. Sends an email based on the user's lead score (e.g., discount offers, follow-ups).

---

## 📌 How It Works
1. **User registers & logs in** → Assigned a unique **lead profile**.
2. **User interacts with the e-commerce system** (e.g., adds products) → **Lead score updates**.
3. **User logs out** → AI analyzes lead score & triggers an email.
4. **Admin can track leads & view lead scores**.

---

## 🔥 Future Enhancements
- 📊 **Admin Dashboard**: Visualize lead performance.
- 🤖 **AI Chatbot**: Assist users with recommendations.
- 🔔 **Push Notifications**: Engage leads with updates.

---

## 🤝 Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a Pull Request.

---
