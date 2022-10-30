import React, {useState} from 'react'

  function ItemCount({ initial, stock,onAddToCart })  {
const [count, setCount] = useState( initial)

function agregar(){
    setCount(count+1)
}
 
function restar(){
    setCount(count-1)
}
let handleStock = stock - count

  return (
    <div>
        {
          (handleStock) ? <p className='producto__stock'>Stock: {handleStock}</p> : (handleStock === 0 && <p className='producto__stock__sin'  style={{color: '#df3939'}}>  Sin Stock </p>)
        }
        <button onClick={restar} disabled={count <= 1} className='btn__Count'>-</button>
        <span>{count}</span>
        <button onClick={agregar} disabled={ count >= stock } className='btn__Count'>+</button>

      <div>
        <button onClick={() => onAddToCart(count)}  disabled={count <=0}  className="btn">Agregar al Carrito </button>
      </div>

    </div>
  )
}

export default ItemCount