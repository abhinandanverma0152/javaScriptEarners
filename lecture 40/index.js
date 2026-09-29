

// let div = document.querySelector("#reveal-gift")
// let h1 = document.querySelector("#gift")


// // let btn = document.querySelector("#btn")


// function revealGift(event) {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.currentTarget);
//     h1.classList.toggle("hidden")
//     // h1.classList.remove("hidden")
//     // h1.classList.add("visible")
// }

// div.addEventListener('click', revealGift)


// btn.addEventListener('click', (e) => {

//     console.log(e);
//     console.log(e.key);
//     console.log(e.clientX);
//     console.log(e.clientY);
// })


// btn.addEventListener('click', function(){
//     console.log("hello hello mick check");
// })

// btn.addEventListener("click",()=>
//     console.log("check karo mick ghar ja kar"))  //arrow function

// btn.addEventListener("click",()=>
//     console.log("check karo mick ghar ja kar"))  //arrow function 
// let counter = 0;

// function fun1(e) {
//     if (counter < 3) {
//         console.log(e);
//         counter++;
//     } else {
//         btn.removeEventListener('click', fun1);
//     }
// }

// btn.addEventListener('click', fun1);


let outter = document.querySelector("#outter")
let inner = document.querySelector("#inner")


let btn2 = document.querySelector("#btn2")

outter.addEventListener('click', (e) => {
     e.stopPropagation()
    console.log("outter");
});
inner.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log("inner");

});

btn2.addEventListener('click', (e) => {
     e.stopPropagation()
    console.log("btn2");

});
