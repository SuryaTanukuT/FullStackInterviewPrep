Facade Pattern
The Facade Pattern provides a simplified interface to a complex subsystem or group of objects. It acts as a mediator, hiding the intricacies of the underlying implementation and presenting a more manageable set of methods for clients to interact with.

Key Use Cases
Simplifying access to complex systems: When dealing with intricate subsystems with many methods or functionalities, a facade offers a more focused and user-friendly interface.
Reducing application complexity: By encapsulating complexity within the facade, you prevent client code from being cluttered with low-level details.
Promoting loose coupling: Decouples client code from specific implementation details of the underlying system, enabling easier changes and maintenance.
Creating reusable interfaces: The facade can be reused by different parts of your application, promoting code consistency and organization.
Code Samples
Basic Facade Example

class ShapeFacade {
  constructor(circle, square) {
    this.circle = circle;
    this.square = square;
  }

  drawCircle(radius) {
    this.circle.draw(radius);
  }

  drawSquare(sideLength) {
    this.square.draw(sideLength);
  }
}

const circle = new Circle();
const square = new Square();
const facade = new ShapeFacade(circle, square);

facade.drawCircle(5); // Delegates to circle.draw(5)
facade.drawSquare(10); // Delegates to square.draw(10)
Facade with Configuration

class DatabaseFacade {
  constructor(config) {
    this.client = new MongoClient(config.url);
  }

  connect() {
    return this.client.connect();
  }

  find(collection, query) {
    return this.client.db().collection(collection).find(query).toArray();
  }

  insert(collection, document) {
    return this.client.db().collection(collection).insertOne(document);
  }
}

const config = { url: 'mongodb://localhost:27017/mydb' };
const dbFacade = new DatabaseFacade(config);

dbFacade.connect()
  .then(() => dbFacade.find('users', {}))
  .then(users => console.log(users))
  .catch(error => console.error(error));
Pros
Simplified interface: Provides a more manageable set of methods for clients.
Improved code readability: Encapsulates complexity and keeps client code cleaner.
Loose coupling: Promotes independent development and testing of client and facade.
Reusability: The facade can be reused across different parts of your application.
Cons
Abstraction overhead: Might introduce an additional layer of abstraction depending on complexity.
Potential misuse: Overuse can lead to “god object” facades, hindering maintainability.
Limited flexibility: Tightly coupled facades might be less adaptable to future changes.
