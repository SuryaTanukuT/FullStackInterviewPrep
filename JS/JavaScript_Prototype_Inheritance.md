
# 🧬 JavaScript Prototype Chain & Inheritance

This guide covers key concepts around the prototype system, inheritance, and object behavior in JavaScript.

---

## 🔗 Prototype Chain

Every object in JavaScript has a hidden `[[Prototype]]` (accessible via `__proto__`) that links to another object or `null`.

```js
const obj = { a: 1 };
console.log(obj.__proto__ === Object.prototype); // true
```

---

## 🏗️ Object.create()

Creates a new object with the specified prototype.

```js
const parent = { greet: () => "Hello" };
const child = Object.create(parent);

console.log(child.greet()); // Inherited from parent
```

✅ Preferred over manual `__proto__` manipulation.

---

## ⚠️ __proto__ (Deprecated but still used)

```js
const animal = { eats: true };
const dog = {};
dog.__proto__ = animal;

console.log(dog.eats); // true
```

❗ Use `Object.create()` or `Object.setPrototypeOf()` instead.

---

## 🛠️ Object.setPrototypeOf()

Sets the prototype of an existing object.

```js
const base = { type: 'base' };
const derived = { name: 'child' };

Object.setPrototypeOf(derived, base);
console.log(derived.type); // 'base'
```

---

## 🧱 Constructor Functions

Functions used with `new` to create object instances.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  return `Hello, I'm ${this.name}`;
};

const p = new Person("Alice");
console.log(p.sayHello());
```

---

## 🧬 Class-Based Inheritance

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

const d = new Dog("Buddy");
console.log(d.speak());
```

✅ `class` and `extends` provide syntactic sugar over prototypes.

---

## 🔄 Method Overriding

Subclass overrides a method from the parent class or prototype.

```js
class A {
  greet() { return "Hello from A"; }
}

class B extends A {
  greet() { return "Hello from B"; }
}
```

✅ Useful for polymorphism.

---

## ⚠️ Prototype Pollution

Prototype pollution is a vulnerability where properties are injected into global prototypes, affecting all objects.

```js
const payload = JSON.parse('{ "__proto__": { "polluted": true } }');
console.log({}.polluted); // true ❌

Object.prototype.polluted = undefined; // cleanup
```

✅ Always validate and sanitize object structures from untrusted input.

---

Understanding prototypes and inheritance is essential to mastering JavaScript object behavior and avoiding performance and security pitfalls.
