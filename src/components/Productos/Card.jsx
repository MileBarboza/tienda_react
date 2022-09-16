import '../../sass/card.scss'
import Boton from "../boton/Boton"
import ItemCount from '../itemCount/ItemCount'
                            
export default function card(props) {
   let {price, title, img, detail} = props

  return (
    <section className='card'>
        <div  >
            <img src={img} className='card__img' alt="producto"/>
        </div>

        <div className='card__detail'>
            <h3>{title}</h3>
            <p>{detail}</p>
            <h4>${price}</h4>
        </div>

        <ItemCount stock={3}/>   
        
        <Boton text="ver más" className="btn"ver mas/>
    </section>
  )
}