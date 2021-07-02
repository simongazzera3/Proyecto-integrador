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