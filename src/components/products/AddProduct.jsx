import { useFormik } from 'formik';

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
};

export default function AddProduct() {
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      rating: '',
      stock: '',
    },
  });

  console.log('formik.values ===', formik.values);

  return (
    <div className='container '>
      <h2 className='text-4xl my-5'>Create new product</h2>
      <div>
        <p>Title: {formik.values.title}</p>
      </div>
      <form>
        <label className='block mb-4'>
          <span className='text-lg block'>Title</span>
          <input
            onChange={formik.handleChange}
            value={formik.values.title}
            name='title'
            className='border w-full px-3 py-[6px] border-slate-300 rounded-md '
            type='text'
            placeholder='Enter Title'
          />
          {/* <p className='bg-red-300 text-red-800 px-4 py-1'>Klaida</p> */}
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
        <button
          className='mt-6 text-lg border px-6 py-2 border-slate-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors '
          type='submit'>
          Add
        </button>
      </form>
    </div>
  );
}
