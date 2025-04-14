
# Conditional Portals

## What It Is
Conditional portals are rendered only when certain conditions are met (e.g., when a modal should be shown). This pattern helps manage components that are not always needed in the DOM.

---

## How It Works
The portal rendering logic is wrapped in a condition. This can be achieved using a state flag or any other logical check.

---

## Usage Example

```javascript
import React, { useState } from 'react';
import StandardModal from './StandardModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <StandardModal>
          <div>
            <h2>Conditional Modal</h2>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </StandardModal>
      )}
    </div>
  );
}
```

### Explanation:
- The portal is only rendered when `isOpen` is `true`.
- This ensures that the modal exists in the DOM only when needed, improving performance and reducing unnecessary rendering.

---

Let me know if you need further adjustments or enhancements!