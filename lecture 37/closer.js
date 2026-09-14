// function outter(){
//     let a=5;
//     function inner(){
//         console.log(a);
//         let a=7;
//     }
//     inner()
// }
// outter()


// function outter() {
//     const a = 5;

//     function inner() {
//         console.log(a);
//     }

//     return inner;
// }

// const response = outter();

// console.log(outter);
// console.log(response());

// response();


function outter() {
    let count = 0;

    function counter() {
        count = count + 1;
        console.log(count);
    }

    return counter;
}

const counter = outter();
const counter2 = outter();

counter();
counter2();
counter();

counter2();
counter2();


let arr=[1,2,3,4,5]
let arr2=arr.filter(val => val >2)
arr2.pop()
console.log(arr2)
console.log(arr2)
