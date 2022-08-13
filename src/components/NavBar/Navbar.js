import './Navbar.css';
/*import NavbarButtons from '../NavbarButtons/NavbarButtons'*/
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div>
                <Link to='/'><h1>Muebleria el Roble</h1></Link>
                <CartWidget />
            </div>
            <div className='Categories'>
                <Link to='/category/mesas'   className="Option">Mesas</Link>
                <Link to='/category/sillas'  className="Option">Sillas PC</Link>
                <Link to='/category/ropero'  className="Option">Ropero</Link>
                <Link to='/category/baño'    className="Option">Muebles de baño</Link>
                <Link to='/category/jardin'  className="Option">Muebles de Jardin</Link>
               
               
            </div>
            
        </nav>
    )
}

export default Navbar