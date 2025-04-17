Adapter Pattern
The Adapter Pattern bridges the gap between incompatible interfaces, allowing objects with different methods or formats to work together seamlessly. It acts as a wrapper around an existing object, translating its interface into one that another object can understand and use. This promotes loose coupling, flexibility, and code reusability in your applications.

Key Use Cases
Integrating third-party libraries: Adapting external libraries with incompatible interfaces to fit your application’s needs.
Connecting diverse services: Enabling communication between systems with different communication protocols or data formats.
Mocking external dependencies: Creating mock objects that mimic the behavior of real ones for testing purposes.
Extending or refactoring existing code: Adapting legacy code to work with new interfaces without modifying the original implementation.
Implementing inheritance-like behavior: Providing compatibility between objects that would otherwise be incompatible due to interface mismatches.
Code Samples
Basic Adapter Example

class TextLogger {
  log(message) {
    console.log(`[Text] ${message}`);
  }
}

class JsonLoggerAdapter {
  constructor(logger) {
    this.logger = logger;
  }

  log(data) {
    const json = JSON.stringify(data);
    this.logger.log(`[JSON] ${json}`);
  }
}

const textLogger = new TextLogger();
const jsonAdapter = new JsonLoggerAdapter(textLogger);

jsonAdapter.log({ message: 'Hello, world!' }); // Output: [JSON] {"message":"Hello, world!"}
Adapter with Dependency Injection

class PaymentProcessor {
  constructor(paymentService) {
    this.paymentService = paymentService;
  }

  processPayment(amount) {
    const paymentData = { amount };
    return this.paymentService.process(paymentData);
  }
}

class StripePaymentAdapter {
  constructor(stripe) {
    this.stripe = stripe;
  }

  process(paymentData) {
    // Use Stripe library to process payment
    return this.stripe.charge(paymentData.amount);
  }
}

const stripe = require('stripe')('...');
const paymentProcessor = new PaymentProcessor(new StripePaymentAdapter(stripe));

paymentProcessor.processPayment(100); // Uses Stripe to process payment
Pros
Promotes loose coupling: Decouples objects from specific interface dependencies.
Enhances flexibility: Enables seamless integration of diverse components.
Improves code reusability: Adapters can be reused for different integration scenarios.
Facilitates refactoring: Adapters can help bridge gaps during code modernization.
Cons
Introduces additional complexity: Adapters can add another layer of abstraction.
Potential performance overhead: Translation through the adapter might have minor performance implications.
