import './Navbar.css'
import NavbarButtons from '../NavbarButtons/NavbarButtons'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div>
                <h1>Venta de Muebles</h1>
            </div>
            <div>
                <NavbarButtons/>
            </div>
        </nav>
    )
}

export default Navbar