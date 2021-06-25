<<<<<<< HEAD
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
    let ubic = document.querySelector(`.textodetalles`)

    ubic.innerHTML +=`
            <h1>${nombreArtista}</h1>
            <img src="${fotoArtista}" alt="${nombreArtista}">
        `
}) 

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${codigo}/albums`)
.then(function(respuestas) {
    return respuestas.json();
})
.then(function(data) {
    let album = data.data
    let ubic = document.querySelector(`.listadetallesartista`)

for (let i = 0; i < 5; i++) {
    let fotosalbums = album[i].cover_medium

    ubic.innerHTML +=`
    <img src="${fotosalbums}" alt="">
`
}

}) 

=======
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
    let ubic = document.querySelector(`.textodetalles`)

    ubic.innerHTML +=`
            <h1>${nombreArtista}</h1>
            <img src="${fotoArtista}" alt="${nombreArtista}">
        `
}) 

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${codigo}/albums`)
.then(function(respuestas) {
    return respuestas.json();
})
.then(function(data) {
    let album = data.data
    let ubic = document.querySelector(`.listadetallesartista`)

for (let i = 0; i < 5; i++) {
    let fotosalbums = album[i].cover_medium

    ubic.innerHTML +=`
    <img src="${fotosalbums}" alt="">
`
}

}) 

>>>>>>> b41ff5d89e51ba61a5c1e97dff6319d0ad29db99
