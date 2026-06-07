import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container fluid>

        <Navbar.Brand as={Link} to="/">
          📖 MiBiblioteca
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />

        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav>
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Header