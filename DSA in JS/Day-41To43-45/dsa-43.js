// matrix --> row x col
// let arr = [[1,2,3,5], [4,5,6,10], [7,8,9,9]]; // static array

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         process.stdout.write(`${arr[i][j]} `);
//     }
//     console.log();
// }


// Dynamic array
// let size = Number(prompt('Enter inner array size'));
// let arr = new Array(size);
// for (let i = 0; i < arr.length; i++) {
//     let innerArraySize = Number(prompt("Enter inner array size:"));
//     arr[i] = new Array(innerArraySize);
// }

// for (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++) {
//         arr[i][j] = Number(prompt('Enter Element: '));
//     }
// }
// console.log(arr);



// let size = Number(prompt('Enter array size: '));
// let arr = new Array(size);
// for (let i = 0; i < arr.length; i++) {
//     let innerSize = Number(prompt("Enter inner array size: "));
//     arr[i] = new Array(innerSize);
//     for (let j = 0; j < arr[i].length; j++) {
//         arr[i][j] = Number(prompt(`Enter element of index[${i}${j}]: `));
//     }
// }
// console.log(arr);


// Matrix Diagonal Sum
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [5, 8, 9]
// ]

// let leftSum = 0, rightSum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (i === j) leftSum += arr[i][j];
//         if (i + j === arr.length - 1) rightSum += arr[i][j];
//     }
// }
// console.log('left sum ',leftSum);
// console.log('right sum ',rightSum);


// One-Liner Code for Creating a 2D Array

// let arr = Array.from({length:3}, () => Array(4).fill(2))

// console.log(arr);



// Revise

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++ ){
//         console.log(arr[i][j]);
//     }
// }


// let outerSize = Number(prompt('Enter outer array size:'));
// let outerArray = new Array(outerSize);

// for (let i = 0; i < outerArray.length; i++) {
//     outerArray[i] = new Array(i+1);
// }

// for (let i = 0; i < outerArray.length; i++) {
//     for (let j = 0; j < outerArray[i].length; j++) {
//         outerArray[i][j] = Number(prompt(`Enter element of index [${i}][${j}]: ${outerArray[i][j]}`));
//     }
// }
// console.log(outerArray);




// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// let leftSum = 0;
// let rightSum = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (i == j) leftSum += arr[i][j];
//         if (i+j == arr.length - 1) rightSum += arr[i][j];
//     }
// }
// console.log(`left diagonal sum: ${leftSum} and right diagonal sum: ${rightSum}`);



// let arr = new Array(4);
// for (let i = 0; i < arr.length; i++) {
//     let size = Number(prompt(`Enter inner ${i} aray's size:`));
//     arr[i] = new Array(size);
// }

// for(let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         arr[i][j] = Number(prompt(`Enter inner index ${i}:${j} value:`));
//     }
// }
// console.log(arr);



/* One line array create */

// let arr = Array.from({length: 3}, () => Array(4).fill(0))
// console.log(arr);
