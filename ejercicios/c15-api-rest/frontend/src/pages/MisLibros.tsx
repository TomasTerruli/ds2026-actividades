import type { Libro } from '../types/libro'

interface Props {
  libros: Libro[]
}

function MisLibros({ libros }: Props) {
  return (
    <div className="container mt-5">
      <h2>Mis libros</h2>

      {libros.length === 0 && <p className="text-muted">Todavía no agregaste ningún libro.</p>}

      <div className="row mt-4">
        {libros.map((libro) => (
          <div className="col-md-3 mb-4" key={libro.id}>
            <div className="card h-100">
              <img src={libro.imagen} className="card-img-top" alt={libro.titulo} />
              <div className="card-body">
                <h5 className="card-title">{libro.titulo}</h5>
                <p className="text-muted mb-1">{libro.autor}</p>
                <p className="mb-1">${libro.precio}</p>
                <span className={`badge ${libro.disponible ? 'bg-success' : 'bg-secondary'}`}>
                  {libro.disponible ? 'Disponible' : 'No disponible'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MisLibros
