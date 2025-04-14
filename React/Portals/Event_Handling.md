
# Event Handling in Portals

## What It Is
A key feature of React Portals is that event handling works as if the portal content were part of the parent component. Events bubble up the React tree despite the DOM separation.

---

## How It Works
- When an event (like a click) occurs inside the portal, React’s synthetic event system captures it and allows it to bubble up through the component hierarchy.
- This simplifies state management and communication between components.

---

## Usage Considerations

### Event Bubbling:
- Even though the portal is in a separate DOM node, events (e.g., clicks) inside the portal will propagate up to the parent component’s event handler.

### Focus Management:
- Accessibility may require special attention, particularly for managing keyboard events or focus when interacting with portal content.

---

## Usage Example

### Parent Component with Event Handling:

```javascript
function ParentComponent() {
  const handleClick = () => alert('Event bubbled up from portal!');
  
  return (
    <div onClick={handleClick}>
      <StandardModal>
        <button onClick={() => console.log('Button clicked inside portal')}>
          Click Me
        </button>
      </StandardModal>
    </div>
  );
}
```

### Explanation:
- Clicking the button inside the portal triggers the `handleClick` function defined in the parent component.
- Despite being rendered in a separate DOM node, React's event system ensures seamless bubbling and context preservation.

---

This structure ensures clear understanding and improved readability for your GitHub Markdown file. Let me know if you need additional refinements!