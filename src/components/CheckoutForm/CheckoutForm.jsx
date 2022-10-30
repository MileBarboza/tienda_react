import React, {useState, useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import firestore from "../../database/firestore";
import { collection, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'
import './checkoutForm.scss'

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
   <div className='jsx' style={{display:"flex", alignItems: "center", justifyContent:"center",padding:"2.5rem 0 9rem" }}>
        {
        (createOrder) ? 
            <div style={{textAlign:'center'}}>
                <h2>¡Muchas gracias <span className='orden-name'>{dataForm.name} {dataForm.surname}</span> por tu Compra!</h2>
                <div style={{display:"flex", alignItems: "center", justifyContent:"center",flexDirection: "column", margin: '20px', lineHeight: '30px'}}>
                    <p >El número de Orden es: <span className='orden'>{createOrder}</span> </p>
                    <p>En breve te llegará un correo con todo el detalle de la Compra ❤️</p>
                    <Link to="/"><button onClick={emptyCart} className='btn'>ir a Tienda</button></Link>
                </div>
            </div>
            :
            <div>
                    <h1 className='datos'>Datos Personales</h1>
                <form onSubmit={handleCkeckout} className='form'>
                    <div className='form-1'>
                        <label htmlFor="name">Nombre</label> 
                        <input value={dataForm.name} onChange={inputChangeHandler}  name="name" type="text" required className="campoLogin"/> 
                    </div> 
                    <div className='form-2'>
                        <label htmlFor="surname">Apellido</label>
                        <input value={dataForm.surname} onChange={inputChangeHandler} name="surname" type="text"  required className="campoLogin"/> 
                    </div>
                    <div className='form-3'>
                        <label htmlFor="phone">Teléfono</label>
                        <input value={dataForm.phone} onChange={inputChangeHandler} name="phone" type="number" required className="campoLogin"/>
                    </div>
                    <div className='form-4'>
                        <label htmlFor="domicile">Domicilio</label>
                        <input value={dataForm.domicile} onChange={inputChangeHandler} name="domicile" type="text" required className="campoLogin"/>
                    </div>
                    <div className='form-5'>
                        <label htmlFor="email">Email</label>
                        <input value={dataForm.email} onChange={inputChangeHandler} name="email" type="email"  required className="campoLogin"/>
                    </div>
                    <button className="btnlogin form-6"  type="submit">Finalizar Compra</button>
                </form>
            </div>
        }
   </div>
  )
}

export default CheckoutForm