/**ternary operator */
// 112 > 13 ? console.log('yes') : console.log('No');
// console.log(55>=58 ? 'Hello wow' : 'No jao');

/* nested ternar operator */
// let num = 8;
// console.log(num > 0 ? 'Positive num' : num < 0 ? 'Negative num' : 'Nutral');

/** Switch cases */

// let day = 0;
// switch(day) {
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     default:
//         console.log("invalid!");

// }

// let day = 'hanuman';
// switch(day) {
//     case 'shita':
//         console.log('Sunday');
//         break;
//     case 'hanuman':
//         console.log('Monday');
//         break;
//     case 'lakhman':
//         console.log('Tuesday');
//         break;
//     case 'raban':
//         console.log('Wednesday');
//         break;
//     default:
//         console.log("invalid!");
// }

// switch(true) {
//     case 1 > 2:
//         console.log('First Hello!');
//         break;
//     case 10 > 9:
//         console.log('Second hulohulo');
//         break;
//     default:
//         console.log('Default case');
// }

// let num = Number((0.1 + 0.2).toFixed(2));

// switch(num) {
//     case 0.3:
//         console.log('First Dello');
//         break;
//     case 0.5:
//         console.log('Second gello');
//         break;
//     default: console.log('namaste friends');
// }

// revise

// let year = Number(prompt('Enter year'));
// let isLeap = false;

// if (year % 4=== 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             isLeap = true;
//         }
//         else {
//             isLeap = false;
//         }
//     }
//     else {
//         isLeap = true;
//     }
// }
// else {
//     isLeap = false;
// }
// console.log(`${year} ${isLeap ? 'is a Leap Year' : 'is not a Leap Year'}`);

// if ((year % 4 === 0) && (year % 100 !== 0)) {
//     isLeap = true;
// }
// else if ( year % 400 === 0) {
//     isLeap = true;
// }
// else {
//     isLeap = false;
// }
// console.log(`${year} ${isLeap ? 'is a Leap Year' : 'is not a Leap Year'}`);

// let unit = Number(prompt('Enter unit:')) // 450
// let price = 0;
// if (unit > 0 && unit <= 100) {
//     price = unit * 4.2;
// }
// else if (unit >= 101 && unit <= 200) {
//     price = (100 * 4.2) + (unit - 100) * 6;
// }
// else if (unit >=201 && unit <= 400) {
//     price = (100 * 4.2) + (100 * 6) + (unit - 200) * 8;
// }
// else if (unit > 400) {
//     price = (100 * 4.2) + (100 * 6) + (200) * 8 + (unit - 400) * 13;
// }
// else {
//     console.log('enter valid c**');

// }
// console.log(price);

// let n = Number(prompt('Enter n value:'))
// let i;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
// }
// console.log(`failed at ${i}`);

// let n = Number(prompt('Enter value of n:'));
// let fac = 1;
// for (let i = 1; i <= n; i++) {
//     fac*= i;
// }

// console.log(fac);

// let range = Number(prompt("Enter range value:")); // 6
// let evenSum = 0,
//   oddSum = 0;
// for (let i = 1; i <= range; i++) {
//   if (i % 2 === 0) {
//     // 2 + 4 + 6 => 12
//     evenSum += i;
//   } else {
//     // 1 + 3 + 5 => 9
//     oddSum += i;
//   }
// }

// console.log(`${evenSum} is even Sum & ${oddSum} is odd Sum.`);

// let n = Number(prompt("Enter n value:"));
// for (let i = 1; i <= n / 2; i++) {
//   if (n % i === 0) {
//     console.log(`${i} is factor of ${n}`);
//   }
// }
// console.log(`${n} is factor of ${n}`);


let n = Number(prompt('Enter n value:'));
for (let i = 1; i <= n/2; i++) {
    if (n % i !==0) {
        console.log(`${n} is prime number.`);
    }
}