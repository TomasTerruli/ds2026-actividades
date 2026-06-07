import { useState } from 'react' // useState sirve para guardar un dato que puede cambiar en pantalla. (el de los likes es)
import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

type LibroCardProps = { // Acá estás creando un tipo de TypeScript. Ese tipo describe qué datos va a recibir una tarjeta de libro.
  titulo: string
  autor: string
  imagen: string
}

function NavbarLibreria() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container fluid>
        <Navbar.Brand href="#">📖 MiBiblioteca</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />

        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav>
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Catálogo</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

function HeroLibreria() {
  return (
    <section className="container my-5">
      <div className="p-5 text-center hero rounded-4">
        <h1 className="display-5 fw-bold">Bienvenido a MiBiblioteca</h1>

        <p className="lead mt-3">
          Descubrí libros destacados, autores clásicos y nuevas historias para disfrutar.
        </p>

        <Button className="btn-hero btn-lg mt-3">
          Ver catálogo
        </Button>
      </div>
    </section>
  )
}

function LibroCard({ titulo, autor, imagen }: LibroCardProps) {
  const [likes, setLikes] = useState<number>(0)

  return (
    <Card className="h-100 card-libro">
      <Card.Img
        variant="top"
        src={imagen}
        className="img-libro"
        alt={`Portada de ${titulo}`}
      />

      <Card.Body>
        <Card.Title>{titulo}</Card.Title>

        <Card.Text>
          Autor: {autor}
        </Card.Text>

        <Button variant="outline-primary" className="me-2">
          Ver más
        </Button>

        <Button variant="outline-danger" onClick={() => setLikes(likes + 1)}>
          Me gusta {likes}
        </Button>
      </Card.Body>
    </Card>
  )
}

function SeccionLibros() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Libros destacados</h2>

      <Row className="g-4">
        <Col xs={12} md={6} lg={4}>
          <LibroCard
            titulo="Harry Potter y la piedra filosofal"
            autor="J.K. Rowling"
            imagen="https://imaginaria.com.ar/02/6/potter.jpg"
          />
        </Col>

        <Col xs={12} md={6} lg={4}>
          <LibroCard
            titulo="Harry Potter y la cámara secreta"
            autor="J.K. Rowling"
            imagen="https://www.pottermorepublishing.com/wp-content/covers/web/9781781101322.jpg"
          />
        </Col>

        <Col xs={12} md={6} lg={4}>
          <LibroCard
            titulo="Harry Potter y el prisionero de Azkaban"
            autor="J.K. Rowling"
            imagen="https://m.media-amazon.com/images/I/81ONODZ5t5L._AC_UF1000,1000_QL80_.jpg"
          />
        </Col>

        <Col xs={12} md={6} lg={4}>
          <LibroCard
            titulo="Harry Potter y el cáliz de fuego"
            autor="J.K. Rowling"
            imagen="https://static.wikia.nocookie.net/esharrypotter/images/c/c3/Harry_Potter_y_el_c%C3%A1liz_de_fuego_portada_versi%C3%B3n_2015.jpeg/revision/latest/scale-to-width/360?cb=20240703021322"
          />
        </Col>

        <Col xs={12} md={6} lg={4}>
          <LibroCard
            titulo="Harry Potter y la Orden del Fénix"
            autor="J.K. Rowling"
            imagen="https://static.wikia.nocookie.net/esharrypotter/images/a/a4/HP5_portada_espa%C3%B1ol_de_bolsillo_2020.jpg/revision/latest/scale-to-width/360?cb=20200606233253"
          />
        </Col>

        <Col xs={12} md={6} lg={4}>
          <LibroCard
            titulo="Harry Potter y las reliquias de la Muerte"
            autor="J.K. Rowling"
            imagen="https://sbslibreria.vtexassets.com/arquivos/ids/5062583/MHMvDHbVqT9VmC-6HdOYP-oXFNM-.jpg?v=638853285464700000"
          />
        </Col>
      </Row>
    </section>
  )
}

function FooterLibreria() {
  return (
    <footer className="text-center py-4">
      <p className="mb-0">© 2026 MiBiblioteca</p>
    </footer>
  )
}

function App() {   // Esto es lo que muestra app
  return (
    <>
      <NavbarLibreria />
      <HeroLibreria />
      <SeccionLibros />
      <FooterLibreria />
    </>
  )
}

export default App