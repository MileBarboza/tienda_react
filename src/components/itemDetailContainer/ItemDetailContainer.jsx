import React, { useState, useEffect } from 'react'
import {getSingleItems} from '../../database/mockAPI';
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

function ItemDetailContainer() {

let [data, setData] = useState({});

console.log(useParams());
const { id } = useParams();

useEffect (() => {
    getSingleItems(id).then((respuestaDatos) => setData(respuestaDatos))
},[id])

  return (
    <div className='jsx'>
        <ItemDetail data={data}/>
    </div>
   )
}

export default ItemDetailContainer