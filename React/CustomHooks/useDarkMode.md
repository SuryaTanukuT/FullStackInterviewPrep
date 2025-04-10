
```md
# 🌙 useDarkMode Hook in React

A deep dive into implementing and understanding `useDarkMode` – a custom React Hook that enables dark/light theme toggling based on user or system preferences.

---

## 🔦 What is `useDarkMode`?

`useDarkMode` is a **custom React Hook** to manage and persist a website's **dark mode** functionality. It toggles between **light and dark themes**, typically based on:

- 🧑‍💻 User toggle
- 🖥️ System preference
- 💾 Local storage (remember user’s choice)

---

## 🧠 How It Works – Basic Implementation

```js
import { useEffect, useState } from 'react';

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}
```

---

## 📘 Real-World Scenario

### Without `useDarkMode`
- State is managed manually in each component.
- No persistence across reloads.
- Dark mode resets on page refresh.
- Style inconsistencies and flickering.

### With `useDarkMode`
- All logic centralized in a hook.
- Automatically respects system preference.
- Persists across sessions via `localStorage`.
- Clean and reusable across components.

---

## ✅ Usage Example

```jsx
const [darkMode, setDarkMode] = useDarkMode();

return (
  <button onClick={() => setDarkMode(!darkMode)}>
    Switch to {darkMode ? 'Light' : 'Dark'} Mode
  </button>
);
```

---

## ⚖️ Pros vs Cons

### ✅ Pros

- 🎯 Great user experience
- ♻️ Reusable across components
- 🧠 Centralized logic
- 💾 Persistent with `localStorage`
- 🔧 Easy integration with Tailwind, CSS, etc.

### ❌ Cons

- ⚠️ SSR complexity (hydration mismatch)
- 🌍 Needs global state awareness
- 🕵️ Requires accessibility testing
- 🔁 Overkill for small/static apps

---

## 📍 When, Why, and Where?

| Question | Answer |
|---------|--------|
| **When?** | If your UI offers dark/light themes. |
| **Why?** | Improves comfort, accessibility, personalization. |
| **Where?** | In your layout, root, or context/theme provider. |

---

## 📚 Helpful Libraries

### 1. [`usehooks-ts`](https://usehooks-ts.com/react-hook/use-dark-mode)
```bash
npm install usehooks-ts
```
```js
import { useDarkMode } from 'usehooks-ts';
```

### 2. [`react-use`](https://github.com/streamich/react-use)
```bash
npm install react-use
```
```js
import { useDarkMode } from 'react-use';
```

---

## ⚙️ Tailwind Setup

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  // ...
}
```

```css
/* styles.css */
html.dark {
  background-color: #121212;
  color: white;
}
```

---

## 🛠️ Best Practices

- Prefer `class` strategy (`dark` on `<html>`) for full control.
- Use `localStorage` for persistence.
- Respect system preference via `matchMedia`.
- Avoid FOUC with SSR-aware logic.

---
