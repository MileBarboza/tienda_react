// import './App.css';
import './sass/app.scss';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Productos/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Mi tienda Clothing"/> 
    </div>
  );
}

export default App;

