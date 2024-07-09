
import RoutePages from './RoutePages.jsx';
import Courses from './pages/Courses.jsx';
import Cart from './pages/Cart.jsx';
import CartModal from './components/CartModal.jsx'
import { CartProvider } from "./contextAPI/CartContext.jsx"; 
import NavBar from './components/NavBar.jsx';




function App() {
  return (

    <div className="App">
      <CartProvider>
    
        <RoutePages>
          
          <Cart />
          <Courses />
          <CartModal />
        </RoutePages>

      </CartProvider>

    </div>
      
    
    
  )
}

export default App
