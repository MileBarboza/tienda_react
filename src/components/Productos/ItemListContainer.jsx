import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import './itemListContainer.scss'
// import getItems, { getItemsByCategory, getItemsBySize, getItemsByColor} from '../../database/mockAPI'
import { getItems, getItemsByCategory, getItemsBySize, getItemsByColor} from '../../database/firestore'
import { useParams } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'
import Filtro from '../filtro/Filtro';

function ItemListContainer({greeting}) {

   const  [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true) 
   const { cat, talla, colors } = useParams()

   useEffect(() => {
      setIsLoading(true)
          if (cat !== undefined) {
            getItemsByCategory(cat)
            .then((respuestaDatos) => setData(respuestaDatos))
            .finally( () => setIsLoading(false) )  
          }
          else if (talla !== undefined)  {
            getItemsBySize(talla)
            .then((respuestaDatos) => setData(respuestaDatos))
            .finally( () => setIsLoading(false) ) 
          }
          else if (colors !== undefined)  {
            getItemsByColor(colors)
            .then((respuestaDatos) => setData(respuestaDatos))
            .finally( () => setIsLoading(false) ) 
          }
       else {
       getItems()
       .then((respuestaDatos) => setData(respuestaDatos))
       .finally( () => setIsLoading(false) ) }
   }, [cat, talla, colors]);

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