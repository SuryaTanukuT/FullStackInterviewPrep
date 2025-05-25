
# Understanding useState vs useRef in React

React provides `useState` and `useRef` hooks for managing data in functional components. Each serves different purposes and has its own behavior regarding re-renders and mutability.

---

## 🔹 useState

### ✅ When to Use:
- When you need to **trigger a re-render** of the component on data change.
- Useful for managing UI-related state such as form inputs, visibility toggles, counters, etc.

### ⚠️ Behavior:
- **Immutable**: Updating state creates a new state value.
- **Triggers re-render**: Every `setState` causes a component to re-render.

### 📘 Example:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## 🔹 useRef

### ✅ When to Use:
- When you want to **persist a value without causing re-renders**.
- Useful for accessing DOM elements or storing mutable values like timers, previous props/state, etc.

### ⚠️ Behavior:
- **Mutable**: You can directly change `.current`.
- **Does NOT trigger re-render**: Updating the ref value does not cause the component to update.

### 📘 Example:

```jsx
import React, { useRef } from 'react';

function Timer() {
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => console.log('Tick'), 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
```

---

## 🆚 Summary: useState vs useRef

| Feature            | useState       | useRef           |
|--------------------|----------------|------------------|
| Triggers Re-render | ✅ Yes         | ❌ No            |
| Mutable            | ❌ No (immutable) | ✅ Yes         |
| DOM Access         | ❌ No          | ✅ Yes           |
| Use Case           | UI updates     | Timers, DOM refs |

---

## 📌 Conclusion

- Use **`useState`** for reactive data.
- Use **`useRef`** for persistent mutable data that doesn’t need to trigger renders.

