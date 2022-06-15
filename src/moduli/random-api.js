import { BASE_URL } from "./configurazion.js";


export const apiListAS = async (i, type) => {
  
  // fetch = permette di fare chiamate e restituisce promise
  const url = BASE_URL + `i=${i}&type=${type}`;
  try{
    
    const response = await fetch(url);
    const results = await response.json();
    await viewItems(results);
    }catch(error){
      console.log(error.massage);
    } finally{
      console.log("finally");
    }
}


const viewItems = (items) => {
  
/*  items.map((item) => {
    element.appendChild(crateHTMLMovie(item));
});
  */
  crateHTMLMovie(items);
};
const crateHTMLMovie = (movie) => {
    const element = document.getElementById("randomCard");
    const element2 = document.getElementById("cardsium");
    
   
   /* 
// descrizione
    const para_old = document.getElementById("desc-film-1");
    const para = document.createElement("p");
    const node2 = document.createTextNode(movie.Plot);
    para.appendChild(node2);
*/
// poster
    const immg = document.getElementById("card-img");
    immg.src= `${movie.Poster}`;

// titolo
    const titolo_old = document.getElementById("film-titolo-1");
    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    element2.replaceChild (titolo, titolo_old);
  //  element.replaceChild (para, para_old);

  
};



