Here’s a clean, formatted version of **“1. Default Props”** for study notes, documentation, or interviews:

```markdown
## 1. 🧩 Default Props

### 🧠 Explanation
**Default props** provide fallback values for props that aren't passed by the parent component. This ensures the component can render safely and meaningfully even if some data is missing.

---

### 🧪 Code Example

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Greeting.defaultProps = {
  name: 'Guest',
};
```

If the parent doesn’t pass a `name` prop, it defaults to `"Guest"`.

---

### 📖 Scenario

Imagine a greeting component that displays a welcome message. If no user name is provided, it still works and defaults to showing:

```jsx
<Greeting />  // Renders: Hello, Guest!
```

---

### ✅ Pros and ❌ Cons

**Pros:**
- ✅ **Robustness:** Ensures the component doesn’t break when props are missing.
- ✅ **Self-Documenting:** Clearly indicates expected values and usage.

**Cons:**
- ❌ **Hidden Defaults:** Overuse might mask errors or lead to unintended fallbacks.

---

### 📌 When, Why, and Where to Use

- **When:** Whenever a component can safely function with a default value.
- **Why:** To avoid `undefined` values and reduce null checks in render logic.
- **Where:** Common in reusable UI components like:
  - Buttons with optional `label`
  - Modals with optional `title`
  - Cards or Avatars with fallback `image` or `username`

---

### 🧯 Polyfill / Compatibility

- ✅ **No polyfill needed.**
- Supported in:
  - Class components since early versions of React.
  - Functional components using `Component.defaultProps`.
- For **TypeScript**, default props are better handled via function defaults or utility types.

```tsx
function Greeting({ name = 'Guest' }: { name?: string }) {
  return <h1>Hello, {name}!</h1>;
}
```

---

Let me know if you want the TypeScript version or how it works with ES6 default parameters!
```