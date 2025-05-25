
# Redis Use Cases in Node.js

Redis is a powerful in-memory data structure store, often used as a database, cache, and message broker. Below are common Redis use cases in Node.js applications:

## 1. **Caching**
### Purpose:
Reduce load on databases and improve response times.

### Example:
```js
const redis = require("redis");
const client = redis.createClient();

client.get("user:123", (err, data) => {
  if (data) {
    return JSON.parse(data); // Cache hit
  } else {
    // Fetch from DB and set in Redis
    client.set("user:123", JSON.stringify(userData), 'EX', 3600); // Cache for 1 hour
  }
});
```

## 2. **Session Management**
### Purpose:
Store session data in Redis for scalability and speed.

### Example:
```js
const session = require("express-session");
const RedisStore = require("connect-redis")(session);

app.use(session({
  store: new RedisStore({ client }),
  secret: "your-secret",
  resave: false,
  saveUninitialized: false
}));
```

## 3. **Rate Limiting**
### Purpose:
Prevent abuse of APIs by limiting requests.

### Example:
```js
// Store request count with TTL
client.incr("rate:user123");
client.expire("rate:user123", 60); // Limit in 60s
```

## 4. **Pub/Sub Messaging**
### Purpose:
Enable real-time communication in microservices or chat applications.

### Example:
```js
const pub = redis.createClient();
const sub = redis.createClient();

sub.subscribe("chat");

sub.on("message", (channel, message) => {
  console.log(`Message from ${channel}: ${message}`);
});

pub.publish("chat", "Hello World");
```

## 5. **Queueing (using Redis Lists)**
### Purpose:
Build simple job queues for background processing.

### Example:
```js
client.lpush("jobQueue", JSON.stringify(jobData));
client.brpop("jobQueue", 0, (err, data) => {
  const job = JSON.parse(data[1]);
  processJob(job);
});
```

## 6. **Leaderboard or Real-Time Analytics**
### Purpose:
Store and sort data quickly using sorted sets.

### Example:
```js
client.zincrby("leaderboard", 1, "user123");
client.zrevrange("leaderboard", 0, 9, "WITHSCORES");
```

---

Redis is fast, versatile, and fits well with Node.js' non-blocking I/O for building scalable applications.

