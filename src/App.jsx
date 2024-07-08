import { useState } from 'react'
import Layout from './components/Layout.jsx';
import RoutePages from './RoutePages.jsx';
import Courses from './pages/Courses.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';

import { CartProvider } from "./contextAPI/CartContext.jsx"; 
import NavBar from './components/NavBar.jsx';




function App() {
  return (

    <div className="App">
      <CartProvider>
    
        <RoutePages>
          <NavBar />
          <Cart />
          <Courses />
        </RoutePages>

      </CartProvider>

    </div>
      
    
    
  )
}

export default App
