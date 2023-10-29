import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
        return (
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tienda AZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <NavDropdown title="Categorías" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Álbumes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Merchandising
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Lighsticks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
           
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
        )
  }
  export default NavBar