
## 🎨 5. Styling HOC (Higher-Order Component)

### 💡 What It Is  
A **Styling HOC** is a pattern that wraps a component and injects **style props**, such as inline styles or theming data. It helps enforce **visual consistency** and **separates style logic** from business logic.

> 🎯 Ideal for design systems, reusable UI libraries, or themed components.

---

### 🧱 How It Works

#### 📦 Code Example

```jsx
// withStyling.js
import React from 'react';

function withStyling(WrappedComponent, styleProps) {
  return function WithStyling(props) {
    return (
      <WrappedComponent
        {...props}
        style={{ ...styleProps, ...props.style }} // allows prop override
      />
    );
  };
}

export default withStyling;
```

---

### ✅ Usage Example

```jsx
// Button.js
import React from 'react';

function Button({ style, children, onClick }) {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
```

```jsx
// StyledButton.js
import Button from './Button';
import withStyling from './withStyling';

const defaultButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '4px',
  color: '#fff',
};

const StyledButton = withStyling(Button, defaultButtonStyle);
export default StyledButton;
```

> ✅ You now have a button with a **default style** but still **override-able via props**.

---

### 📊 Pros and Cons

#### ✅ Pros:
- **Design Consistency**: Easily enforce a standard look-and-feel.
- **Reusability**: Style once, reuse everywhere.
- **Style Override Support**: Prop-based overrides allow flexibility.

#### ❌ Cons:
- **Overhead**: Adds a layer to your component tree.
- **Style Conflicts**: Merging styles may cause conflicts if keys overlap.

---

### 📍 When, Why, and Where to Use

| When                         | Why                                        | Where                                |
|-----------------------------|--------------------------------------------|---------------------------------------|
| Building design systems     | To maintain consistent styling rules       | UI libraries (e.g., buttons, cards)   |
| Supporting themes or branding | To switch styles dynamically              | Themed components (light/dark modes)  |
| Abstracting layout wrappers | To separate layout concerns                | Reusable form fields, nav bars, etc.  |

---
### 🛠 Polyfill & Compatibility

- **Polyfill Needed?**  
  ❌ None needed unless targeting very old browsers. Spread syntax (`...`) requires Babel for IE.

- **Compatibility**  
  ✅ Fully supported in **all modern React environments**.

---