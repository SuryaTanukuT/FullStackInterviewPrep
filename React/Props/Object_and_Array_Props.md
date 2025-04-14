
```markdown
## 5. 🧩 Object & Array Props

### 🧠 Explanation
Props in React aren’t limited to primitive types—**objects and arrays** can be passed to convey structured, complex data.

These props are essential when working with:
- Lists of items
- Configuration settings
- Nested structures like user profiles, settings, etc.

---

### 🧪 Code Example

```jsx
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Usage
const usersData = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

<UserList users={usersData} />;
```

---

### 📖 Scenario

Imagine a team management dashboard. Instead of passing each user individually, you pass an **array of user objects** to render a team list. This simplifies the component API and keeps things modular.

---

### ✅ Pros and ❌ Cons

**Pros:**
- ✅ **Flexibility:** Can handle structured or nested data easily.
- ✅ **Clarity:** Reduces the number of props when bundling related data.
- ✅ **Dynamic Rendering:** Great for lists, tables, and dropdowns.

**Cons:**
- ❌ **Mutability Risks:** Direct mutation can lead to unexpected bugs or unnecessary re-renders.
- ❌ **Prop Validation:** Harder to validate deeply nested structures without libraries or TypeScript.
- ❌ **Re-renders:** May trigger re-renders unless you use memoization or proper `key` props.

---

### 📌 When, Why, and Where to Use

- **When:** Your component needs to deal with collections or bundled data.
- **Why:** Keeps prop passing clean and supports dynamic rendering patterns.
- **Where:**
  - Tables, charts, and lists
  - User cards or product grids
  - Forms with config-driven layouts

---

### 🧯 Polyfill / Compatibility

- ✅ Native support—no polyfill needed.
- 🔧 Use `Lodash`, `Immer`, or `useMemo` for safer manipulation and performance optimizations if you're modifying data.

---

### 💡 Tips

- **Always treat object/array props as immutable**: use spread (`...`) or methods like `.map()` to avoid mutations.
- **Combine with PropTypes or TypeScript** for better structure:

```js
UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ).isRequired
};
```

Or, in TypeScript:

```ts
type User = { id: number; name: string };
interface Props {
  users: User[];
}
```
```

Want an example using nested object props or config-based form rendering? Just say the word!