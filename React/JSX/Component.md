
## 🧩 2. JSX Components

### 📘 Definition
**JSX Components** are **reusable, self-contained building blocks** of a React app. They return JSX elements and can be written as:

- **Function components** (preferred)
- **Class components** (legacy or special use cases)

---

### ⚙️ How It Works

A **component** takes input via `props` and returns JSX that defines what should appear in the UI.

**Example – Functional Component:**
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

🔄 This can be reused with different data:
```jsx
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}
```

---

### 📌 Real-World Scenario

You want to greet multiple users. Instead of duplicating JSX, create a `Greeting` component and use it with different `props`. This keeps the code DRY and modular.

---

### ✅ Pros and ❌ Cons

| Pros                            | Cons                                                       |
|----------------------------------|-------------------------------------------------------------|
| ✅ Reusability                  | ❌ Too many components can create deep nesting              |
| ✅ Encapsulation (UI + logic)   | ❌ Beginners might struggle with props/state/hooks initially |
| ✅ Separation of Concerns       |                                                             |

---

### 🕵️‍♂️ When, Why, and Where to Use

- **When**: You need to reuse a UI pattern or logic.
- **Why**: To keep your code organized, testable, and maintainable.
- **Where**: Anywhere! From buttons and cards to full dashboards and pages.

---

### 🛠️ Polyfill & Compatibility

- ✅ **No runtime polyfill** required.
- 🛠️ **Babel** handles JSX + ES6+ transpilation. (Built-in with Create React App and modern tooling.)

---

### 🚀 Bonus Tip

A **component must start with a capital letter**:
```jsx
function greeting() {} // ❌ won't work
function Greeting() {} // ✅ correct
```

Want an example with **props + state** or how to convert this to a **class component**? Just let me know!