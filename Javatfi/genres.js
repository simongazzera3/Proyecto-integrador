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

            openPage = function() {
                location.href = "detallesgeneros.html?id=" + id;
            }

            lista.innerHTML += `<li style="float:left; margin-left:50px;margin-top:20px;"><a href="javascript:openPage()">
                <img style="max-width:150px;" src="${imagen}"> <h3> ${title} </h3></a></li>
                `;
        }



    })
    /*
    let apilink2 = "https://api.deezer.com/genre/0/artists";

    let urlDetalles = proxy + apilink2;

    fetch(urlDetalles)
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

                console.log(title);
                console.log(genero);

                lista.innerHTML += `<li style="float:left; margin-left:50px;margin-top:20px;"><a href="detallesgeneros.html">
                    <img style="max-width:150px;" src="${imagen}"> <h3> ${title} </h3></a></li>
                    `;
            }



        })*/