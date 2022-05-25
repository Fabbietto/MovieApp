/*
const URL_Tafanos = "https://omdbapi.com/?apikey=fb7170de&s=tafanos";


//funzione che chiama la web api con l'elenco di tutti i contenuti di "Tafanos"
export const listTafanos = () => {
    fetch(URL_Tafanos)
    .then((response) => response.json())
    .then((results) => {
        const movies = results.Search;
        console.log(movies);
    });
};

//funzione che chiama la web api e restituisce solo le serie televisive che rispondono al nome di "Tafanos"

const URL_Tafanos_Serie = "https://omdbapi.com/?apikey=fb7170de&s=tafanos&type=series";

export const listTafanosSerie = () => {
    fetch(URL_Tafanos_Serie)
    .then((responseSerie) => responseSerie.json())
    .then((resultsSerie) => {
        const Serie = resultsSerie.Search;
        console.log(Serie);
    });
};
*/


import { BASE_URL} from "./config.js";

export const apiList = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
    .then((response) => response.json())
    .then((results) => {
        const items = results.Search;
        console.log(items);
    });
};
