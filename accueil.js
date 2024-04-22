let movie;

const cardGallery = document.getElementById("card-gallery");

function createCard(data) {
  const card = document.createElement("div");
  card.innerHTML = `
    <h1>${data["original_title"]}</h1>
    <img src="https://image.tmdb.org/t/p/w400${data["backdrop_path"]}" >
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
