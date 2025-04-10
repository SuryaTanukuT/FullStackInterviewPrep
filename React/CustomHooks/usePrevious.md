
```md
# 🔁 `usePrevious` Hook in React

`usePrevious` is a custom React hook used to **keep track of the previous value** of a prop or state across renders. React doesn't store previous values by default — `usePrevious` fills this gap.

---

## 📦 Basic Implementation

```js
import { useEffect, useRef } from 'react';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
```

---

## 🧠 Scenario: Tracking a Counter

### 🧾 Example Component

```js
import React, { useState } from 'react';

function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>Now: {count}</p>
      <p>Before: {prevCount}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
```

---

## ⚙️ How It Works

| Part            | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| `useRef()`      | Creates a persistent container that doesn't cause re-renders                |
| `useEffect()`   | Updates the ref after every render, capturing the current value             |
| `ref.current`   | Holds the previous value                                                    |

---

## ❓ Why Use It?

- To **compare current and previous values**
- Useful in:
  - State change tracking
  - Animation triggers
  - Scroll direction detection
  - Undo/redo logic
  - Custom logic based on changes

---

## 📍 Where and When to Use

| Use Case                     | Example                            |
|-----------------------------|-------------------------------------|
| Compare state changes        | Detect if count increased/decreased |
| Track prop changes           | Detect if a prop was updated        |
| Scroll position change       | Scroll direction logic              |
| Form diff detection          | Track changes from initial value    |
| Trigger conditional effects  | Run effects based on value change   |

---

## ✅ Pros

- Easy to implement and reuse
- Doesn’t cause re-renders
- Works with both state and props

## ❌ Cons

- Returns `undefined` on first render
- Needs to be written or imported (not built-in)
- Not ideal for real-time high-frequency updates

---

## 💡 Tip: Avoid Running on First Render

```js
const isFirstRender = useRef(true);

useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }

  // Safe to compare previous value here
}, [value]);
```

---

## 🧩 Reusable Utility

Create a reusable file:

**`usePrevious.js`**
```js
import { useEffect, useRef } from 'react';

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
```

---

## 🧬 Alternatives

| Approach                  | Drawback                        |
|---------------------------|----------------------------------|
| Direct `useRef` in comp   | Not reusable                    |
| State history in `useState` | Causes unnecessary re-renders   |
| Global store (Redux)      | Overkill for this purpose        |

---

## 🧠 Summary

- `usePrevious` is a handy pattern to remember previous values in React
- Excellent for logic that depends on detecting changes
- Keeps logic clean, avoids complex tracking hacks
