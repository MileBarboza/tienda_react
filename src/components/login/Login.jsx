// import React , {useState } from 'react'
import React  from 'react'
import './login.scss'
import { Link } from "react-router-dom"

function Login() {

// const [login, setLogin] = useState(false)
// setLogin(true)
  return (
    <div>
        <h1>Iniciar Sesión</h1>
        <section id="contact">
        <div> 
            <h3>Registrarme</h3>
            <h3>Iniciar Sesión</h3>
        </div>
        {/* {  
           ( login ) ? */}
                <div className="contacto">        
                <div className="contacto__formulario">
                    <h3>Registrarme</h3>
                        <form action="" className="formulario" id="idFormulario">
                            <input type="text" className="campo" name="nombre" placeholder="Nombre de Usuario"/>
                            <input type="email" className="campo" name="email" placeholder="Email" required/>  
                            <input type="password" className="campo"  name="nombre" placeholder="Contraseña"/>
                            <button type="submit" className="contacto__boton ">Registrarme</button>
                        </form>
                </div>
            </div> 
                {/* :  */}
                <div className="contacto">        
                <div className="contacto__formulario">
                    <h3>Iniciar Sesión</h3>
                        <form action="" className="formulario" id="idFormulario">
                            <input type="text" className="campo" name="nombre" placeholder="Nombre de Usuario"/>
                            <input type="password" className="campo"  name="nombre" placeholder="Contraseña"/>
                            <button type="submit" className="contacto__boton ">log in</button>
                        </form>
                </div>
            </div> 
              {/* } */}
            <Link to='/'><button className='btn'>Volver</button></Link>
        </section>

    </div>
  )
}

export default Login