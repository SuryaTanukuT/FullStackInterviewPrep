
```md
# 🕒 useInterval Hook in React

A custom React Hook that lets you use `setInterval` declaratively and safely inside functional components — without running into stale closures.

---

## 📌 What is `useInterval`?

`useInterval` is a reusable custom hook that allows you to run a callback repeatedly at a specified delay, while avoiding common pitfalls like stale state and uncleaned intervals.

---

## ❓ Why not just use `setInterval`?

Using `setInterval` directly in React components can lead to **stale closures** where your interval refers to outdated state or props.

```js
useEffect(() => {
  const id = setInterval(() => {
    console.log(count); // stale value
  }, 1000);
  return () => clearInterval(id);
}, []);
```

In the example above, `count` will always log the initial value, even as it updates in state.

---

## ✅ `useInterval` Solution

```js
import { useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    if (delay !== null) {
      const tick = () => savedCallback.current();
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
```

---

## 🧪 Example: Counter That Increments Every Second

```js
import React, { useState } from 'react';
import useInterval from './useInterval';

function Counter() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  return <h1>{count}</h1>;
}
```

---

## 🧩 Hook Breakdown

| Part                          | Purpose                                      |
|-------------------------------|----------------------------------------------|
| `useRef(callback)`            | Keeps latest callback across renders         |
| `useEffect([callback])`       | Updates the `ref` when callback changes      |
| `useEffect([delay])`          | Sets and clears interval on delay change     |

---

## ⏱️ When to Use `useInterval`

✅ Perfect for:
- Auto-saving
- Real-time clocks and timers
- Polling APIs
- Games and animations
- Countdown logic
- Auto-logout timers

---

## ⚠️ When NOT to Use

🚫 Avoid `useInterval` when:
- You only need a **single delay** → use `setTimeout` or `useTimeout`
- You rely on **frame timing** → use `requestAnimationFrame`
- You’re in a class component

---

## ✅ Pros

- No stale closures
- Cleaner, declarative syntax
- Fully reactive to state changes
- Easy to pause/resume by toggling `delay`
- Encourages reusable logic

---

## ❌ Cons

- Slightly more boilerplate than native `setInterval`
- Not built-in (you must define or import it)
- May be overkill for very simple intervals

---

## 📦 Installation

No installation needed — just copy the `useInterval` function into your codebase, or use a library like:

```bash
npm install usehooks-ts
```

```js
import { useInterval } from 'usehooks-ts';
```

---

## 📍 Summary

| Feature    | Benefit                      |
|------------|------------------------------|
| 🔁 Repeats | Runs a callback on interval  |
| 🔒 Safe     | Avoids stale state closures |
| 🔧 Flexible | Can dynamically start/stop  |
| 🧠 Reusable | Works in multiple components |

---

## ✨ Want More?

Check out other advanced hooks like:
- `useTimeout`
- `useDebounce`
- `useThrottle`
- `useRafInterval`

---

