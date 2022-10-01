import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import './itemListContainer.scss'
import getItems, { getItemsBycategory } from '../../database/mockAPI'
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

function ItemListContainer({greeting}) {

    let [data, setData] = useState([]);
const [loading, setLoading] = useState(false)

const { cat } = useParams()
console.log(cat);
 
useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 2500);
},[]);

    useEffect(
      () => {
        if (cat === undefined) {
        getItems().then((respuestaDatos) => setData(respuestaDatos));
      }  else {
        getItemsBycategory(cat).then((respuestaDatos) => setData(respuestaDatos));
      }
    }, [cat]);


  return (
    <>
     {loading ? <CircularProgress className="loading"/> :  
     <div className="jsx">
        <h1>{greeting}</h1> 
          <div className='container'>
              <ItemList  data={data}/>
          </div>
     </div>}
    </>
  )
}

export default ItemListContainer ;