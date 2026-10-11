

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



Promise.reject("hi error").then(function f1(){
    console.log("inside resolve promise");
 }).then(function f2(val){ 
     console.log("then");
     }).catch(function (err){
        console.log(err)
     });
