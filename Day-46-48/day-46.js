/* Day 46 Event Bubbling & Capturing */

// let arr = ['hello', 'key', 'sudhasn', 'Twarti', 'Sherylai'];
// arr.forEach((elem, index) => {  // forEach
//     console.log('Element:',elem,'and index:', index);
// })

// let arr = [  // array of Objects
//     {
//         user: 'Sudha',
//         age: 22,
//         married: false
//     },
//     {
//         user: 'Sheryali',
//         age: 32,
//         married: true
//     },
//     {
//         user: 'subra',
//         age: 19,
//         married: false
//     },
// ]

// console.log(arr);
// console.log(arr[1].age);
// arr.forEach((elem) => {
//     console.log(elem);
//     console.log(elem.married);

// })

/* make a programm to add age of all people */

// let arr = [
//     {
//         user: 'Sudhanshu',
//         age: 22,
//         married: false,
//         born: 'West bengal',
//         profile: 'https://avatars.githubusercontent.com/u/111761979?v=4'
//     },
//     {
//         user: 'Shreya Ghoshal',
//         age: 41,
//         married: true,
//         born: 'West Bengal',
//         profile: 'https://img.etimg.com/thumb/msid-120042144,width-650,height-488,imgsize-59260,resizemode-75/singer-shreya-ghoshal.jpg',
//     },
//     {
//         user: 'Shirley Setia',
//         age: 30,
//         married: false,
//         born: 'New Zealand',
//         profile: 'https://i.pinimg.com/1200x/7f/27/f2/7f27f2c3a26bdb0fac2f56f857cbbc0f.jpg'
//     },
//     {
//         user: 'Kiara Advani',
//         age: 33,
//         married: true,
//         born: 'Bombay',
//         profile: 'https://assets.vogue.in/photos/677b8bc7ea7b27c7c2ae1900/2:3/w_1920,c_limit/472433499_18486921631012449_8901355209134810754_n.jpg'
//     }
// ]
// let sum = 0;  // suming of total age
// arr.forEach((elem) => {
//     console.log(elem.age);
//     sum += elem.age;
// })
// console.log('Total sum:',sum);
/** and */

// let sum = '';
// arr.forEach((ele) => {
//     sum += `<div class="card">
//         <img src=${ele.profile} alt="" class="profile">
//         <p class="name">${ele.user}</p>
//         <p class="age">${ele.age}</p>
//         <p class="status">Married status: <span>${ele.married}</span></p>
//     </div>`
// })
// document.body.innerHTML = sum;

let arr = [
  {
    user: "Sudhanshu",
    age: 22,
    married: false,
    born: "West bengal",
    profile: "https://avatars.githubusercontent.com/u/111761979?v=4",
    isStatus: 'Stranger'
  },
  {
    user: "Shreya Ghoshal",
    age: 41,
    married: true,
    born: "West Bengal",
    profile:
      "https://img.etimg.com/thumb/msid-120042144,width-650,height-488,imgsize-59260,resizemode-75/singer-shreya-ghoshal.jpg",
    isStatus: 'Stranger'

  },
  {
    user: "Shirley Setia",
    age: 30,
    married: false,
    born: "New Zealand",
    profile:
      "https://i.pinimg.com/1200x/7f/27/f2/7f27f2c3a26bdb0fac2f56f857cbbc0f.jpg",
    isStatus: 'Stranger'

  },
  {
    user: "Kiara Advani",
    age: 33,
    married: true,
    born: "Bombay",
    profile:
      "https://assets.vogue.in/photos/677b8bc7ea7b27c7c2ae1900/2:3/w_1920,c_limit/472433499_18486921631012449_8901355209134810754_n.jpg",
    isStatus: 'Stranger'

  },
];

let main = document.getElementById("main");
function hero() {
  let sum = "";
  arr.forEach((ele, index) => {
    sum += `<div class="card">
        <img src=${ele.profile} alt="" class="profile">
        <p class="name">${ele.user}</p>
        <p class="age">${ele.age}</p>
        <p class="status">Married status: <span>${ele.married}</span></p>
        <p>${ele.isStatus}</p>
        <button class="btn" id = ${index}>Add Friend</button>
    </div>`;
  });
  main.innerHTML = sum;
}

hero();

main.addEventListener("click", (dets) => {
  // event bubbling
  let gold = arr[dets.target.id];
  console.log(gold.user);
  if (gold.isStatus === 'Stranger') gold.isStatus = 'Friend';
  else gold.isStatus = 'Stranger';
  hero();
});
