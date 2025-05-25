
# 🧱 Composition Pattern in React

**Composition Pattern** in React is the idea of building complex UIs by combining simpler, reusable components rather than relying on inheritance.

React embraces **composition over inheritance**.

---

## 🔄 What Is Component Composition?

- It’s about **passing components as children or props** to other components.
- Promotes **reusability**, **flexibility**, and **separation of concerns**.

---

## 🧩 Basic Example

```jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

function App() {
  return (
    <Card title="Hello">
      <p>This is card content</p>
    </Card>
  );
}
```

---

## 🎯 Use Cases

### 1. **Children as Props**
```jsx
function Layout({ children }) {
  return <div className="layout">{children}</div>;
}
```

### 2. **Render Props Pattern**
```jsx
function DataFetcher({ render }) {
  const data = { name: "Adinarayana" };
  return render(data);
}

function App() {
  return (
    <DataFetcher render={(data) => <h1>{data.name}</h1>} />
  );
}
```

### 3. **Slot Pattern using Props**
```jsx
function Dialog({ header, footer, children }) {
  return (
    <div className="dialog">
      <div>{header}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  );
}
```

---

## ✅ Advantages

- More flexible than class inheritance.
- Promotes reuse of logic and layout.
- Easier to test and maintain.
- Works naturally with functional components.

---

## ❌ Disadvantages

- Can become complex with deeply nested children.
- Overuse of `children` and render props may reduce readability.

---

## 🆚 Composition vs Inheritance

| Feature            | Composition                       | Inheritance                    |
|--------------------|-----------------------------------|-------------------------------|
| Flexibility        | High (combine any components)     | Limited to class hierarchies  |
| Recommended        | ✅ Yes (React philosophy)         | ❌ No (discouraged in React)  |
| Logic Sharing      | Props, hooks, HOCs, render props  | Shared base classes           |
| Component Reuse    | High                              | Low                           |

---

## 📌 Summary

- React uses composition to assemble components together.
- Use `props.children` or render props to create flexible APIs.
- Avoid inheritance; prefer combining small components.
