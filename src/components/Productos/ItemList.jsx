import React from 'react'
import Card from "./Card"
import './itemList.scss'

function ItemList(props) {
  return (
    <div className='contenedorCard'>
         {props.data.map((item) => {
              return (
                <Card 
                  key={item.id}  
                  id={item.id}   
                  offer={item.offer}
                  price={item.price}
                  title={item.title}
                  img={item.img}
                  stock={item.stock}
                  category={item.category}
                />
              )
            })
          }
    </div>
  )
}

export default ItemList



