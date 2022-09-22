import React, {useState} from 'react'

function ItemCount({initial, stock, onAdd})  {
const [count, setCount] = useState( initial)


function agregar(){
    setCount(count+1)
}
 
function restar(){
    setCount(count-1)
}

  return (
    <div>
        <button disabled={count <= 1} className='btnCount' onClick={restar}>-</button>
        <span>{count}</span>
        <button disabled={ count >= stock } className='btnCount' onClick={agregar} >+</button>
    </div>
  )
}

export default ItemCount


