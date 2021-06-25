
function search() {
    document.querySelector(".inputformulario").style.backgroundColor = "lightblue";
} 

let formulario = document.querySelector('form')

let campoBuscar = document.querySelector('.inputformulario')

let parrafo = document.querySelector('.mensajealerta')

formulario.addEventListener("submit", function(event){
    event.preventDefault();

if (campoBuscar.value == '') {
    parrafo.innerText = "El campo no debe estar vacio :)";
 } else if (campoBuscar.value.length < 3) {
    parrafo.innerText = "Escribe al menos tres caracteres :)"; 
} else {
    formulario.submit()
}

}) 

window.addEventListener('load', function () { 

    let busqueda = document.querySelector(".Resultados"); 

    let queryString = location.search;

let queryStringobj= new URLSearchParams(queryString); 

let cual = queryStringobj.get('buscar'); 

let tituloResultado = document.querySelector(".resultadosBusqueda"); 
tituloResultado.innerText += ` ${cual}`

//artistas

let proxy = 'https://cors-anywhere.herokuapp.com/' ; 

let searchArtist = 'https://api.deezer.com/search/artist?q=' ; 

let searchLinkArtist = proxy + searchArtist; 

fetch(searchLinkArtist + cual)
    .then(function (respuesta) {
    return respuesta.json()
})

.then(function (datos){

    let cosasBuscadas = datos.data

    if (cosasBuscadas.length == 0) {
        let tituloResultado = document.querySelector(".resultadosBusqueda"); 
        tituloResultado.innerText = "Perdona, no hay resultados para tu busqueda";
    
    } else {    

    for (let i=0; i < cosasBuscadas.length; i++) { 

        let bucleResultados = cosasBuscadas[i];
        
        let titulo = bucleResultados.name; 
        let foto = bucleResultados.picture_big ;         
        let version = bucleResultados.type; 
        
busqueda.innerHTML+= ` 
<li> <img src="${foto}" > <h3> ${titulo} </h3> <h3> ${version} </h3> </li>  `;
}

} })

 .catch(function (error){
    console.log(error);
})

//tracks

let search = 'https://api.deezer.com/search?q=' ; 

let searchLink = proxy + search; 

fetch(searchLink + cual)
    .then(function (respuesta) {
    return respuesta.json()
})

.then(function (datos){

    let cosasBuscadas = datos.data

    if (cosasBuscadas.length == 0) {
        let tituloResultado = document.querySelector(".resultadosBusqueda"); 
        tituloResultado.innerText = "Perdona, no hay resultados para tu busqueda";
    
    } else {    

    for (let i=0; i < cosasBuscadas.length; i++) { 

        let bucleResultados = cosasBuscadas[i];

        let titulo = bucleResultados.title; 
        let foto = bucleResultados.artist.picture_big ;         
        let version = bucleResultados.type; 
        
busqueda.innerHTML+= ` 
<li> <img src="${foto}" > <h3> ${titulo} </h3> <h3> ${version} </h3> </li>  `;
}

} })

 .catch(function (error){
    console.log(error);
})


//albums


let searchAlbum = 'https://api.deezer.com/search/album?q=' ; 

let searchLinkAlbum = proxy + searchAlbum; 

fetch(searchLinkAlbum + cual)
    .then(function (respuesta) {
    return respuesta.json()
})

.then(function (datos){

    let cosasBuscadas = datos.data


    if (cosasBuscadas.length == 0) {
        let tituloResultado = document.querySelector(".resultadosBusqueda"); 
        tituloResultado.innerText = "Perdona, no hay resultados para tu busqueda:(";
    
    } else {    

    for (let i=0; i < cosasBuscadas.length; i++) { 

        let bucleResultados = cosasBuscadas[i];

        let titulo = bucleResultados.title; 
        let foto = bucleResultados.cover_big ;         
        let version = bucleResultados.type; 
        
busqueda.innerHTML+= ` 
<li> <img src="${foto}" > <h3> ${titulo} </h3> <h3> ${version} </h3> </li>  `;
}

} })

 .catch(function (error){
    console.log(error);
})

})

