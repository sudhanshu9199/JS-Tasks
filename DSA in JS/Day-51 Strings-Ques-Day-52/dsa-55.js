/* convert Decimal to Binary */
// let num = 45;
// let binary = '';
// while (num > 0) {
//     binary = (num % 2) + binary;
//     num = Math.floor(num / 2);
// }
// console.log(binary || '0');

/** convert Binary to Decimal */
// let bin = 1101;
// console.log(bin, 2);

/* Bitwise: &, \, ^ */
// let a = 5, b = 3; // 5->  0101, b-> 0011
// console.log(a & b); // 1 -> 
// console.log(a | b); // 7 -> 1011
// console.log(a ^ b); // 6 -> 110


/* Interview Application Example
Q: "Given an array where every element appears twice except one, find that single one." */

// let arr = [2, 3, 3, 4, 8, 4, 2];
// let result = 0;
// for (let num of arr){
//     result = result ^ num;
// }
// console.log(result);


// let a = 5, b = a << 1; // left shift
// console.log(b);

// let x = 10, y = x >> 1; // right shift
// console.log(y);

/**Pseudocode */
// // LEFT SHIFT PSEUDOCODE
// function leftShift(num, shiftBy):
//     return num * (2 ^ shiftBy)

// // RIGHT SHIFT PSEUDOCODE
// function rightShift(num, shiftBy):
//     return floor(num / (2 ^ shiftBy))


/**✅ Interview Questions
Find if a number is even/odd using (n & 1)

Multiply/divide without * or / using shifts

Count bits in a number using bit shifts
 */





/*
Session 18:
-Bitwise operator
-Q 70.Swap two integers without using third variable
-
- */

/**Q 71.check even or odd */
// let n = 25;
// console.log((n&1) === 0 ? 'even' : 'Odd');

/* Q 72.check if the is power of 2 */
// let n = 32;
// console.log((n & (n - 1)) === 0 ? 'Power of 2' : 'Not Power of 2');