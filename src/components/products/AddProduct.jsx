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
  return (
    <div className='container '>
      <h2 className='text-4xl my-5'>Create new product</h2>

      <form>
        <label className='block'>
          <span className='text-lg block'>Title</span>
          <input
            className='border w-full px-2 py-1 border-slate-500 rounded-md '
            type='text'
            placeholder='Enter Title'
          />
        </label>
      </form>
    </div>
  );
}
