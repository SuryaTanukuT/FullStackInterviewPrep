# GraphQL – Overview, Setup & CRUD Operations

## What is GraphQL?
GraphQL is a **query language for APIs** and a runtime for executing those queries. It enables clients to **request exactly the data they need**—nothing more, nothing less.

---

## Why Use GraphQL?
- Avoid over-fetching and under-fetching.
- Aggregate data from multiple sources in one call.
- Strongly typed schema with validation.
- Better tooling (like GraphQL Playground).

---

## Core Concepts

### Schema
Defines the structure of the API: types, queries, mutations, and subscriptions.

### Types
- `type`: An object with fields (e.g., `User`, `Post`)
- `input`: Used for mutations
- `enum`, `interface`, `union`: For advanced type modeling

---

## CRUD with GraphQL

### 1. **Create (Mutation)**

```graphql
mutation {
  createPet(input: { name: "Buddy", type: "Dog" }) {
    id
    name
    type
  }
}
```

### 2. **Read (Query)**

```graphql
query {
  getPet(id: "123") {
    id
    name
    type
  }
}
```

### 3. **Update (Mutation)**

```graphql
mutation {
  updatePet(id: "123", input: { name: "Buddy Updated" }) {
    id
    name
  }
}
```

### 4. **Delete (Mutation)**

```graphql
mutation {
  deletePet(id: "123") {
    success
    message
  }
}
```

---

## Additional GraphQL Features

### Fragments (Reuse query parts)

```graphql
fragment petFields on Pet {
  id
  name
  type
}

query {
  getPet(id: "123") {
    ...petFields
  }
}
```

### Directives

```graphql
query getPet($withType: Boolean!) {
  pet(id: "123") {
    name
    type @include(if: $withType)
  }
}
```

---

## Real-Time: Subscriptions

```graphql
subscription {
  petAdded {
    id
    name
  }
}
```

---

## Setting Up GraphQL in Node.js

```bash
npm install graphql apollo-server
```

Example server setup with Apollo Server:

```js
const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`type Query { hello: String }`;
const resolvers = { Query: { hello: () => 'Hello World' } };
new ApolloServer({ typeDefs, resolvers }).listen(4000);
```

---

## Using GraphQL in React with Apollo Client

```bash
npm install @apollo/client graphql
```

Basic usage:

```js
import { useQuery, gql } from '@apollo/client';
const GET_PETS = gql`query { pets { id name } }`;
const { data, loading } = useQuery(GET_PETS);
```

---

## Performance Optimization

- **Batching & Caching**: Use `@apollo/client`'s in-memory cache and tools like `apollo-link-batch-http`.
- **DataLoader**: Avoid N+1 query issues by batching DB calls.

---

## Security

- Use JWT or OAuth for Authentication
- Implement Authorization inside resolvers
- Protect against query depth and complexity attacks

---

## GraphQL Federation

- Combine multiple GraphQL services into one gateway
- Enables a microservices-friendly architecture

---

## Error Handling

- Standardize errors with custom error classes
- Use `formatError` in Apollo Server to structure responses

---

## Testing GraphQL APIs

- Use `Jest` with `apollo-server-testing` or `msw` for frontend mocking

---

## Code Generation

- Use GraphQL Codegen to generate TypeScript types, hooks, resolvers, etc.
- Reduces boilerplate and improves type safety

---

## Pagination

- Use `first`, `last`, `after`, and `before` arguments in queries
- Implement cursor-based or offset-based pagination

---

GraphQL empowers front-end and back-end teams to build faster, scalable, and more efficient applications.
