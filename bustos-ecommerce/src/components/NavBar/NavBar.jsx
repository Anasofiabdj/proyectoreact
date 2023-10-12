import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
        return (
            <>
                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>Contacto</li>
                        <li>Registrarse</li>
                    </ul>
                </nav>
             <CartWidget />
            </>
        )
  }
  export default NavBar