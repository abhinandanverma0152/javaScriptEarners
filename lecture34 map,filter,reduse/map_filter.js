let originPrice=[456,654,2346]

let discountedPrices=[]

for(value of originPrice){
    discountedPrices.push(value * 0.9) //10%discount

}
console.log(originPrice);
console.log(discountedPrices);


const discountedPrices2 = originPrice.map((value) =>{
    return value * 0.9
})
const discountedPrices3 = originPrice.map((value) =>{
    return value * value
})
console.log(discountedPrices2)
console.log(discountedPrices3)



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
        name: "Shivan",
        marks: 30,
    },
]
