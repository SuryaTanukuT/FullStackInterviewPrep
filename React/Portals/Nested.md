

# Nested Portals

## What It Is
Nested portals occur when you render a portal within another portal’s content. This is useful in scenarios where you need multiple layers of overlays, such as:
- A modal that contains a tooltip.
- A dropdown that itself uses a portal.

---

## How It Works
- Each portal is independent in terms of its container.
- Despite being rendered in different DOM nodes, nested portals remain part of the React tree. Context and event propagation work seamlessly through these layers.
- Be cautious of potential CSS and stacking issues when dealing with multiple layers of portals.

---

## Usage Example

### Tooltip Component:

```javascript
function Tooltip({ text }) {
  const tooltipRoot = document.getElementById('tooltip-root');
  return ReactDOM.createPortal(
    <div className="tooltip">{text}</div>,
    tooltipRoot
  );
}
```

### Modal With Nested Tooltip:

```javascript
function ModalWithTooltip({ children }) {
  const modalRoot = document.getElementById('modal-root');
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
      {/* Nested portal for the tooltip */}
      <Tooltip text="This is a tooltip inside a modal" />
    </div>,
    modalRoot
  );
}
```

### Explanation:
- The **modal** is rendered inside the `#modal-root` element.
- The **tooltip**, a separate portal, is rendered in the `#tooltip-root` element, making it visually distinct and layered within the modal content.

---

Let me know if there's more you'd like refined or explained!