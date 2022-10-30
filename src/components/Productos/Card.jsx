import React,{ useState, useContext} from 'react'
import './card.scss'
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoMdHeart } from 'react-icons/io'
import { Link } from "react-router-dom";
import { FavContext } from '../../context/FavContext';
                            
export default function Card(data) {

   const [toggleFav, setToggleFav] = useState(false)

   const { addFav } = useContext(FavContext);
   function onAddFav() {
    addFav(data);
  }

  return (
    <section className='card' key={data.id}>
         <Link to= {`/productos/${data.id}`}>
          <div><img src={data.img} alt={data.title} className='card__img'/></div>
        </Link> 
          <div >
            <div className='card__detail'>
                <h3 className='card__titulo'>{data.title}</h3>
              <div className='card__prefa'>
                <p className='card__precio'>${data.price}</p>

                <button className="card__favorito " onClick={() => setToggleFav(!toggleFav)}>
                  {toggleFav ? (<IoMdHeart  className='card__favorito-lleno'/>) : (<IoMdHeartEmpty onClick={onAddFav}/>)}
                </button>
              </div>
            </div>
          </div>
      </section>
  )
}