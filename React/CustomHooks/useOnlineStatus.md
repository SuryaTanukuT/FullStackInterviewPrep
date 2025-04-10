
```md
# 📡 `useOnlineStatus` – A Custom React Hook to Detect Network Connectivity

`useOnlineStatus` is a lightweight and powerful custom React Hook to detect whether the user is online or offline in real time, based on the browser's native capabilities.

---

## 📦 Installation

No installation needed! Just copy the code into your project.

---

## 🧠 What It Does

`useOnlineStatus` uses the browser's built-in [`navigator.onLine`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine) property and the `online` / `offline` events to keep track of the network status of the user.

---

## 🧬 Hook Implementation

```jsx
import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

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

---

## 🚀 Usage Example

```jsx
import React from 'react';
import { useOnlineStatus } from './hooks/useOnlineStatus';

function StatusIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h2>Network Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</h2>
    </div>
  );
}
```

---

## 🎯 Real-World Scenario

Imagine a **chat app**:

- User opens the app: `useOnlineStatus` shows they are online.
- Internet goes out: Status changes to "Offline", disabling message sending.
- Connection returns: Status updates, and the app resumes normal behavior.

---

## 📊 Feature Comparison

| Feature | Description | Real-Life Analogy |
|--------|-------------|--------------------|
| `navigator.onLine` | Gets current network status | Like checking your phone’s signal bar |
| `online` event | Fires when internet is back | Like hearing a reconnection sound |
| `offline` event | Fires when connection drops | Like seeing a "No Internet" toast |
| Cleanup in `useEffect` | Removes listeners | Like closing background monitoring apps |

---

## ✅ Pros

- ✅ Simple and lightweight
- ✅ Real-time connectivity awareness
- ✅ Cross-browser supported
- ✅ Improves user experience and feedback

---

## ❌ Cons

- ❌ Cannot detect actual access (e.g. captive portals)
- ❌ Not suitable for server-side rendering without guards
- ❌ Frequent re-renders on flaky networks

---

## 🛠 When to Use

Use `useOnlineStatus` in:

- 🟢 **Chat apps** – to disable sending messages when offline
- 🟢 **E-commerce** – to prevent checkout during disconnection
- 🟢 **Form-based UIs** – to warn users before submission
- 🟢 **Offline-first apps** – to show banners or sync data on reconnect

---

## 🌐 Where to Use

- In **top-level components** like `App.js`
- In **context providers** to share online state globally
- In **feature-specific components** like uploaders or live feeds

---

## ⚙️ Enhanced Version (with Debounce)

```js
import { useState, useEffect } from 'react';

export function useStableOnlineStatus(delay = 300) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    let timer;

    const updateStatus = (status) => {
      clearTimeout(timer);
      timer = setTimeout(() => setIsOnline(status), delay);
    };

    const handleOnline = () => updateStatus(true);
    const handleOffline = () => updateStatus(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timer);
    };
  }, [delay]);

  return isOnline;
}
```

---

## 📌 Conclusion

`useOnlineStatus` is a practical hook that adds resilience and real-time responsiveness to your React apps. Use it to enhance UX, prevent data loss, and make your app network-aware!

