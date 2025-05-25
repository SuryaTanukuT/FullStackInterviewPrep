
# ⏱️ JavaScript Async & Concurrency Concepts

This guide explores essential JavaScript asynchronous programming constructs and the concurrency model.

---

## 🔁 Callbacks

A function passed as an argument and executed later.

```js
function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

greet("Alice", () => console.log("Callback executed"));
```

---

## ⏳ setTimeout & setInterval

```js
setTimeout(() => {
  console.log("Runs once after 1 second");
}, 1000);

const intervalId = setInterval(() => {
  console.log("Runs every 2 seconds");
}, 2000);

clearInterval(intervalId); // Cancel interval
```

---

## 🔄 Event Loop

Handles execution of code, events, and messages.

- Executes synchronous code
- Handles callback queue (macrotasks) and microtasks

---

## 🧪 Promises

Used for handling async results with better syntax.

```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

fetchData.then(console.log).catch(console.error);
```

---

## 🧵 Promise.all & Promise.race

```js
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

// Waits for all
Promise.all([p1, p2]).then(console.log);

// Resolves/rejects as soon as one settles
Promise.race([p1, p2]).then(console.log);
```

---

## 💤 Async/Await

Simplifies working with promises.

```js
async function fetchAsync() {
  try {
    const result = await Promise.resolve("Async Done");
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}
```

✅ Syntactic sugar over promises.

---

## 🪙 Microtasks vs Macrotasks

| Type       | Examples |
|------------|----------|
| Microtasks | `Promise.then`, `queueMicrotask` |
| Macrotasks | `setTimeout`, `setInterval`, I/O |

```js
setTimeout(() => console.log("Macro"), 0);
Promise.resolve().then(() => console.log("Micro"));
```

Output: `Micro` first, then `Macro`

---

## 🧵 Web Workers

Run scripts in background threads (non-blocking UI).

**main.js**
```js
const worker = new Worker('worker.js');
worker.postMessage("ping");
worker.onmessage = (e) => console.log(e.data);
```

**worker.js**
```js
onmessage = (e) => {
  postMessage("pong");
};
```

✅ Ideal for heavy CPU tasks like image processing.

---

## 🔁 Message Channels

Communicate between scripts or workers.

```js
const channel = new MessageChannel();
channel.port1.onmessage = (e) => console.log("Received:", e.data);

channel.port2.postMessage("Hello from port2");
```

---

JavaScript's async model relies on its **event loop**, **promises**, and task queues to enable responsive, non-blocking execution.
