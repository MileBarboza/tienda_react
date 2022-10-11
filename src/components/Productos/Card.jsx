import './card.scss'
import { IoMdHeartEmpty } from 'react-icons/io'
import { Link } from "react-router-dom";
                            
export default function card(props) {

   let {price, title, img, id} = props

  return (
    <section className='card'>
          <Link to={`/productos/${id}-${title}`}><div>
              <img src={img} className='card__img' alt={`${title}`}/>
          </div></Link>
          <div >
            <div className='card__detail'>
              <div>
                <h3 className='card__titulo'>{title}</h3>
                <p className='card__precio'>${price}</p>
              </div>
                <button className="card__favorito "><IoMdHeartEmpty/></button>
            </div>
          </div>
      </section>
  )
}