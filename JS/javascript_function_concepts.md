# JavaScript Function Concepts — Detailed Explanation

## Function Concepts

### What is a Function Statement in JavaScript?
A **Function Statement**, also known as a **Function Declaration**, defines a named function using the `function` keyword at the start of a statement. Function statements are hoisted entirely, meaning you can call them before their definition.

```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"
```

### What is a Function Expression?
A **Function Expression** defines a function inside an expression and can be anonymous or named. Function expressions are not hoisted in the same way as declarations; the variable name is hoisted but initialized to `undefined`.

```js
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5
```

### Difference between Function Statement and Function Expression
- **Hoisting**: Declarations are hoisted completely; expressions are not.
- **Syntax Position**: Statements must stand alone; expressions can be part of other expressions.
- **Anonymous Functions**: Expressions can be anonymous; declarations must have a name.

### What is a Function Declaration?
A **Function Declaration** declares a function with a name and is hoisted. It has the form:

```js
function multiply(x, y) {
  return x * y;
}
```

### What is an Anonymous Function in JavaScript?
An **Anonymous Function** is a function without a name, often used in function expressions or callbacks.

```js
setTimeout(function() {
  console.log("Delayed Hello");
}, 1000);
```

### Syntax Error & Anonymous Functions
Using an anonymous function in a statement position without assignment can cause a syntax error:

```js
// SyntaxError
function() {
  console.log("No name");
}
```

### Use/Advantages of Anonymous Functions
- **Conciseness**: No need to name utility callbacks.
- **Encapsulation**: Limits scope when used as IIFEs.
- **Flexibility**: Convenient for inline callbacks.

### What are Named Function Expressions in JavaScript?
A **Named Function Expression** gives a name to a function expression, useful for recursion and debugging.

```js
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};
console.log(factorial(5)); // 120
```

### Corner Case Gotcha using Named Function Expression
The inner name is only visible inside the function body; referencing it externally leads to errors:

```js
console.log(fact); // ReferenceError
```

### What is the Difference between Parameters & Arguments?
- **Parameters** are named variables in a function definition.
- **Arguments** are the actual values passed to the function when called.

```js
function sum(a, b) { // a, b are parameters
  return a + b;
}
sum(2, 3); // 2, 3 are arguments
```

## Advanced Function Concepts

### First-Class Functions in JavaScript
Functions in JS are **first-class citizens**, meaning they can be:
- Assigned to variables
- Passed as arguments to other functions
- Returned from other functions
- Stored in data structures

### Functions are First-Class Citizens
This enables patterns like **higher-order functions** and **functional programming**, where functions operate on or return other functions.

### Info about Arrow Functions
Arrow functions (`=>`) provide shorter syntax and lexical `this` binding:

```js
const square = n => n * n;
```

They do not have their own `this`, `arguments`, or `new.target`.

## Callbacks & Event Handling

### What is a Callback Function in JavaScript?
A **Callback Function** is a function passed into another function as an argument, executed after an operation completes.

```js
function fetchData(cb) {
  setTimeout(() => {
    cb("Data loaded");
  }, 1000);
}
fetchData(data => console.log(data));
```

### Advantages of Callback
- **Asynchronous Control**: Handle async tasks.
- **Modularity**: Decouple operations and handlers.
- **Reusability**: Pass different callbacks to the same function.

### Callback – Dev Tools Demo in Browser
1. Open DevTools → **Sources**.
2. Set a breakpoint inside a callback passed to `addEventListener` or `setTimeout`.
3. Trigger the event or timer and inspect the call stack.

### Blocking Main Thread in JavaScript
Long-running synchronous callbacks can block the UI. Always keep callbacks short or offload heavy work to Web Workers.

### Creating Event Listeners in JavaScript
```js
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("Button clicked");
});
```

### Closures along with Event Listeners
Event listener callbacks close over variables in their outer scope:

```js
for (let i = 0; i < 3; i++) {
  btn.addEventListener("click", () => {
    console.log("Index:", i);
  });
}
```

### Garbage Collection & Removing Event Listeners
To prevent memory leaks, remove listeners when no longer needed:

```js
function handleClick() { /* ... */ }
btn.addEventListener("click", handleClick);
// Later
btn.removeEventListener("click", handleClick);
```
