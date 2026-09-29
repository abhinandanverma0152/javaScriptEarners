

let btn=document.querySelector("#reveal-gift")
let h1=document.querySelector("#gift")


function revealGift(){
    h1.classList.remove("hidden")
    h1.classList.add("visible")
}

btn.addEventListener('click',revealGift)


// btn.addEventListener('click', function(){
//     console.log("hello hello mick check");
// })

// btn.addEventListener("click",()=>
//     console.log("check karo mick ghar ja kar"))  //arrow function 

// btn.addEventListener("click",()=>
//     console.log("check karo mick ghar ja kar"))  //arrow function 