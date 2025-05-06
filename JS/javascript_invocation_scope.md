
# JavaScript Function Invocation and Variable Environment

## Introduction – Function Invocation and Variable Environment in JS
When you invoke a function in JavaScript, the engine creates a new **Function Execution Context**. This context holds:
- **Variable Environment**: records function parameters and local variables.
- **Lexical Environment**: links to the outer scopes for closures.
- **This Binding**: value of `this` inside the function.

```js
function greet(name) {
  console.log("Hello, " + name);
}
greet("Alice");
```

## Deep Dive Explanation of Function Invocation
1. **Creation Phase**:
   - Create a new execution context.
   - Set up the variable environment (parameters as `undefined`, local variables as `undefined`).
   - Determine `this` based on how the function is called.
2. **Execution Phase**:
   - Assign argument values to parameters.
   - Execute function body line by line.

## How the Call Stack Works Behind the Scenes in JS
- The **call stack** is a LIFO stack of execution contexts.
- **Global Execution Context** is pushed first.
- Each function invocation pushes a new context and pops it on completion.

## Demo of Variable Environment and Call Stack in Browser
1. Open DevTools → **Sources**.
2. Add breakpoints inside a function.
3. Inspect **Scope** panel to see the variable environment.
4. Observe **Call Stack** panel for active contexts.

## Summary of JS Fundamentals Covered
- Creation vs. Execution Phase
- Function vs. Global Execution Context
- Variable & Lexical Environments
- Call Stack mechanics

# Behind the Scenes of the Shortest JavaScript Program

## Global Execution Context and `window` Object in JavaScript
The GEC creates the **global object** (`window` in browsers) and sets up the global scope.

```js
var x = 10;
function foo() {}
console.log(window.x); // 10
```

## Introduction to `this` Keyword in Browser
In the global scope, `this` refers to the global object (`window`).

```js
console.log(this === window); // true
```

## Code Example of Variables and Functions in Global Memory Space
```js
var a = 5;
function bar() {
  return a * 2;
}
```
Both `a` and `bar` live in the global memory.

## `undefined` vs `not defined` in JS
- **`undefined`**: variable declared but no value.
- **`ReferenceError: not defined`**: variable never declared.

```js
var a;
console.log(a);        // undefined
console.log(b);        // ReferenceError: b is not defined
```

# Undefined vs. Not Defined in JS

## Introduction to `undefined` in JavaScript
`undefined` is a primitive type representing an unassigned value.

## Code Example of `undefined` in JS
```js
let x;
console.log(x); // undefined
```

## Code Example of `not defined` in JS
```js
console.log(y); // ReferenceError: y is not defined
```

## Demo of `undefined` vs `not defined` Using Code
Run the above snippets in DevTools console to see the differences.

## JS is a Loosely Typed (Weakly Typed) Language
Variables can hold any data type and change types at runtime.

## Mistakes to Avoid with `undefined`
- Don’t treat `undefined` as falsy flags without explicit checks.
- Avoid using undeclared variables.

# The Scope Chain

## Introduction – Scope and the Lexical Environment
- **Scope**: visibility of variables.
- **Lexical Environment**: association of identifier names to values plus reference to outer scope.

## Code Example for Understanding Scope
```js
function outer() {
  let a = 1;
  function inner() {
    console.log(a); // Accesses 'a' via scope chain
  }
  inner();
}
outer();
```

## Understanding the Meaning of Scope
Scope determines which variables are accessible at different parts of the code.

## Diving Deep into Code & Behind the Scenes
- Engine creates separate lexical environments for each function invocation.
- Each environment links to its outer environment.

## Introduction to Lexical Environment
A **Lexical Environment** consists of:
1. **Environment Record**: mapping of identifiers.
2. **Outer Reference**: link to the parent environment.

## What is the Meaning of “Lexical”?
“Lexical” refers to the position in the source code.

## Lexical Environment Definition
A runtime structure representing the association between identifiers and variable values.

## Understanding Lexical Environment Visually
```
Global LexEnv
  ↓ outer
Function LexEnv for outer()
  ↓ outer
Function LexEnv for inner()
```

## How Scope and Lexical Environment Works in JavaScript
- When resolving a variable, the engine looks in the current environment record, then moves up the outer references until found.

## The Scope Chain in JavaScript
The chain of lexical environments that the engine traverses to resolve identifiers.

## Quick Revision of Scope, Lexical Environment, and the Scope Chain
- Scope = where a variable is accessible.
- Lexical Env = record + outer link.
- Scope Chain = sequence of environments.

## Browser Demo of Lexical Environment & The Scope Chain
Use DevTools **Scope** panel under **Sources** to inspect.

## Deep Dive into `let` & `const` and Their Scope & Hoisting in JS
- `let` and `const` are block scoped.
- They are hoisted but reside in the **Temporal Dead Zone** until initialization.

