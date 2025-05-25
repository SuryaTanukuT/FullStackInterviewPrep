
# 🧬 Recoil: State Management for React

**Recoil** is a state management library for React built by Facebook. It provides a way to manage shared state with a minimal API, supports derived state, and integrates seamlessly with React's Concurrent Mode.

---

## 🧠 Core Concepts

| Concept          | Description                                                  |
|------------------|--------------------------------------------------------------|
| **Atom**         | Units of state that components can subscribe to              |
| **Selector**     | Pure functions that derive state from atoms or other selectors |
| **useRecoilState** | Hook to read/write atom state                             |
| **useRecoilValue** | Hook to read atom/selector value                          |
| **useSetRecoilState** | Hook to write to atom without reading                  |
| **RecoilRoot**   | Provider that wraps your application                         |

---

## 🏗️ Recoil Architecture in React

1. Define **atoms** for shared or local state.
2. Use **selectors** for computed state.
3. Components access atoms using **Recoil hooks**.
4. All components consuming the atom **re-render only when that atom changes**.

---

## 🔁 Recoil Workflow

1. Wrap app in `<RecoilRoot>`.
2. Define atoms/selectors.
3. Use `useRecoilState`, `useRecoilValue`, or `useSetRecoilState` in components.
4. State updates flow reactively to subscribed components.

---

## 🧩 Why Recoil?

- Fine-grained component subscriptions.
- Derived/computed state via selectors.
- Built for Concurrent Mode and React’s async future.
- Easy mental model similar to React's own `useState`.

---

## ❌ Why Not Others?

| Library     | Why Choose Recoil                          |
|-------------|---------------------------------------------|
| Redux       | Less boilerplate, async state is simpler    |
| MobX        | More predictable and declarative             |
| Jotai       | Recoil has more ecosystem and flexibility    |
| Zustand     | Zustand is simpler, Recoil offers more power|

---

## 🛠️ Basic CRUD App Using Recoil

### 📦 State (store.js)

```js
// store.js
import { atom, selector } from 'recoil';

export const todosAtom = atom({
  key: 'todosAtom',
  default: []
});

export const newTodoAtom = atom({
  key: 'newTodoAtom',
  default: ''
});
```

### 💻 App Component

```jsx
// App.js
import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { todosAtom, newTodoAtom } from "./store";

function TodoApp() {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const [newTodo, setNewTodo] = useRecoilState(newTodoAtom);

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, done: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Recoil Todo</h1>
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
}

export default function App() {
  return (
    <RecoilRoot>
      <TodoApp />
    </RecoilRoot>
  );
}
```

---

## ✅ Advantages

- 🎯 Simple and scalable.
- 🔁 Fine-grained component updates.
- 🌐 Built for modern React features like Suspense and Concurrent Mode.
- 💡 Selectors make derived state management easy.

---

## 📌 Summary

**Recoil** is a powerful state management solution that blends React’s simplicity with advanced features like derived state and async support. It’s especially ideal for large apps that need **reactive and composable state logic**.
