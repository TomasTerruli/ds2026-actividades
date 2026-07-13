export type Libro = {
  id: number
  titulo: string
  autor: string
  imagen: string
  precio: number
  disponible: boolean
}

export const libros: Libro[] = [
  {
    id: 1,
    titulo: 'Harry Potter y la piedra filosofal',
    autor: 'J.K. Rowling',
    imagen: 'https://imaginaria.com.ar/02/6/potter.jpg',
    precio: 15000,
    disponible: true,
  },
  {
    id: 2,
    titulo: 'Harry Potter y la cámara secreta',
    autor: 'J.K. Rowling',
    imagen: 'https://www.pottermorepublishing.com/wp-content/covers/web/9781781101322.jpg',
    precio: 16500,
    disponible: true,
  },
  {
    id: 3,
    titulo: 'Harry Potter y el prisionero de Azkaban',
    autor: 'J.K. Rowling',
    imagen: 'https://m.media-amazon.com/images/I/81ONODZ5t5L._AC_UF1000,1000_QL80_.jpg',
    precio: 17000,
    disponible: false,
  },
]