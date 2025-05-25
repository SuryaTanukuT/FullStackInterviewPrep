
# 🧩 Compound Component Pattern in React

The **Compound Component Pattern** allows multiple components to work together as a single unit, where the parent component controls shared state and child components communicate implicitly.

---

## 🔧 Why Use It?

- Allows better API design for reusable components.
- Enables flexible and declarative composition.
- Ideal for UI components like Tabs, Accordions, Dropdowns, etc.

---

## 📁 Example: Tabs Using Compound Component Pattern

### ✅ Usage

```jsx
<Tabs>
  <Tabs.Tab label="Home">Home Content</Tabs.Tab>
  <Tabs.Tab label="Profile">Profile Content</Tabs.Tab>
</Tabs>
```

### 🛠️ Implementation

```jsx
function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div>
      <div className="tab-buttons">
        {React.Children.map(children, (child, index) => (
          <button onClick={() => setActiveIndex(index)}>{child.props.label}</button>
        ))}
      </div>
      <div className="tab-content">
        {children[activeIndex]}
      </div>
    </div>
  );
}

Tabs.Tab = function Tab({ children }) {
  return <div>{children}</div>;
};
```

---

## 🔑 Key Concepts

- **Parent**: Manages shared state.
- **Children**: Receive data implicitly (through context or props).
- Children components are **static subcomponents** of the parent.

---

## 🌟 Benefits

- Highly declarative and intuitive API.
- Clean encapsulation of internal state logic.
- Encourages modular and reusable code.

---

## ⚠️ Drawbacks

- More complex to implement than basic props/state passing.
- Not beginner-friendly for deeply nested logic.
- May need React Context API for more dynamic communication.

---

## 🆚 Comparison with Other Patterns

| Pattern                  | Shared State | Flexibility | Complexity |
|--------------------------|--------------|-------------|------------|
| Compound Component       | ✅ Yes       | ✅ High     | ⚠️ Medium  |
| Render Props             | ✅ Yes       | ✅ High     | ⚠️ High    |
| HOC (Higher Order Comp.) | ✅ Yes       | ⚠️ Medium   | ⚠️ High    |
| Children as Props        | ❌ No        | ✅ Medium   | ✅ Low     |

---

## 🧠 When to Use

- Reusable UI components like dropdowns, tabs, modals.
- When multiple components share behavior or context.
- When you want consumers to use a **clean and declarative API**.

---

## 📌 Summary

- Compound components let you build flexible components using static subcomponents.
- Parent maintains logic, children remain unaware of the underlying implementation.
- Great for elegant, declarative APIs in component libraries.
