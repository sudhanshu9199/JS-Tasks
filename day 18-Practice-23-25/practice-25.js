/* Q. Create a function that takes a callback and executes it after every `n` seconds indefinitely. */

// function infine (fn, times) {
//     setInterval(fn, times);
// }

// infine(function () {
//     console.log('Love is Monk');
// }, 2000);



/* Q. Implement a function that returns a function with a preset greeting (Closure). */

// function first (greet) {
//     return function (name) {
//         console.log(`${greet} ${name}`);
//     }
// }

// let greeted = first('Heeloo');
// greeted('Sudh');
// greeted('Shirley')

// let hingreet = first('Namasta');
// hingreet('Ram');




/* Q. Implement a function that takes a callback and only executes it once (HOF + Closure). */

// function hof(cb) {
//     let execution  = false;
//     return function () {
//         if (!execution) {
//             execution = true;
//             cb();
//         }
//     }
// }

// let run = hof(function () {
//     console.log('Some code is here executed.');
// })

// run(); // ran
// run(); // not ran



/* Q. Implement a function that throttles another function (HOF + Closures). */

// function throt(fn, delay) {
//     let lastCall = 0;
//     return function () {
//         let current = Date.now();
//         if (current - lastCall >= delay) {
//             lastCall = current;
//             fn();
//         }
//     }
// }

// let newfun = throt(function () {
//     console.log('Will run in 2 seconds.');
// }, 2000)
// newfun();
// newfun();
// newfun();
// newfun();