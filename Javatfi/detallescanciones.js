window.addEventListener("load", function() {


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
    let nombreAlbum = data.album.title
    let dondeAparece = document.querySelector(`.textodetalles`)


    dondeAparece.innerHTML +=`
            <h1>${nombre}</h1>
                <img src="${fotoArtista}" alt="${nombreArtist}">
                <p> ${nombreAlbum}</p>
                <p>${nombreArtist}</p>

        <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${codigo}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
        <p><a href="playlist.html">Ver Mi Playlist</a></p>`
}) 

//crear la playlist


let favoritos = []; 

let recuperoStorage = localStorage.getItem('favoritos');

if( recuperoStorage != null ) {
    favoritos = JSON.parse(recuperoStorage);
}

if(favoritos.includes(codigo) ) {
    document.querySelector('#fav').innerText = `
    Quitar de favoritos
    `;
  }

let fav = document.querySelector('#fav');

fav.addEventListener('click', function(e){

    e.preventDefault();

    if(favoritos.includes(codigo) ) {

        let idASacar = favoritos.indexOf(codigo);
        favoritos.splice(idASacar, 1);

      document.querySelector('#fav').innerHTML = `
      Agregar a favoritos
      `;

     console.log(favoritos);
    }
    else { 

        favoritos.push(codigo);
      
        document.querySelector('#fav').innerHTML = `
        Quitar de favoritos`;
      }
    let favoritosParaStorage = JSON.stringify(favoritos);

    localStorage.setItem('favoritos', favoritosParaStorage);

    console.log(localStorage)

  })
console.log(favoritos)

})

