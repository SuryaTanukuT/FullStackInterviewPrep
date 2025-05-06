
# Advanced JavaScript Topics

## More DOM: Traversal, Manipulation, Dynamic Elements
- DOM traversal means navigating between elements (parent, child, sibling).
- Manipulation involves changing HTML/CSS dynamically using JavaScript.
- Dynamic elements are elements created/removed at runtime using methods like `document.createElement()` and `appendChild()`.

## LocalStorage / SessionStorage
- LocalStorage: stores data with no expiration.
- SessionStorage: stores data until the page session ends.
- Used to store user preferences, form data, tokens.

## Currying
- Transforming a function with multiple arguments into a sequence of functions each taking one argument.
- Example: `sum(a)(b)`.

## Thinking Recursively
- Solving problems by breaking them into smaller instances of the same problem.
- Common in tree, graph traversal, factorial, Fibonacci.

## Debouncing
- Limits how often a function runs; delays execution until no calls happen for a period.
- Useful in search boxes, window resizing.

## Throttling
- Ensures a function runs at most once in a set interval.
- Useful for scroll events, button spamming.

## Event Bubbling / Capturing / Propagation
- Bubbling: event goes from target to ancestor.
- Capturing: event goes from ancestor to target.
- Propagation: the full cycle.
- Use `stopPropagation()` to stop event flow.

## Prototype, Prototypal Inheritance, Prototype Chain, _proto_
- Prototype: shared object for methods/properties.
- Prototypal Inheritance: objects inherit from other objects.
- Prototype Chain: chain of objects linked via prototype.
- _proto_: internal link to prototype.

## Event Bubbling / Capturing Details
1. **What is Event Bubbling, Capturing, Trickling**
   - Bubbling: bottom-up.
   - Capturing: top-down.
   - Trickling: informal term for full cycle.
   
2. **Order of Handlers**
   - Capturing → Target → Bubbling.

3. **How to Capture**
   - Add `{ capture: true }` in `addEventListener`.

4. **Demo**
   ```js
   div.addEventListener('click', handler, true); // capture
   div.addEventListener('click', handler); // bubble
   ```

5. **Stopping Propagation**
   - Use `event.stopPropagation()`.

## Inheritance in JavaScript
- Objects inherit from other objects using prototypes.
- Classes and `extends` use syntactic sugar over this.

## Event Delegation
- Attach one event listener to parent for all children.
- Example: list click handlers.
- Benefits: fewer listeners, works for dynamic elements.
- Limitations: careful with `stopPropagation()`.

## call, apply, bind
- `call`: invoke with arguments list.
- `apply`: invoke with arguments array.
- `bind`: return new function with bound `this`.

## CORS (Cross-Origin Resource Sharing)
- Controls cross-origin requests between domains.
- Preflight: browser checks permissions via OPTIONS request.
- Additional headers: `Access-Control-Allow-Origin`.
- Solutions: configure server, use proxy, enable CORS in dev.

## Polyfills for call/apply/bind
- Custom implementation when native support is missing.

## async / defer
- `async`: script runs as soon as loaded.
- `defer`: script runs after HTML is parsed.

## Custom Events
- User-defined events dispatched with `dispatchEvent`.

## Generators & Iterators
- Generators: functions that yield multiple values.
- Iterators: provide `next()` to iterate values.

## Proxy & Reflect
- Proxy: intercept and customize object behavior.
- Reflect: methods to interact with Proxy targets.

## Symbols & Well-known Symbols
- Symbols: unique, immutable identifiers.
- Well-known Symbols: hook into language internals.

## WeakMap, WeakSet
- WeakMap: keys are objects, values are arbitrary.
- WeakSet: stores objects, no duplicates.
- Don’t prevent garbage collection.

## Zigzag (Spiral) Level Order Traversal
- Traverse tree levels alternately left-to-right, right-to-left.
- Use two stacks or `.map()` + reverse odd-indexed arrays.
- Example:
   ```js
   const result = levels.map((lvl, i) => i % 2 ? lvl.reverse() : lvl);
   ```
