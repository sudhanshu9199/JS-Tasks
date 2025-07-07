// let arr = [55, 63];
// console.log(arr);
// arr.push(15);
// console.log('After push:', arr);
// arr.unshift(81);
// console.log('After unshift:', arr);

// console.log('Length of array:',arr.length);
// console.log('find element:', arr[2]);
// console.log('find element:', arr[0]);

// let arr = [];
// arr[0] = Number(prompt('Enter first number:'));
// console.log('First element:', arr[0]);

// let n = 5;
// let arr = new Array(n);
// for (let i = 0; i < n; i++) {
//     arr[i] = Number(prompt(`Enter elment ${i + 1}: `));
// }
// console.log('Array:', arr);
// console.log('Length of array:', arr.length);

// let arr = new Array(5);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt(`Enter elment ${i + 1}: `));
// }
// console.log('Array:', arr);
// console.log('Length of array:', arr.length);

/** Method 1 */
// let arr = [10, 20, 30, 50, 57];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log('Sum of array elements:', sum);

/** Method 2 */
// let arr = [10, 20, 30, 50, 57];
// let sum = 0;
// for (let item of arr) {
//     sum += item;
// }
// console.log('Sum of array elements:', sum);

/**Find maximum element */
// let arr = [10, 20, 30, 58, 57];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if ( arr[i] > max ) {
//         max = arr[i];
//     }
// }
// console.log('Current max:', max);

/**Find minimum element */
// let arr = [58,29,84,685,8,965,685,47,2];
// let min = arr[0];
// for (let i = 0; i< arr.length; i++) {
//     if ( arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log('Current min:', min);

/**Find second maximum element */
// let arr = [58,29,84,685,8,705,47,2,965, 965];
// let max = arr[0];
// let secondMax = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         secondMax = max;
//         console.log('Updating second max:', secondMax);

//         max = arr[i];
//         console.log('Updating max:', max);
//     } else if (arr[i] > secondMax && arr[i] < max) {
//         secondMax = arr[i];
//         console.log('2Updating second max:', secondMax);
//     }
// }
// console.log('Current max:', max);
// console.log('Current second max:', secondMax);

/**Method 1 */
// let arr = [10, 20, 80, 40, 50];
// let temp = new Array(arr.length);
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//     temp[j] = arr[i];
//     j++;
// }
// console.log(temp);

/**Method 2 */
// let arr = [10, 20, 80, 40, 50, 125]; // [50, 40, 80, 20, 10] 0 1 2 3 4
// console.log("Before Reversed array:", arr);

// for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//   if (arr[i] !== arr[j]) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
// }
// console.log("Reversed array:", arr);

/* or */
// let arr = [10, 20, 80, 50, 125];
// let i = 0, j = arr.length - 1;
// while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log("Reversed array:", arr);




/* Move all '0's to left side and '1's to right side */
// let arr = [1, 0, 1, 0, 1, 0, 1, 0, 1];
// let i = 0, j = 0;
// while (i < arr.length) {
//     if (arr[i] === 0) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }
//     i++;
// }
// console.log("Array after moving 0s to left and 1s to right:", arr);
