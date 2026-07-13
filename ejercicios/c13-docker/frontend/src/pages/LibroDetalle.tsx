import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import type { Libro } from '../types/libro'

function LibroDetalle() {
  const { id } = useParams<{ id: string }>()
  const { data: libros, loading } = useFetch<Libro[]>('/libros.json')
  const libro = libros?.find((l) => l.id === Number(id))

  useEffect(() => {
    if (libro) document.title = `MiBiblioteca | ${libro.titulo}`
    return () => { document.title = 'MiBiblioteca' }
  }, [libro])

  if (loading) return (
    <div className="container mt-5 text-center">
      <p className="text-muted">Cargando...</p>
    </div>
  )

  if (!libro) return (
    <div className="container mt-5">
      <h2>Libro no encontrado</h2>
      <Link to="/" className="btn btn-secondary">Volver al inicio</Link>
    </div>
  )

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={libro.imagen}
            className="img-fluid rounded"
            alt={libro.titulo}
          />
        </div>
        <div className="col-md-6">
          <h2>{libro.titulo}</h2>
          <p className="text-muted">{libro.autor}</p>
          <p className="fs-5 fw-semibold">${libro.precio.toLocaleString()}</p>
          <span className={`badge fs-6 ${libro.disponible ? 'bg-success' : 'bg-secondary'}`}>
            {libro.disponible ? 'Disponible' : 'No disponible'}
          </span>
          <div className="mt-3">
            <Link to="/" className="btn btn-secondary">Volver al inicio</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LibroDetalle
