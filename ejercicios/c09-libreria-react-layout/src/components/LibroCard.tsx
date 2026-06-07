import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { Libro } from '../types/libro'

type LibroCardProps = {
  libro: Libro
}

function LibroCard({ libro }: LibroCardProps) {
  const [likes, setLikes] = useState<number>(0)

  return (
    <Card className="h-100 card-libro">
      <Card.Img
        variant="top"
        src={libro.imagen}
        className="img-libro"
        alt={`Portada de ${libro.titulo}`}
      />

      <Card.Body>
        <Card.Title>{libro.titulo}</Card.Title>

        <Card.Text>
          Autor: {libro.autor}
        </Card.Text>

        <Link
            to={`/libros/${libro.id}`}
            className="btn btn-outline-primary me-2"
            >
            Ver más
        </Link>

        <Button variant="outline-danger" onClick={() => setLikes(likes + 1)}>
          Me gusta {likes}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default LibroCard