//js para la página donde se podrán ver los resultados de la búsqueda que se generó en el buscador del header
/*
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


