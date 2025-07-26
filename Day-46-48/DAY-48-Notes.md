# Day 48 Notes

## 1. Location Object

- `location.href` is used to get the current URL of the page.
- You can set `location.href` to redirect the user to another page.
- Example:
  ```javascript
  location.href = 'https://www.google.com/';
  ```

## 2. History Object

- `history.back()` navigates to the previous page in the browser history.
- `history.forward()` navigates to the next page in the browser history.
- Useful for creating custom navigation buttons.

## 3. Navigator Object

- `navigator.userAgent` provides information about the user's browser and operating system.
- `navigator.onLine` returns `true` if the browser is online, otherwise `false`.

## 4. Local Storage

- Used to store data in the browser persistently.
- Methods:
  - `localStorage.setItem(key, value)` to store data.
  - `localStorage.getItem(key)` to retrieve data.
  - `localStorage.removeItem(key)` to remove a specific item.
  - `localStorage.clear()` to clear all data.
- Keys must be unique; updating a value uses the same key.
- Arrays and objects are stored as strings. Use `JSON.stringify()` to store objects/arrays and `JSON.parse()` to retrieve them as objects/arrays.
- Example:
  ```javascript
  let arr = [10, 20, 50, 90, 44];
  localStorage.setItem('array', JSON.stringify(arr));
  let arrObj = [{ user: 'Annwesha', age: '29' }, { user: 'Sudhanshu', age: '21' }];
  localStorage.setItem('users', JSON.stringify(arrObj));
  let users = JSON.parse(localStorage.getItem('users'));
  ```

## 5. Session Storage

- Similar to local storage, but data is cleared when the page session ends.
- Not directly shown in the code, but conceptually similar.

## 6. Cookies

- Used to store small pieces of data.
- Example:
  ```javascript
  document.cookie = 'user=sarthak';
  ```

## 7. DOM Manipulation

- Selecting elements using `document.querySelector`.
- Adding event listeners to buttons.
- Using `classList.toggle()` to add/remove classes dynamically for UI changes.

## 8. classList and Toggle Function

- `element.classList.add('className')` adds a class.
- `element.classList.toggle('className')` toggles a class on/off.
- Useful for interactive UI elements.

---

**Summary:**  
This file demonstrates browser storage (local, session, cookies), navigation objects (`location`, `history`, `navigator`), and DOM manipulation techniques including class toggling