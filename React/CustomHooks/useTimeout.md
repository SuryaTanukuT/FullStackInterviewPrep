
```markdown
# ⏳ `useTimeout` Hook in React

A custom React hook to manage time-based logic using `setTimeout` in a React-friendly, lifecycle-safe, and reusable way.

---

## 📌 What is `useTimeout`?

`useTimeout` is a custom hook that wraps `setTimeout` and `clearTimeout` inside a React hook, making it safe and declarative. It prevents memory leaks and stale closures, and improves code readability and reusability.

---

## 💡 Why Use It?

Using `setTimeout` directly in `useEffect` can lead to:
- ❌ Memory leaks
- ❌ Callback closure issues
- ❌ Repetitive cleanup logic
- ❌ Code duplication

With `useTimeout`, you get:
- ✅ Auto cleanup on unmount
- ✅ Latest callback via `useRef`
- ✅ Declarative usage
- ✅ Optional reset/clear control

---

## 📦 Basic Implementation

```js
import { useEffect, useRef } from 'react';

function useTimeout(callback, delay) {
  const savedCallback = useRef();

  // Update the callback ref
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay !== 'number') return;

    const handler = () => savedCallback.current();

    const id = setTimeout(handler, delay);

    return () => clearTimeout(id);
  }, [delay]);
}
```

---

## 🔄 Advanced Version (With Reset & Clear)

```js
import { useEffect, useRef, useCallback } from 'react';

export function useTimeout(callback, delay) {
  const timeoutRef = useRef();
  const savedCallback = useRef(callback);

  // Keep the callback updated
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    timeoutRef.current = setTimeout(() => {
      savedCallback.current();
    }, delay);
  }, [delay, clear]);

  useEffect(() => {
    reset();
    return clear;
  }, [reset, clear]);

  return { reset, clear };
}
```

---

## 🛠 Usage Example

```js
import { useTimeout } from './useTimeout';

function Toast({ message, onDismiss }) {
  const { reset, clear } = useTimeout(onDismiss, 5000);

  return (
    <div onMouseEnter={clear} onMouseLeave={reset}>
      {message}
    </div>
  );
}
```

---

## 📘 Real-World Use Case

> **Scenario:** Auto-dismiss toast message after 5 seconds

**With `useEffect` + `setTimeout`:**

```js
useEffect(() => {
  const id = setTimeout(() => setShow(false), 5000);
  return () => clearTimeout(id);
}, []);
```

**With `useTimeout`:**

```js
useTimeout(() => setShow(false), 5000);
```

Cleaner, safer, and easier to manage.

---

## 🔍 Comparison

| Feature               | `setTimeout` in `useEffect` | `useTimeout` Hook |
|----------------------|-----------------------------|--------------------|
| Reusability          | ❌                           | ✅                 |
| Auto Cleanup         | ❌ Manual                    | ✅ Built-in        |
| Callback Freshness   | ❌ Risk of stale closure     | ✅ via `useRef`    |
| Readability          | ⚠️ Verbose                  | ✅ Clean           |
| Reset/Restart        | ❌ Manual logic              | ✅ Optional        |

---

## ✅ Pros

- React-lifecycle safe
- Reusable & composable
- Avoids memory leaks
- Cleaner syntax
- Prevents stale closures

---

## ❌ Cons

- Slight abstraction overhead
- Might be overkill for trivial one-time timeouts
- Requires understanding `useRef` and `useCallback`

---

## 🧠 When to Use

- ✅ Auto-dismiss modals, toasts, tooltips
- ✅ Idle timeout handling
- ✅ Delayed transitions or animations
- ✅ Scheduled retries or delayed API calls

---

## 🛑 When Not to Use

- ❌ For trivial or one-off use cases
- ❌ If timing logic is needed only once and isn't shared

---
