import { BASE_URL} from "./configurazion.js";

export const apiList = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    // fetch = permette di fare chiamate e restituisce promise
    fetch(url)
    .then((response) => response.json())
    .then((results) => {
        const items = results.Search;
        console.log(items);
        viewItems(items);
    });
};

const viewItems = (items) =>{
    //posiziono dove voglio l'elenco dei movies
    const element = document.getElementById("movies");

    items.map((item)=> {
        //creo il movie all'interno della DOM

        element.appendChild(crateHTMLMovie(item));
    } );
};

    const join = document.getElementsByClassName('card-img-top');
    const img = document.createElement('img');



