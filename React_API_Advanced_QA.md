
# 💻 React and API Design Interview Questions & Answers

---

## 🌐 API & Security

### 💠 What security features should be taken while designing APIs?
- Use HTTPS.
- Validate and sanitize input.
- Rate limiting and throttling.
- Authentication (OAuth, JWT).
- Role-based access control.
- Data encryption at rest and in transit.

### 💠 What is API throttling?
Throttling controls the number of API requests a client can make, preventing abuse and managing load.

---

## ⚛️ React Performance & Features

### 💠 How to improve the performance in React Application?
- Code splitting and lazy loading.
- React.memo, useMemo, useCallback.
- Avoid anonymous functions in render.
- Virtualized lists.
- Efficient state management.

### 💠 What is debouncing in React?
Delays execution of a function until a certain time has passed since the last trigger, often used in search inputs.

### 💠 How to auto-save form inputs?
- Use `useEffect` + `setTimeout` for debounced save.
- Trigger API after every input change with delay.

### 💠 Library for JSON visualization?
- `react-chartjs-2`, `Recharts`, `Victory`, `Nivo`.

### 💠 Informing backend about API failures?
- Monitor with Sentry/New Relic.
- Create dashboards with status logs.
- Send automated alerts via Slack/email.

### 💠 Tool to improve code standards?
- ESLint with Airbnb or custom rules.
- Prettier for code formatting.

### 💠 Unit testing tools?
- Jest, React Testing Library, Enzyme.

### 💠 How to test API scenarios?
- Use `msw` or `axios-mock-adapter` for mocking.
- Test loading, success, and error states.

### 💠 Estimation for auto-save with tests?
- 4–6 hours depending on complexity.

---

## 🎯 React Concepts

### 1️⃣1️⃣ What is State Uplifting?
Moving state to a common ancestor for shared state between components.

### 1️⃣2️⃣ useMemo vs useCallback
- `useMemo`: memoizes values.
- `useCallback`: memoizes functions.

### 1️⃣3️⃣ Event Bubbling
Events propagate from child → parent. Use `e.stopPropagation()` to prevent.

### 1️⃣4️⃣ Context API vs Redux
- Context for low-frequency updates.
- Redux for scalable, predictable state.

### 1️⃣5️⃣ Redux Persist
Persists Redux state to storage, like localStorage.

### 1️⃣6️⃣ Why not just use localStorage?
Redux handles complex data flows and updates in sync with UI.

### 1️⃣7️⃣ memo vs useMemo
- `memo`: wraps components.
- `useMemo`: wraps values inside components.

### 1️⃣8️⃣ useRef vs useState
- `useRef`: mutable, does not re-render.
- `useState`: triggers re-render.

### 1️⃣9️⃣ Controlled vs Uncontrolled Components
Controlled components sync state with React. Uncontrolled use refs.

### 2️⃣0️⃣ What is Prop Drilling?
Passing props through many layers. Avoid with Context, custom hooks.

---

## ☁️ Cloud & App Scale

### 💠 Which cloud used?
AWS, Azure, GCP – depending on project.

### 1. React Limitations?
- SEO issues.
- Complex for large apps without proper architecture.

### 2. Virtual DOM Benefits?
- Batching.
- Minimizes actual DOM changes.
- Efficient diffing.

### 3. Can Hooks replace Redux?
Yes, for small/medium apps. No, for highly complex apps.

### 4. Best practices for state?
- Local: useState/useReducer.
- Shared: Context or Redux.
- Remote: React Query.

### 5. Optimizing large trees?
- Memoization.
- Splitting large components.
- Code-splitting.

### 6. Strict Mode?
Identifies unsafe lifecycle methods, double-invokes render in dev.

### 7. Preventing unnecessary re-renders?
- Memoization.
- Keys on list items.
- State granularity.

### 8. Functional vs Class Components?
Functional: hooks, concise.
Class: lifecycle methods, more verbose.

### 9. React Fiber?
Improved scheduler and rendering engine for async rendering.

### 10. Side Effects?
Handled using `useEffect`, `useLayoutEffect`.

### 11. useMemo vs useCallback?
- `useMemo`: memoize value.
- `useCallback`: memoize function.

### 12. Dynamic Forms?
Use `useState`/`useReducer`, libraries like `Formik`, `React Hook Form`.

### 13. Lazy Loading?
`React.lazy`, `Suspense` – load components on demand.

### 14. Error Boundaries?
Catch rendering errors and display fallback UI.

### 15. SSR Benefits?
SEO, faster initial load, server-side pre-render.

### 16. Styling Approaches?
CSS Modules, Styled Components, Emotion, Tailwind.

### 17. Sibling Data Sharing?
Via common parent + props or context.

### 18. useEffect for APIs?
Yes, for lifecycle-based data fetching.

### 19. Async Ops?
`async/await` in `useEffect`, Promises, SWR, React Query.

### 20. Resize Re-render?
Use `useEffect` with `window.addEventListener('resize', handler)`.

### 21. Context API Use?
Global config, themes, auth, user data.

### 22. React Router?
Dynamic route matching, nested routes, SPA routing.

### 23. Controlled vs Uncontrolled?
Controlled syncs with state, uncontrolled uses refs.

### 24. Optimize Lists/Grids?
`react-window`, `react-virtualized`.

### 25. Shallow vs Deep Comparison?
Shallow: fast, checks top-level.
Deep: recursive, checks nested values.

### 26. Async & State?
Use batching, avoid stale closures, track loading state.

### 27. Custom Hooks?
Extract reusable logic from components.

### 28. HOCs?
Wrap component with reusable logic.

### 29. Search + Debounce?
Combine `useEffect` + `setTimeout` or lodash.debounce.

### 30. Reconciliation?
Virtual DOM diffing + patching to update real DOM efficiently.
