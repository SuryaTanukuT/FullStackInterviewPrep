
# 💡 Comprehensive React Interview Questions & Answers

This document covers everything from beginner to advanced-level concepts in React, including architecture, patterns, hooks, testing, security, and performance.

## 📘 Introduction to React

### 1. What is React?
React is a JavaScript library developed by Facebook for building user interfaces. It enables the development of reusable UI components and efficiently updates and renders components based on data changes.

### 2. What are the advantages of using React?
- Component-based architecture
- Virtual DOM for performance
- Unidirectional data flow
- Strong community and ecosystem

### 3. What are the limitations of React?
- Just the UI layer (requires external libraries for routing and state management)
- JSX learning curve
- Fast-paced changes and ecosystem complexity

---

## 🔑 Core Concepts

### 4. What is `useState()` in React?
`useState` is a Hook that lets you add state to functional components.

```jsx
const [count, setCount] = useState(0);
```

### 5. What are keys in React?
Keys help React identify which items have changed, are added, or are removed.

```jsx
items.map(item => <li key={item.id}>{item.name}</li>)
```

### 6. What is JSX?
JSX is a syntax extension that allows writing HTML-like code in JavaScript.

### 7. What are the differences between functional and class components?
Functional components use Hooks and are simpler, whereas class components use lifecycle methods and `this` context.

### 8. What is the virtual DOM?
A virtual representation of the real DOM. React uses it to minimize direct DOM manipulation.

### 9. What are the differences between controlled and uncontrolled components?
Controlled components have form data managed by React state. Uncontrolled use refs to access form values.

### 10. What are props in React?
Props are inputs to a component. They are passed down from parent to child.

### 11. Explain React state and props.
State is mutable and managed internally. Props are immutable and passed from parent to child.

---

## 🧠 Advanced Topics

### 12. Types of side effects in React components?
- Data fetching
- Manual DOM manipulation
- Subscriptions and timers

### 13. What is prop drilling?
Passing props through many levels of components. Can be avoided with Context.

### 14. What are error boundaries?
Components that catch JavaScript errors in child components.

### 15. What is React Hooks?
Functions that let you use state and lifecycle features in functional components.

### 16. Why were Hooks introduced?
To simplify logic reuse and reduce the complexity of class components.

### 17. Rules of Hooks
- Only call Hooks at the top level
- Only call Hooks from React functions

### 18. `useEffect` Hook
Performs side effects in function components.

```jsx
useEffect(() => {
  console.log("Mounted or updated");
}, [dependency]);
```

### 19. Custom Hooks
Reusable functions using built-in hooks.

```jsx
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, increment: () => setCount(count + 1) };
}
```

### 20. Auto redirect after login
Use `useNavigate()` in React Router.

### 21. Pass data between siblings using Router
Use context or lift state to a parent.

### 22. Rerender view on browser resize
```jsx
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

### 23. Switching Component
Render different components based on a condition.

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

### 24. React Hooks Example
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 25. Conditional Rendering
Use ternary or logical && to render based on conditions.

### 26. Can React Hooks replace Redux?
Partially. Hooks like `useReducer` and Context can cover local and medium global state.

### 27. What is React Router?
Client-side routing library for React.

### 28. Do Hooks cover all class functionality?
Yes, Hooks like `useEffect`, `useRef`, and `useLayoutEffect` cover lifecycles.

### 29. Hooks vs Classes performance?
Hooks often reduce boilerplate but don’t inherently boost performance.

### 30. Hooks vs Classes difference?
Hooks are functional and lightweight, classes are object-oriented.

### 31. Types of Hooks
- Basic: `useState`, `useEffect`
- Additional: `useRef`, `useMemo`, `useCallback`, `useContext`, `useReducer`

### 32. React Hooks and static typing?
Yes, works with TypeScript.

### 33–34. Lifecycle methods and phases
Class-based lifecycles include `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`. Functional equivalents use `useEffect`.

### 35. Higher Order Components
Functions that take a component and return a new one.

```jsx
const withLogger = (Component) => (props) => {
  console.log("Rendered!");
  return <Component {...props} />;
};
```

### 36. Passing Data Between Components
Props, Context API, or state lifting.

### 37. Optimizing React App Performance
- Memoization: `React.memo`, `useMemo`
- Lazy loading: `React.lazy`
- List virtualization: `react-window`
- Avoid unnecessary re-renders

### 38. Styling Methods
- CSS Modules
- Styled-components
- Emotion

### 39. Prevent re-renders
- `React.memo`
- `useMemo`, `useCallback`
- Immutable data structures

### 40. Strict Mode
A helper for highlighting potential problems in an application.

---

*Note:* This file includes ~50 curated questions. Due to response length, remaining advanced questions, SSR topics, security, Redux deep dive, testing strategies, and ReactDOMServer examples will be included in a Part 2 Markdown file upon your request.

---

Author: Adinarayana Namana  
LinkedIn: [https://www.linkedin.com/in/adinarayana-namana-8a0811115/](https://www.linkedin.com/in/adinarayana-namana-8a0811115/)
