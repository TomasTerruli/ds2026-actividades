interface Libro {
    ISBN: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string //EL ? significa q eso es opcional
}

const catalogo: Libro[] = [
    { ISBN: "111", titulo: "Harry Potter 2", autor: "JK Rowling", precio: 112000, disponible: true },
    { ISBN: "222", titulo: "Harry Potter 6", autor: "JK Rowling", precio: 100000, disponible: false },
    { ISBN: "333", titulo: "El verano en el que me enamore", autor: "Jenny Han", precio: 80000, disponible: true }
];

function renderizar (libros: Libro[]): void {
    
    let ul = document.getElementById("listado") as HTMLElement;
    let stats = document.getElementById("stats") as HTMLElement;
    ul.innerHTML = ""; // Esto te borra lo anterior

    for (let i = 0; i < libros.length; i++) {   // Recorre la coleccion de libros
    let libro = libros[i];

    // agrega contenido HTML al <ul> lo que esta abajo y el += agrega sin borrar lo anterior
    // las comillas simples son para escribir en html y poder meter varibles
    ul.innerHTML += `<li> 
        ${libro.titulo} - ${libro.autor} - $${libro.precio} 
        (${libro.disponible ? "Disponible" : "No disponible"})
    </li>`;
    }
    // Lo de libro disponible ? es una forma de escribir if corto
    stats.textContent = `Cantidad: ${libros.length} - Promedio: $${precioPromedio(libros)}`;
}

function buscarPorAutor(autor: string): Libro[] {
    return catalogo.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
    // el filter(cond) te recorre el array y se queda solo con los que cumplen la condicion
    // la flecha es una funcion corta : por cada libro del catálogo…
    // el lower case pasa a minusculas
}

function librosDisponibles(): Libro[] {
    return catalogo.filter(libro => libro.disponible);
}

function precioPromedio(libros: Libro[]): number {
    let total = 0; 
    for (let i = 0; i < libros.length; i++) {
        total = total + libros[i].precio;
    }
    return libros.length > 0 ? total / libros.length : 0; // si la cantidad de libros es mayor a 0 realizar total/libros lenght, esto seria para evitar div por 0
}

let input = document.getElementById("filtroAutor") as HTMLInputElement;

// conecto botones
document.getElementById("filtrar")?.addEventListener("click", () => {
    renderizar(buscarPorAutor(input.value));
});

document.getElementById("mostrarDisponibles")?.addEventListener("click", () => {
    renderizar(librosDisponibles());
});

document.getElementById("mostrarTodos")?.addEventListener("click", () => {
    renderizar(catalogo);
});

renderizar(catalogo);