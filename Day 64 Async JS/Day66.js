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

// orderFood().then(() => {
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

function fakeApiCall(endpoint) {
    const data = {
        users: ['harsh', 'shivam', 'raghav'],
        posts: ['hey champs', 'great going everyone', 'lets build'],
    }

    let delay = Math.random() * 2000 + 1000;
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data[endpoint]);
        }, delay);
    });
}

fakeApiCall('users').then((data) => {
    console.log(data);
})

fakeApiCall('posts').then((data) => {
    console.log(data);
})