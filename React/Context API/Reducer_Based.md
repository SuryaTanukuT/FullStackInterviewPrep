
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

- 💡 Try memoizing or optimizing with `useMemo`, `useCallback`
