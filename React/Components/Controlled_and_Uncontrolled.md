
```markdown
## 5. Controlled and Uncontrolled Components

### 🧠 What They Are

These two patterns are primarily used in handling **form inputs** in React:

- **Controlled Components**: State is fully managed by React. Input values are bound to state variables and updated via `onChange` handlers.
- **Uncontrolled Components**: The DOM maintains the state internally. React accesses the value using `refs` only when needed.

---

### ⚙️ Code Examples

**🔹 Controlled Input**

```jsx
function ControlledInput() {
  const [value, setValue] = React.useState('');
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type here..."
    />
  );
}
```

**🔸 Uncontrolled Input**

```jsx
function UncontrolledInput() {
  const inputRef = React.useRef();
  const handleSubmit = () => {
    console.log('Input value:', inputRef.current.value);
  };
  return (
    <>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

---

### 📘 Scenario

- **Controlled**: A login form that validates as you type (e.g., checking password strength).
- **Uncontrolled**: A file input or simple form where you only need the data at submission time.

---

### ✅ Pros and ❌ Cons

**Controlled Components:**
- ✅ Single source of truth (React state).
- ✅ Easy validation, transformation, and debugging.
- ❌ More boilerplate and potential re-renders.

**Uncontrolled Components:**
- ✅ Simpler and less code for basic needs.
- ❌ Less control and harder to scale or validate.

---

### 📍 When, Why, and Where to Use

**📅 When to Use:**
- Use **controlled components** when you need validation, live updates, or to manage form state globally.
- Use **uncontrolled components** when handling basic input that's accessed only on form submission.

**🤔 Why Use:**
- Controlled = **Precision and control**.
- Uncontrolled = **Simplicity and speed**.

**📍 Where to Use:**
- 🔐 Controlled: Login forms, search bars, filters.
- 📤 Uncontrolled: File uploads, feedback popups.

---

### 🧰 Polyfill / Compatibility

- ✅ No polyfill required.
- 🧱 These patterns are built-in to React and compatible across versions.

---

> ⚡ Tip: Use controlled components for anything that needs real-time validation or centralized form handling. Stick to uncontrolled ones for low-stakes inputs.
```
