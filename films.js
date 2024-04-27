// Récupère les éléments du DOM
const divContainer = document.getElementById("card-gallery-films");
const input = document.getElementById("input_film");

const btn_moins = document.getElementById("btn_moins");
const btn_plus = document.getElementById("btn_plus");
const btn_actuel = document.getElementById("btn_actuel")

let pageNumber = 1; // Numéro de la page souhaitée

btn_actuel.textContent = pageNumber;


// Écouteur d'événement pour le bouton "Plus"
btn_plus.addEventListener("click", function () {
    pageNumber++;
    fetchAndDisplayMovies(pageNumber);
    btn_actuel.textContent = pageNumber;

});

// Écouteur d'événement pour le bouton "Moins"
btn_moins.addEventListener("click", function () {
    if (pageNumber > 1) {
        pageNumber--;
        if (input.contains != ""){
            searchMovie(input)
        } else {
            fetchAndDisplayMovies(pageNumber);

        }
        btn_actuel.textContent = pageNumber;

    }
});


// Fonction pour récupérer et afficher les films en fonction du numéro de page
async function fetchAndDisplayMovies(pageNumber) {
        const apiKey = 'e4e579c63025eb13c4c8457b41c2ced2';
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNumber}`;

        const res = await fetch(url);
        const resData = await res.json();
        const movies = resData.results;

        // Efface le contenu précédent
        divContainer.innerHTML = '';
        // console.log(resData)

        // Affiche les titres des films
        movies.forEach(movie => {

            // card.appendChild(title);
            if (movie.adult == false){
            // Ajoute la carte à la galerie de cartes des séries
            const card = document.createElement("div");
            card.classList.add("card");

            // const title = document.createElement("h2");
            // title.textContent = movie.title;

            const image = document.createElement("img");
            image.src = `https://image.tmdb.org/t/p/w400${movie["poster_path"]}`;
            image.classList.add("poster")
            card.appendChild(image);

            // card.appendChild(title);
            divContainer.appendChild(card);

            const details = document.createElement("div");
            details.classList.add("details_films")

            const details_title = document.createElement("h2");
            details_title.textContent = movie.title

            const details_VO = document.createElement("h3");
            details_VO.textContent = movie.original_language;

            const details_overview = document.createElement("p");
            details_overview.textContent = movie.overview;

            details.appendChild(details_title);
            details.appendChild(details_VO);
            details.appendChild(details_overview);

            card.appendChild(details);
            card.addEventListener('click', () => {
                window.location.href = `detail.html?id=${movie.id}`;
            });            }
            console.log(movie)
    });
}

async function searchMovie (input) {

    searchTerm = input;

    if (input.length >= 1)
    { 
    const apiKey = 'e4e579c63025eb13c4c8457b41c2ced2';
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=fr&page=${pageNumber}&api_key=${apiKey}`;

    const res = await fetch(url);
    const resData = await res.json();
    const movies = resData.results;


    divContainer.innerHTML=""


    movies.forEach(movie => {

        if (movie.poster_path)
        { 

        const card = document.createElement("div");
            card.classList.add("card");

            // const title = document.createElement("h2");
            // title.textContent = movie.title;

            const image = document.createElement("img");
            image.src = `https://image.tmdb.org/t/p/w400${movie["poster_path"]}`;
            image.classList.add("poster")
            card.appendChild(image);

            // card.appendChild(title);
            divContainer.appendChild(card);

            const details = document.createElement("div");
            details.classList.add("details_films")

            const details_title = document.createElement("h2");
            details_title.textContent = movie.title

            const details_VO = document.createElement("h3");
            details_VO.textContent = movie.original_language;

            const details_overview = document.createElement("p");
            details_overview.textContent = movie.overview;

            details.appendChild(details_title);
            details.appendChild(details_VO);
            details.appendChild(details_overview);

            card.appendChild(details);
        }
        
    });
} else {
    fetchAndDisplayMovies(pageNumber);

}

}


input.addEventListener("input", function () {
    searchMovie(input.value)
});
fetchAndDisplayMovies(pageNumber);
