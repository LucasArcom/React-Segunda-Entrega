import './App.css';
import Navbar from './Nabvar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Bienvendio a la tienda de videojuegos NintenShop!!"}/>
    </>
  );
}

export default App;
