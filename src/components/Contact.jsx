import React from 'react'

const Contact = () => {
  return (
    <form className='flex flex-col w-screen mt-10 px-5 gap-5'>
      <div className='flex items-center gap-3 w-full'>
        <input type="text" placeholder='Nombre' className='border-none bg-transparent focus:border-[#00D2E2] focus:outline-none focus:border-[1px] py-3' />
        <input type="email" placeholder='Email' className='border-none bg-transparent focus:border-[#00D2E2] focus:outline-none focus:border-[1px] py-3' />
      </div>
      <textarea name="" id="" placeholder='Consulta' className='focus:outline-none border-none' rows={5}></textarea>
      <button type='submit' className='self-start bg-black hover:bg-[#00D2E2] text-white px-5 py-3 transition-all duration-300'>ENVIAR MENSAJE</button>
    </form>
  )
}

export default Contact