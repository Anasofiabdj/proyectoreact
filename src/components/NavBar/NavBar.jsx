import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

function NavBar() {
        return (
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tienda AZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Inicio</Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <NavDropdown title="Categorías" id="collapsible-nav-dropdown">
             
              <Link to='/category/Álbumes'>
                Álbumes
                </Link>
             
              <NavDropdown.Item href="#action/3.2">
               Merchandising
              </NavDropdown.Item>
             
              <Link to='/category/Lighstick'>
                Lighstick
                </Link>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
           
            <Link to='/cart'>
              
              <CartWidget/>
              
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
        )
  }
  export default NavBar