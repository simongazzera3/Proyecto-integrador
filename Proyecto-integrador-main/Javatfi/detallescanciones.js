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
    let fotoArtista = data.album.cover
    let ubic = document.querySelector(`.textodetalles`)
    let nombreAlbum = data.album.title

    ubic.innerHTML +=`
            <h1>${nombre}</h1>
                <img src="${fotoArtista}" alt="${nombreArtist}">
                <p>${nombreAlbum}</p>
                <p>${nombreArtist}</p>

        <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${codigo}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
        <p class="agregar">Agregar a Mi Playlist</p>
        <p><a href="playlist.html">Ver Mi Playlist</a></p>`
}) 