/** JavaScript Advanced HOFs, Callbacks, and Closures */

/* Q. Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback). */

// function callher(girl) {
//     setTimeout(girl, 3000);
// }

// callher(() => {
//     console.log('shirley Setia');
    
// })




/* Q. Implement your own version of `.map()` as a higher-order function. */

// let arr = [2, 8, 9, 55, 25];

// function kpop(a, fun){
//     let newArr = [];
//     for(let i = 0; i < a.length; i++) {
//         newArr.push(fun(a[i]));
//     }
//     return newArr;
// }
// let ans = kpop(arr, function (val) {
//     return val + 2;
// } )
// console.log(ans);




/* Q. Write a function that uses closures to create a counter. */

// function couter() {
//     let def = 0;
//     return function (val) {
//         def++;
//         console.log(def);
//     }
// }

// let makecall = couter();




/* Q. Implement a function that limits how many times another function can be called (Closure + HOF). */

function funlimiter(fn, limit) {
    let totalCalled = 0;
    return function () {
        if (totalCalled < limit) {
            totalCalled++;
            fn();
        }
        else {
            console.error('Limit! reached dear, pay 1000rs. for more.');
        }
    }
}

let run = funlimiter(function () {
    console.log('shirley, Love you');
}, 3);

run(); // run
run(); // run
run(); // run
run(); // run but else part