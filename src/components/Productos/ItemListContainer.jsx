import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import './itemListContainer.scss'
import { getItems, getItemsByCategory, getItemsBySize, getItemsByColor} from '../../database/firestore'
import { useParams } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'
import Filtro from '../filtro/Filtro';
import { BsFilterLeft } from "react-icons/bs";


function ItemListContainer({greeting}) {

   const  [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true) 
   const { cat, talla, colors } = useParams()
   const [toggleFilter, setToggleFilter] = useState(true > 700)
    const toggleFiltro = () => {
      setToggleFilter(!toggleFilter)
    }

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


const [screenWidth,setScreenWidth] = useState
(window.innerWidth)

useEffect(() => {
  const changeWidth = () => {
  setScreenWidth(window.innerWidth)
}
  window.addEventListener('resize',changeWidth)
  return() => {
  window.removeEventListener('resize',changeWidth)
  }
}, [])

  return (<>
     {    
        isLoading ? 
        <div className="jsx loading" ><DotSpinner size={40} speed={0.9}  color=" #c66161" /></div>
        :
      <div className="container jsx">
          <div className='container-filtro'>
              <button onClick={toggleFiltro} className='btnFiltro'>
                Filtro <BsFilterLeft className='iconsFiltro' />
              </button>
            {(toggleFilter || screenWidth > 770) && (
              <Filtro className='cntFiltro' />
            )}
          </div>
              <ItemList  data={data}/>
      </div>
     }
  </>)
}

export default ItemListContainer ;