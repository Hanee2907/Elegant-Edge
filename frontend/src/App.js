import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ShopCategory from './Pages/ShopCategory';


import LoginSignup from './Pages/LoginSignup'; // Ensure this is not duplicated

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

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
        <Route path="/category/:category/product/:productId" element={<ProductDetails />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} />} />
        <Route path='/login' element={<LoginSignup />} /> {/* Route for Signup */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
