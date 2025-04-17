Factory Pattern
The Factory Pattern provides a way to create objects without exposing the concrete creation logic to the client code. Instead, it uses a central “factory” object that encapsulates the logic for creating different types of objects based on some input (e.g., a string, a configuration object). This promotes loose coupling, flexibility, and centralized control over object creation in your applications.

Key Use Cases
Creating diverse objects: When your application needs to create different types of objects based on dynamic conditions or configurations.
Simplifying complex object creation: Encapsulating intricate creation logic within the factory, improving code readability and maintainability.
Promoting loose coupling: Decoupling client code from the specific implementation details of created objects.
Enabling centralized control: Managing changes to object creation logic in a single place (the factory) instead of modifying multiple clients.
Facilitating testing: Isolating object creation and making it easier to mock or test specific types of objects.
Code Samples
Basic Example

class ShapeFactory {
  createShape(type) {
    switch (type) {
      case 'circle':
        return new Circle();
      case 'square':
        return new Square();
      default:
        throw new Error('Invalid shape type');
    }
  }
}

class Circle {
  draw() {
    console.log('Drawing a circle');
  }
}

class Square {
  draw() {
    console.log('Drawing a square');
  }
}

const factory = new ShapeFactory();
const circle = factory.createShape('circle');
const square = factory.createShape('square');

circle.draw(); // Output: Drawing a circle
square.draw(); // Output: Drawing a square
Advanced Example with Dependency Injection

class DatabaseConnectionFactory {
  constructor(config) {
    this.config = config;
  }

  createConnection() {
    const type = this.config.type;
    const options = this.config.options;

    // Use dependency injection to create specific connection based on type
    switch (type) {
      case 'mongodb':
        return new MongoDBConnection(options);
      case 'mysql':
        return new MySQLConnection(options);
      default:
        throw new Error('Invalid database type');
    }
  }
}

const config = {
  type: 'mongodb',
  options: {
    url: 'mongodb://localhost:27017/mydb',
  },
};

const factory = new DatabaseConnectionFactory(config);
const connection = factory.createConnection();

connection.connect(); // Connect to the database
Pros
Flexibility: Easily create different objects based on dynamic input.
Loose coupling: Decouples client code from object creation details.
Centralized control: Easier to manage and modify object creation logic.
Reusability: The factory can be reused to create various objects.
Testability: Easier to test object creation in isolation.
Cons
Complexity: Introduces an additional layer of abstraction, potentially adding complexity.
Over-engineering: Might be overkill for simple object creation scenarios.
Performance overhead: Creating objects through a factory might have slight performance overhead compared to direct construction.