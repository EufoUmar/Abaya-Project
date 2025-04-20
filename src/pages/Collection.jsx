import React from 'react'
import Cart from '../components/Cart'
import Scarf from '../components/Scarf'

const Collection = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-gray-950'>
      <div className='flex justify-center items-center flex-col mt-10 absolute top-10 left-0'>
        <h1 className='text-white p-3 m-4 font-bold text-2xl'>Options</h1>
        <label className='text-amber-50 mb-2 mt-2'>Mix</label>
        <input defaultChecked type="checkbox" name="abaya"/>
        <label className='text-amber-50 mb-2 mt-2'>Abaya</label>
        <input type="checkbox" name="abaya"/>
        <label className='text-amber-50 mb-2 mt-2'>Scarf</label>
        <input type="checkbox" name="abaya"/>
        <label className='text-amber-50 mb-2 mt-2'>Cap</label>
        <input type="checkbox" name="abaya"/>
      </div>
      <div className='w-auto mt-5 ml-20 mr-20 flex justify-evenly flex-wrap'>
      <Cart price="6700" img="https://abayastore.pk/wp-content/uploads/2025/01/Bow-Abaya-600x898.webp" />
      <Cart price="4500" img="https://malbus.com.pk/cdn/shop/files/jade-embellished-abaya-by-malbus_1080x.jpg?v=1743666756"/>
      <Cart price="9000" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReSKFrQ77BR0RTXJkvIaCPbb4juRfgR502Ww&s"/>
      <Cart price="6400" img="https://hijabi.pk/cdn/shop/files/SERENEFrontClosedABAYACharcoal_b43e40b1-691e-470e-a590-416dda444017.jpg?v=1722430756"/>
      <Cart price="7800" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1pKm058x8rUay--WwrNLP5XndDzl3jVsevA&s"/>
      <Cart price="5500" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KdckY5AVQ7JKmqNg5rq7a_dkJQOju7Jl8Q&s"/>
      <Scarf price="250" img="https://www.shutterstock.com/image-vector/muslim-woman-without-face-hijab-260nw-716371624.jpg"/>
      <Scarf price="270" img="https://www.shutterstock.com/image-vector/vector-hijab-red-without-face-260nw-1986906206.jpg"/>
      <Scarf price="310" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadoVi2kyvTymuEyWKzqlcVTmD7RmMfCzJzT1iNtxtZnKRTZhRunzu0V0qLxK6jqI8Sj4&usqp=CAU"/>
    </div>
    </div>
  )
}

export default Collection