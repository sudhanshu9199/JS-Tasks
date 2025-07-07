/* Problems:
Q. let i = 11;
    i = i++ + ++i;
    console.log(i);
 */
// let i = 11;
// i = i++ + ++i;
// console.log(i); // wrong: 23 and correct: 24

/** Q2.
let a = 11; b = 22;
let c = a + b + a++ + b++ + ++a + ++b;
console.log("a=" + a);
console.log("b=" + b);
console.log("c=" + c);
 */
// let a = 11; b = 22;
// let c = a + b + a++ + b++ + ++a + ++b;
// console.log("a=" + a); // 13
// console.log("b=" + b); // 24
// console.log("c=" + c); // 103

/** Q3.
let b = true;
    b++;
    console.log(b);
 */
// let b = true;
// b++;
// console.log(b); // 2

/* Q4.
let a = 11++;
console.log(a);
 */
// let a = 11++;
// console.log(a); // error: because unary operator on the constant

/** Q5.
let i = 11;
let j = --(i++);
 */
// let i = 11;
// let j = --(i++); // error: because unary operator on the constant




/** Math problems: 
 Q. Calculate area & perimeter of rectangle
*/
// let length = 2; let breadth = 5;
// let area = length * breadth; let perimeter = 2 * (length + breadth);
// console.log("Area:", area) // 10
// console.log("Perimeter:", perimeter) // 14

/**
 Q. Area of triangle by heron's formula
 */
// // Formula: sqrt of s * (s-a) * (s-b) * (s-c)
// let a = 6, b= 4, c = 2
// let s = (a + b + c)/2
// console.log(s);
// console.log(Math.sqrt(s * (s-a) * (s-b) * (s-c))); // 0

/**Q. Circumference of Circle
 */
// // Formula: c = 2 * pi * radius
// let r = 12;
// console.log(Math.PI) // 3.14
// console.log(Number((2 * Math.PI * r).toFixed(2)));