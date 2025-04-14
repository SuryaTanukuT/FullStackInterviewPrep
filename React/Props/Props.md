
```markdown
## 🔧 What Are Props in React?

### 🧠 Definition

**Props** (short for *properties*) are the mechanism for passing **data from a parent component to a child component** in React. They make components reusable, configurable, and dynamic without hardcoding values inside components.

---

### ⚙️ Key Characteristics

- **📦 Read-Only:**  
  Props are **immutable** inside the child. A component cannot change its own props.

- **➡️ Unidirectional Data Flow:**  
  Data flows **one-way** — from parent to child — ensuring predictable state and component behavior.

- **⚙️ Configuration Mechanism:**  
  Props act like **parameters** that determine how a component behaves or renders.

- **👶 `children` Prop:**  
  Any nested JSX passed between opening and closing tags is accessible via the `children` prop.

---

### 🧪 How Props Work

#### ✅ Passing Props

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage:
<Greeting name="Alice" />
```

- Here, `name="Alice"` is passed from the parent to `Greeting`.

---

#### 💬 Default Props

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Greeting.defaultProps = {
  name: 'Guest',
};
```

- If `name` is not provided, it falls back to `"Guest"`.

---

#### 🛡️ PropTypes (Runtime Type Checking)

Use the `prop-types` library to validate prop types during development.

```jsx
import PropTypes from 'prop-types';

function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
```

- Prevents bugs by ensuring correct data types for props.

---

#### 🔍 Destructuring & Spread Syntax

```jsx
function Profile({ username, bio, ...rest }) {
  return (
    <div {...rest}>
      <h2>{username}</h2>
      <p>{bio}</p>
    </div>
  );
}

// Usage:
<Profile 
  username="coder123" 
  bio="Loves React" 
  className="profile-card" 
/>
```

- **Destructuring** simplifies access to props.
- **Spread operator** (`...rest`) forwards extra props like `className`, `style`, etc.

---

### 📘 Real-World Scenario: User Profile Card

Create a reusable component for different users:

```jsx
function UserProfile({ name, profilePicture, bio }) {
  return (
    <div className="user-profile">
      <img src={profilePicture} alt={`${name}'s profile`} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

// Usage:
<UserProfile 
  name="Alice"
  profilePicture="/images/alice.png"
  bio="Frontend Developer at TechCorp"
/>
```

---

### ✅ When, Why, and Where to Use

- **When:** Anytime you need to **reuse** a component with different data.
- **Why:** To separate **structure** from **content**, and keep components flexible.
- **Where:** Everywhere — lists, forms, buttons, cards, modals, etc.

---

### 🧰 Polyfill / Compatibility

- ✅ Fully supported in all versions of React.
- ❌ No polyfill required — this is React’s core design pattern.
```

Would you like this bundled with the other concepts into a single markdown file or broken up for individual flashcards?