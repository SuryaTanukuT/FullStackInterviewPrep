
```markdown
# 🧩 useEventListener Hook in React

A powerful and reusable custom React Hook to handle event listeners cleanly and efficiently.

---

## 📖 What is `useEventListener`?

`useEventListener` is a custom hook for adding and cleaning up event listeners in functional components.

It helps manage listeners safely with the latest handler function, prevents memory leaks, and improves readability.

---

## 🚀 Why Use It?

✅ Solves common issues like:

- Forgetting to remove event listeners  
- Stale closures not reflecting the latest handler  
- Adding listeners to both DOM nodes (`ref`) and global targets like `window`  
- Repetitive and verbose `useEffect` logic  

---

## 🔧 Hook Implementation

```js
import { useEffect, useRef } from "react";

function useEventListener(eventType, handler, element = window) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = element?.current || element;
    if (!targetElement?.addEventListener) return;

    const eventListener = (event) => savedHandler.current(event);
    targetElement.addEventListener(eventType, eventListener);

    return () => {
      targetElement.removeEventListener(eventType, eventListener);
    };
  }, [eventType, element]);
}
```

---

## 📦 Usage Example

### Scenario: Close a Modal on Escape Key

```jsx
import React, { useState } from "react";

function ChatModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEventListener("keydown", (e) => {
    if (e.key === "Escape") setIsOpen(false);
  });

  return isOpen ? <div className="modal">Chat Modal</div> : null;
}
```

---

## 🧠 Breakdown with Real-World Comparison

| Concept                          | How It Helps                                          | Chat App Example                                   |
|----------------------------------|--------------------------------------------------------|----------------------------------------------------|
| `useRef` to store handler        | Avoids stale closure issues                           | Modal can close based on the latest `state` logic  |
| Effect for handler update        | Keeps callback fresh without reattaching              | Even if props/state change, listener works         |
| Cleanup built-in                | Prevents memory leaks                                 | Listeners removed when component unmounts          |
| `ref` or global support          | Works with any DOM element or window                  | Useful for scroll, click, resize, Escape key, etc. |

---

## 📌 When to Use

- Detecting keyboard events (e.g., Escape to close modal)
- Handling scroll or resize
- Click outside detection
- Mouse/Touch events on canvas, maps, sliders
- Attaching events to custom DOM elements via `ref`

---

## 🔍 Comparison: `useEffect` vs `useEventListener`

| Feature                       | `useEffect` + `addEventListener` | `useEventListener`        |
|------------------------------|----------------------------------|---------------------------|
| Boilerplate                  | High                             | Low                       |
| Cleanup                      | Manual                           | Automatic                 |
| Latest handler support       | Tricky with closures             | ✅ Handled via `useRef`   |
| Works with `ref` elements    | ❌ Needs extra handling           | ✅ Built-in               |
| Reusability                  | ❌                                | ✅                        |

---

## ✅ Pros

- Clean abstraction
- Automatic cleanup
- Keeps handlers up-to-date
- Reusable across components
- Supports both global and local targets

---

## ❌ Cons

- Slight abstraction overhead for beginners
- Requires understanding of `useRef` and effects

---

## 🧪 Advanced Usage

Add options like `{ passive: true }`, debounce/throttle, etc.

```js
target.addEventListener(eventType, listener, { passive: true });
```

---

## 📎 Summary

| Question      | Answer                                                                  |
|---------------|-------------------------------------------------------------------------|
| What?         | A custom React Hook to manage event listeners                           |
| Why?          | Prevents bugs, stale handlers, and memory leaks                         |
| When to use?  | For keyboard, scroll, click, resize events in functional components     |
| Where to use? | Modals, dropdowns, maps, custom UI interactions                         |
| Comparison?   | Safer, cleaner, and more flexible than traditional `useEffect` pattern  |

---
