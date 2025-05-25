# 🗃️ Using IndexedDB and Local Storage – Developer Guide

---

## 📦 What is Local Storage?

### Definition:
`localStorage` is a synchronous key-value storage API built into browsers. It stores data with no expiration date and persists even after the browser is closed.

### Usage:
```js
// Set
localStorage.setItem('token', '12345');

// Get
const token = localStorage.getItem('token');

// Remove
localStorage.removeItem('token');
```

### Pros:
- Easy to use
- Persistent storage
- Great for simple key-value pairs

### Cons:
- Max 5MB limit
- No complex querying
- Blocking (synchronous)

---

## 🗂 What is IndexedDB?

### Definition:
IndexedDB is a **low-level asynchronous database** in the browser. It can store large amounts of structured data, including files/blobs, using key-value pairs.

### Use Case:
- Offline apps
- Caching large responses
- Storing structured JSON data

### Pros:
- Large storage limit (~50MB+)
- Asynchronous
- Query support with indexes
- Complex data structures

### Cons:
- More complex API
- Not supported in server-side rendering (SSR)
- Needs feature detection

---

## 🔄 When to Use Each?

| Use Case                      | Use `localStorage` | Use `IndexedDB` |
|------------------------------|--------------------|-----------------|
| Small, simple values         | ✅                 | ❌              |
| JSON objects                 | ✅ (with stringify) | ✅              |
| Files, large datasets        | ❌                 | ✅              |
| Offline-first complex app    | ❌                 | ✅              |
| Fast key-value access        | ✅                 | ❌              |

---

## 💡 IndexedDB Example (with idb library)

```bash
npm install idb
```

```js
import { openDB } from 'idb';

const db = await openDB('my-db', 1, {
  upgrade(db) {
    db.createObjectStore('users');
  },
});

// Set
await db.put('users', { name: 'Adhi' }, 'user1');

// Get
const user = await db.get('users', 'user1');
```

---

## 🔐 Security Considerations

- Both are accessible by JavaScript → do not store sensitive data
- Always validate/sanitize on server
- Consider encryption if required

---

## 🧪 Debugging Tools

- Chrome DevTools:
  - **Application > Storage > Local Storage**
  - **Application > Storage > IndexedDB**

---

## 🛠 Usage in React

### LocalStorage Hook

```js
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
```

---

## 🧠 Summary

| Feature        | LocalStorage             | IndexedDB               |
|----------------|--------------------------|--------------------------|
| Storage Limit  | ~5MB                     | ~50MB+                   |
| API Type       | Synchronous              | Asynchronous             |
| Data Type      | Strings only             | Objects, files, blobs    |
| Performance    | Fast, but blocking       | Optimized for large data |
| Use Case       | Tokens, flags            | Offline cache, blobs     |

---

IndexedDB and localStorage are powerful tools for client-side data persistence. Use them wisely based on the size, complexity, and usage needs of your application.
