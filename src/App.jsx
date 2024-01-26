import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProductPage from './pages/ProductPage';
import AddProductPage from './pages/AddProductPage';
import UnAuthorizedPage from './pages/UnAuthorizedPage';
import SingleProductPage from './pages/SingleProductPage';
import AuthContext from './store/AuthContex';

export default function App() {
  const tokenFromStorage = localStorage.getItem('userToken');
  const [token, setToken] = useState(tokenFromStorage || '');
  const [email, setEmail] = useState('');

  function handleLogin(gotToken) {
    console.log('gotToken ===', gotToken);
    setToken(gotToken);
    localStorage.setItem('userToken', gotToken);
  }

  function handleLogout() {
    setToken('');
    localStorage.removeItem('userToken');
  }

  const isUserLoggedIn = Boolean(token);
  console.log('isUserLoggedIn ===', isUserLoggedIn);

  const ctxValue = {
    isUserLoggedIn: isUserLoggedIn,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={ctxValue}>
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
    </AuthContext.Provider>
  );
}
