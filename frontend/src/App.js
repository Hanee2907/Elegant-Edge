import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Signup from './Pages/Signup'; // Import Signup component
import LoginSignup from './Pages/LoginSignup';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory category="men" />} />
        <Route path='/womens' element={<ShopCategory category="women" />} />
        <Route path='/kids' element={<ShopCategory category="kids" />} />
        <Route path='/product' element={<Product addToCart={addToCart} />} />
        <Route path='/product/:productId' element={<Product addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} />} />
        <Route path='/login' element={<LoginSignup />} /> {/* Route for Signup */}
      </Routes>
    </div>
  );
}

export default App;
