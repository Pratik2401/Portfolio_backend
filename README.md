# 📬 Portfolio Backend

This repository provides the backend for a personal portfolio/contact website. It handles secure contact message storage, admin authentication, and notification email delivery—enabling both users and the site owner to interact efficiently.

---

## 🚀 Features

- **Contact Message API:**  
  - Users can send messages (name, email, message) through the portfolio site's contact form.
  - Messages are stored in a MongoDB database.
  - Admin can view, delete individual, or delete all messages (protected routes).

- **Admin Authentication:**  
  - Admin registration and login with hashed passwords (bcrypt).
  - JWT-based authentication for protected routes.

- **Email Notifications:**  
  - Sends email notifications to the site owner when a new message is received.
  - Optional "chocolate day" email feature to send a special message.

- **Robust Error Handling:**  
  - Centralized error handler middleware for all API endpoints.

---

## 🛠️ Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** (JSON Web Token) for authentication
- **bcrypt** for password hashing
- **nodemailer** for email notifications
- **CORS** for cross-origin requests
- **dotenv** for environment variable management

---

## 📁 Main Project Structure

```
Portfolio_backend/
├── config/
│   └── dbConnection.js         # MongoDB connection setup
├── controller/
│   ├── adminController.js      # Admin registration/login
│   └── messageController.js    # Contact message logic & mail
├── middlewares/
│   ├── errorHandler.js         # Central error handler
│   └── validateToken.js        # JWT route protection
├── models/
│   ├── adminModel.js           # Admin schema
│   └── messageModel.js         # Message schema
├── routes/
│   ├── adminRoutes.js          # /api/admin endpoints
│   └── messageRoutes.js        # /api/messages endpoints
├── constants.js                # Error/status code constants
├── server.js                   # Main server entry point
└── .env                        # Environment variables (not committed)
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root with the following (example):

```
PORT=5000
CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolioDB?retryWrites=true&w=majority
ACCESS_TOKEN_SECRET=your_jwt_secret
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

---

## 🧪 API Endpoints

### Admin
- `POST /api/admin/register` — Register new admin
- `POST /api/admin/` — Admin login (returns JWT)

### Messages
- `POST /api/messages/send` — Submit a contact form message
- `GET /api/messages/get` — Get all messages (**admin only, JWT required**)
- `DELETE /api/messages/delete/:id` — Delete a message (**admin only**)
- `DELETE /api/messages/delAll` — Delete all messages (**admin only**)
- `DELETE /api/messages/send-email` — (Special) Send a "chocolate day" email

---

## 🚀 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Pratik2401/Portfolio_backend.git
   cd Portfolio_backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add a `.env` file** *(see above)*

4. **Start the server:**
   ```bash
   node server.js
   ```
   The backend will run on the port specified in `.env`.

---

## 📝 Author

Pratik Mali  
🔗 [GitHub](https://github.com/Pratik2401)

---
