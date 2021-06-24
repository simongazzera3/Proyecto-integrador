let search_results = new URLSearchParams(this.location.search);
let codigo = search_results.get(`id`);
console.log(`id: ` + codigo);

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${codigo}`)
.then(function(respuestas) {
    return respuestas.json();
})
.then(function(data) {
    console.log(data);
    let nombre = data.title
    let nombreArtist = data.artist.name
    let genero = data.genres.name
    let fotoAlbum = data.cover
    let fechaAlbum = data.release_date
    let generoid = data.genre_id
    let ubic = document.querySelector(`.textodetalles`)

    ubic.innerHTML +=`
            <h1>${nombre}</h1>
            <h2>${nombreArtist}</h2>
            <img src="${fotoAlbum}" alt="${nombreArtist}">
            <p><a href="detallesgeneros.html?name=${generoid}">${genero}</a></p>
            <p>${fechaAlbum}</p>
        `
}) 

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${codigo}/tracks`)
.then(function(respuestas) {
    return respuestas.json();
})
.then(function(data) {
    let album = data.data
    let ubic = document.querySelector(`.detallealbumjs`)

for (let i = 0; i < 10; i++) {
    let fotosalbums = album[i].title

    ubic.innerHTML +=`
    <ol>${fotosalbums}</ol>
`
}

}) 
