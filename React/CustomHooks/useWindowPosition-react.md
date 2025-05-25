
# useWindowPosition in React

## 📌 What is `useWindowPosition`?

`useWindowPosition` is a **custom React hook** that tracks the current scroll position (`x`, `y`) of the **window object**.  
It's useful when you want to perform actions based on how far the user has scrolled.

---

## 🎯 Use Cases

- Animate components when scrolled into view
- Change navigation styles dynamically
- Lazy load content or trigger effects based on scroll offset

---

## 🧪 Custom Hook: `useWindowPosition`

```jsx
// useWindowPosition.js
import { useState, useEffect } from 'react';

const useWindowPosition = () => {
  const [position, setPosition] = useState({
    x: window.scrollX,
    y: window.scrollY
  });

  useEffect(() => {
    const handleScroll = () => {
      setPosition({
        x: window.scrollX,
        y: window.scrollY
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return position;
};

export default useWindowPosition;
```

---

## 👨‍💻 Usage Example

```jsx
// App.js
import React from 'react';
import useWindowPosition from './useWindowPosition';

const App = () => {
  const { x, y } = useWindowPosition();

  return (
    <div style={{ height: '2000px', padding: '20px' }}>
      <h1>Scroll position</h1>
      <p>X: {x}px</p>
      <p>Y: {y}px</p>
    </div>
  );
};

export default App;
```

---

## 🔁 Enhancement: Throttle or Debounce

For better performance, especially in complex UIs, consider throttling or debouncing the scroll handler using libraries like `lodash`.

```js
import { throttle } from 'lodash';

const handleScroll = throttle(() => {
  setPosition({ x: window.scrollX, y: window.scrollY });
}, 100);
```

---

## 🧩 Summary

✅ Tracks both horizontal and vertical scroll positions  
✅ Lightweight and reusable  
✅ Ideal for scroll-triggered effects and UI feedback

---

