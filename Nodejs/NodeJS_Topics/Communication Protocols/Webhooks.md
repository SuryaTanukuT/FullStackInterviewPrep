
```markdown
# 🔁 Webhooks in Node.js / NestJS / JavaScript

## 🔹 What Are Webhooks?

**Webhooks** are **user-defined HTTP callbacks** that allow one system to notify another system when a particular event occurs.

- They are **event-driven**.
- Instead of polling, the source system makes an **HTTP POST request** to a target URL when something happens (e.g., a new user is created).

---

## 🔹 How Webhooks Work

1. You register a webhook URL with a third-party service (e.g., GitHub, Stripe).
2. When an event occurs (e.g., payment completed), that service sends an HTTP request to your endpoint.
3. Your server receives the data and handles it accordingly.

---

## 🔹 Webhook Communication Flow (Methods)

| Method         | Description                                      |
|----------------|--------------------------------------------------|
| `POST`         | Most common method used to send payloads         |
| `GET` (rare)   | Sometimes used for validation/handshakes         |
| `HEAD`         | Optional to verify connection                    |
| Signature Headers | For authentication (e.g., `x-signature`)     |

---

## 🔹 Webhook Types / Usage Examples

| Type / Use Case              | Description                                      |
|------------------------------|--------------------------------------------------|
| Third-party API Webhooks     | Stripe, GitHub, Twilio send POSTs to your server|
| Internal Service Hooks       | Microservices notify each other                 |
| CMS Hooks                    | Headless CMS notifies frontend of content changes|
| Build / Deploy Hooks         | Trigger builds when code is pushed              |

---

## 🔹 Why Use Webhooks in Node.js / NestJS / JavaScript?

| Use Case                       | Why Webhooks Are Used                        |
|---------------------------------|----------------------------------------------|
| Payments                        | Stripe/PayPal notifies about payment status  |
| Messaging apps                  | Slack/Twilio delivers events to your server  |
| Git events                      | GitHub sends push/pull/create actions        |
| Headless CMS                    | Triggers frontend rebuild                    |
| Internal async workflows        | Services inform others of job completion     |

---

## 🔹 Webhook Strategies

| Strategy                      | Description                                   |
|-------------------------------|-----------------------------------------------|
| Retry on failure              | Retry with backoff if webhook fails           |
| Signature verification        | Validate payload with HMAC/secret             |
| Queuing & Decoupling          | Process webhook asynchronously using a queue  |
| Logging and Monitoring        | Track incoming payloads for debugging         |
| Rate-limiting                 | Prevent abuse and overload                    |

---

## 🔹 Pros & Cons

### ✅ Pros:
- Event-driven and efficient (no polling)
- Simple to implement and use
- Scales well with message queues
- Great for **decoupling systems**

### ❌ Cons:
- Delivery is not guaranteed unless retries are handled
- Requires secure endpoint (vulnerable to spoofing if not validated)
- Debugging can be hard due to async nature
- Depends on external service reliability

---

## 🔹 Webhook Example (Node.js - Express)

### 🧠 Setup Webhook Listener
```js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook/stripe', (req, res) => {
  const event = req.body;
  console.log('Webhook received:', event);

  if (event.type === 'payment_intent.succeeded') {
    // Handle payment
  }

  res.status(200).send('Received');
});

app.listen(3000, () => console.log('Webhook server running on port 3000'));
```

---

## 🔹 Webhook Example (NestJS)

### 🧠 Controller
```ts
@Controller('webhook')
export class WebhookController {
  @Post('stripe')
  handleStripeWebhook(@Req() req: Request, @Res() res: Response) {
    const event = req.body;
    console.log('Webhook received:', event);

    if (event.type === 'payment_intent.succeeded') {
      // Process payment
    }

    res.status(200).send('OK');
  }
}
```

---

## 🔹 When to Use Webhooks

| Scenario                          | Webhooks Useful? |
|------------------------------------|-------------------|
| Need to respond to external events | ✅ Yes           |
| Real-time updates from 3rd party   | ✅ Yes           |
| System notifications               | ✅ Yes           |
| Synchronous user interactions      | ❌ No (Use REST) |
| Requires real-time feedback        | ❌ Not ideal     |

---

## 🔹 Tips for Using Webhooks Safely

1. **Use HTTPS** to prevent interception.
2. **Verify signatures** (e.g., using HMAC + secret).
3. **Log all webhook events** for debugging.
4. **Return 2xx** quickly to acknowledge receipt.
5. **Process asynchronously** using queues or workers.
6. **Rate-limit** and block invalid sources.

---

## 🔹 Summary

- Webhooks are a powerful way to build **event-driven systems**.
- They are especially useful for **third-party integrations** like payments, messaging, and DevOps.
- Use them with **Express**, **NestJS**, or any HTTP-capable server.
- Secure them using **signatures**, **logging**, and **queue-based retries**.

---

## 🔁 Webhooks vs Other Methods

| Feature       | Webhooks       | Polling        | WebSocket       |
|---------------|----------------|----------------|------------------|
| Trigger Type  | Event-based    | Time-based     | Real-time        |
| Latency       | Low            | High           | Very low         |
| Direction     | 1-way (Push)   | 2-way (Pull)   | Bi-directional   |
| Setup         | Easy           | Easy           | Complex          |
| Real-Time     | Almost         | No             | Yes              |
| Reliability   | Needs retries  | Always         | Needs handling   |

```

---

