window.addEventListener('load', function() {

    // canciones

    let topchart = "https://api.deezer.com/chart/0/tracks";

    let proxy = 'https://cors-anywhere.herokuapp.com/';

    let urlCanciones = proxy + topchart;

    fetch(urlCanciones)
        .then(function(respuesta) {

            return respuesta.json();

        })
        .then(function(datos) {

            let canciones = datos.data;

            let lista = document.querySelector(".cancionesHome");


            for (let i = 0; i < 5; i++) {
                
                let cancion = canciones[i];

                let imagen = cancion.artist.picture_big;
                let title = cancion.title;
                let nombreDeArtista = cancion.artist.name;
                let idTema = cancion.id

                lista.innerHTML += ` <a href="detallescanciones.html?id=${idTema}">
                <li> <img src="${imagen}" > <h3> ${title} </h3> <h3> - ${nombreDeArtista}</h3></li>
                `
            }

        })

    .catch(function(error) {
        console.log("El error fue" + error);

    })

    //albums 

    let urlAlbums = proxy + "https://api.deezer.com/chart/0/albums";


    fetch(urlAlbums)
        .then(function(respuesta) {

            return respuesta.json();

        })
        .then(function(datos) {

            let albums = datos.data;

            let lista = document.querySelector(".albumHome");


            for (let i = 0; i < 5; i++) {
                let cancion = albums[i];

                let imagenAlbum = cancion.artist.picture_big;
                let title = cancion.title;
                let nombreDeArtista = cancion.artist.name;
                let idTema = cancion.id


                lista.innerHTML += ` <a href="detallesalbum.html?id=${idTema}">
                <li> <img src="${imagenAlbum}" > <h3> ${title} </h3> <h3> - ${nombreDeArtista}</h3> </li>
                `
            }



        })

    .catch(function(error) {
        console.log(("El error fue" + error));

    })

    //artistas 

    let urlArtistas = proxy + "https://api.deezer.com/chart/0/artists";


    fetch(urlArtistas)
        .then(function(respuesta) {

            return respuesta.json();

        })
        .then(function(datos) {

            let artistas = datos.data;

            let lista = document.querySelector(".artistasHome");


            for (let i = 0; i < 5; i++) {

                let cancion = artistas[i];

                let imagenArtistas = cancion.picture_big;
                let title = cancion.name;
                let idTema = cancion.id

                lista.innerHTML += ` <a href="detallesartistas.html?id=${idTema}">
                <li> <img src="${imagenArtistas}" > <h3> ${title} </h3> </li>
                `
            }


        })

    .catch(function(error) {
        console.log("El error fue" + error);

    })

})