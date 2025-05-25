
# useScrollPosition in React

## 📌 What is `useScrollPosition`?

`useScrollPosition` is a **custom React hook** that lets you monitor and react to changes in the scroll position of a window or specific element.

---

## 🎯 Use Cases

- Sticky headers
- Scroll-to-top buttons
- Trigger animations based on scroll
- Load more content on scroll

---

## 🧪 Custom Hook: `useScrollPosition`

```jsx
// useScrollPosition.js
import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
```

---

## 👨‍💻 Usage Example

```jsx
// App.js
import React from 'react';
import useScrollPosition from './useScrollPosition';

const App = () => {
  const scrollY = useScrollPosition();

  return (
    <div>
      <header
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          backgroundColor: scrollY > 100 ? 'black' : 'transparent',
          color: 'white',
          transition: '0.3s',
          padding: '10px',
        }}
      >
        Scroll Header
      </header>
      <main style={{ height: '2000px', paddingTop: '60px' }}>
        Scroll to see header change
      </main>
    </div>
  );
};

export default App;
```

---

## 🔁 Optional Enhancements

### Track scroll direction

```js
const [prevScroll, setPrevScroll] = useState(0);
const [scrollDir, setScrollDir] = useState('up');

useEffect(() => {
  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    setScrollDir(currentScroll > prevScroll ? 'down' : 'up');
    setPrevScroll(currentScroll);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [prevScroll]);
```

---

## 🧩 Summary

✅ `useScrollPosition` tracks scroll in a reusable, clean way  
✅ Useful for dynamic UI effects like headers or animations  
✅ Can be extended to track direction or scroll speed
