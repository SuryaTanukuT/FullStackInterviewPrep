
# 🆚 `useEffect` vs `useLayoutEffect` in React

React provides two important hooks for side effects: `useEffect` and `useLayoutEffect`. While they look similar, they behave differently and are intended for distinct use cases.

---

## 📘 Definitions

### 🔹 `useEffect`
- Runs **after the component is painted** to the screen.
- Non-blocking; does not delay the browser's paint.

### 🔹 `useLayoutEffect`
- Runs **synchronously after all DOM mutations but before the browser paints**.
- Blocking; delays browser paint until it completes.

---

## 📌 Key Differences

| Feature                  | `useEffect`                                | `useLayoutEffect`                              |
|--------------------------|---------------------------------------------|------------------------------------------------|
| Timing                   | After paint                                 | Before paint                                   |
| Blocking behavior        | ❌ Non-blocking                             | ✅ Blocking                                    |
| Performance impact       | Minimal                                     | Higher (use cautiously)                        |
| Use case                 | Async side effects                          | Measuring or manipulating DOM before paint     |
| Example task             | Fetching data, logging                      | Measuring dimensions, adjusting scroll         |

---

## ✅ When to Use `useEffect`

Use `useEffect` when your effect **doesn't need to block rendering**:

```jsx
import { useEffect } from 'react';

useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

### Good for:
- API calls
- Subscriptions
- Timers
- Logging

---

## ✅ When to Use `useLayoutEffect`

Use `useLayoutEffect` when your code **needs to run before the paint**, such as DOM measurements:

```jsx
import { useLayoutEffect } from 'react';

useLayoutEffect(() => {
  const rect = document.getElementById('box').getBoundingClientRect();
  console.log('Box dimensions:', rect);
}, []);
```

### Good for:
- Measuring elements
- DOM adjustments (e.g. scroll position)
- Avoiding flicker or layout shift

---

## ⚠️ Performance Tip

> Default to `useEffect`. Reach for `useLayoutEffect` only when **necessary** to prevent visual glitches.

Overusing `useLayoutEffect` can delay page rendering and degrade performance.

---

## 📝 Summary

| Hook              | Runs After Paint | Blocking | Typical Use Case                     |
|-------------------|------------------|----------|--------------------------------------|
| `useEffect`       | ✅ Yes           | ❌ No    | Data fetching, subscriptions         |
| `useLayoutEffect` | ❌ No            | ✅ Yes   | Layout measurements, DOM mutations  |

---

## ✅ Best Practice

> Use `useLayoutEffect` only when your layout or DOM reads/writes require it. Otherwise, stick with `useEffect`.

