//js para la página donde se podrán ver los resultados de la búsqueda que se generó en el buscador del header

//para hacer lo de onfocus, lo que se tiene que hacer es primero asignarle un id al input que se encuentra en el html.
// y tambien se va tener q escribir dentro del input un "onfocus=search()", para senalar que el onfocus debe funcionar para esa funcion. 
//y despues se hae esto que aparece abajo. 


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

    console.log(window);
    console.log(document);
    console.log(location.search); 

    let busqueda = document.querySelector(".Resultados"); 

    let queryString = location.search;
let queryStringobj= new URLSearchParams(queryString); 

let cual = queryStringobj.get('buscar'); 
console.log(cual); 

let proxy = 'https://cors-anywhere.herokuapp.com/' ; 

let search = 'https://api.deezer.com/search?q=' ; 

let searchLink = proxy + search; 

fetch( searchLink + cual)
    .then(function (respuesta) {
    return respuesta.json()
})

.then(function (datos){

    let cosasBuscadas = datos.data

    for (let i=0; i < cosasBuscadas.length; i++) { 

        let bucle = cosasBuscadas[i];
        let titulo = bucle.title; 

        let bucle2 = cosasBuscadas[i]; 
        let foto = bucle2.artist.picture_big;

busqueda.innerHTML+= ` <a href="detallesartistas.html">
<li> <img src="${foto}" > <h3> ${titulo} </h3></li>  `;

 } })

 .catch(function (error){
    console.log(error);
})


})

