// Récupère les éléments du DOM
const divContainer = document.getElementById("card-gallery-films");
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
        console.log(resData)

        // Affiche les titres des films
        movies.forEach(movie => {

            // card.appendChild(title);
          
            // Ajoute la carte à la galerie de cartes des séries
            const card = document.createElement("div");
            card.classList.add("card");

            const title = document.createElement("h2");
            title.textContent = movie.title;

            const image = document.createElement("img");
            image.src = `https://image.tmdb.org/t/p/w400${movie["backdrop_path"]}`;
            card.appendChild(image);

            card.appendChild(title);
            divContainer.appendChild(card);

        });
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des films :", error);
    }
}

function createSeriesCard() {
    card.classList.add("card"); // Ajout de la classe "card" à chaque carte
  
    // Crée une image pour chaque carte
    
  
    // Crée un paragraphe pour le titre de la série
     // Utilisez "name" pour le titre de la série
  
    // Ajoute l'image et le titre à la carte

  }

// Appel initial pour afficher les films de la première page
fetchAndDisplayMovies(pageNumber);
