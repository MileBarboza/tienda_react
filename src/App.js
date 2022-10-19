import './app.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/Productos/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Carrito from './components/carrito/Carrito';
import Favorito from './components/favorito/Favorito';
import Login from './components/login/Login';
import Contacto from './components/contacto/Contacto';
import PreguntasFrecuentes from './components/Footer/preguntas/PreguntasFrecuentes'
import TérminosYCondiciones from './components/Footer/preguntas/TérminosYCondiciones';
import PolíticasDePrivacidad from './components/Footer/preguntas/PolíticasDePrivacidad';
import MyProvider from './context/CartContext';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';

function App() {
  return (
    <MyProvider>
      <BrowserRouter className="App">
        <Navbar />
          <Routes>
              <Route path="/" element= { <ItemListContainer greeting="Mi tienda Clothing"/> } />
              <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
              <Route path='/contacto' element={ <Contacto/> }/> 
              <Route path='/categoria/:cat' element={ <ItemListContainer/> }/>
              <Route path='/talle/:talla' element={ <ItemListContainer/> }/>
              <Route path='/color/:colors' element={ <ItemListContainer/> }/>
              <Route path='*' element={  
                <div className='App jsx noProduc'>
                  <img src="https://img.freepik.com/vector-premium/ilustracion-maniqui-aislado-sobre-fondo-blanco-maniqui-ilustracion-dibujo-vectorial_231873-7179.jpg?w=360" alt="No hay Servicio"/>
                    <p className='noProduc__txt'> No coincide con ningún Producto</p>
                </div>
              }/> 
              <Route path='/carrito' element={ <Carrito/> }/>
              <Route path='/checkoutForm' element={ <CheckoutForm/> }/>
              <Route path='/login' element={ <Login/> }/>
              <Route path='/favorito' element={ <Favorito/> }/>
              <Route path='/preguntas-frecuentes' element={ <PreguntasFrecuentes/> }/>
              <Route path='/terminos-y-condiciones' element={ <TérminosYCondiciones/> }/>
              <Route path='/politicas-de-privacidad' element={ <PolíticasDePrivacidad/> }/>                    
          </Routes> 
        <Footer />
          <ToastContainer/>
      </BrowserRouter>
    </MyProvider> 
  );
}

export default App;