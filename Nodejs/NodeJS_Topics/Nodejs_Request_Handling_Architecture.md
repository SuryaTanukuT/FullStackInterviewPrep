
# ⚙️ Node.js Internals – Complete Request Handling & Performance Flow

This document provides a deep dive into how **Node.js** handles **blocking vs non-blocking requests**, how it scales under high loads (like 1 million requests), and the role of each core component: **V8**, **libuv**, **event loop**, **micro/macrotasks**, **streams**, **buffers**, and **worker threads**.

---

## 📥 How Node.js Handles Incoming Requests

### 🚀 Typical Request Flow:
1. Request received by Node.js server (single thread).
2. If blocking: goes to **libuv thread pool** or blocks event loop (if sync).
3. If non-blocking: handled asynchronously via callbacks, promises.
4. After I/O or computation, results are sent back to the client.

---

## 🔄 Blocking vs Non-Blocking Requests

### 🔁 Non-Blocking:
- File reads with `fs.readFile`
- DB queries using async libraries
- Network calls using `http.get`

✅ These are handled asynchronously with **libuv + callback queue + event loop**.

### 🚫 Blocking:
- `fs.readFileSync`
- `JSON.parse()` on huge files
- CPU-heavy computation

❌ These block the event loop and delay other requests.

---

## 🌋 What Happens with 1 Million Requests?

Node.js handles high concurrency using:

- **Event loop** for scheduling
- **libuv thread pool** for I/O
- **Non-blocking async operations**
- **Backpressure and streams**
- **Load balancing with clustering or a reverse proxy (e.g., NGINX)**

---

## ⚙️ V8 Engine

- Converts JS to optimized machine code using **JIT compilation**.
- Handles garbage collection (mark & sweep).
- V8 is **single-threaded**, fast, and supports async via callbacks/promises.

---

## 🔁 Event Loop Phases

1. **Timers**: `setTimeout`, `setInterval`
2. **Pending Callbacks**
3. **Idle, Prepare**
4. **Poll**: Handle new I/O events
5. **Check**: `setImmediate()`
6. **Close Callbacks**

---

## 📬 Event Queue & Task Queues

### 📌 Macrotask Queue:
- `setTimeout`, `setInterval`
- `setImmediate`
- I/O events

### ⚡ Microtask Queue:
- `process.nextTick`
- `Promise.then`

```js
setTimeout(() => console.log('Macro'), 0);
Promise.resolve().then(() => console.log('Micro'));
```

---

## 🌐 Libuv

- A multi-platform C library that provides:
  - Event loop
  - Thread pool
  - Asynchronous file & network I/O

✅ Abstracts OS-level I/O differences (Unix, Windows).

---

## 🧵 Worker Threads

- Used for **CPU-intensive tasks** (e.g., encryption, compression).
- Runs in parallel to main thread.
- Good for:
  - Image processing
  - Complex loops

```js
const { Worker } = require('worker_threads');
```

---

## 📦 Module System

- CommonJS (CJS): `require()`
- ES Modules (ESM): `import`

Modules are wrapped in functions and cached for efficiency.

```js
(function(exports, require, module, __filename, __dirname) { ... })
```

---

## 🌊 Streams

- Efficient way to read/write data in chunks (not all at once).
- Handles **backpressure** automatically.

### Types:
- Readable
- Writable
- Duplex
- Transform

```js
fs.createReadStream('file.txt').pipe(res);
```

---

## 🧠 Buffers

- Binary data handling (e.g., for files, TCP sockets).
- Used under the hood by streams.

```js
const buf = Buffer.from('hello');
```

---

## ⚙️ Process & Thread Management

### Main Thread:
- Runs your JS code
- Manages the event loop

### Worker Threads:
- Used via `worker_threads` for CPU tasks

### Child Processes:
- Run separate processes
- Can communicate via IPC

```js
const { fork } = require('child_process');
```

---

## 💥 High Load (1 Million Requests)

### Scenario Handling:

| Type | Strategy |
|------|----------|
| Non-blocking API calls | Managed by event loop, no blocking |
| File reads | Use `fs.readFile`, not sync |
| CPU tasks | Use `worker_threads` |
| Upload/download | Use `streams` |
| Request burst | Use NGINX for load balancing |
| Scaling | Use `cluster` or deploy across containers |

---

## 🧰 Tools for Monitoring

- `clinic.js` – profiling & flame graphs
- `node --trace-gc` – garbage collection tracking
- `event-loop-lag` – detect lag
- `pm2` – process management and clustering

---

## ✅ Summary

| Component | Purpose |
|----------|---------|
| V8 | Runs JS with JIT and GC |
| libuv | Event loop, async I/O |
| Event Loop | Task scheduling |
| Micro/Macro Tasks | Prioritization of callbacks |
| Streams | Efficient I/O |
| Buffers | Binary data handling |
| Worker Threads | Parallel CPU tasks |
| Modules | Code organization and isolation |

---

Node.js shines in I/O-heavy, real-time apps. Understanding its internals helps build highly performant and scalable systems.
