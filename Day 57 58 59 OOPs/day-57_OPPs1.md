# JavaScript OOPs: Old vs New (Function Constructors vs Classes)

## 🧱 Step 1: Old Style – Function Constructors + Prototype

### ✅ What is this style?
Before ES6 (2015), JavaScript didn’t have the `class` keyword. Developers created “blueprints” for objects using **function constructors** and attached shared methods using `.prototype`.

### 💡 Real-Life Analogy
Imagine a Car Factory. You want to make many cars with the same properties and methods (start, drive, stop). Each car is an object made from a common blueprint.

---

### 🔤 Code Example – OLD WAY

```javascript
// Function Constructor
function Car(brand, speed) {
  this.brand = brand;
  this.speed = speed;
}

// Method added via prototype (shared among all Car objects)
Car.prototype.drive = function () {
  console.log(`${this.brand} is driving at ${this.speed} km/h`);
};

const car1 = new Car("Toyota", 120);
car1.drive(); // Toyota is driving at 120 km/h
```

---

## 🆕 Step 2: Modern ES6+ Classes

### ✅ What changed?
JavaScript added a cleaner syntax that looks like classes in other languages (e.g., Java, C++), but it's just syntactic sugar over the same prototype system.

---

### 🔤 Code Example – NEW WAY

```javascript
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    console.log(`${this.brand} is driving at ${this.speed} km/h`);
  }
}

const car1 = new Car("Toyota", 120);
car1.drive(); // Toyota is driving at 120 km/h
```

---

## 🔁 Old vs New – Side-by-Side

| Feature           | Old Style (Pre-ES6)          | New Style (ES6+)                |
| ----------------- | ---------------------------- | ------------------------------- |
| Constructor       | `function Car(...) {}`       | `class Car { constructor() }`   |
| Method Definition | `Car.prototype.method = ...` | `method() { ... }` inside class |
| Object Creation   | `new Car(...)`               | `new Car(...)`                  |
| Readability       | Less clear                   | Much clearer                    |

---

## 🔧 Real Use Case in Development

You need to create multiple Users, Orders, Tasks, etc.  
Instead of copy-pasting objects, define a class or constructor.  
Add reusable methods like `login()`, `calculateTotal()`, etc.

---

## ✅ Quick Summary

- Function constructors + `.prototype` were the old blueprint system.
- ES6 `class` is a modern, readable way that still uses prototypes behind the scenes.
- Both are capable of object creation + shared methods.

---

## 👀 Check Your Understanding

**Q: What is the difference between a constructor function and a class in JavaScript?**

> Constructor functions use `.prototype` to define shared methods, which can feel clunky and less readable.  
> ES6 class syntax is cleaner, hiding the prototype setup under the hood.

---

## Challenge: Create a "Person" Using Both Styles

### Requirements:
- `name` and `age` as properties
- A method called `greet()` that says:  
  `"Hi, I'm [name] and I'm [age] years old."`

---

### 👴 Old Way – Function + Prototype

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

const p1 = new Person('Harsh', 29);
p1.greet();
```

---

### 👨‍🏫 New Way – ES6 Class

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const p1 = new Person('Hardik', 35);
p1.greet();
```

---

## Your Answer Review

### 1. Understanding: “Difference between constructor function and class”

**Your words:**  
"constructor function: used function property to create, it is not clear to readable too much, used .prototype to add methods; but in a class: use class then constructor to contain items and the .prototype is still there but not need to write its work in a backside."

**✔️ Feedback:**  
You got the core difference right: old style uses function and `.prototype`, while modern uses `class` and defines methods directly inside.  
Great note on readability – ES6 classes are easier for humans to read.

**Improved wording:**  
"Constructor functions use `.prototype` to define shared methods, which can feel clunky and less readable. ES6 class syntax is cleaner, hiding the prototype setup under the hood."

---

### 2. Code: Creating Person with both styles

**Old Way – Function + Prototype:**  
- Method is attached via prototype – memory efficient.

**New Way – ES6 Class:**  
- Perfect use of constructor and method in ES6 style.

---

**👉 Try it for either the old or new style (or both if you're confident). I’ll review and give feedback.

--- 

## Author
SUDHNASHU GHOSH