
# Advanced JavaScript Topics

## Memory Management & Garbage Collection
JavaScript uses automatic memory management, meaning the JS engine allocates memory when objects are created and frees it when they are no longer used (garbage collection). The most common algorithm is **Mark-and-Sweep**.

**Pros:** Reduces developer effort, avoids memory leaks in simple cases.  
**Cons:** Cannot detect all leaks, cycles may still cause issues.

## Performance Optimization
Techniques to improve speed and efficiency, e.g., debouncing, throttling, code splitting, lazy loading, minimizing reflows, and efficient selectors.

## Web Workers
Enable background threads to run JS code without blocking the main UI thread.

## Service Workers & PWA
Service workers act as proxies between web apps and the network, enabling offline support, caching, and push notifications in Progressive Web Apps.

## Streams
- **ReadableStream**: read data chunks.
- **WritableStream**: write data chunks.
Used for efficient I/O (files, network).

## Module Bundlers
- **Webpack, Rollup, Vite**: bundle JS modules, optimize code, enable hot reloading.

## Build Tools
- **Babel**: transpile modern JS.
- **ESLint**: enforce coding rules.
- **Prettier**: format code consistently.

## JavaScript Engines
- **V8 (Chrome, Node.js), SpiderMonkey (Firefox)**: parse, compile, and execute JS using JIT compilation.

## Low-level APIs
- **ArrayBuffer, SharedArrayBuffer, Atomics**: handle raw binary data, enable shared memory, support parallelism.

## Security
- **XSS (Cross-Site Scripting)**, **CSRF (Cross-Site Request Forgery)**, **CSP (Content Security Policy)**, **CORS (Cross-Origin Resource Sharing)**: protect web apps from common attacks.

## Code Splitting, Lazy Loading
Split bundles into smaller chunks loaded on demand to improve load time.

---

Let me know if you need detailed explanations or examples for each section!
