
# 🧭 Container-Presentational Pattern and Hooks in React

The **Container-Presentational Pattern** is a design principle that separates logic (data fetching, state) from UI rendering (presentation). With React Hooks, this pattern has evolved into a more functional and reusable form.

---

## 🧱 What Is the Pattern?

### 🔹 Presentational Component (UI)
- Focuses on **how things look**.
- Receives data and callbacks via props.
- Typically functional, stateless.

### 🔹 Container Component (Logic)
- Focuses on **how things work**.
- Manages state, handles logic, API calls.
- Passes props to Presentational components.

---

## 🎯 Example

### ✅ Presentational Component

```jsx
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

### ✅ Container Component

```jsx
function UserListContainer() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return <UserList users={users} />;
}
```

---

## 🧠 How Hooks Improve the Pattern

Hooks make it easier to extract logic into reusable units, improving testability and reusability.

### ✅ Custom Hook

```jsx
function useUsers() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return users;
}
```

### ✅ Using Custom Hook in Container

```jsx
function UserListContainer() {
  const users = useUsers();
  return <UserList users={users} />;
}
```

---

## ✅ Benefits

- Clear separation of concerns.
- Improves reusability and readability.
- Easier unit testing for logic (via hooks).
- Hooks reduce boilerplate in container components.

---

## ❌ Drawbacks

- More components and files to manage.
- Slightly verbose for small-scale apps.
- Can lead to prop drilling if not managed well.

---

## 🔌 When to Use

- Any reusable UI component with complex logic.
- Shared logic across multiple components.
- When building maintainable, testable UIs.

---

## 🆚 Pattern Comparison

| Pattern                      | With Classes           | With Hooks                     |
|------------------------------|------------------------|--------------------------------|
| Container-Presentational     | Higher-order components| Hooks + custom hooks           |
| State Management             | `this.state`           | `useState`, `useReducer`       |
| Logic Sharing                | Inheritance/HOC        | Hooks                          |
| Reusability                  | Medium                 | High                           |

---

## 📌 Summary

- Use the Container-Presentational Pattern to **separate concerns**.
- Move logic into **custom hooks** for reusability and cleaner containers.
- Hooks make the pattern more modern, composable, and function-oriented.
