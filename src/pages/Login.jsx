import React from 'react'

const Login = () => {

  function btnClicked() {
    document.querySelector('.absolute').style.display = 'none' 
  }

  return (
    <div className='flex justify-center items-center h-screen w-full absolute left-80'>
        <div className='w-106 p-10 bg-gray-200 rounded-lg flex flex-col items-center justify-center '>
          <button onClick={btnClicked} className='text-3xl text-red-800 font-bolds relative left-48 bottom-10 hover:text-blue-900 cursor-pointer'>X</button>
            <h1 className='text-3xl font-bold text-center mb-10'>Login</h1>
            <form>
            <div className='mb-5'>
                <label htmlFor='email' className='block mb-2'>Email</label>
                <input type='email' id='email' className='w-full p-2 border border-gray-300 rounded-lg' />
            </div>
            <div className='mb-5'>
                <label htmlFor='password' className='block mb-2'>Password</label>
                <input type='password' id='password' className='w-full p-2 border border-gray-300 rounded-lg' />
            </div>
            <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login