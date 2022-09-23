import React, { useState, useEffect } from 'react'
import {getSingleItems} from '../../database/mockAPI';
import ItemDetail from "./ItemDetail"


function ItemDetailContainer() {

let [data, setData] = useState({});

useEffect (() => {
  getSingleItems().then((respuestaDatos) => setData(respuestaDatos))
},[])


  return (
    <div>
          <ItemDetail data={data}/>
    </div>
   )
}

export default ItemDetailContainer