Here’s a well-structured summary of **Event Handling in JSX**—great for interviews, quick reviews, or documentation:

---

## 🖱️ 5. Event Handling in JSX

### 📘 Definition
JSX allows attaching **event handlers** directly to elements using **camelCase syntax**, such as `onClick`, `onChange`, `onSubmit`, etc.

---

### ⚙️ How It Works

You pass **a reference to a function**, not the function’s return value.

```jsx
function ClickableButton() {
  const handleClick = () => alert('Button clicked!');
  return <button onClick={handleClick}>Click Me</button>;
}
```

---

### 🎯 Scenario

A simple button that displays an alert when clicked:

```jsx
function AlertButton() {
  const showAlert = () => alert('Button was clicked!');
  return <button onClick={showAlert}>Show Alert</button>;
}
```

---

### 🟢 Pros & 🔴 Cons

| Pros                            | Cons                                                                 |
|----------------------------------|----------------------------------------------------------------------|
| ✅ Declarative syntax           | 🔴 Inline anonymous functions can cause unnecessary re-renders       |
| ✅ Familiar JavaScript behavior | 🔴 Managing `this` in class components can be error-prone (less in hooks) |
| ✅ CamelCase consistency        |                                                                      |

---

### 🕵️‍♀️ When, Why, and Where to Use

- **When**: Any time you need to respond to user actions (clicks, input, hover, keypress).
- **Why**: To build interactive and dynamic UI components.
- **Where**: Buttons, forms, input fields, modals, etc.

---

### 📦 Polyfill & Compatibility

- **No polyfill needed**.
- React uses a **Synthetic Event System** for cross-browser consistency.
- Babel handles JSX transpilation.

---

### 🚨 Common Pitfall

#### ❌ Incorrect (calls function immediately on render):
```jsx
<button onClick={showAlert()}>Show</button>
```

#### ✅ Correct (passes function reference):
```jsx
<button onClick={showAlert}>Show</button>
```

---

### 🧠 Bonus Tips

- **Prevent default behavior**:
```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  // logic...
};
```

- **Inline functions vs extracted**:
  Use extracted functions when possible to improve readability and performance.

---

Let me know if you want class component examples, keyboard event handlers, or performance optimization tips!