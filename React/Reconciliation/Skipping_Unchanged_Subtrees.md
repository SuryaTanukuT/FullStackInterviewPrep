Skipping Unchanged Subtrees
Explanation:

React’s reconciliation algorithm can skip over subtrees where nothing has changed. If the props and state remain the same, React reuses the subtree without re-rendering it.

Scenario:

A sidebar component that remains unchanged even when the main content updates. React can skip the sidebar’s subtree, saving processing time.

Pros:

Saves computation and speeds up rendering.

Cons:

Requires immutability and proper use of keys to detect unchanged subtrees accurately.

When/Why/Where:

When: When many components rarely change.

Why: To minimize unnecessary re-renders.

Where: In complex UIs with static and dynamic sections.

Polyfill/Compatibility:

No polyfill required.

