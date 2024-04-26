const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

const apiKey = 'e4e579c63025eb13c4c8457b41c2ced2';
const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

async function searchFilm () { 

    const res = await fetch(url);
    const resData = await res.json();
    return resData;
}
 console.log(searchFilm());

 async function createPage() {

    const movie = await searchFilm();
    const container = document.getElementById("text_container");

    const title = document.createElement("h1");
    title.textContent = movie.title;

    const content = document.createElement("p");
    content.textContent = movie.overview

    container.appendChild(title);
    container.appendChild(content);
}

createPage();
