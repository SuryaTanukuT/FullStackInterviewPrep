```markdown
# Inline Event Handling

## Explanation
**Inline event handling** involves attaching an event handler directly within the JSX element using an inline arrow function or expression.

---

## Example

```jsx
function InlineButton() {
  return <button onClick={() => alert('Inline Click!')}>Click Me</button>;
}
```

---

## How It Works

The event handler function is defined directly in the JSX attribute, making the code more concise for simple cases.

---

## Scenario

Imagine a simple notification button where clicking it instantly shows an alert. Inline handling keeps the code short and easy to understand for these simple actions.

---

## Pros and Cons

### **Pros:**
- **Simplicity**: Quick and concise for small handlers.
- **Readability**: The event logic is visible right where the element is defined, making it easy to understand.

### **Cons:**
- **Performance**: Creates a new function on every render, which might affect performance in large lists or complex components.
- **Re-render Issues**: Can cause unnecessary re-renders if the handler is passed as props to child components, leading to inefficiency.

---

## When, Why, and Where to Use

### **When**:
- When dealing with simple, one-off event actions in low-frequency components.

### **Why**:
- To reduce boilerplate when the event logic is minimal and doesn’t require reuse.

### **Where**:
- Small components, demo examples, or simple buttons.

---

## Polyfill/Compatibility

No dedicated polyfill is required. Ensure your code is transpiled (using Babel) for compatibility with older browsers.
```