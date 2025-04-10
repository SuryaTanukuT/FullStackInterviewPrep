
```markdown
# 🌀 React `useTransition` Hook — In-Depth Guide

The `useTransition` hook in React 18+ lets you differentiate between **urgent** and **non-urgent** updates, enabling smoother user experiences during **heavy state updates** like filtering large lists, navigation, etc.

---

## 🔍 What is `useTransition`?

A **React Hook** used to schedule **non-blocking UI updates** by marking certain state updates as "transitions".

### Syntax
```js
const [isPending, startTransition] = useTransition();
```

- `startTransition(fn)`: Marks updates inside `fn` as non-urgent.
- `isPending`: A boolean that indicates if the transition is ongoing.

---

## ⚙️ How It Works

By wrapping expensive operations in `startTransition`, React **defers** their execution until more **urgent updates** (like user input) complete.

---

## 💡 When, Why, and Where to Use

| Use It When...                                | Why?                                              |
|----------------------------------------------|---------------------------------------------------|
| You're filtering/searching large datasets     | Prevents UI freezing and keeps input responsive   |
| You lazy-load components or pages             | Allows smooth transitions between views           |
| You switch tabs or complex layouts            | Renders only after higher-priority updates finish |

**Where to use it:**  
Use it in components with **expensive rendering**, such as filters, search bars, tabs, or dynamic UIs.

---

## 📊 Real-World Example: Search Filtering

### 🚫 Without `useTransition`
```js
const handleChange = (e) => {
  setQuery(e.target.value);
  const filtered = items.filter(item => item.name.includes(e.target.value));
  setFilteredItems(filtered);
};
```
> ❌ UI might freeze during heavy operations like filtering 10,000 items.

---

### ✅ With `useTransition`
```js
const [isPending, startTransition] = useTransition();

const handleChange = (e) => {
  const value = e.target.value;
  setQuery(value);

  startTransition(() => {
    const filtered = items.filter(item => item.name.includes(value));
    setFilteredItems(filtered);
  });
};
```
> ✅ Input updates immediately, filtering happens in the background.

---

## 📈 Comparison Table

| Feature                  | Without `useTransition` | With `useTransition`            |
|--------------------------|-------------------------|----------------------------------|
| UI Responsiveness        | May lag/freeze           | Stays responsive                 |
| Update Priority Control  | None                    | Separate urgent/non-urgent updates |
| Ideal Use Case           | Lightweight operations  | Expensive state updates          |
| Use of `isPending`       | ❌                      | ✅ Yes, show loading state        |

---

## ✅ Pros

- Improves **performance and UX**
- Gives control over **update priority**
- Easy to implement for complex UIs

---

## ❌ Cons

- Adds **complexity** if overused
- Only works in **React 18+**
- Misuse can cause confusion with state logic

---

## 🧪 Example with Spinner

```jsx
const [isPending, startTransition] = useTransition();
const [input, setInput] = useState("");
const [filteredList, setFilteredList] = useState([]);

const handleChange = (e) => {
  const value = e.target.value;
  setInput(value);

  startTransition(() => {
    const filtered = hugeList.filter(item => item.includes(value));
    setFilteredList(filtered);
  });
};

return (
  <>
    <input value={input} onChange={handleChange} />
    {isPending && <p>Loading...</p>}
    <ul>
      {filteredList.map(item => <li key={item}>{item}</li>)}
    </ul>
  </>
);
```

---

## 🧠 Tips & Best Practices

- Combine with [`useDeferredValue`](https://react.dev/reference/react/useDeferredValue) for fine-grained control of slow-rendering components.
- Show spinners using `isPending` to give visual feedback.
- Don't wrap **everything** in a transition—only what may **block the main thread**.

---

## 🔗 References

- [React Docs: useTransition](https://react.dev/reference/react/useTransition)
- [React 18 – Concurrent Features](https://reactjs.org/blog/2022/03/29/react-v18.html)
