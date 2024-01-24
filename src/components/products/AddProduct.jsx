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
  adminEmail: '',
};

export default function AddProduct() {
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      rating: '',
      stock: '',
      description: '',
      isOnSale: false,
      brand: '',
      category: '',
      thumbnail: '',
      adminEmail: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // fetch
    },
  });

  console.log('formik.values ===', formik.values);

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
