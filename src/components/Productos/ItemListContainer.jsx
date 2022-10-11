import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import './itemListContainer.scss'
import getItems, { getItemsByCategory} from '../../database/mockAPI'
import { useParams } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'
import Filtro from '../filtro/Filtro';

function ItemListContainer({greeting}) {

    const  [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true) 

    const { cat } = useParams()
    
    useEffect(() => {
       setIsLoading(true)
        if (cat === undefined) {
        getItems()
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally( () => setIsLoading(false) ) 
      } else {
        getItemsByCategory(cat)
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally( () => setIsLoading(false) )  
      }
    }, [cat]);


  return (<>
     {    
        isLoading ? 
        <div className="jsx loading" ><DotSpinner size={40} speed={0.9}  color=" #c66161" /></div>
        :
     <div className="jsx">
        <h1>{greeting}</h1> 
        <div className='container-filtro'>
            <Filtro/>
            <div className='container'>
                <ItemList  data={data}/>
            </div>
        </div>
     </div>
     }
  </>)
}

export default ItemListContainer ;