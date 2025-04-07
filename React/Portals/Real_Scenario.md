# Combined Real-World Scenario

## Imagine a Multi-Layered Dashboard UI

This example demonstrates how different types of React Portals can be combined for a comprehensive UI:
- **Standard Portal**: Renders a modal.
- **Conditional Portal**: Displays the modal only when a user clicks "Open Details."
- **Nested Portal**: Adds a tooltip inside the modal to explain a feature.
- **Themed Portal**: Applies a dark or light theme based on user settings.
- **Event Handling**: Centralized event tracking ensures clicks bubble up appropriately.

---

## Example Structure

### HTML Structure (`index.html`):

```html
<div id="root"></div>
<div id="modal-root"></div>
<div id="tooltip-root"></div>
```

### ThemeContext.js:

```javascript
export const ThemeContext = React.createContext('light');
```

### Modal.js:

```javascript
import { ThemeContext } from './ThemeContext';

function Modal({ children }) {
  const modalRoot = document.getElementById('modal-root');
  const theme = useContext(ThemeContext);
  return ReactDOM.createPortal(
    <div className={`modal ${theme}`}>
      {children}
    </div>,
    modalRoot
  );
}

export default Modal;
```

### Tooltip.js:

```javascript
function Tooltip({ text }) {
  const tooltipRoot = document.getElementById('tooltip-root');
  return ReactDOM.createPortal(
    <div className="tooltip">{text}</div>,
    tooltipRoot
  );
}

export default Tooltip;
```

### App.js:

```javascript
import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Modal from './Modal';
import Tooltip from './Tooltip';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  
  return (
    <ThemeContext.Provider value={theme}>
      <div onClick={() => console.log('Parent clicked')}>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
        <button onClick={toggleTheme}>Toggle Theme</button>
        
        {isModalOpen && (
          <Modal>
            <h2>Dashboard Details</h2>
            <p>Some detailed content here...</p>
            {/* Nested portal for tooltip */}
            <Tooltip text="Hover here for more info" />
            <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
          </Modal>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
```

---

### Breakdown of Features

- **Standard Portal**: The `Modal` component uses a portal to render content inside `#modal-root`.
- **Conditional Portal**: The modal is rendered only when `isModalOpen` is `true`.
- **Nested Portal**: The `Tooltip` is rendered via its own portal inside `#tooltip-root`, nested within the modal.
- **Themed Portal**: Both the modal and tooltip receive theme styling via the `ThemeContext`.
- **Event Handling**: Click events inside the modal or tooltip bubble up to the parent container.

---

## Pros and Cons

### Pros:
- **Separation of Concerns**: Keeps overlay components isolated from the main layout while preserving the React hierarchy.
- **CSS Flexibility**: Bypasses CSS issues like clipping or stacking contexts.
- **Context and Events**: Maintains React’s context and event propagation, simplifying communication and state management.
- **Modular UI**: Enables complex layered UIs like nested modals or tooltips.

### Cons:
- **Increased Complexity**: Managing multiple DOM nodes and conditional rendering logic can add complexity to your codebase.
- **Debugging Challenges**: Rendering content across different DOM nodes may make debugging more difficult.
- **Accessibility**: Additional effort may be required for focus management and keyboard navigation when using overlays.

---

## When, Why, and Where to Use These Patterns

### When to Use:
- **Standard Portals**: For components like modals or pop-ups that need to escape normal DOM boundaries.
- **Conditional Portals**: When the portal should appear only under specific conditions.
- **Nested Portals**: For multi-layered overlays (e.g., a tooltip inside a modal).
- **Themed Portals**: When consistent theming is required across detached UI components.
- **Event Handling**: For centralized management of user interactions across these layers.

### Why Use:
- Overcome layout restrictions imposed by parent containers.
- Keep UI logically organized while fulfilling visual design requirements.
- Maintain consistent styling and behavior across complex component hierarchies.

### Where to Use:
- Dashboards, admin panels, or applications with modals, tooltips, or dropdowns.
- Scenarios where content must visually appear above other elements or outside parent containers.
- Applications requiring dynamic themes or conditional overlay components.

---

## Polyfills and Alternatives

### Native Support:
React Portals have been fully supported since React 16.

### For Older React Versions:
- **unstable_renderSubtreeIntoContainer**: Simulates portal behavior but is experimental and not recommended for production.

### Third-Party Libraries:
- **react-portal**: Provides a similar API and additional features, useful for projects requiring backward compatibility or advanced customization.

#### Installation & Example:

```bash
npm install react-portal
```

```javascript
import React from 'react';
import { Portal } from 'react-portal';

function MyModal({ isOpen, children }) {
  return (
    <Portal>
      {isOpen && <div className="modal">{children}</div>}
    </Portal>
  );
}

export default MyModal;
```

---

## Summary

React Portals are a powerful tool for rendering components outside the usual DOM hierarchy. By combining different patterns—standard, conditional, nested, and themed portals—you can create modular, efficient, and visually appealing UIs. These portals maintain React’s context and event system while addressing challenges like CSS constraints. For older React versions, alternatives like `unstable_renderSubtreeIntoContainer` or libraries such as `react-portal` can provide similar functionality.
