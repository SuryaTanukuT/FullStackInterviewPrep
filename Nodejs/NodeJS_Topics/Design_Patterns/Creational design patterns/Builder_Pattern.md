Builder Pattern
The Builder Pattern provides a way to construct complex objects step-by-step in a flexible and readable manner. Instead of directly setting all properties in the constructor, you use dedicated builder methods to configure the object incrementally. This promotes clearer code, easier object customization, and potentially simplifies object validation and immutability.

Key Use Cases
Creating complex objects: Especially useful when objects have many optional or configurable properties.
Improving code readability: Breaks down complex object creation into smaller, more understandable steps.
Enabling customization: Allows clients to build objects with specific configurations tailored to their needs.
Facilitating validation: Easier to validate individual properties during construction compared to a constructor call.
Enforcing immutability: The builder can return an immutable object, preventing unwanted modifications later.
Code Sample
class UserBuilder {
  constructor(name) {
    this.name = name;
    this.email = null;
    this.age = null;
  }

  withEmail(email) {
    this.email = email;
    return this;
  }

  withAge(age) {
    this.age = age;
    return this;
  }

  build() {
    if (!this.email) {
      throw new Error('Email is required');
    }
    return new User(this.name, this.email, this.age);
  }
}

class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

const user = new UserBuilder('John Doe')
  .withEmail('john.doe@example.com')
  .withAge(30)
  .build();

console.log(user); // Output: User { name: 'John Doe', email: 'john.doe@example.com', age: 30 }
Pros
Improved readability: Clearer construction logic compared to complex constructors.
Flexibility and customization: Clients can easily create diverse object configurations.
Simplified validation: Can validate properties during construction for better data integrity.
Potential for immutability: Builder can return immutable objects for safer usage.
Cons
Boilerplate code: Requires creating builder methods for each property, potentially adding complexity.
Performance overhead: Creating objects through a builder might have slight performance overhead compared to direct construction.
