// class Library {
//     constructor () {
//         this.books = [];
//     }
//     addBook(books) {
//         this.books.push(...books);
//         console.log(`${this.books} are added successfully!`);
//     }
//     listAllBooks() {
//         this.books.forEach((book, idx) => {
//             console.log(`${idx + 1}) ${book.name} written by ${book.author}`);
//         });
//     }
// }

// class Book {
//     constructor (name, isbn, price, author) {
//         this.name = name;
//         this.isbn = isbn;
//         this.price = price;
//         this.author = author;
//         this.readStatus = false;
//     }
//     info() {
//         console.log(`${this.readStatus ? '✅' : '❌'} ${this.name} is written by ${this.author} and you have ${this.readStatus ? 'read it' : 'not read this book'} and is available at Flipkart, Amazon at a price rage ${this.price}rs.`);
//     }
//     changeReadStatus() {
//         this.readStatus = !this.readStatus;
//     }
// }


// let patnaLibrary = new Library();
// let book1 = new Book ('Deging the wealth in', '2ger5ger688v', 599, 'Sudhanshu');
// let book2 = new Book ('Master the Health', '2ger5ger698v', 299, 'Sudhanshu Ghosh');
// let book3 = new Book ('Hole is Infinite', '2ger5ger708v', 499, 'Saurabh Kumar &  Abhai');
// console.log(book1);
// book1.changeReadStatus(); // changed the status of reading
// console.log(book1.info()); // show full info

// patnaLibrary.addBook([book1, book2, book3]);
// patnaLibrary.listAllBooks();




class MobileShop {
    constructor () {
        this.mobiles = [];
    }

    addMobile(mobile) {
        this.mobiles.push(mobile);
    }
    // removeMobile() {
    //     this.mobiles.indexOf()
    // }
    listAllMobiles() {
        this.mobiles.forEach(function(mb, idx) {
            console.log(`${idx + 1}) ${mb.brand} - ${mb.model} - ${mb.color} - ${mb.price}`);
            
        })
    }
}
class Mobile {
    constructor(brand, model, price, color) {
        this.id = Math.floor(Math.random() * 100000); // this technique is not good to create ID using 'Math.random()'
        this.model = model;
        this.color = color;
        this.brand = brand;
        this.price = price;
        this.sims = [];
    }
    getMobileInfo() {
        console.log(`${this.brand} - ${this.model} = ${this.price}rs. - ${this.color}`);
    }
    insertSim(sim) {
        if (this.sims.length === 2) {
            console.log('sorry you already have 2 sims installed.');
            return;
        }
        this.sims.push(sim);
    }
}

class sim {
    constructor (comapany, balance) {
        this.comapany = comapany;
        this.balance = balance;
    }
    addBalance(balance) {
        if (balance < 0) {
            console.log('to add balance give amount greater than 0');   
            return;
        }
        this.balance += balance;
    }
}

let myMobileShop = new MobileShop();
let vivo = new Mobile('VIVO', 'Vivo T7', 14000, 'Nevy Blue');
let vio = new Mobile('VIO', 'Vio Z7', 18000, 'Light');
let jivo = new sim('Jivo', 25);

vivo.insertSim(jivo);
myMobileShop.addMobile(vivo);
myMobileShop.addMobile(vio);

console.log(myMobileShop.listAllMobiles());
vivo.getMobileInfo(); // shown mobile info
