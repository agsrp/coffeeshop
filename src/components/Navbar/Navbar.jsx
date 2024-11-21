import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <header className="navCont">
        <div className="menu-cont menu-op">
            <Link to='/' className="navbarLogo" >COFFEE SHOP</Link>
            <input type="checkbox" id="menu-nav" />
            <label for="menu-nav">
                <div className="contMenuSpan">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </label>
            <nav className="navbar">
                <ul>
                    <li><Link to='/Contacto' className='btnNav'>Contacto</Link></li>
                    <li><Link to='/Tienda' className='btnNav'>Tienda</Link></li>
                    <li><Link className='btnNav navbarCart' to='/Shop'><FaShoppingCart/></Link></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Navbar