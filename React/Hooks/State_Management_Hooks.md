Here’s a GitHub-friendly **Markdown** version for your **“State Management Hooks”** section, ideal for documentation, notes, or interviews:

---

# 🔄 2. State Management Hooks in React

## 📖 Explanation

React provides two core hooks for managing **local component state**:

---

### 🧠 `useState`

- The **simplest** way to manage local state in functional components.
- Ideal for small, isolated pieces of state (e.g., toggles, counters, form inputs).

---

### 🧰 `useReducer`

- Great for **complex state logic**, especially when multiple state transitions are needed.
- Similar to how **Redux** works — uses a reducer function to update state.

---

## 💻 Code Examples

### ✅ Using `useState`

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
}
```

---

### 🔁 Using `useReducer`

```jsx
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [count, dispatch] = React.useReducer(counterReducer, 0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

---

## 🧩 Scenario

You're building a **counter widget** for a dashboard:

- ✅ Use `useState` for a **simple counter**.
- ⚙️ Use `useReducer` when managing **multiple state transitions** or **complex logic** (e.g., reset, step size, logging actions).

---

## ✅ Pros

- **Simplicity (`useState`)**: Quick and easy to set up.
- **Scalability (`useReducer`)**: Handles complex updates with clear logic.
- **Isolation**: Keeps state self-contained within components.

---

## ⚠️ Cons

- **Re-renders**: Updating state triggers re-renders; optimize when needed.
- **Boilerplate (`useReducer`)**: Adds more code for setup, especially for simple use cases.

---

## 🧠 When, Why, and Where

| Hook       | Use When...                                   |
|------------|-----------------------------------------------|
| `useState` | State is simple, isolated, or form-related.   |
| `useReducer` | State transitions are complex or event-driven. |

---

- **Why**: To manage state in **functional components** without classes.
- **Where**: In forms, UI controls, widgets, toggles, counters, etc.

---

## 🛠 Polyfill / Compatibility

- ✅ No polyfill required.
- Supported from **React 16.8+**.
- Ensure modern JavaScript support via **Babel** or similar tools for older environments.

---

Let me know if you want to combine this with previous hooks into a single doc or continue section-by-section!