import React from 'react'

const Home = () => {
  return (
     <div className="flex justify-evenly align-center bg-white h-full w-full mt-10">
      <div className='bg-white p-10 max-w-[400px]'>
        <h1 className='flex flex-col text-5xl font-bold font-serif items-center pb-4'>Abayya</h1>
        <p className='font-medium text-2xl'>We offer a diverse collection of hijabs and abayas, catering to various styles and preferences, all at competitive price points. Our products are crafted with high-quality materials, ensuring both elegance and durability for our customers.</p>
        <div className='flex flex-col bg-blue-950 text-white rounded-4xl items-center mt-5 cursor-pointer'><button className='p-3 cursor-pointer '>Buy Now</button></div>
      </div>
      <div className=''>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwbwkXXbsZoXxKwyjqRgOCD5GBCt_YuPeIw&s" width={470} alt="hero" />
      </div>
     </div>
  )
}

export default Home