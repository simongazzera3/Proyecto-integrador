let search_results = new URLSearchParams(this.location.search);
let codigo = search_results.get(`id`);
console.log(`id: ` + codigo);

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${codigo}`)
.then(function(respuestas) {
    return respuestas.json();
})
.then(function(data) {
    console.log(data);
    let fotoArtista = data.picture
    let nombreArtista = data.name
    let canciones = data.tracklist
    let ubic = document.querySelector(`.textodetalles`)

    ubic.innerHTML +=`
            <h1>${nombreArtista}</h1>
            <img src="${fotoArtista}" alt="${nombreArtista}">
            <img src="${canciones}" alt="${nombreArtista}">
        `
}) 
