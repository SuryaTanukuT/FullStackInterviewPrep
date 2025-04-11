
```markdown
## 7. Portals (Rendered Outside Hierarchy)

### 🧠 What They Are

Portals allow you to render a child component into a DOM node that exists **outside the DOM hierarchy** of the parent component.

Useful for:
- Modals
- Tooltips
- Popovers
- Floating UI

---

### ⚙️ Code Example

```jsx
import ReactDOM from 'react-dom';

function Modal({ children }) {
  const modalRoot = document.getElementById('modal-root');
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    modalRoot
  );
}
```

Ensure your HTML contains a matching `modal-root` element:

```html
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
</body>
```

---

### 📘 Scenario

Imagine rendering a modal confirmation box that should appear **above everything else**, regardless of z-index or overflow in its parent. Portals let you do this cleanly.

---

### ✅ Pros and ❌ Cons

**Pros:**
- ✅ **CSS Isolation**: Ignores overflow and stacking context issues in parent containers.
- ✅ **Event Bubbling**: React events still propagate as if the component was rendered normally.

**Cons:**
- ❌ **Complex Debugging**: Output is rendered outside of expected hierarchy.
- ❌ **Multiple Roots**: Requires careful DOM root management in HTML.

---

### 📍 When, Why, and Where to Use

**📅 When to Use:**
- When an element must visually break out of parent styles.

**🤔 Why Use:**
- To avoid layout issues (like `overflow: hidden` or clipping).

**📍 Where to Use:**
- Modals, alerts, dropdowns, floating menus, etc.

---

### 🧰 Polyfill / Compatibility

- ✅ **No polyfill required.**
- 🔧 **Supported in React 16+** (2017 onwards).
- Just make sure the DOM node (e.g. `#modal-root`) exists before the component mounts.

---

> 💡 Pro Tip: Combine Portals with CSS modules or utility-first styling like Tailwind for clean layering and transitions.
```
