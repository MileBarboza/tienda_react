import React, {useState} from 'react'
import '../../sass/boton.scss'
import { toast } from 'react-toastify'


function ItemCount({initial=1, stock}) {
const [count, setCount] = useState( initial)


function agregar(){
  if (count < stock ){
    setCount(count+1)
  } else  {
      toast("Alcanzó a su máximo Stock",{autoClose: 2000,theme: "colored", hideProgressBar: true, style: {
      background: "linear-gradient(19deg, #a8fadf 0%,#bcafe7  100%)",
      borderRadius:"7px",  
      fontWeight: "600",
      color:"#fff",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.087)",
    }})
  }
}
 
function restar(){
  if (count > 1){
    setCount(count-1)
  }
}

  return (
    <div>
        <button className='btnCount' onClick={restar}>-</button>
        <span>{count}</span>
        <button className='btnCount' onClick={agregar} >+</button>
    </div>
  )
}

export default ItemCount


