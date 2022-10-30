import './boton.scss'

function Boton(props) {
  return (
    <button onClick={props.onClick} className="btn btn__categoria">{props.text}</button>
  )
}

export default Boton;