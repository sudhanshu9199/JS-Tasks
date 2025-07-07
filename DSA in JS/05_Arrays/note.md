# Lecture - 05_Arrays

# 📌 What is an **Array** in JavaScript?
An **array** is a special variable used to store **multiple values in a single variable.**
```js
let fruits = ['apple', 'banana', 'mango'];
```

## 📌 Here:
- `fruits[0]` → `'apple'`
- `fruits[1]` → `'banana'`

# 🧠 Why Use Arrays?
- Store **multiple items using a single variable**.
- Organize data into **indexed collections**.
- Useful in **loops, data manipulation**, and **pattern problems**.

## ✅ How to Create Arrays
```js
let arr1 = [10, 20, 30];         // Using array literal
let arr2 = new Array(5);         // Creates an empty array of length 5
let arr3 = Array.of(1, 2, 3);    // Creates an array with specific elements
```

# 🔄 Common Array Operations
| Operation         | Syntax                         | Example               |
| ----------------- | ------------------------------ | --------------------- |
| Access Element    | `arr[index]`                   | `arr[0]` → First item |
| Update Element    | `arr[index] = value`           | `arr[1] = 42`         |
| Add at End        | `arr.push(value)`              | `arr.push(100)`       |
| Remove from End   | `arr.pop()`                    | `arr.pop()`           |
| Add at Start      | `arr.unshift(value)`           | `arr.unshift(5)`      |
| Remove from Start | `arr.shift()`                  | `arr.shift()`         |
| Length            | `arr.length`                   | `arr.length`          |
| Loop              | `for`, `for...of`, `forEach()` | See below             |


## 🔁 Example: Loop Through Array
```js
let arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```
OR
```js
for (let item of arr) {
  console.log(item);
}
```

## 🧪 When to Use Arrays?
✅ Use Arrays when:
- You want to **store a list** of related values (numbers, strings, etc.).
- You're working with **collections**, like tasks, students, scores, items, etc.
- You need to loop or process multiple values together.

## 🧠 Real-World Example
```js
let tasks = ['eat', 'code', 'sleep'];
tasks.push('repeat');
console.log(tasks); // ['eat', 'code', 'sleep', 'repeat']
```

## 🧩 Can Arrays Have Mixed Data Types in JavaScript?
✅ **Yes! JavaScript arrays can store elements of different data types** — numbers, strings, objects, even functions.
```js
let mixedArray = [1, 2, 3, "hello", { key: "value" }, [10, 20]];
```
### 🔍 Explanation:
- 1, 2, 3 → Numbers
- "hello" → String
- { key: "value" } → Object
- [10, 20] → Nested Array
📤 **This is valid** in JavaScript because arrays are dynamic and can hold **any type of value**.

## ⚠️ Use Case:
- You might use this in **real-world scenarios** where data is not uniform (like APIs or form data).

## ❗ Note:
Although it's allowed, **avoid mixing too many types** unless needed — it can make your code harder to read and debug.

---

# 📌 What is a Data Structure?
A **data structure** is a way to **store and organize data** so that it can be used efficiently.

## 🧩 Types of Data Structures
1. Linear Data Structures
2. Non-Linear Data Structures

## ✅ 1. Linear Data Structures
📌 **Definition:** Data is **stored sequentially** (one after another).
🔄 **Traversal:** Easy — you go from start to end in a **single line**.

🧠 Examples:
- Arrays
- Linked Lists
- Stacks
- Queues

### 🔍 Characteristics:
- Each element has a **single next** and/or **previous** element.
- Memory is organized in a **linear** way.
- Easy to implement using loops.

## ✅ 2. Non-Linear Data Structures
📌 Definition: Data is not stored sequentially; it forms a hierarchy or connection between elements.

🧠 Examples:
- Trees (e.g., Binary Tree)
- Graphs
- Heaps
- Hash Tables (sometimes considered hybrid)

### 🔍 Characteristics:
- Elements are connected in multiple ways (not one-to-one).
- Traversal is more complex (e.g., depth-first, breadth-first).
- Suitable for representing hierarchical or network-like data.

## 🔄 Comparison Table:
| Feature           | Linear                       | Non-Linear                  |
| ----------------- | ---------------------------- | --------------------------- |
| Storage           | Sequential                   | Hierarchical/Connected      |
| Traversal         | One direction (start to end) | Multiple paths              |
| Examples          | Array, Stack, Queue          | Tree, Graph                 |
| Complexity        | Simpler                      | More complex                |
| Real-life Example | Train (coaches)              | Family Tree, Web Page Links |


## 📌 Why Learn This?
Understanding linear vs non-linear helps you choose the right structure based on:
- Problem type
- Data relationship
- Efficiency needs

---

# 🧑‍💻 Dynamic Array Input from User (Using `prompt-sync`)
```js
let n = 5;
let arr = new Array(n);
for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}
console.log('Array:', arr);
console.log('Length of array:', arr.length);
```

## 📌 What’s Happening Here?
1. `let n = 5;`
- Declares a variable `n` and sets it to 5 → this means we want an array of **5 elements**.

2. `let arr = new Array(n);`
- Creates a new array of length `n` (in this case, 5).
- The array is **empty initially →** all slots are `undefined`.

3. `for (let i = 0; i < n; i++) { ... }`
- Loop runs `n` times (i.e., 5 times).
- In each iteration:
    - `prompt()` asks the user to input a value.
    - `Number(...)` converts the input string to a number.
    - `arr[i] = Number(...)` stores the value at index `i`.

4. `console.log('Array:', arr);`
- Prints the entire array after user input is complete.

5. `console.log('Length of array:', arr.length);`
- Shows the number of elements in the array (will be 5 here).

## 🧠 Use Case
Use this when you want to:
- Take dynamic user input for arrays in Node.js.
- Practice loop-based array construction.
- Build basic logic for pattern programming, search, sort, etc.

## 🔧 To Make This Work:
You need to install `prompt-sync` to get user input in Node.js:
```bash
npm i prompt-sync
```

Then, at the top of your JS file:
```js
const prompt = require('prompt-sync')();
```

## 📌 Final Output (Example)
```yaml
Enter element 1: 10
Enter element 2: 20
Enter element 3: 30
Enter element 4: 40
Enter element 5: 50
Array: [ 10, 20, 30, 40, 50 ]
Length of array: 5
```