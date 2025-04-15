# Child Process
# Deep Dive into Child Processes in Node.js

## Table of Contents
- [What is `child_process` in Node.js?](#what-is-child_process-in-nodejs)
- [Why Use Child Processes?](#why-use-child-processes)
- [When and Where to Use](#when-and-where-to-use)
- [Types of Child Processes](#types-of-child-processes)
- [Core Methods](#core-methods)
- [Child Process Flow Patterns](#child-process-flow-patterns)
  - [One-off Execution](#one-off-execution)
  - [Long-running Processes](#long-running-processes)
  - [Bi-directional Communication](#bi-directional-communication)
- [Error Handling and Events](#error-handling-and-events)
- [Alternatives](#alternatives)
- [Use Cases and Scenarios](#use-cases-and-scenarios)
- [Conclusion](#conclusion)

---

## What is `child_process` in Node.js?

The `child_process` module enables you to spawn new processes in Node.js. These can be shell commands, other scripts, or long-running services. This module provides multiple ways to create and interact with these child processes.

## Why Use Child Processes?

- Offload CPU-intensive work
- Run shell commands or external programs
- Enable parallel processing
- Maintain responsiveness in the main event loop

## When and Where to Use

- Running shell utilities or CLI tools
- Processing large files or datasets
- Spawning services or microservices
- Interfacing with compiled binaries (e.g., Python, C++)

---

## Types of Child Processes

1. **`exec`** – Spawns a shell and runs a command, buffers output (good for short tasks)
2. **`execFile`** – Similar to `exec`, but does not spawn a shell (safer, faster)
3. **`spawn`** – Launches a new process with a given command (streamed I/O)
4. **`fork`** – Special case of `spawn` for Node.js scripts with IPC support

---

## Core Methods

### 1. `exec`
```js
const { exec } = require('child_process');

exec('ls -l', (err, stdout, stderr) => {
  if (err) return console.error(err);
  console.log(stdout);
});
```

### 2. `execFile`
```js
const { execFile } = require('child_process');

execFile('node', ['--version'], (err, stdout) => {
  if (err) throw err;
  console.log(stdout);
});
```

### 3. `spawn`
```js
const { spawn } = require('child_process');

const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', data => console.log(`stdout: ${data}`));
ls.stderr.on('data', data => console.error(`stderr: ${data}`));
ls.on('close', code => console.log(`child process exited with code ${code}`));
```

### 4. `fork`
```js
const { fork } = require('child_process');

const child = fork('childScript.js');

child.on('message', msg => {
  console.log('Message from child:', msg);
});

child.send({ hello: 'world' });
```

---

## Child Process Flow Patterns

### One-off Execution (Short Lived)
Use `exec` or `execFile` when:
- Output is small
- You need shell capabilities

### Long-running Processes
Use `spawn` when:
- Continuous input/output is required
- Large data streaming

### Bi-directional Communication
Use `fork` when:
- Two-way messaging is needed
- You want to run another Node.js script

---

## Error Handling and Events

All child process methods emit events:
- `exit`: when the process exits
- `error`: if process fails to spawn
- `close`: when stdio streams are closed
- `message`: used with `fork` for IPC

Example:
```js
child.on('error', err => console.error('Failed to start child:', err));
```

---

## Alternatives

- **Worker Threads** – Better for CPU-bound JS operations
- **Cluster Module** – For scaling Node.js servers across CPU cores
- **Third-party task runners** – Like `bull`, `agenda` for jobs

---

## Use Cases and Scenarios

- Running image or video processing scripts (e.g. Python)
- Shell automation: backup, deploy, cleanup
- JSON transformation via CLI tools
- Creating background workers or daemons
- Heavy computation that blocks the event loop

---

## Conclusion

The `child_process` module is a core tool for running system commands or offloading heavy computation in Node.js. Choosing between `exec`, `spawn`, `execFile`, and `fork` depends on your needs for performance, security, communication, and data size. Understanding these patterns allows you to build more efficient and scalable Node.js applications.

---

> **Tip:** Always sanitize user input when using shell commands to prevent injection attacks.

---

## 🛡️ Shell Injection Risks with `child_process`

When user input is directly embedded into shell commands, it can be exploited to execute arbitrary system commands.

### ❌ Unsafe Example:
```js
const { exec } = require('child_process');

const username = req.query.user; // User-controlled input
exec(`ls /home/${username}`, (err, stdout, stderr) => {
  console.log(stdout);
});
```

If `username` is something like `john; rm -rf /`, the result is catastrophic.

---

## ✅ Safe Practices

### 1. **Use `execFile` or `spawn` instead of `exec`**
These do not invoke a shell by default, avoiding shell parsing and reducing risk.

```js
const { execFile } = require('child_process');

execFile('ls', ['-l', `/home/${safeUserInput}`], (err, stdout) => {
  console.log(stdout);
});
```

### 2. **Validate and sanitize user input**
Use whitelisting or validation libraries (e.g., `validator`, `joi`, or regex).

```js
const validator = require('validator');
if (!validator.isAlphanumeric(username)) {
  return res.status(400).send('Invalid username');
}
```

### 3. **Avoid interpolating user input into shell strings**
```js
// Dangerous:
exec(`grep ${userInput} file.txt`);

// Safe:
spawn('grep', [userInput, 'file.txt']);
```

---

## ✅ Summary

| Risk | Avoid | Use Instead |
|------|-------|-------------|
| Shell injection | `exec('rm -rf ' + input)` | `execFile('rm', ['-rf', input'])` |
| Unvalidated input | Dynamic command strings | Input validation + `spawn`/`execFile` |

---

