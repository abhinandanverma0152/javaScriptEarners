 
//  let obj={}

//  console.log(obj);


// let arr=[1,2,3,4]
// console.log(arr);



// Array.prototype.printItems = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// let arr = [1, 2, 3];

// // console.log(arr.__proto__.__proto__ === user.__proto__);
// console.log(arr.__proto__);

// arr.printItems(arr);

// let colors = ["red", "green","orange"];

// colors.printItems(colors);



// Array.prototype.printItems = function () {
//     for (let i = 0; i <this.length; i++) {
//         console.log(this[i]);
//     }
// }

// let arr = [1, 2, 3];

// // console.log(arr.__proto__.__proto__ === user.__proto__);
// console.log(arr.__proto__);

// arr.printItems(arr);

// let colors = ["red", "green","orange"];
// arr.printItems();
// colors.printItems();



// String.prototype.nishant = function () {
//     console.log("hello ye maine banaya hai");
//     return this.firstTwoCharacters 
// }

// "dsfabfdlvn".nishant();




// let user={
//     name: "abhinandan",
//     toString(){
//         console.log("ye apna method hai");
//     }

// }

// console.log(user.toString());


// let animal={
//     eat(){

//     }
// }

// let person=Object.create(animal)
// person.walk=function(){}

// let student=Object.create(person)
// student.study=function(){}


// console.log(person);
// console.log(student);



// class User {
//     country = "india"; // default property

//     constructor(name, country2) {
//         this.name = name;       // instance property
//         this.country = country2; // instance property
//     }

//     printName() { // instance method
//         console.log(this.name);
//     }
// }

// const u1 = new User("Nishant", "India");
// const u2 = new User("Akshay", "India");

// console.log(u1);
// console.log(u2);




class User {}

class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Invalid amount");
            return;
        }

        this.#balance += amount;
    }

    static calculateTax() {
        console.log("calculating tax...");
    }
}

let acc1 = new BankAccount(500);
let acc3 = new BankAccount(500);
let acc2 = new BankAccount(500);

console.log(acc1 instanceof User);        // false
console.log(acc1 instanceof BankAccount); // true
console.log(new Number(1) instanceof Object); // true