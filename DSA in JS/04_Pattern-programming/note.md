# Lecture - 04_Pattern Programming

# 📌 Topic: `process.stdout.write()` vs `console.log()`
## ✅ Code Example:
```js
process.stdout.write('Hello ');
process.stdout.write('world');
```

## 📄 Output:
```bash
Hello world
```
## 🔍 How It Works:
- `process.stdout.write()` writes directly to the terminal **without adding a new line** at the end.

Unlike `console.log()`, which **automatically adds a newline (`\n`)**, `process.stdout.write()` gives you **more control over output formatting**.

## 🧠 When to Use process.stdout.write():
- When you want to **print output on the same line** (e.g., progress indicators, loading animations).
- Useful in **CLI tools** or pattern printing where **precise control of output format** is required.
- Better for **real-time or streamed output**.

## 🆚 Comparison:
| Feature            | `console.log()`       | `process.stdout.write()`    |
| ------------------ | --------------------- | --------------------------- |
| Adds newline?      | Yes (`\n` by default) | No                          |
| Formatting control | Limited               | High                        |
| Preferred for...   | Simple debug or logs  | Custom output, real-time UI |

### 🧪 Example Use Case:
```js
for (let i = 0; i < 5; i++) {
  process.stdout.write('*');
}
```
### ⏳ Output:
```markdown
*****
```
✅ This is especially useful for pattern-based programs or when building terminal-based UI.

---

# 📌 1. `process.stdout.write()` vs `console.log()` (Output Control)
```js
process.stdout.write('Hello ');
process.stdout.write('world');
```

## 📤 Output:
```nginx
Hello world
```

## 🧠 Why it's used:
- `process.stdout.write()` is used to print on the **same line without newline**.
- Gives more control compared to `console.log()` (which adds a `\n` automatically).

## 📌 **Use Case:** Pattern printing, terminal loading animations, CLI tools, etc.

# 2. 📦 `prompt-sync` — Taking Input in Node.js
## ✅ Installation:
```bash
npm i prompt-sync
```

## Usage:
```js
const prompt = require('prompt-sync')();
let name = prompt("Enter your name: ");
console.log("Hello, " + name);
```

## 🧠 How it works:
- `prompt-sync` is a **third-party package** for **synchronously** taking input from the terminal in Node.js.

Node.js doesn’t have built-in prompt like browsers, so we install `prompt-sync`.

## 🔍 Why it's needed:
- Without this, you have to use complex logic like `readline`, which is async.
- `prompt-sync` makes input handling simple and beginner-friendly.

# 3. 🅰️ ASCII to Character and Vice-Versa in JS
## ✅ Example 1: Increment Character
```js
let char = 'A';
char = String.fromCharCode(char.charCodeAt(0) + 1);
console.log(char); // Output: B
```

## 🧠 Explanation:
- `charCodeAt(0)` gives ASCII value → `'A'` → `65`
- Add 1 → `66`
- `fromCharCode(66)` → `'B'`

## ✅ Example 2: From ASCII to Char
```js
let ascii = 65;
console.log(String.fromCharCode(ascii)); // Output: A
```

## 🔍 Comparison of Both:
| Code Example                                | Purpose                          | Output      | Use Case                     |
| ------------------------------------------- | -------------------------------- | ----------- | ---------------------------- |
| `char.charCodeAt(0)` + 1 → `fromCharCode()` | Convert char → ASCII → next char | `'A' → 'B'` | When working with characters |
| `fromCharCode(65)`                          | ASCII to character               | `'A'`       | When you already know ASCII  |

## ✅ Which one is correct?
- Both are correct, used for different purposes.
  - First is dynamic (convert and shift).
  - Second is static (direct ASCII value).

## 📌 Conclusion:
- Use `prompt-sync` for input.
- Use `process.stdout.write()` for controlled output.
- Use ASCII manipulation for pattern printing or character math.