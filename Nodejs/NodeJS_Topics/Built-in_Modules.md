# Built-in Modules

```markdown
# 🔧 Deep Dive into Built-in Modules in JavaScript (Node.js)

---

## 📘 Overview

Node.js provides a powerful set of **built-in modules** that can be used for various tasks such as handling file systems, creating HTTP servers, working with buffers, and more. These modules are packaged with Node.js, so developers don’t need to install them via external packages.

---

## 🧩 Common Built-in Modules in Node.js

Node.js comes with a wide range of built-in modules. Some of the most commonly used ones include:

1. **fs (File System)**
2. **http (HTTP Server)**
3. **path (File and Directory Path Operations)**
4. **events (Event Handling)**
5. **stream (Working with Streams)**
6. **buffer (Binary Data Handling)**
7. **os (Operating System Utilities)**
8. **util (Utility Methods)**

---

## 🛠 Types and Methods of Built-in Modules

### 1. **fs (File System)**

The `fs` module is used to interact with the file system, allowing for reading and writing files, creating directories, and more.

#### Key Methods:
- `fs.readFileSync()` – Synchronously reads a file.
- `fs.readFile()` – Asynchronously reads a file.
- `fs.writeFileSync()` – Synchronously writes data to a file.
- `fs.writeFile()` – Asynchronously writes data to a file.
- `fs.readdir()` – Reads the contents of a directory.

#### Example: Reading a File Asynchronously

```js
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data);
  }
});
```

### 2. **http (HTTP Server)**

The `http` module allows you to create HTTP servers and clients.

#### Key Methods:
- `http.createServer()` – Creates an HTTP server.
- `http.get()` – Makes a GET request to an HTTP server.
- `http.request()` – Creates a custom HTTP request.

#### Example: Creating a Simple HTTP Server

```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

### 3. **path (Path Utilities)**

The `path` module provides utilities for working with file and directory paths.

#### Key Methods:
- `path.join()` – Joins multiple path segments.
- `path.resolve()` – Resolves a sequence of paths into an absolute path.
- `path.basename()` – Returns the last portion of a path.
- `path.extname()` – Returns the extension of a file path.

#### Example: Joining Paths

```js
const path = require('path');
const filePath = path.join(__dirname, 'folder', 'file.txt');
console.log('File Path:', filePath);
```

### 4. **events (Event Handling)**

The `events` module allows for the creation and handling of custom events.

#### Key Methods:
- `EventEmitter.on()` – Adds a listener for an event.
- `EventEmitter.emit()` – Emits an event.
- `EventEmitter.once()` – Adds a one-time listener for an event.

#### Example: Using EventEmitter

```js
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('greet', () => {
  console.log('Hello, EventEmitter!');
});

eventEmitter.emit('greet'); // Output: Hello, EventEmitter!
```

### 5. **stream (Streams)**

The `stream` module is used to work with streams, such as reading and writing data in chunks.

#### Key Methods:
- `stream.readable` – Creates a readable stream.
- `stream.writable` – Creates a writable stream.
- `stream.pipe()` – Pipes the output of one stream to another.

#### Example: Using Streams

```js
const fs = require('fs');
const stream = fs.createReadStream('example.txt');
stream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});
stream.on('end', () => {
  console.log('Stream ended.');
});
```

### 6. **buffer (Buffer Management)**

The `buffer` module is used to handle binary data. It's particularly useful when dealing with streams, file systems, or network data.

#### Key Methods:
- `Buffer.from()` – Creates a new buffer from a string or array.
- `buffer.toString()` – Converts the buffer data into a string.

#### Example: Working with Buffers

```js
const buffer = Buffer.from('Hello, Node.js!');
console.log('Buffer content:', buffer.toString());
```

### 7. **os (Operating System Utilities)**

The `os` module provides operating system-related utility methods.

#### Key Methods:
- `os.platform()` – Returns the operating system platform.
- `os.cpus()` – Returns an array of objects containing information about each CPU/core.
- `os.freemem()` – Returns the free system memory.

#### Example: Getting OS Information

```js
const os = require('os');
console.log('Platform:', os.platform());
console.log('Free memory:', os.freemem(), 'bytes');
```

### 8. **util (Utility Methods)**

The `util` module provides utility functions for debugging and handling common tasks.

#### Key Methods:
- `util.promisify()` – Converts callback-based functions into Promise-based ones.
- `util.inspect()` – Returns a string representation of an object.

#### Example: Promisifying a Callback-based Function

```js
const util = require('util');
const fs = require('fs');
const readFileAsync = util.promisify(fs.readFile);

readFileAsync('example.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## 🎯 Why Built-in Modules Are Used

- **Efficiency**: They provide optimized solutions for common tasks, reducing the need for external libraries.
- **Convenience**: No need to install or maintain third-party packages.
- **Stability**: These modules are part of the Node.js core and are regularly maintained and updated.
- **Performance**: Built-in modules are optimized for performance and often use low-level system calls.
- **Security**: They are more secure than third-party modules because they are part of Node.js's core functionality.

---

## 🔄 When to Use Built-in Modules

- **For server-side applications** that require networking (HTTP server, WebSocket) or system-level interactions (file systems, OS).
- **When you need optimized I/O** operations such as reading from files, querying the database, or interacting with streams.
- **For simple utility functions** like path manipulations, event handling, or creating buffers.

---

## 🚦 Scenarios for Using Built-in Modules

### Scenario 1: File System Operations
Use the `fs` module when you need to read/write files or interact with directories, such as uploading or downloading files.

```js
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});
```

### Scenario 2: HTTP Server
When creating a web application or API, use the `http` module to handle incoming requests.

```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});
server.listen(3000);
```

### Scenario 3: Stream Data
For real-time data processing, such as uploading files, using the `stream` module allows you to handle large files efficiently without loading them entirely into memory.

```js
const fs = require('fs');
const stream = fs.createReadStream('largeFile.txt');
stream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});
stream.on('end', () => {
  console.log('Stream finished.');
});
```

---

## 🔁 Flow of Using Built-in Modules

### Flow 1: Handling HTTP Requests and Responses

1. **Create an HTTP server** using `http.createServer()`.
2. **Listen for requests** and handle them with callbacks.
3. **Use the `fs` module** to read file contents if needed.
4. **Send a response** to the client.

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    fs.readFile('home.html', 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading file');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  }
});
server.listen(3000);
```

---

## 🏁 Final Thoughts

Built-in modules in Node.js provide essential functionality for various tasks, from handling files and HTTP requests to manipulating system-level details. These modules are designed for performance, reliability, and security, making them the go-to choice for most server-side operations in Node.js. By mastering these built-in modules, you can significantly enhance your application's functionality and performance.

---

## ✅ Best Practices

- Use asynchronous versions of methods to prevent blocking the event loop.
- Handle errors gracefully, especially with I/O operations.
- Leverage streams for large data transfers or file manipulations.
- Always check the official documentation for updates on built-in modules and new methods.
```

