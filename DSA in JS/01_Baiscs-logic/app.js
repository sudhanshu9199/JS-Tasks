// let a = 10; let b = 10;
// console.log(a+b); // 20


// let a = 10; let b = "10"; // a is numb & b is string
// console.log(a+b); // 1010


// let a = 5; let b = 10;
// console.log('Sum this a & b: ' + (a + b)); // Sum this a & b: 15


// let a = 12; let b = "2";
// console.log(typeof(a + b)); // String

// let a = 11; let b = 11;
// console.log(typeof(a + b)) // number


// let age = prompt("Enter your age");
// console.log(age);

// let age = prompt("Enter your age");
// let store = Number(age);
// console.log(store);


// let a = 10; let b = 20; let c;

// console.log('Before swap: ' + a + b); // Before swap: 1020

// c = a;
// a = b;
// b = c;
// console.log('After swap: ' + a + b); // After swap: 2010


/** Method 1 */
// let a = 10; let b = 20;
// console.log('Before swap: ' + a + ' ' + b);
// a = a + b; // a = 30
// b = a - b; // b = 10
// a = a - b; // a = 20
// console.log('After swap: ' + a + ' ' + b);
/**Method 2 */
// let a = 64; let b = 14;
// a = a + b; // 64 + 14 = 78
// b = a - b; // 78 - 14 = 64
// a = a - b; // 78 - 64 = 14
// console.log(a + " " + b) // a = 14 b = 64
/** Method 3 */
// let a = 57; let b = 65;
// [a,b] = [b, a];
// console.log(a, b);



// let a = 7; let b = 2;
// console.log(a/b); // 3.5 quotient
// console.log(Math.floor(a/b)); // 3 quotient
// console.log(a%b); // 1 remainder
// console.log(b%a); // 2 remainder
// console.log(b/a); // 0.2857142 quotient
// console.log(Math.floor(b/a)); // 0.2857142 quotient



// let a = 4563;
// console.log(a % 10); // 3
// console.log(a % 100); // 63



// > < <= >= !== = == ===



// let a = 10;
// let b;
// b = a++;
// console.log(a); // 11
// console.log(b); // 10

// let x = 5;
// console.log(++x); // 6
// console.log(x); // 6

// x = 5;
// console.log(x++); // 5
// console.log(x); // 6

// x = 5;
// console.log(--x); // 4
// console.log(x) // 4

// x = 5;
// console.log(x--); // 5
// console.log(x); // 4



let rand = Math.random();
console.log(rand);
console.log(rand * 9000);
console.log((rand * 9000)+1000);
console.log(Math.trunc((rand * 9000)+1000));

console.log(Math.round(10.5));
console.log(Math.ceil(10.1));
console.log(Math.floor(10.8));
console.log(Math.trunc(18.98));
console.log(Math.pow(2,3));
console.log(Math.sqrt(55));
console.log(Math.abs(-15));
console.log(Math.abs(15));
console.log(Math.max(15,78,55));
console.log(Math.min(15,78,55));
console.log(Math.cbrt(55));
console.log(Math.cbrt(1));
console.log(Math.cbrt(2));
console.log(Math.cbrt(2.8));
console.log(Math.cbrt(4));

let a = 85.05756
console.log(a.toFixed(3))
console.log(typeof a.toFixed(2))
