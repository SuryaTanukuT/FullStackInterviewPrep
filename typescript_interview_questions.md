
# 🧠 Advanced TypeScript Interview Questions & Explanations

## 1️⃣ Difference Between `interface` and `type`
- `interface` is best for object shapes and extends other interfaces.
- `type` can define primitives, unions, tuples, etc.
**Use `interface` for OOP-style contracts and `type` for complex type expressions.**

```ts
interface User { name: string; }
type ID = string | number;
```

## 2️⃣ Generic Types
Allow reusable functions/components.

```ts
function identity<T>(arg: T): T { return arg; }
```

Improves type safety and code reuse.

## 3️⃣ Structural vs Nominal Typing
Structural typing checks compatibility based on shape.
Nominal typing (like in Java) checks exact type identity.

**Advantage:** Flexibility and code reuse.

## 4️⃣ `unknown` vs `any`
- `any`: disables type checking.
- `unknown`: must assert/verify type before use.

```ts
let value: unknown = "hello";
if (typeof value === "string") console.log(value.length);
```

**`unknown` is safer.**

## 5️⃣ Union vs Intersection Types
- Union (`|`): A or B
- Intersection (`&`): A and B

```ts
type A = { a: string };
type B = { b: number };
type AB = A & B;
```

Use union for varying inputs, intersection for combining models.

## 6️⃣ Utility Types
- `Partial<T>`: All properties optional
- `Required<T>`: All required
- `Pick<T, K>`: Pick subset
- `Omit<T, K>`: Remove keys

```ts
type User = { id: string; name: string; };
type PartialUser = Partial<User>;
```

Boost flexibility for component props or API layers.

## 7️⃣ Type-safe Error Handling
Use `Result` pattern or tagged unions.

```ts
type Result<T> = { success: true; data: T } | { success: false; error: string };
```

## 8️⃣ Discriminated Unions
Tagged unions with a common literal key.

```ts
type Shape = { type: 'circle'; radius: number } | { type: 'square'; side: number };

function area(shape: Shape) {
  switch (shape.type) {
    case 'circle': return Math.PI * shape.radius ** 2;
    case 'square': return shape.side ** 2;
  }
}
```

## 9️⃣ Typing Async Operations
Use typed promises and APIs.

```ts
async function fetchUser(): Promise<User> {
  const res = await fetch('/api/user');
  return res.json();
}
```

## 🔟 Conditional, Mapped, and Template Literal Types

```ts
type Response<T> = T extends Error ? never : T;
type Readonly<T> = { readonly [K in keyof T]: T[K] };
type EventName = `on${Capitalize<string>}`;
```

Solve dynamic shape problems.

## 1️⃣1️⃣ `readonly` vs `const`
- `const` = binding can't change
- `readonly` = property of object can’t be modified

## 1️⃣2️⃣ Higher-Order Functions

```ts
function withLogger<T>(fn: (arg: T) => void): (arg: T) => void {
  return (arg) => { console.log(arg); fn(arg); };
}
```

## 1️⃣3️⃣ Declaration Merging
Merge multiple declarations into one.

```ts
interface Window { custom: string }
```

Useful for extending third-party types.

## 1️⃣4️⃣ Index Signatures vs Mapped Types

```ts
interface Dictionary { [key: string]: string; }
type ReadonlyDict = { [K in keyof Dictionary]: Readonly<Dictionary[K]> };
```

Use index for arbitrary keys, mapped for known keys.

## 1️⃣5️⃣ TS Modules vs ES Modules
TS supports both `import/export` and `require/module.exports`.
Use `esModuleInterop` for compatibility.

## 1️⃣6️⃣ Abstract Classes
Classes with unimplemented methods. Prefer for shared behavior + contracts.

```ts
abstract class Animal {
  abstract sound(): void;
}
```

## 1️⃣7️⃣ TypeScript with React, Vue, Angular
- React: `.tsx`, props interfaces
- Vue: define props/types in components or with Vue CLI + Vetur
- Angular: Built-in support with decorators

## 1️⃣8️⃣ `keyof` Operator
Returns union of keys of a type.

```ts
type Keys = keyof User; // 'id' | 'name'
```

Useful for dynamic access.

## 1️⃣9️⃣ Polymorphism

```ts
function wrap<T>(input: T): T[] {
  return [input];
}
```

Also via inheritance or interfaces.

## 2️⃣0️⃣ TypeScript Decorators
Enable metadata & behavior extension.

```ts
function Log(target: any, prop: string) {
  console.log(`Called: ${prop}`);
}
```

Enable dependency injection and access control.

## 2️⃣1️⃣ Typing Redux/MobX
Use `TypedUseSelectorHook` in Redux or typed observables in MobX.

```ts
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
```

## 2️⃣2️⃣ `never` Type
Represents values that never occur.

```ts
function fail(msg: string): never { throw new Error(msg); }
```

Helps in exhaustive checks.

## 2️⃣3️⃣ Gradual Migration Strategies
- Convert files one-by-one (`.js` to `.ts`)
- Use `allowJs`, `checkJs` in tsconfig
- Add JSDoc for typed hints

## 2️⃣4️⃣ Circular Type References
Use type aliases and lazy-loading patterns.

```ts
type A = { b?: B };
type B = { a?: A };
```

Avoid over-nesting.

## 2️⃣5️⃣ Branded Types
Prevent value misuse with nominal typing.

```ts
type UserID = string & { __brand: "UserID" };
```

Avoid mixing `UserID` with raw strings.

---

Author: Adinarayana Namana  
LinkedIn: [https://www.linkedin.com/in/adinarayana-namana-8a0811115/](https://www.linkedin.com/in/adinarayana-namana-8a0811115/)
