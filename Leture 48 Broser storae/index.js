

// // let storage = localStorage.setItem("key",1)
// // let result = localStorage.getItem("num")
// // console.log(result);

// localStorage.setItem("num1", 1)
// localStorage.setItem("num2", 1)
// localStorage.setItem("num3", 1)


// let result = localStorage.getItem("nishant");
// console.log(result);

// let result2 = localStorage.key("0");
// console.log(result2);

// localStorage.removeItem("num");

// // localStorage.clear();


// document.querySelector("#clear-local-storage").addEventListener("click", () => {
//     localStorage.clear()
// })

// document.querySelector("#add-session-item").addEventListener("click", () => {
//     sessionStorage.setItem("session", "item")

// })

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
// let data=xhttp.responseText;
// console.log(data)
// };
// xhttp.open("GET", "https://api.github.com/users/abhinandanverma0152", true);
// xhttp.send();






// fetch("https://api.github.com/users/abhinandanverma0152").
//     then(data => data.json()).
//     then(data => console.log(data))

async function getUser(username = "abhinandanverma0152") {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    return data;

}

document.querySelector("#github-form").addEventListener("submit", async (e) => {
    e.preventDefault()

    let username = document.querySelector("#github-username").value

    const data = await getUser(username)

    document.querySelector("#show-profile").innerHTML =  `
     <img src=${data.avatar_url} width="100px " height="100px" alt="">
    <h2>${data.name}</h2>
        <h2>${data.name}</h2>
        <p>Bio : ${data.bio}</p>
        <p>Follwers :  ${data.followers}</p>
        <p>Follwing : ${data.following}</p>
        <p>public repo : ${data.public_repo}</p>
    `
})
