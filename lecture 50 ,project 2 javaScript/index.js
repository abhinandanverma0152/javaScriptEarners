
API = "https://www.omdbapi.com/?apikey=d9efbdc4&t=avenger"

const movieForm = document.querySelector("#movieForm");

const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");
const hamburger = document.querySelector("#hamburger");


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


let data=[{
    "Title": "Italian Spiderman",
    "Year": "2007",
    "Rated": "N/A",
    "Released": "08 Nov 2007",
    "Runtime": "40 min",
    "Genre": "Short, Action, Comedy",
    "Director": "Dario Russo",
    "Writer": "Dario Russo, David Ashby, Tait Wilson",
    "Actors": "David Ashby, Chris Asimos, Anna Cashman",
    "Plot": "Have you ever wondered what would happen if an Italian producer took quaaludes, stumbled into a theater, and saw the first 5 minutes of spider man 2? Well worry no more because Italian Spider-Man is here to haunt your dreams with meteors, snake men, and macchiatos. Let's do it PussyCat!",
    "Language": "English, Italian",
    "Country": "Australia",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.8/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.8",
    "imdbVotes": "1,391",
    "imdbID": "tt2705436",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}]

displayMovies(data)


hamburger.addEventListener("click",(e) => {
    e.stopPropagation();


   options.classList.toggle("hidden")
    console.log("hii");
})
