
# 🔐 Complete PingFederate Authentication & Authorization Workflow (Node.js + React.js)

This document outlines the end-to-end workflow for implementing **PingFederate** authentication and authorization in a web application using **React.js (client)** and **Node.js (server)**.

---

## 📌 What is PingFederate?

PingFederate is an enterprise-grade identity federation server that provides **Single Sign-On (SSO)**, **OAuth**, **OpenID Connect**, and **SAML** support.

---

## 🧩 Key Concepts

| Term               | Description |
|--------------------|-------------|
| IdP (Identity Provider) | Verifies identity and issues tokens |
| SP (Service Provider)   | Your application that consumes tokens |
| OIDC / OAuth2           | Protocol used for secure token-based authentication |

---

## 🔁 OIDC Authorization Code Flow with PingFederate

1. React App redirects user to PingFederate login URL.
2. User logs in via PingFederate.
3. PingFederate redirects back to backend with auth code.
4. Backend exchanges auth code for access/ID token.
5. Backend fetches user info and sends response to frontend.

---

## 🛠️ Server-Side (Node.js with Express)

### 1. Install Required Packages

```bash
npm install express axios dotenv cors
```

---

### 2. Setup Express Server

```js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  TOKEN_ENDPOINT,
  AUTH_ENDPOINT,
  USERINFO_ENDPOINT
} = process.env;

app.get('/auth/pingfed', (req, res) => {
  const authUrl = \`\${AUTH_ENDPOINT}?client_id=\${CLIENT_ID}&response_type=code&scope=openid profile email&redirect_uri=\${REDIRECT_URI}\`;
  res.redirect(authUrl);
});

app.get('/auth/callback', async (req, res) => {
  const code = req.query.code;

  const tokenResponse = await axios.post(TOKEN_ENDPOINT, null, {
    params: {
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  const { access_token, id_token } = tokenResponse.data;

  const userInfo = await axios.get(USERINFO_ENDPOINT, {
    headers: { Authorization: \`Bearer \${access_token}\` }
  });

  res.json({ user: userInfo.data, access_token, id_token });
});
```

---

## 🖥️ Client-Side (React.js)

### 1. Trigger Login Redirect

```js
const handleLogin = () => {
  window.location.href = 'http://localhost:5000/auth/pingfed';
};
```

---

### 2. Handle Auth Callback

```js
useEffect(() => {
  const fetchUser = async () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('code')) {
      const res = await fetch(\`http://localhost:5000/auth/callback?code=\${params.get('code')}\`);
      const data = await res.json();
      console.log('User Info:', data.user);
    }
  };
  fetchUser();
}, []);
```

---

## 📦 Required .env Variables

```env
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
REDIRECT_URI=http://localhost:5000/auth/callback
AUTH_ENDPOINT=https://your-pingfed-domain/as/authorization.oauth2
TOKEN_ENDPOINT=https://your-pingfed-domain/as/token.oauth2
USERINFO_ENDPOINT=https://your-pingfed-domain/idp/userinfo.openid
```

---

## ✅ Best Practices

| Practice                  | Recommendation |
|---------------------------|----------------|
| Use HTTPS                 | Secure token communication |
| Use State and Nonce       | Mitigate CSRF and replay attacks |
| Validate ID token         | Check signature, audience, and expiry |
| Secure Backend            | Don’t expose client secret to frontend |
| Use Cookies (Optional)    | For secure session tracking |

---

## 🔄 Flow Summary

| Step | Action |
|------|--------|
| 1.   | React redirects to PingFederate login |
| 2.   | User authenticates and grants access |
| 3.   | PingFederate redirects to backend with code |
| 4.   | Backend exchanges code for token |
| 5.   | Backend fetches user profile |
| 6.   | Backend returns user info to React app |

---

PingFederate is ideal for enterprise SSO and federated identity, and integrating it via OAuth 2.0/OpenID Connect provides secure and seamless login experiences.
