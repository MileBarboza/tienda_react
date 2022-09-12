import './navbar.css'

function Navbar() {
    return (
      <header className="navbar">
          <div  className='nav'>
                <img src="/assets/logo.png" alt="Logo" className='logo'/>
          </div>
          <nav className="bar">
              <ul className="menu" >
                  <li  className="link">INICIO</li>
                  <li className="link container-submenu">PRODUCTOS
                    <ul className="submenu">	
                      <li className="sub-link">Pantalones</li>
                      <li className="sub-link">Sweaters</li>
                      <li className="sub-link">Remeras</li>
                      <li className="sub-link">Abrigos</li>
                    </ul>
                  </li>
                  <li className="link">CONTACTO</li>
              </ul>
          </nav> 
      </header>
    );
  }

  export default Navbar;