# Async Await
# Deep Dive into Async/Await in JavaScript (Node.js)

## Table of Contents
- [What is Async/Await?](#what-is-asyncawait)
- [Why Use Async/Await?](#why-use-asyncawait)
- [When to Use Async/Await?](#when-to-use-asyncawait)
- [Types of Async Functions](#types-of-async-functions)
- [Alternatives to Async/Await](#alternatives-to-asyncawait)
- [Executing Multiple Async Calls in Parallel](#executing-multiple-async-calls-in-parallel)
- [Async Flow Patterns](#async-flow-patterns)
  - [Parallel](#parallel)
  - [Serial](#serial)
  - [Waterfall](#waterfall)
  - [Queues](#queues)
- [Conclusion](#conclusion)

---

## What is Async/Await?

Async/Await is syntactic sugar built on top of Promises that allows asynchronous code to be written in a synchronous style. It helps avoid the complexities of chaining `.then()` blocks and improves readability.

```js
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

## Why Use Async/Await?

- **Improved Readability**: Looks like synchronous code
- **Error Handling**: Easier with `try/catch`
- **Debugging**: Easier stack traces
- **Code Maintenance**: Reduces callback hell

## When to Use Async/Await?

- When handling asynchronous operations like:
  - Network/API calls
  - File I/O (Node.js)
  - Database queries
- When you want to write cleaner code compared to raw Promises

## Types of Async Functions

### Basic Async Function
```js
async function example() {
  return 'Hello';
}
```
Returns a Promise automatically.

### Awaiting Promises
```js
async function getData() {
  const result = await someAsyncFunction();
}
```

### Async Arrow Functions
```js
const fetchData = async () => {
  const result = await fetch(url);
};
```

## Alternatives to Async/Await

- **Callbacks**: Old, hard to manage (callback hell)
- **Promises**: Still used heavily
- **Generators with Co**: Predecessor to async/await
- **Event Emitters**: For certain Node.js patterns

## Executing Multiple Async Calls in Parallel

### Using `Promise.all`
```js
const fetchAll = async () => {
  const [res1, res2, res3] = await Promise.all([
    fetch(url1),
    fetch(url2),
    fetch(url3),
  ]);
};
```

### Using `Promise.allSettled`
```js
const results = await Promise.allSettled([
  fetch(url1),
  fetch(url2),
  fetch(url3),
]);
```

### Using `Promise.race`
```js
const firstResolved = await Promise.race([
  fetch(url1),
  fetch(url2),
]);
```

---

## Async Flow Patterns

### Parallel
Multiple async operations start simultaneously.
```js
async function parallelFlow() {
  const [a, b] = await Promise.all([fetchA(), fetchB()]);
  console.log(a, b);
}
```

### Serial
Each async operation starts after the previous one completes.
```js
async function serialFlow() {
  const a = await fetchA();
  const b = await fetchB();
  console.log(a, b);
}
```

### Waterfall
Output of one function is input to the next.
```js
async function waterfallFlow() {
  const a = await fetchA();
  const b = await fetchB(a);
  const c = await fetchC(b);
  console.log(c);
}
```

### Queues (With Concurrency Limits)
```js
const pLimit = require('p-limit');
const limit = pLimit(2);

const urls = [url1, url2, url3, url4];

const fetchLimited = async () => {
  const tasks = urls.map(url => limit(() => fetch(url)));
  const results = await Promise.all(tasks);
  console.log(results);
};
```

---

## Conclusion

Async/Await simplifies working with asynchronous code. It offers clarity, maintainability, and avoids callback hell. Understanding different async flows like parallel, serial, and waterfall helps you write efficient and readable code. Always handle errors with `try/catch` and consider concurrency limits in real-world apps.

---

> **Tip:** Use tools like `p-limit`, `async`, or libraries like `Bluebird` when advanced control is needed over async flows.

