
# What Is the Context API?

The Context API is a built-in feature in React that allows you to share data across the component tree without passing props down manually at every level (commonly known as prop drilling). It creates a “context” that components can subscribe to, ensuring that any changes to the context value automatically update all subscribed components.

## How Does the Context API Work?

### 1. Creating a Context

You start by creating a context using the `React.createContext()` function. This gives you an object with two properties:

- **Provider**: A component that “provides” the context value to its child components.
- **Consumer**: A component (or hook) that “consumes” the context value.

```jsx
// Creating a context with a default value
const ThemeContext = React.createContext('light');
```

### 2. The Provider

Wrap a portion of your component tree with the Provider to supply a context value. All descendant components can then access this value.

```jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### 3. The Consumer (and useContext Hook)

There are two main ways to consume the context:

**Using the Consumer Component**:

```jsx
function ThemedComponent() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => <div className={`theme-${theme}`}>Current theme: {theme}</div>}
    </ThemeContext.Consumer>
  );
}
```

**Using the useContext Hook (Recommended for Functional Components)**:

```jsx
function ThemedComponent() {
  const { theme } = React.useContext(ThemeContext);
  return <div className={`theme-${theme}`}>Current theme: {theme}</div>;
}
```

### 4. Default Values and Overriding

If a component consuming the context is not wrapped in a Provider, it uses the default value provided in `React.createContext()`. This is useful for testing or when you want a fallback value.

## Real-World Scenario: Theme Switching

Imagine you’re building an application that supports light and dark themes. Instead of passing the theme down through many layers of components, you can use the Context API to make the theme available globally.

### Code Example

```jsx
// Create the context with a default value
const ThemeContext = React.createContext('light');

// ThemeProvider component manages the theme state
function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light');
  
  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// A component that uses the theme context
function Header() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <header className={`header-${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Switch Theme</button>
    </header>
  );
}

// App component using the provider
function App() {
  return (
    <ThemeProvider>
      <Header />
      {/* Other components that can also consume ThemeContext */}
      <Content />
    </ThemeProvider>
  );
}
```

### Explanation:

- `ThemeProvider` wraps the application and holds the theme state.
- `Header` consumes the theme and toggle function using the `useContext` hook.
- The context value flows through the component tree without needing to pass props manually.

## Pros and Cons of the Context API

### Pros

- Avoids prop drilling
- Centralized data management for shared state
- Makes components more reusable

### Cons

- Can lead to unnecessary re-renders if not optimized
- Should not be overused for all kinds of state (not a replacement for full state management libraries in large apps)
