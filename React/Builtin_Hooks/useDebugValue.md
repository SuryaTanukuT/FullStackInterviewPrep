
```md
# 🧩 `useDebugValue` in React – Deep Dive

`useDebugValue` is a special hook in React designed **exclusively for debugging custom hooks**. It lets developers **label or display internal hook values** in **React DevTools**, helping with better visibility during development.

---

## 🔧 Syntax

```js
useDebugValue(value);
```

With a formatting function:

```js
useDebugValue(value, format => formattedValue);
```

---

## 🟢 Basic Example

```jsx
import { useState, useEffect, useDebugValue } from "react";

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useDebugValue(isOnline);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
```

**React DevTools Output:**

```
Custom Hook: isOnline → true
```

---

## 🧠 With Formatter Function

```jsx
useDebugValue(isOnline, value => (value ? "Online" : "Offline"));
```

Now React DevTools will show:

```
Custom Hook: isOnline → "Online"
```

---

## 🔄 Real-World Scenario: `useAuth` Example

### 🟥 Without `useDebugValue`

```js
function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fakeLoginAPI().then(setUser);
  }, []);

  return user;
}
```

No helpful info in DevTools.

---

### 🟩 With `useDebugValue`

```js
function useAuth() {
  const [user, setUser] = useState(null);

  useDebugValue(user, u => u ? `User: ${u.name}` : "Not Logged In");

  useEffect(() => {
    fakeLoginAPI().then(setUser);
  }, []);

  return user;
}
```

**React DevTools Output:**

```
useAuth → "User: Alice"
```

---

## 🔍 Comparison Table

| Aspect               | Without `useDebugValue`              | With `useDebugValue`                   |
|----------------------|--------------------------------------|----------------------------------------|
| Debugging Experience | Limited or unclear                   | Clear and descriptive hook values      |
| DevTools Visibility  | Only hook name visible               | Label and state shown inside DevTools  |
| Performance Impact   | Same                                 | Slight in dev (negligible)             |
| Maintenance Effort   | None                                 | Slight (updating formatters if needed) |

---

## ✅ When and Where to Use

| When to Use                          | When to Avoid                          |
|-------------------------------------|----------------------------------------|
| Custom hooks with internal state    | Simple hooks without logic             |
| Shared hooks used across app        | Hooks used only in one place           |
| You want clarity in DevTools        | You're in production (no effect there) |

---

## 👍 Pros and 👎 Cons

### 👍 Pros
- Improves debugging with **React DevTools**
- Makes **custom hook logic transparent**
- Allows **custom formatting** of debug output

### 👎 Cons
- Only works in **development**
- Not useful for **simple hooks**
- Slight **overhead for maintenance**

---

## 🌟 Best Practices

- Use **inside custom hooks** only
- Always provide **formatted values** for readability
- Keep formatting functions lightweight

---

## 🧪 Final Example – `useCounter`

```jsx
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  useDebugValue(count, value => `Counter: ${value}`);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return { count, increment, decrement };
}
```

**DevTools Output:**

```
useCounter → "Counter: 3"
```

---

## 📌 Summary

| Question      | Answer                                                                 |
|---------------|------------------------------------------------------------------------|
| **What**      | A React hook to label values in custom hooks for React DevTools        |
| **Why**       | To improve debugging experience and hook visibility                    |
| **When**      | During development of reusable or complex custom hooks                 |
| **Where**     | Inside custom hooks only, not inside components                        |

---

> `useDebugValue` doesn’t improve your app performance, but it **supercharges your developer experience**.
