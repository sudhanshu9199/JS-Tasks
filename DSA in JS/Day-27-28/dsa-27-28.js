// let a = 10;
// let b = 20;

// console.log('Sum of '+ a + ' and '+ b + ' is '+ (a + b)); // Sum of 10 and 20 is 30
// console.log('Sum of '+ a + ' and '+ b + ' is '+ a + b); // Sum of 10 and 20 is 1020
// console.log(a + b + 'Sum of '+ a + ' and '+ b + ' is '); // 30 Sum of 10 and 20 is
// console.log('Sum of ', a , ' and ', b , ' is ', a + b); // Sum of 10 and 20 is 30

// let a = 4, b = 10;

// console.log(a % b);

/** DAY 2 */

// console.log(Math.ceil(10.2)); // 11
// console.log(Math.ceil(10.8)); // 11

// console.log(Math.floor(10.8)); // 10
// console.log(Math.floor(10.1)); // 10

// console.log(Math.round(10.5)); // 11
// console.log(Math.round(10.2)); // 10
// console.log(Math.round(10.8)); // 11

// console.log(Math.abs(-8)); // 8
// console.log(Math.abs(8)); // 8

// console.log(Math.trunc(18.8517394)); // 18
// console.log(Math.trunc(18.2585517394)); // 18

// console.log(Math.pow(5, 2)); // 25
// console.log(Math.pow(2, 4)); // 16

// console.log(Math.sqrt(40)); // 6.324555320336759
// console.log(Math.sqrt(4)); // 2

// console.log(Math.cbrt(27)); // 3
// console.log(Math.cbrt(7)); // 1.9129311827723892

// console.log(Math.max(10, 58, 92, 75)); // 92
// console.log(Math.min(10, 58, 92, 75)); // 10
// console.log(Math.min(2, 0, -3, 5, -7)); // -7

// console.log(Math.random()); // output: random number b/w 0 - 1

// let a = 234.85926;
// console.log(a.toFixed(2)); // 234.84
// console.log(Number(a.toFixed(3))); // 234.859

/** Math problems: */
/* Q.calculate compound interest */
// // A = p * ( 1 + r / 100 ) ^ t
// // cp => A - P => p * ( 1 + r / 100 ) ^ t - P;

// let p = Number(prompt('Enter Principle:'));
// let r = Number(prompt('Enter a rate:'));
// let t = Number(prompt('Enter a time:'));

// console.log(p * Math.pow(1 + r / 100, t) - p); // A - P

/* Q.Generate OTP */
// console.log('Your OTP:',Math.floor(Math.random() * 9000 + 1000)); // b/w - 1000 To 9999

/* Q.area of triangle by heron's formula */
// // s = (a + b + c) / 2
// //  = sqrt of s * (s - a) * (s - b) * (s - c)

// let a = Number(prompt("Enter a number for a:"));
// let b = Number(prompt("Enter a number for b:"));
// let c = Number(prompt("Enter a number for c:"));

// if (a + b <= c || a + c <= b || b + c <= a) {
//     console.log('not Possible.');
// }
// else {
//     let s = (a + b + c) / 2;
//     console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
// }

/* Q.Circumference of circle */

// let r = Number(prompt("Enter radius number:"));

// console.log((2 * Math.PI * r).toFixed(2));

/* Q.Accept two numbers and print the greatest between them */

// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));

// if (num1 > num2) console.log(num1,'is greatest number');
// else if ( num2 > num1) console.log(num2, 'is greater number');
// else {
//     console.log('Enter valid!');

// }

/* Q.Accept an integer and check whether it is an even number or odd. */

// let num = Number(prompt("Enter number:"));
// if (num % 2 === 0) console.log(num,'is even number.');
// else {
//      console.log(num,'is odd number.');
// }

/* Q.Accept name and age from the user. Check if the user is a valid voter or not. */

// let user = prompt("Enter name:");
// let age = Number(prompt("Enter age:"));

// if (age > 18){
//     console.log(user,', you are a valid voter');
// }
// else {
//     console.log(user, ', you are not a valid voter');

// }

/* Q.Accept three numbers and print the greatest among them */

// let num1 = Number(prompt('Enter first number:'));
// let num2 = Number(prompt('Enter second number:'));
// let num3 = Number(prompt('Enter third number:'));

// if ((num1 > num2) && (num1 > num3)) {
//     console.log(num1, 'is greater then others.');
// }
// else if ((num2 > num1) && (num2 > num3)) {
//     console.log(num2, 'is greater then others.');
// }
// else if ((num3 > num1) && (num3 > num2)) {
//     console.log(num3, 'is greater then others.');
// }
// else if ((num1 === num2) || (num2 === num3)) {
//     console.log('All numbers are equal.');
// }
// else {
//     console.log('Enter valid number!');
// }



/* Q.Accept a year and check if it a leap year or not (google to find out what's a leap year) */

// let year = Number(prompt("Enter year:"));
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log(year, "is leap year.");
//     } else {
//       console.log(year, "is not a leap year.");
//     }
//   } else {
//     console.log(year, "is leap year.");
//   }
// } else {
//   console.log(year, "is not a leap year.");
// }
/**OR */

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(year, 'is leap year.');
// }
// else {
//     console.log(year, 'is not a leap year.');
    
// }



/* Q.Shop discount - Description on Graphic */

// let amount = Number(prompt("Enter the amount:"));
// let discount = 0;
// if (amount > 0 && amount <= 5000) {
//     discount = amount * 0;
//     console.log(amount - discount);
// }
// else if (amount >= 5001 && amount <= 7000) {
//     discount = amount * (5/100);
//     console.log(amount - discount);
// }
// else if (amount >= 7001 && amount <= 9000) {
//     discount = amount * (10/100);
//     console.log(amount - discount);
// }
// else if (amount > 9000) {
//     discount = amount * (20/100);
//     console.log(amount - discount);
// }
// else {
//     console.log('Enter valid! number only.');
// }
/**OR */
// if (amount >= 0 && amount <= 5000) discount = 0;
// else if (amount >= 5001 && amount <= 7000) discount = 5;
// else if (amount >= 7001 && amount <= 9000) discount = 10;
// else if (amount > 9000) discount = 20;
// else console.log('invalid input!');

// console.log(amount - (discount * amount) / 100);




/* Q.Bijli Bill - Description on Graphic */

// let unit = Number(prompt("Enter your unit:"));
// let amount = 0;

// if (unit >=0 && unit <= 100) {
//     amount = unit * 4.2;
// }
// else if (unit >= 101 && unit <= 200) {
//     amount = (100 * 4.2) + ((unit - 100) * 6);
// }
// else if (unit >= 201 && unit <= 400) {
//     amount = (100 * 4.2) + (100 * 6) + ((unit - 200) * 8);
// }
// else if (unit > 400) {
//     amount = (100 * 4.2) + (100 * 6) + (200 * 8) + ((unit - 400) * 13);
// }
// console.log('The total amount is:',amount+'rs.');
/* OR */
// if (unit > 400) {
//     amount = (unit - 400) * 13;
//     unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//     amount = amount + (unit - 200) * 8;
//     unit = 200;
// }
// if (unit > 100 && unit <=200) {
//     amount += (unit - 100) * 6;
//     unit = 100;
// }
// amount += unit * 4.2;
// console.log('The total amount is:',amount+'rs.');

