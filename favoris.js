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
  </div>
  `;

  document.getElementById("favoris").appendChild(card); // Ajoutez la carte à la div "favoris"
}
