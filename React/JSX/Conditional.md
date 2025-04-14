
## 🔀 3. Conditional Rendering in JSX

### 📘 Definition
**Conditional rendering** refers to dynamically displaying different UI content based on certain conditions—such as app state, props, or user interaction.

---

### ⚙️ How It Works

JSX lets you use **JavaScript expressions** to conditionally render elements using:

- **Ternary operator (`condition ? A : B`)**
- **Logical AND (`condition && A`)**
- **Optional chaining or short-circuiting**

---

### 🧪 Example

#### ✅ Ternary Operator:
```jsx
const isLoggedIn = true;
const message = isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
```

#### ✅ Functional Component:
```jsx
function UserStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}
```

---

### 📌 Real-World Scenario

On a dashboard or login page:
- Show personalized greeting if user is authenticated.
- Show login prompt if user is not.

---

### ✅ Pros and ❌ Cons

| Pros                           | Cons                                                          |
|--------------------------------|---------------------------------------------------------------|
| ✅ Simple and expressive logic | ❌ Overusing inline conditions may reduce readability         |
| ✅ Dynamic & interactive UI    | ❌ Mixing UI + logic can clutter components                   |
| ✅ No special syntax required  | ❌ Deeply nested conditions can lead to spaghetti JSX         |

---

### 🕵️‍♂️ When, Why, and Where to Use

- **When**: UI elements depend on state/props (auth status, loading, feature flags).
- **Why**: To provide **context-aware** UIs without duplicating components.
- **Where**: Login pages, dashboards, toggles, permission-based components, etc.

---

### 🛠️ Polyfill & Compatibility

- ✅ Uses **vanilla JavaScript** features (ternary, `&&`, etc.)
- ✅ No polyfills required.
- 🛠️ Transpilation handled by Babel (standard JSX transformation).

---

### 💡 Bonus Patterns

#### Logical AND:
```jsx
{isLoggedIn && <h1>Welcome!</h1>}
```

#### Immediately Invoked Function Expressions (IIFE):
```jsx
{(() => {
  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  return <Content />;
})()}
```

---

Want examples with loading states, role-based access control, or nested conditions? I got you—just say the word!