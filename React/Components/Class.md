
```markdown
## 2. Class Components

### 🧠 What They Are
**Class components** are ES6 classes that extend `React.Component`. They provide built-in support for **state** and **lifecycle methods** like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

---

### ⚙️ Code Example

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

---

### 📘 Scenario

Consider a **legacy application** that uses React pre-Hooks. If you need to:
- Handle component mounting or unmounting
- Use **error boundaries**
  
...you’ll need class components (as error boundaries are currently class-only).

---

### ✅ Pros and ❌ Cons

**Pros:**
- ⏳ **Lifecycle Methods:** Easy access to component lifecycle events.
- 🏛️ **Legacy Friendly:** Familiar to teams using older versions of React.

**Cons:**
- 📜 **Verbose Syntax:** Requires more boilerplate than functional components.
- 🧠 **Binding Complexity:** Managing `this` can lead to subtle bugs.

---

### 📍 When, Why, and Where to Use

**📅 When to Use:**
- In **older codebases**
- When using **error boundaries** or specific **lifecycle methods**

**🤔 Why Use:**
- For **fine-grained lifecycle control**
- To **maintain consistency** in legacy applications

**📍 Where to Use:**
- In **critical components** needing precise mounting/unmounting behavior
- In **error-handling wrappers**

---

### 🧰 Polyfill / Compatibility

- No specific polyfill required.
- Use **Babel** to transpile ES6 class syntax for older browser support (e.g., IE11).

---

> ⚠️ Note: Class components are fully supported, but the React community now recommends functional components with Hooks for most use cases.
```
