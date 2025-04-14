
```markdown
# Key-Based Reconciliation (Lists & Iterations)

### Explanation:

When rendering lists, React uses keys to determine which items have changed, been added, or removed. Keys help React optimize re-renders by tracking element identity.

### Scenario:

A list of chat messages or a to-do list. Each item should have a unique key (preferably an ID) so that reordering, additions, or deletions are handled efficiently.

### Pros:

- Greatly improves performance for lists.
- Prevents unnecessary re-renders by reusing DOM nodes.

### Cons:

- Incorrect key usage (e.g., using indexes) can lead to unexpected behavior.

### When/Why/Where:

- **When**: For any list or array iteration.
- **Why**: To help React efficiently update only the changed items.
- **Where**: In lists, tables, grids, etc.

### Polyfill/Compatibility:

- No polyfill required; keys are a fundamental React concept.
```

