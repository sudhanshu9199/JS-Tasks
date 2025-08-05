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