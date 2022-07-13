import './App.css';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Item/Product';
import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <div>
      <Navbar />
      <ItemList />  
      { /* <Product /> */ }
    </div>
  );
}

export default App;
