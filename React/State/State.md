Here’s a clean, structured, and interview-ready version of **"What is State in React?"** — ideal for quick review, documentation, or study notes:

---

## 🔁 What Is State in React?

### 🧠 Definition  
**State** is a built-in object in React that allows components to manage and respond to **dynamic data**. Unlike props (which are passed in), state is **internal** and **mutable**, meaning it can be changed within the component.

---

### 🗝️ Key Characteristics

- **Local and Mutable**:  
  State belongs to the component and can be updated over time.

- **Triggers Re-render**:  
  When state changes, the component **automatically re-renders** to reflect the new UI.

- **Asynchronous Updates**:  
  State updates may not happen instantly—they’re **batched** for performance.

- **Managed with Hooks or Classes**:  
  - Functional components → `useState`  
  - Class components → `this.state` + `this.setState()`

---

## ⚙️ How State Works: In-Depth

### 1️⃣ Initializing State

#### ✅ Functional Components (Using `useState`)
```jsx
function Counter() {
  const [count, setCount] = React.useState(0); // initial state
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

#### 🧱 Class Components
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // initial state
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

---

### 2️⃣ Updating State

#### ✅ Functional Component (Preferred way)
```jsx
setCount(prevCount => prevCount + 1); // recommended to use function form
```

#### 🧱 Class Component
```jsx
this.setState(prevState => ({ count: prevState.count + 1 }));
```

---

### 3️⃣ Asynchronous Nature of State

State updates are **not applied immediately**. They’re batched to improve performance.  
**Avoid** directly accessing updated state right after calling the updater.

> ✅ Always use the **functional form** of the updater if the new value depends on the old one.

---

## 📱 Real-World Example: Todo Application

```jsx
function TodoApp() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos(prevTodos => [...prevTodos, newTodo]); // ensure correct update
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
```

---

## ✅ When to Use State?

- When the UI **depends on changing data** (user input, timers, API calls)
- For **local component logic** (modals open/close, form inputs, toggle states)
- In any place where **re-rendering** needs to happen based on user action or async events

---

## ⚖️ Props vs. State (Quick Comparison)

| Feature     | Props               | State                    |
|-------------|---------------------|---------------------------|
| Immutable   | ✅ Yes              | ❌ No (mutable)           |
| Source      | Parent component     | Inside the component     |
| Use-case    | Data passed down     | Local, changing data      |
| Changeable  | No (read-only)       | Yes, via updater function |
| Re-render   | Yes (if changed)     | Yes                      |

---

Let me know if you want a cheat sheet version or visual diagram for this!