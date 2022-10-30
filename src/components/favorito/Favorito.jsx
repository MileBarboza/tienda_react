import React, { useContext } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoMdHeart } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './favorito.scss'
import { FavContext } from '../../context/FavContext'

function Favorito() {
  const { fav, deleteFav } = useContext (FavContext)

  return (
    <div className='jsx App' >
          <div>
            <h1>Favorito</h1>
          </div>
      {
          (fav.length === 0) ?
            (
              <div style={{marginBottom: '70px'}}>
                 <p className='cora_vacio'><IoMdHeartEmpty /></p>
                 <p style={{fontSize: '25px'}}>No tenés favorito</p>
                 <Link to="/productos"><button className='btn'>ir a Tienda</button></Link>
              </div>
            )
          :
          (<div>
             <section className='contenedorCard'>
                {fav.map((data) => (
                      <div key={data.id} className='card'>
                          <Link to= {`/productos/${data.id}`}>
                            <div><img src={data.img} alt={data.title} className='card__img'/></div>
                          </Link> 
                            <div >
                              <div className='card__detail'>
                                  <h3 className='card__titulo'>{data.title}</h3>
                                <div className='card__prefa'>
                                  <p className='card__precio'>${data.price}</p>
                                  <button className="card__favorito " onClick={() => {deleteFav(data.id)}}><IoMdHeart className='card__favorito-lleno'/></button>
                                </div>

                              </div>
                            </div>
                      </div>
                    ))}
            </section>
          </div>)
      }
    </div>
  )
}

export default Favorito

