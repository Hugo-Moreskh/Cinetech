const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

const apiKey = 'e4e579c63025eb13c4c8457b41c2ced2';
const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${apiKey}`;
console.log("je suis ici")

async function searchFilm () { 

    const res = await fetch(url);
    const resData = await res.json();
    console.log(resData)
    return resData;
}


 async function createPage() {

    const movie = await searchFilm();
    const text_container = document.getElementById("text_container_detail");
    const image_container = document.getElementById("image_container_detail");
    const genre_container = document.getElementById("container_genre");

    const title = document.createElement("h1");
    title.textContent = movie.title;

    const content = document.createElement("p");
    content.textContent = movie.overview;

    const image = document.createElement("img");
    image.src = `https://image.tmdb.org/t/p/w400${movie["poster_path"]}`;

    const genres = movie.genres;

    genres.forEach(genre => {
        console.log(genre.name)
        divGenre = document.createElement("div");
        divGenre.classList.add("genre")
        divGenre.textContent = genre.name;
        genre_container.appendChild(divGenre);

    });

    text_container.appendChild(title);
    text_container.appendChild(content);
    image_container.appendChild(image);
}

createPage();
