


// function fun1(callback){
//     console.log("hi");
//     callback()
// }
// function cb(){
//     console.log("this is callback function");
// }

// fun1(cb);

// let arr=["a","b","c","d","e"]

// // arr.forEach()
// // arr.map()

// function a(){
//     function b(){
// console.log("this is callback function");
//     }
//     return b
// }

// let x=a();
// console.log(x);
// x();







// function searchPiza(cb1){
//     console.log("pizza searching....");
//     setTimeout(function(){
//         console.log("here is the pizza's menu ");
       
//         cb1()
//     },2000)
// }


// function addToCart(){
//     console.log("pizza added to cart");
// }
// searchPiza(addToCart)






// function searchPiza(cb1){
//     console.log("pizza searching....");
//     setTimeout(function(){
//         console.log("here is the pizza's menu ");
//        return 500;
//         cb1()
//     },2000)
// }


// function addToCart(){
//     console.log("pizza added to cart");
// }
//  let output=searchPiza()
//  console.log(output);



function searchPizza(cb1) {
    console.log("Pizza searching...");

    setTimeout(function () {
        console.log("Here is the Pizza's Menu.");
        let price = 500;
        cb1(price);
    }, 2000);
}


function addTOCart(cb2){
    console.log("pizza adding to cart....");
    setTimeout(function(){
        console.log("pizza Added to cart ");
        cb2()
    },3000)
}


function payment(price , cb3){
    console.log(`payment Initiated, Amount : ${price}`);
    setTimeout(function(){
        console.log(`payment completed,Amount : ${price}`);
        cb3()
    },5000)
}

searchPizza(function (price) {
    // console.log(price);
    addTOCart(function(){
        payment(price,function (){
            console.log("bss Pizza Aa hi Gya pizza")

        })

    },)
});