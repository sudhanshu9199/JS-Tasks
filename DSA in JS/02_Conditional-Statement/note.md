# Lecture - 02_Conditional-Statement

# 🧪 Topic: Checking for `NaN` in JavaScript
## 🧩 Code Example:
```js
let age = Number(prompt("What is your age?"));

// ❌ Incorrect way
// if (NaN === NaN) // always false

// ✅ Correct way
if (isNaN(age)) {
    console.log("Correct! Request to dana.");
}
```

## ❓ Explanation:
### ❌ Why `NaN === NaN` is wrong:
- In JavaScript, `NaN` (Not a Number) is a **special value.**
- It is the only value in JS that is **not equal to itself.**

```js
console.log(NaN === NaN); // false
```
- So, comapring `NaN` using `===` or `==` will **always return false**

## ✅ Why `isNaN(age)` is correct:
- `isNaN(value)` is a **built-in function** that **checks if the value is NaN.**
- If the input is **not a number**, `isNaN()` returns `true`.
- In your code:
```js
let age = Number(prompt("What is your age?"));
```
- If the user enters a non-numeric input like `"hello"`, `Number("hello")` becomes `NaN`.

So:
```js
isNaN(age) // true => triggers the if block
```

## 🔍 Summary Table:
| Statement       | Result  | Why                                |
| --------------- | ------- | ---------------------------------- |
| `NaN === NaN`   | `false` | `NaN` is not equal to itself       |
| `isNaN(NaN)`    | `true`  | Correct way to detect `NaN`        |
| `Number("abc")` | `NaN`   | Cannot convert to number           |
| `isNaN("123")`  | `false` | `"123"` can be converted to number |


---

# ⚡ Q10. Bijli Bill – Electricity Bill Calculator
💰 Tariff Chart
| Units     | Rate (₹ per unit) |
| --------- | ----------------- |
| 0 – 100   | ₹4.2              |
| 101 – 200 | ₹6                |
| 201 – 400 | ₹8                |
| Above 400 | ₹13               |

## 🧪 Code:
```js
let unit = Number(prompt("Enter electricity unit"));
let amount = 0;

// For units above 400
if (unit > 400) {
    amount = (unit - 400) * 13; // ₹13/unit for above 400
    unit = 400; // Reduce to 400 to calculate next slab
}

// For units between 201 and 400
if (unit > 200 && unit <= 400) {
    amount += (unit - 200) * 8; // ₹8/unit for 201-400
    unit = 200;
}

// For units between 101 and 200
if (unit > 100 && unit <= 200) {
    amount += (unit - 100) * 6; // ₹6/unit for 101-200
    unit = 100;
}

// For units up to 100
amount += unit * 4.2; // ₹4.2/unit for 0–100

console.log("Total Bill: ₹" + amount.toFixed(2));
```

## 🔍 Logic Breakdown:
1. Start with the highest slab (above 400):
    - If units are more than 400, calculate cost for extra units at ₹13.

    - Subtract these extra units and bring `unit` back to 400.

2. Then check 201–400 slab:
    - If still more than 200 units, calculate units between 201–400 at ₹8.

3. Then check 101–200 slab:
    - If still more than 100 units, calculate 101–200 at ₹6.

4. Finally, the base slab (0–100):
    - Remaining units (now ≤ 100) are charged at ₹4.2.

## 🧠 Why it works:
- This code works **from top to bottom**, deducting units step-by-step.
- You always:
    - Calculate extra units for that slab,
    - Update the unit to the remaining lower slab,
    - Continue downward until reaching base units.

## ✅ Example:
**Input:** `unit = 460`
- Above 400: `60 × 13 = ₹780`
- 201–400: `200 × 8 = ₹1600`
- 101–200: `100 × 6 = ₹600`
- 0–100: `100 × 4.2 = ₹420`

**Total Bill: ₹780 + 1600 + 600 + 420 = ₹3400**

---

# 🔀 Ternary Operator – Conditional (Short-Form) If-Else
## 📌 What is the Ternary Operator?
- It's a short-hand way to write an if-else statement.
- Syntax:
    ```js
    condition ? expression_if_true : expression_if_false;
    ```

## 🧪 Code Examples:
```js
112 > 13 ? console.log('Yes') : console.log('No');
// Output: Yes

console.log(55 >= 58 ? 'Hello wow' : 'No jao');
// Output: No jao
```

## 🧠 How it works:
1. Condition before the ? is evaluated.
2. If true, the expression after ? runs.
3. If false, the expression after : runs.

### ✅ Equivalent if-else:
```js
if (112 > 13) {
    console.log('Yes');
} else {
    console.log('No');
}
```
```js
if (55 >= 58) {
    console.log('Hello wow');
} else {
    console.log('No jao');
}
```

## 🔍 Why Use Ternary?
- Great for short, simple conditions.
- Makes code more concise and readable (for quick decisions).

## ⚠️ When NOT to use ternary?
- Avoid for complex logic or nested conditions – it reduces readability.