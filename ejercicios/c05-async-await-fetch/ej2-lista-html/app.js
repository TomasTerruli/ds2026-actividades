"use strict";
async function obtenerUsuarios() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!respuesta.ok) {
        throw new Error("Error al obtener los usuarios");
    }
    const usuarios = await respuesta.json();
    return usuarios;
}
// hasta aca es lo mismo que el anterior ejercicio
async function main() {
    const parrafoCargando = document.getElementById("cargando");
    const parrafoError = document.getElementById("error");
    const listaUsuario = document.getElementById("listaUsuarios");
    try {
        const usuario = await obtenerUsuarios(); //guarda en una const, espera a que responda la funcion obtener uSUARIOS
        if (parrafoCargando !== null) {
            parrafoCargando.style.display = "none"; // hace que si los usuarios se cargan, se oculte el cargando
        }
        if (listaUsuario !== null) {
            for (let i = 0; i < usuario.length; i++) {
                const item = document.createElement("li"); // aca crea el elemento de la lista
                item.textContent = usuario[i].name + " - " + usuario[i].email; // agrega los elemento correspondientes a la iteracion i a la li
                listaUsuario.appendChild(item); // agrega dentro del ul
            }
        }
    }
    catch (error) { // cuando ocurre un error
        if (parrafoCargando !== null) {
            parrafoCargando.style.display = "none";
        }
        if (parrafoError) {
            parrafoError.textContent = "Ocurrio un error al cargar los usuarios";
            parrafoError.style.color = "red";
        }
    }
}
// basicamente no muestra nada si esta vacio. Pero si con el try funciona bien tira esa informacion, si va por el lado del error del catch 
main();
