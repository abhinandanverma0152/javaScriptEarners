// let originPrice=[456,654,2346]

// let discountedPrices=[]

// for(value of originPrice){
//     discountedPrices.push(value * 0.9) //10%discount

// }
// console.log(originPrice);
// console.log(discountedPrices);


// const discountedPrices2 = originPrice.map((value) =>{
//     return value * 0.9
// })
// const discountedPrices3 = originPrice.map((value) =>{
//     return value * value
// })
// console.log(discountedPrices2)
// console.log(discountedPrices3)



let students = [
    {
        name: "Ayaan",
        marks: 56,
    },
    {
        name: "Mansi",
        marks: 46,
    },
    {
        name: "Debadrita",
        marks: 33,
    },
    {
        name: "alaudin",
        marks: 12,
    },
    {
        name: "Shivan",
        marks: 30,
    },
]

// let studentNames = []

// students.forEach((value) => {
//     studentNames.push(value.name)
// })

// const studentNames = students.map((student) => student.name)
// const studentMarks = students.map((student) => student.marks)

// console.log(studentNames, studentMarks);

// let boostMarks =students.map((student) => {
//     return {...student, marks : student.marks + 10}
// })
// console.log(boostMarks);

// let failedStudents = []

//     students.forEach((students) => {
//         if(students.marks < 33){
//             failedStudents.push(students)
//         }
// })
// console.log(failedStudents);


// const failedStudents=students.filter((students)=>students.marks < 33)
// console.log(failedStudents)

// let marks=[56,24,68,79]
// let totalMarks=0

// marks.forEach((marks)=>totalMarks +=  marks)

// console.log(totalMarks)


let attendence = ["present", "present", "absent", "present", "absent"];

let obj = {};

attendence.forEach((value) => {
    if (obj[value]) {
        obj[value] += 1;
    } else {
        obj[value] = 1;
    }
});

console.log(obj); 
// Expected Output: { present: 3, absent: 2 }
