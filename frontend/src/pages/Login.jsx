import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('login');
  const { setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const endpoint = currentState === 'signup' ? 'register' : 'login';
      const payload = currentState === 'signup' ? { name, email, password } : { email, password };
      
      const response = await fetch(`${backendUrl}/api/user/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (data.success) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        toast.success(`${currentState === 'signup' ? 'Registration' : 'Login'} successful!`);
        
        setEmail('');
        setPassword('');
        if (currentState === 'signup') setName('');
        
        navigate('/');
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      navigate('/');
    }
  }, [navigate, setToken]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-500 p-4">
      <form 
        onSubmit={handleAuth}
        className="w-[90%] sm:max-w-md bg-white shadow-2xl rounded-lg p-8 flex flex-col gap-4 text-gray-800"
      >
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-blue-700">{currentState === 'login' ? 'Welcome Back' : 'Join Us'}</h2>
          <hr className="mt-2 w-16 mx-auto border-blue-600" />
        </div>

        {currentState === 'signup' && (
          <input 
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Full Name"
            required
          />
        )}

        <input 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          placeholder="Email Address"
          required
        />

        <input 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          required
        />

        <div className="w-full flex justify-between text-sm mt-1">
          <p className="cursor-pointer text-gray-600 hover:text-blue-600">Forgot password?</p>
          <p 
            onClick={() => setCurrentState(currentState === 'login' ? 'signup' : 'login')}
            className="cursor-pointer text-gray-600 hover:text-blue-600"
          >
            {currentState === 'login' ? 'Create Account' : 'Login Here'}
          </p>
        </div>

        <button 
          type="submit" 
          className={`w-full py-2 mt-4 rounded text-white font-medium transition ${
            loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={loading}
        >
          {loading ? 'Processing...' : currentState === 'login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
