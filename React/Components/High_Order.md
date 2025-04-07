Here’s your section on **Higher-Order Components (HOC)** formatted for a polished GitHub-style `README.md`, consistent with the rest:

```markdown
## 4. Higher-Order Components (HOC)

### 🧠 What They Are
A **Higher-Order Component (HOC)** is a function that takes a component as input and returns a new component with **enhanced behavior**.  
HOCs allow **code reuse** and **separation of concerns** by abstracting common logic—like logging, authentication, or data fetching—into reusable wrappers.

---

### ⚙️ Code Example

```jsx
function withLogger(WrappedComponent) {
  return function (props) {
    console.log('Rendering with props:', props);
    return <WrappedComponent {...props} />;
  };
}
```

Usage:
```jsx
const EnhancedComponent = withLogger(MyComponent);
```

---

### 📘 Scenario

You're building a large app and want to **log props** of multiple components during development.  
Instead of modifying each component, you wrap them with `withLogger()`—a reusable HOC—so the logging happens automatically.

---

### ✅ Pros and ❌ Cons

**Pros:**
- 🔁 **Code Reuse:** Extract shared logic into a single function.
- 🧼 **Separation of Concerns:** Keeps components focused and decluttered.

**Cons:**
- 🧅 **Wrapper Hell:** Multiple HOCs can deeply nest your component tree.
- ⚠️ **Naming Conflicts:** Must manage `props` carefully to avoid clashes.

---

### 📍 When, Why, and Where to Use

**📅 When to Use:**
- When multiple components require the **same logic or behavior** (e.g., auth, tracking, error handling).

**🤔 Why Use:**
- To **avoid duplication** and **maintain consistency** across components.

**📍 Where to Use:**
- In features like:
  - ✅ Authentication
  - 📈 Logging
  - 🛠️ Error boundaries
  - 📡 Data fetching wrappers

---

### 🧰 Polyfill / Compatibility

- ✅ No polyfill needed.
- 📦 HOCs are just **standard JavaScript functions + JSX**.
- Compatible with all versions of React.

---

> ⚡ Pro Tip: Prefer **Hooks** for most modern use cases. HOCs still shine when enhancing class components or applying logic across many components cleanly.
```

Let me know when you're ready for the next section—or if you'd like me to stitch everything together into one full `README.md` file with a TOC!