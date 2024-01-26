import { useParams } from 'react-router-dom';
import useApiData from '../hooks/useApiData';

export default function SingleProductPage() {
  // pasiimti id current post

  const { prodId } = useParams();

  console.log('prodId ===', prodId);

  const [currentObj, setCurrentObj] = useApiData(`https://dummyjson.com/products/${prodId}`);

  console.log('currentObj ===', currentObj);

  // parsiusti duomenis ir iskonsolinti sio produkto informacija
  // su useApiData

  return (
    <div className='container'>
      <h1 className='text-3xl mb-5'>SingleProductPage</h1>
    </div>
  );
}
