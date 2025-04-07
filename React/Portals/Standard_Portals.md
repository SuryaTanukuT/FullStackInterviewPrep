Here’s your content, refined and structured for better readability and formatting:

---

# Standard Portals

## What It Is
A standard portal is created with the core API:

```javascript
ReactDOM.createPortal(child, container)
```

- **child**: The React element(s) you want to render.
- **container**: A DOM node (outside the main app root) where the content is injected.

---

## How It Works
Even though the element is rendered outside its parent container, it remains in the React tree. This means it still participates in context, state management, and event propagation.

---

## Usage Example

```javascript
function StandardModal({ children }) {
  const modalRoot = document.getElementById('modal-root');
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    modalRoot
  );
}
```

---

Let me know if you'd like further refinements or if there’s anything else you’d like me to format or explain!