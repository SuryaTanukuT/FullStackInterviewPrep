# Promises
# Deep Dive into Promises in JavaScript (Node.js)

## Table of Contents
- [What are Promises?](#what-are-promises)
- [Why Use Promises?](#why-use-promises)
- [When to Use Promises?](#when-to-use-promises)
- [Promise States](#promise-states)
- [Creating Promises](#creating-promises)
- [Chaining Promises](#chaining-promises)
- [Error Handling in Promises](#error-handling-in-promises)
- [Common Promise Methods](#common-promise-methods)
- [Promise Flow Patterns](#promise-flow-patterns)
  - [Serial](#serial)
  - [Parallel](#parallel)
  - [Race](#race)
  - [All Settled](#all-settled)
- [Alternatives to Promises](#alternatives-to-promises)
- [Conclusion](#conclusion)

---

## What are Promises?

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code in a more manageable and readable way compared to callbacks.

## Why Use Promises?

- Avoid callback hell (nested callbacks)
- Easier to chain asynchronous operations
- Better error handling
- Increased code clarity and maintainability

## When to Use Promises?

- Asynchronous operations like file I/O, HTTP requests, timers
- When you need to handle multiple async operations in sequence or parallel
- Replacing traditional callback-style APIs with modern patterns

## Promise States

1. **Pending** – Initial state
2. **Fulfilled** – Operation completed successfully
3. **Rejected** – Operation failed

```js
const promise = new Promise((resolve, reject) => {
  if (/* success */) resolve(result);
  else reject(error);
});
```

## Creating Promises

### Basic Example
```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
```

## Chaining Promises

```js
myPromise
  .then(result => {
    console.log(result);
    return "Next step";
  })
  .then(step => console.log(step))
  .catch(err => console.error(err));
```

## Error Handling in Promises

```js
myPromise
  .then(data => JSON.parse(data))
  .catch(err => console.error("Error occurred:", err));
```

You can also use `.finally()` to run code regardless of the outcome:

```js
myPromise.finally(() => console.log("Cleanup done"));
```

## Common Promise Methods

### `Promise.resolve(value)`
Creates a resolved promise.

### `Promise.reject(error)`
Creates a rejected promise.

### `Promise.all([...])`
Waits for all promises to resolve or rejects immediately if any reject.

### `Promise.allSettled([...])`
Waits for all promises to settle (resolve or reject).

### `Promise.race([...])`
Resolves or rejects as soon as one promise resolves or rejects.

### `Promise.any([...])`
Resolves as soon as any promise resolves (ignores rejections).

## Promise Flow Patterns

### Serial
```js
async function serialFlow() {
  const res1 = await fetch(url1);
  const res2 = await fetch(url2);
  console.log(res1, res2);
}
```

### Parallel
```js
async function parallelFlow() {
  const [res1, res2] = await Promise.all([fetch(url1), fetch(url2)]);
  console.log(res1, res2);
}
```

### Race
```js
Promise.race([
  fetch(url1),
  fetch(url2),
]).then(fastest => console.log(fastest));
```

### All Settled
```js
Promise.allSettled([
  fetch(url1),
  fetch(url2),
]).then(results => console.log(results));
```

## Alternatives to Promises

- **Callbacks**: Old style, still used in many libraries
- **Async/Await**: Syntactic sugar over Promises
- **Event Emitters**: Useful in event-driven applications
- **Streams**: For large I/O operations with backpressure support

## Conclusion

Promises are a foundational concept in modern JavaScript, particularly in Node.js where asynchronous I/O operations are central. They make code cleaner, easier to reason about, and help manage complex async flows. When combined with async/await, they offer powerful tools for writing non-blocking applications.

---

> **Tip:** Always return Promises in your functions to ensure proper chaining and error propagation.

