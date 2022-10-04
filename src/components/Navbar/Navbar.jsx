import './navbar.scss'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom"
import CartWidget from './CartWidget';

function Navbar() {
    return (
      <header className="navbar">
          <div  className='nav'>
            <div></div>
                <Link to='/'><img src="/assets/logo.png" alt="Logo" className='logo'/></Link>
            <div className='icons'>
                <div className='contenedor-buscador'>       
                  <form className="box">
                      <input type="text" placeholder="Buscar..." />
                      <BsSearch className="icons__search"/>
                  </form>
                </div> 

                <Link to='/login'><button className="icons__user"> <BiUser /></button></Link>
                <Link to='/favorito'><button className="icons__heart"> <IoMdHeartEmpty /> </button></Link>
                <Link to='/carrito'><CartWidget/></Link>
            </div>
          </div>

          <nav className="bar">
              <ul className="menu" >
                  <li className="link"><Link to='/'>INICIO</Link></li>
                  {/* <li className="link container-submenu"><Link to='/'>PRODUCTOS  */}
                  <li className="link container-submenu">PRODUCTOS 
                    <ul className="submenu">	
                      <li className="sub-link"><Link to='/categoria/Abrigo'>Abrigo</Link></li>
                      <li className="sub-link"><Link to='/categoria/Pantalón'>Pantalón</Link></li>
                      <li className="sub-link"><Link to='/categoria/Remera'>Remera</Link></li>
                      <li className="sub-link"><Link to='/categoria/Sweater'>Sweater</Link></li>
                    </ul>
                    {/* </Link></li> */}
                  </li>
                  <li className="link"><Link to='/contacto'>CONTACTO</Link></li>
              </ul>
          </nav> 
      </header>
    );
  }

  export default Navbar;

  