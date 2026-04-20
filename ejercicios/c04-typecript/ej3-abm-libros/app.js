"use strict";
const catalogo = [
    { ISBN: "111", titulo: "Harry Potter 2", autor: "JK Rowling", precio: 112000, disponible: true },
    { ISBN: "222", titulo: "Harry Potter 6", autor: "JK Rowling", precio: 100000, disponible: false },
    { ISBN: "333", titulo: "El verano en el que me enamore", autor: "Jenny Han", precio: 80000, disponible: true }
];
function renderizar(libros) {
    let ul = document.getElementById("listado");
    let stats = document.getElementById("stats");
    ul.innerHTML = "";
    for (let i = 0; i < libros.length; i++) {
        let libro = libros[i];
        ul.innerHTML += `<li>
            ${libro.titulo} - ${libro.autor} - $${libro.precio} 
            (${libro.disponible ? "Disponible" : "No disponible"})
            <button onclick="eliminarLibro('${libro.ISBN}')">Eliminar</button>
        </li>`;
    }
    stats.textContent = `Cantidad: ${libros.length} - Promedio: $${precioPromedio(libros)}`;
}
function buscarPorAutor(autor) {
    if (autor.trim() === "")
        return catalogo;
    return catalogo.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
}
function librosDisponibles() {
    return catalogo.filter(libro => libro.disponible);
}
function precioPromedio(libros) {
    let total = 0;
    for (let i = 0; i < libros.length; i++) {
        total += libros[i].precio;
    }
    return libros.length > 0 ? total / libros.length : 0;
}
function validarFormulario() {
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let precioStr = document.getElementById("precio").value;
    // GUARDA EN VARIABLES LOS DATOS DEL FORMULARIO
    let errorDiv = document.getElementById("errorForm"); // guarda la variable de error
    errorDiv.textContent = ""; //limpia los errores anteriores
    let precio = Number(precioStr);
    if (titulo === "" || autor === "" || precio <= 0) {
        errorDiv.textContent = "Error: datos inválidos"; // Esto edita el html si el titulo o el autor es vacio  y si el precio es negativo y muestra error
        return null;
    }
    let nuevoLibro = {
        ISBN: "ISBN-" + Date.now(), //te genera una clave unica para que no sea repetida
        titulo: titulo,
        autor: autor,
        precio: precio,
        disponible: true
    };
    return nuevoLibro;
}
function agregarLibro(libro) {
    catalogo.push(libro);
    renderizar(catalogo);
}
// 🔹 Eliminar libro
function eliminarLibro(isbn) {
    let index = -1; //setea un index con valor que no pueda tomarlo
    for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i].ISBN === isbn) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        catalogo.splice(index, 1); // el splice elimina elementos del array, le pasas la posicion(index) y cantidad
        renderizar(catalogo);
    }
}
window.eliminarLibro = eliminarLibro;
let input = document.getElementById("filtroAutor");
document.getElementById("filtrar")?.addEventListener("click", () => {
    renderizar(buscarPorAutor(input.value));
});
document.getElementById("mostrarDisponibles")?.addEventListener("click", () => {
    renderizar(librosDisponibles());
});
document.getElementById("mostrarTodos")?.addEventListener("click", () => {
    renderizar(catalogo);
});
//boton para agregar
document.getElementById("agregar")?.addEventListener("click", () => {
    let libro = validarFormulario();
    if (libro === null)
        return;
    agregarLibro(libro);
    // limpiar formulario
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("precio").value = "";
});
renderizar(catalogo);
