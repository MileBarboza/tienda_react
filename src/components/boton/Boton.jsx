import './boton.scss'

function Boton(props) {
  return (
    <button onClick={props.onClick} className="btn">{props.children}</button>
  )
}

export default Boton;