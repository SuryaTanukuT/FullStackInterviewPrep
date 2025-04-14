
```markdown
## 7. ✅ Prop Types (Type Checking)

### 🧠 Explanation
PropTypes offer **runtime type-checking** for your component's props using the `prop-types` library. This helps developers catch bugs and validate props during development, improving component reliability.

---

### 🧪 Example

```jsx
import PropTypes from 'prop-types';

function Profile({ name, age, hobbies }) {
  return (
    <div>
      <h1>{name}</h1>
      {age && <p>Age: {age}</p>}
      <ul>
        {hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  hobbies: PropTypes.arrayOf(PropTypes.string)
};
```

🧩 If the parent passes incorrect types (e.g., a number instead of a string for `name`), React will **log a warning** in the console during development.

---

### 📖 Scenario

Imagine you're building a `Profile` component for a social app. By declaring `PropTypes`, you ensure:
- `name` is always a string and required.
- `age` is optional but must be a number.
- `hobbies` must be an array of strings.

This gives confidence that the component will behave correctly and reduce runtime surprises.

---

### ✅ Pros and ❌ Cons

**Pros:**
- ✅ **Error Checking:** Warns about incorrect types during development.
- ✅ **Documentation:** Acts as live documentation for other developers.
- ✅ **Lightweight:** Doesn’t require heavy config like TypeScript.

**Cons:**
- ❌ **Runtime Only:** Checks happen only at runtime in development mode—not in production.
- ❌ **Limited Power:** Doesn't prevent bugs before execution (unlike static typing with TypeScript).
- ❌ **Manual Maintenance:** You have to keep prop types updated manually.

---

### 📌 When, Why, and Where to Use

- **When:** Use in all components during development, especially in shared libraries or public APIs.
- **Why:** To prevent type-related bugs and make codebases easier to understand and maintain.
- **Where:** 
  - Reusable components
  - Public/shared component libraries
  - Complex or nested prop structures

---

### 📦 Polyfill / Compatibility

- ✅ **React doesn’t include PropTypes by default**—you must install it:
  ```bash
  npm install prop-types
  ```
- No special polyfill is required.
- Works with **both functional and class** components.

---

### 🛠 Advanced Usage Examples

```jsx
MyComponent.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string
  }),
  config: PropTypes.oneOf(['basic', 'advanced']),
  onSubmit: PropTypes.func,
  children: PropTypes.node
};
```

---

### 🚀 Bonus: Should You Use TypeScript Instead?

- If you're working in large codebases, or want **compile-time safety**, consider using **TypeScript**.
- But if you’re:
  - Already deep into JavaScript
  - Working in small/medium projects
  - Quickly prototyping UI components  
  ...then `PropTypes` still adds **a lot of value**.

---

Let me know if you want a cheat sheet comparing `PropTypes` and TypeScript types!
```