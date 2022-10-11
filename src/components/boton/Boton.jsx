import './boton.scss'

function Boton(props) {
  return (
    <button onClick={props.onClick} className="btn">{props.text}</button>
  )
}

export default Boton;