import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import Login from './components/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const backendUrl = import.meta.env.VITE_BACKEND_URL
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');
  // const [token, setToken] = useState('i')
  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex flex-col">
      <ToastContainer />
      {token === '' ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr className="border-gray-700" />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-300 text-base bg-gray-800 p-6 rounded-lg shadow-lg">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
