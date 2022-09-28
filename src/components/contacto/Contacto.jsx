import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsGeoAlt } from "react-icons/bs";
import './contacto.scss'

function Contacto() {
  return (
    <section className='jsx '>
            <h3 className="contacto__titulo"> Escribinos!</h3>
            <p className="contacto__titulo--p">Cualquier consulta que tengas, no dudes en escribirnos.</p>
            <p className="contacto__titulo--p">Envianos un email y nos pondremos en contacto contigo.</p>

    <div className="contacto__wrapper">          
        <div className="contacto__form">
        <h3 className="contacto__titulo-wrapper">Contactanos</h3>
            <form action="" id="idFormulario">
                <input type="text" className="campo" id="idNombre" name="nombre" placeholder="Nombre de Usuario"/>

                <input type="email" className="campo" id="idEmail" name="email" placeholder="Email" required/>  

                <textarea name="mensaje" className="campo" id="idMensaje" cols="30" rows="7" placeholder="Deje su mensaje"></textarea>
                <button type="submit" className="contacto__boton ">Enviar</button>
            </form>
        </div>

        <div className="contacto__info">
                <h3 className="contacto__titulo-wrapper">Información</h3>
                  <p className="contacto__info-p">< BsGeoAlt className='icon icon-geo'/>Argentina - Rio Negro</p>
                  <p className="contacto__info-p">< HiOutlineMail className='icon icon-email'/>Clothing@gmail.com</p>
                  <p className="contacto__info-p">< BsWhatsapp className='icon icon-whats'/>0123456789</p>
        </div> 
    </div> 

    </section>
  )
}

export default Contacto