import React from 'react'
import {Routes,Route} from 'react-router-dom'
import  Home from './pages/Home.jsx'
import  Collection from './pages/Collection.jsx'
import  About from './pages/About.jsx'
import  Contact from './pages/Contact.jsx'
import  Login from './pages/Login.jsx'
import  PlaceOrder from './pages/PlaceOrder.jsx'
import Product from './pages/Product.jsx'
import Order from './pages/Order.jsx'
import  Cart from './pages/Cart.jsx'


const App = () => {
  return (
    <div className='px-0 m-0 sm:px-[0vw] md:px-[0vw] lg:px-[0vw] overflow-hidden'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection'element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/order' element={<Order />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App