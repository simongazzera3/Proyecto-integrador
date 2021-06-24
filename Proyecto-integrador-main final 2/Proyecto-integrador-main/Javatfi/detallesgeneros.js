        /**
         * @param String name
         * @return String
         */
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        var id = getParameterByName('id');

        let apilink2 = "https://api.deezer.com/genre/";

        apilink2 += id + "/artists";
        let proxy = 'https://cors-anywhere.herokuapp.com/';

        let urlDetalles = proxy + apilink2;

        fetch(urlDetalles)
            .then(function(respuesta) {

                return respuesta.json();

            })
            .then(function(datos) {

                let generos = datos.data;

                let lista = document.querySelector(".detallesVariosGeneros");


                for (let i = 1; i < generos.length; i++) {
                    let genero = generos[i];
                    let imagen = genero.picture_big;
                    let title = genero.name;

                    console.log(title);
                    console.log(genero);

                    lista.innerHTML += `<li style="float:left; margin-left:50px;margin-top:20px;"><a href="detallesgeneros.html">
                    <img style="max-width:300px;" src="${imagen}"> <h3> ${title} </h3></a></li>
                    `;
                }



            })

        let apilink3 = "https://api.deezer.com/genre/";

        apilink3 += id;

        let urlGenero = proxy + apilink3;

        fetch(urlGenero)
            .then(function(respuesta2) {

                return respuesta2.json();

            })
            .then(function(datos2) {
                let genero2 = datos2.data;
                let lista2 = document.querySelector(".detallesGenerosTit");
                let title2 = genero2.name;
                let print = "`";
                print += title2 + "`";
                lista2.innerHTML += print;
            })