# 🛠️ Service Workers in React – Developer Guide

---

## 📘 What is a Service Worker?

A **Service Worker** is a background script that intercepts network requests, caches assets, and enables offline-first functionality. It runs separately from the main browser thread.

---

## 🎯 Purpose of Service Workers in React

- Enable **Progressive Web Apps (PWAs)**
- Support **offline functionality**
- Improve **performance** with caching
- Handle **push notifications** and **background sync**

---

## ⚙️ How Service Workers Work

1. Registered by the application
2. Installed and activated
3. Intercepts fetch requests
4. Responds from cache or fetches from network

---

## 🚀 Adding Service Workers in React (Create React App)

React (CRA) has built-in support for service workers using **Workbox**.

### 1. Setup

By default, CRA registers a *no-op* service worker. To enable it:

```js
// index.js or main.js
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

serviceWorkerRegistration.register();
```

### 2. Customize the Worker (Optional)

Edit the generated `service-worker.js` or Workbox config.

---

## 📦 Files to Know

- `src/service-worker.js`: Contains worker logic
- `public/manifest.json`: Metadata for PWA
- `serviceWorkerRegistration.js`: Registers or unregisters the worker

---

## 🧠 Example Use Case

```js
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});
```

---

## ✅ Benefits

- Offline support
- Reduced server load
- Better performance for repeat visits
- Background updates

---

## ❌ Limitations

- Runs only over HTTPS (except localhost)
- Complex cache invalidation
- Debugging can be tricky
- Can serve outdated content if not managed well

---

## 🧪 Testing Service Workers

- Use **Lighthouse** in Chrome DevTools to audit PWA features
- DevTools → Application → Service Workers to inspect registration
- Clear storage/cache to force re-registration

---

## 🔁 Common Strategies

| Strategy        | Description                                      |
|-----------------|--------------------------------------------------|
| Cache First     | Load from cache, fallback to network             |
| Network First   | Try network first, fallback to cache             |
| Stale-While-Revalidate | Serve stale, update cache in background    |

---

## 🔓 Unregistering Service Worker (Opt-out)

```js
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

serviceWorkerRegistration.unregister();
```

---

Service Workers are key to building high-performance, offline-capable React apps. Combined with tools like Workbox and good caching strategies, they turn React apps into robust PWAs.
