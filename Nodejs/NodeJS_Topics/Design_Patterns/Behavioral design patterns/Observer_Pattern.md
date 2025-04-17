The Observer pattern establishes a one-to-many dependency between objects in Node.js, where one object (the “subject”) notifies a set of dependent objects (the “observers”) whenever its state changes. This enables loose coupling and event-driven communication, promoting flexibility and reactivity in applications. The built-in EventEmitter class is fundamental to implementing this pattern, offering methods for managing observers and emitting notifications.

Key Use Cases
Real-time updates: Chat applications, live dashboards, and other scenarios requiring immediate updates upon data changes.
Status notifications: User login/logout events, task completion alerts, and similar notifications triggered by state changes.
Event-driven architectures: Microservices communication architectures where events trigger actions in interconnected services.
Data synchronization: Maintaining consistency across multiple instances of data by broadcasting updates to subscribed observers.
User interfaces: Triggering UI updates dynamically based on changes in underlying data models.

Pros
Loose coupling: Subject and observers are independent, promoting maintainability and code reusability.
Efficient notification: Multiple observers are notified simultaneously with minimal overhead.
Flexibility: Different event types and observer reactions can be easily accommodated.
Reactive architectures: Enables applications to respond dynamically to state changes.
Cons
Increased complexity: Compared to direct communication, managing observers and notifications adds complexity.
Performance overhead: With many observers, notifying each one can impact performance.
Management burden: Careful handling of observer subscriptions and unsubscribing is required.

Custom Implementation without EventEmitter

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(eventData) {
    this.observers.forEach((observer) => observer.update(eventData));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(eventData) {
    console.log(`Observer ${this.name} received event data: ${eventData}`);
  }
}

// Usage
const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify('Price changed to $25');

subject.unsubscribe(observer1);

subject.notify('Stock decreased'); // Only observer2 receives this notification


Using the EventEmitter Class

const EventEmitter = require('events');

// Subject (EventEmitter)
class Product extends EventEmitter {
  constructor(name, price) {
    super();
    this.name = name;
    this.price = price;
  }

  setPrice(newPrice) {
    this.price = newPrice;
    this.emit('priceChange', newPrice); // Notify observers
  }
}

// Observer (callback function)
const logPriceChange = (newPrice) => {
  console.log(`Product price changed to: ${newPrice}`);
};

// Usage
const product = new Product('Shirt', 20);
product.on('priceChange', logPriceChange); // Register observer

product.setPrice(25); // Trigger price change and notification