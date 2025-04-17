Proxy Pattern
The Proxy Pattern lets you create an object that acts as a “stand-in” for another object. This intermediary object can control or intercept method calls and property access operations.

Key Use Cases
Adding validation and data integrity checks to objects.
Implementing access control and authorization mechanisms.
Enhancing debugging and monitoring capabilities.
Optimizing performance through lazy loading or caching.
Creating virtual objects with customized behavior.
Code Samples
Basic usage

const user = { name: 'Alice', age: 30 };

const userProxy = new Proxy(user, {
  set(target, prop, value) {
    if (prop === 'age' && value < 0) {
      throw new Error('Age cannot be negative');
    }
    target[prop] = value;
  },
});

userProxy.age = 25; // Works fine
userProxy.age = -10; // Throws an error

console.log(userProxy.age); // Output: 25
Logging Method Calls

const logger = {
  logMethodCall(target, thisArg, args) {
    console.log(`Method ${target.name} called with arguments: ${args}`);
  },
};

const loggedObject = new Proxy({}, logger);
loggedObject.someMethod(1, 2, 3); // Output: "Method someMethod called with arguments: [1, 2, 3]"
Access Control

const adminOnly = {
  hasAdminAccess(target, prop) {
    if (prop === 'adminData' && !isAdminUser()) {
      throw new Error('Admin access required');
    }
    return true;
  },
};

const protectedData = new Proxy({ adminData: 'secret' }, adminOnly);
protectedData.adminData; // Throws error if not an admin user
Lazy Loading

const lazyLoaded = {
  get(target, prop) {
    if (prop === 'data' && !target.hasOwnProperty('data')) {
      target.data = fetchDataFromServer();
    }
    return target[prop];
  },
};

const objectWithLazyData = new Proxy({}, lazyLoaded);
objectWithLazyData.data; // Fetches data only when first accessed
Pros
Flexibility: The Proxy Pattern allows for a wide range of functionality depending on your custom handler implementation.
Loose Coupling: Decouples object behavior from specific implementation details, promoting maintainability.
Non-invasive: Can be applied to existing objects without modifying their original code.
Testability: Easier to test specific proxy behaviors in isolation.
Cons
Performance overhead: Proxy invocation might introduce slight performance overhead compared to direct object access.
Debugging complexity: Tracing behavior through proxies can be more complex.
Overuse: Avoid overly complex proxy logic that hinders readability and maintainability.
