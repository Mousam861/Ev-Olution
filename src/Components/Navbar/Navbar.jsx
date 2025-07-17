import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute z-10 p-7 flex w-full items-center justify-between'>
      <div>
        <h1 className='text-white font-bold text-3xl'>EV-OLUTION</h1>
      </div>
      <div className='flex items-center text-white gap-20'>
        <h3>HOME</h3>       
        <h3>ABOUT US</h3>
        <h3>CONTACT</h3>
        <h3 className='px-3 py-2 bg-white text-black rounded-3xl'>EXPLORE MODELS</h3>
      </div>
    </div>
  )
}

export default Navbar