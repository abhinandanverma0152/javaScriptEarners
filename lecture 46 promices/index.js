

// const p= new Promise();
// console.log(typeof p);


// const p = new Promise((resolve, reject) => {
//     resolve("Done");
// });

// console.log(typeof p);

// const p = new Promise((resolve, reject) => {
//  console.log(resolve, reject);
// });

//  const p= new Promise(function(){})


//  console.log(typeof p);
//  console.log(p);

//  const p = new Promise(function(resolve, reject) {
//     resolve("hiii");
//     reject("Server down hai beta");
// });



// const p = new Promise(function(resolve, reject) {
//     resolve("hiii");
//     reject("Server down hai beta");
// });

// console.log("res",p)


// const res = p.then(function (val) {
//         console.log(val);
//     }, function (val) {
//         console.log(val);
//     });
// console.log("res", res);


// const res = p.then(function (val) {
//         console.log(val);
//     }, function (val) {
//         console.log(val);
//     })
//  .then(() => {},() => { })
//  .then()
//  .then()


// const res = p.then(function (val) {
//         console.log(val);
//     })
//  .then(() => { })
//  .then()
//  .then()
//  .catch( function (val) {
//         console.log(val);
//     })

// const p = new Promise(function(resolve, reject){
//     resolve(10);
// });

// p.then(function(val){
//     console.log(val);
// })
// .then(function(val){
//     console.log(val);
// })
// .then(function(val){
//     console.log(val);
// })
// .catch(function(err){
//     console.log(err);
// })
// .then(function(val){
//     console.log(val);
// })
// .finally(function(){
//     console.log("ye to hamesha chalega");
// });



// const p = new Promise(function(resolve, reject){
//     resolve("hello");
//     // reject("Server down hai beta");
// });

// p.then(function(val){
//     console.log(val);
// })
// .catch(function(val){
//     console.log(val);
// })
// .then(function(){
//     console.log("heello");
// })
// .finally(function(){
//     console.log("Ye toh hamesha chalega");
// });


// console.log("a")
// const p2 = new Promise(function(resolve, reject){
//     console.log("b");
//     resolve("hello")
// })
// p2.then(function f2(val){ 
//     console.log("then");
//     console.log("val");
// }).catch(function f3(){
//  console.log("catch");
// }).finally(function f4(){
//     console.log("finally")
// })
// console.log("c");

//  const p3 = new Promise(function(resolve, reject){
//     console.log("b");
//  })

//  Promise.resolve().then(function f1(){
//     console.log("inside resolve promise")
//  }).then(function f2(val){ 
//      console.log("then"); })



// Promise.reject("hi error").then(function f1(){
//     console.log("inside resolve promise");
//  }).then(function f2(val){ 
//      console.log("then");
//      }).catch(function (err){
//         console.log(err)
//      });


function searchPizza() {
    const p = new Promise(function(resolve, reject) {
        console.log("Pizza searching...");

        setTimeout(function fun() {
            console.log("Here is the Pizza's Menu.");

            let price = 500;

            // reject(price)
            resolve(price);

        }, 2000);
    });

    return p;
}

// function addToCart(cb2) {
//     console.log("Pizza adding to cart....");
//     setTimeout(function fun2() {
//         console.log("Pizza Added to cart");
//         cb2();
//     }, 3000);
// }

// function paymet(price) {
//     console.log(`Payment Initiated , Amount : ${price}`);
//     setTimeout(function fun3() {
//         console.log(`Payment Completed, Amount : ${price}`);
//         console.log("Bss Aa hee gaya Pizza");
//     }, 5000);
// }

searchPizza().then(function(price) {
    console.log(price);
});