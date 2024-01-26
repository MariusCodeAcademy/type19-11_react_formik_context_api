import { useParams } from 'react-router-dom';

export default function SingleProductPage() {
  // pasiimti id current post

  const { prodId } = useParams();

  console.log('prodId ===', prodId);

  return (
    <div className='container'>
      <h1 className='text-3xl mb-5'>SingleProductPage</h1>
    </div>
  );
}
