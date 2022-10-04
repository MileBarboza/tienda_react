import { createContext, useState} from "react";

 const CartContext = createContext() 

export default function MyProvider ({children}) {     
    const [cart, setCart] = useState([])  
    
    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const addItem = (item, count) => {
        const newItem = {...item, count}   
        if(isInCart(newItem.id)){  
            const findProduct = cart.find(item => item.id === newItem.id)  
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]      
            auxArray[productIndex].count += count  
            setCart(auxArray)   
        }else{  
            setCart([...cart, newItem])       
        }
    }

    const emptyCart = () => {
        return setCart([])
    }

    const deleteItem = (id) => {
        return setCart(cart.filter(item => item.id !== id)) 
    }

    const getItemCount = () => {  
        return cart.reduce((acc,item) => acc += item.count, 0)  
    }

    const getItemPrice = () => {
        return cart.reduce((acc,item) => acc += item.price * item.count, 0)
    }

return ( <CartContext.Provider value={ {cart, isInCart, addItem, emptyCart, deleteItem, getItemCount, getItemPrice} }> 
                {children}
         </CartContext.Provider> )
}

export { CartContext };