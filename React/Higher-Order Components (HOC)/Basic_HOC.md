
---

## 🔁 What Are Higher-Order Components (HOCs)?

A **Higher-Order Component (HOC)** is a **function** that takes a component and **returns a new component** with additional functionality.

> 🧠 **Key Idea**: HOCs allow **reusing logic** across multiple components without modifying the original component.

---

## 🧱 1. Basic HOC (Wrapper Component)

### ✨ Explanation
- A **basic HOC** wraps a component to inject shared layout, styling, or behavior.
- It does **not modify** the original component but enhances it by wrapping it with extra logic or UI.

### 📦 Code Example

```jsx
// withWrapper.js
import React from 'react';

function withWrapper(WrappedComponent) {
  return function WithWrapper(props) {
    return (
      <div className="wrapper">
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withWrapper;
```

### 🖱 Usage Example

```jsx
// Button.js
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;

// WrappedButton.js
import withWrapper from './withWrapper';
import Button from './Button';

const WrappedButton = withWrapper(Button);
export default WrappedButton;
```

---

## 🧩 Scenario

**Problem**: You want all buttons to have consistent padding and border.

**Solution**: Wrap the `Button` component using an HOC (`withWrapper`) that adds a `<div className="wrapper">` for consistent layout/styling.

---

## ✅ Pros and ❌ Cons

### ✅ Pros
- **♻️ Reusability**: Apply shared logic/layout to multiple components.
- **🧼 Encapsulation**: Keeps logic and styling separate from core component functionality.

### ❌ Cons
- **🕳 Wrapper Hell**: Too many HOCs can deeply nest your components.
- **🐞 Debugging Overhead**: Extra layers may make debugging harder in React DevTools.

---

## 📍 When, Why, and Where to Use

| When            | Why                                                  | Where                                   |
|----------------|-------------------------------------------------------|------------------------------------------|
| Adding consistent layout/styling | To enforce uniform design and structure         | Shared UI components, layout wrappers     |
| Injecting props (auth, tracking) | To abstract logic across many components       | Dashboards, route protection, theming     |

---

## ⚙️ Polyfill & Compatibility

- **Polyfill Needed?** → ❌ No
- **Works With:** React **v0.14+**
- Requires standard ES6 syntax (e.g., arrow functions, spread operators)
- Use **Babel** if targeting older environments

---
examples of **composed HOCs**, **HOC vs render props**, or how to use HOCs with **hooks/context/auth**?

```md
# 🎯 React Patterns: HOCs, Render Props, Composition, Context & Hooks

This guide demonstrates how to use **Higher-Order Components (HOCs)**, **Render Props**, **Composition**, and **Context** in React apps with practical examples.

---

## 🧱 1. Composed HOCs

Composing multiple HOCs to enhance a base component:

```jsx
// withLogger.js
const withLogger = (Component) => (props) => {
  console.log(`Rendering ${Component.name} with props`, props);
  return <Component {...props} />;
};

// withAuth.js
const withAuth = (Component) => (props) => {
  const isAuthenticated = true; // Replace with real auth logic
  if (!isAuthenticated) return <div>Please log in</div>;
  return <Component {...props} />;
};

// Utility for composition
const compose = (...hocs) => (BaseComponent) =>
  hocs.reduceRight((acc, hoc) => hoc(acc), BaseComponent);

// Usage
const MyComponent = ({ name }) => <div>Hello {name}</div>;

const EnhancedComponent = compose(
  withLogger,
  withAuth
)(MyComponent);
```

---

## 🔁 2. HOC vs Render Props

### ✅ Higher-Order Component:

```jsx
const withMousePosition = (Component) => {
  return class extends React.Component {
    state = { x: 0, y: 0 };
    handleMouseMove = (e) => this.setState({ x: e.clientX, y: e.clientY });

    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouseMove);
    }

    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove);
    }

    render() {
      return <Component {...this.props} mouse={this.state} />;
    }
  };
};

const MouseTracker = ({ mouse }) => (
  <p>Mouse is at {mouse.x}, {mouse.y}</p>
);

export default withMousePosition(MouseTracker);
```

### 🧩 Render Props:

```jsx
class Mouse extends React.Component {
  state = { x: 0, y: 0 };
  handleMouseMove = (e) => this.setState({ x: e.clientX, y: e.clientY });

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  render() {
    return this.props.render(this.state);
  }
}

const MouseTracker = () => (
  <Mouse render={({ x, y }) => <p>Mouse is at {x}, {y}</p>} />
);
```

> 💡 **HOCs** are great for separation of concerns, while **Render Props** give you more flexible rendering control.

---

## 🔐 3. HOCs with Hooks, Context, and Auth

You can mix HOCs with `useContext` and hooks safely — just make sure to call hooks inside the wrapped component.

### ✅ Example: Auth HOC using Context + Hook

```jsx
// auth-context.js
const AuthContext = React.createContext(null);
export const useAuth = () => React.useContext(AuthContext);

// withAuth.js
const withAuth = (Component) => (props) => {
  const auth = useAuth();
  if (!auth?.user) return <div>You must log in</div>;
  return <Component {...props} user={auth.user} />;
};

// Usage
const Dashboard = ({ user }) => <h1>Welcome {user.name}</h1>;
const ProtectedDashboard = withAuth(Dashboard);
```

---

## 📊 When to Use What?

| Use Case                        | Recommended Pattern   |
|--------------------------------|------------------------|
| Reuse logic between components | HOC / Render Props     |
| Need composition and isolation | HOC                    |
| You control rendering behavior | Render Props           |
| Global state like auth/theme   | Context + HOC / Hook   |
| Hook-based logic reuse         | Custom Hooks           |

---

## 💡 Tips

- Keep HOCs pure: don't modify props or context inside them.
- Compose HOCs cleanly using utilities (`compose`, `flowRight`, etc.).
- Avoid "wrapper hell" by favoring hooks/custom components when possible.
- Prefer Context API for app-wide data like auth, locale, or theme.

---

## 🔗 Resources

- [React Docs – HOC](https://reactjs.org/docs/higher-order-components.html)
- [React Docs – Render Props](https://reactjs.org/docs/render-props.html)
- [Kent C. Dodds – Compose All The Things](https://kentcdodds.com/blog/compose-all-the-things)

