
```md
# 📌 `useEventCallback` in React — Complete Guide

`useEventCallback` is a powerful hook that helps solve issues with stale closures in event handlers, particularly when dealing with delayed or async functions like `setTimeout`, `eventListeners`, or 3rd-party libraries.

---

## 🔍 What is `useEventCallback`?

> A hook that returns a **stable function** (doesn't change on re-renders), but still accesses the **latest values** of state and props inside its body.

It's not part of React core (as of React 18), but can be found in utility libraries like:

- [`@mui/utils`](https://mui.com/base-ui/react-utils/hooks/#useeventcallback)
- Or implemented manually.

---

## 🧠 Why, When, and Where to Use It?

### ✅ Why?
- Avoids **stale closures** — common with `setTimeout`, `event listeners`, etc.
- Prevents unnecessary **function recreation**.
- Ensures your callbacks always reflect **latest state/props**.

---

### ✅ When to Use?
Use `useEventCallback` when:
- You define **callbacks** used **after a delay** or **outside React** (e.g., `setTimeout`, `resize`).
- You want a **stable function reference** that doesn't recreate on every render.

---

### ✅ Where to Use?
- Debounced search inputs
- Animation event callbacks
- Custom `addEventListener` logic
- Subscriptions or WebSocket handlers
- External libraries like Material UI

---

## 🆚 `useEventCallback` vs `useCallback`

| Feature                 | `useCallback`                             | `useEventCallback`                       |
|------------------------|--------------------------------------------|------------------------------------------|
| Identity stability      | ✅ Memoized (based on deps)               | ✅ Always stable                          |
| Latest state access     | ❌ Can be stale without proper deps        | ✅ Always gets latest state/props         |
| Dependency array        | ✅ Required                                | ❌ Not needed                             |
| Use case                | Prevent re-renders due to prop change     | Delayed callbacks, stable identity       |
| Built into React?       | ✅ Yes                                     | ❌ No (external/custom)                   |

---

## 📦 Example: Debounced Search Input

### ⚠ With `useCallback` (buggy):

```tsx
const handleSearch = useCallback(() => {
  fetch(`/api?q=${query}`); // ❌ query might be stale
}, [query]);

useEffect(() => {
  const timeout = setTimeout(handleSearch, 500);
  return () => clearTimeout(timeout);
}, [handleSearch]);
```

- Problem: `handleSearch` might reference an **outdated `query`**.

---

### ✅ With `useEventCallback`:

```tsx
import { useEventCallback } from '@mui/utils'; // or custom hook

const handleSearch = useEventCallback(() => {
  fetch(`/api?q=${query}`); // ✅ always latest query
});

useEffect(() => {
  const timeout = setTimeout(handleSearch, 500);
  return () => clearTimeout(timeout);
}, [handleSearch]);
```

- ✅ The function is **stable**, but always uses the **latest query value**.

---

## 🛠️ Custom Implementation (if you don't use a library)

```ts
import { useRef, useCallback, useLayoutEffect } from 'react';

function useEventCallback(fn) {
  const ref = useRef(fn);

  useLayoutEffect(() => {
    ref.current = fn;
  });

  return useCallback((...args) => {
    return ref.current(...args);
  }, []);
}
```

---

## ✅ Pros and ❌ Cons

### ✅ Pros
- Prevents stale closures
- Stable function identity
- Avoids excessive re-renders
- Great for event listeners and async logic

### ❌ Cons
- Not built into React (need external or custom)
- Less widely known / used
- Can be overused if not necessary

---

## 🧠 Summary

| Topic        | Details |
|--------------|---------|
| Purpose      | Stable function with access to latest state/props |
| Key Benefit  | Fixes stale closures in delayed/external callbacks |
| Use Cases    | Debounce, throttling, listeners, async handlers |
| Alternative  | `useCallback` with manual deps management |
| Availability | Not built-in (external or custom needed) |

---

## 📎 Resources

- [MUI `useEventCallback` Docs](https://mui.com/base-ui/react-utils/hooks/#useeventcallback)
