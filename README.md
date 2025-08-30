# 🎓 E-Learning Platform (MERN Stack)

An **E-learning platform** built with the **MERN stack** (MongoDB, Express.js, React, Node.js).  
This platform allows **Admins** to create and manage courses with lecture videos, and **Clients** to purchase and access those courses after authentication.

---

## 🚀 Features

### 👤 Authentication & Authorization
- Secure **JWT-based login** and registration.
- **OTP verification** via email during registration using Nodemailer.
- **Role-based access control**:
  - **Admin**: Create, edit, delete courses and lectures.
  - **Client**: Browse, purchase, and watch courses.

### 📚 Courses & Lectures
- Admins can create courses with multiple lectures (video-based).
- Clients can browse all courses and access purchased courses.

### 💳 Payment Integration
- Integrated **Razorpay** for course purchase.
- After payment, purchased course is added to user’s account.

### ⚙️ Exception Handling
- Centralized error-handling middleware in Express.
- Structured error responses with proper status codes.

### 🔐 Security
- Passwords hashed with **bcrypt**.
- JWT tokens signed and time-limited.
- OTPs stored with expiry and auto-deletion.

---

## 🛠 Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB 
- **Authentication:** JWT + OTP email verification (Nodemailer)

---


