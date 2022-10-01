import React, {useState} from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import Boton from "../boton/Boton"

function ItemCount({initial, stock, onAddToCart})  {
const [count, setCount] = useState( initial)

// useEffect(     
//   () => {  } ,[]        
// )  

function agregar(){
    setCount(count+1)
}
 
function restar(){
    setCount(count-1)
}

  return (
    <div>
        <p>Stock: {stock - count}</p> 
        <button onClick={restar} disabled={count <= 0} className='btn__Count'>-</button>
        <span>{count}</span>
        <button onClick={agregar} disabled={ count >= stock } className='btn__Count'>+</button>
        <div>
            <Boton onClick={() => onAddToCart(count)}   disabled={count <=0} >Agregar al Carrito </Boton>
            <button className="btn__fav"><IoMdHeartEmpty/></button>
        </div>
    </div>
  )
}

export default ItemCount


