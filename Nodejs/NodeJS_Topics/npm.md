# npm
# Deep Dive into NPM (Node Package Manager) in JavaScript (Node.js)

## Table of Contents
- [Introduction](#introduction)
- [Why NPM is Used](#why-npm-is-used)
- [What is NPM?](#what-is-npm)
- [Types of Packages](#types-of-packages)
- [Common NPM Commands](#common-npm-commands)
- [When and Where NPM is Used](#when-and-where-npm-is-used)
- [Use Cases and Scenarios](#use-cases-and-scenarios)
- [NPM Alternatives](#npm-alternatives)
- [NPM Workflows and Flows](#npm-workflows-and-flows)
- [Examples](#examples)
- [Best Practices](#best-practices)
- [Conclusion](#conclusion)

---

## Introduction
NPM (Node Package Manager) is the default package manager for Node.js. It is used to manage dependencies in JavaScript projects, allowing developers to share, install, and manage reusable code.

---

## Why NPM is Used
- **Dependency Management**: Automatically install and manage project dependencies.
- **Reusability**: Use third-party packages to avoid reinventing the wheel.
- **Version Control**: Manage specific versions of packages.
- **Script Automation**: Run predefined tasks using `npm scripts`.

---

## What is NPM?
NPM is a command-line tool and an online registry for hosting Node.js packages. It helps developers:
- Install packages locally and globally
- Publish custom packages
- Run automation scripts
- Maintain project dependencies in `package.json`

---

## Types of Packages
1. **Local Packages**: Installed in a specific project directory (`node_modules`).
2. **Global Packages**: Installed system-wide and used via CLI.
3. **Dev Dependencies**: Needed only for development (e.g., testing libraries).
4. **Optional Dependencies**: Not essential, installed if available.
5. **Peer Dependencies**: Used when a package expects a dependency to be provided by the consuming project.

---

## Common NPM Commands
| Command | Description |
|--------|-------------|
| `npm init` | Initialize a new project |
| `npm install` | Install all dependencies listed in package.json |
| `npm install <pkg>` | Install a specific package |
| `npm install -g <pkg>` | Install a global package |
| `npm update` | Update all dependencies |
| `npm uninstall <pkg>` | Remove a package |
| `npm run <script>` | Run a custom script defined in package.json |
| `npm publish` | Publish a package to npm registry |

---

## When and Where NPM is Used
- Setting up new JavaScript/Node.js projects
- Managing dependencies for server-side applications
- Installing build tools (Webpack, Babel)
- Automating tasks like testing, linting, formatting
- Managing monorepos using `npm workspaces`

---

## Use Cases and Scenarios
- **Web Development**: Installing front-end and back-end libraries
- **Tooling**: ESLint, Prettier, TypeScript via NPM
- **Continuous Integration**: Using NPM scripts in CI/CD pipelines
- **Custom Packages**: Sharing common logic across teams via private NPM

---

## NPM Alternatives
- **Yarn**: Alternative with faster performance and deterministic installs
- **pnpm**: Efficient with disk space; uses symlinks
- **Volta**: Toolchain manager that works with npm
- **Bower**: Deprecated but was used for front-end dependency management

---

## NPM Workflows and Flows
### Project Setup Flow
1. `npm init -y`
2. Install dependencies: `npm install express`
3. Add dev dependencies: `npm install --save-dev nodemon`
4. Run app: `npm start`

### Custom Script Flow
```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "jest"
}
```
Run with: `npm run dev`

### Publishing Flow
1. Create account: `npm adduser`
2. Login: `npm login`
3. Publish: `npm publish`

---

## Examples
### 1. Installing a Package
```bash
npm install axios
```

### 2. Creating a Custom Script
```json
"scripts": {
  "lint": "eslint .",
  "build": "webpack"
}
```
Run: `npm run lint`

### 3. Publishing a Package
```bash
npm init
npm login
npm publish
```

---

## Best Practices
- Use `package-lock.json` for reproducible builds
- Pin exact versions to avoid breaking changes
- Use `.npmrc` for configuration
- Avoid global installs when unnecessary
- Use workspaces for monorepos
- Regularly audit with `npm audit`

---

## Conclusion
NPM is a cornerstone of modern JavaScript development, enabling efficient package and project management. Mastering NPM means smoother workflows, better collaboration, and faster development.

---

