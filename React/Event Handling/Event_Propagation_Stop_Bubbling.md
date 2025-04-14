```markdown
# Event Propagation (Stop Bubbling)

## Explanation
Event propagation in React follows the **bubbling phase**, where events triggered on a child element propagate upward to its parent components. By default, any event on a child element also invokes event handlers on its parent unless explicitly stopped. You can prevent this bubbling behavior using `event.stopPropagation()`.

---

## Example

```javascript
function Parent() {
  const handleParentClick = () => console.log('Parent clicked');
  return (
    <div onClick={handleParentClick}>
      <Child />
    </div>
  );
}

function Child() {
  const handleChildClick = (e) => {
    e.stopPropagation(); // Stops the click event from bubbling up to Parent
    console.log('Child clicked');
  };

  return <button onClick={handleChildClick}>Click Child</button>;
}
```

### Explanation:
- When you click the **button**, the `handleChildClick` function logs `'Child clicked'` and stops the event from propagating.
- Without `e.stopPropagation()`, the `handleParentClick` function in the parent component would also be triggered.

---

## How It Works
- React events wrap the browser’s native events using the `SyntheticEvent` system.
- Calling `event.stopPropagation()` inside an event handler halts the event from propagating further up the component hierarchy.

---

## Scenario
In an application with **nested interactive elements**, you may want to isolate events. For example:
- **Scenario**: A clickable container wraps a list item with a delete button. Clicking the delete button should not trigger the container’s `onClick` handler.
- **Solution**: Use `stopPropagation()` in the button's handler to block the container’s event listener.

---

## Pros and Cons

### **Pros**
- **Fine Control**: Ensures only the intended event handler is executed.
- **Avoids Side Effects**: Prevents unexpected reactions in parent components.

### **Cons**
- **Complexity**: Overuse of `stopPropagation()` can make the event flow harder to debug.
- **Misuse Risks**: Accidentally stopping propagation might interfere with parent component functionality.

---

## When, Why, and Where to Use

### **When**:
- When events must be limited to specific child components without triggering parent handlers.

### **Why**:
- To create isolated behavior for nested elements and prevent unintended side effects.

### **Where**:
- **Nested Components**: Forms with buttons inside modals.
- **Clickable Lists**: Prevent accidental navigation when clicking a "delete" button in a list.
- **Modals with Inner Controls**: Block clicks on inner elements from triggering modal closure.

---

## Polyfill/Compatibility
- **No Polyfill Required**: `stopPropagation()` is a standard part of the DOM API.
- **SyntheticEvent Support**: Built into React's event system, ensuring consistent behavior across browsers.
```

To stop bubbling using `stopPropagation()`, the pros and cons, real-world scenarios, and its compatibility.

To stop event bubbling in React, you can use the `stopPropagation()` method within an event handler. This method prevents the event from propagating (or "bubbling") up the DOM hierarchy, which means it will not trigger any event handlers on parent elements.

### How to Stop Bubbling Using `stopPropagation()`:

1. **Attach an event handler to a child element.**
2. **Call `event.stopPropagation()` inside the event handler.**

This will prevent the event from bubbling to its parent elements.

### Example

Here is an example where clicking a button inside a child component won't trigger the parent component's `onClick` event.

```javascript
import React from 'react';

function Parent() {
  const handleParentClick = () => {
    console.log('Parent clicked!');
  };

  return (
    <div onClick={handleParentClick}>
      <Child />
    </div>
  );
}

function Child() {
  const handleChildClick = (e) => {
    e.stopPropagation(); // Stops the click event from bubbling to the parent
    console.log('Child clicked!');
  };

  return <button onClick={handleChildClick}>Click Child</button>;
}

export default Parent;
```

### Explanation:
- When you click the **button** inside the `Child` component, it will log `'Child clicked!'`.
- The `e.stopPropagation()` call prevents the click event from propagating up to the `Parent` component.
- Without `e.stopPropagation()`, the `Parent` component's `handleParentClick` would also be triggered, logging `'Parent clicked!'` to the console.

### When to Use:
- To prevent unintended behavior when you have nested elements with their own event handlers. For instance, in forms, modals, or nested clickable elements.
