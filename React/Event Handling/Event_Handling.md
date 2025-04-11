
## ⚡ 7. Event Handling in React

### 📘 What Is Event Handling?

**Event handling** in React is the process of responding to user interactions—like clicks, keypresses, or form submissions—by assigning functions to elements.

React uses its **Synthetic Event System** to wrap native events, providing a consistent, cross-browser experience.

---

### ⚙️ How It Works

#### 1. **Synthetic Events**
- React creates a `SyntheticEvent` object that wraps the native event.
- Benefits:
  - Cross-browser consistency.
  - Performance optimization via event pooling (in older versions).
  - Works like native events with methods like `stopPropagation()` and `preventDefault()`.

---

#### 2. **Attaching Event Handlers**

**Functional Component Example:**
```jsx
function MyButton() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

**Class Component Example with Binding:**
```jsx
class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); // Binding
  }

  handleClick() {
    console.log('Button clicked!');
  }

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```

> ✅ In functional components, use arrow functions or defined handlers.  
> 🔁 In class components, either bind in the constructor or use arrow functions.

---

#### 3. **Event Propagation (Bubbling & Capturing)**

Events bubble up through the DOM unless stopped.

**Example:**
```jsx
function Parent() {
  const handleParentClick = () => console.log('Parent clicked');

  return (
    <div onClick={handleParentClick}>
      <Child />
    </div>
  );
}

function Child() {
  const handleChildClick = (e) => {
    e.stopPropagation(); // Prevent bubbling
    console.log('Child clicked');
  };

  return <button onClick={handleChildClick}>Click Child</button>;
}
```

---

### 💡 Real-World Use Case: Login Form with Controlled Inputs

```jsx
function LoginForm({ onLogin }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Stop form from refreshing the page
    onLogin({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
```

---

### 🟢 Pros & 🔴 Cons

| Pros                             | Cons                                                  |
|----------------------------------|-------------------------------------------------------|
| ✅ Declarative & readable        | 🔴 Anonymous handlers may cause re-renders            |
| ✅ Consistent across browsers    | 🔴 Context (`this`) handling in class components adds complexity |
| ✅ Easy to pass parameters       | 🔴 Excessive inline logic may clutter JSX             |

---

### 🧠 When, Why, and Where to Use

- **When**: Anytime user interaction is needed—clicks, inputs, forms, etc.
- **Why**: To make your app interactive.
- **Where**: Buttons, input fields, forms, modals, dropdowns, etc.

---

### 📦 Polyfill/Compatibility

- No polyfills needed — React handles event normalization.
- Works in all modern browsers via React’s synthetic event system.
