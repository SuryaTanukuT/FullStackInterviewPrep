
## 🔄 2. Conditional Rendering HOC

### 💡 What It Is
A **Conditional Rendering HOC** renders a component **only when a specified condition is met**. Otherwise, it renders a fallback UI (e.g., a message or a redirect). This keeps your component code clean and focused only on rendering logic.

> 🧠 Useful when certain components should only show based on auth status, feature flags, roles, or external data conditions.

---

### 🧱 How It Works

#### 📦 Code Example

```jsx
// withConditionalRender.js
import React from 'react';
import { Navigate } from 'react-router-dom'; // Optional if using redirects

function withConditionalRender(WrappedComponent, conditionFn, fallback = null) {
  return function ConditionalComponent(props) {
    const shouldRender = conditionFn(props);
    return shouldRender ? <WrappedComponent {...props} /> : fallback;
    // Or use: return shouldRender ? <WrappedComponent {...props} /> : <Navigate to="/login" />;
  };
}

export default withConditionalRender;
```

---

### 🧑‍💻 Usage Example

```jsx
// AuthenticatedComponent.js
function AuthenticatedComponent({ user }) {
  return <div>Welcome, {user.name}!</div>;
}

export default AuthenticatedComponent;
```

```jsx
// withAuth.js
import withConditionalRender from './withConditionalRender';

const isAuthenticated = props => !!props.user;

const AuthComponent = withConditionalRender(
  AuthenticatedComponent,
  isAuthenticated,
  <div>Please log in to view this content.</div>
);

export default AuthComponent;
```

---

### 📊 Pros and Cons

#### ✅ Pros
- **Separation of Concerns**: Keeps conditional logic outside UI components.
- **Reusability**: Central logic can be reused across multiple components.
- **Cleaner Components**: Components stay focused purely on rendering.

#### ❌ Cons
- **Hidden Complexity**: Abstracting conditions can make the render flow harder to trace.
- **Overuse Risk**: Too many layered HOCs can hurt readability and performance.

---

### 📍 When, Why, and Where to Use

| When                          | Why                                               | Where                                      |
|------------------------------|----------------------------------------------------|--------------------------------------------|
| When access depends on state | To enforce UI security and visibility rules       | Dashboards, role-based access areas        |
| When dealing with feature flags | To toggle UI features without changing components | A/B testing, experimental UI features      |

---

### 🛠 Polyfill & Compatibility

- **Polyfill Needed?** → ❌ No
- **Compatible With**: All modern React versions (React 16.8+)
- Uses ES6 → Make sure Babel is configured for JSX + ES6

---

add dynamic fallback logic (like redirecting or loading spinners) or want to see this combined with other HOCs like `withLogger` or `withAuth`!
---

```md
# 🎯 React Patterns: HOCs, Render Props, Composition, Context & Hooks

This guide demonstrates how to use **Higher-Order Components (HOCs)**, **Render Props**, **Composition**, **Context**, and **Hooks** in React apps — with practical examples including **auth protection**, **dynamic fallbacks**, and **loading states**.

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

---

## 🔐 3. HOCs with Hooks, Context, and Auth (with Dynamic Fallbacks)

### ✅ AuthContext Hook

```jsx
// auth-context.js
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Example: fake async auth check
  useEffect(() => {
    setTimeout(() => {
      setUser({ name: 'Jane Doe' }); // or null if unauthenticated
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### 🔄 `withAuth` HOC with Redirect and Spinner

```jsx
import { useAuth } from './auth-context';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => (props) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // or a custom spinner component
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Component {...props} user={user} />;
};
```

### 🔒 Usage: Protect Routes or Components

```jsx
const Dashboard = ({ user }) => <h1>Welcome {user.name}</h1>;

const ProtectedDashboard = withAuth(Dashboard);

// In routes
<Route path="/dashboard" element={<ProtectedDashboard />} />
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
| Need loading / redirect logic  | HOC + Context          |

---

## 💡 Tips

- Use **fallback UIs** (like loading spinners or redirects) inside HOCs for better UX.
- HOCs should stay **pure**: avoid side effects or state inside them.
- Prefer **hooks and context** for shared app-wide state like authentication, theming, etc.
- Use utilities like `compose`, `flowRight` or just chain HOCs manually.

---

## 🔗 Resources

- [React Docs – HOC](https://reactjs.org/docs/higher-order-components.html)
- [React Docs – Render Props](https://reactjs.org/docs/render-props.html)
- [React Router – Navigate](https://reactrouter.com/en/main/components/navigate)
- [Kent C. Dodds – Compose All The Things](https://kentcdodds.com/blog/compose-all-the-things)

---

- `withLogger` (logs props for debugging)
- `withAuth` (auth guard with context, loading + redirect)
- `compose` utility
- A protected component like a `Dashboard`


```md
# 🔐 Combined HOCs Example: Auth + Logger + Fallback

You can compose multiple HOCs like `withAuth`, `withLogger`, and others using a `compose()` utility. This enables reusable, layered logic for things like authentication, analytics, and more.

---

### 🧰 Utility: `compose`

```jsx
// utils/compose.js
export const compose = (...hocs) => (BaseComponent) =>
  hocs.reduceRight((acc, hoc) => hoc(acc), BaseComponent);
```

---

### 📦 HOC 1: `withLogger`

```jsx
// hocs/withLogger.js
const withLogger = (Component) => (props) => {
  console.log(`[LOG] ${Component.name} rendered with props:`, props);
  return <Component {...props} />;
};

export default withLogger;
```

---

### 🔐 HOC 2: `withAuth` (with Loading Spinner & Redirect)

```jsx
// hocs/withAuth.js
import { useAuth } from '../context/auth-context';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => (props) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // or <Spinner />
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Component {...props} user={user} />;
};

export default withAuth;
```

---

### 🧠 Auth Context Hook

```jsx
// context/auth-context.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulated async login check
  useEffect(() => {
    setTimeout(() => {
      setUser({ name: 'Jane Doe' }); // or null
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
```

---

### 🖥️ Component: `Dashboard`

```jsx
// components/Dashboard.js
const Dashboard = ({ user }) => {
  return <h1>Welcome back, {user.name}!</h1>;
};
```

---

### 🚀 Composed Component: `ProtectedDashboard`

```jsx
// components/ProtectedDashboard.js
import Dashboard from './Dashboard';
import withAuth from '../hocs/withAuth';
import withLogger from '../hocs/withLogger';
import { compose } from '../utils/compose';

const ProtectedDashboard = compose(
  withLogger,
  withAuth
)(Dashboard);

export default ProtectedDashboard;
```

---

### 📦 Usage in Router

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth-context';
import ProtectedDashboard from './components/ProtectedDashboard';
import LoginPage from './components/LoginPage';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/dashboard" element={<ProtectedDashboard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  </AuthProvider>
);
```

---

## 🧠 Why Compose HOCs?

- Add modular, layered logic (auth, logging, theming, etc.)
- Keep components clean and focused
- Easy to test and reuse

| Layer       | Logic                                  |
|-------------|-----------------------------------------|
| `withLogger`| Logs props for analytics/debugging      |
| `withAuth`  | Handles loading, redirects, user check  |
| `Dashboard` | Pure UI component                       |

---
