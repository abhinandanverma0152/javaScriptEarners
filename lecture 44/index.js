// console.log("Task 1");

// console.log("Task 2");

// for(let i=0;i<10000000000;i++){

// }

// let startTime=Date.now()

// while(Date.now() - startTime < 10000){

// }

// console.log("Task 3");
// setTimeout()
// // console.log(document);
// console.log(globalThis);

// console.log("task 1");



// setTimeout(function cb(){
// console.log("task 2");
// }
// ,0)
// console.log("task 3");

// setTimeout(() => {
//     console.log("hi");
// },3000)
// console.log("task 2");

// console.log("task 1");

// setTimeout(function f1() {
//     console.log("task 2");
// }, 4000);

// setTimeout(function f2() {
//     console.log("task 5");
// }, 1000);

// setTimeout(function f3() {
//     console.log("task 4");
// }, 2000);

// console.log("task 3");



// console.log("task 1");

// setTimeout(function f1() {
//     console.log("task 2");
// }, 4000);

// let startTime = Date.now(); // ms

// while (Date.now() - startTime < 5000) {
// }

// setTimeout(function f2() {
//     console.log("task 5");
// }, 1000);

// setTimeout(function f3() {
//     console.log("task 4");
// }, 3000);

// console.log("task 3");
// let c="hi";

// let count=0;
// let id = setInterval(function () {

//     console.log("hi");

//     if (count > 5) {
//         clearInterval(id)
//     }
//      count++
// }, 2000)


const body = document.querySelector("body")

let colorStr = "0123456789abcdef"

let randomValue = Math.floor(Math.random() * colorStr.length) + 1


setInterval(() => {
    let color = ""
    for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * colorStr.length)
        color = color + colorStr[randomValue]
    }
    body.style.backgroundColor = `#${color}`
}, 100)




