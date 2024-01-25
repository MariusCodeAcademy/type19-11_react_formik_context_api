import { Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import AddProduct from './components/products/AddProduct';
import ProductsList from './components/products/ProductsList';
import Header from './components/layout/Header';

export default function App() {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<ProductsList />} />
        <Route path='/products/add' element={<AddProduct />} />
      </Routes>
    </div>
  );
}
