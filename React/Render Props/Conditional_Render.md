
### ⚙️ **What Is It?**

**Conditional Rendering with Render Props** is about using a function prop (typically `children`) to dynamically control *what gets rendered* based on a condition.

```jsx
<ConditionalRenderer condition={isLoggedIn}>
  {() => <p>Welcome!</p>}
</ConditionalRenderer>
```

If `condition` is `true`, the `children()` function gets called and rendered. Otherwise, fallback is rendered.

---

### 🧪 **Why Use It?**

- **DRY** up conditional logic across components.
- Abstract away common patterns like authentication checks, feature flags, etc.
- Encourage declarative, testable UI logic.

---

### 🧩 **Enhanced Code Example: Feature Flag Renderer**

```jsx
// FeatureToggle.js
function FeatureToggle({ isEnabled, children, fallback = null }) {
  return isEnabled ? children() : fallback;
}
```

```jsx
// Usage
<FeatureToggle isEnabled={user.hasPremiumAccess}>
  {() => <PremiumDashboard />}
</FeatureToggle>
```

---

### ✅ **Pros**

| 🔍 Benefit               | 💡 Explanation                                                        |
|--------------------------|------------------------------------------------------------------------|
| 🔄 Reusable Logic        | Reuse for auth checks, feature flags, loading states, etc.             |
| 🧼 Clean JSX             | Moves complex conditions into component logic                          |
| 💯 Full Control          | Consumer decides *how* to render based on condition                    |
| 🔧 Easy to Extend        | Add props like `fallback`, `loader`, etc.                              |

---

### ❌ **Cons**

| ⚠️ Limitation            | 🛠️ Workaround / Consideration                                         |
|--------------------------|------------------------------------------------------------------------|
| JSX Nesting              | Use judiciously; avoid chaining multiple conditional renderers         |
| Overhead for Simple Cases| For basic inline ternary logic, plain JSX may be clearer               |

---

### 🆚 **Compared with Other Patterns**

| Pattern                 | Flexibility | Readability | Reusability | Hook Friendly | Notes                           |
|------------------------|-------------|-------------|-------------|----------------|----------------------------------|
| Render Props           | ✅ High     | ⚠️ Medium   | ✅ High     | ✅ Works fine   | Best when logic & rendering vary |
| Inline Ternary         | ⚠️ Low      | ✅ High     | ❌ Low      | ✅ Yes          | Simple cases only                |
| HOC (e.g. withAuth)     | ✅ High     | ✅ High     | ✅ High     | ❌ Not for Hooks| Good for wrapping functionality  |
| Custom Hook + Conditional JSX | ✅ High | ✅ High     | ✅ High     | ✅ Recommended | Modern approach                  |

---

### 🚀 **Modern Alternative: Custom Hook + Simple Conditional**

```jsx
// useAuth.js
const useAuth = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  // Logic...
  return isLoggedIn;
};

// App.jsx
const isLoggedIn = useAuth();

return isLoggedIn
  ? <Dashboard />
  : <LoginPrompt />;
```

👍 More idiomatic in functional components; easier to read.

---

### 🏁 Use When:

✅ You want to **encapsulate branching logic** cleanly  
✅ Multiple components need the **same condition logic**  
✅ You're building a **reusable UI utility**  

---

### 🧠 Bonus Tip

You can build advanced conditional renderers like:

- `PermissionCheck` (role-based UI)
- `EnvironmentRenderer` (dev/test/prod)
- `ResponsiveRenderer` (based on window size)

---
