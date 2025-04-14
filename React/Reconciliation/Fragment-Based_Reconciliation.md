
---

## 6. Fragment-Based Reconciliation

### Explanation
React Fragments let you group adjacent elements without extra DOM nodes. Helps keep the DOM clean and reduces reconciliation overhead.

### Scenario
Returning adjacent elements without wrapping them in `<div>` tags.

### Pros
- Cleaner DOM
- Reduces unnecessary wrappers

### Cons
- Limited attributes (only `key` supported in long form)

### When/Why/Where
- **When:** Grouping multiple sibling elements
- **Why:** DOM optimization
- **Where:** List rendering, component returns

### Polyfill/Compatibility
- Supported since React 16.2+; no polyfill required.

