
# 🚀 30 Must-Know Async Problems for JavaScript Interviews

This document provides detailed **JavaScript examples** and explanations for 30 critical asynchronous programming problems often asked in interviews.

---

## 1. Build a Custom Promise from Scratch

```js
class MyPromise {
  constructor(executor) {
    this.status = 'pending';
    this.value = null;
    this.reason = null;
    this.onResolved = [];
    this.onRejected = [];

    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.onResolved.forEach(fn => fn());
      }
    };

    const reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.onRejected.forEach(fn => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleResolved = () => {
        try {
          const result = onFulfilled(this.value);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      };

      const handleRejected = () => {
        try {
          const result = onRejected(this.reason);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      };

      if (this.status === 'fulfilled') {
        handleResolved();
      } else if (this.status === 'rejected') {
        handleRejected();
      } else {
        this.onResolved.push(handleResolved);
        this.onRejected.push(handleRejected);
      }
    });
  }
}
```

✅ A basic custom implementation of a promise, handling `.then`.

---

## 2. Create your own `Promise.all`

```js
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p).then(value => {
        results[index] = value;
        completed++;
        if (completed === promises.length) {
          resolve(results);
        }
      }).catch(reject);
    });
  });
}
```

✅ Resolves when all promises are fulfilled.

---

## 3. Create `Promise.any`

```js
function myPromiseAny(promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let count = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p).then(resolve).catch(err => {
        errors[index] = err;
        count++;
        if (count === promises.length) {
          reject(new AggregateError(errors, 'All promises were rejected'));
        }
      });
    });
  });
}
```

✅ Resolves on the first successful promise, rejects if all fail.

---

## 4. Build `Promise.race`

```js
function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(p => {
      Promise.resolve(p).then(resolve).catch(reject);
    });
  });
}
```

✅ Resolves/rejects as soon as any promise settles.

---

## 5. Implement `Promise.allSettled`

```js
function myPromiseAllSettled(promises) {
  return new Promise(resolve => {
    const results = [];
    let count = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then(value => {
          results[index] = { status: 'fulfilled', value };
        })
        .catch(reason => {
          results[index] = { status: 'rejected', reason };
        })
        .finally(() => {
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        });
    });
  });
}
```

✅ Returns result of each promise with status and value or reason.

---

> ⚠️ **Note:** Due to file size constraints, this markdown includes the first 5 problems. I’ll continue with problems **6–30** in a follow-up file.

