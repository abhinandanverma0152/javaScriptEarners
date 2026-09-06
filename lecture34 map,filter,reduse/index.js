// let obj1 = {
//     name : "nishant",
//     phone : 7825763245
// }

// let india = "country"


// let obj2 = {
//     address : india,
//     adharCard : 5223452345543
// }
// console.log(india);
// let obj3=obj1
// console.log(obj3)

// let obj3={...obj1,...obj2}
// console.log(obj3)

// const arr=[1,2,3,4]
// arr[1] ="updated"
// console.log(arr);

// const obj={
//     name:"kasturi",
//     roll_no:26,
//     address:null


// }
// obj["name"]="vamsika"
// obj.name="sumit"
// console.log(obj);
// // obj.name="sumit"
// console.log(obj.address?.street);


// let arr=[1,2,3,4,5,6]
// arr.shift(2)
// console.log(arr);



//splice
// arr.splice(2,2)  //delete

// arr.splice(3,0,"hello"); //add
// console.log(arr)




// let arr=[1,2,3,4,5,6]
// let arr2=arr.slice(0,3)
// console.log(arr2);


// let arr3=[1,2,3,4,5,6,[7,8,9,10]]
// console.log(arr3.flat())

let arr4 = [4, 5, 6, 62, 213, 13]

let arrCopy = arr4;          // Reference copy
let arrCopy2 = [...arr4];    // Shallow clone using spread

arrCopy2.pop();              // Removes last element from arrCopy2

console.log("arr4", arr4);
console.log("arrCopy", arrCopy);
console.log("arrCopy2", arrCopy2);






