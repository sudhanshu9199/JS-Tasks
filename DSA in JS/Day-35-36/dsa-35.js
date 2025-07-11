/* Q. Strong Number

*A number is strong if sum of factorials of its digits equals the number.*
e.g., 145 = 1! + 4! + 5! = 145 */

// let num = Number(prompt("Enter digits value:"));
// let copy = num;
// let sum = 0;
// while (num > 0) {
//   let r = num % 10;
//   let q = Math.floor(num / 10);
// let mul = 1;
//   for (let i = 1; i <= r; i++) {
//     mul *= i;
//   }
  
//   sum += mul;
  
//   num = q;
// }
// console.log(`${copy} factorial is ${sum}`);
// if (copy === sum) console.log('it is strong number');
// else console.log('it is not a strong number!');





/** Day 35 - Array */

// let arr = [10, 20, 30, 40];
// arr.push(100); // add at end
// arr.unshift(101); // add at first
// console.log(arr); 
// arr.pop() // delete from last
// console.log(arr);
// arr.shift(); // 
// console.log(arr); // delete from first
// console.log('Array length:',arr.length);
// arr[2] = 129;
// console.log(arr);



// let size = Number(prompt('Enter array size:'));
// let arr = new Array(size);
// for (let i = 0; i < arr.length; i++) {
//     let element = Number(prompt('Enter element:'));
//     arr[i] = element;
//     console.log(element);
    
// }
// console.log(arr);







/* Q 23. Sum of array's element */

// let size = Number(prompt('Enter array size:'));
// let arr = new Array(size);
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt(`Enter element of [${i}] is: `));
//     console.log(arr[i]);
// }
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log('Sum is',sum);



/* Q 24. Max element from array */

// let arr = [20, 54, 84, 20, 32];
// let max = arr[0];
// for(let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
// }
// console.log(max);


/**Assignment -> Find Min element from array */

// let arr = [20, 54, 84, 10, 32, 82];
// let min = arr[0];
// for(let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
// }
// console.log(min);



/* Write a program to find the second greatest element in an array. */

// let arr = [2, 96, 69, 77, 145, 20];
// let secMax = -1;
//     let max = -1;
//     for (let i = 0; i < arr.length; i++) {
//         let current = arr[i];
        
//         if ( current > max) {
//             secMax = max;
//             max = current;
//         }
//         else if (current > secMax && current !== max) {
//             secMax = current;
//         }
//     }
//     console.log(secMax);
    
