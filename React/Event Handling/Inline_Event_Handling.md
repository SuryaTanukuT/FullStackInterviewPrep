1. Inline Event Handling

Explanation

Inline event handling involves attaching an event handler directly within the JSX element using an inline arrow function or expression.

Example

function InlineButton() {
  return <button onClick={() => alert('Inline Click!')}>Click Me</button>;
}

How It Works

The event handler function is defined directly in the JSX attribute.

Scenario

Imagine a simple notification button where clicking it instantly shows an alert. Inline handling keeps the code short for simple cases.

Pros and Cons

Pros:

Simplicity: Quick and concise for small handlers.

Readability: The event logic is visible right where the element is defined.

Cons:

Performance: Creates a new function on every render, which might affect performance in large lists or complex components.

Re-render Issues: Can cause unnecessary re-renders if passed as props to child components.

When, Why, and Where to Use

When: For simple, one-off event actions in low-frequency components.

Why: To reduce boilerplate when the event logic is minimal.

Where: Small components, demo examples, or simple buttons.

Polyfill/Compatibility

No dedicated polyfill is required. Ensure your code is transpiled (using Babel) for older browsers.