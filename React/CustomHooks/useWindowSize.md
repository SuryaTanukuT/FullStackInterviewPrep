
```markdown
# 📏 `useWindowSize` in React – Full Guide

## 🔍 What is `useWindowSize`?

`useWindowSize` is a **custom React Hook** that lets you track the **browser window's dimensions** (`width` and `height`) in real-time. It's especially helpful in building **responsive components** that adapt to screen size changes.

> 🛠️ It’s not built into React by default, but is commonly implemented manually or via libraries.

---

## 🧠 Why Use `useWindowSize`?

In modern web development, responsiveness is key. This hook enables:

- Conditionally rendering components/layouts by screen size
- Detecting orientation changes (portrait/landscape)
- Handling layout shifts for better UX
- Dynamically adjusting element dimensions

---

## ✅ How to Implement `useWindowSize`

### 🔧 Custom Hook

```js
import { useState, useEffect } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
```

---

### 🧪 Usage Example

```js
import { useWindowSize } from "./useWindowSize";

function MyComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
      {width < 768 ? <MobileMenu /> : <DesktopMenu />}
    </div>
  );
}
```

---

## 🎯 Real-Life Scenario: Responsive Navbar

| Screen Width        | Rendered Component       |
|---------------------|---------------------------|
| `< 768px` (Mobile)  | `<MobileMenu />`         |
| `>= 768px` (Desktop)| `<DesktopMenu />`        |

---

## ⚖️ Pros & Cons

### ✅ Pros

- Simple and reusable
- Declarative and reactive
- Great for responsive UI logic
- Can be abstracted into libraries

### ❌ Cons

- Only works on the client (not SSR-safe without guards)
- Causes re-renders on resize
- Needs throttling for performance
- Cannot be used purely for styling (use CSS for that)

---

## 🧭 When to Use It

### ✅ Use When:

- You need **dynamic layout logic**
- Rendering components based on screen size
- Handling **device orientation**
- Custom chart sizing, modals, full-page layouts

### ⛔ Avoid When:

- You only need styling → use CSS media queries instead
- You're rendering on the server (Next.js SSR) without proper checks
- Resize performance is critical (debounce required)

---

## 🔁 Alternatives

| Approach              | Description                              | Pros                            | Cons                              |
|-----------------------|------------------------------------------|----------------------------------|-----------------------------------|
| `useWindowSize`       | Tracks window width/height               | Simple, flexible                | Not SSR-safe, can be verbose      |
| CSS Media Queries     | Style-based breakpoints only             | Fast, no JS needed              | No access in JS                   |
| `react-responsive`    | Responsive rendering via props           | Declarative, SSR support        | Extra dependency                  |
| `matchMedia` API      | JS-based media query listening           | Flexible                        | Verbose, more manual              |
| `ResizeObserver`      | Track element size (not window)          | Great for elements              | Not for full window tracking      |

---

## 💡 Advanced: Throttled Version

```js
export function useThrottledWindowSize(delay = 200) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, delay);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [delay]);

  return windowSize;
}
```

---

## 🧩 Summary

| Key        | Description                                 |
|------------|---------------------------------------------|
| 🔧 What    | Custom React hook for tracking window size |
| 🎯 Why     | For responsive rendering and layout control |
| ⏱️ When    | On layout shifts, breakpoints, and resizing |
| ✅ Pros    | Simple, reactive, adaptable                 |
| ❌ Cons    | Not SSR-safe, re-renders on resize          |

---

## 📁 File Structure (Example)

```
src/
├── hooks/
│   └── useWindowSize.js
├── components/
│   └── MyComponent.js
```

---

## 🙋‍♂️ Need More?

- ✅ TypeScript support?
- ✅ `useDebouncedWindowSize` version?
- ✅ SSR-safe version for Next.js?

> 👉 Open an issue or request a PR if you want these added!

