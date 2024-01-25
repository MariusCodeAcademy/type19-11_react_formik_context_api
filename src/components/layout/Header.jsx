import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-300'>
      <div className='container flex justify-between items-center'>
        <Link to={'/'}>
          <h2 className='text-3xl leading-none p-3'>Logo</h2>
        </Link>
        <nav>
          <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/products'}>
            Products
          </NavLink>
          <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/products/add'}>
            Add Product
          </NavLink>
          <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/login'}>
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
