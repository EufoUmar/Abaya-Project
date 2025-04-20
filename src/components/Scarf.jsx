import React from 'react'

const Scarf = ({price, img}) => {
  return (
    <div className='m-5 w-70 bg-gray-200 border-red-100 border-2 rounded-2xl p-5 flex flex-col justify-between items-center'>
        <div className='max-w-50 bg-gray-600 rounded-full'><img className='border-none rounded-full' src={img} alt="burkha" width={230} height={230}/></div>
      <h2 className='text-black font-bold capital flex justify-center'>Scarf</h2>
      <p className='text-black font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit alias voluptatum.</p>
      <div className='text-black mt-3 flex justify-between'>
        <button className='bg-blue-300 font-bold pl-2 pr-2 rounded-full'>Buy Now</button>
        <span className=' rounded-2xl p-3 capitalize font-bold'> price: {price}</span>
      </div>
      </div>
  )
}

export default Scarf