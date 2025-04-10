
```md
# 🌐 useNetworkStatus – React Hook for Network Connectivity

`useNetworkStatus` is a custom React hook that tracks whether the user's device is currently online or offline using the browser’s native `navigator.onLine` API and network event listeners.

---

## 🚀 Features

- ✅ Real-time online/offline detection
- ✅ Lightweight and dependency-free
- ✅ Works in all modern browsers
- ✅ Useful in offline-first apps (PWAs, e-commerce, note apps)
- ✅ Supports both global and component-level usage

---

## 📦 Installation

Just copy the hook into your React project:

```js
// hooks/useNetworkStatus.js

import { useState, useEffect } from 'react';

export default function useNetworkStatus() {
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

## 💡 Usage

```jsx
import useNetworkStatus from './hooks/useNetworkStatus';

function NetworkBanner() {
  const isOnline = useNetworkStatus();

  return (
    <div style={{ padding: '10px', backgroundColor: isOnline ? 'green' : 'red' }}>
      {isOnline ? "You're online 🚀" : "You're offline 🔌"}
    </div>
  );
}
```

---

## 📘 How It Works

| Part                        | Description                                                   |
|-----------------------------|---------------------------------------------------------------|
| `navigator.onLine`          | Initial status check                                          |
| `useState()`                | Stores and manages connectivity state                         |
| `window.addEventListener()` | Listens for `online` and `offline` browser events             |
| `useEffect()`               | Adds/removes listeners during mount/unmount lifecycle         |

---

## 🧪 Scenario Comparison

Let’s say you’re building a **Todo App**:

| Feature               | With `useNetworkStatus`                     | Without                   |
|-----------------------|---------------------------------------------|----------------------------|
| Add Task Offline      | Saved locally, synced later                 | Data lost or errors        |
| User Feedback         | "Offline Mode" banner                       | Confusing user experience  |
| Sync Logic            | Auto-sync when back online                  | Manual retry               |

---

## 🟢 Pros & 🔴 Cons

| Pros                                             | Cons                                                         |
|--------------------------------------------------|--------------------------------------------------------------|
| ✅ Simple & lightweight                          | 🔴 `navigator.onLine` may not detect partial disconnects     |
| ✅ Great UX for offline handling                 | 🔴 Doesn’t explain *why* the network dropped                 |
| ✅ Works with all modern browsers                | 🔴 No visibility into network quality or latency             |

---

## 🧭 When & Where to Use

### ✅ When:
- Building offline-first or PWA apps
- Handling real-time data or background sync
- E-commerce carts, chat apps, collaborative tools

### 📍 Where:
- Globally in app layout
- Locally in components like `<Form />`, `<Chat />`, `<Cart />`

---

## 🧩 Advanced Version (with callback)

```js
function useNetworkStatus(onChange) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateStatus = () => {
      const status = navigator.onLine;
      setIsOnline(status);
      if (onChange) onChange(status);
    };

    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);

    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
    };
  }, [onChange]);

  return isOnline;
}
```

---

## ⚙️ React 18+ Compatible Version (with `useSyncExternalStore`)

```js
import { useSyncExternalStore } from 'react';

const subscribe = (callback) => {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
};

const getSnapshot = () => navigator.onLine;

function useNetworkStatus() {
  return useSyncExternalStore(subscribe, getSnapshot);
}
```

