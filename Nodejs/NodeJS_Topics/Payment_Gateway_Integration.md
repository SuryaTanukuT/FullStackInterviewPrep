# Payment Gateway Integration
# Deep Dive: Stripe Payment Gateway Integration in Node.js

## Table of Contents
- [Introduction](#introduction)
- [Why Stripe is Used](#why-stripe-is-used)
- [When to Use Stripe](#when-to-use-stripe)
- [Use Cases](#use-cases)
- [Types of Payments Supported](#types-of-payments-supported)
- [Methods and Libraries](#methods-and-libraries)
- [Complete Integration Setup](#complete-integration-setup)
- [Security Considerations](#security-considerations)
- [Alternatives to Stripe](#alternatives-to-stripe)
- [Best Practices](#best-practices)
- [Conclusion](#conclusion)

---

## Introduction
Stripe is a popular payment gateway offering APIs for handling online payments securely and efficiently. In Node.js, Stripe can be easily integrated using the official Stripe Node.js SDK.

---

## Why Stripe is Used
- Easy integration with RESTful APIs
- Excellent documentation
- PCI compliance out-of-the-box
- Secure tokenization of card data
- Support for global currencies and payment methods
- Subscriptions, one-time payments, invoicing

---

## When to Use Stripe
- SaaS applications (subscriptions, usage-based billing)
- eCommerce platforms
- Donation systems
- Booking/reservation systems
- Marketplaces (via Stripe Connect)

---

## Use Cases
- One-time payments
- Recurring subscriptions
- Webhooks for payment status
- Marketplaces (platform accounts, transfers)
- Checkout pages hosted or custom-built

---

## Types of Payments Supported
- Credit/debit cards
- Apple Pay / Google Pay
- ACH transfers
- Buy now, pay later (Afterpay, Klarna)
- Alipay, WeChat Pay (in supported regions)

---

## Methods and Libraries
- `stripe` NPM package (official SDK)
- `express` (for web server and routes)
- `body-parser` (parsing incoming requests)

Installation:
```bash
npm install stripe express body-parser dotenv
```

---

## Complete Integration Setup

### 1. Stripe Account & API Keys
- Get your Publishable and Secret API keys from [Stripe Dashboard](https://dashboard.stripe.com)

### 2. Directory Structure
```
project/
├── server.js
├── .env
└── public/
    └── index.html
```

### 3. .env
```
STRIPE_SECRET_KEY=sk_test_XXXXXXX
STRIPE_PUBLISHABLE_KEY=pk_test_XXXXXXX
```

### 4. Backend (server.js)
```js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### 5. Frontend (public/index.html)
```html
<!DOCTYPE html>
<html>
<head>
  <title>Stripe Payment</title>
  <script src="https://js.stripe.com/v3/"></script>
</head>
<body>
  <button id="pay">Pay $10</button>
  <script>
    const stripe = Stripe('pk_test_XXXXXXX');

    document.getElementById('pay').addEventListener('click', async () => {
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 1000, currency: 'usd' })
      });
      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: { token: 'tok_visa' },
        }
      });

      if (result.error) {
        alert(result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        alert('Payment successful!');
      }
    });
  </script>
</body>
</html>
```

---

## Security Considerations
- Never expose your Stripe secret key on the frontend
- Use HTTPS in production
- Implement CSRF protection on sensitive endpoints
- Validate webhook signatures
- Always verify amounts and order details server-side

---

## Alternatives to Stripe
| Gateway        | Features                                      |
|----------------|-----------------------------------------------|
| PayPal         | Popular for consumer payments                 |
| Razorpay       | India-focused, UPI, cards, wallets            |
| Braintree      | Owned by PayPal, supports many payment types  |
| Square         | Great for in-person payments                  |
| Mollie         | Europe-focused payment options                |

---

## Best Practices
- Store customer/payment metadata for future analysis
- Handle failed/canceled payments gracefully
- Use Stripe Webhooks to stay in sync with payment events
- Tokenize and reuse cards when appropriate
- Use rate-limiting and throttling to secure endpoints

---

## Conclusion
Stripe provides a powerful and flexible payment solution that is easy to integrate with Node.js. With robust API support, extensive documentation, and built-in compliance features, it's an excellent choice for both startups and large-scale platforms.

Explore advanced features like Stripe Connect, Billing, and Terminal to scale your business capabilities.

