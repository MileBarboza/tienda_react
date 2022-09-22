import './card.scss'
import { IoMdHeartEmpty } from 'react-icons/io'
import Boton from "../boton/Boton"
import ItemCount from '../itemCount/ItemCount'
                            
export default function card(props) {

   let {price, title, img, stock} = props


  return (
      <section className='card'>
          <div  >
              <img src={img} className='card__img' alt="producto Clothing"/>
          </div>
          <div >
            <div className='card__detail'>
              <div>
                <h3 className='card__titulo'>{title}</h3>
                <p className='card__precio'>${price}</p>
              </div>
                <button className="card__favorito"><IoMdHeartEmpty/></button>
            </div>
          </div>

          <ItemCount initial={1} stock={stock}/>   

          <Boton text="ver más" className="card__btn"ver mas/>
      </section>
  )
}
