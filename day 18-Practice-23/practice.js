/** Console type */
// console.log('Hello World');
// console.warn('Hello World');
// console.error('Hello World');
// console.table({name: "Sudhanshu", age: 21, male: true});

// console.groupCollapsed('Steps to eat');
// console.log("Cook the food");
// console.log("server the food");
// console.log("place the food");
// console.log("sit on chair");
// console.groupEnd();






/** forEach */
/* array.forEach(function(currentValue, index, array) {
  // Code to execute for each element
  // element = current item
  // index = index of current item
  // array = the full array
}); */

// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach(function(fruit, index) {
//     console.log(`Fruit at index ${index}: ${fruit}`);
// });
/* output: Fruit at index 0: apple
Fruit at index 1: banana
Fruit at index 2: cherry */


// const numbers = [1, 2,3,5];
// numbers.forEach((num) => {
//     console.log(num * 2);
// })
/**Output: 2  4  6  10 */

// const students = ['Ankit', 'Ravi', 'Sudhanshu'];
// students.forEach((name, index, arr) => {
//     console.log(`${name} (${index + 1}/${arr.length})`);
    
// })

// // practice questions.
/* Q1. Print Each Item with Index
📝 Question:
Given an array of cities, print each city with its index.

const cities = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai']; */
// const cities = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'];

// cities.forEach((city, index) => {
//     console.log(`City on index ${index}: ${city}`);
// })


/* Q2. Print Squares of Numbers
📝 Question:
Print the square of each number in this array:

const nums = [2, 3, 5, 7]; */
// const nums = [2, 3, 5, 7];
// nums.forEach(num => {
//     console.log(num * num);
// })


/* Q3. Count Total Characters in All Names
📝 Question:
Count total characters from all the strings in the array.

const names = ['Ram', 'Sita', 'Lakshman']; */
// const names = ['Ram', 'Sita', 'Lakshman'];
// let totalLength = 0;
// names.forEach(name => {
//     totalLength += name.length;
// })
// console.log('Total characters:',totalLength);


/* Q4. Uppercase All Items (just print)
📝 Question:
Print all fruits in uppercase using forEach().

const fruits = ['apple', 'banana', 'mango'];*/
// const fruits = ['apple', 'banana', 'mango'];
// fruits.forEach(fruit => {
//     console.log(fruit.toUpperCase());
// })


/*  Q5. Append Each Name to <ul> in HTML
📝 Question:
Add each name from the array as a <li> item in a list on the webpage.
const friends = ['Sudhanshu', 'Ankit', 'Rohit']; */
// const friends = ['Sudhanshu', 'Ankit', 'Rohit'];  -> pending


/* Q6. Print Only Even Numbers
📝 Question:
Given this array, print only the even numbers.

const arr = [10, 15, 20, 25, 30]; */
// const arr = [10, 15, 20, 25, 30];
// arr.forEach(num => {
//     num % 2 === 0 ? console.log(num) : console.log('');    
// });


/* Challenge: Create Your Own forEach() */

// function sudhForEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i, arr);
//     }
// }

// // Using:
// /* arr = [15, 85, 64, 782] */
// sudhForEach(['a', 'b', 'c'], (value, idx) => {
//     console.log(`index ${idx} = ${value}`);
// });

/**OR */

// Array.prototype.sudhForEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// };

// // Now this works:
// const arr = [15, 85, 64, 782];

// arr.sudhForEach((value, idx) => {
//     console.log(`index ${idx} = ${value}`);
// });






/** topics: map filter reduce */

// map --> // jab bhi ek array ko aap ko loop karna ho aur ek naye array mein aapko elements put krne ho to aap map use karoge

// map --> // map ek naya array banata hai and us array mein har baar element leke aata hai jo map ke andar se return hoga

// let arr = [1, 2, 3, 4];
// let ans = arr.map(function (value) {
//     return 12;
// })
/* Output: [12, 12, 12, 12] */

// filter -->

// let arr = [25, 88,45, 254];
// let ans = arr.filter(value => {
//     return false;
// } )
// console.log(ans); // false -> []  | true -> [25, 88,45, 254]


// reduce -->

// let arr = [2, 8,4, 5];
// let ans = arr.reduce((accumulator, key) => {
//     return accumulator * key;
// }, 1)

/**Q. Create an array of 5 numbers and log the sum using.reduce(). */

// arr = [1, 2, 3, 4, 5];

// let ans = arr.reduce((acc, val) => {
//     return acc + val;
// }, 0);

// console.log(ans);




/**Sheet-2 */
/* Q. - Write a for loop to print numbers from 10 to 1 in reverse. */

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

/** Q. Use a while loop to print multiples of 3 from 3 to 30. */

// let i = 3;
// let mult = 3;
// while ( i <= 30){
//     console.log('multiple:',i);
//     i+=3;
// }

/* Q. - Write a program to calculate the sum of numbers from 1 to 100 using a loop. */

// let i = 1;
// let sum = 0;
// while (i <= 100) {
//     sum += i;
//     i++;   
// }
// console.log('Sum of 1 to 100 is:', sum);


/* Q. Create a nested loop to print a star pattern. */

// let size = Number(prompt("Enter size of row:"))
// for (let i = 0; i< size; i++) {
//   let row = '';
//   for (let j = 0; j <i; j++) {
//     row += '* '
//   }  
//   console.log(row);
// }


/* Q. Use a for...of loop to iterate over the string "JavaScript". */

// let str = 'JavaScript';

// for (let i of str) {
//     console.log(i);
// }



/* Q. -. Remove duplicate values from an array. */

// let arr = [5, 4, 2, 4, 1, 1, 1,  5, 2];
// let ans = [...new Set(arr)];
// console.log(ans);
/* Output: [5, 4, 2, 1] */
