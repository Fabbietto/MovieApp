import { BASE_URL } from "./configurazion.js";


export const apiListAS = async (t, type) => {
  
  // fetch = permette di fare chiamate e restituisce promise
  const url = BASE_URL + `t=${t}&type=${type}`;
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
    const element = document.getElementById("card-titolo-1");
    

    const para_old = document.getElementById("desc-film-1");
    const para = document.createElement("p");
    const node2 = document.createTextNode(movie.Plot);
    para.appendChild(node2);


    const immg = document.getElementById("card-img-1");
    immg.src= `${movie.Poster}`;


    const titolo_old = document.getElementById("film-titolo-1");
    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    element.replaceChild (titolo, titolo_old);
    element.replaceChild (para, para_old);

    /*+++++++++++++++++++++++++ seconda card ++++++++++++++++++++++++++++++++++++++*/
    
    const element2 = document.getElementById("card-titolo-2");
    

    const para_old_2 = document.getElementById("desc-film-2");
    const para_2 = document.createElement("p");
    const node2_2 = document.createTextNode(movie.Plot);
    para_2.appendChild(node2_2);


    const immg_2 = document.getElementById("card-img-2");
    immg_2.src= `${movie.Poster}`;

    
    const titolo_old_2 = document.getElementById("film-titolo-2");
    const titolo_2= document.createElement("h5");
    const node_2 = document.createTextNode(movie.Title);
    titolo_2.appendChild(node_2);

    element2.replaceChild (titolo_2, titolo_old_2);
    element2.replaceChild (para_2, para_old_2);
  
};



