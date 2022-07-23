import './Navbar.css'
import NavbarButtons from '../NavbarButtons/NavbarButtons'


const Navbar = () => {
    return (
        <nav className="Navbar">
            <div>
                <h1>Muebleria el Roble</h1>
            </div>
            <div>
                <NavbarButtons/>
               
            </div>
            
        </nav>
    )
}

export default Navbar