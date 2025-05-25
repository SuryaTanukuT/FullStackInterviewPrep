
# 🧠 JavaScript Function Concepts – Interview Essentials

This document explains key JavaScript function patterns and behavior, with examples and clear comments.

---

## 📝 Function Declarations vs Expressions

### Function Declaration (Hoisted)
```js
function greet() {
  return "Hello!";
}
```

### Function Expression (Not Hoisted)
```js
const greet = function() {
  return "Hello!";
};
```

✅ Use declarations when you need hoisting, expressions for dynamic functions.

---

## 🏹 Arrow Functions

```js
const add = (a, b) => a + b;

const sayHello = () => {
  console.log("Hello");
};
```

### Key Differences:
- No `this` binding
- No `arguments` object
- Cannot be used as constructors

---

## 🎯 Higher-Order Functions

A function that takes or returns another function.

```js
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

---

## 🔁 Callback Functions

Function passed as an argument to another function.

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData(data => console.log(data));
```

---

## ⚡ IIFE (Immediately Invoked Function Expression)

```js
(function() {
  console.log("Runs immediately");
})();

(() => {
  console.log("Arrow IIFE");
})();
```

✅ Useful for one-time setup or variable scoping.

---

## ✨ Rest & Spread Operators

### Rest (Collect)
```js
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
```

### Spread (Expand)
```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
```

---

## ❓ What is `this` in Different Contexts

| Context | `this` Refers To |
|--------|-------------------|
| Global | `window` (browser) or `global` (Node) |
| Method | The object the method is called on |
| Function | `undefined` (strict) or `window` (non-strict) |
| Arrow Function | Lexically inherited from parent |
| Constructor | New object instance |

```js
function show() {
  console.log(this); // global or undefined in strict mode
}

const obj = {
  show: function() {
    console.log(this); // refers to obj
  }
};
```

---

## 🍛 Currying

Transforming a function with multiple arguments into a sequence of functions.

```js
function curry(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(curry(1)(2)(3)); // 6
```

✅ Useful for function composition and partial application.

---

This guide helps clarify important JavaScript function patterns used in real-world and interview settings.
