# System Design Concepts in JavaScript / Node.js

This document provides a clear explanation of core system design concepts relevant to JavaScript/Node.js developers, with examples, advantages, disadvantages, strategies, and system design levels.

## 1. Client-Server Architecture

* **Context**: Model where client sends requests, server responds.
* **Example (Express)**:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from Server'));
app.listen(3000);
```

* **Advantages**: Centralized control, easy maintenance.
* **Disadvantages**: Single point of failure.
* **Strategy**: Use Load Balancers, clustering.
* **Level**: High-level architecture.

## 2. IP Address

* **Context**: Unique identifier for devices on a network.
* **Example**: `127.0.0.1` (localhost)
* **Usage in Node.js**:

```js
require('dns').lookup(require('os').hostname(), (err, ip) => {
  console.log(ip);
});
```

* **Advantage**: Enables networking.
* **Disadvantage**: Hard to manage manually.
* **Level**: Network layer.

## 3. DNS

* **Context**: Maps domain names to IP addresses.
* **Example**:

```js
const dns = require('dns');
dns.lookup('example.com', (err, address) => {
  console.log(address);
});
```

* **Advantage**: Human-readable addresses.
* **Disadvantage**: Can be spoofed.
* **Strategy**: Use secure DNS providers.
* **Level**: Network layer.

## 4. Proxy / Reverse Proxy

* **Proxy**: Client → Proxy → Server
* **Reverse Proxy**: Client → Reverse Proxy → Multiple Servers
* **Example**: Nginx + Node.js backend
* **Advantage**: Security, load balancing
* **Disadvantage**: Additional complexity
* **Strategy**: Use Nginx/HAProxy
* **Level**: Middleware/network infrastructure

## 5. Latency

* **Context**: Delay between request and response.
* **Example**:

```js
console.time('request');
fetch('https://api.github.com').then(() => console.timeEnd('request'));
```

* **Advantage**: Measurable performance metric
* **Disadvantage**: Impacts UX
* **Strategy**: Use CDNs, caching
* **Level**: Performance

## 6. HTTP/HTTPS

* **Context**: Protocol for data exchange
* **Example (HTTPS)**:

```js
const https = require('https');
https.get('https://api.github.com', res => {
  console.log(res.statusCode);
});
```

* **Advantage**: Secure, reliable
* **Disadvantage**: SSL cert cost/complexity
* **Strategy**: Use Let's Encrypt
* **Level**: Communication protocol

## 7. APIs

* **Context**: Interface to interact with services
* **Example (Express API)**:

```js
app.get('/api/data', (req, res) => res.json({ key: 'value' }));
```

* **Advantage**: Interoperability
* **Disadvantage**: Versioning issues
* **Strategy**: API versioning
* **Level**: Application

## 8. REST API

* **Context**: Stateless API over HTTP
* **Example**: `GET /users`, `POST /users`
* **Advantage**: Simplicity
* **Disadvantage**: Over-fetching
* **Strategy**: Resource modeling
* **Level**: Application/API

## 9. GraphQL

* **Context**: Query language for APIs
* **Example**:

```js
const { graphqlHTTP } = require('express-graphql');
```

* **Advantage**: Efficient querying
* **Disadvantage**: Complexity
* **Strategy**: Use when client controls data needs
* **Level**: API

## 10. Databases

* **Context**: Persistent storage
* **Example**: MongoDB, PostgreSQL
* **Advantage**: Data durability
* **Disadvantage**: Scaling challenges
* **Strategy**: Use indexing, replication
* **Level**: Storage

## 11. SQL vs NoSQL

* **SQL**: Relational (PostgreSQL)
* **NoSQL**: Non-relational (MongoDB)
* **SQL Adv**: ACID compliance
* **NoSQL Adv**: Flexible schema
* **Strategy**: Choose per data structure
* **Level**: Database

## 12. Vertical Scaling

* **Context**: Adding resources to a single machine
* **Advantage**: Simpler
* **Disadvantage**: Hardware limits
* **Strategy**: Use before horizontal scaling
* **Level**: Infrastructure

## 13. Horizontal Scaling

* **Context**: Adding more servers
* **Advantage**: Scalability
* **Disadvantage**: Complex coordination
* **Strategy**: Stateless services, load balancers
* **Level**: Infrastructure

## 14. Load Balancers

* **Context**: Distribute requests
* **Example**: Nginx, AWS ELB
* **Advantage**: High availability
* **Disadvantage**: Configuration complexity
* **Strategy**: Use health checks
* **Level**: Infrastructure

## 15. Database Indexing

* **Context**: Speeds up query
* **Example (MongoDB)**:

```js
db.users.createIndex({ email: 1 });
```

* **Advantage**: Faster read
* **Disadvantage**: Slower writes
* **Level**: Data optimization

## 16. Replication

* **Context**: Copy of data across servers
* **Advantage**: Redundancy
* **Disadvantage**: Sync complexity
* **Strategy**: Use master-slave replication
* **Level**: Database

## 17. Sharding

* **Context**: Splitting DB into parts
* **Advantage**: Horizontal scaling
* **Disadvantage**: Complex queries
* **Strategy**: Choose effective sharding key
* **Level**: Database architecture

## 18. Vertical Partitioning

* **Context**: Split DB by columns
* **Advantage**: Optimization
* **Disadvantage**: Complex joins
* **Strategy**: Use in wide tables
* **Level**: DB optimization

## 19. Caching

* **Context**: Store data for quick access
* **Example (Node.js)**:

```js
const NodeCache = require('node-cache');
const cache = new NodeCache();
```

* **Advantage**: Speed
* **Disadvantage**: Staleness
* **Strategy**: Use Redis/memory store
* **Level**: Performance

## 20. Denormalization

* **Context**: Duplicating data for faster reads
* **Advantage**: Fast read
* **Disadvantage**: Data inconsistency
* **Strategy**: Use carefully
* **Level**: DB design

## 21. CAP Theorem

* **Context**: Choose 2 of Consistency, Availability, Partition tolerance
* **Advantage**: Informed trade-offs
* **Strategy**: Use per business requirement
* **Level**: Distributed systems

## 22. Blob Storage

* **Context**: Store unstructured data
* **Example**: AWS S3, Azure Blob
* **Advantage**: Scalable
* **Disadvantage**: Latency
* **Strategy**: Use for media, backups
* **Level**: Storage

## 23. CDN

* **Context**: Delivers content from edge servers
* **Example**: Cloudflare, AWS CloudFront
* **Advantage**: Speed
* **Disadvantage**: Cost
* **Strategy**: Use for static content
* **Level**: Performance

## 24. WebSockets

* **Context**: Bi-directional communication
* **Example (Socket.io)**:

```js
const io = require('socket.io')(3000);
io.on('connection', socket => socket.emit('message', 'Hello'));
```

* **Advantage**: Real-time
* **Disadvantage**: Overhead
* **Strategy**: Use when needed only
* **Level**: Communication

## 25. Webhooks

* **Context**: Event-based callbacks
* **Example (Express)**:

```js
app.post('/webhook', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});
```

* **Advantage**: Async communication
* **Disadvantage**: Delivery failures
* **Strategy**: Use retries, logs
* **Level**: Integration

## 26. Microservices

* **Context**: Small, independent services
* **Advantage**: Scalability
* **Disadvantage**: Complexity
* **Strategy**: Define clear interfaces
* **Level**: Architecture

## 27. Message Queues

* **Context**: Async communication
* **Example**: RabbitMQ, Kafka
* **Advantage**: Decoupling
* **Disadvantage**: Debugging complexity
* **Strategy**: Use retry, DLQ
* **Level**: System integration

## 28. Rate Limiting

* **Context**: Limit API usage
* **Example**:

```js
const rateLimit = require('express-rate-limit');
app.use(rateLimit({ windowMs: 60000, max: 100 }));
```

* **Advantage**: Prevent abuse
* **Disadvantage**: False blocks
* **Strategy**: Customize limits per user/IP
* **Level**: Security/Performance

## 29. API Gateways

* **Context**: Single entry for microservices
* **Example**: Kong, AWS API Gateway
* **Advantage**: Centralized control
* **Disadvantage**: Single point of failure
* **Strategy**: Use with redundancy
* **Level**: Integration

## 30. Idempotency

* **Context**: Same request = same result
* **Example**: `PUT /user/123` with same data
* **Advantage**: Reliable retries
* **Disadvantage**: Requires careful design
* **Strategy**: Track request IDs
* **Level**: API behavior
