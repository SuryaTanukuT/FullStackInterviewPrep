```markdown
# Synthetic Events in React

## Explanation
React’s **SyntheticEvent** is a cross-browser wrapper around the native event. It provides a consistent interface for handling events regardless of the browser.

---

## Example

```javascript
function SyntheticButton() {
  const handleClick = (event) => {
    console.log(event.type); // "click"
  };
  return <button onClick={handleClick}>Click Me</button>;
}
```

---

## How It Works

React normalizes events so that you don't need to worry about browser differences. It wraps the native event in a **SyntheticEvent**, which has the same properties as a native event but ensures compatibility across all browsers.

---

## Scenario

In a multi-browser enterprise app, using **SyntheticEvents** ensures that the same code works across all environments without manual adjustments for IE, Chrome, Firefox, etc.

---

## Pros and Cons

### **Pros**
- **Consistency**: Provides the same API across all browsers.
- **Performance**: Uses event pooling to optimize memory usage, which improves performance by reusing event objects.

### **Cons**
- **Event Pooling**: Events are reused, which means if you try to access event properties asynchronously, they might be null unless you call `event.persist()`.
- **Abstraction**: Developers need to learn the SyntheticEvent system, which abstracts native events.

---

## When, Why, and Where to Use

### **When**:
- In all React applications; **Synthetic Events** are used by default.

### **Why**:
- To simplify cross-browser compatibility and ensure a consistent event handling experience across different environments.

### **Where**:
- Everywhere you handle events in React, including button clicks, form submissions, mouse events, etc.

---

## Polyfill/Compatibility

- **Polyfill**: No polyfill is necessary for **Synthetic Events**—they are built into React's event system.
```