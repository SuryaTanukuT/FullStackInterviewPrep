# System Design Concepts in JavaScript/Node.js

Each section includes: Definition, Example, Advantages, Disadvantages, Strategy/Best Practices, Level of System Design.

---

## 1. Client-Server Architecture
**Definition**: A model where clients (browsers/mobile) communicate with servers to request services.
**Example**:
```javascript
// Client request using fetch
fetch('/api/data').then(res => res.json());

// Server using Express
app.get('/api/data', (req, res) => res.json({ message: 'Hello' }));
```
**Advantages**: Centralized control, easier maintenance.
**Disadvantages**: Server bottlenecks under load.
**Strategy**: Use load balancing and horizontal scaling.
**Design Level**: High-Level architecture.

...

## 30. Idempotency
**Definition**: An operation that produces the same result no matter how many times it's performed.
**Example**:
```javascript
// PUT request to update a user's email
app.put('/user/123', (req, res) => {
  // Even if called multiple times with same data, result is same
  updateUserEmail(123, req.body.email);
  res.status(200).send('Updated');
});
```
**Advantages**: Reliable APIs, avoids duplicate side effects.
**Disadvantages**: Can be complex to implement for non-idempotent operations like payments.
**Strategy**: Use unique transaction IDs, retries with checks.
**Design Level**: API-level design.

---

> 📌 For full documentation, consult each component's use in scalable systems and real-world deployments like Express.js + Redis + RabbitMQ + PostgreSQL.