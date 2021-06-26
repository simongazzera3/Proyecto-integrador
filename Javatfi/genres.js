window.addEventListener('load', function(){

let apilink = "https://api.deezer.com/genre";

let proxy = 'https://cors-anywhere.herokuapp.com/';

let urlGeneros = proxy + apilink;

fetch(urlGeneros)
    .then(function(respuesta) {

        return respuesta.json();

    })
    .then(function(datos) {

        let generos = datos.data;

        let lista = document.querySelector(".listageneros");


        for (let i = 1; i < generos.length; i++) {
            let genero = generos[i];
            let imagen = genero.picture_big;
            let title = genero.name;
            let id = genero.id;

            console.log(id);
            console.log(title);
            console.log(genero);

            var gen = `<li style="float:left; margin-left:50px;margin-top:20px;" id="` + title + `"><a href="detallesgeneros.html?id=` + id + `">
            <img style="max-width:150px;" src="${imagen}"> <h3> ${title} </h3></a></li>
            `;
            lista.innerHTML += gen;
        }



    })

})