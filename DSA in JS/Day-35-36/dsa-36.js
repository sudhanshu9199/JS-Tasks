/* Q 25. Second max element from array */

// let arr = [26, 6, 74, 84,79];
// let max = Math.max(arr[0], arr[1]);
// let secMax = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > max) {
//         secMax = max;
//         max = arr[i]
//     }
//     else if (arr[i] > secMax && arr[i] !== max) {
//         secMax = arr[i];
//     }
// }
// console.log('Second max:', secMax);

/* Q. Second min element from array */

// let arr = [2, 6, 2, 84,79];
// let min = Math.min(arr[0], arr[1]);

// let secMin = Math.max(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] < min) {
//         secMin = min;
//         min = arr[i];
//     }
//     else if (arr[i] < secMin && arr[i] !== min) {
//         secMin = arr[i];
//     }
// }
// console.log('Second Minimum is:', secMin);




/* Q 26. Reverse the array */

// let arr = [2, 5, 8, 2, 84, 75];
// for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//           let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
// }
// console.log(arr);

/**OR */
// let i = 0;
// let j = arr.length - 1;
// while (i < j){
//         let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;

//     i++;
//     j--;
// }
// console.log(arr);


/* Q 27. All zeroes to left and all ones to right */

// let arr = [ 1, 0 , 1, 1, 0, 1, 0 ,0,0 ,0, 1];
// let i = 0, j = 0;
// while (i < arr.length) {
//     if (arr[i] === 0) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++
//     }
//     i++
// }
// console.log(arr);




/* Q 28. Array left Rotation by 1 */

// arr = [2, 4, 6, 7, 8, 9];
// let store = arr[0];
// for (let i = 0; i < arr.length ; i++) {
//     arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = store;
// console.log(arr);



/* Q 28. Array right Rotation by 1 */

// arr = [2, 4, 6, 7, 8, 9];
// let store = arr[arr.length-1];

// for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[ i - 1];
// }
// arr[0] = store;
// console.log(arr);



/*
-Q 29. Array left rotation by K elements
-Q 30. Linear Search an array - If element found print the index else -1 */