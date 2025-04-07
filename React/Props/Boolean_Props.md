Here’s a structured breakdown of **"4. Boolean Props"** for clarity, usage, and interviews:

```markdown
## 4. ✅ Boolean Props

### 🧠 Explanation
**Boolean props** are used to toggle features or UI behavior **on or off**. In JSX, simply writing the prop name implies `true`, while omitting it or setting it explicitly to `false` turns it off.

---

### 🧪 Code Example

```jsx
function Alert({ isVisible, message }) {
  if (!isVisible) return null;
  return <div className="alert">{message}</div>;
}

// Usage:
<Alert isVisible message="This is an alert!" />
// Or, explicitly
<Alert isVisible={true} message="This is an alert!" />
// Not visible
<Alert isVisible={false} message="This won't show." />
```

---

### 📖 Scenario

A common case is showing/hiding elements like alerts, modals, or tooltips. The `isVisible` prop controls whether the `Alert` component should render.

---

### ✅ Pros and ❌ Cons

**Pros:**
- ✅ **Clarity:** Makes intent obvious (`isVisible`, `isDisabled`, `isLoading`).
- ✅ **Simple Conditions:** Easy to use for conditional rendering (`if (prop)`).

**Cons:**
- ❌ **Prop Overload:** Too many boolean flags can lead to bloated components.
- ❌ **Assumptions:** If a default value isn’t set, behavior might be unpredictable.

---

### 📌 When, Why, and Where to Use

- **When:** You need to **toggle** a feature or style.
- **Why:** Boolean flags are ideal for **on/off logic**, making components simple and readable.
- **Where:**
  - Modal visibility (`isOpen`)
  - Form field state (`isDisabled`, `isRequired`)
  - Loaders (`isLoading`)
  - Feature flags (`isBetaEnabled`)

---

### 🧯 Polyfill / Compatibility

- ✅ No polyfill needed.
- ✅ Works out of the box in React and standard JSX.

---

### 💡 Tip

Set default values for boolean props to avoid confusion:

```jsx
Alert.defaultProps = {
  isVisible: false
};
```

Or, in TypeScript:

```tsx
interface AlertProps {
  isVisible?: boolean;
  message: string;
}
```
```

Let me know if you want to see how boolean props can interact with styled components, conditional class names, or toggling animations!