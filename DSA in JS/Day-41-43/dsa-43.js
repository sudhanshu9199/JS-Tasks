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

let arr = Array.from({length:3}, () => Array(4).fill(2))

console.log(arr);
