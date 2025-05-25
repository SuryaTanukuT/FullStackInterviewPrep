
# 🔐 Complete OAuth 2.0 Authentication & Authorization Workflow (Node.js + React.js)

This document provides a step-by-step guide to implementing **OAuth 2.0** authentication and authorization using **React.js (client)** and **Node.js (server)**.

---

## 📌 What is OAuth 2.0?

OAuth 2.0 is an industry-standard protocol for **authorization** that allows a third-party application to access user resources without exposing credentials.

---

## 🧩 Key Roles in OAuth 2.0

| Role                  | Description                                               |
|-----------------------|-----------------------------------------------------------|
| Resource Owner        | The user who grants access                                 |
| Client                | Application requesting access (e.g., React frontend)       |
| Authorization Server  | Issues access tokens (e.g., Google, GitHub)               |
| Resource Server       | API server providing access to protected resources         |

---

## 🔁 OAuth 2.0 Authorization Code Flow

1. **Client Redirects User to Authorization Server**
2. **User Logs In and Grants Permission**
3. **Authorization Server Redirects Back with Code**
4. **Client Sends Code to Backend**
5. **Backend Exchanges Code for Access Token**
6. **Backend Stores/Uses Token and Sends Result to Frontend**

---

## 🛠️ Server-Side (Node.js with Express)

### 1. Install Required Packages

```bash
npm install express axios cors dotenv
```

---

### 2. Setup Express OAuth Flow

```js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:5000/oauth/callback';

app.get('/oauth/login', (req, res) => {
  const authURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email profile`;
  res.redirect(authURL);
});

app.get('/oauth/callback', async (req, res) => {
  const code = req.query.code;

  const response = await axios.post('https://oauth2.googleapis.com/token', {
    code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: 'authorization_code'
  });

  const { access_token } = response.data;
  const profile = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
    headers: { Authorization: `Bearer ${access_token}` }
  });

  res.json({ token: access_token, user: profile.data });
});
```

---

## 🖥️ Client-Side (React.js)

### 1. Redirect to OAuth Login

```js
const handleLogin = () => {
  window.location.href = 'http://localhost:5000/oauth/login';
};
```

---

### 2. Display User After Redirect

After OAuth callback hits the backend, the backend redirects or returns user info.

```js
useEffect(() => {
  const fetchUser = async () => {
    const res = await fetch('http://localhost:5000/oauth/callback');
    const data = await res.json();
    console.log(data.user);
  };
  fetchUser();
}, []);
```

---

## ✅ Best Practices

| Practice             | Tip |
|----------------------|-----|
| Use HTTPS            | Secure all communication |
| Store secrets safely | Use .env for CLIENT_SECRET |
| Validate tokens      | Check signature and expiration |
| Use refresh tokens   | For long sessions |
| Secure frontends     | Avoid storing access tokens in localStorage |

---

## 🧾 Summary of OAuth 2.0 Flow

| Step | Description |
|------|-------------|
| 1.   | Frontend redirects to Google login page |
| 2.   | User grants access |
| 3.   | Google returns auth code to backend |
| 4.   | Backend exchanges code for access token |
| 5.   | Backend uses token to fetch user data |
| 6.   | Backend returns user info to frontend |

---

OAuth 2.0 is ideal for third-party authentication and ensures a secure, standards-compliant login process across platforms.
