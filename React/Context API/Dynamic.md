Here’s a GitHub README-friendly Markdown file for **Dynamic Context**:

---

# 🔄 React Dynamic Context

## 🔍 Explanation

**Dynamic Context** refers to a context whose value **updates over time** in response to internal state changes or external events. When the context value changes, all consumers automatically re-render to reflect the latest state.

---

## ⚙️ Example: Dynamic Provider

```jsx
const ThemeContext = React.createContext();

function DynamicThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light');

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

---

## 🎯 Usage in a Consumer

```jsx
function ThemedButton() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <button className={`btn-${theme}`} onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}
```

---

## 💡 Scenario

An interactive UI theme switcher that lets users toggle between **light** and **dark** modes. The context dynamically changes, and all dependent components re-render to match the new theme.

---

## ✅ Pros and ❌ Cons

### ✅ Pros

- **Real-Time Updates**: Changes propagate instantly across the app.
- **User Interaction**: Components can update the global state with minimal effort.

### ❌ Cons

- **Performance**: High-frequency updates may cause unnecessary re-renders.
- **State Syncing**: Managing consistency across context consumers can be tricky.

---

## 📘 When, Why, and Where to Use

- **When**: The global state **changes over time** (e.g., theme, language, live updates).
- **Why**: Keeps the UI consistent and synchronized with dynamic events or user input.
- **Where**: Use in places like theme toggles, live dashboards, or user settings.

---

## 🌍 Polyfill / Compatibility

- **Compatibility**: Fully supported in **React 16.3+**.
- **Optimization Tip**: Use `React.useMemo()` to **memoize context values** and reduce unnecessary re-renders.

---

Would you like me to compile all three context patterns—**Default**, **Nested**, and **Dynamic**—into a single `.md` file for download or further editing?