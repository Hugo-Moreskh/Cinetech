let movie;
let serie;
//******************************** FILMS********************************/ */
const cardGallery = document.getElementById("card-gallery");

async function fetchApi() {
  const apiKey = "8c4b867188ee47a1d4e40854b27391ec";

  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

  const res = await fetch(url);
  const resData = await res.json();
  return movie = resData;
}

async function fetchSerieApi() {
  const apiKey = "8c4b867188ee47a1d4e40854b27391ec";

  const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`;

  const res = await fetch(url);
  const resData = await res.json();
  return movie = resData;
}

async function createMovieCard() {

  const fetchMovies = await fetchApi();
  const movies = fetchMovies.results;
  const containerMovie = document.getElementById("card-gallery")

  movies.forEach(movie => {

    const card = document.createElement("div");
    card.classList.add("card");
  
  
    const image = document.createElement("img");
    image.src = `https://image.tmdb.org/t/p/w400${movie["poster_path"]}`;
    image.classList.add("poster")
    card.appendChild(image);
  
    containerMovie.appendChild(card);
  
    const details = document.createElement("div");
    details.classList.add("details")
  
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

    const favoriteMovies =
    JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  if (favoriteMovies.includes(movie.id)) {
    favorisButton.classList.add("favoris-active"); // Ajouter la classe "favoris-active" si l'ID du film est présent dans le stockage local
  }

    favorisButton.addEventListener("click", function () {
      favorisButton.classList.toggle("favoris-inactif");
      favorisButton.classList.toggle("favoris-active");
      saveFavoriteMoviesToLocalStorage(movie); // Appeler la fonction pour enregistrer le film dans le stockage local
      console.log("Bouton favoris cliqué");
    });

    details.appendChild(details_title);
    details.appendChild(details_VO);
    details.appendChild(details_overview);
    favorisButton.appendChild(imgButton);
    details.appendChild(favorisButton)
    card.appendChild(details)



    cardGallery.appendChild(card);
    
  });



  // card.classList.add("card"); // Ajout de la classe "card" à chaque carte
  // card.innerHTML = `
  //   <img src="https://image.tmdb.org/t/p/w300${data["poster_path"]}" >
    
  //   <div class="details_films">
  //   <h3>${data["original_title"]}</h3>
  //   <p>Langue originale: ${data["original_language"]}</p>
  //   <p>${data["overview"]}</p>

  
  //   <button class="bouton_fav"> <img class="favoris" src= "images/logo_popcorn.png"> </button>
  // </div>
  // `;
  // const favorisButton = card.querySelector(".bouton_fav"); // Sélectionner le bouton favoris
  // favorisButton.classList.add("favoris-inactif"); // Ajouter la classe "favoris-inactif" par défaut


}

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


///***************************SERIES ***************************************/

const cardSeries = document.getElementById("card-series");

async function fetchSeries() {
  const apiKey = "8c4b867188ee47a1d4e40854b27391ec";
  const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`;

  const res = await fetch(url);
  const resData = await res.json();
  serie = resData;
  console.log(serie);
  displaySeriesCards(serie.results);
}

async function createSeriesCard() {

    const fetchSeries= await fetchSerieApi();
    const series = fetchSeries.results;
    const containerSerie = document.getElementById("card-series")
  
    series.forEach(movie => {
  
      const card = document.createElement("div");
      card.classList.add("card");
    
    
      const image = document.createElement("img");
      image.src = `https://image.tmdb.org/t/p/w400${movie["poster_path"]}`;
      image.classList.add("poster")
      card.appendChild(image);
    
      containerSerie.appendChild(card);
    
      const details = document.createElement("div");
      details.classList.add("details")
    
      const details_title = document.createElement("h2");
      details_title.textContent = movie.name;
    
      const details_VO = document.createElement("h3");
      details_VO.textContent = movie.original_language;
    
      const details_overview = document.createElement("p");
      details_overview.textContent = movie.overview;

      const favorisButton = document.createElement("button");
      favorisButton.classList.add("bouton_fav")

      const imgButton = document.createElement("img");
      imgButton.src="images/logo_popcorn.png"
      imgButton.classList.add("favoris")
  

      const favoriteMovies =
      JSON.parse(localStorage.getItem("favoriteSeries")) || [];
    if (favoriteMovies.includes(movie.id)) {
      favorisButton.classList.add("favoris-active"); // Ajouter la classe "favoris-active" si l'ID du film est présent dans le stockage local
    }
  
      favorisButton.addEventListener("click", function () {
        favorisButton.classList.toggle("favoris-inactif");
        favorisButton.classList.toggle("favoris-active");
        saveFavoriteSeriesToLocalStorage(movie); // Appeler la fonction pour enregistrer le film dans le stockage local
        console.log("Bouton favoris cliqué");
      });
    
      details.appendChild(details_title);
      details.appendChild(details_VO);
      details.appendChild(details_overview);
      favorisButton.appendChild(imgButton);
      details.appendChild(favorisButton)
      card.appendChild(details)
      
    });

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
  
  
  
    // card.classList.add("card"); // Ajout de la classe "card" à chaque carte
    // card.innerHTML = `
    //   <img src="https://image.tmdb.org/t/p/w300${data["poster_path"]}" >
      
    //   <div class="details_films">
    //   <h3>${data["original_title"]}</h3>
    //   <p>Langue originale: ${data["original_language"]}</p>
    //   <p>${data["overview"]}</p>
    //   <button class="bouton_fav"> <img class="favoris" src= "images/logo_popcorn.png"> </button>
    // </div>
    // `;
    // const favorisButton = card.querySelector(".bouton_fav"); // Sélectionner le bouton favoris
    // favorisButton.classList.add("favoris-inactif"); // Ajouter la classe "favoris-inactif" par défaut
  
    // const favoriteMovies =
    //   JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    // if (favoriteMovies.includes(data.id)) {
    //   favorisButton.classList.add("favoris-active"); // Ajouter la classe "favoris-active" si l'ID du film est présent dans le stockage local
    // }
  
    // favorisButton.addEventListener("click", function () {
    //   favorisButton.classList.toggle("favoris-inactif");
    //   favorisButton.classList.toggle("favoris-active");
    //   saveFavoriteMoviesToLocalStorage(data); // Appeler la fonction pour enregistrer le film dans le stockage local
    //   console.log("Bouton favoris cliqué");
    // });
    // cardGallery.appendChild(card);
}
  
// Fonction pour enregistrer un film dans le stockage local
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



createMovieCard();
createSeriesCard();
