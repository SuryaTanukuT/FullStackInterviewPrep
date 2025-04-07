Element Comparison
Explanation:

During reconciliation, React compares the elements in the new and old virtual DOM trees. If the element type and key are the same, React reuses the DOM node and updates props. Otherwise, it unmounts the old element and mounts the new one.

Scenario:

A component that conditionally renders different button styles. If the same type is used, only props are updated; if the type changes, a new button is created.

Pros:

Efficient updating when elements match.

Cons:

Requires careful use of keys and types to maximize reuse.

When/Why/Where:

When: Always during reconciliation.

Why: To optimize rendering.

Where: Throughout the component tree.

Polyfill/Compatibility:

No polyfill needed; built into React’s virtual DOM diffing.

