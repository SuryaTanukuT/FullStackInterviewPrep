
# 💡 Comprehensive React Interview Questions & Answers (Part 2)

This is the continuation of Part 1. It covers Redux, Server-Side Rendering (SSR), security, testing, TypeScript, ReactDOMServer, accessibility, and more advanced architectural concepts.

---

## 🧭 React Architecture & Design Patterns

### Compound Component vs Render Props
Compound components share implicit state. Render props pass down state/functions explicitly.

### Container/Presenter Pattern
Separates logic (container) from UI (presenter), improving maintainability.

### HOC vs Custom Hooks
HOCs wrap components. Hooks extract reusable logic.

### Plugin-based Architecture
Use React context and dynamic imports to register and render plugins.

---

## 🔁 State Management

### When to use `useReducer`?
- Complex state logic
- Dependent state values

### Context API Optimization
Use `React.memo` and split providers to reduce re-renders.

### Redux Toolkit vs Zustand vs Recoil
- RTK: full Redux abstraction
- Zustand: minimal and scalable
- Recoil: fine-grained reactivity

### Secure Persistence
Encrypt state before storing it (e.g., in localStorage) and hydrate on load.

---

## 🚀 Performance Optimization

### Re-render Detection
Use React DevTools Profiler and console logs.

### `React.memo` vs `useMemo` vs `useCallback`
- `React.memo`: avoids re-rendering of component
- `useMemo`: memoizes value
- `useCallback`: memoizes function

### Bottleneck Detection
Use Lighthouse, Profiler, `why-did-you-render`

### Virtualization (react-window)
Renders only visible list items for large lists.

### Code Splitting
Done via `React.lazy`, `Suspense`, and Webpack dynamic imports.

### Tools for Bundle Analysis
- Webpack Bundle Analyzer
- Source-map-explorer

---

## 📘 React with TypeScript

### Typing Dynamic Children
```tsx
type Props = {
  children: React.ReactNode;
}
```

### Typing Custom Hook Returning Tuple
```tsx
function useToggle(): [boolean, () => void] { ... }
```

### Discriminated Unions
Great for form state type safety.

```tsx
type FormState = { type: 'loading' } | { type: 'error'; message: string };
```

---

## ♿ Accessibility (a11y)

### Custom Dropdown Accessibility
Use keyboard events (`onKeyDown`) and ARIA attributes.

### Tools
- Axe DevTools
- Lighthouse
- React a11y

### ARIA Use
Add `aria-*` attributes to communicate semantics.

---

## 🌍 SSR & SEO (with Next.js)

### CSR vs SSR for SEO
SSR is crawlable by search engines; CSR isn't.

### Incremental Static Regeneration (ISR)
Combines static generation with real-time updates.

### Protect API Routes in Next.js
Use middlewares and session management.

---

## 🧪 Testing & Reliability

### Testing Hooks (`useEffect`)
Use `@testing-library/react` and mock timers.

### Types of Tests
- Unit: Single function/component
- Integration: Components working together
- E2E: Entire app flow (e.g., Cypress)

### Test Error Boundaries
Use `ErrorBoundary` wrapper and simulate errors.

---

## 🔐 Security

### `dangerouslySetInnerHTML`
Renders raw HTML, may lead to XSS. Always sanitize content.

### Preventing XSS
Escape HTML and validate input.

### Secure Authentication in SPA
Use HttpOnly cookies and token expiration.

### CSP in React
Set via server headers or meta tags.

### Dependency Attacks
Use `npm audit`, `snyk`, lockfile verification.

---

## 🧱 Common Vulnerabilities

### CSRF
Mostly avoided in SPAs unless cookies are used for auth.

### Exposing API Keys
Never store in frontend. Use environment variables and proxy APIs.

### Insecure Storage
Avoid sensitive info in `localStorage`. Use secure cookies.

---

## 🛠 ReactDOMServer & SSR

### `ReactDOMServer.renderToString()`
Used for SSR to generate HTML from React.

### Enabling Production Mode
Set `NODE_ENV=production` during build.

### Replacing Render Props & HOCs with Hooks
Yes, Hooks provide better composition.

---

## ⚙️ Miscellaneous

### Switching Component
Renders conditionally based on props or context.

### Pointer Events
React supports all standard DOM pointer events.

### JSX Looping
```jsx
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

### React vs ReactDOM
- `React`: Core library
- `ReactDOM`: Web-specific rendering

### Focusing Input on Load
```jsx
useEffect(() => inputRef.current?.focus(), []);
```

### Async/Await in React
Yes, used within `useEffect` or handlers.

### Popular Animation Libraries
- Framer Motion
- React Spring

### Enforcing Code Quality
- ESLint
- Prettier

### Auto-Save Form with Debounce
```jsx
useEffect(() => {
  const handler = setTimeout(() => saveForm(data), 500);
  return () => clearTimeout(handler);
}, [data]);
```

---

## 📊 Visualization & DevTools

### Best JSON Chart Libraries
- Recharts
- Chart.js
- Victory

### API Testing
- Postman
- MSW (Mock Service Worker)

### Code Quality Tools
- ESLint
- SonarQube

---

## 🌩 Cloud Platforms

- AWS (S3, Lambda)
- Vercel (Next.js optimized)
- Netlify

---

Author: Adinarayana Namana  
LinkedIn: [https://www.linkedin.com/in/adinarayana-namana-8a0811115/](https://www.linkedin.com/in/adinarayana-namana-8a0811115/)
