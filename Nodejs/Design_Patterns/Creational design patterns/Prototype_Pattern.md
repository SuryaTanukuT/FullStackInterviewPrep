Prototype Pattern
The Prototype Pattern enables efficient object creation by cloning existing objects without directly invoking their constructors. It leverages built-in JavaScript prototypes and the Symbol.iterator mechanism to define how objects create copies of themselves. This promotes code reuse, performance optimization, and dynamic object creation patterns in your applications.

Key Use Cases
Performance-critical object creation: When creating many similar objects, cloning from a prototype can be faster than constructing each one individually.
Complex object structures: Simplifying the cloning process for objects with intricate nested structures.
Customizing new objects: Defining specific properties or behaviors that differ from the prototype instance during cloning.
Implementing inheritance without classes: Providing a mechanism for objects to inherit attributes and methods from other objects.
Creating factories dynamically: Using prototypes to generate objects with varying configurations based on runtime needs.
Code Samples
Basic Prototype Implementation

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}!`);
};

const person1 = new Person('Alice', 30);
const person2 = Object.create(person1); // Clone using Object.create

person2.name = 'Bob';
person2.age = 25;

person1.greet(); // Output: Hello, my name is Alice!
person2.greet(); // Output: Hello, my name is Bob!
Advanced Prototype with Symbol.iterator

const listPrototype = {
  [Symbol.iterator]() {
    let index = 0;
    const values = this.values;
    return {
      next() {
        if (index < values.length) {
          return { value: values[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

class ShoppingList {
  constructor(items) {
    this.values = items;
  }

  addItem(item) {
    this.values.push(item);
  }

  * [Symbol.iterator]() {
    yield* this.values;
  }
}

const list = new ShoppingList(['apples', 'bread', 'milk']);
list.addItem('eggs');

for (const item of list) {
  console.log(item); // Output: apples, bread, milk, eggs
}
Pros
Performance gains: Cloning prototypes can be faster than direct construction, especially for complex objects.
Code reuse: Prototypes encapsulate reusable common properties and behaviors.
Flexibility: Enables dynamic object creation and customization through cloning.
Inheritance-like behavior: Provides a way for objects to inherit from others without classic classes.
Cons
Potential complexity: Overuse can lead to intricate prototype hierarchies and maintenance challenges.
Mutation concerns: Modifications to prototypes can affect all cloned objects, requiring careful consideration.
Limited control: Cloned objects don’t fully mimic the constructor’s behavior, potentially needing workarounds.
