# Docker for Full-Stack Developers – From Zero to Hero

## 🐳 What is Docker?
Docker is a platform that packages applications and their dependencies into **containers**, allowing for consistent environments across development, testing, and production.

---

## 🔹 Why Use Docker?
- Eliminate “works on my machine” issues
- Simplify environment setup
- Enhance DevOps, CI/CD workflows
- Portability across machines and platforms

---

## 🚀 Essential Docker Knowledge (Must-Know)

### Writing a Dockerfile

#### Node.js Backend Example:
```Dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

#### React/Angular Frontend Example:
```Dockerfile
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
```

### Core Commands
```bash
docker build -t my-app .
docker run -p 3000:3000 my-app
docker ps
docker logs <container_id>
docker exec -it <container_id> sh
```

### Environment Variables & Ports
```Dockerfile
ENV NODE_ENV=production
EXPOSE 5000
```

### .dockerignore
Avoid copying unnecessary files to image:
```
node_modules
dist
*.log
.git
```

---

## ⚙️ Intermediate Docker Skills

### Multi-Stage Builds
Optimize frontend builds:
```Dockerfile
FROM node:18 as builder
# install deps & build code
FROM nginx:alpine
# copy built assets from builder
```

### Docker Compose (Multiple Containers)
`docker-compose.yml`:
```yaml
version: '3'
services:
  backend:
    build: ./server
    ports: [ "3000:3000" ]
  frontend:
    build: ./client
    ports: [ "80:80" ]
  db:
    image: mongo
    ports: [ "27017:27017" ]
```

### Volumes and Networking
```bash
docker volume create data_volume
docker network create my_network
```

---

## 🚫 Advanced Docker (DevOps/Infra Roles)

- Docker Swarm (native clustering)
- Custom bridge networks
- Private registries
- Image signing/scanning
- Minimal base images (e.g., Alpine)

---

## 🧠 Docker Commands (Zero to Hero)

```bash
# Image & Container
docker images
docker rmi <image>
docker container ls -a
docker rm <container>

# Volumes
docker volume ls
docker volume inspect <volume>
docker volume rm <volume>

# Merge / Layering Strategy
docker commit <container> new-image-name
docker tag <image> repo/image:tag
docker push repo/image:tag
```

---

## 📈 Optimization Techniques

### Reduce Image Size
- Use `.dockerignore`
- Multi-stage builds
- Use **Distroless** or **Alpine**
- Run `docker-slim` to shrink image
- Remove unnecessary layers

### Security and Performance
- Use **static binaries** (via `pkg` or `esbuild`)
- Scan images for CVEs
- Drop root privileges (use non-root user)

---

## ⚠️ CI/CD Bottlenecks & Cost Reduction

**Impact:**
- ⏱ Slower pipelines
- 💸 Higher infra costs
- 🔓 Larger attack surface

**Mitigation:**
- Minimize image layers
- Cache dependencies effectively
- Use smaller base images
- Keep Dockerfiles clean
- Limit image rebuilds

---

## 🧩 Docker Swarm vs Kubernetes

| Feature        | Docker Swarm        | Kubernetes             |
|----------------|---------------------|------------------------|
| Simplicity     | Easier to setup     | Complex but powerful   |
| Scaling        | Built-in            | Advanced & fine-grained|
| Community      | Smaller             | Large ecosystem        |
| Use Case       | Small clusters      | Large-scale systems    |

**When to use:**
- Use **Swarm** for quick prototypes or internal apps
- Use **Kubernetes** for production-grade orchestration

---

## ✅ Summary: Why Docker?

- Consistent environments
- Easier onboarding
- Isolated services
- Portable and reproducible builds
- Pairs well with Kubernetes & CI/CD

---

With tools like **multi-stage builds**, `.dockerignore`, **distroless images**, and **docker-slim**, you can drastically improve app performance, reduce costs, and boost security.

