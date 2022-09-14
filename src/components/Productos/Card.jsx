import '../../sass/card.scss'

import Boton from "../boton/Boton"
                            /* p ó */
export default function card(props) {
   let {price, title, img, detail} = props

  return (
    <section className='card'>
        <div  className='card__img'>
            <img src={img}  alt="producto"/>
        </div>

        <div className='card__detail'>
            <h3>{title}</h3>
            <p>{detail}</p>
            <h4>${price}</h4>
        </div>
        
        <Boton text="ver más" className="btn"ver mas/>
    </section>
  )
}