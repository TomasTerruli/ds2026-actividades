import { Col, Row, Spinner, Alert } from 'react-bootstrap'
import LibroCard from '../components/LibroCard'
import { useFetch } from '../hooks/useFetch'
import type { Libro } from '../types/libro'

function Catalogo() {
  const { data: libros, loading, error } = useFetch<Libro[]>('/libros.json')

  if (loading) return (
    <div className="container mt-5 text-center">
      <Spinner animation="border" role="status" />
      <p className="mt-2 text-muted">Cargando catálogo...</p>
    </div>
  )

  if (error) return (
    <div className="container mt-5">
      <Alert variant="danger">{error}</Alert>
    </div>
  )

  return (
    <div className="container my-5">
      <h2 className="mb-4">Catálogo</h2>
      <Row className="g-4">
        {(libros ?? []).map((libro) => (
          <Col key={libro.id} xs={12} md={6} lg={4}>
            <LibroCard libro={libro} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Catalogo
