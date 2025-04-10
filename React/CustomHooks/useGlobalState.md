
```markdown
# 🌐 useGlobalState Hook in React

`useGlobalState` is a custom hook pattern in React that enables easy sharing and management of global state across components, without the need for external libraries like Redux or Zustand.

---

## 📖 What is `useGlobalState`?

`useGlobalState` is not a built-in React hook. It’s a **custom hook** created on top of the **React Context API** to make global state management simple and intuitive.

---

## 🧱 Example: Basic Setup

```js
// GlobalStateContext.js
import React, { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <GlobalStateContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
```

```js
// App.js
import { GlobalStateProvider } from "./GlobalStateContext";

const App = () => (
  <GlobalStateProvider>
    <ComponentA />
    <ComponentB />
  </GlobalStateProvider>
);
```

```js
// ComponentA.js
import { useGlobalState } from "./GlobalStateContext";

const ComponentA = () => {
  const { setUser } = useGlobalState();
  return <button onClick={() => setUser("John Doe")}>Set User</button>;
};

// ComponentB.js
import { useGlobalState } from "./GlobalStateContext";

const ComponentB = () => {
  const { user } = useGlobalState();
  return <div>User is: {user}</div>;
};
```

---

## 🎯 Real-World Scenario: User Authentication

Imagine a dashboard where the user's info needs to be accessed in the:

- Header (to show username)
- Sidebar (for role-based navigation)
- Settings page (for profile updates)

Instead of prop drilling, use `useGlobalState` for direct access to shared data across all components.

---

## ⚖️ Comparison with Alternatives

| Feature           | useGlobalState  | Context API    | Redux       | Zustand / Jotai |
|-------------------|------------------|----------------|-------------|-----------------|
| Setup             | ✅ Easy           | ⚠️ Medium       | ❌ Complex   | ✅ Easy          |
| Boilerplate       | ✅ Low            | ⚠️ Medium       | ❌ High      | ✅ Low           |
| Performance       | ⚠️ Medium         | ⚠️ Risk of rerenders | ✅ Optimized | ✅ Great         |
| Learning Curve    | ✅ Low            | ⚠️ Medium       | ❌ High      | ✅ Low-Medium    |
| DevTools Support  | ❌ No             | ❌ No           | ✅ Yes       | ⚠️ Optional      |

---

## ✅ Pros

- ✅ Very easy to implement
- ✅ No external libraries required
- ✅ Great for small to medium applications
- ✅ Readable and maintainable
- ✅ Works well with TypeScript

---

## ❌ Cons

- ❌ Performance can degrade in large applications
- ❌ No devtools or middleware support
- ❌ Can cause unnecessary re-renders if not optimized
- ❌ Not ideal for deeply nested or high-frequency updates

---

## 🛠️ When to Use

| Use Case | Reason |
|----------|--------|
| Small to medium apps | Simple and lightweight |
| Global user state, theme, or language | Frequently shared state |
| No need for complex tools like Redux | Avoid boilerplate |

---

## 🚫 When NOT to Use

- Large, complex apps with deeply nested components
- State that updates very frequently (e.g., mouse position, timers)
- Need for advanced features (middlewares, devtools, time travel)

---

## 💡 Advanced Pattern (Memoized Context)

```js
import React, { createContext, useContext, useState, useMemo } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");

  const state = useMemo(() => ({ user, setUser, theme, setTheme }), [user, theme]);

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
```

---

## 🧠 Summary

| Topic     | Details |
|-----------|---------|
| What      | `useGlobalState` is a custom hook built on top of React Context |
| Why       | To share state globally without prop drilling |
| Where     | Wrap your root component in a provider and use the hook anywhere |
| When      | Best for simple state management in small to mid-size projects |
| Pros      | Lightweight, easy, no dependencies |
| Cons      | Limited performance & features in large-scale apps |

---

## 📦 Want More?

You can expand `useGlobalState` with:
- Multiple context files (e.g. `UserContext`, `ThemeContext`)
- Persistent storage with `localStorage` or `useReducer`
- Custom event-based messaging for more modular architecture

---

