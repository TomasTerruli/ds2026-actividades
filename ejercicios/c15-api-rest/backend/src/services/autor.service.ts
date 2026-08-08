import type { Autor } from "../types/autor.types";

const autores: Autor[] = [
  {
    id: 1,
    nombre: "J.K. Rowling",
    nacionalidad: "Británica",
    biografia: "Autora de la saga Harry Potter.",
  },
  {
    id: 2,
    nombre: "Julio Cortázar",
    nacionalidad: "Argentina",
    biografia: "Autor de Rayuela y Bestiario.",
  },
  {
    id: 3,
    nombre: "Jorge Luis Borges",
    nacionalidad: "Argentina",
    biografia: "Autor de Ficciones y El Aleph.",
  },
];

let proximoId = 4;

export function findAll(nacionalidad?: string): Autor[] {
  if (nacionalidad === undefined) return autores;
  return autores.filter((a) => a.nacionalidad === nacionalidad);
}

export function findById(id: number): Autor | undefined {
  return autores.find((a) => a.id === id);
}

export function create(datos: Omit<Autor, "id">): Autor {
  const nuevo: Autor = { id: proximoId++, ...datos };
  autores.push(nuevo);
  return nuevo;
}

export function update(id: number, datos: Omit<Autor, "id">): Autor | undefined {
  const indice = autores.findIndex((a) => a.id === id);
  if (indice === -1) return undefined;
  const actualizado: Autor = { id, ...datos };
  autores[indice] = actualizado;
  return actualizado;
}

export function remove(id: number): boolean {
  const indice = autores.findIndex((a) => a.id === id);
  if (indice === -1) return false;
  autores.splice(indice, 1);
  return true;
}