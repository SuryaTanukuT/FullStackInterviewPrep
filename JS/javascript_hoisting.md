
# JavaScript Hoisting — Detailed Explanation

## Introduction to Hoisting in JavaScript
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution. This means variables and function declarations can be referenced before they are formally defined in code.

**Example:**
```js
console.log(myVar); // undefined due to hoisting
var myVar = 5;
console.log(myVar); // 5
```

## Definition of Hoisting
Hoisting refers to the process by which the JavaScript engine parses code and allocates memory for variable and function declarations before executing any code.

## Variable and Function Hoisting in JS
- **Variable Hoisting**: Only the declaration is hoisted, not the initialization.
  ```js
  console.log(a); // undefined
  var a = 10;
  console.log(a); // 10
  ```
- **Function Hoisting**: Entire function definitions are hoisted, allowing functions to be called before they appear in code.
  ```js
  greet(); // "Hello"
  function greet() {
    console.log("Hello");
  }
  ```

## Functions Hoisting Behind the Scenes
Under the hood, the engine separates the creation and execution phases:
1. **Creation Phase**: Scans for declarations, allocates memory, hoists.
2. **Execution Phase**: Executes code line by line.

### Behind the Scenes Example:
```js
function foo() {
  console.log(x); // undefined
  var x = 20;
  bar(); // runs fine
  function bar() {
    console.log("Inside bar");
  }
}
foo();
```
- `foo` and `bar` declarations hoisted in creation.
- `x` is hoisted but set to `undefined`.

## Diving Deep Under the Hood of JavaScript Code
- Engine parses script, creates Global Execution Context.
- Allocates memory for variables (`undefined`) and functions (actual definitions).
- During execution, assignments occur and functions are available.

## Summary and Interview Tip
- **Summary**: Hoisting moves declarations to the top. Variables are hoisted as `undefined`; functions are fully hoisted.
- **Interview Tip**: Always use `let` and `const` to avoid confusion with `var` hoisting. Know how hoisting impacts temporal dead zone for `let`/`const`.

## Demo of Call Stack in the Browser
1. Open DevTools → **Sources**.
2. Add a breakpoint before a hoisted call.
3. Observe call stack entries showing Global and Function contexts.
4. Step through to see creation vs execution phases.

---

## Where It Is Used
- Understanding scope chain and closures.
- Debugging ReferenceErrors and undefined values.
- Writing predictable, bug-free code.

## Strategies
- **Prefer `let`/`const`**: Block-scoped declarations avoid hoisting surprises.
- **Declare at Top**: If using `var`, declare at the top of functions.
- **Use Functions as Expressions**: `const fn = function() {}` avoids function hoisting.

## Pros and Cons

| Aspect            | Pros                                                    | Cons                                                    |
|-------------------|---------------------------------------------------------|---------------------------------------------------------|
| Hoisting          | Allows flexible code ordering for functions             | Can lead to `undefined` values and tricky bugs for `var` |
| Function Hoisting | Enables calling functions before their definitions     | Less predictable code flow                              |

## Execution Time Considerations
- Hoisting happens in the **creation phase** before execution, adding minimal parsing overhead.
- No effect on runtime complexity; only affects initialization order.
