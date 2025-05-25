# ⚛️ Composition in ReactJS – Developer Guide

---

## 📘 What is Composition in React?

**Composition** is a design pattern in React that allows you to build complex UIs from **smaller, reusable components**. Instead of using inheritance, React promotes component composition as the primary way to reuse code.

---

## 🎯 Why Use Composition?

- Promotes **separation of concerns**
- Encourages **code reuse**
- Makes components more **flexible** and **testable**
- Helps avoid "prop drilling"

---

## 🧱 Basic Example

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h1>Hello World</h1>
      <p>This is inside a card</p>
    </Card>
  );
}
```

---

## 🧩 Component Composition Patterns

### 1. **Children Prop**
Common pattern for wrapping content.

```jsx
function Layout({ children }) {
  return <main>{children}</main>;
}
```

### 2. **Slots (Custom Named Props)**

```jsx
function Dialog({ header, body, footer }) {
  return (
    <div>
      <div>{header}</div>
      <div>{body}</div>
      <div>{footer}</div>
    </div>
  );
}

<Dialog
  header={<h1>Title</h1>}
  body={<p>Message</p>}
  footer={<button>Close</button>}
/>
```

### 3. **Function as Children (Render Props)**

```jsx
function MouseTracker({ children }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={e => setPos({ x: e.clientX, y: e.clientY })}>
      {children(pos)}
    </div>
  );
}

<MouseTracker>
  {({ x, y }) => <p>Mouse at {x}, {y}</p>}
</MouseTracker>
```

---

## ✅ Pros of Composition

- Reusable logic and UI
- Clear boundaries
- Works well with hooks
- Encourages modular architecture

---

## ❌ Potential Cons

- Overuse can lead to deeply nested components
- Harder to trace logic if not well-documented

---

## 🧠 Composition vs Inheritance

| Aspect        | Composition                     | Inheritance             |
|---------------|----------------------------------|--------------------------|
| Reuse Style   | Combine smaller components       | Extend base class        |
| Flexibility   | High                             | Low                      |
| React Style   | Recommended                      | Not recommended          |

---

## 🛠 Practical Use Cases

- Reusable layout components (Card, Modal)
- Slot-based UIs (Dialog, Tabs)
- Render prop utilities (animations, mouse tracking)

---

React composition is a powerful, declarative pattern that makes your code **cleaner**, **more maintainable**, and **easier to scale**. Favor composition over inheritance to embrace idiomatic React design.
