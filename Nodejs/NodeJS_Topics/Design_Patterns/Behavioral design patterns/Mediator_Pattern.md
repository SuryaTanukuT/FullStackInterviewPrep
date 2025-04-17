Mediator Pattern
The Mediator Pattern promotes loose coupling between objects by introducing a central mediator object that handles communication and interactions between them. Instead of objects directly communicating with each other, they send messages or requests to the mediator, which then orchestrates the necessary actions and sends responses back. This reduces the complexity of managing direct object dependencies and enables more flexible and maintainable architectures.

Key Use Cases
Complex communication networks: Managing interactions between many objects without complex direct dependencies.
Centralized control and coordination: Enforcing specific communication or collaboration rules between objects.
Decoupling objects: Hiding implementation details of other objects to promote loose coupling and modularity.
Dynamic configurations: Enabling changes to communication patterns without modifying individual objects.
Simplifying testing: Isolating individual objects and mocking the mediator for easier testing.
Code Samples
Basic Mediator Implementation

class ChatMediator {
  constructor(users) {
    this.users = users;
  }

  sendMessage(sender, message) {
    this.users.forEach(user => {
      if (user !== sender) {
        user.receiveMessage(sender, message);
      }
    });
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  sendMessage(message) {
    this.mediator.sendMessage(this, message);
  }

  receiveMessage(sender, message) {
    console.log(`${sender.name} to ${this.name}: ${message}`);
  }
}

const user1 = new User('Alice');
const user2 = new User('Bob');
const mediator = new ChatMediator([user1, user2]);

user1.sendMessage('Hello everyone!');
user2.sendMessage('Hi Alice!');
Using Events with the Mediator

class EventMediator {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(data));
    }
  }
}

const mediator = new EventMediator();

// Register listeners for specific events
mediator.on('userJoined', (user) => {
  console.log(`${user.name} joined the chat!`);
});

mediator.on('messageSent', (sender, message) => {
  console.log(`${sender.name}: ${message}`);
});

// Emit events for actions
const user3 = new User('Charlie');
mediator.emit('userJoined', user3);
user3.sendMessage('Hey there!');
Pros
Loose coupling: Decouples objects from each other’s implementation details.
Flexibility: Enables dynamic communication configurations and easy changes.
Maintainability: Simplifies code by centralizing communication logic.
Testability: Easier to test individual objects and mock the mediator.
Reusability: The mediator can be reused for different communication scenarios.
Cons
Increased complexity: Introduces an additional layer of abstraction, potentially adding complexity.
Performance overhead: Communication through the mediator might have slight performance overhead.