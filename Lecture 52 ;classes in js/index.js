



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

 console.log(p1.name);
 console.log(p2.name);