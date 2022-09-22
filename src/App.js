import './app.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/Productos/ItemListContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Mi tienda Clothing"/> 
      <ToastContainer/>
      <Footer />
    </div>
  );
}

export default App;

