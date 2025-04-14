
---

# 🧲 3. DOM Interaction Hooks in React

## 📖 Explanation

DOM interaction hooks are used when you need to **directly interact with DOM elements** — for tasks like focusing inputs, scrolling, or measuring layout.

---

### 🔑 `useRef`

- **Persists a mutable reference** across renders.
- Most commonly used to **reference DOM elements**.

---

### 🛠 `useImperativeHandle`

- Used with `forwardRef` to **expose custom functions** from a child to a parent.
- Helps **control what gets exposed** when using `ref` with child components.

---

## 💻 Code Example

### ✅ Using `useRef` for DOM Access

```jsx
function FocusableInput() {
  const inputRef = React.useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

---

## 🧩 Scenario

A **form** where the first input should receive focus after a button click or when the component mounts.

---

## ✅ Pros

- **Direct Access**: Interact with native DOM elements (like `input.focus()`).
- **Persistence**: Maintains values without causing re-renders.

---

## ⚠️ Cons

- **Imperative Code**: Can break React’s declarative paradigm if overused.
- **Maintenance**: Can become messy if tightly coupled with state updates.

---

## 🧠 When, Why, and Where

| Use Case                     | Hook            |
|-----------------------------|------------------|
| Focusing input fields       | `useRef`         |
| Triggering scroll behavior  | `useRef`         |
| Exposing methods to parents | `useImperativeHandle` |

- **When**: DOM interaction is necessary (e.g., animations, focus, measurements).
- **Why**: Declarative React has limits — refs give you a way to escape that when needed.
- **Where**: Forms, animations, tooltips, integrations with non-React libraries.

---

## 🛠 Polyfill / Compatibility

- ✅ No polyfill needed.
- Fully supported in **React 16.8+**.

---

