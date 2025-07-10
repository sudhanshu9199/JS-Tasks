/* Q39. Mirror right angle traingle
      *
    * *
  * * *
* * * *

*/

// let uinput = require("prompt-sync")();
// let ans = uinput("Enter row value: ");

// for (let i = 1; i <= ans; i++) {
//   for (let j = 1; j <= ans - i; j++) {
//     process.stdout.write("  ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }



/* Q20.
      *
     * *
    * * *
   * * * *
  * * * * *

 */

// let uinput = require("prompt-sync")();
// let ans = uinput("Enter row value: ");

// for (let i = 1; i <= ans; i++) {
//   for (let j = 1; j <= ans - i + 1; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write(" *");
//   }
//   console.log();
// }



/* Q22.
*       *
  *   *
    * 
  *   *
*       *   */

// let uinput = require("prompt-sync")();
// let ans = parseInt(uinput("Enter row value: "));
// for (let i = 1; i <= ans; i++) {
//     for (let j = 1; j <= ans; j++) {
//         if (i === j || i+j === ans + 1) {
//             process.stdout.write('* ')
//         }
//         else process.stdout.write('  ');
//     }
//     console.log();
    
// }



/* Q21.
*              *
  *          *
    *       *
      *   *
        *  
*/

// let uinput = require("prompt-sync")();
// let ans = parseInt(uinput("Enter row value: "));

// for (let i = 1; i <= ans; i++) {
//     for (let j = 1; j <= (ans * 2) -1; j++) {
//         if (i === j || j + i === (ans * 2)) process.stdout.write("* ");
//         else process.stdout.write('  ');
//     }
//     console.log();
    
// }