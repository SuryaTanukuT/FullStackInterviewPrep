# React Query, Axios vs Fetch, TanStack Query, and RTK Query – Developer Guide

---

## 📦 React Query (TanStack Query)

### Definition:
React Query (now part of **TanStack Query**) is a powerful data-fetching and caching library for React. It simplifies managing server state, caching, background updates, and synchronizing with the UI.

### Key Features:
- Data caching and background updates
- Query invalidation and refetching
- Pagination and infinite scroll
- Devtools support
- Works with Axios, fetch, GraphQL, etc.

### Example:
```js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsers = () => axios.get('/api/users');

function UserList() {
  const { data, isLoading } = useQuery(['users'], fetchUsers);
  return isLoading ? 'Loading...' : <ul>{data.data.map(u => <li>{u.name}</li>)}</ul>;
}
```

### Pros:
- Auto-caching and refetching
- Excellent for real-time and async-heavy apps
- Supports optimistic updates

### Cons:
- Learning curve for cache management
- Not for local (client-side) state

---

## 🔁 Axios vs Fetch

| Feature         | Axios                               | Fetch                                |
|-----------------|--------------------------------------|--------------------------------------|
| Return Type     | Promise with `data`, `status`, etc. | Native Response object               |
| JSON Parsing    | Auto-parsed                         | Must use `.json()` manually          |
| Error Handling  | Catches non-2xx responses as errors | Need to manually check response.ok   |
| Interceptors    | Built-in request/response interceptors | Not built-in                         |
| Browser Support | Works in all modern browsers        | Native in modern browsers            |

### Axios Example:
```js
axios.get('/api/users').then(res => console.log(res.data));
```

### Fetch Example:
```js
fetch('/api/users')
  .then(res => res.ok ? res.json() : Promise.reject(res.status))
  .then(data => console.log(data));
```

---

## 🌐 TanStack Query

TanStack Query is the rebranded, framework-agnostic version of React Query. It supports:
- **React**, **Solid**, **Svelte**, **Vue**
- Reusable logic across frontends
- Same API design as React Query

---

## 🧪 RTK Query (Redux Toolkit Query)

### Definition:
RTK Query is a data-fetching and caching tool built into **Redux Toolkit**. It reduces boilerplate and integrates tightly with Redux state.

### Example Setup:
```js
// service.js
const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getUsers: builder.query({ query: () => 'users' }),
  }),
});

// In component
const { data, isLoading } = useGetUsersQuery();
```

### Pros:
- Built into Redux Toolkit
- Strong typing with TypeScript
- Auto-cache and re-fetch
- Handles mutations and polling

### Cons:
- Redux dependency
- Slightly more verbose than React Query

---

## 🧠 Strategies & Best Practices

- Use **TanStack/React Query** for modern apps with server-driven UIs
- Use **RTK Query** if you're already using Redux
- Use **Axios** for powerful request control
- Use **fetch** for lightweight projects or when avoiding dependencies

---

## 🔍 Summary Table

| Tool          | Purpose                       | Pros                           | Cons                            |
|---------------|-------------------------------|--------------------------------|---------------------------------|
| React Query   | Async data fetching & caching | Great UX, smart refetching     | Not for client state            |
| Axios         | HTTP client                   | Interceptors, easy syntax      | Requires extra installation     |
| Fetch         | Native fetch API              | No dependency                  | Verbose, manual error handling  |
| RTK Query     | Redux-friendly fetching       | Strong typing, built-in Redux  | Redux-only                      |
| TanStack Query| Framework-agnostic            | Cross-framework flexibility    | Slightly new branding to learn  |

---

Choosing the right data-fetching strategy depends on your tech stack, team familiarity, and app complexity. React Query and RTK Query both bring modern, declarative patterns to frontend apps.
