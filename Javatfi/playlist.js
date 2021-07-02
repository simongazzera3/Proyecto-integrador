let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);
console.log(favoritos);


let lista = document.querySelector('.miPlaylist');

if( favoritos.length == 0 ) {
    lista.innerHTML += `
    <p class=textoFav style="width:100%">No hay gifs favoritos en tu lista</p>
    `;
}  else { 
        for( let i=0; i<favoritos.length; i++ ) {
            buscarYMostrarFavoritos( favoritos[i] );
        }
    
        lista.innerHTML += `
        <button
            onclick="javascript: history.go(-1)"
            title="volver">&larr; volver</button>
        `;
    }

function buscarYMostrarFavoritos(cancionId) {

    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancionId}`

  
    fetch( url )
        .then( function(response) {
            return response.json();
        })
        .then( function(data) {

            let nombre = data.title
    let nombreArtist = data.artist.name
    let fotoArtista = data.album.cover
    let nombreAlbum = data.album.title

            lista.innerHTML += `
            <h1>${nombre}</h1>
                <img src="${fotoArtista}" alt="${nombreArtist}">
                <p> ${nombreAlbum}</p>
                <p>${nombreArtist}</p>

            `;
        })
        .catch( function(error) {
            console.log(error);
        })

}






