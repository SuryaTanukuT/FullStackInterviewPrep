
```markdown
# `useFormStatus` in React (Next.js App Router)

`useFormStatus` is a **React Hook** designed for use with **server actions** in **React Server Components (RSC)** — commonly used in **Next.js App Router**. It allows you to track the submission status of a form *inside client components nested within a form*.

---

## 🔍 What is `useFormStatus`?

`useFormStatus` helps components **inside a form** understand whether the form is currently submitting. This is incredibly useful for displaying spinners, disabling buttons, or showing live feedback **without lifting state**.

---

## ✅ Why Use It?

- Simplifies form submission state management.
- Eliminates need for `useState` or prop-drilling.
- Works naturally with **React Server Actions**.

---

## 📍 When & Where to Use

| Use Case ✅                                      | Don’t Use ❌                             |
|--------------------------------------------------|-------------------------------------------|
| Inside client components nested in a `<form>`    | Outside a form or without server actions  |
| With server actions (`"use server"`)             | In client-side-only React apps            |
| To track submission/loading state of a form      | For unrelated UI state                    |

---

## ✨ Syntax

```tsx
"use client";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
```

---

## 🧠 Scenario-Based Comparison

### Traditional Client-Side Form (Old Way)

```tsx
const [loading, setLoading] = useState(false);

<form onSubmit={async (e) => {
  e.preventDefault();
  setLoading(true);
  await submitData();
  setLoading(false);
}}>
  <button disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
</form>
```

> ❌ Requires `useState`, prop drilling, manual state handling.

---

### Server Action with `useFormStatus` (New Way)

```tsx
// server action
async function register(formData: FormData) {
  "use server";
  // handle registration
}

// client component
"use client";
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Registering..." : "Register"}
    </button>
  );
}

// form component
<form action={register}>
  <input name="email" />
  <input name="password" />
  <SubmitButton />
</form>
```

> ✅ Cleaner, more maintainable, no lifted state.

---

## ⚙️ API Reference

```ts
const { pending, data, method, action } = useFormStatus();
```

| Property | Description |
|----------|-------------|
| `pending` | `boolean` — whether the form is submitting |
| `data`    | The current `FormData` |
| `method`  | Submission method (e.g., "POST") |
| `action`  | The form action being triggered |

---

## ✅ Best Practices

- Use in **client components** nested within `<form>`.
- Combine with `useFormState` to manage result or error handling.
- Useful for buttons, loaders, form-level status indicators.

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|--------|------|
| Using outside a form | Place inside a form that uses a server action |
| Expecting to work in client-only apps | Only works with server actions |
| Wrapping the component in server-only logic | Must be `"use client"` |

---

## 🧩 Combine with `useFormState`

```tsx
const [state, formAction] = useFormState(actionFn, initialState);

<form action={formAction}>
  <SubmitButton />
</form>
```

---

## 🧪 Real World Example

```tsx
// actions.ts
export async function contactUs(formData: FormData) {
  "use server";
  await saveMessage(formData.get("message"));
}

// SubmitButton.tsx
"use client";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send"}
    </button>
  );
}

// ContactForm.tsx
import { contactUs } from "./actions";
import { SubmitButton } from "./SubmitButton";

export default function ContactForm() {
  return (
    <form action={contactUs}>
      <textarea name="message" />
      <SubmitButton />
    </form>
  );
}
```

---

## 🧠 Summary

| Question      | Answer |
|---------------|--------|
| **What?**     | React Hook to track form submission status |
| **Why?**      | Enables declarative UI updates on submit |
| **Where?**    | Inside client components in forms using server actions |
| **When?**     | When you want loading spinners, disable buttons, show UX feedback |
| **How?**      | `const { pending } = useFormStatus();` |

---

> 💡 Pro Tip: Combine `useFormStatus` with `useFormState` for full control over submission and feedback UX.