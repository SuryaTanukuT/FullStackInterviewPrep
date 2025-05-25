
# 🧠 Memoization in React

## 📘 Definition

**Memoization** is a performance optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.

In React, memoization helps avoid **unnecessary renders** and **expensive computations** during re-renders.

---

## 🚀 Memoization Techniques in React

### 1. `React.memo` (for components)
- Prevents re-rendering of a functional component if its props haven't changed.

```jsx
const MyComponent = React.memo(({ value }) => {
  console.log('Rendered');
  return <div>{value}</div>;
});
```

### 2. `useMemo` (for computed values)
- Caches the result of a **computation** between renders.

```jsx
const expensiveValue = useMemo(() => computeExpensiveValue(input), [input]);
```

### 3. `useCallback` (for function references)
- Memoizes a function so it doesn't get re-created on every render.

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

---

## ❓ Why NOT Always Use `useMemo` and `useCallback`?

- **Overhead**: Memoization itself has a cost.
- **Unnecessary Complexity**: Using it everywhere clutters code.
- **Premature Optimization**: Often not needed unless a performance issue is observed.

🔎 Use these hooks **only** when:
- A function or value is passed to a child component that relies on referential equality.
- You have a **computationally expensive operation**.

---

## 🔄 Is Memoization Only `useMemo` and `useCallback`?

No. Other related concepts in React include:
- `React.memo` for components.
- `useRef` for storing persistent values without re-rendering.
- External libraries like `reselect` for Redux selectors.

---

## 📌 Examples

### ✅ `useCallback` Example

```jsx
const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(c => c + 1), []);

  return <Child onClick={increment} />;
};

const Child = React.memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click Me</button>;
});
```

### ✅ `useMemo` with Expensive Calculation

```jsx
const ExpensiveComponent = ({ number }) => {
  const factorial = useMemo(() => computeFactorial(number), [number]);

  return <div>Factorial: {factorial}</div>;
};
```

### ✅ `React.memo` with Component

```jsx
const Button = React.memo(({ onClick, label }) => {
  console.log("Button render");
  return <button onClick={onClick}>{label}</button>;
});
```

---

## 📝 Summary

| Hook           | Purpose                             | Avoids Re-renders | Use With           |
|----------------|-------------------------------------|-------------------|---------------------|
| `useMemo`      | Memoize computed values             | ✅                | Expensive calculations |
| `useCallback`  | Memoize function references         | ✅                | Event handlers passed to children |
| `React.memo`   | Memoize whole component             | ✅                | Pure components |
| `useRef`       | Persist value without render        | ✅                | DOM refs, timers |

---

## ✅ Best Practices

- Measure performance before optimizing.
- Use memoization **only when needed**.
- Profile your app with React DevTools.

