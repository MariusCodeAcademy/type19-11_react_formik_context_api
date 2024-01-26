// pariusst ir atvaizuodti produktus is https://dummyjson.com/products

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

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

function ProductsList() {
  const [mainProductsArr, setMainProductsArr] = useState([]);
  console.log('mainProductsArr ===', mainProductsArr);
  console.log(' mainProductsArr[0] ===', JSON.stringify(mainProductsArr[0]));
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((resp) => {
        console.log('resp ===', resp);
        const prodArr = resp.data.products;
        setMainProductsArr(prodArr);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {mainProductsArr.map((pObj) => (
          <li key={pObj.id}>{pObj.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
