
```md
# 🔁 `useToggle` – Custom React Hook

`useToggle` is a simple, reusable custom React hook for toggling a boolean value. It improves code readability and eliminates repetitive toggle logic in components.

---

## 📦 What is `useToggle`?

A custom React hook that toggles a boolean state — commonly used to handle UI states like:
- Show/Hide
- Open/Close
- On/Off
- Enabled/Disabled

---

## 🛠️ Basic Implementation

```js
import { useCallback, useState } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, toggle];
}
```

---

## ✅ Usage Example

```js
const [isVisible, toggleVisibility] = useToggle();

return (
  <>
    <button onClick={toggleVisibility}>Toggle Modal</button>
    {isVisible && <Modal />}
  </>
);
```

---

## 📊 Real-Life Comparison

**Scenario:** Toggle modal on button click.

### ✅ With `useToggle`:

```js
const [isModalOpen, toggleModal] = useToggle();

return (
  <>
    <button onClick={toggleModal}>Toggle Modal</button>
    {isModalOpen && <Modal />}
  </>
);
```

### ❌ With Vanilla `useState`:

```js
const [isModalOpen, setIsModalOpen] = useState(false);

const handleToggle = () => {
  setIsModalOpen(prev => !prev);
};

return (
  <>
    <button onClick={handleToggle}>Toggle Modal</button>
    {isModalOpen && <Modal />}
  </>
);
```

---

## 🔍 Feature Comparison

| Feature                  | `useToggle`         | `useState` with Manual Toggle |
|--------------------------|---------------------|-------------------------------|
| Readability              | ✅ High             | ❌ Lower                      |
| Reusability              | ✅ High             | ❌ Needs Duplication          |
| Abstraction              | ✅ Clean            | ❌ Manual Logic               |
| Flexibility              | ❌ Boolean Only     | ✅ Any Type                   |
| Code Verbosity           | ✅ Minimal          | ❌ More Code                  |

---

## 📦 Extended Version

```js
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback((val) => {
    if (typeof val === 'boolean') {
      setValue(val);
    } else {
      setValue(prev => !prev);
    }
  }, []);

  return [value, toggle];
}
```

### Usage:
```js
toggle();      // toggles value
toggle(true);  // sets to true
toggle(false); // sets to false
```

---

## 🧠 When to Use?

Use `useToggle` when:
- You have boolean state logic (e.g., modal open/close)
- You want to improve readability
- You need to reuse toggle logic in multiple components

### Common Use Cases:
- Modals, Sidebars, Drawers
- Password visibility toggle
- Theme switch (dark/light)
- Show/hide extra content

---

## ✅ Pros & ❌ Cons

### ✅ Pros:
- Cleaner, DRY code
- Highly reusable
- Abstracts away toggle logic
- Easy to test

### ❌ Cons:
- Only handles boolean state
- Small learning curve for beginners

---

## 🧪 Example Test

```js
import { renderHook, act } from '@testing-library/react';
import useToggle from './useToggle';

test('should toggle value', () => {
  const { result } = renderHook(() => useToggle());

  expect(result.current[0]).toBe(false);
  act(() => result.current[1]());
  expect(result.current[0]).toBe(true);
  act(() => result.current[1]());
  expect(result.current[0]).toBe(false);
});
```

---

## 📁 Summary

| Key                | Info |
|--------------------|------|
| **What**           | Hook to toggle boolean state |
| **Why**            | Simplifies toggle logic      |
| **When**           | For any boolean UI toggle    |
| **Where**          | Anywhere in your components  |

