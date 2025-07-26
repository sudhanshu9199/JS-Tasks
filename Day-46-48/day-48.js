/** leaned about: Local Storage, (localStorage.getItems() & localStorage.setItems(), localStorage.clear(), ) Session Storage, Cookie, window Object, child nodes, classList, toggle-function_inClassList */


// location.href = 'https://www.google.com/';  // this using here directly -> when user open in live server page it's re-direct to the pre-set link.


let b48_1 = document.querySelector('.b48-1');
b48_1.addEventListener('click', () => {
    // location.href = 'https://www.youtube.com/';
    // location.reload();
})
let a = location.href // to see current location
console.log(a);


let b48_2 = document.querySelector('#b48-2');
let b48_3 = document.querySelector('#b48-3');
b48_2.addEventListener('click', () => { // going backward
    history.back();
})
b48_3.addEventListener('click', () => { // going forward
    history.forward();
})

console.log(navigator.userAgent); // shown users system information
console.log(navigator.onLine); // shown users system is onLine or Not


// localStorage.setItem('user', 'Sudhanshu') // (key, value)
localStorage.setItem('girl friend', 'Sharily') // (key, value)
localStorage.removeItem('girl friend') // remove particular item
 localStorage.setItem('user', 'Sudhanshu Ghosh') // updating is possible in value of same key, because we always need to write unique "key" name


 let arr = [10, 20, 50, 90, 44];
 localStorage.setItem('array', arr) // the value are stored in an string format


 let obj = {
    user: 'Sudhanshu',
    age: 21
 }
 localStorage.setItem('obj',obj) // shown [object Object] -> because not able to handle the objects.
 localStorage.setItem('obj',obj.age) // in this parameter work well


let arrObj = [
    {
        user: 'Annwesha',
        age: '29',
        BF: 'Sudhanshu'
    },
    {
        user: 'Sudhanshu Ghosh',
        age: '21',
        GF: 'Sharily Satia'
    }
]

// let newUsers = JSON.stringify(arrObj); // stringify convert into String all
// let newUsers = JSON.parse(arrObj); // stringify convert into String all
// localStorage.setItem('users', newUsers)


/*
- aap objects ko directly localstorage me save nahi kar payenge
- isliye JSON.stringify() can be used to convert it as a string
- if you want to get that data then you can use JSON.parse() to convert it again in JSON */


// document.cookie = 'user=sarthak';

let clickBtn = document.querySelector('.third button');
clickBtn.addEventListener('click',() => {
    // clickBtn.classList.add('dones') // toggle
    clickBtn.classList.toggle('dones')
    
})