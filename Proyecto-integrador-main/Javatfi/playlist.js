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

let playlistwrapper = document.querySelector('listadereproduccion');
let body = document.querySelector('playlist-container') 

if(recuperoStorage == null || recuperoStorage == '[]'){

    playlist = []
    playlistwrapper.innerHTML += '<h1> No se encuentra ninguna cancion </h1>'
} 

else{
    playlist.forEach(function(trackId){
        buscarYMostrar(trackId);
        
    })
}

function buscarYMostrar(trackId) {

let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/track/' + trackId; 

fetch(url)
.then( function(response){
    return response.json();
})
.then(function(track){
    playlistwrapper.innerHTML += '<div class ="player-playlist">'

    let eliminar = documnt.querySelector('.eliminar'); 

    eliminar.onclick = function(){ 
        console.log('el boton funciona');

        let indiceArray = playlist.indexOf(track.id);
        playlist.splice(indiceArray, 1); 
        let playlistStorage = JSON.stringify(playlist);
        console.log(playlist); 
        localStorage.setItem('playlist', playlistParaStorage);
        console.log(localStorage); 
        location.reload();
    }
})
}
