
---

```markdown
# 🔌 WebSockets in Node.js / NestJS / JavaScript

## 🔹 What Are WebSockets?

**WebSocket** is a communication protocol that provides **full-duplex, bi-directional** communication between client and server over a **single, long-lived TCP connection**.

- Unlike HTTP (which is request-response), WebSockets allow **continuous** data flow.
- Ideal for **real-time applications** like chat, live updates, games, and collaborative tools.

---

## 🔹 How WebSockets Work

1. Client initiates WebSocket handshake via HTTP upgrade request.
2. Server responds with a `101 Switching Protocols`.
3. TCP connection is upgraded to WebSocket.
4. Both sides can now send/receive messages at any time.

---

## 🔹 Communication Flow (Methods)

| Method                | Description                                     |
|------------------------|-------------------------------------------------|
| `ws.send()`           | Client/Server sends a message over socket       |
| `ws.onmessage`        | Listener for incoming messages                  |
| `ws.onopen`           | Triggered when connection opens                 |
| `ws.onclose`          | Triggered when connection closes                |
| `ws.onerror`          | Triggered on communication error                |

---

## 🔹 WebSocket Types / Patterns

| Type / Pattern        | Description                                     |
|------------------------|-------------------------------------------------|
| Broadcast              | One server sends data to all connected clients  |
| One-to-One             | Client ↔ Client via server routing              |
| Rooms/Namespaces       | Logical separation of clients (e.g., chat rooms)|
| Pub/Sub                | Client subscribes to topics or channels         |

---

## 🔹 Why Use WebSockets in Node.js / NestJS / JS?

| Use Case                        | Reason                                   |
|----------------------------------|-------------------------------------------|
| Real-time Communication          | Low-latency 2-way messaging               |
| Gaming & Live Collaboration      | Constant updates between multiple users   |
| Notifications / Alerts           | Instant server push                       |
| IoT / Streaming Devices          | Continuous data stream from sensors       |

---

## 🔹 WebSocket Strategies

| Strategy              | Description                                       |
|------------------------|---------------------------------------------------|
| Ping/Pong Heartbeats  | Keep connection alive and detect disconnections   |
| Namespaces/Rooms      | Separate clients by scope or group                |
| Token Authentication  | Secure initial handshake using JWT/token          |
| Retry/Reconnect Logic | Reconnect automatically on disconnect             |

---

## 🔹 Pros & Cons

### ✅ Pros:
- Bi-directional communication
- Low latency and high speed
- Efficient over long connections (single TCP)
- Real-time event broadcasting
- Lightweight after initial handshake

### ❌ Cons:
- No built-in request/response semantics (like HTTP)
- Doesn’t work well with older proxies/firewalls
- More complex to scale (load balancing requires sticky sessions or pub/sub)
- Not ideal for simple request/response APIs

---

## 🔹 WebSocket Example (Node.js with `ws`)

### 🧠 Server (Node.js)
```js
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', socket => {
  console.log('Client connected');

  socket.on('message', msg => {
    console.log('Received:', msg);
    socket.send(`Echo: ${msg}`);
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});
```

### 🧠 Client (Browser)
```js
const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
  console.log('Connected');
  socket.send('Hello Server!');
};

socket.onmessage = event => {
  console.log('Server says:', event.data);
};
```

---

## 🔹 WebSocket Example (NestJS with `@nestjs/websockets`)

### 🧠 Gateway Example
```ts
@WebSocketGateway()
export class ChatGateway {
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): string {
    return `Received: ${data}`;
  }

  @OnGatewayConnection()
  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  @OnGatewayDisconnect()
  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }
}
```

---

## 🔹 When to Use WebSockets

| Scenario                          | Use WebSockets? |
|------------------------------------|------------------|
| Real-time collaboration (docs, chat) | ✅ Yes           |
| Gaming or live dashboards           | ✅ Yes           |
| Notifications and alerts           | ✅ Yes           |
| Basic data fetching (CRUD)         | ❌ Use REST      |
| One-way updates                    | ❌ Use SSE       |

---

## 🔹 Summary

- **WebSocket** is ideal for **low-latency, real-time, bi-directional** communication.
- Common in chat apps, gaming, live feeds, and IoT.
- Use **`ws`**, **Socket.io**, or **NestJS WebSocket Gateway** for implementation.
- Requires more setup than HTTP but offers far better interactivity and performance.

---

## 🔁 Alternatives

| Method   | Best For                         |
|----------|----------------------------------|
| REST     | Standard API calls (CRUD)        |
| SSE      | One-way updates (lightweight)    |
| Long Polling | Fallback for real-time      |
| WebSocket| Real-time bi-directional apps    |

```

---

