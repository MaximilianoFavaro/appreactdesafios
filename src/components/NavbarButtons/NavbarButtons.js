
import './NavbarButtons.css'
import CartWidget from '../CartWidget/CartWidget'

const NavbarButtons = () => {
    return (                    
        <div className='navbuttons' >
            <button>Mesas</button>
            <button>Sillas</button>
            <button>Roperos</button>
            <button>Muebles de Baño</button>
            <button>Muebles de Jardin</button>
            <CartWidget/>
        </div>
        
    )
}

export default NavbarButtons