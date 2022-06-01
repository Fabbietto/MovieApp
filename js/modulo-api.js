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
        viewItems(items);
    });
};
/*
const viewItems = (items) =>{
    items.map((item)=> {
        console.group(item.Title);
        console.log(item.Year);
        console.log(item.Type);
        console.log(item.Poster);
        console.groupEnd();
    });
};
*/
const viewItems = (items) =>{
    //posiziono dove voglio l'elenco dei movies
    const element = document.getElementById("movies");

    items.map((item)=> {
        //creo il movie all'interno della DOM

        element.appendChild(crateHTMLMovie(item));
    } );
};
const crateHTMLMovie = (movie) => {
    //creo il tag p vuoto
    const para = document.createElement("p");
    //creo un testo con il titolo del nome del film
    const node = document.createTextNode(movie.Title);
    //inserisco dentro il tag p il testo
    para.appendChild(node);


    return para;
};


