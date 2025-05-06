
# Higher-Order Functions & Functional Programming

## What is a Higher-Order Function?
A **higher-order function** is a function that takes other functions as arguments or returns a function as its result.

```js
function greet() {
  return () => console.log("Hello");
}
function executor(fn) {
  fn();
}
executor(greet()); // "Hello"
```

## Code Demonstration of a Higher-Order Function
```js
const numbers = [1, 2, 3];
function map(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}
const doubled = map(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6]
```

## Introduction to Functional Programming
**Functional programming** is a paradigm that treats computation as the evaluation of mathematical functions and avoids changing state or mutable data.

### DRY Principle – Don't Repeat Yourself
- Avoid duplicating logic by abstracting repeated patterns into functions.

## Mistakes People Make in Coding Interviews
- Overusing loops instead of higher‑order functions.
- Not handling edge cases (empty arrays, null values).

## How to Optimize Our Code
- Use pure functions (no side effects).
- Compose functions to build complex operations.

## Beauty of Functional Programming
- Immutability
- Predictable code
- Easier testing and debugging

## Polyfill for `map`
```js
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
}
```

# Array Methods

## `Array.map()`
Transforms each element in an array.

```js
const arr = [1, 2, 3];
const squares = arr.map(x => x ** 2);
```

## `Array.filter()`
Selects elements based on a predicate.

```js
const evens = arr.filter(x => x % 2 === 0);
```

## `Array.reduce()`
Accumulates a value by iterating.

```js
const sum = arr.reduce((acc, x) => acc + x, 0);
```

## Chaining `map`, `filter`, & `reduce`
```js
const data = [1, 2, 3, 4];
const result = data
  .filter(x => x % 2)
  .map(x => x * 10)
  .reduce((acc, x) => acc + x, 0);
```

# Callbacks & Promises

## Code Example of Callbacks and Promises
```js
// Callback
function fetchData(callback) {
  setTimeout(() => callback(null, "data"), 1000);
}

// Promise
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("data"), 1000);
  });
}
```

## `Promise.then` Function
Handles fulfilled promises:
```js
fetchDataPromise().then(data => console.log(data));
```

## Callbacks vs Promises
- **Callbacks** can lead to nested structures ("callback hell").
- **Promises** flatten async flows and provide chaining.

## Importance of Promises
- Better error handling (`.catch`).
- Clearer asynchronous code.

## Promise Object in Browser
Available globally:
```js
console.log(typeof Promise); // "function"
```

## Promise States
- **Pending** → **Fulfilled** or **Rejected**

## Promise Chaining
```js
fetchDataPromise()
  .then(data => data + " processed")
  .then(console.log)
  .catch(console.error);
```

## Common Mistakes in Promise Chaining
- Forgetting to return in `.then`.
- Not handling rejection.

# Advanced Promise Concepts

## Consuming Promises
Using `.then/.catch`.

## Creating a Promise
As shown above.

## Promise Rejection & Error Handling
```js
new Promise((_, reject) => reject("Error"))
  .catch(error => console.error(error));
```

## Advanced Promise Chaining
Returning promises inside `.then`.

## Advanced Error Handling
Using `.catch` at the end.

## Introduction to JavaScript Promise APIs
- `Promise.all`
- `Promise.allSettled`
- `Promise.race`
- `Promise.any`

## `Promise.all` for Concurrent Operations
```js
Promise.all([p1, p2]).then(([r1, r2]) => console.log(r1, r2));
```

## `Promise.all` Failure Case
Any rejection rejects the whole.

## `Promise.allSettled`
Waits for all to settle with statuses.

## `Promise.race`
Resolves/rejects with the first settled promise.

## `Promise.any`
Resolves with the first fulfilled promise.

## Revision of Promise APIs
Review behavior and use-cases.

## Promise Methods Code Examples
As above.

## Interview Questions & Differences
- **settle vs resolve vs reject vs fulfilled**

# Async/Await & Error Handling

## What is async in JS?
Marks a function to return a promise.

## Using `await`
Pauses execution until promise settles.

## Diving Deep into async/await
Built on top of promises for syntactic sugar.

## Behind the Scenes
Async functions return promises; `await` yields inside generator-like behavior.

## Real-World Examples
```js
async function fetchAll() {
  const data = await fetchDataPromise();
  console.log(data);
}
```

## Error Handling in async/await
Use `try/catch` inside async functions.

## Interview Tips
- Understand transpilation of async/await.

## Async/Await vs Promise `.then/.catch`
- More readable; linear code style.

# JavaScript Core Concepts

## Scope
- **Function scope** (`var`)
- **Block scope** (`let`, `const`)

## `this` Keyword
Contextual value depending on invocation.

## Prototype & Inheritance
- `Object.create`
- `class`, `extends`

## Basic DOM Manipulation
- `document.querySelector`
- `addEventListener`

## Events
- `click`, `submit`, `input`, `keypress`

## Functions
- Declaration, expression, arrow functions
- Methods

## Arrays and Objects
- Basic operations: push, pop, destructuring
