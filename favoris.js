// ********************************FILMS*********************************** //

document.addEventListener("DOMContentLoaded", function () {
  const favoriteMovies =
    JSON.parse(localStorage.getItem("favoriteMovies")) || [];

  favoriteMovies.forEach((movieId) => {
    fetchMovieData(movieId)
      .then((movieData) => {
        createCard(movieData);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données du film:",
          error
        );
      });
  });
});

async function fetchMovieData(movieId) {
  const apiKey = "8c4b867188ee47a1d4e40854b27391ec"; // Remplacez par votre clé API TMDB
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
  const response = await fetch(url);
  const movieData = await response.json();
  return movieData;
}

function createCard(data) {
  const card = document.createElement("div");

  card.classList.add("card"); // Ajout de la classe "card" à chaque carte
  card.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w300${data["poster_path"]}" >
    
    <div class="details">
      <h3>${data["original_title"]}</h3>
      <p>Langue originale: ${data["original_language"]}</p>
      <p>${data["overview"]}</p>
      <button class="bouton_fav"> <img class="favoris" src= "images/logo_popcorn.png"> </button>
    </div>
  `;

  const favorisButton = card.querySelector(".bouton_fav"); // Sélectionner le bouton favoris

  favorisButton.classList.add("favoris-active"); // Ajouter la classe "favoris-active" par défaut

  favorisButton.addEventListener("click", function () {
    const movieId = data.id;
    removeFavoriteMovieFromLocalStorage(movieId); // Supprimer le film du stockage local
    card.remove(); // Supprimer la carte du DOM
  });

  document.getElementById("favorisFilms").appendChild(card); // Ajouter la carte à la div "favoris"
}

function removeFavoriteMovieFromLocalStorage(movieId) {
  let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  favoriteMovies = favoriteMovies.filter((id) => id !== movieId); // Filtrer pour retirer l'ID du film du tableau des favoris
  localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies)); // Mettre à jour le stockage local
}

// ****************************** SERIES *********************************** //

document.addEventListener("DOMContentLoaded", function () {
  const favoriteSeries =
    JSON.parse(localStorage.getItem("favoriteSeries")) || [];

  favoriteSeries.forEach((serieId) => {
    fetchSerieData(serieId)
      .then((serieData) => {
        createSeriesCard(serieData);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données de la série:",
          error
        );
      });
  });
});

async function fetchSerieData(serieId) {
  const apiKey = "8c4b867188ee47a1d4e40854b27391ec"; // Remplacez par votre clé API TMDB
  const url = `https://api.themoviedb.org/3/tv/${serieId}?api_key=${apiKey}`;
  const response = await fetch(url);
  const serieData = await response.json();
  return serieData;
}

function createSeriesCard(data) {
  const card_serie = document.createElement("div");

  card_serie.classList.add("card"); // Ajout de la classe "card" à chaque carte
  card_serie.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w300${data["poster_path"]}" >
    <div class="details">
      <h3>${data["name"]}</h3>
      <p>Langue originale: ${data["original_language"]}</p>
      <p>${data["overview"]}</p>
      <button class="bouton_fav"> <img class="favoris" src= "images/logo_popcorn.png"> </button>
    </div>
  `;

  const favorisButton = card_serie.querySelector(".bouton_fav"); // Sélectionner le bouton favoris

  favorisButton.classList.add("favoris-active"); // Ajouter la classe "favoris-active" par défaut

  favorisButton.addEventListener("click", function () {
    const serieId = data.id;
    removeFavoriteSerieFromLocalStorage(serieId); // Supprimer la série du stockage local
    card_serie.remove(); // Supprimer la carte du DOM
  });

  document.getElementById("favorisSeries").appendChild(card_serie); // Ajouter la carte à la div "favoris"
}

function removeFavoriteSerieFromLocalStorage(serieId) {
  let favoriteSeries = JSON.parse(localStorage.getItem("favoriteSeries")) || [];
  favoriteSeries = favoriteSeries.filter((id) => id !== serieId); // Filtrer pour retirer l'ID de la série du tableau des favoris
  localStorage.setItem("favoriteSeries", JSON.stringify(favoriteSeries)); // Mettre à jour le stockage local
}
