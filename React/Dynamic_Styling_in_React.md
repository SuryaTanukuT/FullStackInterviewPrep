
# 🎨 Dynamic Styling in React

Dynamic styling refers to the ability to apply styles to components based on variables, props, state, or user interaction.

## ✅ Ways to Apply Dynamic Styles

### 1. **Inline Styling with State or Props**

```jsx
function Button({ isPrimary }) {
  const style = {
    backgroundColor: isPrimary ? "blue" : "gray",
    color: "white",
    padding: "10px 20px",
  };

  return <button style={style}>Click Me</button>;
}
```

### 2. **Dynamic Class Names**

```jsx
function Alert({ type }) {
  const className = type === "error" ? "alert-error" : "alert-success";
  return <div className={className}>This is an alert!</div>;
}
```

```css
/* CSS */
.alert-error {
  background-color: red;
  color: white;
}

.alert-success {
  background-color: green;
  color: white;
}
```

### 3. **Styled Components (CSS-in-JS)**

```bash
npm install styled-components
```

```jsx
import styled from "styled-components";

const Button = styled.button\`
  background: \${props => props.primary ? "blue" : "gray"};
  color: white;
  padding: 10px 20px;
\`;

function App() {
  return <Button primary>Styled Button</Button>;
}
```

### 4. **Tailwind CSS with Class Merging**

```jsx
function Badge({ active }) {
  return (
    <span className={\`px-2 py-1 \${active ? "bg-green-500" : "bg-gray-400"}\`}>
      Status
    </span>
  );
}
```

## 🧠 Best Practices

- Keep logic outside JSX when possible.
- Use conditional class libraries like `classnames` for readability.
- For complex logic, consider using styled-components or CSS modules.

## 📚 Helpful Libraries

- `classnames` – conditionally join classNames.
- `styled-components` – CSS-in-JS solution.
- `emotion` – performant styling with JavaScript.
- `tailwindcss` – utility-first CSS framework.

