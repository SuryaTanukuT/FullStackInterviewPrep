
```md
# 🔁 React `useCallback` — In-Depth Guide

`useCallback` is a powerful React Hook that helps optimize performance by memoizing callback functions. This guide covers:

- ✅ What it is
- 🛠 Real-life usage scenario
- 🔍 Comparison with/without `useCallback`
- 📌 When, why, and where to use it
- ✅ Pros and ❌ Cons
- 🧪 Realistic example
- 🧠 Rule of thumb

---

## 🔍 What is `useCallback`?

`useCallback` returns a **memoized version of a function** that only changes if its **dependencies change**.

```jsx
const memoizedCallback = useCallback(() => {
  // logic here
}, [dependencies]);
```

It's mainly used to **prevent unnecessary re-creations** of functions across renders — especially helpful when passing callbacks to child components.

---

## 🛠 Scenario: Why It's Needed

### Without `useCallback`:

```jsx
const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </>
  );
};

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});
```

> Even if `handleClick` doesn't depend on `count`, it is **re-created** on every render, causing `Child` to re-render unnecessarily.

---

### ✅ With `useCallback`:

```jsx
const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </>
  );
};
```

> Now `handleClick` is **memoized** and does not cause re-render of `Child` unless its dependencies change.

---

## 📌 Why / When / Where to Use

### ✅ Why?
- To **prevent unnecessary re-renders**
- To **maintain function reference** across renders
- To **optimize performance** with `React.memo`, `useEffect`, or `useMemo`

### 🕒 When?
- When passing **functions as props**
- When a **stable reference** is needed inside `useEffect`, `useMemo`, or **custom hooks**

### 📍 Where?
- In any **function component**
- Commonly used with `React.memo` or custom hooks

---

## 🔁 Comparison Table

| Feature                       | Without `useCallback`           | With `useCallback`                   |
|------------------------------|----------------------------------|--------------------------------------|
| Function Reference            | New on every render              | Stable unless dependencies change    |
| Child Component Renders       | Unnecessary re-renders occur     | Prevented                            |
| Memory Usage                  | Lighter                          | Slightly higher (memoization cost)   |
| Code Simplicity               | Cleaner                          | Slightly more complex                |
| Best Use Case                 | Simple components                | Optimized/memoized components        |

---

## ✅ Pros

- ✅ Avoids unnecessary re-renders
- ✅ Ensures stable function references
- ✅ Ideal for performance-critical UI

## ❌ Cons

- ❌ Adds complexity (dependency arrays)
- ❌ Overhead of memoization
- ❌ Misuse can make performance worse

---

## 🧪 Realistic Example: API Call + `useEffect`

```jsx
const useFetchData = (fetchFn) => {
  useEffect(() => {
    fetchFn();
  }, [fetchFn]);
};

const Parent = () => {
  const fetchData = useCallback(() => {
    fetch("https://api.example.com/data")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  useFetchData(fetchData);
};
```

> `fetchData` is memoized so `useEffect` doesn't re-run unnecessarily.

---

## 🧠 Rule of Thumb

> Use `useCallback` **only when**:
> - Passing functions to memoized components
> - Using functions inside effect hooks
> - You’ve **measured** re-renders and confirmed a performance issue

---

## 📝 Summary

| Concept           | Description                                                  |
|-------------------|--------------------------------------------------------------|
| `useCallback(fn, deps)` | Memoizes `fn`, returns same reference unless `deps` change |
| Use Case          | Performance optimization with stable callbacks               |
| Common Pairing    | `React.memo`, `useEffect`, `useMemo`, custom hooks           |
| Avoid If          | You're not seeing performance issues                         |

