CORS is a security feature implemented by web browsers that controls how web pages from one origin (domain) can request resources from a different origin.

To handle **CORS (Cross-Origin Resource Sharing)** in a React app (typically when making API calls to a backend server), you often need to configure the backend server correctly. But for documenting it in a GitHub Markdown (`.md`) file, you can write something like this:

---

## 🛡️ Handling CORS in a React App

When developing a React frontend that communicates with a backend API, you might encounter **CORS errors** like:

```
Access to fetch at 'http://localhost:5000/api' from origin 'http://localhost:3000' has been blocked by CORS policy.
```

This happens because the browser blocks requests across different origins unless the server explicitly allows it.

---

### ✅ Solution 1: Fix it on the Backend (Recommended)

#### For Express (Node.js)
```js
// Install cors if not already installed
// npm install cors

const express = require('express');
const cors = require('cors');

const app = express();

// Allow all origins (for development)
app.use(cors());

// Or allow specific origins
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // if using cookies/sessions
}));
```

---

### 🧪 Solution 2: Use a Proxy in Development (React)

For development purposes, set up a proxy in your `package.json`:

```json
// package.json
{
  "proxy": "http://localhost:5000"
}
```

This makes React forward API requests to the backend during `npm start`, avoiding CORS issues in dev.

Example:

```js
// frontend
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

### ❌ Avoid: Disabling CORS in the browser

This is unsafe and not recommended for production.

---

### 🔐 CORS in Production

For production, always configure the backend to allow only **specific trusted origins**, e.g.,

```js
cors({
  origin: ['https://yourfrontend.com'],
  methods: ['GET', 'POST'],
  credentials: true
});
```

---

### 📚 Resources

- [MDN Web Docs on CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [CORS in Express.js](https://expressjs.com/en/resources/middleware/cors.html)

---
