# Error Handling
# Error Handling in JavaScript (Node.js) - Deep Dive

## Introduction

Error handling is a crucial aspect of writing robust, maintainable, and scalable software. In JavaScript, and especially in Node.js, proper error handling ensures applications can gracefully handle unexpected situations without crashing.

---

## Why Use Error Handling?

- Prevent unexpected application crashes.
- Improve debugging and troubleshooting.
- Provide meaningful feedback to users.
- Enable recovery or fallback mechanisms.
- Improve security and robustness.

---

## Types of Errors

### 1. **Synchronous Errors**
Errors thrown immediately during function execution.
```js
throw new Error("Something went wrong");
```

### 2. **Asynchronous Errors**
Errors occurring in asynchronous code (e.g., callbacks, Promises, async/await).
```js
fs.readFile('/non-existent-file', (err, data) => {
  if (err) throw err;
});
```

### 3. **Operational Errors**
Expected errors due to invalid user input, failed network calls, etc. These should be handled gracefully.

### 4. **Programmer Errors**
Bugs in the code such as null dereference, incorrect logic, etc. These often crash the process and should be fixed.

### 5. **System Errors**
Caused by the underlying system (e.g., file not found, network failure).

---

## Error Handling Techniques

### 1. **try...catch (Synchronous)**
```js
try {
  let result = riskyFunction();
} catch (err) {
  console.error("Caught an error:", err);
}
```

### 2. **Callbacks with Error-first Pattern (Node.js Standard)**
```js
fs.readFile('file.txt', (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
});
```

### 3. **Promises**
```js
readFileAsync('file.txt')
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));
```

### 4. **async/await with try...catch**
```js
async function read() {
  try {
    const data = await readFileAsync('file.txt');
    console.log(data);
  } catch (err) {
    console.error("Caught async error:", err);
  }
}
```

### 5. **Event Emitters (e.g., Streams)**
```js
const stream = fs.createReadStream('file.txt');
stream.on('error', (err) => {
  console.error("Stream error:", err);
});
```

---

## When to Use Error Handling

- Anytime you use external resources (files, network).
- Any function that could throw or fail.
- All user input should be validated and handled.
- Asynchronous operations (especially I/O-heavy code).

---

## Node.js Error Handling Flows

```
User Action → Function Call → Async/Synchronous Execution
                     ↓
                Error Occurs
                     ↓
     ┌──────────────┬──────────────┐
     │ try/catch    │ .catch()     │
     │ or callback  │ or .on('err')│
     └──────────────┴──────────────┘
                     ↓
              Log / Retry / Fail
```

---

## Handling Uncaught Errors

### `process.on('uncaughtException')`
```js
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Exit to avoid inconsistent state
});
```

### `process.on('unhandledRejection')`
```js
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});
```

> Note: These handlers should only be used as a last resort. Prefer local handling.

---

## Creating Custom Errors

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

throw new ValidationError("Invalid input");
```

---

## Best Practices

- Always handle asynchronous errors.
- Validate user input.
- Avoid swallowing errors silently.
- Use meaningful error messages.
- Log errors for diagnostics.
- Gracefully shut down on critical failures.
- Avoid using `process.on('uncaughtException')` as a substitute for proper handling.

---

## Alternatives and Tools

### Libraries:
- **Boom** (for HTTP-friendly error objects)
- **http-errors** (custom HTTP errors)
- **Ajv / Joi** (input validation with error messages)
- **Winston / Pino** (structured error logging)

### Patterns:
- **Domain-based error handling** (deprecated)
- **Functional error returns (e.g., Result types in TS)**
- **Middleware-based error handling (Express)**

---

## Express Error Handling

### Basic Middleware Example
```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

### Async/Await Middleware Handling
```js
app.get('/data', async (req, res, next) => {
  try {
    const data = await getData();
    res.json(data);
  } catch (err) {
    next(err);
  }
});
```

---

## Conclusion

Error handling in Node.js is essential for writing production-grade software. Mastering both synchronous and asynchronous error handling, understanding the types of errors, and using tools and libraries can lead to more stable, maintainable applications. Always handle errors deliberately and thoughtfully.

> "A failure is not always a mistake. It may simply be the best one can do under the circumstances." – B.F. Skinner

