Here’s a clean, structured summary of **Virtualisation in React**, perfect for interview prep, documentation, or quick reference:

---

### 🚀 **Virtualisation in React (aka Windowing)**

---

### 📘 **What Is It?**

**Virtualisation** is a rendering optimization technique that **displays only visible portions** of large lists or grids in the viewport, instead of rendering everything at once.

---

### ⚙️ **How It Works**

| Technique           | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| **Rendering Subset** | Only the visible rows/items are rendered to the DOM                        |
| **Placeholder Space**| A container with total height/width keeps the scroll behavior consistent   |
| **DOM Recycling**   | As you scroll, visible items are replaced by new ones entering the viewport |

---

### 📦 **Common Libraries**

| Library           | Use Case                             |
|-------------------|--------------------------------------|
| `react-window`    | Lightweight & fast, good for lists   |
| `react-virtualized` | More features (grids, tables, auto-sizer) |

---

### 🧪 **Code Example (Using react-window)**

```jsx
import React from 'react';
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row #{index}</div>
);

function VirtualisedList() {
  return (
    <List
      height={400}
      itemCount={1000}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  );
}
```

---

### 💼 **Real-World Scenario**

In a **chat app**, rendering thousands of messages can degrade performance. Virtualisation ensures **only visible messages** are rendered. As you scroll, older messages enter the viewport without bloating the DOM.

---

### ✅ **Pros**

- 🚀 **Performance**: Fast rendering & scrolling.
- 🧠 **Memory Efficient**: Fewer nodes = less memory.
- 😌 **Smooth UX**: Lag-free interaction with large lists.

---

### ❌ **Cons**

- ⚙️ **Complexity**: Adds implementation & debugging overhead.
- 🔄 **Dynamic Heights**: Items with variable height need special handling.
- 📚 **Learning Curve**: Requires understanding the library’s API and scroll mechanics.

---

### 📌 **When, Why, Where**

| **When?** | Large datasets (lists, grids, tables) |
|-----------|----------------------------------------|
| **Why?**  | To avoid DOM overload and jank         |
| **Where?**| Chat apps, dashboards, infinite scrolls, file lists |

---

### 🧩 **Polyfill / Compatibility**

- **Polyfill**: None needed for virtualisation itself.
- **Requirements**: ES6+ support (ensure Babel transpilation for older browsers).
- **Compatibility**: All modern browsers work fine.

---

Would you like a **visual comparison** between virtualisation and code splitting? Or maybe a **real-world implementation** combining both (like virtualised routes or image-heavy dashboards)?