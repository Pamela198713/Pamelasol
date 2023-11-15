document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar un elemento por su ID
    var elemento = document.getElementById("miElemento");

    // Agregar un manejador de eventos
    elemento.addEventListener("click", function () {
        // Acciones a realizar cuando se hace clic en el elemento
        alert("Haz hecho clic en el elemento.");
    });

});

function curso(){
    alert("Pagina del curso en construccion")
}

const nombre = document.getElementById("form_nombre")
const correo = document.getElementById("form_correo")
const telefono = document.getElementById("form_telefono")

function estaVacio(){
    if(nombre.value === ""){
        alert("Campo nombre esta vacio")
    }

    if(correo.value === ""){
        alert("Campo correo esta vacio")
    }

    if(telefono.value === ""){
        alert("Campo telefono esta vacio")
    }
}