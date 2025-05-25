
# In-Depth JavaScript and Node.js Concepts

## 🧵 Asynchronous Programming in JavaScript

### Callbacks
Callbacks are functions passed as arguments to other functions. They are called once the asynchronous operation is completed.

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched!");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});
```

### Timers
JavaScript provides `setTimeout` and `setInterval` for scheduling tasks.

```javascript
setTimeout(() => {
    console.log("Executed after 1 second");
}, 1000);

const interval = setInterval(() => {
    console.log("Executed every 2 seconds");
}, 2000);

setTimeout(() => clearInterval(interval), 7000);
```

### Promises
Promises represent a value which may be available now, or in the future.

```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
});

promise.then(data => console.log(data)).catch(err => console.error(err));
```

### Async & Await
Syntactic sugar over Promises for writing asynchronous code more cleanly.

```javascript
async function getData() {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getData();
```

## 🧠 Core Concepts in JavaScript

### Closures
Closures give access to an outer function's scope from an inner function.

```javascript
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    }
}

const counter = outer();
counter(); // 1
counter(); // 2
```

### The Event Loop
Handles execution of multiple chunks of your program over time.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise resolved");
});

console.log("End");
```

## ⚙️ Node.js Fundamentals

### Global Objects
```javascript
console.log(__dirname); // Directory name
console.log(__filename); // File name
console.log(module); // Module metadata
```

### Modules
**CommonJS:**
```javascript
// math.js
module.exports = { add: (a, b) => a + b };
// app.js
const math = require('./math');
console.log(math.add(2, 3));
```

**ES6 Modules:**
```javascript
// math.mjs
export const add = (a, b) => a + b;
// app.mjs
import { add } from './math.mjs';
console.log(add(2, 3));
```

### NPM
NPM is the Node package manager for installing third-party libraries.

```bash
npm init -y
npm install express
```

## 🗃 File System (fs) Module

### Reading/Writing Files
```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.writeFile('output.txt', 'Hello Node.js', err => {
    if (err) throw err;
});
```

### File Streams
```javascript
const readStream = fs.createReadStream('file.txt');
readStream.on('data', chunk => {
    console.log(chunk);
});
```

### Async vs. Sync Operations
```javascript
// Sync
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
// Async
fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log(data);
});
```

## ⚡ Events & EventEmitter

```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', name => {
    console.log(`Hello, ${name}`);
});

emitter.emit('greet', 'Adinarayana');
```

## 🌐 HTTP Module

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

## 🔢 Buffer & Streams

### Buffer
```javascript
const buf = Buffer.from('Hello');
console.log(buf); // Binary representation
console.log(buf.toString()); // 'Hello'
```

### Streams
```javascript
const readable = fs.createReadStream('file.txt');
const writable = fs.createWriteStream('copy.txt');

readable.pipe(writable);
```

## 🔁 Event-Driven Architecture

Node.js operates on an event-driven architecture where actions are triggered based on events. This allows it to handle many connections efficiently.

## 🛠 Process Management with PM2

```bash
npm install pm2 -g
pm2 start app.js
pm2 list
pm2 stop app.js
pm2 logs
```

---

Author: Adinarayana Namana  
LinkedIn: [https://www.linkedin.com/in/adinarayana-namana-8a0811115/](https://www.linkedin.com/in/adinarayana-namana-8a0811115/)
