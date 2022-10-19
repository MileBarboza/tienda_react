import React,{ useContext } from 'react'
import { GrCart } from 'react-icons/gr'
import { IoTrashOutline } from "react-icons/io5";
import './carrito.scss'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Carrito() {

const context = useContext(CartContext)
const {cart, emptyCart, deleteItem,getItemPrice} = context    

  return (
    <div className='jsx App'>
        <h1>Carrito</h1>
        {
          (cart.length === 0) ?
          (<div>
              <GrCart className='carrito_vacio'/>
              <p>El carrito está vacío</p>
               <Link to="/"><button className='btn'>ir a Tienda</button></Link>
           </div>)  
          :
          (
          <div className='carrito'>
            <div className='carrito__item'>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350}} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center">Producto </TableCell>
                      <TableCell align="center">Precio</TableCell>
                      <TableCell align="center">Cantidad</TableCell>
                      <TableCell align="center">Subtotal</TableCell>
                      <TableCell align="center"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart.map ((item) => (
                      <TableRow
                        key={item.id} 
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="center"><img src={item.img} className='carrito__img' alt="producto Clothing"/></TableCell>
                        <TableCell align="center">{item.title}</TableCell>
                        <TableCell align="center">${item.price}</TableCell>
                        <TableCell align="center">{item.count}</TableCell>
                        <TableCell align="center">${item.count * item.price}</TableCell>
                        <TableCell align="center"><button onClick={() => deleteItem(item.id)} className='btn__eliminar'><IoTrashOutline/></button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
                  <div className='carrito__sub'>
                      <button onClick={emptyCart} className='btn'>Vaciar Carrito</button>
                      <p>Total: ${getItemPrice()}</p>
                  </div>
              <Link to="/checkoutForm"><button className='btn'>Iniciar Compra</button></Link>
            </div>
          </div>
          )
        }
    </div>
  )
}

export default Carrito