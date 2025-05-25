# Comprehensive Guide to Testing in JavaScript (React, Angular, Node.js, NestJS)

---

## 🧪 Why Testing?

Testing ensures your code works as expected, prevents regressions, improves confidence, and enables safe refactoring. It’s a core part of modern software engineering.

---

## 🧰 Types of Testing

| Type          | Purpose                              | Scope                |
|---------------|--------------------------------------|----------------------|
| Unit          | Test a single function/component     | Narrow (1 module)    |
| Integration   | Test interactions between modules    | Medium               |
| Functional    | Validate feature behavior             | User-facing features |
| End-to-End    | Simulate full user experience         | Full app             |

---

## ✅ TDD vs BDD

| Aspect | TDD (Test Driven Development) | BDD (Behavior Driven Development) |
|--------|-------------------------------|-----------------------------------|
| Focus  | Implementation-first          | Behavior-first                    |
| Tool   | Jest, Mocha                   | Cucumber, Jasmine                 |
| Style  | `describe`, `it`, `test`      | `Given`, `When`, `Then`           |

---

## 🧪 Testing in React

### Tools:
- **Jest**: Test runner
- **React Testing Library**: For rendering and user interaction

### Unit Test (Component)

```jsx
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders greeting', () => {
  render(<MyComponent />);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});
```

### Snapshot Test

```js
import renderer from 'react-test-renderer';

test('snapshot test', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

---

## 🧪 Testing in Angular

### Tools:
- **Jasmine**: Test framework
- **Karma**: Test runner
- **TestBed**: Angular's testing module

```ts
describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent] }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
```

---

## 🧪 Testing in Node.js / NestJS

### Tools:
- **Jest**: Default in NestJS
- **Supertest**: For HTTP assertions

#### NestJS Unit Test (Service)

```ts
describe('UserService', () => {
  let service: UserService;
  beforeEach(() => {
    service = new UserService();
  });

  it('should return user by ID', () => {
    expect(service.getUser(1)).toEqual({ id: 1, name: 'Test' });
  });
});
```

---

## 🔁 CRUD Testing in React + Node

### Frontend (React)
- Use Testing Library to simulate form input and submit
- Mock `fetch`/axios for API

```js
jest.mock('axios');
axios.post.mockResolvedValue({ data: { success: true } });
```

### Backend (Node/NestJS)
- Use Supertest to test API endpoints

```ts
it('POST /users', () => {
  return request(app.getHttpServer())
    .post('/users')
    .send({ name: 'John' })
    .expect(201);
});
```

---

## 🛠 Key Jest Features

- **Matchers**: `expect().toBe()`, `toEqual()`, `toHaveLength()`
- **Mocking**:
  ```js
  jest.mock('./api');
  jest.fn().mockReturnValue('mocked');
  ```
- **Spying**:
  ```js
  const spy = jest.spyOn(obj, 'method');
  ```
- **Async Testing**:
  ```js
  test('async', async () => {
    const data = await fetchData();
    expect(data).toBeDefined();
  });
  ```
- **Setup Hooks**:
  ```js
  beforeEach(() => {}); afterAll(() => {});
  ```
- **Watch Mode**:
  ```bash
  jest --watch
  ```
- **Debugging**: Use `--runInBand` and `debugger` statement.

---

## 📈 Code Coverage in Jest

```bash
jest --coverage
```

Output includes % of branches, functions, lines covered. Enforce threshold in `package.json`:

```json
"jest": {
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90
    }
  }
}
```

---

## 🔐 Prevent Merge Without Passing Tests

- Use GitHub branch protection:
  - Require all checks pass (Jest, Lint, Coverage)
- CI tools (Jenkins, CircleCI) run test scripts and mark builds as pass/fail

---

## 🔁 Mocking & Spying in Detail

| Feature     | Use Case                    |
|-------------|-----------------------------|
| Mocking     | Fake APIs, DBs, Services    |
| Spying      | Track calls, arguments      |
| Snapshot    | UI consistency              |
| Async mocks | API delays, async logic     |

---

## 🛠 Test Execution Optimization

- Run in **parallel** (Jest does this by default)
- Use `--onlyChanged` or `--bail`
- Split test suites in CI

---

Testing ensures your app is **reliable**, **scalable**, and **maintainable**. Whether you're using React, Angular, Node, or NestJS—embracing the right testing strategy sets the foundation for high-quality software.

