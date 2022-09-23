import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsBoxSeam } from 'react-icons/bs'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { IoWalletOutline } from 'react-icons/io5'
import './itemDetail.scss'


function ItemDetail({data}) {

   let {price, title, img, stock, catagory} = data

  return (
      <section className="itemD">  
          <div className="itemD__img">
            <img className="itemD__img-Product"  src={img} alt="producto Clothing" />
          </div>         
          
          <div className="itemD__txt">
              <p className='itemD__categoria'>{catagory}</p>
              <h1 className="itemD__titulo">{title}</h1>
              <p className="itemD__precio">${price}</p>

                   <p>Color:</p>
              <div className='itemD__detalle'> 
              </div>

                   <p>Talle:</p>
              <div className='itemD__detalle'> 
              </div>

                   <p>Stock: {stock}</p>

              <button className="itemD__comprar">Agregar al Carrito</button>
              <button className="itemD__fav"><IoMdHeartEmpty/></button>

              <div className='itemD__pago'>
                 <p><MdOutlineLocalShipping  className='itemD__pago-icon'/> ENVÍOS A TODO EL PAÍS</p>
                 <p><IoWalletOutline className='itemD__pago-icon'/> VER MEDIOS DE PAGO</p>
                 <p><BsBoxSeam className='itemD__pago-icon--s'/> CALCULAR COSTO DE ENVÍO</p>
              </div>

          </div>
      </section>
  )
}

export default ItemDetail
