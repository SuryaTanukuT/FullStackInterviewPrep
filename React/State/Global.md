Here’s a crisp, structured breakdown of **Global State in React** — great for interviews, documentation, or quick reviews:

---

## 🌐 2. Global State in React

### 🧠 Explanation  
**Global state** refers to data that is shared and accessed across multiple components in your application. It ensures **consistency** and avoids deeply nested **prop drilling**.

> Managed using tools like:
- React Context API (built-in)
- Redux, Zustand, Recoil, MobX, Jotai (third-party libraries)

---

### 🧪 Example (React Context)

```jsx
const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme } = React.useContext(ThemeContext);
  return <div className={`theme-${theme}`}>The current theme is {theme}</div>;
}
```

### 🔍 Scenario  
A theme switcher in a UI where changing the theme (light/dark) should reflect **across all components** using that theme.

---

### ✅ Pros

- **Shared Access**:  
  Data like user info, settings, or language preferences can be accessed anywhere.

- **Consistency**:  
  Keeps related data in sync across multiple components.

- **Cleaner Code**:  
  Reduces prop drilling and centralizes logic.

---

### ❌ Cons

- **Complexity**:  
  Tools like Redux require setup (actions, reducers, store, etc.).

- **Performance Issues**:  
  Unoptimized global state changes can trigger unnecessary re-renders in many components.

---

### 📌 When, Why, and Where to Use

- **When**:  
  When data must be accessible by many unrelated components.

- **Why**:  
  To improve maintainability and reduce repeated logic.

- **Where**:
  - Authentication (e.g., logged-in user)
  - Theme toggling (dark/light)
  - Internationalization (i18n)
  - Notifications or toast systems
  - Shopping cart in e-commerce apps

---

### 📦 Polyfill/Compatibility

- No polyfills required for React Context or Redux.
- Use **Babel** if you need to transpile JSX and modern syntax for older environments.

---

Let me know if you want a comparison between **Local vs Global state**, **Redux vs Context**, or a visual diagram of how Context flows!