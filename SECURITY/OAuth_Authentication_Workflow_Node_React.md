
# 🔐 Complete OAuth Authentication & Authorization Workflow (Node.js + React.js)

This document outlines the complete implementation flow of **OAuth 2.0** for authentication and authorization using **React.js (Client)** and **Node.js (Server)**.

---

## 📌 What is OAuth 2.0?

OAuth 2.0 is an **authorization framework** that allows third-party applications to obtain limited access to user accounts on an HTTP service (e.g., Google, GitHub, Facebook), without exposing credentials.

---

## 🔄 OAuth Roles

| Role              | Description                                     |
|-------------------|-------------------------------------------------|
| Resource Owner    | The user                                       |
| Client            | Your frontend app                              |
| Authorization Server | Server that authenticates user (Google, etc.)|
| Resource Server   | API server that protects resources              |

---

## 🛠️ Server-Side (Node.js)

### 1. Install Required Packages

```bash
npm install express passport passport-google-oauth20 express-session
```

---

### 2. Configure Passport Strategy

```js
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new GoogleStrategy({
  clientID: 'GOOGLE_CLIENT_ID',
  clientSecret: 'GOOGLE_CLIENT_SECRET',
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));
```

---

### 3. Create OAuth Routes

```js
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/'
  }));

app.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).send('Unauthorized');
  res.json({ user: req.user });
});

app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});
```

---

## 🖥️ Client-Side (React.js)

### 1. Redirect to Login

```js
const handleLogin = () => {
  window.location.href = 'http://localhost:5000/auth/google';
};
```

---

### 2. Fetch User Data After Redirect

```js
useEffect(() => {
  axios.get('http://localhost:5000/profile', { withCredentials: true })
    .then(res => setUser(res.data.user))
    .catch(err => console.log(err));
}, []);
```

---

### 3. Logout

```js
const handleLogout = () => {
  window.location.href = 'http://localhost:5000/logout';
};
```

---

## 🍪 Notes on Cookies & Sessions

- The server uses sessions to store OAuth tokens.
- Set `withCredentials: true` in frontend requests.
- Enable CORS properly with credentials on both sides.

---

## ✅ OAuth Flow Summary

1. Client redirects to Google `/auth/google`.
2. User logs in and grants permissions.
3. Google redirects back to `/auth/google/callback`.
4. Server stores user info in session.
5. Client fetches `/profile` with credentials.
6. User is logged in and authorized.
7. Logout clears session.

---

## 🔐 Best Practices

| Practice              | Tip |
|-----------------------|-----|
| Use HTTPS             | Protect token/cookie transfers |
| Validate scopes       | Ensure least privilege access |
| Use secure session cookies | HttpOnly, Secure, SameSite |
| Handle logout properly | Destroy session and cookies |
| Avoid storing tokens in frontend | Prefer server-side sessions |

---

OAuth 2.0 simplifies secure delegated access and is ideal for apps that want to allow users to log in with third-party accounts like Google or GitHub.
