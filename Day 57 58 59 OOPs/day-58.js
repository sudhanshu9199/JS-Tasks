/*
2. Mini Challenge:
Build a `User` class that:
Has a private password field (use `#password`)
Has a method `checkPassword(input)` that returns true if matched
Has a method `changePassword(oldPass, newPass)` to update password */

// class User {
//     #password = 0;
//     constructor (name, password) {
//         this.name = name;
//         this.#password = password;
//     }

//     checkPassword(input) {
//         return input === this.#password;
//     }

//     changePassword(oldPass, newPass) {
//         if (this.checkPassword(oldPass)) {
//             this.#password = newPass;
//             console.log(`Password changed successfully`);
//         }
//         else {
//             console.log('Old password is incorrect.');
//         }
//     }
// }

// const u1 = new User('Sudhanshu', 123);
// u1.changePassword(123, 23)
// console.log(u1.checkPassword(23));



/**lecture day 58 */

/* prototype */
// jab bhi constructor banaaoge aur kuchh aisa mil gaya joh ki sabmein same hai to usey kabhi bhi direct constructor mein banana galat tareeka hota hai, par sahi tareeka hai prototype ka use karna kyuki prototype mein save karne par jitne bhi new ke saath instance banaaoge wo saare instance by default tumhaari proto ki value ko hold karege

// function Toffee(name) {
//     this.name = name;
// }
// Toffee.prototype.price = 3;
// let t1 = new Toffee('alpenliebe');
// let t2 = new Toffee('kachha aam');


// sabse pahle property ko aapke object mein dhundhege nahi mila to prototype mein dhundte hai

// function Toffee(name) {
//     this.name = name;
//     this.price = 34;
// }
// Toffee.prototype.price = 10;
// let t1 = new Toffee('Kaccha aam')

/**Last example */
function Employee(name, age, id, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.id = id;
}

Employee.prototype.printDetails = function () {
    console.log(`${this.name} is my name, I am ${this.age} years old, my salary is ${this.salary}rs. and my ${this.id} is ID.`);
}
let e1 = new Employee('Sudhanshu', 21, 1123, 90000);
console.log(e1); console.log(e1.printDetails());