# Jenkins & CircleCI for Developers – Complete CI/CD Workflow Guide

## 🚀 Why Use Jenkins and CircleCI?

Both are **CI/CD tools** that automate:
- Testing your code
- Building your application
- Deploying to environments like AWS

| Tool      | Purpose                                  |
|-----------|-------------------------------------------|
| Jenkins   | Highly customizable CI/CD with plugins   |
| CircleCI  | Cloud-native CI/CD with simple config    |

---

## 🧩 Typical Workflow (GitHub/GitLab → CI → AWS)

1. Developer pushes code to GitHub/GitLab
2. Webhook triggers Jenkins/CircleCI
3. CI runs tests, code lint, coverage, builds Docker image
4. CD process deploys image to:
   - AWS EC2/Elastic Beanstalk
   - S3 + CloudFront (static sites)
   - ECS/EKS (containers)

---

## 🔄 Jenkins Setup & Workflow

### Prerequisites
- Install Jenkins
- Install GitHub plugin, pipeline plugin
- Install Node.js and Docker on server
- Generate GitHub personal access token

### Webhook from GitHub to Jenkins
1. In GitHub: Settings → Webhooks → Add Jenkins URL + `/github-webhook/`
2. In Jenkins: Configure job → Source Code Management → Git
3. Trigger: “GitHub hook trigger for GITScm polling”

### Jenkinsfile Example for Node.js

```groovy
pipeline {
  agent any

  environment {
    NODE_ENV = 'production'
  }

  stages {
    stage('Checkout') {
      steps { git 'https://github.com/your/repo.git' }
    }
    stage('Install') {
      steps { sh 'npm install' }
    }
    stage('Lint') {
      steps { sh 'npm run lint' }
    }
    stage('Test & Coverage') {
      steps { sh 'npm run test -- --coverage' }
    }
    stage('Build') {
      steps { sh 'npm run build' }
    }
    stage('Deploy to AWS') {
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-creds']]) {
          sh './deploy.sh'
        }
      }
    }
  }
  post {
    failure {
      mail to: 'devteam@example.com', subject: 'Build Failed'
    }
  }
}
```

---

## 🌀 CircleCI Workflow

### `.circleci/config.yml` Example

```yaml
version: 2.1
orbs:
  node: circleci/node@5.0.0

jobs:
  build-and-test:
    executor:
      name: node/default
    steps:
      - checkout
      - node/install-packages
      - run: npm run lint
      - run: npm run test -- --coverage
      - run: npm run build

workflows:
  version: 2
  test-and-deploy:
    jobs:
      - build-and-test
```

---

## 📂 Why YAML Over JSON?

| YAML                 | JSON                 |
|----------------------|----------------------|
| Human-friendly       | Verbose              |
| Supports comments    | No comments allowed  |
| Clean syntax         | Requires strict quotes and brackets |

**YAML is easier for config files and version control.**

---

## 🧪 Code Coverage in CircleCI

Use `jest --coverage` or `nyc` in `package.json`:
```json
"scripts": {
  "test": "jest --coverage",
  "lint": "eslint ."
}
```

Store coverage reports:
```yaml
- store_artifacts:
    path: coverage
    destination: coverage-report
```

---

## 🔐 Enforce Code Coverage and Lint Before Merge

### GitHub → Require Checks

1. Go to GitHub repo → Settings → Branch Protection Rules
2. Require status checks:
   - Jenkins build passes
   - Lint passes
   - Test coverage threshold met

### Jenkins – Fail Build If Lint or Coverage Fails

```bash
npm run lint || exit 1
npm run test -- --coverage || exit 1
```

Use `jest-junit` or `eslint-formatter-checkstyle` for reports.

---

## 🧠 Spanner in Jenkins?

“Spanner” could mean:
- **Build status widget** (showing success/fail)
- **Plugin** for visual dashboard
- **Error on deployment** (look at logs, artifacts)

---

## 📦 Deploy Sample Node.js App to AWS (EC2 or EBS)

1. Write `Dockerfile`
2. Push to GitHub
3. Configure Jenkins job to:
   - Build Docker image
   - Push to Docker Hub or ECR
   - SSH into EC2 and pull/deploy
   - OR use Elastic Beanstalk CLI (`eb deploy`)

---

## 🛠 Sample Deploy Script (Jenkins → EC2)

```bash
#!/bin/bash
docker build -t my-app .
docker tag my-app:latest your-dockerhub-user/my-app:latest
docker push your-dockerhub-user/my-app:latest

ssh ec2-user@aws-instance << EOF
  docker pull your-dockerhub-user/my-app:latest
  docker stop app || true && docker rm app || true
  docker run -d --name app -p 80:3000 your-dockerhub-user/my-app:latest
EOF
```

---

This guide gives full control from Git push to AWS deployment using Jenkins or CircleCI, ensuring tests, code quality, and secure delivery every step of the way.
