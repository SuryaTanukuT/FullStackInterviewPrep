Here’s a `.md` (Markdown) compatible version of your content, ideal for use in a GitHub README:

---

# 🧠 React Default Context

## 🔍 Explanation

The default (or basic) usage of **React Context** involves creating a context with a default value and providing that value via a `Provider`. Consumers can then access the value using the `Context.Consumer` or the `useContext` hook.

---

## 📦 Creating a Context

```jsx
const MyContext = React.createContext('default value');
```

> The string `'default value'` will be used if no `Provider` is found in the component tree.

---

## 🎁 Providing a Value

```jsx
function MyProvider({ children }) {
  const [value, setValue] = React.useState('light');
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}
```

---

## 📥 Consuming the Context

```jsx
function MyComponent() {
  const { value } = React.useContext(MyContext);
  return <div>Current theme: {value}</div>;
}
```

---

## 💡 Scenario

Imagine a simple theming system where you want to provide a default theme value to your application. If no `Provider` is wrapped around the tree, components will fallback to the default value.

---

## ✅ Pros and ❌ Cons

### ✅ Pros

- **Simplicity**: Easy to set up and use.
- **Centralized Data**: Provides a single source of truth.

### ❌ Cons

- **Limited Flexibility**: May not handle complex state logic or nested/global needs without additional patterns.

---

## 📘 When, Why, and Where to Use

- **When**: For basic cross-cutting concerns like theming, locale settings, or authentication status.
- **Why**: To avoid prop drilling and maintain a clear, centralized state.
- **Where**: Near the root of your component tree or in specific subtrees.

---

## 🌍 Polyfill / Compatibility

- **Compatibility**: Built into React `16.3+`; no additional polyfill is required.
- **Transpilation**: Use Babel with `@babel/preset-react` to support older browsers.

---

Let me know if you want this as a downloadable `.md` file or want similar sections for other context patterns (like nested or dynamic contexts).