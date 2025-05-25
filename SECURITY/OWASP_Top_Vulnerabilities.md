
# 🔐 OWASP Top 10 Web Security Vulnerabilities

This document outlines the OWASP Top 10 vulnerabilities, including definitions, risks, examples, and prevention tips.

---

## 1. 🚫 Broken Access Control

### Description:
Improper enforcement of restrictions on what authenticated users can do.

### Risks:
- Unauthorized data access
- Privilege escalation

### Prevention:
- Enforce role-based access
- Use server-side access checks
- Deny by default policy

---

## 2. 🔐 Cryptographic Failures

### Description:
Weak or missing encryption for sensitive data.

### Risks:
- Data leaks
- Man-in-the-middle attacks

### Prevention:
- Use strong TLS (1.2+)
- Store passwords using bcrypt or Argon2
- Avoid custom cryptography

---

## 3. 💉 Injection Attacks

### Description:
Untrusted input is interpreted as code or query.

### Types:
- SQL Injection
- Command Injection
- NoSQL Injection

### Prevention:
- Use parameterized queries
- Validate and sanitize inputs
- Avoid eval() and dynamic code execution

---

## 4. 🧩 Insecure Design

### Description:
Security flaws in application architecture or workflows.

### Risks:
- Business logic bypass
- Incomplete threat modeling

### Prevention:
- Apply secure design principles
- Conduct design reviews and threat modeling

---

## 5. ⚙️ Security Misconfiguration

### Description:
Incorrectly configured security headers, services, or permissions.

### Risks:
- Exposed stack traces
- Unsecured admin panels

### Prevention:
- Disable unused services
- Automate secure configuration
- Review settings regularly

---

## 6. 🧱 Vulnerable and Outdated Components

### Description:
Using components with known security flaws.

### Risks:
- Exploitable vulnerabilities
- Dependency chain attacks

### Prevention:
- Monitor dependencies (e.g., npm audit)
- Use trusted sources
- Keep components updated

---

## 7. 👤 Identification and Authentication Failures

### Description:
Improper implementation of user authentication and session management.

### Risks:
- Credential stuffing
- Session hijacking

### Prevention:
- Implement MFA
- Secure session cookies
- Limit login attempts

---

## 8. 📦 Software and Data Integrity Failures

### Description:
Assuming updates or critical data can be trusted without integrity checks.

### Risks:
- Supply chain attacks
- Malicious code injections

### Prevention:
- Use code signing
- Verify update sources

---

## 9. 🧾 Security Logging and Monitoring Failures

### Description:
Failure to detect and respond to attacks.

### Risks:
- Undetected breaches
- Delayed response

### Prevention:
- Enable logging of security events
- Centralize and monitor logs
- Implement alerting systems

---

## 10. 🌐 Server-Side Request Forgery (SSRF)

### Description:
The server makes requests to unintended or unauthorized internal systems.

### Risks:
- Exposing internal APIs
- Cloud metadata leakage

### Prevention:
- Whitelist outbound domains
- Block internal address access
- Use metadata access protections

---

## 🧨 Cross-Site Scripting (XSS)

### Description:
Injection of malicious scripts into web pages viewed by users.

### Types:
- Stored XSS
- Reflected XSS
- DOM-based XSS

### Prevention:
- Escape user input
- Use CSP headers
- Avoid dangerouslySetInnerHTML in React

---

## 🛡️ Cross-Site Request Forgery (CSRF)

### Description:
Attacker tricks user into performing actions on a web app where they're authenticated.

### Risks:
- Unauthorized transactions
- Account changes

### Prevention:
- Use anti-CSRF tokens
- SameSite cookie attribute
- Require re-authentication for sensitive actions

---

## ✅ Summary Table

| Vulnerability | Risk |
|---------------|------|
| Broken Access Control | Unauthorized access |
| Cryptographic Failures | Data exposure |
| Injection Attacks | Code execution |
| Insecure Design | Flawed security |
| Security Misconfiguration | System exposure |
| Outdated Components | Exploitable bugs |
| Auth Failures | Account compromise |
| Integrity Failures | Supply chain attacks |
| Logging Failures | Delayed response |
| SSRF | Internal access |
| XSS | Script injection |
| CSRF | Unauthorized actions |

---

By addressing these vulnerabilities, developers can significantly improve the security posture of their applications.
