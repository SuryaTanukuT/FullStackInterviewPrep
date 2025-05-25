
# 🧩 Fallback Component in React

A **fallback component** in React is used to display a UI (like a loader, error message, or placeholder) when a part of the app is waiting to load (e.g., using `React.lazy`) or when something fails (e.g., error boundaries).

---

## 🚀 1. Lazy Loading with `React.Suspense`

Use a fallback UI while waiting for a lazily-loaded component.

```jsx
import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./MyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### 🧠 `fallback` is rendered until `LazyComponent` finishes loading.

---

## 💥 2. Error Boundaries with Fallback UI

React components that catch JavaScript errors anywhere in the child component tree.

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}
```

### Usage

```jsx
<ErrorBoundary>
  <ComponentThatMayFail />
</ErrorBoundary>
```

---

## ✅ When to Use Fallback Components

- **Lazy-loaded components**: show spinners or placeholders.
- **Error-prone components**: wrap in `ErrorBoundary` to prevent app crash.
- **Image loading**: provide fallback image or skeleton.

```jsx
function Image({ src }) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {!loaded && <div>Loading image...</div>}
      <img src={src} onLoad={() => setLoaded(true)} style={{ display: loaded ? 'block' : 'none' }} />
    </>
  );
}
```

---

## 📌 Summary

| Type              | Tool           | Fallback |
|-------------------|----------------|----------|
| Lazy Loading      | React.lazy + Suspense | Spinner or Placeholder |
| Runtime Error     | ErrorBoundary   | Error Message or Retry UI |
| Image or Resource | useState logic | Skeleton or Loader UI |
