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
    <button class="bouton-fav"> <img class="favoris" src= "images/logo_popcorn.png"> </button>
  </div>
  `;
  cardGallery.appendChild(card);
}

function displayCards(movies) {
  for (const movie of movies) {
    createCard(movie);
  }
}

async function fetchApi() {
  const apiKey = "8c4b867188ee47a1d4e40854b27391ec";

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

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
</div>
`;
  // Ajoute la carte à la galerie de cartes des séries
  cardSeries.appendChild(card);
}

async function fetchSeries() {
  const apiKey = "8c4b867188ee47a1d4e40854b27391ec";
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`;

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

// function favorisButton() {
//   const favButton = document.getElementsByClassName("bouton-fav");

//   // Ajoute un écouteur d'événements pour détecter les clics sur le bouton
//   favButton.addEventListener("click", function () {
//     console.log("test");
//     // Vérifie si le bouton a la classe "active"
//     // const isActive = favButton.classList.contains("active");

//     // Si le bouton est déjà actif, on le désactive
//     // if (isActive) {
//     //   favButton.classList.remove("active");
//     //   favButton.style.opacity = "0.5"; // Opacity à 50%
//     // } else {
//     //   // Sinon, on l'active
//     //   favButton.classList.add("active");
//     //   favButton.style.opacity = "1"; // Opacity à 100%
//     // }
//   });
// }

// // Appel de la fonction pour initialiser le comportement du bouton favoris
// favorisButton();
