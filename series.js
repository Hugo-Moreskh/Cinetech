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
        const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&page=${pageNumber}`;

        const res = await fetch(url);
        const resData = await res.json();
        const movies = resData.results;

        // Efface le contenu précédent
        divContainer.innerHTML = '';
        // console.log(resData)

        movies.forEach(movie => {

            // card.appendChild(title);
            if (movie.adult == false){
            // Ajoute la carte à la galerie de cartes des séries
            const card = document.createElement("div");
            card.classList.add("card");


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

            const favorisButton = document.createElement("button");
            favorisButton.classList.add("bouton_fav")

            const imgButton = document.createElement("img");
            imgButton.src="images/logo_popcorn.png"
            imgButton.classList.add("favoris")


            details.appendChild(details_title);
            details.appendChild(details_VO);
            details.appendChild(details_overview);
            favorisButton.appendChild(imgButton);
            details.appendChild(favorisButton)

            const favoriteMovies =
            JSON.parse(localStorage.getItem("favoriteMovies")) || [];
            if (favoriteMovies.includes(movie.id)) {
                favorisButton.classList.add("favoris-active"); // Ajouter la classe "favoris-active" si l'ID du film est présent dans le stockage local
            }
        
            favorisButton.addEventListener("click", function () {
              favorisButton.classList.toggle("favoris-inactif");
              favorisButton.classList.toggle("favoris-active");
              saveFavoriteSeriesToLocalStorage(movie); // Appeler la fonction pour enregistrer le film dans le stockage local
              console.log("Bouton favoris cliqué");
            });



            card.appendChild(details);
            details_overview.addEventListener('click', () => {
                window.location.href = `detail.html?id=${movie.id}`;
            });
            
            
        }
            console.log(movie)
    });
}

async function searchMovie (input) {

    searchTerm = input;

    if (input.length >= 1)
    { 
    const apiKey = 'e4e579c63025eb13c4c8457b41c2ced2';
    const url = `https://api.themoviedb.org/3/search/tv?query=${searchTerm}&include_adult=false&language=fr&page=${pageNumber}&api_key=${apiKey}`;

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

            const favorisButton = document.createElement("button");
            favorisButton.classList.add("bouton_fav")

            const imgButton = document.createElement("img");
            imgButton.src="images/logo_popcorn.png"
            imgButton.classList.add("favoris")


            details.appendChild(details_title);
            details.appendChild(details_VO);
            details.appendChild(details_overview);
            favorisButton.appendChild(imgButton);
            details.appendChild(favorisButton)

            const favoriteMovies =
            JSON.parse(localStorage.getItem("favoriteMovies")) || [];
            if (favoriteMovies.includes(movie.id)) {
                favorisButton.classList.add("favoris-active"); // Ajouter la classe "favoris-active" si l'ID du film est présent dans le stockage local
            }
        
            favorisButton.addEventListener("click", function () {
              favorisButton.classList.toggle("favoris-inactif");
              favorisButton.classList.toggle("favoris-active");
              saveFavoriteSeriesToLocalStorage(movie); // Appeler la fonction pour enregistrer le film dans le stockage local
              console.log("Bouton favoris cliqué");
            });



            card.appendChild(details);
            details_overview.addEventListener('click', () => {
                window.location.href = `detail.html?id=${movie.id}`;
            });
        }
        
    });
} else {
    fetchAndDisplayMovies(pageNumber);

}

}

function saveFavoriteSeriesToLocalStorage(serieData) {
    let favoriteSeries = JSON.parse(localStorage.getItem("favoriteSeries")) || [];
  
    const index = favoriteSeries.indexOf(serieData.id); // Vérifier si l'ID du film est déjà dans le tableau des favoris
  
    if (index === -1) {
      // Si l'ID n'est pas trouvé dans le tableau, ajoutez-le
      favoriteSeries.push(serieData.id);
    } else {
      // Si l'ID est déjà présent dans le tableau, retirez-le
      favoriteSeries = favoriteSeries.filter((id) => id !== serieData.id);
    }
  
    // Mettez à jour le stockage local avec le tableau des favoris modifié
    localStorage.setItem("favoriteSeries", JSON.stringify(favoriteSeries));
  }

input.addEventListener("input", function () {
    searchMovie(input.value)
});
fetchAndDisplayMovies(pageNumber);
