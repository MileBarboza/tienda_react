import '../../sass/navbar.scss'
import { IoMdHeartEmpty } from 'react-icons/io'
import { GrCart } from 'react-icons/gr'
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

function Navbar() {
    return (
      <header className="navbar">
          <div  className='nav'>
            <div></div>
            <img src="/assets/logo.png" alt="Logo" className='logo'/>
            <div className='icons'>
                <div>       
                  <form className="box">
                      <input type="text" placeholder="Buscar..."  />
                      <BsSearch className="icons__search"/>
                  </form>
                </div> 
                <div> <BiUser className="icons__user"/> </div>
                <div> <IoMdHeartEmpty className="icons__heart"/> </div>
                <div> <GrCart className="icons__cart"/> <span className='item__total'>0</span></div>
            </div>
          </div>
          <nav className="bar">
              <ul className="menu" >
                  <li  className="link">INICIO</li>
                  <li className="link container-submenu">PRODUCTOS
                    <ul className="submenu">	
                      <li className="sub-link">Abrigos</li>
                      <li className="sub-link">Pantalones</li>
                      <li className="sub-link">Remeras</li>
                      <li className="sub-link">Sweaters</li>
                    </ul>
                  </li>
                  <li className="link">CONTACTO</li>
              </ul>
          </nav> 
      </header>
    );
  }

  export default Navbar;