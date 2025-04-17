Decorator Pattern
The Decorator Pattern allows you to dynamically add or modify the behavior of an object at runtime without altering its original code. It works by “decorating” the object with additional functionality wrapped in separate functions or classes. This promotes loose coupling, flexibility, and extensibility in your applications by enabling modular changes to object behavior.

Key Use Cases
Adding functionality without subclassing: Useful when you want to extend object behavior without modifying its class hierarchy or violating the Open/Closed Principle.
Composing multiple behaviors: Enables combining different functionalities in a modular way using multiple decorators on the same object.
Dynamic configuration: Allows you to change object behavior based on runtime conditions or preferences.
Logging or tracking: Can be used to intercept method calls and perform logging, error handling, or other actions.
Code Samples
Basic Decorator Example

function logMethod(target, name, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args) {
    console.log(`Calling method: ${name} with args: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Method result: ${result}`);
    return result;
  };
  return descriptor;
}

class User {
  @logMethod
  greet(name) {
    return `Hello, ${name}!`;
  }
}

const user = new User();
user.greet('Alice');
// Output:
// Calling method: greet with args: ["Alice"]
// Method result: Hello, Alice!
Chaining Decorators

function authentication(level) {
  return function (target, name, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
      if (this.isAuthenticated(level)) {
        return originalMethod.apply(this, args);
      } else {
        throw new Error('Not authorized');
      }
    };
    return descriptor;
  };
}

class SecureService {
  @authentication('basic')
  readData() {
    // Read data
  }

  @authentication('admin')
  updateData(data) {
    // Update data
  }
}
Pros
Loose coupling: Decouples object behavior from its implementation.
Flexibility: Enables dynamic object composition and extensibility.
Reusability: Decorators can be reused for different objects and functionality.
Testability: Easier to test decorated objects by isolating individual decorators.
Cons
Potential complexity: Overuse can lead to intricate decorator chains and maintenance challenges.
Debugging difficulty: Tracing behavior through multiple decorators can be complex.
