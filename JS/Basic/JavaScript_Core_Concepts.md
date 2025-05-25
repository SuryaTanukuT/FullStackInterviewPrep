
# 📘 Core JavaScript Concepts – Reference Guide

This document explains essential JavaScript concepts with examples and explanations.

---

## 📌 Data Types

### 1. Primitive Types
- **String**: `"Hello"`
- **Number**: `42`, `3.14`
- **Boolean**: `true`, `false`
- **Null**: intentional absence of value
- **Undefined**: declared but not assigned
- **Symbol**: unique identifier
- **BigInt**: large integers

```js
let a = "text";         // String
let b = 123;            // Number
let c = true;           // Boolean
let d = null;           // Null
let e;                  // Undefined
let f = Symbol("id");   // Symbol
let g = 1234567890123456789012345678901234567890n; // BigInt
```

---

## 📌 Variables: var, let, const

| Keyword | Scope        | Hoisting | Reassignable |
|---------|--------------|----------|--------------|
| var     | Function     | Yes      | Yes          |
| let     | Block        | No       | Yes          |
| const   | Block        | No       | No           |

```js
{
  var a = 1;     // accessible outside block
  let b = 2;     // block-scoped
  const c = 3;   // block-scoped, read-only
}
console.log(a); // ✅
```

---

## 🔁 Type Coercion & Type Conversion

### Coercion (Automatic)
```js
'5' + 2       // "52"
'5' - 2       // 3
true + 1      // 2
```

### Conversion (Manual)
```js
Number('5');         // 5
String(123);         // "123"
Boolean(0);          // false
```

---

## 🔍 Selecting Elements

```js
document.querySelector('div');
document.querySelectorAll('p');

document.getElementById('myId');
document.getElementsByClassName('myClass');
document.getElementsByTagName('span');
```

---

## ✏️ Creating & Modifying Elements

```js
const el = document.createElement('div');
el.textContent = 'Hello World';
el.classList.add('box');
document.body.appendChild(el);

// Modify existing
el.style.color = 'blue';
```

---

## 🧾 Working with Forms

```js
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputVal = document.querySelector('input[name="username"]').value;
  console.log(inputVal);
});
```

---

## 📥 DOMContentLoaded vs window.onload

```js
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');
});

window.onload = () => {
  console.log('All resources loaded');
};
```

- `DOMContentLoaded`: when HTML is loaded and parsed
- `window.onload`: after images, CSS, and assets load

---

## 🛑 try...catch...finally

```js
try {
  const result = riskyFunction();
} catch (error) {
  console.error('Something went wrong:', error);
} finally {
  console.log('Always runs');
}
```

---

## ❗ Throwing Custom Errors

```js
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}
```

---

## ❌ Common Runtime Errors

| Error | Cause |
|-------|-------|
| `ReferenceError` | Variable is not defined |
| `TypeError` | Operation on wrong data type |
| `SyntaxError` | Incorrect code syntax |
| `RangeError` | Out-of-range values |
| `EvalError` | Bad use of eval() |
| `URIError` | Malformed URI |

---

This guide helps reinforce foundational JavaScript knowledge for interviews and day-to-day development.
