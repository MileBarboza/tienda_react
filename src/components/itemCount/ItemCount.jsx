import React, {useState} from 'react'


  function ItemCount({ initial, stock,onAddToCart })  {
const [count, setCount] = useState( initial)

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
        <button onClick={() => onAddToCart(count)}  disabled={count <=0}  className="btn">Agregar al Carrito </button>
      </div>

    </div>
  )
}

export default ItemCount