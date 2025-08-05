## 🧩 Step 3: Encapsulation

### ✅ What is Encapsulation?
Encapsulation means:

> **"Bundling data (properties) and behavior (methods) together, and controlling access to the internal details."**

---

### 💡 Real-life Analogy

Think of a TV remote:

- You press a button to change the channel.
- But you can’t see or change the internal wiring.

That’s encapsulation: **hide how it works, but expose what you can do**.

---

### 🔤 JavaScript Example (ES6+)

```javascript
class BankAccount {
  #balance = 0; // 🔒 private field

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount("Sudhanshu");
acc.deposit(500);
console.log(acc.getBalance()); // ✅ 500
console.log(acc.#balance); // ❌ Error! Private field
```

---

### 🔍 What’s happening here?

- `#balance` is a **private field** (ES2022+).
- You can only interact through methods like `deposit()` or `getBalance()`.
- This prevents misuse like: `acc.#balance = 999999`.

---

### 🔧 Real Use Case in Development

- Prevent users/devs from messing with sensitive internal data (e.g., balance, password, tokens).
- Enforce rules (e.g., no negative balance).


## 📚 Your Turn Now

### 1. Open-ended Question

👉 **Why do you think encapsulation is important in software development?**

---

### 2. Mini Challenge

**Build a `User` class that:**
- Has a private password field (use `#password`)
- Has a method `checkPassword(input)` that returns `true` if matched
- Has a method `changePassword(oldPass, newPass)` to update password

---

### ✅ Review of Your Encapsulation Answer

> “Encapsulation allows developers to hide internal implementation details and expose only necessary interfaces. This protects internal data from misuse and simplifies how others interact with the object.”

---

### 🔄 Corrected Full Example (with feedback):

```javascript
class User {
  #password;

  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  checkPassword(input) {
    return input === this.#password;
  }

  changePassword(oldPass, newPass) {
    if (this.checkPassword(oldPass)) {
      this.#password = newPass;
      console.log("Password changed successfully.");
    } else {
      console.log("Old password is incorrect.");
    }
  }
}

const u1 = new User("Sudhanshu", "12345");
console.log(u1.checkPassword("12345")); // true
u1.changePassword("12345", "67890");
console.log(u1.checkPassword("67890")); // true
```

---

### ✅ Encapsulation: Final Summary

- Use `#` to mark fields as private.
- Use methods to control access.
- This protects sensitive data and keeps logic clean.

--- 

## Author
SUDHNASHU GHOSH