// Récupère les éléments du DOM
const divContainer = document.getElementById("card-gallery-films");
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
        fetchAndDisplayMovies(pageNumber);
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
        console.log(resData)

        // Affiche les titres des films
        movies.forEach(movie => {

            // card.appendChild(title);
            if (movie.backdrop_path){
            // Ajoute la carte à la galerie de cartes des séries
            const card = document.createElement("div");
            card.classList.add("card");

            // const title = document.createElement("h2");
            // title.textContent = movie.title;

            const image = document.createElement("img");
            image.src = `https://image.tmdb.org/t/p/w400${movie["poster_path"]}`;
            card.appendChild(image);

            // card.appendChild(title);
            divContainer.appendChild(card);

            const details = document.createElement("div");
            details.classList.add("details_films")

            const details_title = document.createElement("h2");
            details_title.textContent = movie.name

            const details_VO = document.createElement("h3");
            details_VO.textContent = movie.original_language;

            const details_overview = document.createElement("p");
            details_overview.textContent = movie.overview;

            details.appendChild(details_title);
            details.appendChild(details_VO);
            details.appendChild(details_overview);

            card.appendChild(details);
            }
            console.log(movie)



            // const card = document.createElement("div");
            // card.classList.add("card"); // Ajout de la classe "card" à chaque carte
            // card.innerHTML = `
            //   <img src="https://image.tmdb.org/t/p/w400${data["backdrop_path"]}" >
            //   <h2>${data["original_title"]}</h2>
            //   <div class="details">
            //   <h3>${data["original_title"]}</h3>
            //   <p>Langue originale: ${data["original_language"]}</p>
            //   <p>${data["overview"]}</p>
            // </div>
            // // `;
            // cardGallery.appendChild(card);

        });
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
