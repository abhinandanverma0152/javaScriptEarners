// let products = ["tshirt", "lower", "cap", "shoes"];
// let products = [["tshirt", 566], ["lower", 543], ["cap", 53], ["shoes", 673]]
 
//    console.log(products[0]);
//    console.log(products[0][1]);






// let product1=["iphone",45655]

// let product2={
//     name : "iphone",
//     prize : 5666,
//     avgRating : 4.5,
//     totalReview : 75,
//     discount : 10,
//     'first-name ':5555
// }
// console.log(product2);
// console.log(product2.name);
// console.log(typeof(product2));
// console.log(product2["first-name "]);




// let product2 = {
//     // Example: multiply two numbers
//     multiply(a, b) {
//         return a * b;
//     }
// }

// let Math2 = {
//     abs(x) {
//         return x < 0 ? -x : x;
//     },
//     ceil(x) {
//         return (x % 1 === 0) ? x : (x > 0 ? parseInt(x) + 1 : parseInt(x));
//     },
//     floor(x) {
//         return (x % 1 === 0) ? x : (x > 0 ? parseInt(x) : parseInt(x) - 1);
//     }
// }

// // Testing
// console.log(product2.multiply(4, 5)); // 20
// console.log(Math2.abs(-7));           // 7
// console.log(Math2.ceil(4.2));         // 5
// console.log(Math2.floor(4.9));        // 4

let product2 = {
    price: 57633,
    avgRating: 4.5,
    totalReviews: 75,
    discount: 10,
    productName: "iPhone 18 Pro Max",

    printProductName() {
        console.log(this.productName);
        return this.productName;
    },

    printDiscount() {
        console.log(this.discount + "%");
        return this.discount;
    },

    // New method: calculate final price after discount
    getFinalPrice() {
        let discountedPrice = this.price - (this.price * this.discount / 100);
        console.log("Final Price: ₹" + discountedPrice);
        return discountedPrice;
    }
}

// Testing
let res = product2.printProductName(); // logs "iPhone 18 Pro Max"
console.log("Returned:", res);

product2.printDiscount();              // logs "10%"
product2.getFinalPrice();              // logs "Final Price: ₹51869.7"

