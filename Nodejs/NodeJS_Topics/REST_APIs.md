# REST APIs

---

```markdown
# 🌐 Deep Dive into REST APIs and Idempotency in JavaScript (Node.js)

---

## 📘 What are REST APIs?

**REST (Representational State Transfer)** is an architectural style for building web services. It uses standard HTTP methods (GET, POST, PUT, DELETE, etc.) for performing CRUD (Create, Read, Update, Delete) operations on resources.

In **Node.js**, REST APIs are commonly implemented using frameworks like **Express.js**.

---

## 🧱 Core Concepts of REST

- **Stateless**: Each request from a client to server must contain all the information needed to understand and process the request.
- **Resources**: Entities (users, posts, products, etc.) accessed via URIs.
- **Representation**: Resources are transferred using formats like JSON or XML.
- **Methods**:
  - `GET` – Read a resource.
  - `POST` – Create a new resource.
  - `PUT` – Update a resource.
  - `PATCH` – Partially update a resource.
  - `DELETE` – Remove a resource.

---

## ✨ Why Use REST APIs?

- **Platform-independent** – Works over HTTP, can be consumed by any client.
- **Scalable** – Statelessness makes it easier to scale horizontally.
- **Simplicity** – Uses standard HTTP methods.
- **Separation of Concerns** – Clean separation between client and server.

---

## 🧪 Implementing REST APIs in Node.js (with Express)

### Basic Setup

```javascript
const express = require('express');
const app = express();

app.use(express.json());

let products = [{ id: 1, name: "Laptop" }];

// GET (Read)
app.get('/products', (req, res) => {
  res.json(products);
});

// POST (Create)
app.post('/products', (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT (Update)
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  products = products.map(p => (p.id === id ? { ...p, ...req.body } : p));
  res.json({ message: "Product updated" });
});

// DELETE (Delete)
app.delete('/products/:id', (req, res) => {
  products = products.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 🌀 What is Idempotency?

**Idempotency** is a property of HTTP methods that ensures multiple identical requests have the same effect as a single request.

---

## ✅ Idempotent Methods

| Method  | Idempotent | Description |
|---------|------------|-------------|
| GET     | ✅         | Fetching a resource doesn't change server state. |
| PUT     | ✅         | Updating a resource with the same data repeatedly results in no change. |
| DELETE  | ✅         | Deleting the same resource repeatedly doesn’t have a cumulative effect. |
| POST    | ❌         | Creating the same resource repeatedly results in multiple entries. |
| PATCH   | ⚠️ Depends | If you PATCH the same partial data repeatedly, results may vary. |

---

## 🧭 Why is Idempotency Important?

- **Safe retries**: Useful in distributed systems, e.g., if a request times out and is retried.
- **Consistency**: Prevents accidental resource duplication or state corruption.
- **Debugging**: Easier to trace state changes due to predictable behavior.

---

## 🧯 Making POST Idempotent (Workaround)

Sometimes, you need POST to behave idempotently (e.g., payment processing). One way is by **using an Idempotency Key**.

```javascript
const processed = new Set();

app.post('/checkout', (req, res) => {
  const idempotencyKey = req.headers['idempotency-key'];
  
  if (processed.has(idempotencyKey)) {
    return res.status(409).json({ message: "Duplicate request" });
  }

  // Simulate payment process
  processed.add(idempotencyKey);
  res.status(201).json({ message: "Payment successful" });
});
```

---

## 🕸️ RESTful Flow in Node.js

```txt
Client
   ↓
[ HTTP Request: GET /products ]
   ↓
Express Route Middleware
   ↓
Controller Logic (Read DB, Compute, etc.)
   ↓
Send Response
```

---

## 📦 Alternatives to REST

| Alternative  | Use Case |
|--------------|----------|
| GraphQL      | Fine-grained data fetching with single endpoint. |
| gRPC         | High-performance, language-agnostic RPC (often used in microservices). |
| WebSockets   | Real-time, full-duplex communication. |
| SOAP         | Enterprise legacy systems, strict contracts. |

---

## 📋 Real-World Use Cases

| Use Case              | Method | Idempotent | Notes                              |
|-----------------------|--------|------------|------------------------------------|
| User login            | POST   | ❌         | Creates a session/token each time |
| Get user profile      | GET    | ✅         | Safe to retry                     |
| Update user settings  | PUT    | ✅         | Overwrites resource               |
| Delete user account   | DELETE | ✅         | Has the same result every time    |
| Submit a transaction  | POST   | ❌ / ✅     | Can be idempotent with a key      |

---

## 🔁 Summary

| Concept     | Description |
|-------------|-------------|
| REST        | Architectural style for web APIs |
| HTTP Verbs  | Represent CRUD operations         |
| Idempotent  | Same request = same effect        |
| POST        | Not idempotent by default         |
| PUT/DELETE  | Are idempotent                    |

---

## 📚 Further Reading

- [MDN HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [REST API Tutorial](https://restfulapi.net/)
- [Idempotency in REST APIs (Stripe)](https://stripe.com/docs/idempotency)
- [Express.js](https://expressjs.com/)

---
```

