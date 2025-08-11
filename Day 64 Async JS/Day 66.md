# 📌 JavaScript Promises & Chaining — Example Breakdown

## 1️⃣ What is a Promise?

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.  
It has three states:

- **Pending** ⏳ → Initial state.
- **Fulfilled** ✅ → Operation completed successfully (`resolve`).
- **Rejected** ❌ → Operation failed (`reject`).

---

## 2️⃣ Functions in the Example

### **`getUser()`**

- Returns a Promise that resolves after **1 second**.
- Simulates fetching user data.
- **Output**: `{ id: 1, name: 'sudh' }`.

```js
function getUser() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ id: 1, name: "sudh" });
    }, 1000);
  });
}
```

## **`getPosts(userId)`**

- Returns a Promise that resolves after 1.8 seconds.
- Simulates fetching posts for the given user.
- Output: `['title 1', 'title 2']`

```js
function getPosts(userId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["title 1", "title 2"]);
    }, 1800);
  });
}
```

## **`getComments(postId)`**

Returns a Promise that resolves after 1 second.

Simulates fetching comments for a given post.

Output: `['great post', 'amazing name guys', 'you doing rocked!']`

```js
function getComments(postId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["great post", "amazing name guys", "you doing rocked!"]);
    }, 1000);
  });
}
```

---

## 3️⃣ Promise Chaining Flow

```js
getUser()
  .then((data) => {
    console.log(`data fetched: ${data.name}`);
    return getPosts(data.id);
  })
  .then((titles) => {
    console.log(titles);
    return getComments("you rocked");
  })
  .then((cmts) => {
    console.log(cmts);
  })
  .finally(() => {
    console.log("all data Fetched!");
  });
```

## Step-by-Step Execution
1. **`getUser()`**
    - Waits 1s → returns user object.
    - Logs: `"data fetched: sudh"`

2. **`getPosts(data.id)`**
    - Waits 1.8s → returns post titles array.
    - Logs: `['title 1', 'title 2']`

3. **`getComments('you rocked')`**
    - Waits 1s → returns comments array.
    - Logs: `['great post', 'amazing name guys', 'you doing rocked!']`

4. **`.finally()`**
    - Runs **always** at the end (success or failure).
    - Logs: `"all data Fetched!"`

## 4️⃣ Important Notes
- **Promise Chaining:** Each `.then()` returns a new Promise, passing results to the next `.then()`.
- **Error Handling:** Use `.catch()` after `.then()` chain to handle errors.
- `.finally():` Runs after promise completion regardless of success or failure.
- **Asynchronous Nature:** All functions here simulate API calls with `setTimeout()`.

## 5️⃣ Output Order (with time delays)

```pgsql
data fetched: sudh        (after 1s)
['title 1', 'title 2']    (after 2.8s total)
['great post', 'amazing name guys', 'you doing rocked!']  (after 3.8s total)
all data Fetched!         (after 3.8s total)
```

---

## 3️⃣ New section — fakeApiCall(endpoint) (added)

**Code**
```js
function fakeApiCall(endpoint) {
  const data = {
    users: ['harsh', 'shivam', 'raghav'],
    posts: ['hey champs', 'great going everyone', 'lets build'],
  };

  let delay = Math.random() * 2000 + 1000; // between 1000ms and 3000ms
  return new Promise((res, rej) => {
    setTimeout(() => res(data[endpoint]), delay);
  });
}

fakeApiCall('users').then(data => console.log(data));
fakeApiCall('posts').then(data => console.log(data));
```

### **What it does**
- Simulates an API returning `users` or `posts`.
- Uses a random delay: `Math.random() * 2000 + 1000` => **1000ms–3000ms**.
- Returns a Promise that resolves with `data[endpoint]`.

### **Behavior & concurrency**
- Calling `fakeApiCall('users')` and `fakeApiCall('posts')` **separately** starts two independent async operations **in parallel**.
- Because delays are random, **which one logs first is unpredictable.** Logs may appear in any order depending on who resolves earlier.

## Possible console orders
```css
['harsh','shivam','raghav']
['hey champs','great going everyone','lets build']
```
or
```css
['hey champs','great going everyone','lets build']
['harsh','shivam','raghav']
```

### 4️⃣ Wait for multiple promises (useful patterns)
`Promise.all` — **run in parallel and wait for all**

```js
Promise.all([fakeApiCall('users'), fakeApiCall('posts')])
  .then(([users, posts]) => {
    console.log('users', users);
    console.log('posts', posts);
  })
  .catch(err => console.error('one failed', err));
```
- Resolves when all promises succeed.
- Rejects immediately if any promise rejects.

### `Promise.race` — first to settle (resolve/reject)

```js
Promise.race([fakeApiCall('users'), fakeApiCall('posts')])
  .then(first => console.log('first result', first));
```

### 5️⃣ Errors & finalization
Use `.catch()` to handle runtime/rejection errors.

Use `.finally()` for cleanup actions that should run regardless of success/failure.

Example:
```js
fakeApiCall('users')
  .then(data => /* ... */)
  .catch(err => console.error('error', err))
  .finally(() => console.log('done'));
```

### 6️⃣ Short tips
- Use chaining when steps depend on previous results (`getUser()` → `getPosts(user.id)`).
- Use parallel calls `(Promise.all)` when steps are independent and you want them to run concurrently.
- Keep error handling centralized with `.catch()` and use `.finally()` for UI cleanup (like hiding loaders). ✨

---

### Short answer:
- `data.key` → Looks for a property **literally named** `"key"`.
- `data[key]` → Looks for a property whose **name is stored in the variable `key`**.

### Example:
```js
const data = { name: 'Sudh' };
let key = 'name';

console.log(data.name);  // 'Sudh'  → dot notation
console.log(data[key]);  // 'Sudh'  → bracket notation with variable
```