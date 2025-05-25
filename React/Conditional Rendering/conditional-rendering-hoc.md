
# Conditional Rendering with HOC in React

## 🧠 What is a Higher-Order Component (HOC)?
A **Higher-Order Component (HOC)** is a function that takes a component and returns a new component with enhanced behavior.

```js
const withSomething = (WrappedComponent) => {
  return (props) => {
    // logic
    return <WrappedComponent {...props} />;
  };
};
```

---

## ✅ Use Case: Conditional Rendering

We can use HOCs to conditionally render components based on props, authentication status, roles, or any other logic.

---

## 🧪 Example: `withConditionalRendering`

```jsx
// withConditionalRendering.js
import React from 'react';

const withConditionalRendering = (WrappedComponent, shouldRender) => {
  return (props) => {
    if (shouldRender(props)) {
      return <WrappedComponent {...props} />;
    }
    return null; // or <FallbackComponent />
  };
};

export default withConditionalRendering;
```

---

## 👨‍💻 Usage Example

```jsx
// MyComponent.js
import React from 'react';

const MyComponent = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default MyComponent;
```

```jsx
// App.js
import React from 'react';
import MyComponent from './MyComponent';
import withConditionalRendering from './withConditionalRendering';

const shouldRender = (props) => props.isLoggedIn;

const ProtectedComponent = withConditionalRendering(MyComponent, shouldRender);

const App = () => {
  return (
    <div>
      <ProtectedComponent isLoggedIn={true} name="John" />
      <ProtectedComponent isLoggedIn={false} name="Jane" />
    </div>
  );
};

export default App;
```

---

## 🧾 Output

```
Hello, John!
```

(No output for Jane because `isLoggedIn` is `false`)

---

## 🔁 Alternatives

- Use conditional logic directly in JSX (`{condition && <Component />}`)
- Use ternary operator (`{condition ? <Component /> : <Fallback />}`)

But HOCs are useful for **reusability** when conditional logic is used in multiple places.

---

## 🧩 Summary

✅ HOCs can encapsulate and reuse conditional rendering logic  
✅ Useful in access control, feature toggles, or showing/hiding based on props  
✅ Promotes cleaner component structure
