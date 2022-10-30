import './navbar.scss'
import React, {useState} from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom"
import CartWidget from './CartWidget';

function Navbar() {

const [busqueda, setBusqueda] = useState('')
const [toggleSearch, setToggleSearch] = useState(true)

const handleChange = e =>{
  setBusqueda(e.target.value)
  console.log(`busqueda: ` + e.target.value);
}

function toggleSeached() {
  setToggleSearch(!toggleSearch)
}

  return (
    <header className="navbar">
        <div  className='nav'>
          <div></div>
              <Link to='/'><img src="/assets/logo.png" alt="Logo Clothing" className='logo'/></Link>
          <div className='icons'>
              <div className='contenedor-buscador'>       
               <form  className={toggleSearch ? 'box':'box active'} >  
                     <input type="text" placeholder="Buscar..." value={busqueda} onChange={handleChange}/> 
                    <BsSearch onClick={toggleSeached} className="icons__search"/>
                </form>
              </div> 

              <Link to='/login' className="icons__user"> <BiUser /></Link>
              <Link to='/favorito' className="icons__heart"><IoMdHeartEmpty /></Link>
              <Link to='/carrito'><CartWidget/></Link>
          </div>
        </div>

        <nav className="bar">
            <ul className="menu" >
                <li className="link"><Link to='/'>INICIO</Link></li>
                <li className="link container-submenu"><Link to='/productos'>PRODUCTOS</Link>
                  <ul className="submenu">	
                    <li className="sub-link"><Link to='/categoria/Abrigo'>Abrigo</Link></li>
                    <li className="sub-link"><Link to='/categoria/Pantalón'>Pantalón</Link></li>
                    <li className="sub-link"><Link to='/categoria/Remera'>Remera</Link></li>
                    <li className="sub-link"><Link to='/categoria/Sweater'>Sweater</Link></li>
                  </ul>
                </li>
                <li className="link"><Link to='/contacto'>CONTACTO</Link></li>
            </ul>
        </nav> 
      </header>
    );
  }

  export default Navbar;

  