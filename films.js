// Récupère les éléments du DOM
const divContainer = document.getElementById("card-gallery");
const btn_moins = document.getElementById("btn_moins");
const btn_plus = document.getElementById("btn_plus");

let pageNumber = 1; // Numéro de la page souhaitée

// Écouteur d'événement pour le bouton "Plus"
btn_plus.addEventListener("click", function () {
    pageNumber++;
    fetchAndDisplayMovies(pageNumber);
});

// Écouteur d'événement pour le bouton "Moins"
btn_moins.addEventListener("click", function () {
    if (pageNumber > 1) {
        pageNumber--;
        fetchAndDisplayMovies(pageNumber);
    }
});

// Fonction pour récupérer et afficher les films en fonction du numéro de page
async function fetchAndDisplayMovies(pageNumber) {
    try {
        const apiKey = 'e4e579c63025eb13c4c8457b41c2ced2';
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNumber}`;

        const res = await fetch(url);
        const resData = await res.json();
        const movies = resData.results;

        // Efface le contenu précédent
        divContainer.innerHTML = '';

        // Affiche les titres des films
        movies.forEach(movie => {
            const movieTitle = movie.title;
            const movieElement = document.createElement("p");
            movieElement.textContent = movieTitle;
            divContainer.appendChild(movieElement);
        });
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des films :", error);
    }
}

// Appel initial pour afficher les films de la première page
fetchAndDisplayMovies(pageNumber);
