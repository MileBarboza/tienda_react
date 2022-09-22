import React from 'react'
import Card from "./Card"
import './itemList.scss'

function ItemList(props) {
  return (
    <div className='contenedorCard'>
         {props.data.map((item) => {
              console.log(item);
              return (
                <Card 
                  key={item.id}      
                  price={item.price}
                  title={item.title}
                  img={item.img}
                  stock={item.stock}
                  catagory={item.catagory}
                />
              )
            })
          }
    </div>
  )
}

export default ItemList



