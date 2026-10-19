
API = "https://www.omdbapi.com/?apikey=d9efbdc4&t=avenger"

const movieForm = document.querySelector("#movieForm");

const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");


movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const query = movieInput.value.trim()
    if (!query) {
        return
    }
    console.log(query);
    searchMovie(query);

})


async function searchMovie(movieName) {

    movieHub.innerHTML=`<div class="loader"></div>`

    let response = await fetch(`https://www.omdbapi.com/?apikey=d9efbdc4&s=${movieName}`);
    let data = await response.json()
    console.log(data);

    if(data.Response === "True"){
        displayMovies(data.Search)
    }else{
         movieHub.innerHTML=`<p>${data.Error}</p>`
    }  

}


function displayMovies(movies) {

     movieHub.innerHTML= ""


    movies.forEach((movie) => {
        const div = document.createElement("div")
        div.dataset.id=movie.imdbID

        div.setAttribute("class","movie-card")

        div.innerHTML = ` 
            <div>
                <img src=${movie.Poster} alt="">
            </div>
            
            <div>
                <p>${movie.Title}</p>
                <p>${movie.Year}</p>

            </div>
        `

     
        movieHub.append(div)
    })
}



movieHub.addEventListener("click",(e)=>  {
    e.stopPropagation();
   const movieCard= e.target.closest(".movie-card")
   
   const imdbID = movieCard.dataset.id;
   location.href=`movie-details.html?id=${imdbID}`

   

})
