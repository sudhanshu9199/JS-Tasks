// ye bc hai kya oops
// objects ko create karna jo ki sirf data hold naa kre unki functionality bhi hold kare, aur aise object ko create karna with a blueprint model

// hum ek class bnaayege us class se kai saare objects banege ab wo har object kuchh data hold karega and kuchh funcinalities bhi hold karega jisko hum uske methods kahta hai, ye sab manually naa karna pade ki hum oops ke arte hai follow karta ha

function Ghar() {
  this.shahar = "Delhi";
  this.kamre = 4;
  this.bathroom = 2;
  this.kitchen = 1;
}
let ghar1 = new Ghar();

// agar function ko kabhi bhi call karte waqt tumne new ka use kar liya turant man mein ek blank object banaao
// jab bhi function mein this ko dekho turant us blank object ko yaad karke us jagah rakhdo

// purana tareeka objects banaane ka ek constructor function se jab javascript mein class ka concept nahi tha

// function Toffee(flavor, price, expire) {
//   this.flavor = flavor;
//   this.price = price;
//   this.expire = expire;
// }
// let t1 = new Toffee("vanilla", 10, "23-05-2026");
// let t2 = new Toffee("Gold", 50, "23-02-2025");
// let t3 = new Toffee("Dark", 10, "23-05-2026");



// Now class is 'New' way in market.
// har class banaate hi pahli cheej jo banaate hai uski aadat daal lo uska naam hai constructor

// class Toffee {
//   constructor() {
//     this.flavor = "vanilla";
//     this.color = "brown";
//     this.taste = "sweet";
//     this.texture = "hard";
//     this.shape = "cube";
//     this.size = "small";
//     this.smell = "sweet";
//     this.sound = "crunch";
//     this.temperature = "room temperature";
//     this.origin = "USA";
//     this.ingredients = ["sugar", "butter", "milk", "vanilla extract"];
//   }
// }
// let t1 = new Toffee();




class Toffee {
  constructor(flavor, color, taste) {
    this.flavor = flavor;
    this.color = color;
    this.taste = taste;
  }
}
let t1 = new Toffee('vanilla', 'whiteSmoke', 'sweet');
let t2 = new Toffee('dark', 'black', 'sweet');