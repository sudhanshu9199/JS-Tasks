// string are immutable in nature
// string is array of character -wrong
// string are sequence of character
// string shows behaviour like array

let s = 'Sheryians';
console.log(s.charAt(0));

console.log(s.length); // 9
console.log(s.substring(3)); // start to __ -> ryians
console.log(s.substring(1, 3)); // start to end-1 -> he
console.log(s.slice(1), ':it slice'); // ryians
console.log(s.slice(1,3)); // he
console.log(s.slice(-3, -1)); // an  -> in minus counting starting from revese
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.concat(' is', ' path', ' of', ' students.'));
let us = '     S U D H A N    ';
console.log(us);
console.log(us.trim());
console.log(s.indexOf('yia')); // returns first index of substring  -> yia -> 4



/* Q35. Accept a string from user and print each character on a new line */
// let user = prompt('Enter string:');
// for (let i = 0; i < user.length; i++) {
//     console.log(user[i]);
// }



/*  Q36. Accept a string and print it in reverse order */

// let user = prompt('Enter string:');
// let store = '';
// for (let i = user.length - 1; i >= 0; i--) {
//     // store += user[i]; /**OR */
//     store += user.charAt(i);
    
// }
// console.log(store);




/**Q 37. Pallindromic String using method and Two pointer algorithm (hint: Array reverse algo) */