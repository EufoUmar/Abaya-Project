import React from 'react'

const About = () => {
  return (
    <div className="flex justify-evenly flex-wrap align-center bg-gray-800 h-full w-full">
      <div className='bg-white p-10 max-w-[400px] mt-10'>
        <h1 className='flex flex-col text-5xl font-bold font-serif items-center pb-4'>About Us</h1>
        <p className='font-medium text-2xl'>We offer a diverse collection of hijabs and abayas, catering to various styles and preferences, all at competitive price points. Our products are crafted with high-quality materials, ensuring both elegance and durability for our customers.</p>
        <div className='flex flex-col bg-blue-950 text-white rounded-4xl items-center mt-5 cursor-pointer'><button className='p-3 cursor-pointer '>Learn More</button></div>
      </div>
      <div className='mt-10'>
        <img className='w-100 h-123' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQw_n3RvaeehTRSnsRBjUnzUo3yLxaQInH4w&s" alt="hero" />
      </div>
     </div>
  )
}

export default About