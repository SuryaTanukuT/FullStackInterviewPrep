
# 🌍 Edge Functions for React

**Edge Functions** are serverless functions that run at the edge — close to the user — enabling ultra-fast performance for tasks like rendering, personalization, or API calls in React apps.

---

## 🚀 What Are Edge Functions?

- Deployed to CDN edge locations around the world.
- Run with **low latency**, close to the client.
- Support features like SSR, API routing, auth, and A/B testing.

---

## 📦 Popular Platforms Supporting Edge Functions

| Provider        | Product Name         | React Framework Support |
|-----------------|----------------------|--------------------------|
| Vercel          | Edge Functions       | Next.js, React           |
| Netlify         | Edge Functions       | CRA, Next.js, Remix      |
| Cloudflare      | Workers              | Any JS-based framework   |
| AWS             | Lambda@Edge          | Custom setup needed      |
| Fastly          | Compute@Edge         | Advanced use cases       |

---

## 🧠 Use Cases in React

- Server-side rendering (SSR) with low latency.
- Real-time personalization (based on headers/cookies).
- Geo-aware content delivery.
- Edge caching of API responses.
- Lightweight authentication and redirects.

---

## 🔧 Example (Next.js on Vercel)

### Edge Middleware

```js
// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  if (!request.cookies.get("logged_in")) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
```

### Edge API Route

```js
// pages/api/hello.js
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  return new Response(JSON.stringify({ message: "Hello from Edge!" }), {
    headers: { "Content-Type": "application/json" },
  });
}
```

---

## ✅ Benefits

- ⚡ Ultra-low latency.
- 🌍 Global distribution.
- 🧩 Seamless SSR/personalization.
- 🔒 Secure, stateless, and fast.

---

## ❌ Limitations

- Limited execution time (e.g., <50ms for Vercel Edge).
- Limited language features (no native Node.js APIs).
- Not ideal for long-running or CPU-heavy logic.

---

## 🔗 When to Use Edge Functions

| Use Case                     | Suitable for Edge Functions |
|------------------------------|------------------------------|
| Real-time personalization     | ✅ Yes                       |
| Static asset serving          | ❌ No (use CDN)              |
| Light authentication & authz | ✅ Yes                       |
| Heavy computation             | ❌ No (use traditional server)|
| Multi-region SSR              | ✅ Yes                       |

---

## 🧱 Best Practices

- Keep logic minimal and fast.
- Avoid large dependencies.
- Use them for **routing, redirects, personalization**.
- Pair with traditional serverless for heavy lifting.

---

## 📌 Summary

Edge functions are powerful tools for modern React apps that demand speed, personalization, and global reach. Use them where **low-latency and distributed logic** matter most.
