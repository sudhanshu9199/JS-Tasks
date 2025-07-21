

// /**LeetCode Matrix Problems (Q31–Q34) */
/* Q. 867. Transpose Matrix */
// let matrix = [[2,4,-1], [-10,5,11], [18,-7,6]]
// let ans = Array.from({length: matrix[0].length}, () => Array(matrix.length));

// for (let i = 0; i < ans.length; i++) {
//     for (let j = 0; j < ans.length; j++) {
//         ans[i][j] = matrix[j][i];
//     }
// }
// console.log(ans);
/*OR */
// let row = matrix.length;
// let col = matrix[0].length;
// let ans = new Array(col);
// for(let i = 0; i < ans.length; i++) {
//     ans[i] = new Array(row);
// }

// for(let i = 0; i < ans.length; i++) {
//     for (let j = 0; j < ans[i].length; j++) {
//         ans[i][j] = matrix[j][i];
//     }
// }
// console.log(ans);


/* Q 48. Rotate Image  */

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = i + 1; j < matrix[i].length; j++) {
//         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
// }
// for (let i = 0; i < matrix.length; i++) {
//     matrix[i].reverse();
// }
// console.log(matrix);
/**OR */
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = i + 1; j < matrix[i].length; j++) {
//         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
// }
// for (let i = 0; i < matrix.length; i++) {
//     let k = 0, j = matrix[i].length-1;

// while(k < j) {
//     let temp = matrix[i][k];
//     matrix[i][k] = matrix[i][j];
//     matrix[i][j] = temp;
//     k++;
//     j--;
// }
// }
// console.log(matrix);



/** Q. 54. Spiral Matrix */
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let result = [];

// let tops = 0;
// let bottom = arr.length - 1;
// let left = 0;
// let right = arr[0].length - 1;

// while (tops <= bottom && left <= right) {
//     // ➡ left to right
//     for (let i = left; i <= right; i++) {
//         result.push(arr[tops][i]);
//     }
//     tops++;

//     // ⬇ tops to bottom
//     for (let i = tops; i <= bottom; i++) {
//         result.push(arr[i][right]);
//     }
//     right--;

//     // ⬅ right to left
//     if (tops <= bottom) {
//         for (let i = right; i >= left; i--) {
//             result.push(arr[bottom][i]);
//         }
//         bottom--;
//     }

//     // ⬆ bottom to tops
//     if (left <= right) {
//         for (let i = bottom; i >= tops; i--) {
//             result.push(arr[i][left]);
//         }
//         left++;
//     }
// }

// console.log(result);

