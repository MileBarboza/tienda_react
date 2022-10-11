import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import './favorito.scss'

function Favorito() {
  return (
    <div className='jsx App'>
      <h1>Favoritos</h1>
        <p className='cora_vacio'><IoMdHeartEmpty /></p>
        <h2>No tenés favorito</h2>
    </div>
  )
}

export default Favorito

