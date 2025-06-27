/** Task 1 */
/* 1. Age Category Message – Ask the user for their age. If they are under 18, print “You are a minor.” If they are between 18 and 60, print “You are an adult.” If they are above 60, print “You are a senior citizen.” */

// let age = prompt("Enter your age:");

// if (age < 18 && age >= 0) {
//     console.log('You are a minor.');   
// }

// else if (age >= 18 && age < 60) {
//     console.log('You are an adult.');
// }

// else if (age >= 60) {
//     console.log('You are a senior citizen.');
    
// }
// else {
//     console.log('Enter your age, again!');
    
// }



/*2. Even or Odd Sum – Take two numbers from the user using prompt(). If the sum of both numbers is even, print “Even Sum”; otherwise, print “Odd Sum.” */

// let num1 = Number(prompt("Enter first value:"));
// let num2 = Number(prompt("Enter second value:"));
// let sum = num1 + num2;

// if (sum % 2 === 0) {
//     console.log('Sum of',num1,'+',num2,'is',sum,'\n the sum is EvenSum.');
// }
// else {
//         console.log('Sum of',num1,'+',num2,'is',sum,'\n the sum is OddSum.');
// }



/*3.  Character Case Checker – Ask the user for a single character. Check if it's uppercase, lowercase, or neither (not a letter). */

// let character = prompt("Enter single character:");
// let store = character.charCodeAt(0);
// // console.log(String.fromCharCode(character));

// if (store >= 97 && store <= 122 ) {
//  console.log("it's Lowercase.");
// }
// else if (store >= 65 && store <= 90) {
//  console.log("it's Uppercase.");
// }
// else {
//  console.log("it's not a letter.");
// }



/*4. Largest of Three Numbers – Take three numbers as input and print the largest number among them without using Math.max(). */

// let num1 = Number (prompt("Enter first value:"));
// let num2 = Number (prompt("Enter second value:"));
// let num3 = Number (prompt("Enter third value:"));

// if (num1 > num2 && num1 > num3) {
//     console.log(num1,'is largest number.');
// }

// else if (num2 > num1 && num2 > num3) {
//     console.log(num2,'is largest number.');
// }

// else if (num3 > num1 && num3 > num2) {
//     console.log(num3, 'is largest number.');
// }
// else if (num1 === num2 && num1 === num3) {
//     console.log('all numbers are equal.');
// }
// else {
//     console.log('Enter valid! Input.');
// }




/* Q5. Leap Year Checker – Ask the user for a year and determine if it's a leap year or not. */

// let year = Number(prompt('Enter Year:'));
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(year,'is a Leap Year.');
// }

// else {
//     console.log(year,'is not a Leap Year.');
// }




/* Q6. Simple Calculator – Ask the user for two numbers and an operator (+, -, *, /). Perform the operation and display the result. */

// let num1 = Number(prompt("Enter first value:"));
// let num2 = Number(prompt("Enter second value:"));
// let op = prompt("Enter operator(+,-,*,/,%):");
// if (op === '+'){
//     console.log(num1 + num2);
// }
// else if (op === '-') {
//     console.log(num2 - num1);
// }
// else if (op === '/') {
//     console.log(num1/num2);
// }

// else if (op === '*') {
//     console.log(num1 * num2);
// }
// else if (op === '%') {
//     console.log(num1 % num2);
// }
// else {
//     console.log('Enter value inputs!');
    
// }




/* Q7. Positive, Negative, or Zero – Take a number input and check if it is positive, negative, or zero. */

// let num = prompt("Enter integer:");

// if (num < 0) {
//     console.log(num,'is Negative value.');
// }
// else if (num > 0) {
//     console.log(num, 'is Positive value');
// }
// else if (num == 0) {
//     console.log(num, 'is zero value.');
// }
// else {
//     console.log('Invalid! input');
// }



/* Q8. User Greeting – Ask for the user's name and time (24-hour
format). Greet them accordingly:

5 AM–12 PM: "Good Morning, [Name]!"
12 PM–5 PM: "Good Afternoon, [Name]!"
5 PM–9 PM: "Good Evening, [Name]!"
9 PM–5 AM: "Good Night, [Name] */

// let username = prompt("Enter your name:");
// let time = prompt('Enter time in (24-hours) format:');

// if (time >= 5 && time < 12) {
//     console.log(username, 'Good Morning.');
// }
// else if (time >= 12 && time < 17) {
//     console.log(username,'Good Afternoon.');
// }
// else if (time >= 17 && time < 21) {
//     console.log(username, 'Good Evening.');
// }
// else {
//     console.log('Good Night.');
// }



/* Q9. Traffic Light System – Ask the user for a traffic light color (red,
yellow, green). Print appropriate messages:

Red: "Stop!"
Yellow: "Get Ready!"
Green: "Go!" */

// let light = prompt("Enter a traffic light color:");
// if (light === 'red'){
//     console.log('Red: "Stop!"');
// }
// else if (light === 'yellow'){
//     console.log('Yellow: "Get Ready!"');
// }
// else if (light === 'green') {
//     console.log('Green: "GO!"');
// }
// else {
//     console.log('Enter value input!');
// }




/* Q10. Multiplication Table – Ask the user for a number and print its multiplication table up to 10. */

// let num = Number(prompt("Enter number:"));

// for (let i = 1; i<= 10; i++) {
//     console.log(num,'x',i,'=', num*i);
// }
// console.log('~END');




/* Q11.  Grade Calculator – Ask the user for their marks (0-100).
Assign grades based on the range:

90-100: A
80-89: B
70-79: C
60-69: D
Below 60: F */

// let marks = Number(prompt("Enter your marks:"));
// if (marks <= 100 && marks >=90) {
//     console.log('You got Grade A');
// }
// else if (marks <= 89 && marks >= 80) {
//     console.log('You got Grade B');
// }
// else if (marks <= 79 && marks >= 70) {
//     console.log('You got Grade C');
// }
// else if (marks <= 69 && marks >= 60) {
//     console.log('You got Grade D');
// }
// else if (marks <60 && marks >=0) {
//     console.log('You got Grade E, Reappear.');
// }
// else {
//     console.log('Enter valid! input.');
    
// }



/* Q12. Simple Login System – Set a predefined username and password. Ask the user to enter their credentials using prompt(). If correct, print “Login Successful”; otherwise, print “Incorrect username or password.” */


// let username = 'sudhanshu@1';
// let password = '123456780';

// let checkuser = prompt("Enter your username:");
// let checkPassword = prompt("Enter your password:");

// if ((username === checkuser) && (password === checkPassword)){
//     console.log('Login Successful.');
// }
// else {
//     console.log('Incorrect! username & password');
// }



/* Q13. Swapping Without Third Variable – Take two numbers from the user and swap their values without using a third variable. */

// let num1 = Number(prompt("Enter first value:"));
// let num2 = Number(prompt("Enter second value:"));

// console.log('Before swapping:',num1, num2);
// num1 = num1 + num2;
// num2 = num1 - num2;
// num1 = num1 - num2;
// console.log('After swapping:',num1, num2);



/* Q14. FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if only 5, print “Buzz”; otherwise, print the number itself. */

// let num = Number(prompt("Enter num."));

// if ((num % 3 === 0) && (num % 5 === 0)) {
//     console.log('FizzBuzz');
// }
// else if (num % 3 === 0) {
//     console.log('Fizz');
// }
// else if (num % 5 === 0) {
//     console.log('Buzz');
// }
// else {
//     console.log('Default!');
// }



/* Q15. Number Reversal – Take a three-digit number from the user and print its reverse. (Example: 123 → 321). */

// let num = Number(prompt("Enter any three-digit number:"));
// console.log('You Entered:', num);
// let rev = 0;
// while (num > 0) {
//     let r = num % 10;
//     rev = rev * 10 + r;
//     num = Math.floor(num / 10);
// // console.log(num, rev);
// }
// console.log('After Reversed:',rev)



/* Q 16. Sum of Digits – Take a number from the user and print the sum of its digits.(Example: 123 → 1+2+3 = 6). */

// let num = Number(prompt("Enter any digit numbers:"));

// let sum = 0;
// while (num > 0) {
//     let r = num % 10;
//     sum = sum + r;
//     num = Math.floor(num / 10);
// }
// console.log('sum is',sum);



/* Q 17. Palindrome Checker – Ask the user for a word. Check if it
reads the same forward and backward. Print “Palindrome” or “Not a Palindrome.” */

// let word = prompt("Enter your word:");

// if (word === word.split('').reverse().join('')){
//     console.log('It is Palindrome');
// }
// else {
//      console.log('It is not Palindrome');
// }



/* Q19.  Find Second Largest – Take three numbers as input and find the second largest number (without using sort() or Math.max()). */

// let num1 = Number(prompt("Enter first value:"));
// let num2 = Number(prompt("Enter second value:"));
// let num3 = Number(prompt("Enter third value:"));

// if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)){
//     console.log(num1, 'is the second largest');
// }
// else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3) ){
//     console.log(num2, 'is the second largest');
// }
// else if ((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)){
//     console.log(num3, 'is the second largest');
// }
// else {
//     console.log('Enter valid! input');
// }



/* Q20. Find First Non-Repeating Character – Ask the user for a word and find the first character that does not repeat. Example: hello → h (since e, l, and o repeat). */

