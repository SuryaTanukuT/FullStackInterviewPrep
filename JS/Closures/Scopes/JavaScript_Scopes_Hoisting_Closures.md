
# 🧠 JavaScript Scoping, Closures & Strict Mode

This guide explores various **scopes**, **hoisting**, **closures**, **strict mode**, and **variable shadowing** in JavaScript with clear examples.

---

## 🌍 Global Scope

Variables declared outside any function or block are global.

```js
var globalVar = "I am global";

function show() {
  console.log(globalVar);
}
```

✅ Accessible anywhere in the script.

---

## 🔁 Function Scope

`var` declarations are function-scoped.

```js
function example() {
  var x = 10;
  console.log(x); // Accessible
}
console.log(x); // ❌ ReferenceError
```

---

## 📦 Block Scope

`let` and `const` are block-scoped.

```js
{
  let a = 1;
  const b = 2;
}
// console.log(a); // ❌ ReferenceError
```

---

## 🔐 Lexical Scope

Functions have access to the variables defined in their outer scopes.

```js
function outer() {
  let outerVar = "outer";

  function inner() {
    console.log(outerVar); // accessible
  }
  inner();
}
```

---

## 🚀 Hoisting

JavaScript moves **declarations** (not initializations) to the top.

```js
console.log(a); // undefined
var a = 5;

console.log(b); // ❌ ReferenceError
let b = 10;
```

✅ Only `var` is hoisted (initialized as `undefined`).

---

## 🔁 Closures

Functions remember the scope in which they were defined.

```js
function makeCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
```

✅ Closure retains access to `count`.

---

## 📦 Module Scope

Variables declared in ES6 modules are scoped to that module.

```js
// module.js
const secret = "hidden";
export const value = 42;
```

✅ Not available globally.

---

## 🔒 Strict Mode

Enables stricter parsing and error handling.

```js
"use strict";

x = 3.14; // ❌ ReferenceError: x is not defined
```

✅ Prevents undeclared variables, disallows some unsafe features.

---

## 🕶️ Shadowing

A variable declared in a local scope shadows the one in an outer scope.

```js
let name = "outer";

function show() {
  let name = "inner"; // shadows outer
  console.log(name);  // "inner"
}
```

✅ Use unique names or block scoping to avoid confusion.

---

This guide summarizes how JavaScript handles variable visibility, memory, and safe coding practices.
