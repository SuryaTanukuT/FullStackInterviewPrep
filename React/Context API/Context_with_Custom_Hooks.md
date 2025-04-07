Here's a GitHub-friendly Markdown version for **Context with Custom Hooks**, following the same format as the previous ones:

---

# 🪝 React Context with Custom Hooks

## 🔍 Explanation

**Custom hooks** can encapsulate context access logic to create a **cleaner and more reusable API**. This pattern wraps the `useContext` call in a named hook and can bundle in error handling or side logic for better DX (developer experience).

---

## 🧱 Example: Creating a Custom Hook

```jsx
const ThemeContext = React.createContext();

// Create a custom hook to consume ThemeContext
function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
```

---

## 🎯 Usage in a Component

```jsx
function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={`header-${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Switch Theme</button>
    </header>
  );
}
```

---

## 💡 Scenario

In a large application with multiple components needing access to the **theme context**, using `useContext` everywhere becomes repetitive. A custom hook like `useTheme()` provides a **descriptive and safe** interface for accessing and updating theme values.

---

## ✅ Pros and ❌ Cons

### ✅ Pros

- **Reusability**: Promotes DRY (Don't Repeat Yourself) principles.
- **Error Handling**: Ensures context is used only within its corresponding Provider.
- **Abstraction**: Hides context boilerplate and centralizes logic.

### ❌ Cons

- **Abstraction Overhead**: Introduces another layer developers must understand.
- **Potential Misuse**: If undocumented, developers might not know the hook's purpose or limitations.

---

## 📘 When, Why, and Where to Use

- **When**: The same context is accessed in **multiple** places across your app.
- **Why**: To make consuming context easier and reduce duplication.
- **Where**: In apps with shared state across components—like theme, auth, or user settings.

---

## 🌍 Polyfill / Compatibility

- **Compatibility**: Built using **standard React hooks**; no polyfill required.
- **Best Practice**: Document the custom hook usage to improve collaboration and understanding across the team.

---

✅ Let me know if you’d like all 4 sections bundled into one `.md` file or displayed in a combined document right here.