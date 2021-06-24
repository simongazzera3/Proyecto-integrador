let search_results = new URLSearchParams(this.location.search);
let codigo = search_results.get(`id`);
console.log(`id: ` + codigo);

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${codigo}`)
.then(function(respuestas) {
    return respuestas.json();
})
.then(function(data) {
    console.log(data);
    let nombre = data.title
    let nombreArtist = data.artist.name
    let artistId = data.artist.artistId
    let fotoArtista = data.album.cover
    let ubic = document.querySelector(`.textodetalles`)
    let nombreAlbum = data.album.title
    let albumId = data.album.albumId

    ubic.innerHTML +=`
            <h1 class="titulo">${nombre}</h1>
                <img src="${fotoArtista}" alt="${nombreArtist}">
                <p><a href="detallesalbum.html?id=${albumId}">${nombreAlbum}</a></p>
                <p><a href="detallesartistas.html?id=${artistId}">${nombreArtist}</a></p>

        <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${codigo}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
        <p class="agregar">Agregar a Mi Playlist</p>
        <p><a href="playlist.html">Ver Mi Playlist</a></p>`
}) 