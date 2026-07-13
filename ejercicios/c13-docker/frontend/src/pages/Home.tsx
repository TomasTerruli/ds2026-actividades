import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LibroCard from '../components/LibroCard'
import { useFetch } from '../hooks/useFetch'
import type { Libro } from '../types/libro'

function Home() {
  const { data: libros } = useFetch<Libro[]>('/libros.json')

  useEffect(() => {
    document.title = libros
      ? `MiBiblioteca | ${libros.length} libros disponibles`
      : 'MiBiblioteca'
  }, [libros])

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
          {(libros ?? []).slice(0, 3).map((libro) => (
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
