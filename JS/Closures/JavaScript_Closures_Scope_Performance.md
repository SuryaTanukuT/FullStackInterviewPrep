
# 🧠 JavaScript Closures, Scoping & Performance

This document covers **lexical scoping**, **closures**, **memory management**, and **performance considerations** for JavaScript interviews and advanced development.

---

## 🔍 Lexical Scoping

Lexical scoping means that a variable's scope is determined by its position in the source code.

```js
function outer() {
  const a = 10;
  function inner() {
    console.log(a); // a is accessible
  }
  inner();
}
outer();
```

✅ Inner functions can access variables defined in their outer scope.

---

## 📦 Function Scope vs Block Scope

| Scope Type     | Defined By     | Example |
|----------------|----------------|---------|
| Function Scope | `function`     | `var`   |
| Block Scope    | `{}`           | `let`, `const` |

```js
if (true) {
  var x = 1;     // function-scoped
  let y = 2;     // block-scoped
}
console.log(x); // 1
// console.log(y); // ❌ ReferenceError
```

---

## 🔐 Encapsulation

Hiding internal logic and exposing only what’s necessary.

```js
function Counter() {
  let count = 0;
  return {
    increment: () => ++count,
    get: () => count
  };
}

const counter = Counter();
console.log(counter.increment()); // 1
```

✅ Achieved in JS using closures.

---

## 🎯 Closures in Event Handlers

```js
function setup() {
  let count = 0;
  document.getElementById("btn").addEventListener("click", () => {
    count++;
    console.log(`Clicked ${count} times`);
  });
}
setup();
```

✅ Closure retains access to `count` even after `setup` finishes.

---

## 🔁 Closures in Loops

Use `let` instead of `var` in loops to create block-scoped closures.

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Outputs: 0 1 2
```

Using `var` would result in `3 3 3`.

---

## 🗑️ Memory Management & Garbage Collection

Closures can cause memory leaks if they reference large objects unnecessarily.

```js
function leaky() {
  let huge = new Array(1000000).fill('*');
  return () => console.log(huge[0]);
}

const ref = leaky(); // huge stays in memory due to closure
```

✅ Clear references when no longer needed to allow garbage collection.

---

## ⚙️ Performance Considerations

- Closures may increase memory usage.
- Excessive closures can slow down large-scale apps.
- Prefer using closures where encapsulation or async behavior is necessary.

---

## 🧬 Closures in Functional Programming

Enable:
- **Currying**
- **Partial Application**
- **Memoization**
- **Data hiding**

```js
const add = a => b => a + b;
const add5 = add(5);
console.log(add5(10)); // 15
```

✅ Powerful in composing functions and keeping state.

---

Closures are fundamental to JavaScript's power in asynchronous and functional patterns, but must be used wisely for performance and memory safety.
