import React , {useState} from 'react'
import './login.scss'

function Login() {
const [toggleLogin, setToggleLogin] = useState(true)
const loginn = () => {
  setToggleLogin(!toggleLogin)
}

  return (
    <div className='App jsx'>
        <h1>Iniciar Sesión</h1>

      <section id="contact">
        <div className='contacto__Login'>
          <button onClick={loginn} className='btnLogin'>Registrarme </button>
           <button onClick={loginn} className='btnLogin'>Iniciar Sesión </button>
        </div>
   
        <div className=''> 
           {toggleLogin ?( <div className="contacto contacRegist">        
                  <div className="contacto__formulario">
                      <form action="" className="formulario" id="idFormulario">
                          <input type="text" className="campo" name="nombre" placeholder="Nombre de Usuario" required/>
                          <input type="email" className="campo" name="email" placeholder="Email" required/>  
                          <input type="password" className="campo"  name="nombre" placeholder="Contraseña" min={6} required/>
                          <button type="submit" className="contacto__boton ">Registrarme</button>
                      </form>
                  </div>
              </div> ) : ( <div className="contacto contacInicio">        
                  <div className="contacto__formulario">
                    <form action="" className="formulario" id="idFormulario">
                        <input type="text" className="campo" name="nombre" placeholder="Nombre de Usuario" required/>
                        <input type="password" className="campo"  name="nombre" placeholder="Contraseña" required/>
                        <button type="submit" className="contacto__boton ">log in</button>
                    </form>
                  </div>
              </div> )}
        </div>

        </section>
    </div>
  )
}

export default Login