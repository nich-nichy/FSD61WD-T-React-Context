import React, { createContext, useContext } from 'react';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <div className="poppins-regular">
        <Navbar />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
