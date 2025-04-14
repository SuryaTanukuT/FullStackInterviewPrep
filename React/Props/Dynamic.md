
```markdown
## 2. ⚙️ Dynamic Props

### 🧠 Explanation
**Dynamic props** are props whose values change over time or are computed based on user actions, parent state, or external data sources. They make components reactive and data-driven.

---

### 🧪 Code Example

```jsx
function Clock({ time }) {
  return <p>The current time is: {time}</p>;
}

// In a parent component
function App() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <Clock time={time} />;
}
```

Here, the `Clock` component receives a **dynamic `time` prop** that updates every second.

---

### 📖 Scenario

A real-time digital clock that updates the display every second using `setInterval`. The changing `time` is passed as a dynamic prop to the `Clock` component.

---

### ✅ Pros and ❌ Cons

**Pros:**
- ✅ **Responsiveness:** Keeps UI in sync with changing data.
- ✅ **Flexibility:** Great for live data, animations, or reacting to user interactions.

**Cons:**
- ❌ **Performance Overhead:** May trigger frequent re-renders if not optimized.
- ❌ **Complex State Management:** Might require `React.memo`, `useCallback`, or throttling for performance.

---

### 📌 When, Why, and Where to Use

- **When:** Whenever component data is expected to change over time (e.g., from timers, API calls, or user input).
- **Why:** To ensure components reactively update based on parent changes or external triggers.
- **Where:**
  - Live clocks
  - Weather widgets
  - Notification counters
  - Streaming dashboards or analytics

---

### 🧯 Polyfill / Compatibility

- ✅ **No polyfill required.**
- Dynamic props work out of the box using React’s reactivity and state propagation.
```

Let me know if you’d like a TypeScript version, performance tips (like debouncing/memoization), or a real-time API example!