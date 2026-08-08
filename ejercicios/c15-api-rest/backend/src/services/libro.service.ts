import type { Libro } from "../types/libro.types";

const libros: Libro[] = [
  {
    id: 1,
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    precio: 15000,
    imagen: "https://imaginaria.com.ar/02/6/potter.jpg",
    disponible: true,
  },
  {
    id: 2,
    titulo: "Harry Potter y la cámara secreta",
    autor: "J.K. Rowling",
    precio: 16500,
    imagen: "https://www.pottermorepublishing.com/wp-content/covers/web/9781781101322.jpg",
    disponible: true,
  },
  {
    id: 3,
    titulo: "Harry Potter y el prisionero de Azkaban",
    autor: "J.K. Rowling",
    precio: 17000,
    imagen: "https://m.media-amazon.com/images/I/81ONODZ5t5L._AC_UF1000,1000_QL80_.jpg",
    disponible: false,
  },
  {
    id: 4,
    titulo: "Harry Potter y el cáliz de fuego",
    autor: "J.K. Rowling",
    precio: 18000,
    imagen: "https://static.wikia.nocookie.net/esharrypotter/images/c/c3/Harry_Potter_y_el_c%C3%A1liz_de_fuego_portada_versi%C3%B3n_2015.jpeg/revision/latest/scale-to-width/360?cb=20240703021322",
    disponible: true,
  },
  {
    id: 5,
    titulo: "Harry Potter y la Orden del Fénix",
    autor: "J.K. Rowling",
    precio: 19000,
    imagen: "https://static.wikia.nocookie.net/esharrypotter/images/a/a4/HP5_portada_espa%C3%B1ol_de_bolsillo_2020.jpg/revision/latest/scale-to-width/360?cb=20200606233253",
    disponible: true,
  },
  {
    id: 6,
    titulo: "Harry Potter y las reliquias de la Muerte",
    autor: "J.K. Rowling",
    precio: 20000,
    imagen: "https://sbslibreria.vtexassets.com/arquivos/ids/5062583/MHMvDHbVqT9VmC-6HdOYP-oXFNM-.jpg?v=638853285464700000",
    disponible: true,
  },
];

let proximoId = 7;

export function findAll(disponible?: boolean): Libro[] {
  if (disponible === undefined) return libros;
  return libros.filter((l) => l.disponible === disponible);
}

export function findById(id: number): Libro | undefined {
  return libros.find((l) => l.id === id);
}

export function create(datos: Omit<Libro, "id">): Libro {
  const nuevo: Libro = { id: proximoId++, ...datos };
  libros.push(nuevo);
  return nuevo;
}

export function update(id: number, datos: Omit<Libro, "id">): Libro | undefined {
  const indice = libros.findIndex((l) => l.id === id);
  if (indice === -1) return undefined;
  const actualizado: Libro = { id, ...datos };
  libros[indice] = actualizado;
  return actualizado;
}

export function remove(id: number): boolean {
  const indice = libros.findIndex((l) => l.id === id);
  if (indice === -1) return false;
  libros.splice(indice, 1);
  return true;
}