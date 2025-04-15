# Crypto Modules
# Deep Dive into Crypto Modules in JavaScript (Node.js)

## Table of Contents
- [What is the Crypto Module in Node.js?](#what-is-the-crypto-module-in-nodejs)
- [Why Use Crypto?](#why-use-crypto)
- [When to Use Crypto?](#when-to-use-crypto)
- [Types of Cryptography](#types-of-cryptography)
- [Core Methods and Use Cases](#core-methods-and-use-cases)
  - [Hashing](#hashing)
  - [HMAC](#hmac)
  - [Symmetric Encryption](#symmetric-encryption)
  - [Asymmetric Encryption](#asymmetric-encryption)
  - [Key Generation](#key-generation)
  - [Digital Signatures](#digital-signatures)
- [Crypto Flows and Patterns](#crypto-flows-and-patterns)
  - [Hash Password Flow](#hash-password-flow)
  - [Encrypt/Decrypt Flow](#encryptdecrypt-flow)
  - [Sign/Verify Flow](#signverify-flow)
- [Examples](#examples)
- [Alternatives to Node.js Crypto Module](#alternatives-to-nodejs-crypto-module)
- [Best Practices](#best-practices)
- [Conclusion](#conclusion)

---

## What is the Crypto Module in Node.js?

The `crypto` module in Node.js provides cryptographic functionalities, including hashing, encryption, decryption, signing, and key generation. It uses OpenSSL under the hood.

---

## Why Use Crypto?
- Secure sensitive data (passwords, tokens)
- Implement secure communication
- Data integrity verification
- Authentication and digital signatures

---

## When to Use Crypto?
- Password hashing and verification
- Encrypting/decrypting data
- Signing and verifying messages
- Generating secure random tokens
- Secure storage and transmission

---

## Types of Cryptography

1. **Hashing** – One-way transformation (e.g., SHA256)
2. **Symmetric Encryption** – Same key for encryption/decryption (e.g., AES)
3. **Asymmetric Encryption** – Public/private key pair (e.g., RSA)
4. **HMAC** – Hash-based Message Authentication Code
5. **Digital Signatures** – Prove data authenticity

---

## Core Methods and Use Cases

### Hashing
```js
const crypto = require('crypto');

const hash = crypto.createHash('sha256')
  .update('myPassword')
  .digest('hex');
```

### HMAC
```js
const hmac = crypto.createHmac('sha256', 'secret-key')
  .update('message')
  .digest('hex');
```

### Symmetric Encryption (AES)
```js
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return { encrypted, iv: iv.toString('hex') };
}
```

### Asymmetric Encryption (RSA)
```js
const { generateKeyPairSync, publicEncrypt, privateDecrypt } = require('crypto');

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

const encryptedData = publicEncrypt(publicKey, Buffer.from('secret'));
const decryptedData = privateDecrypt(privateKey, encryptedData);
```

### Key Generation
```js
crypto.randomBytes(32, (err, buffer) => {
  console.log(buffer.toString('hex'));
});
```

### Digital Signatures
```js
const sign = crypto.createSign('SHA256');
sign.update('message');
const signature = sign.sign(privateKey, 'hex');

const verify = crypto.createVerify('SHA256');
verify.update('message');
console.log(verify.verify(publicKey, signature, 'hex'));
```

---

## Crypto Flows and Patterns

### Hash Password Flow
1. Take password
2. Generate salt
3. Hash password with salt (e.g., `crypto.pbkdf2` or `bcrypt`)

### Encrypt/Decrypt Flow
1. Generate key and IV
2. Use cipher to encrypt
3. Use decipher to decrypt

### Sign/Verify Flow
1. Sign data with private key
2. Send data and signature
3. Verify using public key

---

## Examples

### Password Hashing with `pbkdf2`
```js
crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  console.log(derivedKey.toString('hex'));
});
```

### Generate Secure Token
```js
crypto.randomBytes(48, (err, buffer) => {
  const token = buffer.toString('hex');
  console.log(token);
});
```

---

## Alternatives to Node.js Crypto Module
- **bcrypt / bcryptjs** – Password hashing
- **argon2** – Memory-hard password hashing
- **jsonwebtoken** – Token signing (uses crypto internally)
- **libsodium / sodium-native** – Modern cryptography library
- **OpenSSL CLI** – External encryption utility

---

## Best Practices
- Never store passwords in plaintext
- Use strong algorithms: AES-256, SHA-256, RSA 2048+
- Always use `crypto.randomBytes` for secure tokens
- Securely store keys (e.g., in env vars or key vaults)
- Regularly rotate encryption keys
- Validate and sanitize input

---

## Conclusion

Node.js's `crypto` module provides powerful tools for implementing encryption, hashing, and secure communication. With proper techniques and best practices, it helps ensure data confidentiality, integrity, and authenticity in any Node.js application.

---

> **Tip**: For production-grade applications, consider using audited libraries like `argon2`, `bcrypt`, and `jsonwebtoken` for specialized needs.

