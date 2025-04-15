# Event Queue
---

```markdown
# Deep Dive into Event Queue in JavaScript (Node.js)

## Table of Contents

- [Introduction](#introduction)
- [What is the Event Queue?](#what-is-the-event-queue)
- [Why is the Event Queue Used?](#why-is-the-event-queue-used)
- [How Does the Event Queue Work?](#how-does-the-event-queue-work)
- [Types of Event Queues](#types-of-event-queues)
- [Methods Involved](#methods-involved)
- [When is the Event Queue Used?](#when-is-the-event-queue-used)
- [Event Queue Flow and Phases](#event-queue-flow-and-phases)
- [Scenarios and Examples](#scenarios-and-examples)
- [Alternatives to Event Queue](#alternatives-to-event-queue)
- [Best Practices](#best-practices)
- [Conclusion](#conclusion)

---

## Introduction

JavaScript, especially in Node.js, handles asynchronous code using an **event-driven architecture**. At the heart of this architecture lies the **Event Queue**. It is an essential part of the **Event Loop mechanism**, which ensures that asynchronous callbacks are executed in an organized, non-blocking manner.

---

## What is the Event Queue?

The **Event Queue** (also called the Callback Queue or Task Queue) is a data structure that stores **callback functions** to be executed when the **call stack** is empty. These callbacks are typically associated with:

- I/O operations
- Timers (`setTimeout`, `setInterval`)
- Event listeners (e.g., HTTP requests)
- `setImmediate` (Node.js specific)

---

## Why is the Event Queue Used?

The Event Queue allows JavaScript to:

- Defer execution of asynchronous callbacks
- Avoid blocking the single-threaded execution model
- Manage operations like file I/O, HTTP requests, or timers
- Keep the application responsive and efficient

---

## How Does the Event Queue Work?

1. JavaScript executes synchronous code in the call stack.
2. Asynchronous functions are handed off to browser APIs or Node.js APIs (libuv).
3. Once completed, the associated callback is pushed to the Event Queue.
4. The Event Loop checks if the call stack is empty.
5. If yes, it dequeues a callback from the Event Queue and pushes it to the call stack.

---

## Types of Event Queues

There are multiple queues working together:

### 1. **Task Queue (Macrotask Queue)**
- `setTimeout`
- `setInterval`
- `setImmediate` (Node.js)
- I/O events (e.g., `fs.readFile`)

### 2. **Microtask Queue**
- `Promise.then`, `catch`, `finally`
- `queueMicrotask`
- `process.nextTick` (Node.js specific)

### Priority:  
Microtasks are executed **before** any macrotasks in the next iteration of the Event Loop.

---

## Methods Involved

### Macrotask Methods
```js
setTimeout(() => {}, 0);
setInterval(() => {}, 1000);
setImmediate(() => {}); // Node.js only
```

### Microtask Methods
```js
Promise.resolve().then(() => {});
process.nextTick(() => {}); // Node.js only
queueMicrotask(() => {});
```

---

## When is the Event Queue Used?

- After asynchronous tasks complete (e.g., file reads, network responses)
- When timers fire (`setTimeout`)
- During I/O callbacks
- When event listeners are triggered (e.g., `'data'`, `'end'` on streams)
- When scheduled tasks or deferred execution is needed

---

## Event Queue Flow and Phases

In Node.js, the Event Loop phases where the event queue is used include:

1. **Timers Phase**
   - Executes callbacks from `setTimeout` and `setInterval`.

2. **Pending Callbacks**
   - Executes I/O callbacks deferred to the next loop.

3. **Poll Phase**
   - Retrieves new I/O events; executes I/O-related callbacks.

4. **Check Phase**
   - Executes `setImmediate` callbacks.

5. **Close Callbacks**
   - Executes `close` events like `socket.on('close')`.

### Microtasks are executed **after** each phase.

---

## Scenarios and Examples

### Example 1: Basic Event Queue Behavior

```js
console.log('Start');

setTimeout(() => {
  console.log('Timer 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
});

console.log('End');
```

**Output:**
```
Start
End
Promise 1
Timer 1
```

### Example 2: process.nextTick vs Promise

```js
process.nextTick(() => {
  console.log('nextTick');
});

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');
```

**Output:**
```
End
nextTick
Promise
```

> `process.nextTick()` executes before Promises in Node.js.

### Example 3: setImmediate vs setTimeout

```js
setTimeout(() => console.log('setTimeout'), 0);
setImmediate(() => console.log('setImmediate'));
```

**Output (Node.js):**
```
setImmediate
setTimeout
```

> `setImmediate` usually runs before `setTimeout` if scheduled inside I/O callbacks.

---

## Alternatives to Event Queue

There are no true "alternatives", but these mechanisms help manage async flows:

- **Async/Await with Promises**: More readable than nesting callbacks.
- **Worker Threads**: Offload CPU-heavy tasks to separate threads.
- **Child Processes**: Spawn processes for heavy computation or parallelism.
- **Job Queues**: For background tasks (e.g., Bull, Agenda).

---

## Best Practices

- **Avoid blocking the queue** with heavy synchronous logic.
- Use `async/await` for better readability and control.
- Don’t overuse `process.nextTick()` — can starve the event loop.
- Schedule long-running tasks via **worker threads** or **child processes**.
- Handle errors properly in async callbacks.

---

## Conclusion

The **Event Queue** is a fundamental piece of JavaScript's non-blocking architecture. Understanding how it interacts with the **event loop**, **microtasks**, and **macrotasks** helps developers write more efficient, non-blocking, and robust Node.js applications.

Mastering these concepts allows fine control over timing, execution order, and performance optimization in both backend and frontend JavaScript environments.

---
```
