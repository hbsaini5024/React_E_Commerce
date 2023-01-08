import './App.css';
import Navbar from './components/e-commerce/navbar/Navbar';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Cart from './components/e-commerce/product/Cart';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<Navbar/>}/>
      </Routes>

    </div>
  );
}

export default App;

