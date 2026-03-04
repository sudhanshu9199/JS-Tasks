/** Q. Write a JavaScript program to perform a left rotation of an array by one position.
 *or
 Shift all elements of an array to the left by one, and move the first element to the end.
 */
// let arr = [1, 2, 3, 4, 5];
// let copy = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = copy;
// console.log(arr);




/** Q. Write a JS program to perform a right rotation of an array by one position. */
// let arr = [1, 2, 3, 4, 5];
// let copy = arr[arr.length - 1];
// for(let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
// }
// arr[0] = copy;
// console.log('Right rotated array:', arr);



/** Q.  Q. Write a JavaScript program to perform a left rotation of an array by two position. */
// let arr = [1, 2, 3, 4, 5];
// let copy1 = arr[0];
// let copy2 = arr[1];
// for (let i = 0; i < arr.length - 2; i++) {
//     arr[i] = arr[i + 2];
// }
// arr[arr.length - 2] = copy1;
// arr[arr.length - 1] = copy2;
// console.log('Left rotated array by two positions:', arr);


/**Q. Left and right rotation by k element. */
// let arr = [1, 2, 3, 4, 5];
// let k = 1;
// for (let i = 0; i < k; i++) {
//     let copy = arr[0];
//     for (let j = 0; j < arr.length - 1; j++) {
//         arr[j] = arr[j + 1];
//     }
//     arr[arr.length - 1] = copy;
// }
// console.log('Left rotated array by k positions:', arr);



// let arr = [1, 2, 3, 4, 5];
// let k = 1;
// for (let i = 0; i < k; i++) {
//     let copy = arr[arr.length - 1];
//     for (let j = arr.length - 1; j > 0; j--) {
//         arr[j] = arr[j - 1];
//     }
//     arr[0] = copy;
// }
// console.log('Right rotated array by k positions:', arr);


/**OR */

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let temp = new Array(arr.length);
// let k = Number(prompt("Enter k value"))
// k = k % arr.length;

// for (let i = 0; i < arr.length; i++) {
//     temp[i] = arr[(i + k) % arr.length]
// }
// console.log('', temp);

/**OR 
Reverse Algorithm
*/
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let k = Number(prompt("Enter k value"))
// k = k % arr.length; // To handle cases where k is greater than the array length
// reverse(0, k - 1)
// reverse(k, arr.length - 1)
// reverse(0, arr.length - 1)
// console.log('left Rotated array:', arr); // ans [2, 3, 4, 5, 6, 7, 1]

// function reverse(i, j) {
//     while (i < j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }



// let arr = [1, 2, 3, 4, 5, 6, 7];
// let k = Number(prompt("Enter k value"))
// k = k % arr.length; // To handle cases where k is greater than the array length
// reverse(0, arr.length - 1)
// reverse(0, k - 1)
// reverse(k, arr.length - 1)
// console.log('Right Rotated array:', arr); // ans [7, 1, 2, 3, 4, 5, 6]

// function reverse(i, j) {
//     while (i < j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }





/** Q. Remove duplicates from the sorted array. */
// let arr = [1, 1, 2, 2, 3, 4, 4, 4, 5];
// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//         arr.splice(i, 1); // Remove the duplicate element
//         i--; // Decrement i to check the new element at this index
//     }
// }
// console.log('Array after removing duplicates:', arr);




// let arr = [1, 1, 2, 2, 3, 4, 4, 4, 5, 8, 9, 8, 11];
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             arr.splice(j, 1);
//             j--;
//         }
//     }
// }
// console.log('Array after removing duplicates:', arr);





/**Q. Merge sorted array. */




// revise

// let n = Number(prompt('Enter number: '));
// let copy = n;
// let sum = 0;
// while(n > 0) {
//     let quotent = Math.floor(n /10);
//     let remender = n % 10;
//     let fac = 1;
//     for (let i = 1; i <= remender; i++) {
//         fac*= i;
//     }
//     sum+= fac;
//     n = quotent;
// }
// if (copy === sum) console.log(`${sum} is strong number.`);
// else {
//     console.log(`${sum} is not strong number.`);
// }



// let size = Number(prompt('Enter array size: '));
// let arr = new Array(size);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt('Enter element:'));
// }
// console.log(arr);


// Sum of array's element
// let size = Number(prompt('Enter array size:'));
// let arr = new Array(size);
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt('Enter element: '));
//     sum += arr[i];
// }
// console.log(arr);
// console.log(sum);


// Max element from array
// let size = Number(prompt('Enter array size: '));
// let arr = new Array(size);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt('Enter element: '));
// }
// let max = arr[0];
// for (let j = 1; j < arr.length; j++) {
//     if (arr[j] > max) max = arr[j];
// }
// console.log(max);


// // Min element from array
// let size = Number(prompt('Enter array size: '));
// let arr = new Array(size);

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt('Enter element:'));
// }
// console.log(arr);
// let min = arr[0];
// for (let j = 1; j < arr.length; j++) {
//     if (arr[j] < min) min = arr[j];
// }

// console.log(min);

// // Second minimum element from array
// let arr = [5, 5, 8];
// let min = Infinity;
// let sMin = Infinity;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         sMin = min;
//         min = arr[i];
//     }
//     else if (arr[i] < sMin && arr[i] !== min) {
//         sMin = arr[i];
//     }
// }
// console.log(sMin);


// // Reverse the array
// let arr = [10, 20, 25, 35, 40, 50];
// let temp = new Array(arr.length);
// let i = 0;
// for (let j = arr.length - 1; j >= 0; j--) {
//         temp[i] = arr[j];
//         i++;
// }
// console.log(temp);

// let arr = [10, 20, 25, 35, 40, 50];
// let j = arr.length - 1;
// for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j--;
//     if (i === j) break;
// }
// console.log(arr);



// // All zeroes to left and all ones to right.
// let arr = [0, 1, 1, 0, 1, 0, 0, 1, 1, 0];
// let j = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }
// }
// console.log(arr);

// // Array left rotation by 1.
// let arr = [10, 20, 25, 35, 40, 50];
// let first = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = first;
// console.log(arr);

// // Array right rotation by 1.
// let arr = [1, 2, 3, 4, 5];
// let last = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
// }
// arr[0] = last;
// console.log(arr);


// Array left rotation by k elements.
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt('Enter rotating Number:'));
// for (let j = 1; j <= (k % arr.length); j++) {
//     let first = arr[0];
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1];
//     }
//     arr[arr.length - 1] = first;
//     console.log(`Rotate ${j} Done!`);
    
// }
// console.log(arr);
 /** or */
// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length)
// let k = 2;
// k = k % arr.length;

// for (let i = 0; i < arr.length; i++) {
//     temp[i] = arr[(i + k) % arr.length]
// }
// console.log(temp);
 /** or */
let arr = [1, 2, 3, 4, 5];
let k = 2;
k = k % arr.length

reverse(arr, 0, k - 1);
reverse(arr, k, arr.length - 1);
reverse(arr, 0, arr.length - 1);

console.log(arr);

function reverse(arr, i, j) {
    while(i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++; j--;
    }
}

// Linear Search an array - If element found print the index else -1.