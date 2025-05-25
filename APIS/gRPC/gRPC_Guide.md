# gRPC with Node.js, React, and NestJS – Complete Guide

## What is gRPC?
gRPC (Google Remote Procedure Call) is a **high-performance, open-source RPC framework** that enables communication between services using **HTTP/2** and **Protocol Buffers (Protobuf)** for efficient serialization.

---

## Key Concepts

### Remote Procedure Calls (RPC)
Clients call methods on remote servers as if they were local. gRPC abstracts this over HTTP/2 using strongly typed contracts.

### Protocol Buffers (Protobuf)
A language-agnostic interface definition language used to define gRPC services and messages. Much more compact and faster than JSON.

```proto
syntax = "proto3";
service PetService {
  rpc GetPet (PetRequest) returns (PetResponse);
}
message PetRequest { string id = 1; }
message PetResponse { string name = 1; string type = 2; }
```

---

## Types of gRPC Calls

- **Unary RPC**: Single request, single response.
- **Server Streaming**: One request, multiple responses streamed from server.
- **Client Streaming**: Multiple requests streamed to the server.
- **Bidirectional Streaming**: Both client and server stream messages in parallel.

---

## Using gRPC with React (via gRPC-Web)

### Setup
- Use `grpc-web` npm package
- Use Envoy or gRPC proxy for browser compatibility

```bash
npm install grpc-web
```

### gRPC-Web Client Example

```js
import { PetServiceClient } from './generated/pet_grpc_web_pb';
import { PetRequest } from './generated/pet_pb';

const client = new PetServiceClient('http://localhost:8080');
const request = new PetRequest();
request.setId('123');

client.getPet(request, {}, (err, response) => {
  if (!err) {
    console.log(response.getName());
  }
});
```

---

## Using gRPC in Node.js

### Server

```js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('pet.proto');
const petProto = grpc.loadPackageDefinition(packageDefinition).PetService;

const server = new grpc.Server();
server.addService(petProto.service, {
  GetPet: (call, callback) => {
    callback(null, { name: 'Buddy', type: 'Dog' });
  },
});
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => server.start());
```

---

## Using gRPC in NestJS

### Installation

```bash
npm install @nestjs/microservices @grpc/grpc-js @grpc/proto-loader
```

### Configure Microservice

```ts
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

@Module({
  imports: [],
})
export class AppModule {}

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'pet',
      protoPath: join(__dirname, './pet.proto'),
    },
  });
  await app.listen();
}
```

---

## CRUD Operations with gRPC

- **Create**: `rpc CreatePet (CreatePetRequest) returns (PetResponse)`
- **Read**: `rpc GetPet (PetRequest) returns (PetResponse)`
- **Update**: `rpc UpdatePet (UpdatePetRequest) returns (PetResponse)`
- **Delete**: `rpc DeletePet (PetRequest) returns (DeleteResponse)`

---

## Connecting Microservices with gRPC
- Define services in `.proto` files.
- Implement each microservice using the definitions.
- Use service discovery/load balancing tools (e.g., Envoy, Consul).

---

## Advanced Topics

### Load Balancing
- Use gRPC load balancing with round-robin strategy or via Envoy proxy.

### Authentication & Authorization
- Use SSL/TLS for transport security.
- JWT tokens for authorization via metadata.

### Error Handling
- Use gRPC status codes (`NOT_FOUND`, `UNAUTHENTICATED`, etc.).

### Deadlines and Timeouts
- Clients can set deadlines for RPCs to avoid hanging requests.

### Interceptors
- Middleware for logging, authentication, request validation.

### Reflection
- Allows clients to discover services at runtime.

### gRPC Gateway
- Convert gRPC services into REST endpoints using `grpc-gateway`.

### Performance Optimization
- Use HTTP/2, connection reuse, Protobuf.
- Compress large payloads and avoid redundant calls.

---

## Testing gRPC Services

- Use `@grpc/grpc-js` to write unit and integration tests.
- Tools like `grpcurl` for manual testing.

---

gRPC is ideal for microservices architectures, providing efficient communication, strong typing, and multi-language support.
