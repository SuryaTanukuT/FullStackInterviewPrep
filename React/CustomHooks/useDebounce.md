
```md
# 📦 `useDebounce` Hook in React

A comprehensive guide to understanding, implementing, and using the `useDebounce` hook in React.

---

## 🚀 What is `useDebounce`?

`useDebounce` is a **custom React hook** used to **delay the update of a value or execution of a function** until after a specified period of inactivity.

It helps improve performance and user experience by **reducing the frequency of operations like API calls, filtering, etc.**

---

## 📌 Why Use It?

Without debouncing, actions like typing in a search bar could trigger an API request on **every keystroke**. This can:

- Slow down performance
- Overload APIs
- Create jittery user experiences

Debouncing solves this by **waiting** until the user has stopped typing for a set time before executing the action.

---

## 🛠️ Basic Implementation

```jsx
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Clean up timeout if value changes
    };
  }, [value, delay]);

  return debouncedValue;
}
```

---

## 📋 Example Usage

```jsx
function SearchComponent() {
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 500);

  useEffect(() => {
    if (debouncedInput) {
      fetchResults(debouncedInput); // Make API call
    }
  }, [debouncedInput]);

  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

---

## 📊 Scenario Comparison: Without vs With Debounce

### Without Debounce:

| Typing Sequence | API Called |
|-----------------|------------|
| `r`             | ✅ Yes     |
| `re`            | ✅ Yes     |
| `rea`           | ✅ Yes     |
| `reac`          | ✅ Yes     |
| `react`         | ✅ Yes     |

**Total Calls: 5**

### With Debounce (500ms):

| Typing Sequence | API Called |
|-----------------|------------|
| `r`, `re`, ...  | ❌ No      |
| `react` (pause) | ✅ Yes     |

**Total Calls: 1**

---

## ✅ When to Use

| Use Case | Recommended |
|----------|-------------|
| 🔍 Search/Autocomplete | ✅ Yes |
| 📝 Auto-save Forms | ✅ Yes |
| 📏 Resize/Scroll Events | ✅ Yes |
| 🧠 Instant Feedback | ❌ No |

---

## 👍 Pros

- 🔥 Boosts performance
- 🌈 Smooth UX
- 📦 Reusable logic
- 🧘 Reduces unnecessary function calls

---

## 👎 Cons

- ⏳ Adds delay to updates
- 🧪 Harder to test (due to timeout)
- 🌀 More complex logic
- 🛑 Not suitable for real-time UIs

---

## ⚖️ Function vs Value Debounce

| Type | Use Case |
|------|----------|
| `useDebounce(value)` | Delay *reacting* to a value |
| `debounce(func)`     | Delay *executing* a function |

### Example with lodash `debounce`

```js
import { debounce } from 'lodash';
const debouncedFetch = useCallback(debounce((val) => fetchData(val), 500), []);
```

---

## 📎 Summary

| Question | Answer |
|----------|--------|
| What is it? | A hook to delay value updates |
| Why use it? | To reduce redundant operations |
| Where to use? | Search, filter, API calls |
| Pros? | Efficient, smooth UX |
| Cons? | Delay, testing complexity |

---

## 📁 Related

- [`lodash.debounce`](https://lodash.com/docs/4.17.15#debounce)
