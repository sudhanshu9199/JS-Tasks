/* Q. Find the second largest number in an array. */

// let arr = [21, 54, 85, 28, 35, 21, 85];

// // let unique = [...new Set(arr)];
// // let sorted = unique.sort(function(a, b) {
// //     // return a - b; // for ascending
// //     return b - a; // for descending
// // })
// // console.log(sorted[1]); // second largest

// // In few line
// console.log([...new Set(arr)].sort(function(a, b) {
//     // return a - b; // for ascending
//     return b - a; // for descending
// }) [1]);



/* Q. - Reverse an array without using .reverse(). */

// let arr = [3, 4,1,5,6,8,9];
// let arr2 = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     arr2.push(arr[i]);
// }
// console.log(arr2);



/* Q. Find the most frequent element in an array. */
// let arr = [5,8,9,25,5,8,9,5,5,2];
// let obj = {};
// arr.forEach((val) => {
//     obj[val] === undefined ? obj[val] = 1 : obj[val]++;
// });

// console.log(obj);
