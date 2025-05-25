
# 📄 JSON vs YAML: Key Differences

---

## 🔧 Syntax Comparison

| Feature             | JSON                          | YAML                          |
|---------------------|-------------------------------|-------------------------------|
| Data Format         | Text-based, strict syntax     | Text-based, human-friendly    |
| Readability         | Less readable for humans      | Highly readable               |
| Verbosity           | More verbose                  | Less verbose                  |
| Comments            | ❌ Not supported               | ✅ Supported (`# comment`)     |
| Data Types          | Limited (string, number, etc) | Richer (includes dates, etc.) |
| Syntax              | Braces `{}`, Brackets `[]`    | Indentation-based             |
| Quoting             | Required for strings          | Optional (unless ambiguous)   |

---

## 🧩 Example: JSON

```json
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "skills": ["JavaScript", "Node.js"]
}
```

---

## 🧩 Example: YAML

```yaml
name: John
age: 30
isAdmin: false
skills:
  - JavaScript
  - Node.js
```

---

## ✅ Advantages of JSON

- Widely used in web APIs
- Native support in most programming languages
- Easier for machines to parse

---

## ✅ Advantages of YAML

- Easier for humans to read/write
- Supports complex configuration hierarchies
- Used heavily in DevOps tools (Kubernetes, Ansible)

---

## ❗ When to Use

- **Use JSON** for: Data interchange between systems, APIs.
- **Use YAML** for: Configuration files, CI/CD pipelines, infrastructure-as-code.

