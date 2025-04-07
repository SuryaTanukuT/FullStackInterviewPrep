Here's the GitHub-friendly Markdown version for **Reducer-Based Context**, ready to be used in a README:

---

# 🔧 React Reducer-Based Context

## 🔍 Explanation

**Reducer-based Context** combines React's `useReducer` hook with the Context API to manage **complex state logic**. It’s similar to Redux in concept and is ideal when your context must handle **multiple state transitions**.

---

## ⚙️ Example: Reducer with Context

```jsx
// Define actions and reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

// Create Context
const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [state, dispatch] = React.useReducer(themeReducer, { theme: 'light' });
  
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

---

## 🎯 Usage in a Consumer Component

```jsx
function ThemedHeader() {
  const { state, dispatch } = React.useContext(ThemeContext);

  return (
    <header className={`header-${state.theme}`}>
      <h1>My App</h1>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Switch Theme
      </button>
    </header>
  );
}
```

---

## 💡 Scenario

You have a global theme that can be toggled, set, or reset—possibly in different parts of the application. Using a reducer makes it easier to manage this logic **in one place**.

---

## ✅ Pros and ❌ Cons

### ✅ Pros

- **Scalability**: Manages more complex state flows with ease.
- **Predictability**: Reducers are pure functions, great for debugging and testing.
- **Separation of Concerns**: Keeps logic out of UI components.

### ❌ Cons

- **Boilerplate**: Introduces more setup with actions and reducer logic.
- **Learning Curve**: Requires familiarity with the reducer pattern.

---

## 📘 When, Why, and Where to Use

- **When**: Global state logic grows in complexity (e.g., multiple actions, conditional logic).
- **Why**: Reduces scattered state logic and improves maintainability.
- **Where**: Ideal for auth flows, theme systems, multi-step forms, or large-scale apps.

---

## 🌍 Polyfill / Compatibility

- **Compatibility**: Fully supported in **React 16.8+** (hooks required).
- **Transpilation**: Use Babel if targeting older browsers that lack ES6+ support.

---

Would you like me to now compile all **5 context patterns** into a single `.md` file and send it as a downloadable resource?