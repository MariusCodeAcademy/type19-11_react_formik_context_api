import { Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import AddProduct from './components/products/AddProduct';
import ProductsList from './components/products/ProductsList';
import Header from './components/layout/Header';
import { useState } from 'react';

export default function App() {
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');

  function handleLogin(gotToken) {
    console.log('gotToken ===', gotToken);
    setToken(gotToken);
  }

  const isUserLoggedIn = Boolean(token);
  console.log('isUserLoggedIn ===', isUserLoggedIn);
  return (
    <div className=''>
      <Header isUserLoggedIn={isUserLoggedIn} />
      <Routes>
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route path='/products' element={<ProductsList />} />
        <Route path='/products/add' element={<AddProduct />} />
      </Routes>
    </div>
  );
}
