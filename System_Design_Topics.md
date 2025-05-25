
# System Design Concepts

---

## 📌 How Consistent Hashing Works

**Consistent Hashing** distributes data across a dynamic number of nodes, minimizing re-distribution when nodes are added/removed.

- Nodes and keys are hashed onto a ring.
- Each key is assigned to the next node clockwise on the ring.
- Used in distributed systems (e.g., Redis clusters, Cassandra).

---

## 🆚 Protocol Buffers vs JSON

| Feature            | Protocol Buffers          | JSON                  |
|--------------------|---------------------------|------------------------|
| Format             | Binary                    | Text                  |
| Size               | Smaller                   | Larger                |
| Speed              | Faster (serialization)    | Slower                |
| Readability        | Not human-readable        | Human-readable        |
| Schema             | Required (.proto files)   | Schema-less           |
| Use Case           | High-performance systems  | Web APIs              |

---

## 🏗️ Monolith vs Microservices Architecture

### Monolith:
- Single unified application.
- Simple to develop and deploy.
- Hard to scale or update parts independently.

### Microservices:
- Composed of independent services.
- Each service owns its data and logic.
- Better for scalability and team autonomy.
- Requires service orchestration and communication (e.g., REST, message queues).

---

## 🌐 What Happens When You Type a URL Into Your Browser

1. **DNS Lookup** – Resolve domain to IP.
2. **TCP Handshake** – Establish connection.
3. **HTTPS (TLS)** – Secure the channel.
4. **HTTP Request** – Browser sends GET/POST.
5. **Server Response** – HTML, CSS, JS returned.
6. **Rendering** – Browser parses and displays the page.

---

## 🔄 How WebSockets Work

- Full-duplex, persistent communication over a single TCP connection.
- Starts with HTTP handshake, then upgrades to WebSocket.
- Ideal for real-time apps (chat, live sports, stock data).

```js
const ws = new WebSocket('wss://example.com/socket');
ws.onmessage = (event) => console.log(event.data);
```

---

## 🌱 Bloom Filters

- Probabilistic data structure to test if an element **might be present**.
- Uses multiple hash functions and a bit array.
- No false negatives, possible false positives.
- Useful for cache filtering, database lookups.

---

## 🧱 Modular Monolith Architecture

- A **monolith** split into **well-defined modules**.
- Each module has clear boundaries and responsibilities.
- Benefits:
  - Easier transition to microservices.
  - Maintains simplicity of monolith.
  - Encourages separation of concerns.

---

Let me know if you want diagrams or code examples added!
