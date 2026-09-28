"use strict"
let name="hello"
console.log(name);
// let student={
//     name :"Abhinandan",
//     printName : function(){
//         console.log(this);
//     }
// }


// let student={
//     name :"Abhinandan",
//     printName : function(){
//         console.log("hii",this.name);
//     }
// }
// let result = student.printName;
// result()


// console.log(this);

// function fun1() {
//     console.log(this);
// }

// fun1();

// var a=7;
// console.log(this.a);

// function fun1(){
//     console.log(this);
// }
// fun1();

// let student = {
//     name: "Aman",
//     printName: function () {
//         console.log("Hi!", student.name);
//     }
// }

// student.printName()
// let student2 = {
//     name :"ram",
//     printName : student.printName
// }

// student2.printName()

// let num ="something"
// let product ={
//     name :"Iphone",
//     printName : () => {
//         console.log(this.name);
//     }
// }
// product.printName()


// function fun4() {
//     let name = "something";

//     let product = {
//         name: "iPhone",
//         printName: function () {
//             const print = () => {
//                 console.log(this.name);
//             };
//             print();
//         }
//     };

//     product.printName();
// }

// fun4();


let product = {
        name: "iPhone"}

 const print = () => {
                console.log(this.name);
            };
            print();
        
