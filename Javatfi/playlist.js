// Es la página a donde el usuario podrá ver la lista de canciones que seleccionó  como favoritas.
//La lista de temas debe recuperarse desde el storage del navegador y presentarse al usuario. Cada tema será un link que lleve a su correspondiente página de detalle. 


/*let playlist = []

//recuperamos datos del storage poara ver si hay favoritos
let recuperoStorage = localStorage.getItem
('favoritos'); 

// si hay elementos dentro del local storage
if (! recuperoStorage !== null) {
    favoritos = JSON.parse(recuperoStorage);
}

if (favoritos.includes(codigo)) {
    document.querySelector('.fav').innerHTML = `Quitar de favoritos`
} */

let recuperoStorage = localStorage.getItem('playlist'); 
let playlist = JSON.parse(recuperoStorage); 

