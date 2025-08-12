/* 1. Simulate a Food Delivery
- Taşk: Create a function orderFood that returns a Promise. It should resolve after 2 seconds with " Pizza delivered!".
- Bonus: Add a chance to reject with " Delivery failed!". */

// function orderFood() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let chance = Math.random() < .7;
//             if (chance) res();
//             else rej();
//         }, 2000);
//     });
// }

// orderFood()
// .then(() => {
//     console.log('🍕 Pizza Delivered!');
// })
// .catch(() => {
//      console.log('😵 Delivery Failed.')
// })

/* 
2. Chained Promises: User Posts → Comments
 Task:
1. Create getUser() → resolves with { id: 1, name: "Harsh" }
2. getPosts (userId) → resolves with list of post titles
3. getComments(postId) → resolves with comments Chain them together using .then() and log the final output. */

// function getUser() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res({ id: 1, name: 'sudh'});
//         }, 1000)
//     });
// }

// function getPosts(userId) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(['title 1', 'title 2']);
//         }, 1800)
//     });
// }

// function getComments(postId) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(['great post', 'amazing name guys', 'you doing rocked!']);
//         }, 1000);
//     });
// }

// getUser().then((data) => {
//     console.log(`data fetched: ${data.name}`);
//     return getPosts(data.id);
// }).then((titles) => {
//     console.log(titles);
//     return getComments('you rocked');
// })
// .then((cmts) => {
//     console.log(cmts);
// })
// .finally(() => { // `.finally()` run always in last.
//     console.log('all data Fetched!');
// })

/*
3. Fake API Delay
Task:
Write a function fakeApiCall(endpoint) that:
    - Accepts a string like "users" or "posts"
    - Resolves with some dummy data after a random delay (1-3 sec) */

// function fakeApiCall(endpoint) {
//     const data = {
//         users: ['harsh', 'shivam', 'raghav'],
//         posts: ['hey champs', 'great going everyone', 'lets build'],
//     }

//     let delay = Math.random() * 2000 + 1000;
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(data[endpoint]);
//         }, delay);
//     });
// }

// fakeApiCall('users').then((data) => {
//     console.log(data);
// })

// fakeApiCall('posts').then((data) => {
//     console.log(data);
// })

/* Using GPT get questions is Home-work */

/* 1) Easy — Order → Payment → Confirmation (with random failure)
Task: Simulate ordering an item online:

placeOrder(item) → returns a Promise that resolves after 1.5s with { orderId, item }.

processPayment(order) → returns a Promise that resolves after 1s with { orderId, status: "paid" } — but has a 25% chance to reject with "payment failed".

sendConfirmation(payment) → returns a Promise that resolves immediately with "Confirmation sent for orderId: X".

Goal: Chain them so flow is: placeOrder → processPayment → sendConfirmation. Handle errors so a failed payment logs a friendly message. */

// function placeOrder(item) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res({ id: 1, item });
//     }, 1500);
//   });
// }

// function processPayment(order) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let chance = Math.random() < 0.75;
//       if (chance) res({ orderId: order.id, status: "paid" });
//       else rej({ orderId: order.id, message: "Payment failed" });
//     }, 2000);
//   });
// }

// function sendConfirmation(payment) {
//   return new Promise((res, rej) => {
//     res(`Confirmation sent for orderId: ${payment.orderId}`);
//   });
// }

// placeOrder("mango")
//   .then(order => {
//     console.log('Order placed:', order);
//     return processPayment(order);
//   })
//   .then(payment => {
//     console.log('Payment status:', payment);
//     return sendConfirmation(payment);
//   })
//   .then(confirmationMsg => {
//     console.log(confirmationMsg);
//   })
//    .catch(err => {
//     console.log(`Sorry! ${err.message || err} (orderId: ${err.orderId || 'unknown'})`);
//   })

/**OR: both are similar */
// function placeOrder(item) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res({id: 1, item})
//         }, 1500)
//     })
// }

// function processPayment(order) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let chance = Math.random() < .75;
//             if (chance) res({orderId: order.id, status: 'paid'});
//             else rej({orderId: order.id, msg: 'Payment failed.'});
//         }, 2500)
//     })
// }

// function sendConfirmation(payment) {
//     return new Promise((res, rej) => {
//         res({confirmationMsg: 'Confirmation sent for orderId', paymentId: payment.orderId})
//     })
// }

// placeOrder('orange')
//     .then((order) => {
//         console.log('Order Placed:', order);
//         return processPayment(order);
//     })
//     .then((payment) => {
//         console.log(`Payment status: ${payment.status} at order ID: ${payment.orderId}`);
//         return sendConfirmation(payment);
//     })
//     .then((confirmg) => {
//         console.log(`Confirmation sent for orderId: ${confirmg.paymentId}`);
//     })
//     .catch(err => {
//         console.log(err.msg, err.orderId);
//     })

/* 2) Check Stock
Goal: checkStock(item) returns a Promise that resolves after 1s with {item, inStock: true/false} (simulate boolean).

Constraint: 80% chance true, 20% false.

Expected output: { item: "eggs", inStock: true }

Steps / hints:

Create a Promise that waits ~1s.

Inside, generate a random number; decide true/false by threshold.

Resolve with the object; no rejection required.

Bonus: If not in stock, reject with message "Item not available". */

// function checkStock(item) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let chance = Math.random() < .80 ? true : false;
//             res({item, inStock: chance});
//         }, 1000)
//     })
// }

// checkStock('Eggs')
//     .then((stock) => {
//         console.log(`item: ${stock.item} in Stock: ${stock.inStock}`);
//     })

/**OR */

// function checkStock(item) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let chance = Math.random() < .80;
//             if (chance) res({item, inStock: true});
//             else rej ({msg: 'item not available.', item})
//         }, 1000)
//     })
// }

// checkStock('Eggs')
//     .then((stock) => {
//         console.log(`item: ${stock.item} in Stock: ${stock.inStock}`);
//     })
//     .catch(err => {
//         console.log(`item '${err.item}' not available`);

//     })

/* Q3) Delayed Greeting
Goal: delayedGreet(name, delayMs) resolves after delayMs with "Hello, <name>!".

Constraint: If delayMs > 5000, reject with "Delay too long".

Steps / hints:

Validate delayMs. If invalid, reject.

Otherwise set a timeout and resolve the greeting.

Bonus: Chain two greetings: greet A then greet B after A resolves. */

// function delayedGreet(name, delayMs) {
//   return new Promise((res, rej) => {
//     if (delayMs > 5000) rej({ meg: "Delay too long." });
//     else {
//       setTimeout(() => {
//         res({ name });
//       }, delayMs);
//     }
//   });
// }

// delayedGreet("Vishnu", 3000)
//   .then((user) => {
//     console.log(`Hello ${user.name}!`);
//   })
//   .catch((err) => {
//     console.log(err.meg);
//   });

/* Q4. Simple Retry
Goal: unstableOperation() has 50% chance to succeed (resolve "OK") after 700ms, otherwise reject. Write a wrapper that retries up to 3 times before final rejection.
Steps / hints:

Call the base Promise.

On reject, decrement attempts and call again (recursively or loop).

If attempts exhausted, reject with final error.

Expected behavior: Succeeds if any attempt resolves; else rejects after 3 tries. */



/* Q5. Parallel Timers
Goal: Start three timers (200ms, 400ms, 600ms). Return a Promise that resolves when all timers finish with values ["200 done","400 done","600 done"].
Steps / hints:

For each timer create a Promise that resolves when its timeout ends.

Use the appropriate combinator to wait for all.

Bonus: Return earliest resolved timer using a different combinator. */

/* Q6. User → Orders → Order Details

Goal: getUser() → resolves {id:2, name:"Sumi"}. getOrders(userId) → resolves array of order IDs for that user. getOrderDetails(orderId) → resolves details. Chain: fetch user → orders → details for first order → final output.

Steps / hints:

Call getUser() → then use user.id.

Call getOrders(user.id) in the next .then.

From the array pick the first ID and pass to getOrderDetails.

Log final details.

Bonus: If getOrders returns empty array, reject with "No orders found". */


/* Q7. Sequential Fetch of Multiple Endpoints
Goal: Given endpoints ["users","posts","comments"], call fakeApiCall(endpoint) one after another and collect results into an array in the same order.
Steps / hints:

Start with a resolved Promise and an empty results array.

For each endpoint, in .then, return the next fakeApiCall and push result to array.

After loop, final .then returns the results array.

Bonus: Do the same but in parallel and compare total time. */


/* Q8. Map + Promise.resolve
Goal: Given ids = [1,2,3] and fetchItem(id) returns a Promise, create a function that returns a Promise resolving to all item names (map ids→fetchItem→extract name).
Steps / hints:

Map ids to Promises using fetchItem.

Use the combinator that waits for all mapped Promises.

After all resolved, map to names and return.

Edge: If any fetch fails, handle rejection. */


/* Q9. Timeout Wrapper

Goal: Create withTimeout(promise, ms) that returns a Promise: resolves/rejects like promise if it completes before ms, otherwise rejects with "Timeout".
Steps / hints:
Create a timeout Promise that rejects after ms.

Race the original promise and the timeout.

The winner determines final state. */


/* Q10. Controlled Concurrency
Goal: Given a list of 10 async tasks (each returns a Promise), implement a scheduler that runs at most 3 tasks concurrently and resolves when all are done, returning results in original order.
Steps / hints:

Maintain a queue of pending tasks and an array for results.

Kick off up to 3 tasks initially.

When any finishes, start the next pending task, placing its result at the correct index.

Resolve when all tasks completed.

Bonus: If a task rejects, continue but mark its slot with an error object; still resolve when all done. */


/* Q11. Promise Pipeline with Transformations
Goal: Start with fetchUsers() (returns array of users). For each user, fetch getProfile(userId) and then transform profile (synchronous function). Return an array of transformed profiles — but limit parallel profile fetches to 4.
Steps / hints:

Use the concurrency scheduler idea (question 9) but tasks are getProfile(user.id).

After each profile resolves, run the synchronous transform and store result.

Preserve original user order. */


/* Q12. Cascading Fallbacks

Goal: You have three data sources A, B, C (each returns a Promise). Try A; if A rejects, try B; if B rejects, try C; if all fail, reject with combined error.

Steps / hints:

Chain attempts: call A; in .catch call B; in its .catch call C.

If C fails, construct combined error message and reject.

Bonus: Implement a timeout for each source attempt. */

/*Q13. Batching with Accumulation
Goal: You receive a stream (array) of 50 small tasks that each return a Promise. Run them in batches of 10 (parallel within batch), after each batch finishes, combine results into a cumulative summary (e.g., count successes/failures), and continue to next batch. Return final cumulative summary.
Steps / hints:

Split tasks into chunks of 10.

For each chunk, Promise.allSettled the chunk to get per-task status.

Update cumulative counters.

Proceed to next chunk until done; return final counters. */