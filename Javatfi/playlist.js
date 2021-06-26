let recuperoStorage = localStorage.getItem('playlist'); 
let playlist = JSON.parse(recuperoStorage); 

let playlistwrap = document.querySelector('.listarepro')
let body = document.querySelector('.playlistcontenedor')

if(recuperarStorage == null || recuperoStorage == '[]'){

    playlist =[]
    playlistwrap.innerHTML += `<h1> Por el momento no hay canciones agregadas </h1>`
    body.style.height = "100vh"
}

else{
playlist.forEach(function(codigo) {
    buscarYMostrar(codigo)
})
}
    






