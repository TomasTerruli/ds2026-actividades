"use strict";
// Esta seria la interfaz de usuario con los datos deckarados
// la interfaz te dice que si o si el objeto usuario tiene que tener estas propiedades
async function obtenerUsuarios() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        // Esta seria la interfaz de usuario con los datos deckarados
        // la interfaz te dice que si o si el objeto usuario tiene que tener estas propiedades
        if (!respuesta.ok) {
            throw new Error("Error al obtener los usuarios");
        }
        // el .ok a la constante respuesta te devuelve un booleano si la peticion hhtp salio bien
        const usuarios = await respuesta.json(); // te devuelve los datos del cuerpo de la respuesta convertidos a JSON.
        // ademas le decis a ts q el resultados es un array de usuarios
        return usuarios; // devolvemos ese array
    }
    catch (error) {
        console.error("Ocurrió un error:", error); // devuelve si hay error por CONSOLA!!!!
        return [];
    }
}
async function main() {
    const usuarios = await obtenerUsuarios();
    // llamamos a la funcion obtenerUsuarios y esperamos el resultado
    for (let i = 0; i < usuarios.length; i++) { // te recorre el array de usuarios y te tira la info con la sig estructura
        console.log("Nombre: " + usuarios[i].name + " - Email: " + usuarios[i].email);
    } // toda la info del usuario tamb por consola
}
main();
