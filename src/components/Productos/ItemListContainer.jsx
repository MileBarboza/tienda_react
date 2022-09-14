import Card from "./Card"
import '../../sass/ItemListContainer.scss'

function ItemListContainer({greeting}) {
  return (
    <div className="productos">
        <h1>{greeting}</h1>
        <div className="container">
            <Card 
                title="lorem is lapsumdesd" 
                price={19600} 
                img="https://place-hold.it/250x300" alt="Producto"/>

            <Card 
                title="lorem is lapsumdesd" 
                price={6309} 
                img="https://place-hold.it/250x300" alt="Producto"/>

            <Card 
                title="lorem is lapsumdesd"
                price={3750.066} 
                img="https://place-hold.it/250x300" alt="Producto" />

            <Card 
                title="lorem is lapsumdesd"
                price={3750} 
                img="https://place-hold.it/250x300" alt="Producto" />
                
            <Card 
                title="lorem is lapsumdesd"
                price={216450} 
                img="https://place-hold.it/250x300" alt="Producto"/>

            <Card 
                title="lorem is lapsumdesd" 
                price={6309} 
                img="https://place-hold.it/250x300" alt="Producto"/>
        </div>
    </div>
  )
}

export default ItemListContainer ;


