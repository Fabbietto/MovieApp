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

   /**************  PROVIAMO AD INSERIRE UN IMMAGINE    **************/
   const create = (movie) => {
    const element = document.getElementById("card-titolo-1");
    const titolo_vecchio = document.getElementById("film-titolo-1");
    const desc_vecchia = document.getElementById("desc-film-1");

    const img_vecchia = document.getElementById("card-img-1");

    const h5 = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    h5.appendChild(node);

    const para = document.createElement("p");
    const node2 = document.createTextNode(movie.Type);
    para.appendChild(node2);

    element.replaceChild(h5, titolo_vecchio);
    element.replaceChild(para, desc_vecchia);
    img_vecchia.src = `${movie.Poster}`;
    
}

export const lista_api_t = (s, type) => {
    const url = URL_BASE + `t=${s}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems_t(item); // richiamo della funzione "viewItems"
        });
};

const viewItems_t = (item) =>{
   create(item);
}






// per ricerca con s
export const lista_api_2 = (s, type) => {
    const url = URL_BASE + `s=${s}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(results => {
            const items = results.Search;
            
            secondaFetch(items); // richiamo della funzione "viewItems"
        });
};

const secondaFetch = (listaFilm) =>{
    listaFilm.map((film) => {

        let url = URL_BASE + `t=${traduciTitolo(film.Title)}`;

        fetch(url)
        .then(response => response.json())
        .then(results => {
            const risultato = results;
            
            viewItems_t(risultato);
            
        });
    })
}

const traduciTitolo = (titolo) => {
    const stringa = titolo.replace(/\s/g, "%20");  // Trasforma gli spazzzzi in %20 per ricerca migliore
    return stringa;
} 


