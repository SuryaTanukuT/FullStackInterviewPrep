# Event Loop

---

```markdown
# Deep Dive into Event Loop in JavaScript (Node.js)

## Table of Contents

- [Introduction](#introduction)
- [What is the Event Loop?](#what-is-the-event-loop)
- [Why is the Event Loop Used?](#why-is-the-event-loop-used)
- [When is the Event Loop Used?](#when-is-the-event-loop-used)
- [How the Event Loop Works](#how-the-event-loop-works)
- [Phases of the Event Loop](#phases-of-the-event-loop)
- [Timers and Methods](#timers-and-methods)
- [Microtasks vs Macrotasks](#microtasks-vs-macrotasks)
- [Event Loop in Node.js vs Browser](#event-loop-in-nodejs-vs-browser)
- [Common Scenarios](#common-scenarios)
- [Alternatives to the Event Loop](#alternatives-to-the-event-loop)
- [Event Loop Flows with Examples](#event-loop-flows-with-examples)
- [Best Practices](#best-practices)
- [Conclusion](#conclusion)

---

## Introduction

The **Event Loop** is a fundamental concept in JavaScript, enabling non-blocking I/O operations—even though JavaScript is single-threaded—by offloading operations to the system kernel when possible. It's at the heart of Node.js and drives asynchronous behavior.

---

## What is the Event Loop?

The Event Loop is a mechanism that handles **asynchronous operations** by executing a queue of callbacks (tasks/events) after the current execution stack is cleared.

It ensures:
- Continuation of code execution after async operations complete.
- Execution of callbacks from timers, promises, I/O, etc.
- Responsive and non-blocking behavior.

---

## Why is the Event Loop Used?

- To handle asynchronous I/O operations
- To keep JavaScript non-blocking
- To process multiple tasks using a single thread efficiently
- To allow operations like `setTimeout`, `fs.readFile`, or `http.get` to complete asynchronously

---

## When is the Event Loop Used?

- Reading/writing files (e.g., `fs` module)
- Making HTTP requests
- Handling timers (`setTimeout`, `setInterval`)
- Running Promises or `async/await` code
- Responding to events or incoming HTTP requests

---

## How the Event Loop Works

1. JavaScript runs code synchronously.
2. Async tasks (like timers, file reads) are handed off to Node APIs or libuv.
3. Once completed, callbacks are placed in respective queues.
4. The Event Loop checks the queues and pushes the callbacks onto the call stack for execution when it's empty.

---

## Phases of the Event Loop

Node.js event loop phases:

1. **Timers**: Callbacks from `setTimeout` and `setInterval`.
2. **Pending Callbacks**: Deferred I/O callbacks.
3. **Idle, Prepare**: Internal use.
4. **Poll**: Retrieve new I/O events; node will block here when appropriate.
5. **Check**: `setImmediate()` callbacks.
6. **Close Callbacks**: E.g., `socket.on('close', ...)`.

---

## Timers and Methods

### `setTimeout(callback, delay)`
Schedules callback after at least `delay` ms.

### `setInterval(callback, interval)`
Runs callback repeatedly every `interval` ms.

### `setImmediate(callback)`
Executes callback after the current event loop phase.

### `process.nextTick(callback)`
Runs callback before any other I/O event, even before `setTimeout`.

---

## Microtasks vs Macrotasks

### Microtasks
- `process.nextTick`
- Promises (`.then`, `async/await`)

### Macrotasks
- `setTimeout`
- `setInterval`
- `setImmediate`

**Order of Execution**:
Microtasks are processed **immediately after** the current operation and **before** the next event loop tick.

---

## Event Loop in Node.js vs Browser

| Feature              | Node.js                          | Browser                        |
|----------------------|----------------------------------|--------------------------------|
| APIs                 | libuv, fs, http, child_process   | DOM, fetch, xhr, Web APIs      |
| Execution Model      | Single-threaded with libuv pool  | Single-threaded + Web Workers |
| `setImmediate`       | Yes                              | No                             |
| `process.nextTick()` | Yes                              | No                             |

---

## Common Scenarios

1. **Non-blocking HTTP server**
2. **Database query handling**
3. **Reading/writing files asynchronously**
4. **Scheduling background jobs**
5. **Handling real-time events (WebSocket, chat apps)**

---

## Alternatives to the Event Loop

While there's no direct "alternative" to the Event Loop in Node.js (as it’s core), you can use:

- **Worker Threads**: For CPU-bound tasks.
- **Child Processes**: For multi-processing.
- **Job Queues (like Bull)**: For scheduled or delayed task execution.
- **External schedulers (like CRON)**

---

## Event Loop Flows with Examples

### Example 1: Microtasks vs Macrotasks

```js
console.log('Start');

setTimeout(() => console.log('setTimeout'), 0);
setImmediate(() => console.log('setImmediate'));

Promise.resolve().then(() => console.log('Promise'));

process.nextTick(() => console.log('nextTick'));

console.log('End');
```

**Output:**
```
Start
End
nextTick
Promise
setTimeout
setImmediate
```

### Example 2: Timer vs I/O Callback

```js
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
});
```

**Output:**
```
immediate
timeout
```
> `setImmediate` executes before `setTimeout` after I/O in Node.js.

### Example 3: CPU-bound Blocking

```js
function block() {
  const end = Date.now() + 5000;
  while (Date.now() < end) {}
}

setTimeout(() => console.log('After blocking'), 1000);

block(); // Blocks event loop for 5s
```

> "After blocking" is delayed even though setTimeout is 1s.

---

## Best Practices

- Avoid blocking the event loop (e.g., heavy computation).
- Use Promises/`async-await` for better async control.
- Prefer `setImmediate` over `setTimeout(fn, 0)` in Node.js.
- Minimize long-running synchronous code.
- Use Worker Threads or child processes for CPU-heavy tasks.
- Always handle Promise rejections to avoid crashes.

---

## Conclusion

The Event Loop is the **heartbeat of Node.js**, allowing it to handle asynchronous operations on a single thread without blocking. Mastery of the event loop is essential for writing performant, scalable Node.js applications. Understanding microtasks vs macrotasks, `nextTick` vs `setTimeout`, and libuv's underlying behavior will help you build efficient async workflows.

---
```
