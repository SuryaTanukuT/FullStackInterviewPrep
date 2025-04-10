
---

```md
# 🖱️ `useHover` Custom React Hook

A reusable custom hook to track if a DOM element is being hovered. Perfect for tooltips, action buttons, overlays, and rich UI interactions.

---

## 📦 What is `useHover`?

`useHover` is a custom React hook that tracks whether an element is being hovered over. React doesn't provide this out-of-the-box, but this pattern is useful and reusable across many UI components.

---

## 🧠 Basic Implementation

```js
import { useState, useRef, useEffect } from 'react';

export function useHover() {
  const [isHovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseOver = () => setHovered(true);
    const handleMouseOut = () => setHovered(false);

    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (node) {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, [ref]);

  return [ref, isHovered];
}
```

---

## ⚙️ How to Use

```js
import React from 'react';
import { useHover } from './useHover';

function HoverComponent() {
  const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef} style={{ background: isHovered ? 'skyblue' : 'lightgray' }}>
      {isHovered ? '👋 Hovering!' : '🙈 Hover me!'}
    </div>
  );
}
```

---

## 🧪 Real-World Scenario: Product Card Hover

### ❌ Without `useHover`

```js
<div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
  {hovered && <button>Quick View</button>}
</div>
```

### ✅ With `useHover`

```js
const [ref, isHovered] = useHover();

<div ref={ref}>
  {isHovered && <button>Quick View</button>}
</div>
```

---

## ⚖️ Comparison Table

| Feature                         | Manual Handlers             | `useHover` Hook            |
|---------------------------------|-----------------------------|----------------------------|
| Reusability                     | ❌ Limited                  | ✅ High                    |
| Code Separation                 | ❌ Mixed UI + Logic         | ✅ Clean separation        |
| Setup Complexity                | ✅ Simple                   | ⚠️ Slightly more setup    |
| Event Cleanup                   | ⚠️ Manual                  | ✅ Handled automatically   |
| Extensibility (e.g. delay)      | ❌ Hard                     | ✅ Easy to add             |

---

## ✅ Pros

- ♻️ Reusable logic
- 🧼 Clean and declarative
- 🧠 Easier to read and test
- 🔒 Handles cleanup properly

---

## ❌ Cons

- ⚙️ Slightly more boilerplate (ref + effect)
- 🐛 Indirect debugging
- 📱 Not touch-friendly (hover has no effect on mobile)

---

## 🧭 When to Use

- Reusable hover behavior across components
- Show/hide elements (tooltips, overlays, action buttons)
- Build design systems or libraries

## 🚫 When Not to Use

- Quick effects achievable with `:hover` in CSS
- Touch-only devices
- Single-use one-liners

---

## 📚 Libraries That Provide `useHover`

- [`@react-aria/interactions`](https://react-spectrum.adobe.com/react-aria/useHover.html)
- [`react-use`](https://github.com/streamich/react-use)
- [`framer-motion`](https://www.framer.com/motion/)

---

## ⏱️ Optional: `useHover` with Delay

```js
export function useHoverWithDelay(delay = 100) {
  const [isHovered, setHovered] = useState(false);
  const ref = useRef(null);
  let timer = useRef(null);

  useEffect(() => {
    const node = ref.current;

    const handleMouseOver = () => {
      timer.current = setTimeout(() => setHovered(true), delay);
    };
    const handleMouseOut = () => {
      clearTimeout(timer.current);
      setHovered(false);
    };

    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (node) {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, [delay]);

  return [ref, isHovered];
}
```

---

## 🧵 Summary

| Question    | Answer                                                                 |
|-------------|------------------------------------------------------------------------|
| **What**    | Hook to detect if an element is hovered                                |
| **Why**     | Separate logic from UI, make it reusable                               |
| **When**    | Tooltips, overlays, product cards, dashboards                          |
| **Where**   | Any interactive UI needing hover-based visibility                      |
| **Pros**    | Reusable, declarative, clean, reliable cleanup                         |
| **Cons**    | Slightly more boilerplate, client-only, not touch-friendly             |

