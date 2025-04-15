# Callbacks
# Deep Dive into Callbacks in JavaScript (Node.js)

## Table of Contents
- [What are Callbacks?](#what-are-callbacks)
- [Why Use Callbacks?](#why-use-callbacks)
- [When to Use Callbacks?](#when-to-use-callbacks)
- [Types of Callbacks](#types-of-callbacks)
- [Common Callback Patterns](#common-callback-patterns)
- [Callback Flows](#callback-flows)
  - [Serial Execution](#serial-execution)
  - [Parallel Execution](#parallel-execution)
  - [Nested (Callback Hell)](#nested-callbacks-callback-hell)
- [Error-First Callbacks](#error-first-callbacks)
- [Alternatives to Callbacks](#alternatives-to-callbacks)
- [Conclusion](#conclusion)

---

## What are Callbacks?

A **callback** is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```js
function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  const name = 'Alice';
  callback(name);
}

processUserInput(greeting);
```

In Node.js, callbacks are used extensively to handle asynchronous operations like file I/O, networking, and database interactions.

## Why Use Callbacks?

- To ensure non-blocking I/O operations
- Enables asynchronous code execution
- Provides a way to customize behavior after a task completes

## When to Use Callbacks?

- Reading or writing files
- Database queries
- Making HTTP requests
- Timer-based operations

## Types of Callbacks

### 1. Synchronous Callbacks
```js
[1, 2, 3].forEach(function(n) {
  console.log(n);
});
```

### 2. Asynchronous Callbacks
```js
setTimeout(() => {
  console.log('Async callback');
}, 1000);
```

### 3. Error-First Callbacks
Used heavily in Node.js APIs.
```js
fs.readFile('file.txt', (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});
```

## Common Callback Patterns

### Callback as Function Argument
```js
function performAction(data, callback) {
  // Do something with data
  callback(data);
}
```

### Named vs Anonymous Callback
```js
// Anonymous
fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Named
function handleRead(err, data) {
  if (err) throw err;
  console.log(data);
}
fs.readFile('file.txt', handleRead);
```

## Callback Flows

### Serial Execution
```js
function task1(cb) {
  setTimeout(() => {
    console.log('Task 1');
    cb();
  }, 1000);
}

function task2(cb) {
  setTimeout(() => {
    console.log('Task 2');
    cb();
  }, 500);
}

task1(() => task2(() => console.log('All tasks done')));
```

### Parallel Execution (Manual)
```js
let completed = 0;
function done() {
  completed++;
  if (completed === 2) console.log('Both done');
}

setTimeout(() => { console.log('A'); done(); }, 1000);
setTimeout(() => { console.log('B'); done(); }, 1000);
```

### Nested Callbacks (Callback Hell)
```js
fs.readFile('file1.txt', (err, data1) => {
  fs.readFile('file2.txt', (err, data2) => {
    fs.readFile('file3.txt', (err, data3) => {
      console.log(data1, data2, data3);
    });
  });
});
```

## Error-First Callbacks

This is a Node.js convention where the first argument of the callback is an error (if any), followed by the result.

```js
function doSomethingAsync(callback) {
  setTimeout(() => {
    const err = null;
    const result = 'Done';
    callback(err, result);
  }, 100);
}

doSomethingAsync((err, result) => {
  if (err) return console.error(err);
  console.log(result);
});
```

## Alternatives to Callbacks

- **Promises**
```js
readFilePromise('file.txt')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

- **Async/Await**
```js
async function read() {
  try {
    const data = await readFilePromise('file.txt');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

- **Event Emitters**: Useful for pub/sub patterns
- **Streams**: For handling large volumes of data efficiently

## Conclusion

Callbacks are a fundamental concept in JavaScript, especially in Node.js for handling asynchronous operations. They allow the program to remain non-blocking and responsive. However, they can lead to nested code that is hard to read and maintain, known as "callback hell". Using modern alternatives like Promises or async/await can make asynchronous code cleaner and more manageable.

---

> **Tip:** Modularize nested callbacks using named functions or refactor to use Promises or async/await when possible.


---

## 🔄 Modularizing Nested Callbacks

To avoid **callback hell**, you can:

### ✅ 1. Use **Named Functions** for Clarity

Break large nested callbacks into separate, named functions to improve readability and reusability.

```js
function onLogin(err, user) {
  if (err) return handleError(err);
  getProfile(user.id, onProfile);
}

function onProfile(err, profile) {
  if (err) return handleError(err);
  getPosts(profile.id, onPosts);
}

function onPosts(err, posts) {
  if (err) return handleError(err);
  renderPage(posts);
}

login('admin', onLogin);
```

---

### ✅ 2. Refactor to **Promises**

Promises flatten the callback pyramid and make error handling cleaner.

```js
login('admin')
  .then(user => getProfile(user.id))
  .then(profile => getPosts(profile.id))
  .then(posts => renderPage(posts))
  .catch(handleError);
```

---

### ✅ 3. Refactor to **async/await**

Using `async/await` offers the cleanest syntax, especially for sequential async flows.

```js
async function loadUserDashboard() {
  try {
    const user = await login('admin');
    const profile = await getProfile(user.id);
    const posts = await getPosts(profile.id);
    renderPage(posts);
  } catch (err) {
    handleError(err);
  }
}

loadUserDashboard();
```

---
