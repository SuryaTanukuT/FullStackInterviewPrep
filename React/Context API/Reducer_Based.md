
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

Would you like me to now compile all **5 context patterns** into a single?

# ⚛️ React Context API – 5 Pattern Combo Example

This example combines **five distinct Context API patterns** into one project to help you master advanced state sharing and management across components.

---

## 📚 Patterns Covered

1. ✅ **Default Context** – Global constants
2. 🔁 **Dynamic Context** – Mutable state and setters
3. 🎨 **Nested Context** – Theme/locale scoped at component level
4. 🧱 **Derived Context** – Computed values based on context state
5. 🔗 **Dependent Context** – Contexts depending on values from others

---

## 🗂️ Folder Structure

```
App.js
contexts/
  ConfigContext.js       // Default context
  UserContext.js         // Dynamic context
  ThemeContext.js        // Nested context
  AuthContext.js         // Derived context
  LocaleContext.js       // Dependent context
components/
  Section.js
```

---

## 1️⃣ `ConfigContext.js` — Default Context

```jsx
import React, { createContext, useContext } from "react";

const ConfigContext = createContext({ appName: "MyApp", version: "1.0" });

export const useConfig = () => useContext(ConfigContext);

export const ConfigProvider = ({ children }) => {
  const config = { appName: "MyApp", version: "1.0" };
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};
```

---

## 2️⃣ `UserContext.js` — Dynamic Context

```jsx
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
```

---

## 3️⃣ `ThemeContext.js` — Nested Context

```jsx
import React, { createContext, useContext } from "react";

const ThemeContext = createContext("light");

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ theme, children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
```

---

## 4️⃣ `AuthContext.js` — Derived Context

```jsx
import React, { createContext, useContext } from "react";
import { useUser } from "./UserContext";

const AuthContext = createContext(false);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const { user } = useUser();
  const isAuthenticated = !!user;

  return <AuthContext.Provider value={isAuthenticated}>{children}</AuthContext.Provider>;
};
```

---

## 5️⃣ `LocaleContext.js` — Dependent Context

```jsx
import React, { createContext, useContext, useState } from "react";
import { useConfig } from "./ConfigContext";

const LocaleContext = createContext();

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider = ({ children }) => {
  const { region } = useConfig(); // depends on config context
  const [locale, setLocale] = useState(region === "IN" ? "hi-IN" : "en-US");

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
```

---

## 🧩 `Section.js`

```jsx
import React from "react";
import { useConfig } from "../contexts/ConfigContext";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";
import { useAuth } from "../contexts/AuthContext";
import { useLocale } from "../contexts/LocaleContext";

const Section = () => {
  const config = useConfig();
  const theme = useTheme();
  const { user, login, logout } = useUser();
  const isAuthenticated = useAuth();
  const { locale } = useLocale();

  return (
    <div style={{ padding: 20, background: theme === "dark" ? "#222" : "#f5f5f5" }}>
      <h2>{config.appName} v{config.version}</h2>
      <p>Theme: {theme}</p>
      <p>Locale: {locale}</p>
      <p>Auth: {isAuthenticated ? "✅ Logged in" : "❌ Guest"}</p>
      <p>User: {user?.name ?? "No user"}</p>
      <button onClick={() => login({ name: "Alice" })}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Section;
```

---

## 🧪 `App.js` — Combine Everything

```jsx
import React from "react";
import { ConfigProvider } from "./contexts/ConfigContext";
import { UserProvider } from "./contexts/UserContext";
import { AuthProvider } from "./contexts/AuthContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Section from "./components/Section";

const App = () => {
  return (
    <ConfigProvider>
      <UserProvider>
        <AuthProvider>
          <LocaleProvider>
            <ThemeProvider theme="dark">
              <Section />
            </ThemeProvider>
          </LocaleProvider>
        </AuthProvider>
      </UserProvider>
    </ConfigProvider>
  );
};

export default App;
```

---

## ✅ What You’ve Learned

| Pattern        | Purpose                                             |
|----------------|-----------------------------------------------------|
| Default        | Provide static values globally                      |
| Dynamic        | Share state + state setters                         |
| Nested         | Override scoped values (like per-section themes)    |
| Derived        | Compute values from other context(s)                |
| Dependent      | Use one context's value to shape another's logic    |

---

## 🚀 Next Steps
explaining how to use a **Reducer** with the **Context API** and how to **optimize** it using `useMemo` and `useCallback`:

```markdown
# Reducer-Based Context API with `useMemo` and `useCallback` Optimization in React

## What is Reducer-Based Context API?

The **Reducer** is a pattern used in React for managing complex state logic. It works similarly to the traditional **Redux** approach but can be used with React's built-in **Context API** to avoid unnecessary prop drilling in a component tree. The **useReducer** hook is typically used to implement this pattern, and it is ideal for managing state that depends on multiple actions or that involves complex logic.

When combined with **Context API**, a reducer can help to centralize state management, making the app more maintainable and scalable.

## Why Use `useMemo` and `useCallback`?

Even though `useReducer` provides a way to manage state centrally, passing the dispatch function down the component tree can still cause unnecessary re-renders of child components. This happens because the context value (including the dispatch function) will be recreated on every render.

To optimize performance, React's **`useMemo`** and **`useCallback`** hooks can be used to memoize the context value and prevent unnecessary re-renders.

- **`useMemo`**: Memoizes the value returned from the context provider, ensuring the value is recalculated only when necessary.
- **`useCallback`**: Memoizes the dispatch function to ensure it's not recreated on every render.

## Setting Up the Context with Reducer

### Step 1: Create the Reducer and Initial State

You start by creating an initial state and a reducer function that defines how the state should change based on different actions.

```javascript
// reducer.js
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export { initialState, reducer };
```

### Step 2: Create the Context

Next, we create the **Context** for the application. This will hold the state and the dispatch function that will be shared across components.

```javascript
// CountContext.js
import React, { createContext, useReducer, useMemo, useCallback } from 'react';
import { initialState, reducer } from './reducer';

// Create the Context
const CountContext = createContext();

function CountProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
}

export { CountContext, CountProvider };
```

### Step 3: Using `useCallback` for Memoizing the Dispatch Function

To optimize the `dispatch` function further and avoid re-creations on every render, you can use `useCallback`. This is especially useful when dispatching actions from deeply nested components.

```javascript
// CountContext.js (continued)
function CountProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Memoize the dispatch function to avoid unnecessary re-creations
  const memoizedDispatch = useCallback((action) => {
    dispatch(action);
  }, []);

  const contextValue = useMemo(() => ({ state, dispatch: memoizedDispatch }), [state, memoizedDispatch]);

  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
}
```

## Step 4: Consuming the Context

To consume the context and access the state and dispatch function, use `useContext` in any component that needs access to the context.

```javascript
// Counter.js
import React, { useContext } from 'react';
import { CountContext } from './CountContext';

function Counter() {
  const { state, dispatch } = useContext(CountContext);

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

## Optimizing with `useMemo` and `useCallback`

### Why Memoization?

In the example above, using `useMemo` ensures that the context value (including the state and dispatch function) doesn't change on every render. React will only re-render the components that consume the context when the `state` value changes, not when the dispatch function changes.

Using `useCallback` ensures that the `dispatch` function itself doesn't get recreated on every render, which would otherwise trigger unnecessary re-renders in components that rely on the context.

### Full Example with Optimization

Here’s the full optimized example:

```javascript
// reducer.js
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export { initialState, reducer };
```

```javascript
// CountContext.js
import React, { createContext, useReducer, useMemo, useCallback } from 'react';
import { initialState, reducer } from './reducer';

const CountContext = createContext();

function CountProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const memoizedDispatch = useCallback((action) => {
    dispatch(action);
  }, []);

  const contextValue = useMemo(() => ({ state, dispatch: memoizedDispatch }), [state, memoizedDispatch]);

  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
}

export { CountContext, CountProvider };
```

```javascript
// Counter.js
import React, { useContext } from 'react';
import { CountContext } from './CountContext';

function Counter() {
  const { state, dispatch } = useContext(CountContext);

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

## Benefits of Using `useMemo` and `useCallback`

- **Prevents unnecessary re-renders**: Memoizing the context value and dispatch function ensures that components only re-render when necessary, improving performance.
- **Avoids function recreation**: `useCallback` ensures that the dispatch function is not recreated on every render, preventing unnecessary re-renders in consuming components.
- **Optimized for large applications**: This optimization pattern becomes critical when dealing with larger applications where frequent re-renders can severely impact performance.

## Conclusion

By combining the **Reducer Pattern** with the **Context API**, and optimizing with `useMemo` and `useCallback`, you can build highly performant React applications that manage complex state in a centralized manner without unnecessary re-renders. The **useMemo** hook helps prevent unnecessary recalculations, and **useCallback** ensures that functions are not re-created unless necessary, leading to smoother performance and better scalability for large applications.
```
