import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LibroCard from '../components/LibroCard'
import type { Libro } from '../types/libro'

const libros: Libro[] = [
  {
    id: 1,
    titulo: 'Harry Potter y la piedra filosofal',
    autor: 'J.K. Rowling',
    imagen: 'https://imaginaria.com.ar/02/6/potter.jpg',
  },
  {
    id: 2,
    titulo: 'Harry Potter y la cámara secreta',
    autor: 'J.K. Rowling',
    imagen: 'https://www.pottermorepublishing.com/wp-content/covers/web/9781781101322.jpg',
  },
  {
    id: 3,
    titulo: 'Harry Potter y el prisionero de Azkaban',
    autor: 'J.K. Rowling',
    imagen: 'https://m.media-amazon.com/images/I/81ONODZ5t5L._AC_UF1000,1000_QL80_.jpg',
  },
]

function Home() {
  return (
    <>
      <section className="container my-5">
        <div className="p-5 text-center hero rounded-4">
          <h1 className="display-5 fw-bold">Bienvenido a MiBiblioteca</h1>

          <p className="lead mt-3">
            Descubrí libros destacados, autores clásicos y nuevas historias para disfrutar.
          </p>

            <Link to="/catalogo" className="btn btn-hero btn-lg mt-3">
                Ver catálogo
            </Link>
        </div>
      </section>

      <section className="container my-5">
        <h2 className="text-center mb-4">Libros destacados</h2>

        <Row className="g-4">
          {libros.map((libro) => (
            <Col key={libro.id} xs={12} md={6} lg={4}>
              <LibroCard libro={libro} />
            </Col>
          ))}
        </Row>
      </section>
    </>
  )
}

export default Home