Here’s a GitHub-friendly **Markdown** file for your **“Side Effect Handling”** section with clear structure, syntax-highlighted code blocks, and bullet-point formatting:

---

# ⚙️ 1. Side Effect Handling in React

## 📖 Explanation

**Side effects** are operations that affect components **outside their render scope**, such as:

- 🛰 Data fetching  
- 🔔 Subscriptions  
- ⏱ Timers  
- 📝 Logging  
- 📏 DOM manipulation  

React provides two core hooks to handle these:

---

### 🔁 `useEffect`

- Runs **after the component renders**.
- Can run:
  - Once (on mount),
  - On every render,
  - Or only when specific dependencies change.

---

### ⚡ `useLayoutEffect`

- Similar to `useEffect`, but it **runs synchronously** after **DOM mutations**.
- Use when you need to **measure or modify the DOM before the browser paints**.

---

## 💻 Code Example

```jsx
function DataFetcher() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let isMounted = true;

    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(result => {
        if (isMounted) setData(result);
      })
      .catch(err => {
        if (isMounted) setError(err);
      });

    // Cleanup to avoid setting state on unmounted component
    return () => {
      isMounted = false;
    };
  }, []); // Runs once after initial render

  if (error) return <p>Error loading data.</p>;
  if (!data) return <p>Loading...</p>;

  return <div>{JSON.stringify(data)}</div>;
}
```

---

## 🧩 Scenario

A component that **fetches data from an API** and displays it. The side effect (fetch) is handled via `useEffect`, and a cleanup function prevents state updates on an unmounted component.

---

## ✅ Pros

- **Separation of Concerns**: Keeps side-effect logic outside of the render phase.
- **Declarative**: Easy to control when the effect runs using the dependency array.
- **Cleanup Support**: Prevents memory leaks (e.g., canceling subscriptions or timers).

---

## ⚠️ Cons

- **Dependency Management**: Can be tricky to get right, especially with complex states.
- **Delayed Execution**: Effects run *after* the render, which may lead to layout shifts or delays.

---

## 📌 When, Why, and Where

- **When**: Any operation that’s not purely rendering logic (e.g., fetch, event listeners).
- **Why**: Keeps component logic clean, predictable, and side effects isolated.
- **Where**: In any meaningful component that interacts with external systems or the DOM.

---

## 🛠 Polyfill / Compatibility

- ✅ No polyfill needed for `useEffect` or `useLayoutEffect`.
- 💡 Just ensure your **build tools** (like Babel or SWC) handle modern JavaScript for legacy browser support.

---

Would you like this combined into one full README or separated by concepts for easier modular learning?