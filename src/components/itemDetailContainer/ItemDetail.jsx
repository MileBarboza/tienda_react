import React, { useContext, useState} from 'react'
import ItemCount from '../itemCount/ItemCount'
import { BsBoxSeam } from 'react-icons/bs'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { IoWalletOutline } from 'react-icons/io5'
import './itemDetail.scss'
import { Link } from "react-router-dom";
import Boton from "../boton/Boton"
import { toast } from "react-toastify";
import { CartContext } from "../../context/CartContext"

function ItemDetail({data}) {

  let {price, title, img, stock, category} = data

  const [estadoCart, setEstadoCart] = useState(true)
  
  const {addItem} = useContext(CartContext)

  function handleAddToCart(count){
      addItem(data,count)
      toast(`Agregaste ${count} ${title} al Carrito! `,{autoClose: 2000,theme: "colored", hideProgressBar: true, style: {
        background: "linear-gradient(19deg, #a8fadf 0%, #bcafe7 100%)",
        borderRadius:"7px",
        fontWeight:"600",
        top: "50px",
        color:"#fff",
        textShadow:"1px 1px 2px rgba(0,0,0,0.386)"
  }})
  setEstadoCart(false)
}

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

            { estadoCart ?  <ItemCount  onAddToCart={handleAddToCart} initial={0} stock={stock}/>  :  <Link to='/carrito'><Boton>Finalizar Compra</Boton></Link> }

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
