
# How Databases Keep Passwords Securely in Node.js

Databases should **never store raw (plaintext) passwords**. Instead, a secure process involving **hashing**, **salting**, and **key stretching** is used. Here's how it's done in a Node.js environment:

---

## 🔐 1. Password Hashing

**Hashing** is a one-way cryptographic function that converts the password into a fixed-length string.

- Node.js libraries like `bcrypt` or `argon2` are commonly used.
- Hashes cannot be reversed to get the original password.

### Example using bcrypt:
```js
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function hashPassword(password) {
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
}
```

---

## 🧂 2. Salting

A **salt** is a random string added to the password before hashing:
- Protects against **rainbow table attacks**.
- Ensures that the same password results in different hashes for different users.

`bcrypt` automatically generates and handles salt internally.

---

## 🧪 3. Key Stretching

Key stretching involves hashing the password multiple times to slow down brute-force attacks:
- `bcrypt`, `argon2`, and `PBKDF2` all support this.

### Example:
```js
const saltRounds = 12; // Increasing rounds makes hashing slower but more secure
```

---

## ✅ 4. Verifying Passwords

When a user logs in:
1. Retrieve the stored hash.
2. Use `bcrypt.compare()` to verify the input password against the stored hash.

### Example:
```js
async function verifyPassword(inputPassword, storedHash) {
  const match = await bcrypt.compare(inputPassword, storedHash);
  return match;
}
```

---

## ❌ What Not To Do

- Never store plaintext passwords.
- Don’t use fast hash algorithms like `MD5` or `SHA1`.
- Avoid hardcoding salts or using the same salt for all users.

---

## 🛡️ Best Practices

- Use secure hashing algorithms like `bcrypt`, `argon2`, or `scrypt`.
- Enforce strong password policies (length, symbols, etc.).
- Store only the hashed passwords, not the plain ones.
- Use environment variables for sensitive configurations.
- Implement rate-limiting, MFA, and secure connection protocols (HTTPS, TLS).

---

By following these practices, Node.js applications can securely handle user passwords and protect against common security threats.
