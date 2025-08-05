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