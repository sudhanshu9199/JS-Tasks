/* Q 29. Array left rotation by K elements */

// let arr = [1, 2, 3, 4, 5];
// let userInput = prompt('Enter repeat value:');
// userInput %= arr.length;
// for (let k = 0; k < userInput; k++) { // its saves extra spaces but use extra times
//   let store = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = store;
// }
// console.log(arr);
/**OR */
// let arr = [1, 2, 3, 4, 5]; // its saves time but use extra space
// let temp = new Array(arr.length);
// let userInput = prompt('Enter repeat value:');
// userInput %= arr.length;
// for (let i = 0; i < arr.length; i++) {
//     temp[i] = arr[(i + userInput) % arr.length];
// }
// console.log(temp);

/**OR */
// let arr = [1, 2, 3, 4, 5];
// let userInput = prompt('Enter repeat value:');
// userInput %= arr.length;
// reverse(arr, 0, userInput -1);  // algo name: block swap reverse algorithm
// reverse(arr, userInput, arr.length -1);
// reverse(arr, 0, arr.length - 1);

// console.log(arr);

// function reverse(arr, i, j) {
//     while (i < j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }


/* Q 30. Linear Search an array - If element found print the index else -1 */

// let arr = [10, 5, 3, 15, 19, 69, 20];
// let search = Number(prompt('Enter target value:'));
// let index = -1
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === search) {
//         index = i;
//         break;
//     }
    
// }
// if (index !== -1) console.log(`${search} found at ${index} index.`);
// else console.log(index, 'element Not found');




/** Session 10:
- Binary Search -> Binary demand: 1.Array should be sorted. 2.find middle index by mid = [(start + end)/2] */


/* Binary search */
// let arr = [10, 23, 45, 67, 69, 190, 200];
// let target = Number(prompt('Enter target value:'));
// if (binarySearch(arr, target) === -1) console.log('not found');
// else console.log('found at index:', binarySearch(arr, target));


// function binarySearch(arr, target) {
//     let s = 0, e = arr.length - 1;
//     while (s <= e) {
//         let mid = Math.floor((s + e)/2);
//         if (arr[mid] === target) return mid;
//         else if (arr[mid] > target) e = mid - 1;
//         else s = mid + 1;
//     }
//     return -1;
// }