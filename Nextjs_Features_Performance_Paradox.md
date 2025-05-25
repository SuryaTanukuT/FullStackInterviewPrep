
# 🚀 Core Features of Next.js

---

## 1. Server-Side Rendering (SSR)
- Pages are rendered on the server at request time.
- Useful for dynamic data that must be up-to-date.

```js
export async function getServerSideProps(context) {
  return { props: { data } };
}
```

---

## 2. Static Site Generation (SSG)
- Pages are pre-rendered at build time.
- Ideal for content that doesn’t change frequently.

```js
export async function getStaticProps() {
  return { props: { data } };
}
```

---

## 3. Incremental Static Regeneration (ISR)
- Update static content without full rebuilds.
- Allows specifying a revalidation period.

```js
export async function getStaticProps() {
  return {
    props: { data },
    revalidate: 10 // seconds
  };
}
```

---

## 4. File-Based Routing
- Pages directory maps directly to routes.
- Supports dynamic routes using brackets.

Example:
```
pages/posts/[id].js → /posts/123
```

---

## 5. API Routes
- Serverless functions created in `pages/api/`.
- Can be used for backend operations within the Next.js app.

---

## 6. Middleware
- Runs before requests are completed.
- Ideal for redirects, authentication, and logging.

```js
export function middleware(req) {
  // middleware logic
}
```

---

## 7. Image Optimization
- Built-in `<Image />` component.
- Features lazy loading, responsive sizes, and modern formats.

---

## 8. Edge Functions
- Code executed at CDN edge.
- Low latency for personalization, geolocation, A/B testing, etc.

---

# ❓ Performance Paradox

The **Performance Paradox** occurs when:

- You try to optimize for performance but end up degrading it.
- Optimization strategies introduce unnecessary complexity or unintended side effects.

### Examples:
- Overuse of `useMemo` or `React.memo` leading to worse performance.
- Complex caching logic becomes harder to maintain and causes stale data.
- Lazy loading everything causes essential content to be delayed.
- SSR and ISR used inappropriately lead to longer response times.

🧠 **Key Insight**: Don’t optimize prematurely. Always **measure**, **profile**, and **prioritize user impact**.

