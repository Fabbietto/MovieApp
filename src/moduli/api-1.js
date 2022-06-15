import { BASE_URL } from "./configurazion.js";


export const apiListAS = async (s, type) => {
  
  // fetch = permette di fare chiamate e restituisce promise
    const url = BASE_URL + `s=${s}&type=${type}`;
    const response = await fetch(url);
    const results = await response.json();
    const items = results.Search;
    viewItems(items);
};
    



const viewItems = (items) => {
  
let i = 1;
items.map((item) => {
  crateHTMLMovie(item, i);
  i++;
});
};


const crateHTMLMovie = (movie, i) => {
    
  const element = document.getElementById(`card-titolo-${i}`);   
    

    const para_old = document.getElementById(`desc-film-${i}`);
    const para = document.createElement("p");
    const node2 = document.createTextNode(movie.Year);
    para.appendChild(node2);


    const immg = document.getElementById(`card-img-${i}`);
    immg.src= `${movie.Poster}`;


    const titolo_old = document.getElementById(`film-titolo-${i}`);
    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    element.replaceChild (titolo, titolo_old);
    element.replaceChild (para, para_old);

  
};

export const apiListS = async (s, type) => {
  
  // fetch = permette di fare chiamate e restituisce promise
    const url = BASE_URL + `s=${s}&type=${type}`;
    const response = await fetch(url);
    const results = await response.json();
    const items = results.Search;
    viewItemsseries(items);
};

const viewItemsseries = (items) => {
  
  let i = 1;
  items.map((item) => {
    crateHTMLSERIE(item, i);
    i++;
  });
  };
  const crateHTMLSERIE = (series, i) => {
    
    const element = document.getElementById(`card-titolo-serie-${i}`);   
      
  
      const para_old = document.getElementById(`desc-ser-${i}`);
      const para = document.createElement("p");
      const node2 = document.createTextNode(series.Year);
      para.appendChild(node2);
  
  
      const immg = document.getElementById(`card-img-ser-${i}`);
      immg.src= `${series.Poster}`;
  
  
      const titolo_old = document.getElementById(`serie-titolo-${i}`);
      const titolo = document.createElement("h5");
      const node = document.createTextNode(series.Title);
      titolo.appendChild(node);
  
      element.replaceChild (titolo, titolo_old);
      element.replaceChild (para, para_old);
  
    
  };
