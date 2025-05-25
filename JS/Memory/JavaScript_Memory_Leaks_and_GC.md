
# 🧠 JavaScript Memory Management & Common Causes of Memory Leaks

This guide covers memory leaks, garbage collection, and best practices to avoid memory-related issues in JavaScript.

---

## 🔍 Common Causes of Memory Leaks

### 1. Uncleared Timers

```js
const timer = setInterval(() => {
  console.log("Running...");
}, 1000);

// 🔴 Memory leak if never cleared
clearInterval(timer); // ✅ Always clear intervals when no longer needed
```

---

### 2. Closures Holding Stale Data

```js
function createClosure() {
  let largeData = new Array(1000000).fill("data");

  return function() {
    console.log(largeData.length); // Holds reference unnecessarily
  };
}

const closure = createClosure(); // largeData never gets garbage collected
```

✅ Avoid long-living closures with large data unless necessary.

---

### 3. Detached DOM References

```js
let element = document.getElementById("myDiv");
document.body.removeChild(element);

// 🔴 Still referenced in JS => won't be garbage collected
```

✅ Set `element = null;` after removing to allow GC.

---

### 4. Forgotten Event Listeners

```js
const btn = document.getElementById("btn");

function handleClick() {
  console.log("Clicked");
}

btn.addEventListener("click", handleClick);

// 🔴 If button is removed, listener remains in memory
btn.removeEventListener("click", handleClick); // ✅ Remove when done
```

---

## 🗑️ Garbage Collection

JavaScript uses **automatic garbage collection**, primarily via **mark-and-sweep**:

### How it works:
1. Marks all reachable values.
2. Sweeps memory and deletes unreachable ones.

```js
let user = { name: "Alice" };
user = null; // Marks object as unreachable => GC collects it
```

✅ Only unreferenced data is eligible for collection.

---

## ⚠️ Memory Leaks

Occurs when memory is no longer needed but not released.

### Signs:
- Increasing memory usage over time
- App becomes slow or crashes
- DevTools show uncollected detached DOM nodes or listeners

---

## ✅ Avoiding Global Variables

```js
var name = "global"; // 🔴 pollutes global scope

(function() {
  const name = "scoped"; // ✅ IIFE to scope variables
})();
```

✅ Use `let`, `const`, and modules to avoid polluting global space.

---

## 🧰 Tips to Prevent Leaks

| Tip | Description |
|-----|-------------|
| Clear timers | Always clear intervals/timeouts |
| Manage listeners | Add & remove event listeners properly |
| Use WeakMap/WeakSet | For temporary object associations |
| Scope carefully | Avoid global or long-lived closures |
| Monitor with tools | Use Chrome DevTools -> Memory tab |

---

This guide ensures your JavaScript applications remain memory-efficient and scalable.
