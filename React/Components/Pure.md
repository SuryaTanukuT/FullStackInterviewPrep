
```markdown
## 3. Pure Components

### 🧠 What They Are
**Pure components** help optimize performance by avoiding unnecessary re-renders.  
- In **class components**, you extend `React.PureComponent`.
- In **functional components**, you wrap them with `React.memo`.

They use **shallow comparison** of `props` and `state` to determine whether a re-render is necessary.

---

### ⚙️ Code Example

**Class-based:**
```jsx
class PureGreeting extends React.PureComponent {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

**Functional (with React.memo):**
```jsx
const PureGreeting = React.memo(function ({ name }) {
  return <h1>Hello, {name}!</h1>;
});
```

---

### 📘 Scenario

You’re rendering a **list of user profiles** that rarely change.  
By using a pure component, React will skip re-rendering these list items if the props are the same, improving overall performance.

---

### ✅ Pros and ❌ Cons

**Pros:**
- ⚡ **Performance:** Avoids unnecessary renders using shallow comparisons.
- 🧩 **Reusable:** Easy to implement across both class and functional components.

**Cons:**
- 🌊 **Shallow Comparison Limitation:** Won’t detect changes in deeply nested objects.
- 🧠 **Potential Overhead:** Must manage immutability carefully—wrong usage can skip needed updates.

---

### 📍 When, Why, and Where to Use

**📅 When to Use:**
- When component `props` change infrequently.
- In **performance-critical** parts of the UI.

**🤔 Why Use:**
- To improve performance and reduce re-rendering in large apps.

**📍 Where to Use:**
- In **lists**, **grids**, or **dashboards** with many components.
- In **child components** of frequently updating parents.

---

### 🧰 Polyfill / Compatibility

- ✅ No polyfill required.
- 🧬 Supported in **React 15.3+** for `PureComponent`.
- 🔁 `React.memo` is available from **React 16.6+**.

---

> 💡 Tip: Combine `PureComponent` or `React.memo` with **immutable data structures** to make them most effective.
```