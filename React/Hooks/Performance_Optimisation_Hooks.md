
# ⚡ 4. Performance Optimization Hooks in React

## 📖 Explanation

Performance optimization hooks allow you to **avoid unnecessary computations and re-renders** in React components.

---

### 🔑 `useMemo`

- **Memoizes** a computed value.
- Recomputes only when **dependencies** change.
- Useful for **expensive calculations** or derived state.

---

### 🔁 `useCallback`

- **Memoizes** a function.
- Ensures the function identity **remains stable** across renders unless dependencies change.
- Helpful when **passing callbacks** to child components to avoid unnecessary re-renders.

---

## 💻 Code Example

```jsx
function ExpensiveComponent({ items }) {
  // Avoid recalculating total unless `items` changes
  const total = React.useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  // Avoid recreating the function unless `total` changes
  const handleClick = React.useCallback(() => {
    console.log('Total is:', total);
  }, [total]);

  return (
    <div>
      <p>Total: {total}</p>
      <button onClick={handleClick}>Log Total</button>
    </div>
  );
}
```

---

## 🧩 Scenario

An analytics dashboard or product list where a total or aggregate value is calculated. These calculations can be expensive with large datasets — `useMemo` ensures they only re-run when data changes, and `useCallback` ensures consistent function identity for child props.

---

## ✅ Pros

- **Boosts Performance**: Skips unnecessary calculations and renders.
- **Stable References**: Prevents prop change-induced re-renders.
- **Fine-Grained Control**: Helps in optimizing deeply nested components.

---

## ⚠️ Cons

- **Mental Overhead**: Dependency arrays must be accurate — bugs can occur if values are omitted.
- **Premature Optimization**: Adding memoization unnecessarily can lead to **complex code** without real benefit.

---

## 🧠 When, Why, and Where

| Use Case                            | Hook         |
|-------------------------------------|--------------|
| Expensive computation on props      | `useMemo`    |
| Stable callback for child component | `useCallback`|

- **When**: When renders are slow or prop drilling affects performance.
- **Why**: To prevent reruns of expensive logic and rerenders of memoized components.
- **Where**: Dashboards, filtered lists, animations, charts.

---

## 🛠 Polyfill / Compatibility

- ✅ No polyfills needed.
- Fully supported in **React 16.8+**.
- Just make sure Babel is set to transpile modern JS for older browsers if needed.

---

