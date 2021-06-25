

let recuperoStorage = localStorage.getItem('playlist'); 
let playlist = JSON.parse(recuperoStorage); 

console.log(recuperoStorage);
console.log(playlist);

/*
playlist.foreach(function(idTrack){
    mostrarTrack(idTrack);
}); 

function buscarTrack(idTrack) {
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let urlSongs = proxy + 'https://api.deezer.com/track/' +idTrack; 

    fetch(urlSongs)
    .then(function(response){
        return response.json();

    })
    .then(function(track){
        console.log(track);
        let canciones = document.querySelector('.songs')

        canciones.innerHTML += '<a href="trackDetail.html?id=' + track.id + '"class=---"'
    })
}

});