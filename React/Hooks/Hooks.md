Here is a GitHub-flavored **Markdown** file for your **“What Are Hooks in React?”** section. It's fully compatible with GitHub README files and includes syntax highlighting for code examples:

---

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

Would you like all **React Context patterns + hooks** compiled into a single `.md` file download now?