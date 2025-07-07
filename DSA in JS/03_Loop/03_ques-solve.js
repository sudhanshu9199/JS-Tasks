/* Q. One to n number and vice versa */
// let n;
// for(n = 0; n< 10; n++) {
//     console.log(n);
// }

// let n;
// for(n = 10; n > 0; n--) {
//     console.log(n);
// }

/* Q. Sum of n natural numbers. */
// let input = prompt("Enter 'n' number");
// // console.log("Input: " + input);

// if (input === null) {
//     console.log('Cancelled!');
// }
// else{
//     let n = Number(input);
//     if (isNaN(n)) {
//   console.log("Kindly enter number only!");
// } else {
//   if (n <= 0) {
//     console.log("Enter positive number and greater than 0");
//   } else {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     console.log(`Sum of ${n} natural number is ${sum}`);
//   }
// }
// }

/* Q. Find n number of factorial */
/** Method 1 */
// let input = prompt("Enter 'n' number");
// if (input === null) {
//   console.log("Cancelled!");
// } else {
//   let n = Number(input);
//   if (isNaN(n)) {
//     console.log("kindly enter number only!");
//   }
//   else if (n === 0) {
//     console.log(`Factorial of ${n} is 0`);

//   } else {
//     if (n > 0) {
//         let fact = 1;
//     for (let i = 1; i <= n; i++) {
//       fact *= i;
//     }
//     console.log(`Factorial of ${n} is ${fact}`);
//     }
//     else {
//         console.log('Enter positive numbers only.');

//     }
//   }
// }

/* Method 2 */
// let n = +prompt("Enter 'n' number");
// if (n != n) console.log('Kindly enter number only!');
// else if (n === 0) console.log(`Factorial of ${n} is 0`);
// else if (n < 0) console.log('Enter positive numbers only.');
// else{
//     let fract = 1, i = 1;
//     while (i <=n) fract *= i++;
//     console.log(`Factorial of ${n} is ${fract}`);

// }

/*Q. Factors of number */
// let input = +prompt("Enter number to find factors"); // 12
// if (input != input) console.log("Kindly enter number only!");
// else if (input === 0) console.log(`Factors of ${input} is 0`);
// else if (input < 0) console.log("Enter positive numbers only.");
// else {
//   for (let i = 1; i <= Math.floor(input / 2); i++) {
//     if (input % i === 0) {
//       console.log(`Factors of ${input} is ${i}`);
//     }
//   }
//   console.log(`Factors of ${input} is ${input}`);
// }

/* Find number is prime or not prime */
// let n = +prompt("Enter number to find");
// if (isNaN(n)) {
//     console.log('Invalid input!');
// }
// else {
//     if ( n < 0) console.log('Enter positive numbers only.');
//     else{
//         console.log(`${n} is ${isPrime(n) ? 'prime' : 'not prime'} number.`);
//     }
// }

// function isPrime(n) {
//     if (n <= 1) return false; // 0 or 1 are not prime ✅
//     if (n === 2) return true; // 2 is prime ✅
//     if (n % 2 === 0) return false; // Even numbers not prime ❌ (except 2)

//     // Odd number ke liye:
//     for(let i = 3; i <= Math.sqrt(n); i += 2) {
//         if (n % i === 0) return false; // If divisible, not prime ❌
//     }
//     return true; // If none divided, then it's prime ✅
// }

/** 🗣️ Final Desi Dialogue:
Bhai, true ka matlab hota hai: “Ha bhai, ye number toh prime hai!”
Aur false ka matlab: “Na bhai, iske toh chhupke divisors mil gaye, ye prime nahi hai!” */




/** While loop
 Q. Sum of digit
 */
// let n = +prompt("Enter digits to do sum");
// let sum = 0;
// if(isNaN(n) || !Number.isInteger(n)) console.log('Kindly enter number only!');

// else {
//     n = Math.abs(n); // Convert to positive if negative
//     while (n !== 0) {
//     sum += n % 10;
//     n = Math.floor(n/10);
// }
// console.log('Sum of digits is:', sum);
// }




/* Q. Reverse of number */
// let n = +prompt("Enter number to reverse");

// if (isNaN(n) || !Number.isInteger(n)) console.log("Kindly enter number only!");
// else {
//   n = Math.abs(n);
//   let rev = 0;
//   while (n !== 0) {
//     let rem = n % 10;
//     rev = rev * 10 + rem;
//     n = Math.floor(n / 10);
//   }
//   console.log("Reverse of number is:", rev);
// }




/* Q. Strong number */
// let input = +prompt("Enter number to check strong number");
// let n = input;
// if (isNaN(n) || !Number.isInteger(n)) {
//     console.log("Kindly enter number only!");
// } else {
//     n = Math.abs(n);
//     let sum = 0;
//     while (n !== 0) {
//         let rem = n % 10;
//         let fact = 1;
//         let i = 1;
//         while (i <= rem) {
//             fact *= i;
//             i++;
//         }
//         sum += fact;
//         n = Math.floor(n / 10); 
//     }
//     console.log(`${input } is ${sum === input ? "strong" : "not strong"} number.`);
// }





/** Do-while
 Q. Repeat hello */
// let word;
// do {
//     word = prompt("Enter Guess word to stop repeating 'hello'");
//     console.log('Hello');
// }
// while (word !== 'stop' && word !== null);
// console.log('Stopped repeating hello!');



/* Q. Guess the number */
// let randomNo = Math.floor(Math.random() * 100) + 1;
// // console.log(randomNo); // debug


// let guess = null;

// while (guess !== randomNo) {
//     let input = prompt("🎯 Guess a number between 1 and 100:");
//     if (input === null) {
//         console.log("Game cancelled!");
//         break;
//     }
//     guess = +input;

//     if (isNaN(guess) || guess < 1 || guess > 100) {
//         console.log('❌ Invalid! Enter a number between 1 and 100.');
//         continue;
//     }
//     if (guess > randomNo) {
//         console.log('📉 Too high! Try again.');
//     }
//     else if (guess < randomNo) {
//         console.log('📈 Too low! Try again.');
//     } else {
//         console.log(`🎉 Congratulations! You guessed the number ${randomNo} correctly!`);
//     }
// }




/* Q. Guess the number with tracking the attempt */
// let randomNo = Math.floor(Math.random() * 100) + 1;

// let guess = null;
// let attempt = 0;

// while (guess !== randomNo || attempt !== 5) {
//     let input = prompt("🎯 Guess a number between 1 and 100:");
//     if (input === null) {
//         console.log("Game cancelled!");
//         break;
//     }
//     guess = +input;

//     if (isNaN(guess) || guess < 1 || guess > 100) {
//         console.log('❌ Invalid! Enter a number between 1 and 100.');
//         continue;
//     }
//     if (guess > randomNo) {
//         console.log('📉 Too high! Try again.');
//     }
//     else if (guess < randomNo) {
//         console.log('📈 Too low! Try again.');
//     } else {
//         console.log(`🎉 Congratulations! You guessed the number ${randomNo} correctly!`);
//     }
//     attempt++;
//     if (attempt === 5) {
//         console.log(`❗ You've used all attempts! The number was ${randomNo}.`);
//         break;
//     }
// }





/** Q. Sasta Calculator */
    // let op;
    // while (op !== 'exit') {
    //     op = prompt("Enter operation (+, -, *, /) or 'exit' to quit:");
    //     if (op === null || op === 'exit') {
    //         console.log("Exiting calculator. Goodbye!");
    //         break;
    //     }
    //     else {
    //         let num1 = +prompt("Enter first number:");
    //     let num2 = +prompt("Enter second number:");
    //     if (isNaN(num1) || isNaN(num2)) {
    //         console.log("❌ Invalid input! Please enter valid numbers.");
    //     }
    //     else {
    //         let result;
    //         switch (op) {
    //             case '+':
    //                 result = num1 + num2;
    //                 console.log(`Result: ${num1} + ${num2} = ${result}`);
    //                 break;
    //             case '-':
    //                 result = num1 - num2;
    //                 console.log(`Result: ${num1} - ${num2} = ${result}`);
    //                 break;
    //             case '*':
    //                 result = num1 * num2;
    //                 console.log(`Result: ${num1} x ${num2} = ${result}`);
    //                 break;
    //             case '/':
    //                 result = num1 / num2;
    //                 console.log(`Result: ${num1} / ${num2} = ${result}`);
    //                 break;
    //             default:
    //                 console.log("❌ Invalid operation! Please enter +, -, *, or /.");
    //                 break;
    //         }
    //     }
    //     op = prompt("2Enter operation 'Continue' or 'exit' to quit:");
    //     if (op === null) {
    //         console.log("❗ Operation cancelled.");
    //         break;
    //     } else if (op === 'exit') {
    //         console.log("See you next time! 👋");
    //         break;
    //     }
    //     }
    // }

/* Short with */
// let op;
// while (op !== 'exit') {
//     op = prompt("Enter operation (+, -, *, /) or 'exit' to quit:")?.trim();
    
//     if (op === null || op === 'exit') {
//         console.log("Exiting calculator. Goodbye! 👋");
//         break;
//     } else {
//         let num1 = +prompt("Enter first number:");
//         let num2 = +prompt("Enter second number:");

//         if (isNaN(num1) || isNaN(num2)) {
//             console.log("❌ Invalid input! Please enter valid numbers.");
//         } else {
//             let result;
//             switch (op) {
//                 case '+':
//                     result = num1 + num2;
//                     console.log(`Result: ${num1} + ${num2} = ${result}`);
//                     break;
//                 case '-':
//                     result = num1 - num2;
//                     console.log(`Result: ${num1} - ${num2} = ${result}`);
//                     break;
//                 case '*':
//                     result = num1 * num2;
//                     console.log(`Result: ${num1} x ${num2} = ${result}`);
//                     break;
//                 case '/':
//                     if (num2 === 0) {
//                         console.log("❌ Division by zero is not allowed.");
//                     } else {
//                         result = num1 / num2;
//                         console.log(`Result: ${num1} / ${num2} = ${result}`);
//                     }
//                     break;
//                 default:
//                     console.log("❌ Invalid operation! Please enter +, -, *, or /.");
//                     break;
//             }
//         }
//     }
// }
// console.log("Thank you for using the Sasta Calculator! 😊");
