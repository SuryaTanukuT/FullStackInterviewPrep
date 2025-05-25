
# 🎯 Controlling a Child Component from the Parent in React

---

## ✅ Problem

How can a **parent component directly call methods** on a **child component**, such as:
```js
childRef.current.focus();
```

This doesn't work out of the box for custom components — only DOM elements support this. To enable this for custom components, use:

---

## 🧩 `useImperativeHandle` Hook

The `useImperativeHandle` hook lets you **customize the instance value** that is exposed to parent components when using `ref`.

---

## 🔧 How It Works

### Step 1: Wrap the child with `forwardRef`

```jsx
const CustomInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    }
  }));

  return <input ref={inputRef} {...props} />;
});
```

### Step 2: Use in Parent

```jsx
function Parent() {
  const childRef = useRef();

  return (
    <>
      <CustomInput ref={childRef} />
      <button onClick={() => childRef.current.focus()}>Focus</button>
      <button onClick={() => childRef.current.clear()}>Clear</button>
    </>
  );
}
```

---

## 🧼 Why It’s Useful

- Exposes a **controlled API** to the parent.
- Helps **encapsulate internal logic** of child components.
- Makes custom components feel like native elements (e.g., `.focus()` or `.scrollIntoView()`).

---

## 🚫 Avoid Misuse

Only expose methods that are **necessary** and **intentional**. Avoid turning child components into uncontrolled, tightly coupled interfaces.

