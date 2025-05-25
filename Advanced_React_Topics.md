
# 🔍 Advanced React.js Topics and Practices

---

## 1. Understanding React's Rendering Model

React re-renders a component when:
- State or props change.
- A parent re-renders and passes new props.

However, **reconciliation** determines whether the DOM must update:
- Pure components skip re-rendering if props/state are shallow equal.
- `React.memo`, `useMemo`, and `useCallback` help prevent unnecessary renders.

**Trigger points** include:
- Context updates.
- `forceUpdate` or `key` changes.

---

## 2. Exploring useEffect

### Internals:
- Runs **after render**.
- Cleans up before next effect or unmount (if cleanup is provided).
- Tracks dependencies to re-run.

### When NOT to use:
- For **non-side effects** (e.g., formatting).
- When the logic can live **outside of render cycle** (e.g., memoized data processing).

---

## 3. Controlled vs Uncontrolled Components

### Controlled:
```jsx
<input value={state} onChange={(e) => setState(e.target.value)} />
```
**Example**: Form validations, dynamic inputs.

### Uncontrolled:
```jsx
<input ref={ref} />
```
**Example**: Quick input capture, file uploads.

---

## 4. React.memo vs useMemo vs useCallback

| Hook         | Use Case                                   | Memoizes         |
|--------------|---------------------------------------------|------------------|
| `React.memo` | Prevent component re-renders                | Component        |
| `useMemo`    | Memoize **computed values**                | Value            |
| `useCallback`| Memoize **function references**            | Function         |

Use them to **avoid expensive re-renders**, **especially in child components** or **heavy calculations**.

---

## 5. Implementing Debounce (No Library)

```js
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
```

Use inside a `useCallback` or `useEffect` for optimal integration.

---

## 6. Managing Shared State (Without Redux)

- **React Context API** for global needs.
- **Custom hooks** that share state internally via closures or context.
- **State machines** (like XState).
- **Zustand** or **Jotai** for minimal state management.

---

## 7. Context API – Pros and Cons

### Solves:
- Prop drilling.
- Global config, user/auth state sharing.

### Introduces:
- **Re-renders on every update** unless memoized carefully.
- Overuse for frequent changes can degrade performance.
- Harder testing/debugging compared to explicit props.

---

## 8. Consecutive setState Calls

```js
setState(val => val + 1);
setState(val => val + 1);
```

Using **functional updates** ensures both changes are applied. Otherwise, batching may cause the second to overwrite the first.

---

## 9. Avoiding Prop Drilling

- **Context API** (with memoization).
- **Custom hooks**.
- **Composition and render props**.
- **State collocation** (lift only when necessary).
- **Modular UI slices** via feature boundaries.

---

## 10. Handling Large Data Sets (e.g., 5K Items)

- **Virtualization** (react-window, react-virtualized).
- **Debounced filtering**.
- **Pagination** or **infinite scroll**.
- Memoize filtered results with `useMemo`.
- Keep UX smooth: loading states, skeletons, chunked rendering via `requestIdleCallback`.

---

Let me know if you'd like code examples or visual diagrams for any topic!
