import React from 'react'
import './login.scss'

function Login() {
  return (
    <div>
        <h1>Iniciar Sesión</h1>
        <section id="contact">
            <div className="contacto">        
                <div className="contacto__formulario">
                    <h3>Registrarme</h3>
                        <form action="" className="formulario" id="idFormulario">
                            <input type="text" className="campo" name="nombre" placeholder="Nombre de Usuario"/>
                            <input type="email" className="campo" name="email" placeholder="Email" required/>  
                            <input type="password" className="campo"  name="nombre" placeholder="Contraseña"/>
                            <button type="submit" className="contacto__boton ">Enviar</button>
                        </form>
                </div>
            </div> 
        </section>
    </div>
  )
}

export default Login