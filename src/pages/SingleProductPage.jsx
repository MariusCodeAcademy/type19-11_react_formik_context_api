import { useParams } from 'react-router-dom';
import useApiData from '../hooks/useApiData';
import Btn from '../components/UI/Btn';

export default function SingleProductPage() {
  // pasiimti id current post

  const { prodId } = useParams();

  console.log('prodId ===', prodId);

  const [currentObj, setCurrentObj, isLoading] = useApiData(
    `https://dummyjson.com/products/${prodId}`,
  );

  console.log('currentObj ===', currentObj);

  // parsiusti duomenis ir iskonsolinti sio produkto informacija
  // su useApiData

  function handleAddToCart() {
    console.log('handleAddToCart');
  }

  return (
    <div className='container mt-10'>
      {isLoading && <h2>Loading...</h2>}
      <div className='grid grid-cols-2 gap-8'>
        <div className='left'>
          <img src={currentObj.thumbnail} alt={currentObj.title} />
          <ul className='flex flex-wrap gap-2 '>
            {currentObj.images?.map((imgUrl) => (
              <li className='basis-24 flex-grow' key={imgUrl}>
                <img src={imgUrl} alt={imgUrl} />
              </li>
            ))}
          </ul>
        </div>
        <div className='right'>
          <h1 className='text-3xl mb-5'>{currentObj.title}</h1>
          <p>Price: {currentObj.price}</p>
          <p>{currentObj.description}</p>

          <input className='border max-w-16  px-3 py-2' type='number' defaultValue={1} />
          <Btn onClick={handleAddToCart}>Add to cart</Btn>
        </div>
      </div>
    </div>
  );
}
const singleProdItem = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
  images: [
    'https://cdn.dummyjson.com/product-images/1/1.jpg',
    'https://cdn.dummyjson.com/product-images/1/2.jpg',
    'https://cdn.dummyjson.com/product-images/1/3.jpg',
    'https://cdn.dummyjson.com/product-images/1/4.jpg',
    'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
  ],
};
