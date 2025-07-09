/** Do-while Loop */

/* Q. Guess the number */
// let comp = Math.floor(Math.random() * 100) + 1;

// let userInput;
// do {
//     userInput = Number(prompt("Guess the number in b/w 1 to 100"))
//     if (isNaN(userInput) || userInput < 0 || userInput > 100) {
//         console.log('Please enter valid number.');
//         continue
//     }

//     if (userInput > comp) console.log('too high, try again.');
//     else if (userInput < comp) console.log('too low, try again.');
//     else console.log('Congrats 🔥 and number was', comp);
// }
// while (userInput !== comp);

/* Q. sasta Calculator */

// let userInput;
// do {
//   let num1 = Number(prompt("Enter a first number:"));
//   let num2 = Number(prompt("Enter a second number:"));
//   let operator = prompt("Enter valid operator (+, -, *, /):");

//   switch (operator) {
//     case "+":
//       console.log("result", num1 + num2);
//       break;
//     case "-":
//       console.log("result", num1 - num2);
//       break;
//     case "*":
//       console.log("result", num1 * num2);
//       break;
//     case "/":
//       if (num2 !== 0) console.log("result", num1 / num2);
//       else console.log("Please enter valid number");
//       break;
//   }
//   userInput = prompt("Kya aap dubara chalao ga ? yes/no").toLowerCase();
// } while (userInput === "yes");


/**Assignment */

/* Q.Project restruant  */





/* Q1. ISBN Number
Description: An ISBN (International Standard Book Number) is a unique 10-digit number assigned to books. The ISBN is valid if the sum of its digits, each multiplied by its position (1 to 10), is divisible by 11.
Example: Input: 020131452
 Output: Invalid ISBN
 Explanation: The sum of the digits multiplied by their positions is not divisible by 11.
 Input: 0471958697
 Output: Valid ISBN
 Explanation: (0×1 + 4×2 + 7×3 + … + 7×10) is divisible by 11.

Hint: Use a loop to multiply each digit by its respective position and check 
divisibility by 11 */

// let userInput = Number(prompt('Enter ISBN:'));
// let copy = userInput;
// let mul = 1;
// let sum = 0;
// for (let i = 10; i > 0; i--) {
//     let r = userInput % 10;
//     mul = r * i;
//     sum += mul;
//     let q = Math.floor(userInput / 10);
//     userInput = q;
// }
// if (sum % 11 === 0) console.log('Valid ISBN', copy);
// else console.log('Invalid ISBN', copy);
 


/* Q2. HCF/GCD

Description: The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two numbers is the largest number that divides both numbers without leaving a remainder.
Example: Input: a = 12, b = 1,
Output: 6
Explanation: Factors of 12: {1,2,3,4,6,12}, Factors of 18: {1,2,3,6,9,18}. 
Common factors: {1,2,3,6}. The highest is 6.

Hint: Use the Euclidean algorithm: GCD(a, b) = GCD(b, a % b) */

// let a = Number(prompt('Enter first value:'));
// let b = Number(prompt('Enter second value:'));

// while ( b != 0) {
//     let temp = a;
//     a = b;
//     b = temp % b;
// }
// console.log('GCD is', a);




/* Q3. Harshad Number
Description: A number is a Harshad number if it is divisible by the sum of its digits.
Example: Input: 18
Output: Harshad Number
Explanation: Sum of digits (1 + 8) = 9, and 18 is divisible by 9.

Hint: Extract digits using modulo (%) and integer division (//). */

// let userInput = Number(prompt('Enter number:'));
// let copy = userInput;
// let sum = 0;
// while ( userInput > 0) {
//     let r = userInput % 10;
//     let q = Math.floor(userInput / 10);
//     sum += r;
//     userInput = q;
// }
// if (copy % sum === 0) {
//     console.log(copy,'Harshad Number');
// }
// else console.log(copy,'Its not Harshad Number.');




/* 4. Perfect Square
Description: A number is a perfect square if it is the square of an integer.
Example: Input: 25
Output: Perfect Square
Explanation: 5 × 5 = 25.

Hint: Use sqrt(N), check if it’s an integer. */


// let num = Number(prompt('Enter number:'));

// if (Number.isInteger(Math.sqrt(num))){
//     console.log(num, 'Perfect Square.');
// }
// else console.log(num, 'Not a Perfect! square.');



/* Q5. Abundant Number
Description: A number is abundant if the sum of its proper divisors is greater than the number itself.
Example: Input: 12
Output: Abundant Number
Explanation: Proper divisors: 1, 2, 3, 4, 6 → Sum = 16 (greater than 12).

Hint: Use a loop to find proper divisors. */

// let num = Number(prompt('Enter number:'));
// let sum = 0;
// if (!isNaN(num) && num > 0){
//     num = Math.floor(num);
//     for (let i = 1; i <= num/2; i++) {
//     if (num % i === 0) {
//         sum += i;
//     }
// }
// if (sum > num) console.log(num,'Abundant Number');
// else console.log(num,'Not Abundant Number');
// } 
// else console.log('Enter valid!');



/* 6. Fibonacci Series using Loop
Description: Print Fibonacci series up to N terms using a loop.
Example: Input: N = 6
Output: 0, 1, 1, 2, 3, 5

Hint: Use a loop and store previous two numbers. */

// let userInput = Number(prompt('Enter nth number:'));
// let a = 0, b = 1;
// console.log(a);
// console.log(b);

// for (let i = 2; i < userInput; i++) {
//     let next = a + b;
//     console.log(`Fibonacci series upto ${userInput} is ${next}`);
//     a = b;
//     b = next;
// }



/* Q7. Find Numbers with Exactly X Divisors (Java)

Description: Find numbers that have exactly X divisors.

Example: Input: X = 3
Output: 4, 9, 25, 49
Explanation: These numbers have exactly three divisors.

Hint: Use prime factorization */

// let userInput = Number(prompt('Enter value of X:'));
// let N = 100;

// function countDivisors(n) {
//     let count = 0;
//     for (let i = 1; i * i <= n; i++) {
//         if (n % i === 0) {
//             count++;
//             if (i !== n / i) count++;
//         }
//     }
//     return count;
// }

// console.log(`Numbers with exactly ${userInput} divisors:`);

// for (let i = 1; i <= N; i++) {
//     if (countDivisors(i) === userInput) {
//         console.log(i);
//     }
// }



/* Q9. Calculate Area using Switch Statement
Description: Find the area of a circle, rectangle, or triangle using switch.
Example: Input: Choice = Circle, Radius = 5
Output: Area = 78.5

Hint: Use switch with case statements */


// let pattern = Number(prompt('Enter Number only:\n 1.Circle  2.Rectangle  3.Triangle'));
// let area = 1;
// switch(pattern){
//     case 1:
//         let r = Number(prompt('Enter radius value:'));
//         area = (Math.PI * Math.pow(r, 2)).toFixed(2);
//         console.log('Area of circle is', area);
//         break;
//     case 2:
//         let length = Number(prompt('Enter length value:'));
//         let width = Number(prompt('Enter width value:'));
//         area = (length * width).toFixed(2);
//         console.log('Area of rectangle is', area);
//         break;

//     case 3:
//         let base = Number(prompt('Enter base value:'));
//         let height = Number(prompt('Enter height value:'));
//         area = ((height * base) / 2).toFixed(2);
//         console.log('Area of triangle:', area);
//         break;
//     default:
//         console.log('Enter valid! only.'); 
// }




/* Q10. Neon Number
Description: A number where the sum of digits of its square equals the number itself.
Example: Input: 9
Output: Neon Number
Explanation: 9² = 81, sum of digits = 9.

Hint: Find square, sum digits, compare. */



/* Q11. Sum of Even Indexed Fibonacci Numbers
Description: Find the sum of Fibonacci numbers at even indices up to the 2Nth Fibonacci number.

Example: Input: N = 4
Output: 33

Hint: Use a loop and maintain a sum for even-indexed elements. */