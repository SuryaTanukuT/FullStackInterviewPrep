Here’s a complete GitHub-friendly `README.md` section for **Functional Components**, formatted consistently with the other sections in a clean and structured way:

```markdown
## 1. Functional Components

### 🧠 What They Are
**Functional components** are plain JavaScript functions that accept `props` and return JSX. Once considered “stateless,” they now fully support **state** and **side effects** using **React Hooks** like `useState`, `useEffect`, and more.

---

### ⚙️ Code Example

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

---

### 📘 Scenario

Imagine a **greeting banner** on a homepage:
- A functional component like `Greeting` renders a personalized welcome message using a user's name from props.
- Simple, fast, and reusable!

---

### ✅ Pros and ❌ Cons

**Pros:**
- 🧼 **Simplicity:** Clean syntax with minimal boilerplate.
- 🪝 **Hooks:** Full access to features like `useState`, `useEffect`, etc.
- ⚡ **Performance:** Typically lighter and more optimized by React tools.

**Cons:**
- 🏛️ **Historical Limitations:** Prior to Hooks (pre-React 16.8), functional components couldn't manage state or lifecycle logic.
- 🔁 **Migration Overhead:** Older projects may still rely on class components.

---

### 📍 When, Why, and Where to Use

**📅 When to Use:**
- Use them for **most components**—especially after React 16.8.

**🤔 Why Use:**
- Encourages **clean code**, **modularity**, and aligns with **modern React patterns**.

**📍 Where to Use:**
- From simple **labels**, **headers**, and **buttons** to full-featured **interactive modules** and **containers**.

---

### 🧰 Polyfill / Compatibility

- No special polyfill required.
- If targeting older browsers (like IE11), ensure you're using **Babel** to transpile modern JavaScript into compatible code.
