
# 🔐 Complete JWT Authentication & Authorization Workflow (Node.js + React.js)

This document explains the full workflow of implementing **JWT (JSON Web Token)** based authentication and authorization in a web application using **React.js (Client)** and **Node.js (Server)**.

---

## 📌 What is JWT?

JWT is a compact, URL-safe means of representing claims between two parties. It consists of:
- **Header**
- **Payload (claims)**
- **Signature**

Example: `xxxxx.yyyyy.zzzzz`

---

## 🔁 Authentication vs Authorization

- **Authentication**: Verifying the user's identity.
- **Authorization**: Verifying what a user has access to.

---

## 🛠️ Server-Side (Node.js)

### 1. Install Required Packages

```bash
npm install express jsonwebtoken bcryptjs cors
```

---

### 2. User Login & JWT Token Generation

```js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();
app.use(express.json());

const SECRET_KEY = 'your_secret_key';

const users = [{ id: 1, username: 'admin', password: '$2a$10$xyz' }]; // bcrypt-hashed password

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
    expiresIn: '1h'
  });
  res.json({ token });
});
```

---

### 3. Middleware to Protect Routes

```js
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Secure data access granted', user: req.user });
});
```

---

## 🖥️ Client-Side (React.js)

### 1. Login & Store Token

```js
import axios from 'axios';

const login = async (credentials) => {
  const response = await axios.post('http://localhost:5000/login', credentials);
  localStorage.setItem('token', response.data.token);
};
```

---

### 2. Access Protected Route

```js
const fetchProtectedData = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get('http://localhost:5000/protected', {
    headers: { Authorization: `Bearer ${token}` }
  });
  console.log(response.data);
};
```

---

### 3. Logout

```js
const logout = () => {
  localStorage.removeItem('token');
};
```

---

## 🔐 Best Practices

| Practice | Details |
|---------|---------|
| Token Expiry | Use short-lived tokens (`expiresIn`) |
| HTTPS | Always use HTTPS to transmit tokens |
| HttpOnly Cookies | Prefer cookies with HttpOnly for security |
| Refresh Tokens | Use long-lived refresh tokens for renewing access tokens |
| Role-Based Access | Add user roles to the token for authorization |
| Secure Storage | Avoid storing tokens in localStorage for high-security apps |

---

## 🔄 Full JWT Flow Summary

1. **User Login**: Sends credentials to server.
2. **Server**: Verifies credentials and returns JWT.
3. **Client**: Stores JWT (e.g., localStorage).
4. **Client**: Sends JWT in `Authorization` header on requests.
5. **Server Middleware**: Verifies token and grants access.
6. **Logout**: Token is removed from client storage.

---

JWT simplifies stateless authentication across multiple frontend and backend services and is ideal for modern web applications.
