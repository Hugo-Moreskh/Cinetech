let movie;
let serie;

const cardGallery = document.getElementById("card-gallery");

function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card"); // Ajout de la classe "card" à chaque carte
  card.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w400${data["backdrop_path"]}" >
    <h2>${data["original_title"]}</h2>
    <div class="details">
    <h3>${data["original_title"]}</h3>
    <p>Langue originale: ${data["original_language"]}</p>
    <p>${data["overview"]}</p>
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
  image.src = `https://image.tmdb.org/t/p/w400${data["backdrop_path"]}`;
  card.innerHTML = `
  <img src="https://image.tmdb.org/t/p/w400${data["backdrop_path"]}" >
  <h2>${data["name"]}</h2>
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
