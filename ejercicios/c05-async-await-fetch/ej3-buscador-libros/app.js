"use strict";
async function buscarLibros(textoBusqueda) {
    const respuesta = await fetch("https://openlibrary.org/search.json?q=" + textoBusqueda);
    if (!respuesta.ok) {
        throw new Error("Error al buscar libros");
    }
    const datos = await respuesta.json();
    return datos.docs;
}
async function main() {
    const inputBusqueda = document.getElementById("inputBusqueda");
    const botonBuscar = document.getElementById("botonBuscar");
    const contenedorResultados = document.getElementById("resultados");
    const mensajeError = document.getElementById("mensajeError");
    if (inputBusqueda !== null &&
        botonBuscar !== null &&
        contenedorResultados !== null &&
        mensajeError !== null) {
        botonBuscar.addEventListener("click", async function () {
            contenedorResultados.innerHTML = "";
            mensajeError.textContent = "";
            mensajeError.style.color = "red";
            const textoBusqueda = inputBusqueda.value.trim();
            if (textoBusqueda === "") {
                mensajeError.textContent = "Debe ingresar un texto para buscar.";
                return;
            }
            try {
                const libros = await buscarLibros(textoBusqueda);
                for (let i = 0; i < libros.length && i < 10; i++) {
                    const libro = libros[i];
                    if (libro === undefined) {
                        continue;
                    }
                    const tarjeta = document.createElement("div");
                    const titulo = document.createElement("h2");
                    titulo.textContent = libro.title;
                    const autor = document.createElement("p");
                    if (libro.author_name !== undefined) {
                        autor.textContent = "Autor: " + libro.author_name[0];
                    }
                    else {
                        autor.textContent = "Autor: No disponible";
                    }
                    const anio = document.createElement("p");
                    if (libro.first_publish_year !== undefined) {
                        anio.textContent = "Año: " + libro.first_publish_year;
                    }
                    else {
                        anio.textContent = "Año: No disponible";
                    }
                    tarjeta.appendChild(titulo);
                    tarjeta.appendChild(autor);
                    tarjeta.appendChild(anio);
                    contenedorResultados.appendChild(tarjeta);
                }
            }
            catch (error) {
                mensajeError.textContent = "Ocurrió un error al buscar los libros.";
            }
        });
    }
}
main();
