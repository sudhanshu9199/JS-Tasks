/* Q8. Valid Voter */
// let age = Number(prompt("What is your age?"));
// console.log(typeof age);

// // if (NaN === NaN) //is wrong

// if (isNaN(age)){
//     console.log("Correct! request to dana.");
// }
// else if(age >= 18) {
//     console.log(`${age} age you are valid to give Vote`);
// }
// else if (age < 11){
//     console.log('Abba goodh pi jakar');
    
// }
// else{
//     console.log(`${age} age you are not valid!`);
    
// }




/* Q9. Shop discount */
/*
| Amount         | Discount   |
| ---------------| ---------- |
| 0 - 5000       |     0%     |
| 5001 - 7000    |     5%     |
| 7001 - 9000    |     10%    |
| more than 9000 |     20%    |
 */
/** Method 1 */
// let amount = Number(prompt("What is the total Amount?"));
// if(amount > 0 && amount <= 5000){
//     console.log(amount)
// } else if(amount > 5000 && amount <= 7000){
//     console.log('Final Amount: ',amount - Math.floor((5 * amount)/100));
// } else if (amount > 7000 && amount <= 9000) {
//     console.log('Final Amount: ',amount - Math.floor((10 * amount)/100));
// } else if (amount > 9000) {
//     console.log('Final Amount: ',amount - Math.floor((20 * amount)/100));
// }
// else{
//     console.log('Invalid input.')
// }
/** Method 2 */
// let amount = Number(prompt("What is the total Amount?"));
// let discount;
// if(amount > 0 && amount <= 5000){
//     console.log(amount);
// } else if(amount > 5000 && amount <= 7000){
//     discount = 5;
// } else if (amount > 7000 && amount <= 9000) {
//     discount = 10;
// } else if (amount > 9000) {
//     discount = 20;
// }
// else{
//     console.log('Invalid input.')
// }
// console.log('Final Amount: ',amount - Math.floor((discount * amount)/100));




/*Q. Movie rating */
// let rating = Number(prompt("Enter rating on movie"));
// if (rating > 0 && rating <=2){
//     console.log(`You give ${rating} rate: Awful 😖`);
// } else if (rating > 2 && rating <= 4) {
//     console.log(`You give ${rating} rate: Poor 😕`);
// } else if (rating > 4 && rating <= 6) {
//     console.log(`You give ${rating} rate: Average 😐`);
// } else if (rating > 6 && rating <= 8) {
//     console.log(`You give ${rating} rate: Good 😊`);
// } else if (rating > 8 && rating <= 9) {
//     console.log(`You give ${rating} rate: Great 😍`);
// } else if (rating >9 && rating <= 10) {
//     console.log(`You give ${rating} rate: Masterpiece 🔥🎉`);
// }
// else {
//     console.log('Invalid! input');
// }




/* Q10. Bijli bill */
/*
|   Unit        |   Price       |
| --------------| ------------- |
| up to 100     |  Rs. 4.2/unit |
| 101 - 200     |  Rs. 6/unit   |
| 201 - 400     |  Rs. 8/unit   |
| more than 400 |  Rs. 13/unit  |
 */
// let unit = Number(prompt("Enter electricity unit"));
// let amount = 0;

// if(unit > 400) {
//     amount = (unit - 400) * 13;
//     unit = 400;
// }
// if(unit > 200 && unit <= 400) {
//     amount += (unit - 200) * 8;
//     unit = 200;
// }
// if(unit > 100 && unit <= 200) {
//     amount += (unit - 100) * 6;
//     unit = 100
// }
// amount += unit * 4.2;
// console.log(amount);




/* Q11. INR denomination */
// let amount = 500;
// if(amount > 500) {
//     console.log('500rs. notes:', Math.floor(amount / 500));
//     amount = amount % 500;
// }
// if(amount > 200) {
//     console.log('200rs. notes:',Math.floor(amount / 200));
//     amount = amount % 200;
// }
// if (amount > 100) {
//     console.log('100rs. notes:',Math.floor(amount/100));
//     amount = amount % 100;   
// }
// if (amount > 50) {
//     console.log('50rs. notes:',Math.floor(amount/50));
//     amount = amount % 50;
// }
// if (amount > 20) {
//     console.log('20rs. notes:',Math.floor(amount / 20));
//     amount = amount % 20;
// }
// if (amount > 10) {
//     console.log('10rs. notes:',Math.floor(amount / 10));
//     amount = amount % 10;
// }
// if (amount > 5) {
//     console.log('5rs. coins:',Math.floor(amount / 5));
//     amount = amount % 5;
// }
// if (amount > 2) {
//     console.log('2rs. coin:',Math.floor(amount/2));
//     amount = amount % 2;
// }
// if (amount > 1) {
//     console.log('1rs. coins :',Math.floor(amount/1));
//     amount = amount % 1;
// }