import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const product = {
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  isOnSale: true,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: '...',
  adminEmail: '',
};

export default function AddProduct() {
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      rating: '4.8',
      stock: '50',
      // description: 'Very good phone, but very expensive, makes you look rich',
      description: '',
      isOnSale: false,
      brand: 'apple',
      category: 'smartphones',
      thumbnail: '',
      adminEmail: 'admin@email.com',
    },
    validationSchema: Yup.object({
      title: Yup.string().min(3).max(15, 'Gal galetumet trumpiau bisky').required(),
      price: Yup.number().min(0).max(999999999).required(),
      description: Yup.string().min(5).max(500).required(),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // fetch
      // ulr: https://dummyjson.com/products/add
      // sendFetch(values);
      sendAxios(values);
    },
  });

  function sendAxios(dataToSend) {
    axios
      .post('https://dummyjson.com/products/add', dataToSend)
      .then((resp) => {
        console.log('resp ===', resp);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  function sendFetch(dataToSend) {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data ===', data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  // console.log('formik.values ===', formik.values);
  console.log('formik.errors ===', formik.errors);

  return (
    <div className='container mb-96'>
      <h2 className='text-4xl my-5'>Create new product</h2>
      <div>
        <p>Title: {formik.values.title}</p>
      </div>
      <form className='grid grid-cols-2 gap-x-5' onSubmit={formik.handleSubmit}>
        <label className='block mb-4'>
          <span className='text-lg block'>Title</span>
          <input
            onChange={formik.handleChange}
            value={formik.values.title}
            name='title'
            className={`border w-full px-3 py-[6px] rounded-md ${
              formik.errors.title ? 'border-red-500 bg-red-50' : 'border-slate-300'
            } `}
            type='text'
            placeholder='Enter Title'
          />
          {formik.errors.title && (
            <p className='bg-red-100 text-red-800 rounded-md px-4 py-1 mt-2'>
              {formik.errors.title}
            </p>
          )}
        </label>
        <label className='block mb-4'>
          <span className='text-lg block'>Price</span>
          <input
            onChange={formik.handleChange}
            value={formik.values.price}
            name='price'
            className='border w-full px-3 py-[6px] border-slate-300 rounded-md '
            type='number'
            step={0.01}
            placeholder='Enter Price'
          />
          {formik.errors.price && (
            <p className='bg-red-100 text-red-800 rounded-md px-4 py-1 mt-2'>
              {formik.errors.price}
            </p>
          )}
        </label>
        <label className='block mb-4'>
          <span className='text-lg block'>Rating</span>
          <input
            onChange={formik.handleChange}
            value={formik.values.rating}
            name='rating'
            className='border w-full px-3 py-[6px] border-slate-300 rounded-md '
            type='number'
            step={0.1}
            placeholder='Enter Rating'
          />
        </label>
        <label className='block mb-4'>
          <span className='text-lg block'>Stock</span>
          <input
            onChange={formik.handleChange}
            value={formik.values.stock}
            name='stock'
            className='border w-full px-3 py-[6px] border-slate-300 rounded-md '
            type='number'
            step={1}
            placeholder='Enter Stock'
          />
        </label>

        <label className='block mb-4'>
          <span className='text-lg block'>Brand</span>
          <select
            onChange={formik.handleChange}
            value={formik.values.brand}
            className='border w-full px-3 py-[6px] border-slate-300 rounded-md '
            name='brand'
            id='brand'>
            <option value='apple'>Apple</option>
            <option value='samsung'>Samsung</option>
            <option value='google'>Google</option>
          </select>
        </label>
        <label className='block mb-4'>
          <span className='text-lg block'>Category</span>
          <input
            onChange={formik.handleChange}
            value={formik.values.category}
            name='category'
            className='border w-full px-3 py-[6px] border-slate-300 rounded-md '
            type='text'
            placeholder='Enter Category'
          />
        </label>
        <label className='block mb-4 '>
          <span className='text-lg block'>Thumbnail</span>
          <input
            onChange={formik.handleChange}
            value={formik.values.thumbnail}
            name='thumbnail'
            className='border w-full px-3 py-[6px] border-slate-300 rounded-md '
            type='text'
            placeholder='Enter Thumbnail'
          />
        </label>
        <label className='block mb-4'>
          <span className='text-lg block'>Admin Email</span>
          <input
            onChange={formik.handleChange}
            value={formik.values.adminEmail}
            name='adminEmail'
            className='border w-full px-3 py-[6px] border-slate-300 rounded-md '
            type='email'
            placeholder='Enter Admin Email'
          />
        </label>
        <label className='block mb-4 col-span-2'>
          <span className='text-lg block'>Description</span>
          <textarea
            onChange={formik.handleChange}
            value={formik.values.description}
            name='description'
            className='border min-h-20 w-full px-3 py-[6px] border-slate-300 rounded-md '
            placeholder='Enter Description'
          />
        </label>
        <button
          className='mt-6 place-self-start text-lg border px-6 py-2 border-slate-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors '
          type='submit'>
          Add
        </button>
      </form>
    </div>
  );
}
