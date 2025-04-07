Here’s a clean and structured breakdown of **Derived State in React** — great for dev notes, interviews, and architecture decisions:

---

## 🧮 3. Derived State

### 🧠 Explanation  
**Derived state** is not stored directly but is **computed from existing state or props**. It's used when some value is just a transformation of another, making it unnecessary to store it separately.

---

### 🔍 Example

```jsx
function Temperature({ celsius }) {
  // Derived value: Fahrenheit is computed from Celsius
  const fahrenheit = (celsius * 9) / 5 + 32;
  return <p>{celsius}°C is {fahrenheit}°F</p>;
}
```

---

### 🌐 Scenario  
A component receives temperature in Celsius via props and **derives Fahrenheit** dynamically for display. It doesn't hold its own state for Fahrenheit — it's computed on every render.

---

### ✅ Pros

- **Simplicity**:  
  Avoids duplication — you don’t need to store and sync two related values.

- **Consistency**:  
  Automatically updates when the source value changes (props or state).

---

### ❌ Cons

- **Performance Overhead**:  
  If the computation is **expensive**, doing it on every render can hurt performance.

- **Complex Debugging**:  
  Derived values from multiple dependencies can introduce **subtle bugs** if memoization or sync logic isn’t handled well.

---

### 📌 When, Why, and Where to Use

- **When**:  
  You need to compute values from props or other state (e.g., formatting, totals, conversions).

- **Why**:  
  Keeps the data model lean and avoids unnecessary syncing logic.

- **Where**:
  - Currency/Unit conversion
  - Filtered/search views
  - Form validation state
  - Display formatting (dates, numbers)

---

### ⚙️ Performance Tip  
For **expensive calculations**, use `useMemo`:

```jsx
const expensiveDerived = useMemo(() => computeSomething(data), [data]);
```

---

### 📦 Polyfill/Compatibility

- No polyfill needed — derived state is just a **pattern**, not a React API.
- `useMemo`, `useCallback`, or memoized selectors (in Redux) help with optimization.

---

Let me know if you want examples using `useMemo`, derived values in Redux selectors, or typical pitfalls to watch out for.