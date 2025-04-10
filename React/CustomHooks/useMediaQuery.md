
```md
# 📱 React `useMediaQuery` Hook - Complete Guide

`useMediaQuery` is a powerful React hook that lets you dynamically respond to screen sizes or device characteristics using **CSS media queries in JavaScript**.

---

## 🔍 What is `useMediaQuery`?

`useMediaQuery` allows React components to respond **dynamically** to changes in the viewport or device features. It’s like using CSS media queries, but inside your **JavaScript logic**.

> Think: Responsive behavior in **JS**, not just in **CSS**.

---

## 🧠 Why and When to Use It?

### ✅ Why Use It?
- You want to render different components or logic based on screen size.
- You need to trigger animations, fetches, or layout changes for mobile vs desktop.
- CSS isn’t enough — you want **logic-based responsiveness**.

### ⏰ When to Use It?
- Conditional rendering based on screen size.
- When designing responsive layouts or dashboards.
- To control logic or state updates for mobile/desktop differences.

---

## 📍 Where to Use It?

- Inside **React functional components**.
- In layout-based components (e.g., `<Header />`, `<Sidebar />`, `<Dashboard />`).
- Inside **custom hooks** or logic-based wrappers.

---

## ⚙️ Basic Example with Material UI

```tsx
import { useMediaQuery } from '@mui/material';

function ResponsiveComponent() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <div>
      {isSmallScreen ? (
        <p>Mobile View</p>
      ) : (
        <p>Desktop View</p>
      )}
    </div>
  );
}
```

### 🧩 Breakdown:
- `useMediaQuery('(max-width:600px)')` returns a **boolean**.
- It listens to window size changes and updates reactively.
- Accepts any valid **CSS media query**.

---

## 🎯 Real-Life Scenario: Responsive Dashboard

Imagine an **admin dashboard**:

### ❌ Without `useMediaQuery`:
- CSS hides the sidebar, but JS still thinks it’s there.
- No way to lazy-load or animate conditionally.

### ✅ With `useMediaQuery`:
```tsx
const isMobile = useMediaQuery('(max-width:768px)');

useEffect(() => {
  if (isMobile) collapseSidebar();
  else expandSidebar();
}, [isMobile]);
```

- JS now **understands** the screen size.
- You can control sidebar state, animations, logic.

---

## ✅ Pros & ❌ Cons

### ✅ Pros:
- Reactive and real-time screen detection.
- Uses familiar CSS media query syntax.
- Enables logic-driven layout adaptation.

### ❌ Cons:
- Can bloat components if overused.
- Increases JS responsibility for layout.
- Needs care in SSR (server-side rendering) environments like Next.js.

---

## 🔁 Custom Implementation (No MUI)

```tsx
import { useEffect, useState } from 'react';

function useCustomMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    listener();
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
```

---

## 🌐 Server-Side Rendering (SSR) Note

For frameworks like **Next.js**, use `useMediaQuery` only after component has mounted:

```tsx
const isClient = typeof window !== 'undefined';

const isMobile = isClient ? useMediaQuery('(max-width:768px)') : false;
```

Or delay rendering until after hydration:

```tsx
const [hydrated, setHydrated] = useState(false);

useEffect(() => {
  setHydrated(true);
}, []);

if (!hydrated) return null;

const isMobile = useMediaQuery('(max-width:768px)');
```

---

## 🧾 Summary

| Feature        | Details                                              |
|----------------|------------------------------------------------------|
| What           | React hook to detect screen/media features           |
| Use When       | Logic/UI depends on viewport or device orientation   |
| Key Benefit    | Dynamic behavior based on screen size in JS          |
| Works With     | MUI, Custom Hooks, Plain React                       |
| SSR Handling   | Needs care in frameworks like Next.js                |

---

## 🧩 Want More?

- Need a **live demo**? Let us know!
- Want to compare **MUI vs Custom Hook**?
- Curious about **compound patterns + responsiveness**?

