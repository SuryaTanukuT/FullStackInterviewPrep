...data is fetched, it calls the render prop function (provided by `App`) and passes the fetched `data` and `loading` state.

The `App` component uses that data to conditionally render either a **loading message** or the **Chart** component.

---

## ✅ Summary: **Render Props in React**

---

### 🧠 **What Are Render Props?**

A **Render Prop** is a function prop that a component uses to know *what to render*.  
It enables **code reuse** and **decouples logic from UI**, by letting consumers decide how data should be rendered.

---

### 🧩 **How It Works**

| Concept                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Stateful Component** | Manages data, events, side effects (like fetching or subscriptions).        |
| **Render Prop**        | Passed as `children` or a `render` prop. It's a function returning JSX.     |
| **Consumer Control**   | The consumer decides how to render using the passed state/props.            |

---

### ⚙️ **Code Pattern**

```jsx
// Logic Component
class Example extends React.Component {
  state = { count: 0 };

  render() {
    return this.props.children({
      count: this.state.count,
      increment: () => this.setState({ count: this.state.count + 1 })
    });
  }
}

// Usage
<Example>
  {({ count, increment }) => (
    <button onClick={increment}>Clicked {count} times</button>
  )}
</Example>
```

---

### ✅ **Pros**

- **Reusability**: Extract shared logic (e.g., fetching, toggling, forms).
- **Separation of Concerns**: Keeps logic separate from UI rendering.
- **Flexibility**: Consumers have full control over rendering.

---

### ❌ **Cons**

- **Verbose Syntax**: Lots of inline functions = harder readability.
- **Prop Drilling Risk**: Can become complex in deeply nested components.
- **Performance**: New function instances on every render can affect performance.

---

### 🧭 **When & Where to Use**

| Use Case                     | Render Props Advantage                            |
|-----------------------------|----------------------------------------------------|
| **Data Fetching**            | Reuse the logic, render different UIs              |
| **Mouse or Scroll Tracking** | Share event/state logic with multiple components   |
| **Toggles, Timers, Forms**   | Provide behavior control via function as child     |

---

### ⚖️ **Render Props vs HOCs**

| Feature             | Render Props                             | HOCs                                        |
|---------------------|-------------------------------------------|---------------------------------------------|
| Syntax Style        | Inline function as a child                | Function that returns an enhanced component |
| Readability         | Harder with nesting                      | Cleaner structure, easier to wrap           |
| Flexibility         | More flexible — dynamic rendering logic  | Better for static logic reuse               |

---

### 🧱 Real-World Patterns Based on Render Props

- **React Router’s `<Route>`**  
  Accepts a function as a child to control rendering.
- **Form Libraries (e.g., Formik)**  
  Exposes form state via render props.

---
