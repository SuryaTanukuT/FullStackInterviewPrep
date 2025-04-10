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

Would you like me to compile all three context patterns—**Default**, **Nested**, and **Dynamic**—into a single `.md`?

```md
---

## 🌐 Patterns Covered
- ✅ **Default Context**: For global config-like data
- 🎨 **Nested Context**: Scoped contexts (e.g. theme or locale per section)
- 🔁 **Dynamic Context**: Context with mutable state and setters

---

## 📦 Folder Structure (inline for simplicity)
```
App.js
contexts/
  ConfigContext.js       // Default context
  ThemeContext.js        // Nested context
  UserContext.js         // Dynamic context
components/
  Section.js
```

---

## 🔧 `contexts/ConfigContext.js` — Default Context

```jsx
import React, { createContext, useContext } from "react";

const ConfigContext = createContext({ apiVersion: "v1", region: "US" });

export const useConfig = () => useContext(ConfigContext);

export const ConfigProvider = ({ children }) => {
  const config = { apiVersion: "v1", region: "US" };
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
};
```

---

## 🎨 `contexts/ThemeContext.js` — Nested Context

```jsx
import React, { createContext, useContext } from "react";

const ThemeContext = createContext("light");

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
```

---

## 👤 `contexts/UserContext.js` — Dynamic Context

```jsx
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Jane Doe", role: "admin" });

  const login = (newUser) => setUser(newUser);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
```

---

## 🧩 `components/Section.js`

```jsx
import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";
import { useConfig } from "../contexts/ConfigContext";

const Section = () => {
  const theme = useTheme();
  const { user, login, logout } = useUser();
  const config = useConfig();

  return (
    <div style={{ padding: 20, background: theme === "dark" ? "#333" : "#eee", color: theme === "dark" ? "#fff" : "#000" }}>
      <h2>Theme: {theme}</h2>
      <p>API Version: {config.apiVersion}</p>
      <p>Region: {config.region}</p>
      <p>User: {user ? user.name : "Guest"}</p>
      <button onClick={() => login({ name: "John Smith", role: "editor" })}>Login as John</button>
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
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import Section from "./components/Section";

const App = () => {
  return (
    <ConfigProvider>
      <UserProvider>
        {/* Nest ThemeProvider to scope theme per section */}
        <ThemeProvider theme="dark">
          <Section />
        </ThemeProvider>
        <ThemeProvider theme="light">
          <Section />
        </ThemeProvider>
      </UserProvider>
    </ConfigProvider>
  );
};

export default App;
```

---

## ✅ What You’ve Learned

- `ConfigContext` is a **default** global constant context.
- `ThemeContext` is **nested**, so each component can have a different theme.
- `UserContext` is **dynamic**, allowing state changes and side effects.

---

