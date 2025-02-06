import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Collection from './pages/Collection.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import Product from './pages/Product.jsx';
import Order from './pages/Order.jsx';
import Cart from './pages/Cart.jsx';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer.jsx'



const App = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/cart' element={<Cart />} />
        
      </Routes>
      <Footer />

    </div>
  );
  
};

export default App;
