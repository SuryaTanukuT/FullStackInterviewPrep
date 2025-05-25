# REST API – Overview & Best Practices

## What is a REST API?
A **REST API** (Representational State Transfer) is a standardized way for systems to communicate over HTTP. It uses URLs to represent resources and HTTP methods to perform actions on those resources (like reading, writing, updating, or deleting data).

Example: `/pets/123` represents a pet with ID 123, and you use methods like GET, POST, PUT to interact with it.

---

## Key REST Principles

### 1. Stateless
- Each request from the client must contain all necessary information.
- The server does **not store** anything about the latest client request.

### 2. Cacheable
- Responses must define whether they are cacheable or not.
- Caching improves performance by avoiding duplicate processing.

### 3. Client-Server
- Clear separation: the **client handles UI/UX**, the **server handles data**.
- Enables independent development and scalability.

### 4. Layered System
- You can insert layers (e.g., load balancers, firewalls, auth systems) between client and server.
- Client doesn’t know or care about the existence of these layers.

### 5. Uniform Interface
- Consistent URL structure and method usage.
- Example: `GET /pets`, `POST /pets`, `PUT /pets/123`

### 6. (Optional) Code on Demand
- Servers can return executable code (e.g., JavaScript) that runs on the client.

---

## Common HTTP Methods

| Method  | Usage                     | Example              |
|---------|---------------------------|----------------------|
| GET     | Retrieve a resource       | `GET /pets/123`      |
| POST    | Create a new resource     | `POST /pets`         |
| PUT     | Replace a resource        | `PUT /pets/123`      |
| PATCH   | Update part of a resource | `PATCH /pets/123`    |
| DELETE  | Remove a resource         | `DELETE /pets/123`   |

---

## HTTP Status Codes (Common)

| Code | Meaning                     | Use Case                                  |
|------|-----------------------------|-------------------------------------------|
| 200  | OK                          | Successful GET, PUT, PATCH, DELETE        |
| 201  | Created                     | Resource successfully created (POST)      |
| 204  | No Content                  | Successful DELETE or empty response       |
| 400  | Bad Request                 | Invalid client request                    |
| 401  | Unauthorized                | Missing/invalid authentication token      |
| 403  | Forbidden                   | Authenticated but not allowed             |
| 404  | Not Found                   | Resource not found                        |
| 409  | Conflict                    | Resource conflict (e.g., duplicate entry) |
| 500  | Internal Server Error       | Generic server error                      |
| 503  | Service Unavailable         | Server down or overloaded                 |

---

## REST API Design Best Practices

### 1. Pagination
- Use query params like `?page=1&limit=10` to paginate large datasets.

### 2. Filtering & Sorting
- Filtering: `GET /pets?type=dog`
- Sorting: `GET /pets?sort=age_desc`

### 3. Versioning
- Maintain backward compatibility using versions in URLs: `/api/v1/pets`

### 4. Security
- Use **Authentication** (OAuth, JWT, API Keys)
- Implement **CORS** and **TLS (HTTPS)** for secure data exchange.

### 5. Validation & Error Handling
- Validate input and return meaningful status codes (e.g., 400, 404, 500).

### 6. Monitoring & Logging
- Track usage, failures, and performance for debugging and improvement.

### 7. Caching
- Use ETags, Cache-Control headers to improve speed and reduce load.

---

A well-designed REST API is reliable, predictable, scalable, and easy for developers to consume.
