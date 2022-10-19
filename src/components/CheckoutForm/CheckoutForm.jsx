import React, {useState, useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import firestore from "../../database/firestore";
import { collection, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'

function CheckoutForm() {
    
const context = useContext(CartContext)
const {cart, getItemPrice, emptyCart} = context    
const [createOrder, setCreateOrder] = useState(null)

const [dataForm, setDataForm] = useState({ 
    name: "",
    surname: "",
    phone:"",
    email:"",
    domicile:""
})

function handleCkeckout(e){
   e.preventDefault()  
  const orderData = {
    buyer: dataForm,     
    items: cart,
    date: new Date(),   
    total: getItemPrice()
}
    createBuyOrder({ buyer: orderData })
}

function inputChangeHandler(e){      
    const {name, value} = e.target
    const newDataForm = {...dataForm}      
    newDataForm[name] = value 
    setDataForm(newDataForm)
}


const createBuyOrder = async (orderData) => {
    const collectionRef = collection(firestore, "orders"); 
     let respuesta = await addDoc(collectionRef, orderData)  
     setCreateOrder(respuesta.id)
    }

return (
   <div className='jsx App'>
        {
        (createOrder) ? 
            <div>
               <h1>Orden de Compra</h1>
                <h3 >Su Compra se generó Correctamente</h3>
                    <p>Nombre: {dataForm.name} {dataForm.surname}</p> 
                    <p>Correo: {dataForm.email}</p> 
                    <p>Teléfono: {dataForm.phone}</p> 
                    <p>Domicilio: {dataForm.domicile}</p> 
                    <p >El número de Orden es: {createOrder}</p>
                <Link to="/"><button onClick={emptyCart} className='btn'>ir a Tienda</button></Link>
            </div>
            :
            <div>
                <form onSubmit={handleCkeckout}>
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input value={dataForm.name} onChange={inputChangeHandler} name="name" type="text" placeholder="Nombre" required /> 
                    </div>
                    <div>
                        <label htmlFor="surname">Apellido</label>
                        <input value={dataForm.surname} onChange={inputChangeHandler} name="surname" type="text" placeholder="Apellido" required /> 
                    </div>
                    <div>
                        <label htmlFor="phone">Teléfono</label>
                        <input value={dataForm.phone} onChange={inputChangeHandler} name="phone" type="text" placeholder="Teléfono" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input value={dataForm.email} onChange={inputChangeHandler} name="email" type="text" placeholder="Email" required />
                    </div>
                    <div>
                        <label htmlFor="domicile">Domicilio</label>
                        <input value={dataForm.domicile} onChange={inputChangeHandler} name="domicile" type="text" placeholder="Domicilio" required />
                    </div>
                    <button onClick={handleCkeckout} className="btn">Finalizar Compra</button>
                </form>
            </div>
        }
   </div>
  )
}

export default CheckoutForm