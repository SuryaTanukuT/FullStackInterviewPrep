Here's the refined and well-structured content for **Themed Portals**:

---

# Themed Portals

## What It Is
Themed portals integrate theming or styling contexts. For instance, you can use a theme provider to pass styles to components—even those rendered in a portal. This ensures consistent styling across your app.

---

## How It Works
- Since portals remain part of the React tree, they can consume context providers like any other component.
- This is particularly valuable for modals, overlays, or other components that need to adhere to the application's theme, regardless of their location in the DOM.

---

## Usage Example

### ThemeContext.js

```javascript
export const ThemeContext = React.createContext('light');
```

### ThemedModal.js

```javascript
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ThemeContext } from './ThemeContext';

function ThemedModal({ children }) {
  const modalRoot = document.getElementById('modal-root');
  const theme = useContext(ThemeContext);
  return ReactDOM.createPortal(
    <div className={`modal ${theme}`}>
      {children}
    </div>,
    modalRoot
  );
}

export default ThemedModal;
```

### Explanation:
By wrapping your app (or a specific section) with:

```javascript
<ThemeContext.Provider value="dark">
  <ThemedModal>
    <div>Dark Themed Content</div>
  </ThemedModal>
</ThemeContext.Provider>
```

- The modal automatically consumes the `ThemeContext` and applies the appropriate theme (e.g., `dark`), even if it is rendered outside the main DOM hierarchy.

---

This approach ensures consistent styling for components that are rendered via portals. Let me know if there’s anything else you’d like to tweak or elaborate on!