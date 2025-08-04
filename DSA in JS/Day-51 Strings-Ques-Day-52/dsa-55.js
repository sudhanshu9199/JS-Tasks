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

let arr = [22, 22, 4,5,88,4,74,57,5];
let result = 0;
for (let num of arr){
    result = result ^ num;
}
console.log(result);



/*
Session 18:
-Bitwise operator
-Q 70.Swap two integers without using third variable
-
-Q 72.check if the is power of 2 */

/**Q 71.check even or odd */
// let n = 25;
// console.log((n&1) === 0 ? 'even' : 'Odd');