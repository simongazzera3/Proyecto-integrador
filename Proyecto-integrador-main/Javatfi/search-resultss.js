//js para la página donde se podrán ver los resultados de la búsqueda que se generó en el buscador del header

window.addEventListener('load', function () { 

let formulario = document.querySelector('form');


        form.buscaralert() 
        if (buesqueda == "" || buesqueda == null) {
           alert("El campo esta vacio. Escribe algo para que sepamos que es lo que quieres encontrar:)");
        }else if (buesqueda.lenght < 3) {
            alert("Debes escribir al menos tres caracteres."); 
    
    } 
        }
    );

    /* html 

   <form class="form" action="buscador.html" method="GET">
   <p>
       Buscador <input type="search" name="Buscar" placeholder="Cancion, Album, Artista...">
       <input type="submit" value="Buscar" onclick="buscaralert()">
   </p>
</script>
</form> 
*/