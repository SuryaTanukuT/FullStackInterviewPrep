
# 🔁 Render Props Pattern in React

The **Render Props** pattern in React is a technique for **sharing code between components** using a prop whose value is a function. It allows for **dynamic rendering** of UI and logic reuse.

---

## 📖 What Is a Render Prop?

A **render prop** is a function prop that a component uses to know **what to render**.

```jsx
<MyComponent render={data => <ChildComponent {...data} />} />
```

---

## 🔧 Basic Example

```jsx
function DataProvider({ render }) {
  const [data, setData] = React.useState("Hello from provider");

  return render({ data });
}

function App() {
  return (
    <DataProvider render={({ data }) => <h1>{data}</h1>} />
  );
}
```

- `DataProvider` holds logic/state.
- `render` prop tells how to display the result.

---

## 🧠 Use Cases

- Sharing logic between multiple components.
- Dynamic rendering depending on logic outcome.
- Handling mouse events, authentication state, form handling, etc.

---

## 📦 Real-World Example: Mouse Tracker

```jsx
function MouseTracker({ render }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
    {render(position)}
  </div>;
}

function App() {
  return (
    <MouseTracker render={({ x, y }) => <h1>Mouse at ({x}, {y})</h1>} />
  );
}
```

---

## ✅ Benefits

- Great for **logic reuse**.
- Offers a **clean and flexible API**.
- Encourages separation of concerns.

---

## ❌ Drawbacks

- Can lead to **"callback hell"** or deeply nested components.
- Less readable when overused.
- Now often replaced by **Hooks** in functional components.

---

## 🆚 Render Props vs Alternatives

| Pattern            | Reusability | Readability | Modern Use |
|--------------------|-------------|-------------|------------|
| Render Props       | ✅ High     | ⚠️ Medium   | ⚠️ Moderate |
| Higher Order Comp. | ✅ High     | ⚠️ Low      | ❌ Legacy   |
| Hooks              | ✅ High     | ✅ High     | ✅ Preferred|

---

## 🔄 Refactor with Hooks

Render props logic can often be moved into **custom hooks** for cleaner usage:

```jsx
function useMousePosition() {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    const handle = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);
  return pos;
}
```

```jsx
function App() {
  const { x, y } = useMousePosition();
  return <h1>Mouse at ({x}, {y})</h1>;
}
```

---

## 📌 Summary

- The **Render Props Pattern** allows code reuse by passing a render function to a component.
- It improves flexibility but can be verbose.
- For modern React, **Hooks** are the preferred alternative.
