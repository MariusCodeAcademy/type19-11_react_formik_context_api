import { Link } from 'react-router-dom';
import Btn from '../UI/Btn';

import { useAuthCtx } from '../../store/AuthProvider';

export default function ProductItem({ item }) {
  // pasiimti context value

  // const { isUserLoggedIn, logout } = useContext(AuthContext);
  const { isUserLoggedIn, logout } = useAuthCtx();
  // console.log('ctx ===', ctx);

  return (
    <li className='border '>
      <img className='block h-64 w-full object-cover' src={item.thumbnail} alt={item.title} />
      <div className='info p-4'>
        <h3 className='text-lg font-semibold'>{item.title}</h3>
        <p>Price: {item.price.toFixed(2)}</p>
        <Link
          className='mt-6 inline-block place-self-start text-lg border px-6 py-2 border-slate-600 rounded-md hover:bg-green-600 hover:text-white transition-colors'
          to={`/products/${item.id}`}>
          Read more
        </Link>
        {isUserLoggedIn && <Btn onClick={logout}>Logout</Btn>}
      </div>
    </li>
  );
}
