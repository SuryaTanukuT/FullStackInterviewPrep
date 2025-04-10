
```md
# useAsync in React 🚀

> A complete guide to understanding `useAsync` — a powerful way to manage asynchronous operations in React cleanly and declaratively.

---

## 📌 What is `useAsync`?

`useAsync` is a **custom React hook** (not part of React core) used to handle **asynchronous operations** like fetching data, file loading, etc. 

It manages:
- ✅ Loading state
- ✅ Success (resolved) state
- ✅ Error state

It's typically used via libraries like:
- [`react-async`](https://docs.react-async.dev/)
- Or you can write your own custom `useAsync` hook.

---

## 💡 Why use `useAsync`?

Async logic in React usually involves multiple `useState` and `useEffect` calls, making your components bloated.

**Traditional way:**

```js
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch('/api/data');
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  fetchData();
}, []);
```

**With `useAsync`:**

```js
import { useAsync } from "react-async";

const loadData = async () => {
  const res = await fetch("/api/data");
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

const MyComponent = () => {
  const { data, error, isLoading } = useAsync({ promiseFn: loadData });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{JSON.stringify(data)}</div>;
};
```

Cleaner and more declarative!

---

## ⚙️ Hook API Breakdown

```js
const {
  data,
  error,
  isPending,
  isLoading,
  isFulfilled,
  isRejected,
  run,
  reload,
} = useAsync({
  promiseFn,
  watch,
  deferFn,
  onResolve,
  onReject
});
```

| Field / Function | Description |
|------------------|-------------|
| `data`           | Resolved value |
| `error`          | Error if thrown |
| `isLoading` / `isPending` | Boolean while loading |
| `isFulfilled`    | Async was successful |
| `isRejected`     | Async threw error |
| `run()`          | Manually start deferred promise |
| `reload()`       | Re-run `promiseFn` |
| `promiseFn`      | The async function to run |
| `deferFn`        | Defer run until manually triggered |
| `watch`          | Dependency array like in `useEffect` |
| `onResolve`      | Callback on success |
| `onReject`       | Callback on error |

---

## 🎯 When, Why, Where

### ✅ When to Use
- You have any async operation (API, file, delay).
- You want a **neat** async lifecycle handler.

### ❓ Why Use It
- Avoids boilerplate.
- Manages async status clearly.
- Improves **separation of concerns**.

### 📍 Where to Use
- In functional React components.
- Dashboards, profile pages, dynamic UIs.
- Custom hooks for reusable async logic.

---

## 🧪 Scenario-Based Comparison

**Scenario**: Fetch user details on profile load.

| Approach | Without `useAsync` | With `useAsync` |
|----------|--------------------|-----------------|
| Code     | Verbose & repetitive | Clean & declarative |
| Reusability | Low                | High              |
| Side Effect Control | Manual      | Built-in          |
| State management | Manual (`useState`) | Auto            |

---

## ✅ Pros

- 📦 Clean and declarative code
- 🔁 Built-in retry and reload support
- ⚛️ Designed for React ecosystem
- 🔍 Easy to test and extract to custom hooks
- ⌨️ Less boilerplate

---

## ❌ Cons

- ❗ Not a built-in React hook
- 📚 Requires third-party dependency (`react-async`)
- 🧩 Less control for custom complex flows
- ⚖️ Slight learning curve

---

## 🛠️ Write Your Own `useAsync` Hook

```js
import { useState, useEffect } from 'react';

const useAsync = (asyncFunction, deps = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    asyncFunction()
      .then((res) => isMounted && setData(res))
      .catch((err) => isMounted && setError(err))
      .finally(() => isMounted && setLoading(false));

    return () => { isMounted = false };
  }, deps);

  return { data, isLoading, error };
};
```

---

## 🏁 Summary

| Feature         | `useAsync` |
|-----------------|------------|
| Use Case        | Handle async operations |
| Main Benefit    | Declarative and reusable |
| Provided By     | `react-async` or custom |
| Handles         | Data, loading, error, and status |
| Alternatives    | Manual `useEffect`, React Query, SWR |

---

## 📚 Resources

- [react-async GitHub](https://github.com/async-library/react-async)
- [react-async Docs](https://docs.react-async.dev)
- [Custom Hook Patterns](https://reactjs.org/docs/hooks-custom.html)

---

## 🧩 Want More?

Need a full example project or want to compare `useAsync` with `React Query` or `SWR`?

```md
# ⚛️ React: `useAsync` vs React Query – Full Example & Comparison

This guide explores **two approaches to handling async data in React**:
- Writing your own `useAsync` custom hook
- Using the battle-tested [React Query](https://tanstack.com/query/latest)

---

## 🧪 Example: Fetching User Profile from an API

---

### 📁 Project Structure

```
src/
  components/
    UserProfile.js        # UI Component
  hooks/
    useAsync.js           # Custom hook
  api/
    fetchUser.js          # Simulated API
  App.js
```

---

## 🔧 1. Custom Hook – `useAsync.js`

```js
// hooks/useAsync.js
import { useState, useEffect, useCallback } from "react";

export const useAsync = (asyncFn, deps = []) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);
    return asyncFn()
      .then((res) => {
        setValue(res);
        setStatus("success");
      })
      .catch((err) => {
        setError(err);
        setStatus("error");
      });
  }, deps);

  useEffect(() => {
    execute();
  }, [execute]);

  return { status, value, error };
};
```

---

## 🌐 2. Simulated API – `fetchUser.js`

```js
// api/fetchUser.js
export const fetchUser = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: "Jane Doe", email: "jane@example.com" }), 1000)
  );
```

---

## 👤 3. UI Component – `UserProfile.js` (with useAsync)

```jsx
// components/UserProfile.js
import React from "react";
import { useAsync } from "../hooks/useAsync";
import { fetchUser } from "../api/fetchUser";

const UserProfile = () => {
  const { status, value: user, error } = useAsync(fetchUser, []);

  if (status === "pending") return <p>Loading...</p>;
  if (status === "error") return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default UserProfile;
```

---

## 🧪 4. Same Component – with React Query

First, install React Query:

```bash
npm install @tanstack/react-query
```

Wrap your app with the QueryClientProvider:

```jsx
// App.js
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQueryUser from "./components/ReactQueryUser";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryUser />
  </QueryClientProvider>
);

export default App;
```

Now the component using React Query:

```jsx
// components/ReactQueryUser.js
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/fetchUser";

const ReactQueryUser = () => {
  const { data: user, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>User Profile (React Query)</h3>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default ReactQueryUser;
```

---

## ⚖️ `useAsync` vs React Query

| Feature                      | `useAsync`             | React Query                        |
|-----------------------------|------------------------|------------------------------------|
| ✨ Simplicity                | ✅ Simple               | ⚠ Slightly more setup              |
| 🧠 Caching                   | ❌ No cache             | ✅ Built-in caching                 |
| 🔁 Refetching & Sync        | Manual with `useEffect`| ✅ Auto, background updates         |
| 🕵️ Devtools                 | ❌ None                 | ✅ Devtools & observability        |
| 📦 Bundle size              | Tiny (custom hook)     | ~30kb                              |
| 🧪 Testing                  | Easier to isolate      | More context, but testable         |
| 🛠 Ideal For                | Small apps, beginners  | Data-heavy, real-time, complex apps|

---

## 🧠 Conclusion

| Want full control and minimal dependencies? | Use `useAsync` |
|---------------------------------------------|----------------|
| Need caching, deduping, retries, stale data? | Use React Query |

---

