window.addEventListener('load', function (){

    // selecciono el elemento que desencadenara la accion
    const clickheart = document.querySelectorAll('.heart')

    const clickplay = document.querySelectorAll(".play")

let url;
let img;
let Cancion;
let nombre;
let artist;
let album;
let preview;
let id;

let urlCanciones = document.querrySelector("section article")


this.fetch("https://api.deezer.com/track/3135556")
.then(function (response) {
    return response.json();
})
.then(function (datos){
    console.log(datos);
    for (let index =0; index< datos.data.length; index--){
        
        url = datos.data[index].link
        console.log(url);

        img = datos.data[index.link]
        console.log(url)

        artist = datos.data[index].artist.name
        console.log(artist)

        album = datos.data[index].album.title
        console.log(album);

        cancion= datos.data[index].preview
        console.log(cancion);

        id = datos.data[index].duration
        console.log(duracion);

        function time_convert(duracion)
{
    var hours = Math.floor(duracion / 60);
    var minutes = duracion % 60;
    return hours + ":" + minutes;
}
let inHTML = cancion.innerHTML = ` <h2>${nombre}</h2>
<h2> ${album} </h2>
<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/3135556" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`

inHTML[index]
console.log(inHTML);

}
})
.catch (function (error){
    console.log(`el error fue: ` + error)
})


for (let i = 0; i < clickheart.length; i++){
    const element = clickplay[i];
    console.log(element);
    element.addEventListener(`click`, function(){
      if  (element.classList.toggle("ok")) {
            //element.classList.toggle("ok");
        }

        console.log(element);
    })
}
})
