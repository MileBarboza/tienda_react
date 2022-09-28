import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import { BsBoxSeam } from 'react-icons/bs'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { IoWalletOutline } from 'react-icons/io5'
import './itemDetail.scss'
import '../boton/boton.scss'

function ItemDetail({data}) {

   let {price, title, img, stock, category} = data

  return (
      <section className="itemD">  
          <div className="itemD__img">
            <img className="itemD__img-Product"  src={img} alt="producto Clothing" />
          </div>         
          
          <div className="itemD__txt">
              <p className='itemD__categoria'>{category}</p>
              <h1 className="itemD__titulo">{title}</h1>
              <p className="itemD__precio">${price}</p>

                   <p>Color:</p>
              <div className='itemD__detalle'> 
                <button className='btn__color btn__color-gris'></button>
                <button className='btn__color btn__color-rosa'></button>
                <button className='btn__color btn__color-blanco'></button>
                <button className='btn__color btn__color-negro'></button>
              </div>

                   <p>Talle:</p>
              <div className='itemD__detalle'> 
                  <button className='btn__talle'>XS</button>
                  <button className='btn__talle'>S</button>
                  <button className='btn__talle'>M</button>
                  <button className='btn__talle'>L</button>
                  <button className='btn__talle'>XL</button>
              </div>

              <ItemCount initial={0} stock={stock}/>  

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
