# Lecture - 03_Loop
# 🔢 +prompt() – Converting Input to Number
## 📌 What is +prompt()?
- The `prompt()` function returns **user input as a string** by default.
- Adding a `+` before it forces **type conversion** from string to number.

## 🧪 Example:
```js
let n = +prompt("Enter 'n' number:");
console.log(n, typeof n);
```
**Input**: `25`
**Output**: `25 'number'`

## 🧠 Explanation:
| Code             | Type of Input     | Result Type      |
| ---------------- | ----------------- | ---------------- |
| `prompt("...")`  | String (default)  | `"25"`           |
| `+prompt("...")` | Number conversion | `25` (as number) |

- `+` is the **unary plus operator**.
- It tries to convert the right-hand side (RHS) value to a **number**.
- It's equivalent to **Number(prompt(...))**.

## ✅ Where and When to Use:
| Situation                                       | Use `+prompt()`? | Why?                                |
| ----------------------------------------------- | ---------------- | ----------------------------------- |
| Taking numeric input from user (e.g. age, n)    | ✅ Yes            | Ensures you're working with numbers |
| Comparing numbers or doing math (e.g. `+`, `-`) | ✅ Yes            | Prevents string-related bugs        |
| Taking input as text (e.g. name, email)         | ❌ No             | You want to keep the string         |

## ⚠️ Notes:
- If input is **not a valid number**, it becomes `NaN` (Not a Number).

Always validate input with `isNaN()` if needed.

## 🧪 Example:
```js
let num = +prompt("Enter a number:");
if (isNaN(num)) {
    console.log("Invalid number entered!");
} else {
    console.log("You entered:", num);
}
```

---


# 🔍 Prime Number Checker – JS Practice
## 🧪 Code:
```js
let n = +prompt("Enter number to find");

if (isNaN(n)) {
    console.log("Invalid input!");
} else {
    if (n < 0) {
        console.log("Enter positive numbers only.");
    } else {
        console.log(`${n} is ${isPrime(n) ? "prime" : "not prime"} number.`);
    }
}

function isPrime(n) {
    if (n <= 1) return false;           // 0 and 1 are not prime ✅
    if (n === 2) return true;           // 2 is the only even prime ✅
    if (n % 2 === 0) return false;      // Any other even number is not prime ❌

    // Check only odd numbers up to √n
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;  // Divisible? Not prime ❌
    }

    return true;                        // No divisors found → Prime ✅
}
```

## 💡 Concept Breakdown
| Line           | Purpose                                          |
| -------------- | ------------------------------------------------ |
| `+prompt(...)` | Converts user input (string) to number using `+` |
| `isNaN(n)`     | Checks if user entered a valid number            |
| `n < 0`        | Negative numbers are rejected                    |
| `isPrime(n)`   | Function to check if `n` is a prime number       |
| `Math.sqrt(n)` | Optimizes loop – only check up to √n             |
| `i += 2`       | Skip even numbers while checking divisors        |

## 🧠 How the `isPrime(n)` function works:
1. 0 and 1 are not prime → Return `false`
2. 2 is prime → Return `true`
3. Even numbers (>2) → Not prime → Return `false`
4. For odd numbers, check divisibility from `3` to `√n`:
    - If divisible → Not prime
    - If not divisible → Prime

## 🗣️ Final Desi Dialogue:
```js
// Bhai, true ka matlab:
// “Ha bhai, ye number toh prime hai!” ✅
//
// Aur false ka matlab:
// “Na bhai, iske toh chhupke divisors mil gaye, ye prime nahi hai!” ❌
```

## ✅ Example Runs:
| Input | Output                            |
| ----- | --------------------------------- |
| 7     | `7 is prime number.` ✅            |
| 12    | `12 is not prime number.` ❌       |
| -5    | `Enter positive numbers only.` ⚠️ |
| "abc" | `Invalid input!` ❌                |


---

# 🔁 `break` and `continue` in JavaScript
## 📌 What are they?
- `break`:
    ➤ Immediately **exits** the current loop (or `switch`) when executed.

- `continue`:
    ➤ Skips the **current iteration** of the loop and moves to the **next** one.

### 🧪 Example 1 – `break`:
```js
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
// Output: 1 2 3 4
```

## 🧠 Why?
- Loop stops when `i` becomes 5.
- `break` **exits the loop entirely**.

### 🧪 Example 2 – `continue`:
```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
// Output: 1 2 4 5
```

## 🧠 Why?
When `i === 3`, `continue` skips `console.log(i)` for that iteration.

Loop still continues with `i = 4`, `i = 5`...

## 🧠 Real-Life Analogy:
| Statement  | Real-Life Example                                              |
| ---------- | -------------------------------------------------------------- |
| `break`    | "Class dismissed!" Everyone leaves the class instantly 🏃‍♂️💨 |
| `continue` | "Ignore this student, continue with next." 👩‍🏫⏭️             |

## 🛠️ When to Use:
### ✅ Use `break` when:
- You’ve **found what you're looking for**, no need to check further.
- Exiting a loop early to **optimize** performance.

### ✅ Use `continue` when:
You want to **skip specific cases**, but still continue the rest of the loop.

## 🔁 Loop Types Supported:
| Statement  | Works in `for` | `while` | `do...while` | `switch` |
| ---------- | -------------- | ------- | ------------ | -------- |
| `break`    | ✅              | ✅       | ✅            | ✅        |
| `continue` | ✅              | ✅       | ✅            | ❌        |

## 🧪 Nested Loop with `break`:
```js
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) break;
        console.log(`i=${i}, j=${j}`);
    }
}
// Output:
// i=1, j=1
// i=2, j=1
// i=3, j=1
```

## ✅ Summary:
| Keyword    | Effect                                |
| ---------- | ------------------------------------- |
| `break`    | Stops loop immediately ⛔              |
| `continue` | Skips current step, continues loop 🔄 |


---

# 🔄 For Loop vs While Loop – When and How to Use
## 1️⃣ For Loop
## 📌 What is it?
- A loop that repeats a block of code **a known number of times**.
- Has 3 parts in one line:
`for (initialization; condition; update)`

### 🧪 Syntax:
```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
- Runs while `i < 5`
- `i` starts at 0, increments by 1 each loop

### 📈 When to use?
- When the number of iterations is **known or fixed**.
- Ideal for counting loops or iterating over arrays.

## 2️⃣ While Loop
### 📌 What is it?
- Repeats code while a condition remains true.
- Only has the condition in the loop header.

### 🧪 Syntax:
```js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```
- Loop continues while `i < 5`
- Initialization and update done **inside the loop**

### 📈 When to use?
- When the number of iterations is **not known beforehand.**
- Useful for loops that depend on dynamic conditions or user input.

## 🧠 Process Flow
| Loop Type | Initialization   | Condition Check       | Loop Body        | Update           |
| --------- | ---------------- | --------------------- | ---------------- | ---------------- |
| `for`     | Inside loop head | Before each iteration | Executes if true | Inside loop head |
| `while`   | Before loop      | Before each iteration | Executes if true | Inside loop body |

## 🧪 Real-World Examples
| Scenario                                    | Loop Type  | Example                             |
| ------------------------------------------- | ---------- | ----------------------------------- |
| Counting 1 to 10                            | For Loop   | `for(let i=1; i<=10; i++)`          |
| Waiting for user to input "exit"            | While Loop | `while(userInput !== "exit")`       |
| Iterating over an array of fixed length     | For Loop   | `for(let i=0; i < arr.length; i++)` |
| Reading sensor data until threshold reached | While Loop | `while(sensorValue < threshold)`    |

## ⚠️ Summary:
| Feature                 | For Loop              | While Loop                |
| ----------------------- | --------------------- | ------------------------- |
| Known iterations        | ✅ Yes                 | ❌ No                      |
| Condition checked first | ✅                     | ✅                         |
| Initialization & update | Combined in header    | Separate outside & inside |
| Use case                | Fixed iteration count | Unknown or dynamic loops  |
