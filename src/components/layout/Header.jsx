import { Link, NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../store/AuthProvider';

export default function Header() {
  // header
  // pasiimti isUserLoggedIn ir logout is conteksto
  // ir panaudoti cia
  // const { logout, isUserLoggedIn } = useContext(AuthContext);
  const { logout, isUserLoggedIn } = useAuthCtx();

  return (
    <header className='bg-slate-300'>
      <div className='container flex justify-between items-center'>
        <Link to={'/'}>
          <h2 className='text-3xl leading-none p-3'>Logo</h2>
        </Link>
        <nav className='flex items-center'>
          <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/'}>
            Home
          </NavLink>
          <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/products'}>
            Products
          </NavLink>
          {isUserLoggedIn && (
            <NavLink
              className='text-lg p-3 hover:bg-slate-700 hover:text-white'
              to={'/products/add'}>
              Add Product
            </NavLink>
          )}

          {!isUserLoggedIn && (
            <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/auth/login'}>
              Login
            </NavLink>
          )}
          {isUserLoggedIn && (
            <>
              <Link
                to={'/auth/login'}
                onClick={logout}
                className='text-lg p-3 hover:bg-slate-700 hover:text-white'>
                Logout
              </Link>
              <p className='text-base d-inline-block px-1 p-3 hover:bg-slate-700 hover:text-white'>
                cia emailas
              </p>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
