
# 🔐 Web Security Essentials & OWASP Protocols

This document covers OWASP security best practices in JavaScript, Angular, React, and Node.js, as well as core security protocols, authentication types, and secure session management.

---

## 🛡️ OWASP Security in JavaScript, Angular, React, and Node.js

### Common Vulnerabilities

| Vulnerability | Description | Affected |
|---------------|-------------|----------|
| XSS (Cross-Site Scripting) | Injecting scripts into user input | JS, Angular, React |
| CSRF (Cross-Site Request Forgery) | Unauthorized actions via cookies | All |
| SQL Injection | Injection in DB queries | Node.js |
| Insecure Deserialization | Executing attacker-controlled objects | Node.js |
| Broken Access Control | Unrestricted access to APIs | All |
| Sensitive Data Exposure | Poor encryption or no HTTPS | All |
| Insecure Dependencies | Using outdated libraries | All |

---

### Framework-Specific Notes

#### ✅ JavaScript (Vanilla)
- Escape all user input.
- Avoid `eval`, `innerHTML`, and dynamic script tags.
- Use CSP (Content Security Policy).

#### ✅ Angular
- Automatic XSS protection with built-in sanitization.
- Avoid bypassing Angular's DOM sanitization.

#### ✅ React
- JSX auto-escapes variables.
- Avoid `dangerouslySetInnerHTML`.

#### ✅ Node.js
- Validate all inputs.
- Avoid unsanitized database queries.
- Use Helmet.js for securing HTTP headers.

---

## 🔐 2FA vs MFA

| Type | Description |
|------|-------------|
| 2FA (Two-Factor Authentication) | Two distinct forms of identity (e.g., password + OTP) |
| MFA (Multi-Factor Authentication) | Two or more factors (password + OTP + biometrics, etc.) |

- **All 2FA is MFA**, but not all MFA is 2FA.

---

## 🍪 Cookies & Session Management

### Frontend
- Use `HttpOnly`, `Secure`, and `SameSite=Strict` flags.
- Store JWT in cookies (preferred) or localStorage (less secure).

### Backend
- Sign and encrypt session tokens.
- Implement session expiration and regeneration.
- Invalidate sessions on logout.

---

## 🔐 Federated Identity vs SSO

| Feature | Federated Identity | Single Sign-On (SSO) |
|--------|---------------------|-----------------------|
| Scope | Across multiple organizations | Within one organization |
| Example | Google login on third-party sites | One login for multiple internal apps |
| Protocols | OAuth, OpenID Connect | OAuth, SAML, Kerberos |

---

## 🔐 Core Security Protocols

### 1. **SSL/TLS**
- Secure communication over HTTPS.
- TLS is the modern, secure version of SSL.

### 2. **IPsec**
- Encrypts IP packets for VPNs.
- Works at the network layer.

### 3. **HTTPS**
- HTTP over TLS.
- Ensures data confidentiality and integrity.

### 4. **SSH (Secure Shell)**
- Secure remote access to servers.
- Uses key-based or password authentication.

### 5. **SFTP (SSH File Transfer Protocol)**
- Secure file transfer over SSH.
- Encrypted and authenticated.

### 6. **Kerberos**
- Ticket-based authentication protocol.
- Uses secret-key cryptography and a trusted server.

### 7. **OAuth**
- Authorization protocol for third-party access.
- Delegates user permissions without sharing credentials.

### 8. **OpenID Connect**
- Identity layer on top of OAuth 2.0.
- Returns ID tokens for user identity.

### 9. **PGP (Pretty Good Privacy)**
- Encrypts emails and files using public key cryptography.
- Ensures confidentiality and authenticity.

---

## ✅ Best Practices Summary

- Use HTTPS and TLS everywhere.
- Implement 2FA/MFA for authentication.
- Sanitize and validate all input on frontend/backend.
- Store tokens securely (prefer `HttpOnly` cookies).
- Use secure headers (e.g., via Helmet).
- Keep dependencies updated and monitored.
