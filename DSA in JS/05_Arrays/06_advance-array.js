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




let arr = [1, 1, 2, 2, 3, 4, 4, 4, 5, 8, 9, 8, 11];
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            arr.splice(j, 1);
            j--;
        }
    }
}
console.log('Array after removing duplicates:', arr);





/**Q. Merge sorted array. */
