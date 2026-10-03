const form=document.querySelector("#form")
const username=document.querySelector("#username")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const bio=document.querySelector("#bio")
const charCount=document.querySelector("#char-count")
const checkbox=document.querySelector("#checkbox")

const LIMIT=400;
charCount.textContent =`${LIMIT} characters remaining`;

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    // console.log("hii")

console.log({username : username.value , email : email.value ,password : password.value});

});

username.addEventListener("input" , (e) =>{
    console.log(username.value);
    
})

email.addEventListener("input" , (e) =>{
    console.log(email.value);
})

password.addEventListener("input" , (e) =>{
    console.log(password.value);
})

bio.addEventListener("input" , (e) =>{
    const remaining=LIMIT - bio.value.length;
    charCount.textContent=`${remaining} characters remaining`;
})





username.addEventListener("change" , (e) =>{
   console.log("change event", username.value);
})
username.addEventListener("input" , (e) =>{
   console.log("change event", username.value);
})
checkbox.addEventListener("input" , (e) =>{

   console.log(checkbox.checked);
})
country.addEventListener("input" , (e) =>{

   console.log(country.value);
})

username.addEventListener("focus" , (e) =>{
   console.log("change event", username.value);
})