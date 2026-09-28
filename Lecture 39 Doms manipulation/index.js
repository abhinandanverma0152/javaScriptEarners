// let h1=document.getElementById("h1")
// let h1=document.querySelector("h1")
// let h1=document.querySelectorAll("h1")
// console.log(h1);

let p=document.querySelector("#idhe");
// p.textContent="Hello Hamare pyare bache "
// p.innerHTML="<h3>hello dosto </h3>"
// console.log(p);

// p.setAttribute("abhay","vayash")
// p.setAttribute("style","background-color:pink; font-size:90px")


// let btn=document.querySelector("#btn")
// btn.setAttribute("disabled","true")
// btn.textContent="remove"


// let res=p.getAttribute("style")
// console.log(res);

// p.removeAttribute("style")
// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random")

// p.style.backgroundColor="red"



// let div=document.createElement("div")
// div.textContent="hello"
// console.log(div)


// let body=document.querySelector("body")
// body.appendChild(div)

// let products = [
//   {
//     name: "Iphone 20",
//     price: 12342
//   },
//   {
//     name: "Samsung 15",
//     price: 62324
//   },
//   {
//     name: "MI 23",
//     price: 35354
//   },
//   {
//     name: "Poco 10",
//     price: 43534
//   },
//   {
//     name: "Lava 12",
//     price: 53422
//   }
// ];

// let productList = document.querySelector("#product-List")
// products.forEach((product)=>{
//     const card = document.createElement("p")
//     card.textContent=`${product.name} - ${product.price}`
//     productList.append(card)
// })






let productList = document.querySelector("#product-list");

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");
    card.innerHTML = `<div>
            <img src="https://m.media-amazon.com/imagesYRpL._SX679.jpg
        </div>
        <div class="productDetail">
            <p>iPhone 16 pro</p>
            <p>143243</p>
        </div>`;

    productList.append(card);
});

let h2=document.querySelector("h2")
body.removeChild(h2)  // you have to perform on parent 


h2.remove()  // directly on the element you want to remove