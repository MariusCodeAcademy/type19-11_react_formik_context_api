import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProductPage from './pages/ProductPage';
import AddProductPage from './pages/AddProductPage';
import UnAuthorizedPage from './pages/UnAuthorizedPage';
import SingleProductPage from './pages/SingleProductPage';
import AuthContext from './store/AuthProvider';

export default function App() {
  return (
    <div className=''>
      <Header isUserLoggedIn={isUserLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/auth/login'
          element={
            !isUserLoggedIn ? <AuthPage onLogin={handleLogin} /> : <Navigate to={'/products'} />
          }
        />
        <Route path='/products' element={<ProductPage />} />
        {/* protected route */}
        <Route
          path='/products/add'
          element={isUserLoggedIn ? <AddProductPage /> : <Navigate to={'/unauthorized'} />}
        />
        <Route path='/products/:prodId/' element={<SingleProductPage />} />
        <Route path='/unauthorized' element={<UnAuthorizedPage />} />
      </Routes>
    </div>
  );
}
