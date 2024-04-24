async function fetchNombrePages() {
    const apiKey = 'e4e579c63025eb13c4c8457b41c2ced2';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

    const res = await fetch(url);
    const resData = await res.json();
    const totalPages = resData.total_pages; // Récupère le nombre total de pages
    return totalPages;
}

async function fetchSeries(pageNumber) {
    const apiKey = 'e4e579c63025eb13c4c8457b41c2ced2';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNumber}`;

    const res = await fetch(url);
    const resData = await res.json();
     return resData.results; // Retourne la liste de films de la page spécifiée
}




async function main() {
    const pageNumber = 1; // Numéro de la page souhaitée
    const movies = await fetchSeries(pageNumber);
    console.log(movies); // Affiche la liste de films de la page spécifiée dans la console
   
    console.log(totalPages); // Affiche le nombre total de pages
}

main();


// async function afficherFilms() {
//     const totalPages = await fetchNombrePages();
//     for (let i = 1; i <= totalPages; i++) {
//         const filmsDeLaPage = await fetchSeries(i);
//         console.log(`Page ${i}:`, filmsDeLaPage);
//     }
// }

//afficherFilms(); N'ACTIVEZ PAS CETTE FONCTION PAUVRES FOUS