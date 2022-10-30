import React,{ useContext } from 'react'
import { GrCart } from 'react-icons/gr'
import { IoTrashOutline } from "react-icons/io5";
import './carrito.scss'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

function Carrito() {

const context = useContext(CartContext)
const {cart, emptyCart, deleteItem,getItemPrice} = context    

  return (
    <div className='jsx App'>
        <h1>Carrito</h1>
        {
          (cart.length === 0) ?
          (<div style={{marginBottom: '91px'}}>
              <GrCart className='carrito_vacio' />
              <p style={{fontSize: '25px', marginTop: '25px'}} >El carrito está vacío</p>
               <Link to="/productos"><button className='btn'>ir a Tienda</button></Link>
           </div>)  
          :
          (
          <div className='carrito'>
            <div className='carrito__item'>
           
              <table className="cartList">
                <thead className="cartList_head">
                  <tr >
                    <th>Producto</th>
                    <th>Nombre</th>
                    <th className='carrito__price'>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>      </th>
                  </tr>
                </thead>
                <tbody>
                    {cart.map ((item) => {
                    return (
                      <tr key={item.id} className="cartList_row" >
                        <td><img src={item.img} className='carrito__img' alt="producto Clothing"/></td>
                        <td className='carrito__title'>{item.title}</td>
                        <td className='carrito__price'>${item.price}</td>
                        <td className='carrito__count'>{item.count}</td>
                        <td className='carrito__subprice'>${item.count * item.price}</td>
                        <td><button onClick={() => deleteItem(item.id)} className='btn__eliminar'><IoTrashOutline/></button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

                  <div className='carrito__sub'>
                      <button style={{marginTop: '0'}} onClick={emptyCart} className='btn'>Vaciar Carrito</button>
                      <p>Total: ${getItemPrice()}</p>
                  </div>
              <div style={{margin: '20px 0 80px'}}>
                <Link to="/productos"><button className='btn'>ir a Tienda</button></Link>
                <Link to="/checkoutForm"><button className='btn'>Iniciar Compra</button></Link>
              </div>
            </div>
          </div>
          )
        }
    </div>
  )
}

export default Carrito

