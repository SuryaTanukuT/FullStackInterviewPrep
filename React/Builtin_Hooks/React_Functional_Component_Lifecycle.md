# React Functional Component Lifecycle (Using Hooks)

In React functional components, lifecycle is handled through **Hooks**, primarily `useEffect`. Unlike class components, functional components do not have named lifecycle methods like `componentDidMount`, `componentDidUpdate`, or `componentWillUnmount`. However, we can replicate all lifecycle behaviors using `useEffect`.

---

## 🔄 Lifecycle of a Functional Component (React Hooks)

### 1. **Mounting** (Component is added to the DOM)
Runs only once when the component is first rendered.

```js
useEffect(() => {
  console.log('Component mounted');
}, []); // Empty dependency array = run once
```

---

### 2. **Updating** (Component re-renders due to state/props change)
Runs every time a dependency changes.

```js
useEffect(() => {
  console.log('Component updated due to count change');
}, [count]); // Runs when `count` changes
```

---

### 3. **Unmounting** (Component is removed from the DOM)
Return a cleanup function inside `useEffect`.

```js
useEffect(() => {
  return () => {
    console.log('Component will unmount');
  };
}, []);
```

---

## 🧠 Summary Table

| Lifecycle Phase       | Equivalent in Functional Component              |
|------------------------|-------------------------------------------------|
| `componentDidMount`    | `useEffect(() => {}, [])`                       |
| `componentDidUpdate`   | `useEffect(() => {}, [dependency])`             |
| `componentWillUnmount` | `useEffect(() => { return () => {} }, [])`     |

---

## 🛠 Real Example

```js
function ExampleComponent({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // componentDidMount + componentDidUpdate
    fetch(`/api/user/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));

    // componentWillUnmount
    return () => console.log('Cleanup or unsubscribe here');
  }, [userId]);

  return <div>{user?.name}</div>;
}
```
