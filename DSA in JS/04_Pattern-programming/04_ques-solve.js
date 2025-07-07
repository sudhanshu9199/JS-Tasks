/* Q. Right Angle Triangle
* 
* *
* * *
* * * *
* * * * *
 */
// let prompt = require('prompt-sync')();
// let row = prompt('Enter row count: ');
// for (let i = 1; i <= row; i++){
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write('* ');
//     }
//     process.stdout.write('\n');
// }




/* Q.
Enter row count: 3
1 
1 2
1 2 3
 */
// let prompt = require('prompt-sync')();
// let row = prompt('Enter row count: ');
// for (let i = 1; i <= row; i++){
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(j + ' ');
//     }
//     process.stdout.write('\n');
// }




/* Q. Alphabet Triangle
A 
B C
D E F
G H I J
K L M N O
 */
// let prompt = require('prompt-sync')();
// let row = prompt('Enter row count: ');
// let char = 'A';
// for (let i = 1; i <= row; i++){
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(char + ' ');
//         char = String.fromCharCode(char.charCodeAt(0) + 1); // Increment character
//     }
//     process.stdout.write('\n');
// }




/* Q. Alphabet Right Angle Triangle
A 
A B
A B C
A B C D
A B C D E */
// let prompt = require('prompt-sync')();
// let row = prompt('Enter row count: ');
// for (let i = 1; i <= row; i++){
//     let char = 'A';
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(char + ' ');
//         char = String.fromCharCode(char.charCodeAt(0) + 1); // Increment character
//     }
//     process.stdout.write('\n');
// }




/* Q. Inverted Right Angle Triangle
* * * * * 
* * * *
* * *
* *
*

*/
// let prompt = require('prompt-sync')();
// let row = prompt('Enter row count: ');
// for (let i = row; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write('* ');
//     }
//     process.stdout.write('\n');
// }




/* Q. Isosceles Pattern Triangle
     * 
    * *
   * * *
  * * * *
 * * * * *
 */
// let prompt = require('prompt-sync')();
// let row = prompt('Enter row count: ');
// for (let i = 1; i<= row; i++) {
//     for( let j = row; j>= i; j--) {
//         process.stdout.write(' ');
//     }
//     for (let k = 1; k <= i; k++) {
//         process.stdout.write('* ');
//     }
//     process.stdout.write('\n');

// }




/* Q. Mirror right angle traingle

      *
    * *
  * * *
* * * *
*/
// let prompt = require('prompt-sync')();
// let row = prompt('Enter row count: ');
// for(let i = 1; i <= row; i++) {
//      for (let j = 1; j <= row - i; j++) {
//             process.stdout.write('  ');
//      }
//      for(let k = 1; k <= i; k++) {
//           process.stdout.write('* ');
//      }
//      process.stdout.write('\n');
// }





/* Q. X pattern 
*       * 
  *   *
    *
  *   *
*       *

*/
// let prompt = require('prompt-sync')();
// let row = prompt('Enter row count: ');
// for (let i = 0; i < row; i++) {
//   for (let j = 0; j< row; j++) {
//     if ( j === i || j === row - i - 1) {
//       process.stdout.write('* ');
//     }
//     else {
//       process.stdout.write('  ');
//     }
//   }
//   process.stdout.write('\n');
// }






/* Q.
*         *
 *       *
  *     *
   *   *
    * *
     *
*/
/* Method 1 */
// let prompt = require('prompt-sync')();
// let row = prompt('Enter row count: ');

// for (let i = 1; i <= row; i++) {
//   for (let j = 1; j <= row * 2 - 1; j++) {
//     if (j === i || j === (row * 2 - i)) {
//       process.stdout.write('*');
//     } else {
//       process.stdout.write(' ');
//     }
//   }
//   process.stdout.write('\n');
// }

/* Method 2 */
// let prompt = require('prompt-sync')();
// let row = prompt('Enter row count: ');

// for (let i = 1; i <= row; i++) {
//   for (let j = 1; j <= row * 2 - 1; j++) {
//     if (j === i || i + j === row * 2) {
//       process.stdout.write('*');
//     } else {
//       process.stdout.write(' ');
//     }
//   }
//   process.stdout.write('\n');
// }