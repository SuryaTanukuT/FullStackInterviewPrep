From 1.22GB to 57MB — Why I Obsess Over Docker Image Sizes Now!
When I first containerized a simple Node.js app, the image ballooned to 1.22GB.
 No ML models. No binaries. Just a basic Express server.
The impact?
 ⏱ Slower CI/CD pipelines
 💸 Higher infra costs
 🔓 Increased attack surface
So I spent a week optimizing the Dockerfile. The result? A 95% size reduction.
Key improvements:
✅ Switched from node:latest to node:alpine
 ✅ Used multi-stage builds
 ✅ Added .dockerignore (seriously underrated)
 ✅ Tried Google Distroless
 ✅ Compiled app into a static binary using pkg
 ✅ Ran docker-slim for an instant 10x drop
Final image: 57MB
 No feature loss. Faster builds. Fewer CVEs.
Why this matters:
Faster deployments
Better cold start times
Improved scalability
Stronger security
Sometimes, the line between “it works” and “it scales” is hidden in your Dockerfile.

