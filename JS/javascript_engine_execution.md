
# JavaScript Engine & Execution

## How JS Engine Executes Code Using the Call Stack
JavaScript engines (like V8, SpiderMonkey) parse source code, create an execution context, and use a **call stack** to manage function calls. Each time a function is invoked, a new frame is pushed; when it returns, the frame is popped.

```js
function greet() {
  console.log('Hello');
}
greet();
```

## Main Job of the Call Stack
- Maintain execution order (LIFO).
- Track current function context.
- Enable stack traces for debugging.

## How JavaScript Performs Asynchronous Tasks
JavaScript itself is single-threaded; asynchronous tasks (timers, network requests) are handled by **Web APIs** or background threads provided by the environment, with callbacks queued for later execution.

## Behind the Scenes in the Browser
Browsers host:
- JavaScript engine
- Web APIs (DOM, AJAX, timers)
- Event loop and task queues
When JS code calls `fetch()`, the request goes to browser's networking layer, and the JS thread is free to continue executing.

## Web APIs in JS
Common Web APIs include:
- `setTimeout`, `setInterval`
- `fetch`, `XMLHttpRequest`
- DOM event listeners
- `requestAnimationFrame`

## How `setTimeout` Works Behind the Scenes
1. `setTimeout` schedules a timer in the browser.
2. After the delay, the callback is moved to the **callback queue**.
3. The event loop pushes it to the call stack when it's empty.

```js
setTimeout(() => {
  console.log('Delayed');
}, 1000);
```

## Event Loop & Callback Queue in JS
The **event loop** continually checks the call stack; when empty, it dequeues tasks from the **callback queue** and pushes them onto the stack.

## How Event Listeners Work in JS
Event listeners register callbacks with the browser’s event system. When events occur, callbacks are queued and eventually executed by the event loop.

```js
button.addEventListener('click', () => {
  console.log('Clicked');
});
```

## More about the Event Loop
- Ensures non-blocking UI.
- Handles macrotasks (timers, I/O) and microtasks (Promises).

## Why We Need the Event Loop
Without an event loop, asynchronous callbacks would never run, and long-running operations would block the UI.

## How `fetch()` Function Works
- Calls browser networking API.
- Returns a **Promise**.
- On response, enqueues a microtask to resolve the Promise.

```js
fetch('/data').then(res => res.json()).then(data => console.log(data));
```

## MicroTask Queue in JS
Promises and mutation observers enqueue **microtasks**, which have higher priority and run after the current task, before the next macrotask.

## What Are MicroTasks in JS?
Microtasks are lightweight callbacks (e.g., Promise callbacks) processed immediately after the current code frame completes and before rendering or macrotasks.

## Starvation of Functions in the Callback Queue
Continuous microtasks can prevent macrotasks from running, leading to **task starvation**. Avoid by breaking large work into smaller chunks.

# JavaScript Runtime & Engine

## JavaScript Runtime Environment
The runtime comprises:
- JS engine
- Host environment (browser or Node.js)
- Standard library (Web APIs or Node APIs)

## Browser and Node.js JS Runtime
- **Browser**: V8 + Web APIs + rendering engine.
- **Node.js**: V8 + libuv for I/O + Node APIs.

## List of JavaScript Engines
- Google V8
- Mozilla SpiderMonkey
- Microsoft Chakra
- JavaScriptCore (Safari)

## First JS Engine Ever Created
The first engine was **SpiderMonkey**, used in Netscape Navigator (1995).

## Myths About JS Engine
- Myth: JS engines interpret line-by-line.  
  **Fact**: Modern engines parse, compile, and optimize code via JIT.

## JS Engine Architecture
1. **Parser**: Tokenizes and generates AST.
2. **Interpreter**: Executes code unoptimized.
3. **JIT Compiler**: Optimizes hot code paths.
4. **Garbage Collector**: Reclaims unused memory.

## Syntax Parsers and Abstract Syntax Tree
The parser builds an **AST**, a tree representation of code structure for further analysis and compilation.

## Compilation & Execution of JS Code
- **Baseline Compilation**: Fast initial compile.
- **Profiling**: Identify hot functions.
- **Optimization**: Recompile optimized code.
- **Deopt**: Fallback when assumptions break.

## Just-In-Time (JIT) Compilation
JIT compilers compile code at runtime, combining benefits of interpreters and ahead-of-time compilers for performance.

## Is JavaScript Interpreted or Compiled?
JavaScript is **both**: parsed and compiled for performance, then executed by the engine.

## Garbage Collector – Mark & Sweep Algorithm
- **Mark Phase**: Identify reachable objects.
- **Sweep Phase**: Free unreachable objects.

## Fastest JavaScript Engine
Benchmarks vary, but **Google’s V8** is widely considered among the fastest for both client and server.

## Google’s V8 JS Engine Architecture
Detailed architecture includes:
- Ignition interpreter.
- Turbofan optimizing compiler.
- Orinoco garbage collector.

## Quick Revision of JSRE & JS Engine
- JSRE: runtime + APIs.
- JS engine: parsing, compiling, executing JS code.

# Advanced Concepts & Debugging

## Why We Have Trust Issues with `setTimeout`
`setTimeout` delay is a **minimum**; actual callback time depends on event loop load and task queues.

## Code Demonstration of the `setTimeout` Delay
```js
console.time('test');
setTimeout(() => {
  console.timeEnd('test'); // may be >0ms even for 0 delay
}, 0);
```

## Discussion about `setTimeout(0)`
Zero-delay timers schedule callbacks after current tasks and microtasks, not immediately.

## Set Up Practice Playground on the Local System
- Install Node.js and code editor.
- Use browser devtools or Node REPL.
- Experiment with timers, Promises, and event loop demos.

