let movie;
let serie;

const cardGallery = document.getElementById("card-gallery");

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

  favorisButton.classList.add("favoris-inactif"); // Ajouter la classe "favoris-inactif" par défaut

  const favoriteMovies =
    JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  if (favoriteMovies.includes(data.id)) {
    favorisButton.classList.add("favoris-active"); // Ajouter la classe "favoris-active" si l'ID du film est présent dans le stockage local
  }

  favorisButton.addEventListener("click", function () {
    favorisButton.classList.toggle("favoris-inactif");
    favorisButton.classList.toggle("favoris-active");
    saveFavoriteMoviesToLocalStorage(data); // Appeler la fonction pour enregistrer le film dans le stockage local
    console.log("Bouton favoris cliqué");
  });
  cardGallery.appendChild(card);
}

// Fonction pour enregistrer un film dans le stockage local
// Fonction pour enregistrer un film dans le stockage local
function saveFavoriteMoviesToLocalStorage(movieData) {
  let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

  const index = favoriteMovies.indexOf(movieData.id); // Vérifier si l'ID du film est déjà dans le tableau des favoris

  if (index === -1) {
    // Si l'ID n'est pas trouvé dans le tableau, ajoutez-le
    favoriteMovies.push(movieData.id);
  } else {
    // Si l'ID est déjà présent dans le tableau, retirez-le
    favoriteMovies = favoriteMovies.filter((id) => id !== movieData.id);
  }

  // Mettez à jour le stockage local avec le tableau des favoris modifié
  localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
}

function displayCards(movies) {
  for (const movie of movies) {
    createCard(movie);
  }
}

async function fetchApi() {
  const apiKey = "8c4b867188ee47a1d4e40854b27391ec";

  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

  const res = await fetch(url);
  const resData = await res.json();
  movie = resData;
  console.log(movie);
  displayCards(movie.results);
}

fetchApi();

const cardSeries = document.getElementById("card-series");

function createSeriesCard(data) {
  const card = document.createElement("div");
  card.classList.add("card"); // Ajout de la classe "card" à chaque carte

  // Crée une image pour chaque carte
  const image = document.createElement("img");
  image.src = `https://image.tmdb.org/t/p/w300${data["poster_path"]}`;
  card.innerHTML = `
  <img src="https://image.tmdb.org/t/p/w300${data["poster_path"]}" >
  <div class="details">
  <h3>${data["name"]}</h3>
  <p>Langue originale: ${data["original_language"]}</p>
  <p>${data["overview"]}</p>
  <button class="bouton_fav"> <img class="favoris" src= "images/logo_popcorn.png"> </button>
</div>
`;
  // Ajoute la carte à la galerie de cartes des séries
  cardSeries.appendChild(card);
}

async function fetchSeries() {
  const apiKey = "8c4b867188ee47a1d4e40854b27391ec";
  const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`;

  const res = await fetch(url);
  const resData = await res.json();
  serie = resData;
  console.log(serie);
  displaySeriesCards(serie.results);
}

function displaySeriesCards(series) {
  for (const serie of series) {
    createSeriesCard(serie);
  }
}

fetchSeries();
