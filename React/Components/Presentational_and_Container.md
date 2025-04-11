
```markdown
## 6. Presentational & Container Components

### 🧠 What They Are

This pattern separates **how things look** (UI) from **how things work** (logic):

- **Presentational Components**: Focus solely on the UI. Receive data via props and render HTML/JSX.
- **Container Components**: Handle data fetching, business logic, and state. Pass data to presentational components.

---

### ⚙️ Code Example

**🔹 Presentational Component (`TodoList`)**

```jsx
function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => onToggle(todo.id)}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
```

**🔸 Container Component (`TodoContainer`)**

```jsx
function TodoContainer() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a Todo App' }
  ]);

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return <TodoList todos={todos} onToggle={toggleTodo} />;
}
```

---

### 📘 Scenario

A Todo app where:
- `TodoContainer` manages state and logic.
- `TodoList` simply renders the todos and listens to click events via props.

---

### ✅ Pros and ❌ Cons

**Pros:**
- ✅ **Separation of Concerns**: Clear boundaries between logic and presentation.
- ✅ **Reusability**: Presentational components are highly reusable and testable.

**Cons:**
- ❌ **Over-Segmentation**: May introduce unnecessary layers for simple features.
- ❌ **Extra Boilerplate**: More components and files to manage.

---

### 📍 When, Why, and Where to Use

**📅 When to Use:**
- When your UI and logic can be cleanly separated.
- When scaling a medium-to-large React app.

**🤔 Why Use:**
- To improve maintainability, testability, and reusability.

**📍 Where to Use:**
- In apps with:
  - Lists and data-fetching UIs.
  - Forms with validation.
  - Shared visual components used in different logic contexts.

---

### 🧰 Polyfill / Compatibility

- ✅ No polyfill required.
- 🧱 This is a structural pattern you implement yourself using standard React features.

---

> 💡 Pro Tip: Pair presentational components with styling systems like Tailwind or styled-components, and keep container components focused on state, events, and effects.
```
