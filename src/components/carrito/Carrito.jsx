import React from 'react'
import { GrCart } from 'react-icons/gr'
import './carrito.scss'

function Carrito() {
  return (
    <div className='jsx App'>
        <h1>Carrito</h1>
        <GrCart className='carrito_vacio'/>
        <h2>No hay Productos en el Carrito.</h2>
    </div>
  )
}

export default Carrito