


// function fun1(){
//      return Promise.resolve("fun1")
//     }
// function fun2() {
//     return Promise.resolve("fun2")
// }
// function fun3() {
//     return Promise.resolve("fun3")
   
// }

// let result = Promise.all([fun1() ,fun2() ,fun3()])
// console.log(result)



function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fun1");
        }, 3000);
    });
}

function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fun2");
        }, 1000);
    });
}

function fun3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("fun3");
        }, 5000);
    });
}

// let result = Promise.all([fun1(), fun2(), fun3()]);   
// result.then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })


// let result = Promise.allSettled([fun1(), fun2(), fun3()]);   
// result.then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })


// let result = Promise.race([fun1(), fun2(), fun3()]);   
// result.then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })


let result = Promise.any([fun1(), fun2(), fun3()]);   
result.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})




// let result = Promise.all([fun1(), fun2(), fun3()]);
// let result = Promise.allSettled([fun1(), fun2(), fun3()]);
// let result = Promise.race([fun1(), fun2(), fun3()]); // isko farak nhi pata fulfilled or rejected se, jo pehle finish hua wo output hai

.any// isko sabse pehle jo fulfilled mil gaya wo output hai