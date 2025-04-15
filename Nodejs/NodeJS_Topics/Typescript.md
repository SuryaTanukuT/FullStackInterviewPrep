# Deep Dive into TypeScript and CRUD API Operations in Node.js

## Table of Contents
1. Introduction to TypeScript
2. Why and When to Use TypeScript
3. Key Features of TypeScript
4. TypeScript Types and Examples
5. Setting Up TypeScript in Node.js
6. Sample CRUD API with TypeScript and Node.js
7. Testing API Calls
8. Conclusion

---

## 1. Introduction to TypeScript

**TypeScript** is a typed superset of JavaScript that compiles to plain JavaScript. It adds static typing to JavaScript, improving developer productivity, code quality, and maintainability.

---

## 2. Why and When to Use TypeScript

### Why Use TypeScript:
- **Type Safety**: Helps catch errors during compile time.
- **Better Tooling**: IntelliSense, autocompletion, and inline documentation.
- **Improved Code Quality**: Encourages more readable and maintainable code.
- **Object-Oriented Features**: Interfaces, classes, and access modifiers.

### When to Use TypeScript:
- In large-scale applications.
- When working with a team.
- When maintaining a long-term codebase.
- In backend systems where type safety is critical.

---

## 3. Key Features of TypeScript
- Static Typing
- Interfaces
- Enums
- Generics
- Type Inference
- Advanced Types (Union, Intersection)

---

## 4. TypeScript Types and Examples

```ts
// Basic Types
let id: number = 1;
let username: string = "john";
let isActive: boolean = true;
let tags: string[] = ["ts", "node"];

// Tuple
let user: [number, string] = [1, "Alice"];

// Enum
enum Role { Admin, User, Guest }

// Any
let something: any = "Could be anything";

// Interface
interface User {
  id: number;
  name: string;
  email?: string; // optional
}

// Function with Types
function add(x: number, y: number): number {
  return x + y;
}

// Generics
function identity<T>(arg: T): T {
  return arg;
}
```

---

## 5. Setting Up TypeScript in Node.js

1. **Initialize project**:
```bash
npm init -y
```

2. **Install dependencies**:
```bash
npm install typescript ts-node-dev @types/node express @types/express
```

3. **Create `tsconfig.json`**:
```bash
tsc --init
```

4. **Update `package.json` scripts**:
```json
"scripts": {
  "start": "ts-node-dev --respawn --transpile-only src/index.ts"
}
```

---

## 6. Sample CRUD API with TypeScript and Node.js

### Directory Structure
```
src/
  controllers/
  models/
  routes/
  index.ts
```

### index.ts
```ts
import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### models/User.ts
```ts
export interface User {
  id: number;
  name: string;
  email: string;
}
```

### controllers/userController.ts
```ts
import { Request, Response } from 'express';
import { User } from '../models/User';

let users: User[] = [];

export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

export const getUser = (req: Request, res: Response) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ message: 'User not found' });
};

export const createUser = (req: Request, res: Response) => {
  const newUser: User = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
};

export const updateUser = (req: Request, res: Response) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const deleteUser = (req: Request, res: Response) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
};
```

### routes/userRoutes.ts
```ts
import express from 'express';
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/userController';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
```

---

## 7. Testing API Calls

### Using CURL or Postman:
- **GET All**: `GET http://localhost:3000/api/users`
- **GET by ID**: `GET http://localhost:3000/api/users/1`
- **POST**:
```json
POST http://localhost:3000/api/users
{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com"
}
```
- **PUT**:
```json
PUT http://localhost:3000/api/users/1
{
  "name": "Alice Updated"
}
```
- **DELETE**: `DELETE http://localhost:3000/api/users/1`

---

## 8. Conclusion

TypeScript brings robustness to JavaScript development, especially for backend services in Node.js. By incorporating types, interfaces, and proper structure, you can build scalable and maintainable APIs. Use this as a foundational guide and expand with database integration, validation, and authentication for a complete system.

