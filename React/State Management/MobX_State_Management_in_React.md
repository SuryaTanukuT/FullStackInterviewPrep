
# ⚙️ MobX: Reactive State Management for React

**MobX** is a powerful, simple, and scalable state management library that enables **reactive programming**. It automatically tracks which parts of your app use which state and updates only those parts when the state changes.

---

## 🧠 MobX Core Concepts

| Concept       | Description                                          |
|----------------|------------------------------------------------------|
| `observable`  | Makes state reactive                                 |
| `action`      | A function that mutates observable state             |
| `computed`    | Derives values from observable state                 |
| `observer`    | HOC or hook to make components react to observables  |
| `makeAutoObservable` | Automatically turns class properties reactive |

---

## 🏗️ MobX Architecture in React

1. **Observable state** is defined using `makeAutoObservable` or `observable`.
2. Components wrapped with `observer()` listen for changes.
3. **Actions** update the state.
4. MobX automatically handles dependency tracking and efficient re-renders.

---

## 🔁 Workflow

1. Create a store (`TodoStore`) with state and actions.
2. Use MobX's `observer` to wrap components.
3. Components reactively respond to changes in observables.

---

## 📁 Components in MobX App

| Component          | Role                                      |
|--------------------|-------------------------------------------|
| Store              | Holds observable state and logic          |
| UI Component       | Wrapped in `observer` to react to changes |
| Action Handlers    | Modify the observable state               |

---

## 📦 Why MobX?

- Simple to set up.
- Automatic tracking of state usage.
- No boilerplate reducers or dispatchers.
- Great for OOP-style (class-based) and function components.

---

## ❌ Why Not Others?

| Compared To | Reason You Might Prefer MobX                  |
|-------------|-----------------------------------------------|
| Redux       | Less boilerplate, no reducers, no action types|
| Recoil      | MobX has mature ecosystem and easier learning |
| Jotai       | MobX offers computed values, class integration|
| Zustand     | Zustand is simpler, but MobX is more powerful |

---

## 🛠️ Basic CRUD App with MobX + React

### 🧠 Store

```js
// todoStore.js
import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [];
  newTodo = "";

  constructor() {
    makeAutoObservable(this);
  }

  setNewTodo(value) {
    this.newTodo = value;
  }

  addTodo() {
    if (!this.newTodo.trim()) return;
    this.todos.push({ id: Date.now(), text: this.newTodo, done: false });
    this.newTodo = "";
  }

  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.done = !todo.done;
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}

export const todoStore = new TodoStore();
```

### 💻 App Component

```jsx
// App.js
import React from "react";
import { observer } from "mobx-react-lite";
import { todoStore } from "./todoStore";

const App = observer(() => {
  const { todos, newTodo, setNewTodo, addTodo, toggleTodo, deleteTodo } = todoStore;

  return (
    <div>
      <h1>MobX Todo</h1>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default App;
```

---

## ✅ Advantages

- 🔁 Automatic state tracking.
- ⚛️ Reactive and fast rendering.
- ✨ Clean and elegant syntax.
- 📚 Large ecosystem and documentation.

---

## 📌 Summary

MobX provides **automatic reactivity**, fine-grained control, and a smooth learning curve. It is ideal for apps that need **simple, scalable, and high-performance** state management with **minimal boilerplate**.
