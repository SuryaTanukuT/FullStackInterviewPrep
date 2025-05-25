
# 🔐 JWT and Token Mechanism in Web Applications

---

## ✅ How JWT Works

**JWT (JSON Web Token)** is a compact, URL-safe means of representing claims to be transferred between two parties.

### Workflow:
1. **User logs in** with credentials.
2. Backend **verifies credentials** and issues a JWT.
3. Client **stores** the JWT (usually in localStorage, sessionStorage, or HttpOnly cookies).
4. Client sends JWT in `Authorization: Bearer <token>` header on subsequent requests.
5. Backend **validates JWT** using a secret key or public/private key pair.

### Structure of JWT:
- **Header**: Algorithm & token type.
- **Payload**: User data and expiration.
- **Signature**: Verifies the integrity of the token.

Example:
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
.
{
  "userId": 123,
  "exp": 1715000000
}
.
<signature>
```

---

## 🔁 When Should Token Refresh Be Used?

**Access Token**: Short-lived (e.g., 15 min) for frequent authentication.

**Refresh Token**: Long-lived (e.g., 7–30 days), used to obtain new access tokens without requiring login again.

### Use Token Refresh:
- When access token expires but the session should continue.
- Reduces need to ask users to re-authenticate frequently.

---

## 🔄 How Frontend Handles Expired Tokens

### Strategy:
1. API returns `401 Unauthorized`.
2. Frontend **detects expired token**.
3. Sends refresh token to backend to get a new access token.
4. **Retries the original request** with the new token.
5. If refresh fails → **logout** the user.

### Example:
```js
axios.interceptors.response.use(null, async (error) => {
  if (error.response.status === 401) {
    const newToken = await getNewAccessToken(); // use refresh token
    error.config.headers['Authorization'] = `Bearer ${newToken}`;
    return axios(error.config); // retry original request
  }
  return Promise.reject(error);
});
```

---

## ⚡ Caching: In-Memory vs Distributed

### In-Memory Caching
- Cache is stored in application memory (RAM).
- Very fast and easy to implement.
- Lost on restart, not shareable between servers.

#### Examples:
- Node.js with `memory-cache` or `lru-cache`.
- Python with in-process dicts.

### Use Cases:
- Local response caching.
- Temporary data like auth tokens or config.

---

### Distributed Caching
- Cache stored on a **dedicated external service**.
- Shared across multiple servers, persistent.

#### Examples:
- **Redis**
- **Memcached**

### Use Cases:
- Session storage.
- API response caching.
- Rate limiting.
- Leaderboards.

---

Let me know if you'd like to add diagrams or extend these examples!
