Here’s the GitHub README-compatible Markdown version for **Nested Context**:

---

# 🌲 React Nested Context

## 🔍 Explanation

**Nested Context** means using multiple context `Provider`s layered within one another. This is helpful when managing **separate pieces of global state** that are relevant to different parts of your component tree.

---

## 🧱 Example

```jsx
const ThemeContext = React.createContext('light');
const UserContext = React.createContext({ name: 'Guest' });

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <UserContext.Provider value={{ name: 'Alice' }}>
        <Dashboard />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
```

---

## 📥 Consuming Nested Context

```jsx
function Dashboard() {
  const theme = React.useContext(ThemeContext);
  const user = React.useContext(UserContext);
  return (
    <div className={`theme-${theme}`}>
      <h1>Welcome, {user.name}</h1>
    </div>
  );
}
```

---

## 💡 Scenario

A dashboard displays both user-specific information and applies theming. One context handles the **current theme**, while another manages the **user data**. Keeping these concerns separate allows for better scalability and modularity.

---

## ✅ Pros and ❌ Cons

### ✅ Pros

- **Separation of Concerns**: Each context manages its own slice of state.
- **Flexibility**: Provides granular control over different state domains.

### ❌ Cons

- **Complexity**: Multiple nested providers can make the component tree harder to read.
- **Provider Hell**: Excessive nesting may require abstraction or custom composition patterns.

---

## 📘 When, Why, and Where to Use

- **When**: Your app has several **independent** pieces of global state (e.g., theme, auth, locale).
- **Why**: Keeps state management **modular** and avoids tightly coupling unrelated concerns.
- **Where**: Wrap providers **near the root** of the tree or within specific subtrees where context is needed.

---

## 🌍 Polyfill / Compatibility

- **Compatibility**: Supported out of the box in **React 16.3+**.
- **Best Practice**: Use **custom hooks** to simplify access and improve readability.

---

Would you like me to compile both `Default Context` and `Nested Context` sections into a single Markdown file?