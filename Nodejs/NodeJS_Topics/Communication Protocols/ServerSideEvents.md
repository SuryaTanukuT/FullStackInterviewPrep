
```markdown
# 📡 Server-Sent Events (SSE) in Node.js / NestJS / JavaScript

## 🔹 What Are Server-Sent Events (SSE)?

**Server-Sent Events (SSE)** is a **unidirectional** communication protocol where the **server pushes updates to the client** over HTTP.

- Built on top of HTTP.
- Uses `EventSource` on the client side.
- Ideal for **real-time updates** like live feeds, stock tickers, notifications.

---

## 🔹 How It Works (Method)

1. Client makes an HTTP request using `EventSource`.
2. Server keeps the connection open.
3. Server sends updates using special `text/event-stream` format.
4. Connection is **persistent**, but **one-way (server → client only)**.

---

## 🔹 Types of Use Cases

| Use Case           | Why SSE Works Well                      |
|--------------------|------------------------------------------|
| Live Feeds         | Server pushes news/tweets/sports scores |
| Notifications      | Instant server-triggered alerts         |
| Stock/Price Updates| Regular but lightweight push updates     |
| Dashboards         | Real-time data streams                   |
| IoT Dashboards     | Server pushes updates from sensors       |

---

## 🔹 Why Use SSE in Node.js / NestJS / JavaScript?

| Feature                      | Benefit                                               |
|-----------------------------|--------------------------------------------------------|
| Simpler than WebSockets     | No need for complex protocol or libraries             |
| Built on HTTP               | Works over existing infrastructure                    |
| Auto-reconnect built-in     | `EventSource` handles reconnections automatically     |
| Lightweight and efficient   | One-way data stream with minimal overhead             |
| Perfect for push-only data  | If client doesn't need to send messages back          |

---

## 🔹 SSE vs Other Methods

| Feature      | SSE                        | WebSocket                   | Long Polling                |
|--------------|----------------------------|-----------------------------|-----------------------------|
| Direction    | Server → Client only       | Bi-directional              | Client → Server + response  |
| Protocol     | HTTP                       | Custom over TCP (ws://)     | HTTP                        |
| Complexity   | Simple                     | Complex                     | Medium                      |
| Reconnects   | Built-in                   | Manual                      | Manual                      |
| Browser Support | ✅ Most modern browsers | ✅ Most modern browsers     | ✅ All browsers              |

---

## 🔹 Pros & Cons

### ✔️ Pros:
- Simple to implement
- Built-in support in modern browsers
- Auto-reconnect, retry, and event IDs
- Low bandwidth usage for streaming updates

### ❌ Cons:
- **One-way only** (server → client)
- Not supported in older IE browsers
- Limited support for custom headers in some browsers
- HTTP/2 support is limited

---

## 🔹 SSE Strategy Types

| Strategy                | Description                                                  |
|-------------------------|--------------------------------------------------------------|
| Stream Events           | Push events when new data is available                       |
| Heartbeat / Keep-alive  | Send ping events periodically to keep connection alive       |
| Retry Backoff           | Use `retry:` to tell client how long to wait before reconnect|
| Event ID Resuming       | Send `id:` to let client resume from last event on reconnect |

---

## 🔹 Code Examples

### 🧠 Client-Side (Browser)
```js
const source = new EventSource('/events');

source.onmessage = (event) => {
  console.log('Message:', event.data);
};

source.onerror = (err) => {
  console.error('SSE error:', err);
};
```

---

### 🔧 Server-Side (Node.js - Express)
```js
app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Send a welcome message
  res.write('data: Connected\n\n');

  // Send periodic updates
  const interval = setInterval(() => {
    const message = `data: ${new Date().toISOString()}\n\n`;
    res.write(message);
  }, 3000);

  // Clean up on client disconnect
  req.on('close', () => {
    clearInterval(interval);
    res.end();
  });
});
```

---

### 🚀 Server-Side in NestJS (Controller)
```ts
@Get('events')
@Sse()
sendEvents(): Observable<MessageEvent> {
  return interval(3000).pipe(
    map(() => ({
      data: { time: new Date().toISOString() },
    })),
  );
}
```

---

## 🧭 When to Use SSE

| Scenario                        | Use SSE?        |
|---------------------------------|-----------------|
| One-way updates from server     | ✅ Yes           |
| Bi-directional communication    | ❌ Use WebSocket |
| Lightweight real-time dashboard | ✅ Yes           |
| Browser must support legacy IE  | ❌ Use polling   |

---

## 📌 Summary

- **SSE is ideal for real-time, one-way data streams**.
- Easy to use and supported natively by browsers.
- Great for dashboards, feeds, notifications, and live updates.
- Prefer **WebSocket** if **bi-directional** communication is needed.

---

## 🔄 Related Concepts

- ✅ WebSocket → Two-way communication
- ✅ Long Polling → Fallback for SSE/WebSocket
- ✅ SSE → Best for server push (simple, efficient)

```

---

