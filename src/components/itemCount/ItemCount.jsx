import React, {useState} from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'

function ItemCount({initial, stock})  {
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
        <button disabled={count <= 0} className='btn__Count' onClick={restar}>-</button>
        <span>{count}</span>
        <button disabled={ count >= stock } className='btn__Count' onClick={agregar} >+</button>
        <div>
            <button className="btn__comprar" disabled={count <=0} >Agregar al Carrito</button>
            <button className="btn__fav"><IoMdHeartEmpty/></button>
        </div>
    </div>
  )
}

export default ItemCount


