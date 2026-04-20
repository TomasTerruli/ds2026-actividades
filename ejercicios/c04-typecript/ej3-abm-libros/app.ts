interface Libro {
    ISBN: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

const catalogo: Libro[] = [
    { ISBN: "111", titulo: "Harry Potter 2", autor: "JK Rowling", precio: 112000, disponible: true },
    { ISBN: "222", titulo: "Harry Potter 6", autor: "JK Rowling", precio: 100000, disponible: false },
    { ISBN: "333", titulo: "El verano en el que me enamore", autor: "Jenny Han", precio: 80000, disponible: true }
];


function renderizar(libros: Libro[]): void {
    let ul = document.getElementById("listado") as HTMLElement;
    let stats = document.getElementById("stats") as HTMLElement;

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

function buscarPorAutor(autor: string): Libro[] {
    if (autor.trim() === "") return catalogo;

    return catalogo.filter(libro =>
        libro.autor.toLowerCase().includes(autor.toLowerCase())
    );
}

function librosDisponibles(): Libro[] {
    return catalogo.filter(libro => libro.disponible);
}

function precioPromedio(libros: Libro[]): number {
    let total = 0;

    for (let i = 0; i < libros.length; i++) {
        total += libros[i].precio;
    }

    return libros.length > 0 ? total / libros.length : 0;
}

function validarFormulario(): Libro | null { // Devuelve un libro o null esto
    let titulo = (document.getElementById("titulo") as HTMLInputElement).value;
    let autor = (document.getElementById("autor") as HTMLInputElement).value;
    let precioStr = (document.getElementById("precio") as HTMLInputElement).value;
        // GUARDA EN VARIABLES LOS DATOS DEL FORMULARIO
    let errorDiv = document.getElementById("errorForm") as HTMLElement; // guarda la variable de error
    errorDiv.textContent = ""; //limpia los errores anteriores

    let precio = Number(precioStr);

    if (titulo === "" || autor === "" || precio <= 0) {
        errorDiv.textContent = "Error: datos inválidos"; // Esto edita el html si el titulo o el autor es vacio  y si el precio es negativo y muestra error
        return null;
    }

    let nuevoLibro: Libro = {     //creas un libro obj  
        ISBN: "ISBN-" + Date.now(), //te genera una clave unica para que no sea repetida
        titulo: titulo,
        autor: autor,
        precio: precio,
        disponible: true
    };

    return nuevoLibro;
}

function agregarLibro(libro: Libro): void {     // funcion para agregar libro con el push
    catalogo.push(libro);
    renderizar(catalogo);
}

// 🔹 Eliminar libro
function eliminarLibro(isbn: string): void {
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


(window as any).eliminarLibro = eliminarLibro;


let input = document.getElementById("filtroAutor") as HTMLInputElement;


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

    if (libro === null) return;

    agregarLibro(libro);

    // limpiar formulario
    (document.getElementById("titulo") as HTMLInputElement).value = "";
    (document.getElementById("autor") as HTMLInputElement).value = "";
    (document.getElementById("precio") as HTMLInputElement).value = "";
});

renderizar(catalogo);