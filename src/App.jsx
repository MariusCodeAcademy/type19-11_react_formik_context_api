import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProductPage from './pages/ProductPage';
import AddProductPage from './pages/AddProductPage';
import UnAuthorizedPage from './pages/UnAuthorizedPage';
import SingleProductPage from './pages/SingleProductPage';
import { useAuthCtx } from './store/AuthProvider';

export default function App() {
  const { isUserLoggedIn } = useAuthCtx();
  return (
    <div className=''>
      <Header isUserLoggedIn={isUserLoggedIn} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/auth/login'
          element={!isUserLoggedIn ? <AuthPage /> : <Navigate to={'/products'} />}
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
