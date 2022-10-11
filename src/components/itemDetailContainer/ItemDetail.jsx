import React, { useContext, useState} from 'react'
import ItemCount from '../itemCount/ItemCount'
import { BsBoxSeam } from 'react-icons/bs'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { IoWalletOutline } from 'react-icons/io5'
import { IoMdHeartEmpty } from 'react-icons/io'
import './itemDetail.scss'
import { Link } from "react-router-dom";
import Boton from "../boton/Boton"
import { toast } from "react-toastify";
import { CartContext } from "../../context/CartContext"


function ItemDetail({data}) {

  let {price, title, img, stock, category} = data

  const [isInCart, setIsInCart] = useState(false)  
  const [size, setSize] = useState()
  const [color, setColor] = useState()
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
  setIsInCart(true) 
}
  
  function handleColor(e){
  const value= e.target.value;
  setColor({ "Color": value })
  }
  console.log(color);

function handleSize(e){
  const value= e.target.value;
  setSize({ "Talle": value })
  }
  console.log(size);


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
              <div className='itemD__detalle' name="color"> 
                <button onClick={handleColor} value="Gris" className='btn__color btn__color-gris'></button>
                <button onClick={handleColor} value="Rosa" className='btn__color btn__color-rosa'></button>
                <button onClick={handleColor} value="Blanco" className='btn__color btn__color-blanco'></button>
                <button onClick={handleColor} value="Negro" className='btn__color btn__color-negro'></button>
              </div>

                   <p>Talle:</p>
              <div className='itemD__detalle' name="size"> 
                  <button onClick={handleSize} value="XS"   className='btn__talle'>XS</button>
                  <button onClick={handleSize} value="S"    className='btn__talle'>S</button>
                  <button onClick={handleSize} value="M"    className='btn__talle'>M</button>
                  <button onClick={handleSize} value="L"    className='btn__talle'>L</button>
                  <button onClick={handleSize} value="XL"    className='btn__talle'>XL</button>
              </div>

              { stock === 0 && <span style={{color: "#ff0000"}}> Producto sin Stock </span>} 

              {    
                ( isInCart ) ? 
                  <div className=''>
                      <Link to='/'><Boton text='Seguir Comprando'></Boton></Link>
                      <Link to='/carrito'><Boton text='Ver Carrito'></Boton></Link>
                  </div>
                :
                <div>
                  <ItemCount  onAddToCart={handleAddToCart} initial={0} stock={stock}/> 
                  <button className="btn__fav"><IoMdHeartEmpty/></button>
                </div>
              }

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
