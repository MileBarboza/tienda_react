import React from 'react'
import './boton2.scss'

function Boton2(props) {
  return (
    <button onClick={props.onClick} className="boton__categoria">{props.text}</button>
  )
}

export default Boton2


