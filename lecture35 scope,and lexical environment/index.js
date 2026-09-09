
// let username="abhinana";
// console.log(username) 

// // scope ->block
// if(true){
//     console.log("hello");  //block
//     console.log("hiii");
// }


// {

//     let city="ram"
//     console.log(city);
// }


// function hello(){
//     let state = "apple";
//     console.log(state);
// }


// function hello() {
//     let state = "Uttar Pradesh";
//     console.log(state);

//     var productName = "Iphone 1000 pro ulta max";
//     console.log(productName);
// }


// function counter(){
//     let count = 0
//     count = count + 1
//     console.log(count);
    
// }

// counter()
// counter()

     //global declare
//  let count = 0;
// function counter(){
//     count = count + 2
//     console.log(count);
// }

// counter()
// counter()



//hosting

// var a=5;
// let b=10;
// console.log(a+b);



var a = 5;
let b = 10;

console.log(a + b);

function outer() {
    let num1 = 10;
    let num2 = 20;

    function inner(){
     let num1 = 50;
    let num2 = 60;
    return num1 + num2;
    }
const result=inner()+ num1+num2;
 
    return result;
}

const result = outer();
// const result2 = fun1();

console.log(result);