import React, {useState, useEffect} from 'react'
import getItems from '../../database/mockAPI'
import ItemList from './ItemList'
import './itemListContainer.scss'


function ItemListContainer({greeting}) {

    let [data, setData] = useState([]);

    useEffect(
      () => {
        getItems().then ((respuestaDatos) => {
          setData(respuestaDatos) 
        });
      }, []);


  return (
    <div className="productos">
        <h1>{greeting}</h1> 
        <div className="container">
            <ItemList  data={data}/>
        </div>
    </div>
  )
}

export default ItemListContainer ;


