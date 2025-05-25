
# Props Drilling in React

**Props drilling** refers to the process of passing data from a parent component to a deeply nested child component through intermediate components that do not necessarily need the data themselves.

## 🔁 Why It's Called "Drilling"
Data is being "drilled" through multiple levels of components just to reach the target component.

## 🔧 Example

```jsx
// Parent Component
function App() {
  const user = "Adinarayana";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h1>Hello, {user}</h1>;
}
```

In this example, the `user` prop is passed through `Parent` and `Child` before reaching `GrandChild`.

## ⚠️ Problems with Props Drilling
- Intermediate components become unnecessarily coupled to the data.
- Makes components harder to maintain and scale.
- Code readability and reusability suffer.

## ✅ Alternatives
- **Context API**: Share data globally without passing it through props.
- **State Management Libraries**: Redux, MobX, Recoil, Zustand, etc.

## ✅ Context API Example

```jsx
const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value="Adinarayana">
      <Parent />
    </UserContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const user = React.useContext(UserContext);
  return <h1>Hello, {user}</h1>;
}
```

Using `React.useContext`, we avoid props drilling completely.
