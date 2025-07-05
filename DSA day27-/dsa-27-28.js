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

let num1 = Number(prompt('Enter first number:'));
let num2 = Number(prompt('Enter second number:'));
let num3 = Number(prompt('Enter third number:'));

if ((num1 > num2) && (num1 > num3)) {
    console.log(num1, 'is greater then others.');
}
else if ((num2 > num1) && (num2 > num3)) {
    console.log(num2, 'is greater then others.');
}
else if ((num3 > num1) && (num3 > num2)) {
    console.log(num3, 'is greater then others.');
}
else if ((num1 === num2) || (num2 === num3)) {
    console.log('All numbers are equal.');   
}
else {
    console.log('Enter valid number!');
}


/* Q.Accept a year and check if it a leap year or not (google to find out what's a leap year) */


/* 



Q.Shop discount - Description on Graphic
Q.Bijli Bill - Description on Graphic */