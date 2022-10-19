import React, { useState, useEffect } from 'react'
// import {getSingleItem} from '../../database/mockAPI';
import {getSingleItem} from '../../database/firestore';
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'

function ItemDetailContainer() {

const [data, setData] = useState({});
const [error, setError] = useState(false)  
const [isLoading, setIsLoading] = useState(true)    

const {id} = useParams();

useEffect(()=>{
  getSingleItem(id)
  .then((respuestaDatos) => setData(respuestaDatos))
  .catch((errormsg) => {
     setError(errormsg.message);
  })
  .finally(()=> setIsLoading(false));
}, [id]);

if (isLoading){  
  return (<div className="jsx">  
  { error ? 
    (<div>
        <h2  style={{color:"#d1342f"}}>Error Obteniendo los Datos</h2>  
        <p> {error} </p>
    </div>)
   :
    (<div className="jsx loading" ><DotSpinner size={40} speed={0.9}  color=" #c66161" /></div>)
   }  
  </div>)
}

  return (
       <div className='jsx'> 
           <ItemDetail data = {data}/>
       </div>
  )
}

export default ItemDetailContainer


