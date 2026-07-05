import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { libroSchema, type LibroFormInput, type LibroValidado } from '../schemas/libroSchema'
import type { Libro } from '../types/libro'

const IMG_PLACEHOLDER = 'https://placehold.co/300x400?text=Libro'

interface Props {
  onAgregar: (libro: Libro) => void
}

function LibroNuevo({ onAgregar }: Props) {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LibroFormInput, unknown, LibroValidado>({
    resolver: zodResolver(libroSchema),
    defaultValues: { titulo: '', autor: '', precio: 0, disponible: true },
  })

  const onSubmit = (data: LibroValidado) => {
    onAgregar({
      id: Date.now(),
      titulo: data.titulo,
      autor: data.autor,
      precio: data.precio,
      imagen: IMG_PLACEHOLDER,
      disponible: data.disponible,
    })
    navigate('/mis-libros')
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="container py-4" style={{ maxWidth: 480 }}>
      <h2>Nuevo libro</h2>

      <Form.Group className="mb-3">
        <Form.Label>Título</Form.Label>
        <Form.Control {...register('titulo')} isInvalid={!!errors.titulo} />
        <Form.Control.Feedback type="invalid">
          {errors.titulo?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Autor</Form.Label>
        <Form.Control {...register('autor')} isInvalid={!!errors.autor} />
        <Form.Control.Feedback type="invalid">
          {errors.autor?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          step="0.01"
          {...register('precio')}
          isInvalid={!!errors.precio}
        />
        <Form.Control.Feedback type="invalid">
          {errors.precio?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Check className="mb-3" label="Disponible" {...register('disponible')} />

      <Button type="submit">Agregar libro</Button>
    </Form>
  )
}

export default LibroNuevo