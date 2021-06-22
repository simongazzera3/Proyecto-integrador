window.addEventListener('load', function() {

    // canciones

    let topchart = "https://api.deezer.com/chart/0/tracks?limit=5";

    let proxy = 'https://cors-anywhere.herokuapp.com/';

    let urlCanciones = proxy + topchart;

    fetch(urlCanciones)
        .then(function(respuesta) {

            return respuesta.json();

        })
        .then(function(datos) {

            let canciones = datos.data;

            let lista = document.querySelector(".cancionesHome");


            for (let i = 0; i < canciones.length; i++) {
                let cancion = canciones[i];
                let imagen = cancion.artist.picture_big;
                let title = cancion.title;
                let nombreDeArtista = cancion.artist.name;

                console.log(title);

                console.log(cancion);

                lista.innerHTML += ` <a href="detallescanciones.html">
                <li> <img src="${imagen}" > <h3> ${title} </h3> <h3> - ${nombreDeArtista}</h3></li>
                `
            }

        })

    .catch(function(error) {
        urlCanciones.innerHTML = '<li> El recurso no se encontró :( </li>';
        console.log(error);

    })

    //albums 

    let urlAlbums = proxy + "https://api.deezer.com/chart/0/albums?limit=5";


    fetch(urlAlbums)
        .then(function(respuesta) {

            return respuesta.json();

        })
        .then(function(datos) {

            let albums = datos.data;

            let lista = document.querySelector(".albumHome");


            for (let i = 0; i < albums.length; i++) {
                let cancion = albums[i];
                let imagenAlbum = cancion.artist.picture_big;
                let title = cancion.title;
                let nombreDeArtista = cancion.artist.name;


                console.log(title);
                console.log(cancion);
                //console.log(imagen);


                lista.innerHTML += ` <a href="detallesalbum.html">
                <li> <img src="${imagenAlbum}" > <h3> ${title} </h3> <h3> - ${nombreDeArtista}</h3> </li>
                `
            }



        })

    .catch(function(error) {
        urlCanciones.innerHTML = '<li> El recurso no se encontró :( </li>';
        console.log(error);

    })

    //artistas 

    let urlArtistas = proxy + "https://api.deezer.com/chart/0/artists?limit=5";


    fetch(urlArtistas)
        .then(function(respuesta) {

            return respuesta.json();

        })
        .then(function(datos) {

            let artistas = datos.data;

            let lista = document.querySelector(".artistasHome");


            for (let i = 0; i < artistas.length; i++) {
                let cancion = artistas[i];
                let imagenArtistas = cancion.picture_big;
                let title = cancion.name;

                console.log(title);

                console.log(cancion);


                lista.innerHTML += ` <a href="detallesartistas.html">
                <li> <img src="${imagenArtistas}" > <h3> ${title} </h3> </li>
                `
            }


        })

    .catch(function(error) {
        urlArtistas.innerHTML = '<li> El recurso no se encontró :( </li>';
        console.log(error);

    })

})