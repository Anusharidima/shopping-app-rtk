import Header from './redux/Header.jsx'
import Product from './redux/Product.jsx'
import { clear } from './redux/slice'
import { useDispatch } from 'react-redux';
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import CartList from './redux/CartList.jsx'
function App() {
  const dispatch = useDispatch();
  return (
    <>
    <BrowserRouter>
    <Header />
      <h2 className="section-title">Shopping Cart</h2>
      {/* <div className="cart-section" >
        <h2 className="section-title">Shopping Cart clear</h2>
        <button onClick={() => dispatch(clear())} className="clear-cart">Clear Cart</button>
        </div> */}
      <div className="product-section">
      </div>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>

    </BrowserRouter>
    
      
    </>
  )
}

export default App
