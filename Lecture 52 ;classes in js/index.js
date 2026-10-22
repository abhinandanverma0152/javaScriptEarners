



// function product(name,price){
//     console.log(this);
// }
// product();



// function outter() {
//     const random = () => {
//         console.log(this);
//     }
//     random();
// }

// outter();

// console.log(this);


function product(name,price){
    console.log(this);
}

// let user={
//     name : "Abhinandan Verma"

// }
// user.phone = "96859699685";
// console.log(user);


// function product(name,price){
//     this.name=name
//     this.price=price
//     console.log(this);
// }



// product("abh",666);






function product(name,price){
    this.name=name
    this.price=price
   return this;
}

// const p1 = product("Iphone 2324 pro max ultra galaxy fold", 3425235531);
// const p2 = product("Samsung 54321 galaxy fold black hole spaceship", 4532528797);

//  console.log(p1.name);


const p1 = new product("Iphone 2324 pro max ultra galaxy fold", 3425235531);
const p2 = new product("Samsung 54321 galaxy fold black hole spaceship", 4532528797);

//  console.log(p1.name);
//  console.log(p2.name);


//  class User{
//     constructor(){
//         console.log("hello")
//     }
//  }
//  const u1= new User();
//  console.log(u1)



//  class User{
//     constructor(){
//         this.name= "nishant"
//     }
//  }
//  const u1= new User();
//  console.log(u1)




//  class User {
//     country = "india"; // default property

//     constructor(name, country2) {
//         this.name = name;        // instance property
//         this.country = country2; // instance property
//     }

//     printName() { // instance method
//         console.log(this.name);
//     }
// }

// const u1 = new User("Nishant", "India");
// const u2 = new User("Akshay", "India");

// console.log(u1);



class BankAccount {

    constructor(balance) {
        this.balance = balance;
    }

    get() {
        console.log("Balance:", this.balance);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Bete itne paise nahi hai tere pass");
            return;
        }

        this.balance = this.balance - amount;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
    }
}

let acc1 = new BankAccount(500);

acc1.get();        // Balance: 500

acc1.withdraw(500);

acc1.get();        // Balance: 0

acc1.deposit(14322);

acc1.get();        // Balance: 14322