# Deep Dive into SOLID Principles in JavaScript (Node.js)

## Table of Contents
1. Introduction to SOLID Principles
2. Why Use SOLID Principles
3. When and Where to Use SOLID
4. The SOLID Principles Explained with Examples
    - Single Responsibility Principle (SRP)
    - Open/Closed Principle (OCP)
    - Liskov Substitution Principle (LSP)
    - Interface Segregation Principle (ISP)
    - Dependency Inversion Principle (DIP)
5. Conclusion

---

## 1. Introduction to SOLID Principles

**SOLID** is an acronym for five design principles intended to make software designs more understandable, flexible, and maintainable. Originally introduced by Robert C. Martin (Uncle Bob), they are commonly applied in object-oriented design but are applicable in JavaScript and Node.js too.

---

## 2. Why Use SOLID Principles

- **Scalability**: Makes code more modular and adaptable to change.
- **Maintainability**: Easier to update without breaking existing features.
- **Testability**: Code is easier to isolate and test.
- **Separation of Concerns**: Each unit of code has a clear purpose.

---

## 3. When and Where to Use SOLID

- In medium to large projects with multiple developers.
- When code complexity is increasing.
- For backend applications with multiple business rules (like in Node.js APIs).
- While designing APIs, services, or modules that change independently.

---

## 4. The SOLID Principles Explained with Examples

### 4.1 Single Responsibility Principle (SRP)
**A class or module should have one and only one reason to change.**

#### ❌ Bad Example
```js
// userService.js
class UserService {
  createUser(user) {
    // Save user to DB
  }

  sendWelcomeEmail(user) {
    // Send email
  }
}
```

#### ✅ Good Example
```js
class UserService {
  createUser(user) {
    // Save user to DB
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    // Send email
  }
}
```

---

### 4.2 Open/Closed Principle (OCP)
**Software entities should be open for extension but closed for modification.**

#### ❌ Bad Example
```js
class Discount {
  getDiscount(customer) {
    if (customer.type === 'premium') {
      return 20;
    } else if (customer.type === 'standard') {
      return 10;
    }
    return 0;
  }
}
```

#### ✅ Good Example
```js
class Discount {
  getDiscount(customer) {
    return 0;
  }
}

class PremiumDiscount extends Discount {
  getDiscount(customer) {
    return 20;
  }
}

class StandardDiscount extends Discount {
  getDiscount(customer) {
    return 10;
  }
}
```

---

### 4.3 Liskov Substitution Principle (LSP)
**Objects of a superclass should be replaceable with objects of its subclasses.**

#### ❌ Bad Example
```js
class Bird {
  fly() {
    console.log("Flying");
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Ostriches can't fly!");
  }
}
```

#### ✅ Good Example
```js
class Bird {
  move() {
    console.log("Moving");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("Flying");
  }
}

class Ostrich extends Bird {
  move() {
    console.log("Running");
  }
}
```

---

### 4.4 Interface Segregation Principle (ISP)
**Clients should not be forced to depend on interfaces they do not use.**

JavaScript doesn’t have interfaces, but we can mimic them with good design.

#### ❌ Bad Example
```js
class Worker {
  work() {}
  eat() {}
}
```

#### ✅ Good Example
```js
class Workable {
  work() {}
}

class Eatable {
  eat() {}
}

class Human extends Workable {
  work() { console.log("Working"); }
}

Object.assign(Human.prototype, new Eatable());
```

---

### 4.5 Dependency Inversion Principle (DIP)
**High-level modules should not depend on low-level modules. Both should depend on abstractions.**

#### ❌ Bad Example
```js
class MySQLDatabase {
  connect() {
    console.log("Connected to MySQL");
  }
}

class UserService {
  constructor() {
    this.db = new MySQLDatabase();
  }
}
```

#### ✅ Good Example
```js
class Database {
  connect() {}
}

class MySQLDatabase extends Database {
  connect() {
    console.log("Connected to MySQL");
  }
}

class UserService {
  constructor(database) {
    this.db = database;
  }
}

const db = new MySQLDatabase();
const userService = new UserService(db);
```

---

## 5. Conclusion

The SOLID principles help developers write cleaner, more modular, and scalable code. Applying these principles in Node.js enhances maintainability, readability, and testability — essential for building production-grade applications.

Use these principles as architectural guidelines, not strict rules. Evaluate each in the context of your project’s complexity and team dynamics.

