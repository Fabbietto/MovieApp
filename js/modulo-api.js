
const URL_Tafanos = "https://omdbapi.com/?apikey=fb7170de&s=tafanos";

export const listTafanos = () => {
    fetch(URL_Tafanos)
    .then((response) => response.json())
    .then((results) => {
        const movies = results.Search;
        console.log(movies);
    });
};