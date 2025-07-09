/*
Session 3:
-Loop
-For loop */

/* Q1. Accept an integer and Print hello world n times */

// let count = Number(prompt("Enter counts:"));

// if (!isNaN(count)) {
//   for (let i = 1; i <= count; i++) {
//     console.log("Printed: Hello World.");
//   }
// }
// else {
//     console.log('Rinki ka papa hehehe hash dali');
// }

/* Q2. Print natural number up to n. */
// let count = Number(prompt('Enter count:'));

// for (let i = 1; i <= count; i++) {
//     console.log(i);
// }

/* Q3. Reverse for loop. Print n to 1. */
// let count = Number(prompt('Enter count:'));
// for (let i = count; i >= 1; i--) {
//     console.log(`In reverse: ${i}`);
// }

/* Q4. Take a number as input and print its table
5*1=5
5*2 = 10 ... up to 10 terms */

// let num = Number(prompt("Enter number:"));

// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }

/* Q5. Sum up to n terms. */

// let n = Number(prompt("Enter n terms:"));
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//     sum += i;
// }
// console.log(`Sum of ${n}terms is ${sum}`);

/* Q6. Factorial of a number */

// let num = Number(prompt("Enter number:"));
// let fac = 1;
// for (let i = 1; i <= num; i++) {
//     fac *= i;
// }
// console.log(`Factorial of ${num} is ${fac}`);

/* Q7. Print the sum of all even & odd numbers in a range seperately. */

// let range = Number(prompt('Enter range:'));
// let even = 0;
// let odd = 0;
// for (let i = 1; i <= range; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is Even`);
//         even += i
//     }
//     else {
//         console.log(`${i} is Odd.`);
//         odd += i;
//     }
// }
// console.log(`The sum of Even values is ${even}`);
// console.log(`The sum of Odd values is ${odd}`);

/* Q8. Print all the factors of a number. */
// let num = Number(prompt("Enter number:"));

// if (!isNaN(num)) {
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       console.log(`${i} is factors of ${num}`);
//     }
//   }
// } else {
//   console.log("Enter valid! only.");
// }
/**OR */
// if (!isNaN(num)) {
//   for (let i = 1; i <= num/2; i++) {
//     if (num % i === 0) {
//       console.log(`${i} is factors of ${num}`);
//     }
//   }
//   console.log(`${num} is factrs of ${num}`);

// } else {
//   console.log("Enter valid! only.");
// }

/* Q9. Check if the number is Prime or not. */

// let num = Number(prompt("Enter number:"));
// let isPrime = true;
// for (let i = 2; i < num/2; i++) {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) console.log(num,'Prime Number');
// else console.log(num,'Not Prime Number');
/**OR */
// let isPrime = isPrimeFun(num);
// if (isPrime) console.log("prime number");
// else console.log("no prime number");
// function isPrimeFun(num) {
//   if (num <= 1) return false;
//   if (num == 2) return true;
//   if (num % 2 == 0) return false;
//   for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
//     if (num % i == 0) return false;
//   }
//   return true;
// }


/**Assignment */
/* Q. Write a program to take two inputs a, b & find the value of a raised to the power of b.
Ex - a = 2 b = 5
OP - 2 ^ 5 = 32 */

// let a = Number(prompt('Enter value of a:'));
// let b = Number(prompt('Enter value of b:'));

// console.log(Math.pow(a,b));





/** DAY 2 */
/*
-break and continue


Q.strong number */


/* -while loop */
// let n = 5;
// let i = 1;
// while (i <= n) {
//     console.log('hello world');
//     i++;
// }



/* Q1.sum of digit */
// let num = 152, sum = 0;
// while(num > 0) {
//     let r = num % 10;
//     console.log('rem:',r);
    
//     let q =Math.floor(num / 10);
//     console.log('quot:',q);
//     num = q;
//     sum += r;
// }
// console.log('The sum of given digit is', sum);



/* Q2.reverse of number */
// let num = 4587, store = 0;
// while (num > 0) {
//     let r = num % 10;
//     let q = Math.floor(num / 10);
//     num = q;

//     store = (store * 10) + r;
// }
// console.log(`After reverse: ${store}`);



/* Q3.Automorphic number: An automorphic number is a number whose square ends with the number itself. For example, 5 is an automorphic number because 5 squared (55) is 25, which ends in 5. */

// let n = Number(prompt("Enter number:"));
// let copy = n;
// let sq = n * n;

// let count = 0;
// while (n > 0) {
//     count++;
//     n = Math.floor(n/10);
// }

// if (sq % Math.pow(10, count) === copy) console.log('Automorphic number');
// else console.log('it is not an automorphic number.');



/* Q.  */