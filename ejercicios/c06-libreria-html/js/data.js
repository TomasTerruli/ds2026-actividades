const inputBusqueda = document.getElementById("inputBusqueda");
const btnBuscar = document.getElementById("btnBuscar");
const resultados = document.getElementById("resultados");

if (inputBusqueda && btnBuscar && resultados) {
  btnBuscar.addEventListener("click", buscarLibros);

  inputBusqueda.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
      buscarLibros();
    }
  });
}

async function buscarLibros() {
  const textoBusqueda = inputBusqueda.value.trim();

  if (textoBusqueda === "") {
    resultados.innerHTML = `<p class="text-center">Ingresá un libro para buscar.</p>`;
    return;
  }

  resultados.innerHTML = `<p class="text-center">Buscando libros...</p>`;

  try {
    const respuesta = await fetch(
      "https://openlibrary.org/search.json?q=" + textoBusqueda
    );

    const datos = await respuesta.json();
    const libros = datos.docs;

    resultados.innerHTML = "";

    if (libros.length === 0) {
      resultados.innerHTML = `<p class="text-center">No se encontraron libros.</p>`;
      return;
    }

    libros.slice(0, 12).forEach(function (libro) {
      let titulo = libro.title;
      let autor = "Autor desconocido";
      let imagen = "https://via.placeholder.com/300x450?text=Sin+imagen";

      if (libro.author_name) {
        autor = libro.author_name[0];
      }

      if (libro.cover_i) {
        imagen = "https://covers.openlibrary.org/b/id/" + libro.cover_i + "-L.jpg";
      }

      resultados.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card h-100 card-libro">
            <img src="${imagen}" class="card-img-top img-libro" alt="Portada del libro">
            <div class="card-body">
              <h5 class="card-title">${titulo}</h5>
              <p class="card-text">Autor: ${autor}</p>
              <a href="libro.html" class="btn btn-outline-primary">Ver más</a>
            </div>
          </div>
        </div>
      `;
    });
  } catch (error) {
    resultados.innerHTML = `<p class="text-center text-danger">Ocurrió un error al buscar libros.</p>`;
  }
}