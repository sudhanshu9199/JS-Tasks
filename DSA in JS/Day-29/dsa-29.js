/**Day- 29 - Assignment */

/* Q1. Problem Statement: Indian Currency Notes Breakdown You need to write a program where the user inputs an amount in Indian Rupees, and the program should output the number of currency notes required to make up that amount using the largest denominations first. Denominations Available (Indian Rupees): ₹2000, ₹500, ₹200, ₹100, ₹50, ₹20, ₹10, ₹5, ₹2, ₹1 */

// let amount = Number(prompt("Enter the amount in ₹:"));

// if (amount > 2000) {
//     console.log('2000rs. notes:', Math.floor(amount / 2000));
//     amount = amount % 2000;
    
// }
// if(amount > 500) {
//     console.log('500rs. notes:', Math.floor(amount / 500));
//     amount = amount % 500;
// }
// if(amount > 200) {
//     console.log('200rs. notes:',Math.floor(amount / 200));
//     amount = amount % 200;
// }
// if (amount > 100) {
//     console.log('100rs. notes:',Math.floor(amount/100));
//     amount = amount % 100;   
// }
// if (amount > 50) {
//     console.log('50rs. notes:',Math.floor(amount/50));
//     amount = amount % 50;
// }
// if (amount > 20) {
//     console.log('20rs. notes:',Math.floor(amount / 20));
//     amount = amount % 20;
// }
// if (amount > 10) {
//     console.log('10rs. notes:',Math.floor(amount / 10));
//     amount = amount % 10;
// }
// if (amount > 5) {
//     console.log('5rs. coins:',Math.floor(amount / 5));
//     amount = amount % 5;
// }
// if (amount > 2) {
//     console.log('2rs. coin:',Math.floor(amount/2));
//     amount = amount % 2;
// }
// if (amount > 1) {
//     console.log('1rs. coins :',Math.floor(amount/1));
//     amount = amount % 1;
// }


/* 2.Write a program to accept rating of the movie as double and Movie
name as String.
Check and print the category of movie based on rating.
Example -
INPUT
4.9
RRR
OP - RRR is a Super Hit. */

// let movie = prompt("Enter movie name:");
// let rating = Number(prompt('Give rate this movie:'));

// if (rating >= 0.0 && rating <= 2.0) {
//     alert(`${movie} is Flop.`);
// }
// else if (rating >= 2.1 && rating <= 3.4) alert(`${movie} is Semi-Hit.`);
// else if (rating >= 3.5 && rating <= 4.5) alert(`${movie} is Hit.`);
// else if (rating >= 4.6 && rating <= 5.0) alert(`${movie} is Super Hit.`);


//  Q3. Write a program to calculate the salary as per the following table.

// let gender = prompt('Enter your Gender:');
// let experience = Number(prompt('Enter your experience in number:'));
// let qualification = prompt('Enter your qualification:');

// if (gender === 'male' && qualification === 'post graduate' && experience >=10) console.log('Salary 15000rs.');

// else if ((gender === 'male' && qualification === 'graduate' && experience >=10) || (gender === 'male' && qualification === 'post graduate' && experience < 10) || (gender === 'female' && qualification === 'post graduate' && experience < 10)) console.log('Salary 10000rs.');

// else if ((gender === 'male' && qualification === 'graduate' && experience < 10)) console.log('Salary 7000rs.');

// else if (gender === 'female' && qualification === 'post graduate' && experience >=10) console.log('Salary 12000rs.');

// else if (gender === 'female' && qualification === 'graduate' && experience >=10) console.log('Salary 9000rs.');

// else if (gender === 'female' && qualification === 'graduate' && experience < 10) console.log('Salary 6000rs.');

// else {
//   console.log('Invalid input or no matching criteria.');
// }