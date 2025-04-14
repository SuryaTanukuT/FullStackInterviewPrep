

# ⚛️ What Are Hooks in React?

Hooks are functions introduced in **React 16.8** that let you *"hook into"* React state and lifecycle features from **functional components**. They allow you to use **state, side effects, context**, and more—without writing a class.

This encourages cleaner, reusable, and easier-to-test components.

---

## 🎯 Why Hooks?

- ✅ **Simplify Components**: No more class components for stateful logic.
- 🔁 **Encourage Reuse**: Extract and reuse logic across components with custom hooks.
- 👁️ **Improve Readability**: Group related logic (e.g., state + side effects) in a unified place.

---

## 🧩 Core Built-In Hooks

---

### 1. `useState`

#### 📌 What It Does:
Adds **local state** to functional components.

#### 🔧 How It Works:
Returns a **state variable** and a **function to update it**.

#### 🧪 Example:

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

### 2. `useEffect`

#### 📌 What It Does:
Performs **side effects** like data fetching, subscriptions, or DOM updates.

#### 🔧 How It Works:
Runs **after render**, optionally controlled via a **dependency array**.

#### 🧪 Example:

```jsx
function DataFetcher() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('https://api.example.com/data')
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []); // Runs only once after the first render

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
```

---

### 3. `useContext`

#### 📌 What It Does:
Allows access to **context values** without using `<Context.Consumer>`.

#### 🔧 How It Works:
Takes a **context object** and returns its current value.

#### 🧪 Example:

```jsx
const ThemeContext = React.createContext('light');

function ThemedComponent() {
  const theme = React.useContext(ThemeContext);
  return <div className={`theme-${theme}`}>Current theme: {theme}</div>;
}
```

---

### 4. `useReducer`

#### 📌 What It Does:
Alternative to `useState` for **complex state logic** (similar to Redux).

#### 🔧 How It Works:
Accepts a **reducer function** and an **initial state**, returning `[state, dispatch]`.

#### 🧪 Example:

```jsx
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = React.useReducer(counterReducer, 0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

---

### 5. `useRef`

#### 📌 What It Does:
Creates a **mutable reference** that persists across renders, often used for DOM elements.

#### 🔧 How It Works:
Returns an object with a `.current` property.

#### 🧪 Example:

```jsx
function FocusInput() {
  const inputRef = React.useRef(null);

  const focus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={focus}>Focus Input</button>
    </>
  );
}
```

---
### React Context Patterns + Hooks

React Context and Hooks are powerful tools that help manage global state and side effects in functional components. They offer a more elegant and readable way to deal with state management and lifecycle methods compared to class components. Let’s dive into how Context works and how you can use it with hooks to create flexible and maintainable patterns.

---

### What is React Context?

React Context provides a way to share values between components without having to pass props down manually at every level. This is useful for global state, theming, authentication, or any shared data that many components need to access.

React Context API consists of:
1. **`React.createContext()`**: Creates a Context object, which holds the values that can be shared.
2. **`Provider`**: A wrapper component that passes down the context value to its descendants.
3. **`Consumer`**: A component that subscribes to context updates and renders UI based on context value.

However, the `Consumer` is often considered verbose, which is where **React Hooks** come in. With hooks, accessing context becomes more straightforward and easier to use in functional components.

---

### Basic Usage of React Context with Hooks

1. **Create a Context**

   You first create a context using `React.createContext()`, which will contain a default value.

   ```js
   import React, { createContext, useState } from 'react';

   // Create a context with a default value
   const MyContext = createContext('default value');
   ```

2. **Provide Context Value**

   In the component tree, you wrap components that need access to the context with a `Provider` and pass the value you want to share.

   ```js
   const MyProvider = ({ children }) => {
     const [state, setState] = useState('Hello, World!');

     return (
       <MyContext.Provider value={{ state, setState }}>
         {children}
       </MyContext.Provider>
     );
   };
   ```

3. **Consume Context Value Using `useContext` Hook**

   In functional components, you use the `useContext` hook to access the value from the nearest `Provider` above it.

   ```js
   import React, { useContext } from 'react';

   const MyComponent = () => {
     const { state, setState } = useContext(MyContext);

     return (
       <div>
         <p>{state}</p>
         <button onClick={() => setState('Updated Context Value!')}>Update</button>
       </div>
     );
   };
   ```

4. **App Component**

   Here’s how you can combine everything in a simple app:

   ```js
   const App = () => {
     return (
       <MyProvider>
         <MyComponent />
       </MyProvider>
     );
   };
   ```

---

### Advanced Patterns with React Context and Hooks

#### 1. **Multiple Contexts**

   You can combine multiple contexts in your application. You can use multiple `Provider`s to pass different types of context values to different parts of the tree.

   ```js
   const UserContext = createContext();
   const ThemeContext = createContext();

   const App = () => {
     const [user, setUser] = useState('John Doe');
     const [theme, setTheme] = useState('light');

     return (
       <UserContext.Provider value={user}>
         <ThemeContext.Provider value={theme}>
           <MyComponent />
         </ThemeContext.Provider>
       </UserContext.Provider>
     );
   };

   const MyComponent = () => {
     const user = useContext(UserContext);
     const theme = useContext(ThemeContext);

     return (
       <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333' }}>
         <p>User: {user}</p>
       </div>
     );
   };
   ```

#### 2. **Custom Hook for Context**

   You can abstract the `useContext` logic into custom hooks to reuse across different components.

   ```js
   const useUserContext = () => {
     return useContext(UserContext);
   };

   const MyComponent = () => {
     const user = useUserContext();

     return <p>User: {user}</p>;
   };
   ```

#### 3. **Context with Reducer (Advanced State Management)**

   For more complex state management, you can combine Context with `useReducer`. This pattern is great for handling more sophisticated state updates.

   ```js
   const UserContext = createContext();

   const userReducer = (state, action) => {
     switch (action.type) {
       case 'SET_USER':
         return { ...state, user: action.payload };
       default:
         return state;
     }
   };

   const UserProvider = ({ children }) => {
     const [state, dispatch] = useReducer(userReducer, { user: null });

     return (
       <UserContext.Provider value={{ state, dispatch }}>
         {children}
       </UserContext.Provider>
     );
   };

   const MyComponent = () => {
     const { state, dispatch } = useContext(UserContext);

     const updateUser = () => {
       dispatch({ type: 'SET_USER', payload: 'Jane Doe' });
     };

     return (
       <div>
         <p>User: {state.user}</p>
         <button onClick={updateUser}>Update User</button>
       </div>
     );
   };
   ```

---

### Common Patterns with React Context + Hooks

1. **Theming with Context**  
   Use context to manage global UI themes (light/dark mode).

   ```js
   const ThemeContext = createContext('light');

   const useTheme = () => useContext(ThemeContext);

   const App = () => {
     const [theme, setTheme] = useState('light');

     return (
       <ThemeContext.Provider value={theme}>
         <MyComponent />
       </ThemeContext.Provider>
     );
   };

   const MyComponent = () => {
     const theme = useTheme();
     return <div className={theme}>Hello, Themed World!</div>;
   };
   ```

2. **Authentication Context**  
   Use context to manage the authentication state, passing down the logged-in status and user details.

   ```js
   const AuthContext = createContext(null);

   const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);

     const login = (userData) => {
       setUser(userData);
     };

     const logout = () => {
       setUser(null);
     };

     return (
       <AuthContext.Provider value={{ user, login, logout }}>
         {children}
       </AuthContext.Provider>
     );
   };

   const MyComponent = () => {
     const { user, login, logout } = useContext(AuthContext);

     return (
       <div>
         {user ? (
           <div>
             <p>Welcome, {user.name}</p>
             <button onClick={logout}>Logout</button>
           </div>
         ) : (
           <button onClick={() => login({ name: 'John Doe' })}>Login</button>
         )}
       </div>
     );
   };
   ```

---

### Conclusion

Using React Context and hooks together offers a powerful and flexible way to manage global state in your application. You can create simple, readable components and abstract logic into reusable hooks. The patterns provided here — like custom hooks, context with reducers, and multiple contexts — make it easier to scale your application and manage state in a more declarative manner. React's Context API with hooks is a great solution for most global state management needs, especially for smaller or medium-sized apps.