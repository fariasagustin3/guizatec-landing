import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row md:px-20'>
      <form className='flex flex-col md:justify-evenly w-screen mt-10 px-5 gap-5 md:flex-1'>
        <div className='flex items-center gap-3'>
          <input type="text" placeholder='Nombre' className='md: text-xs w-full border-none bg-transparent focus:border-[#00D2E2] focus:outline-none focus:border-[1px] py-3' />
          <input type="email" placeholder='Email' className='md: text-xs w-full border-none bg-transparent focus:border-[#00D2E2] focus:outline-none focus:border-[1px] py-3' />
        </div>
        <textarea name="" id="" placeholder='Consulta' className='md: text-xs focus:outline-none border-none' rows={5}></textarea>
        <button type='submit' className='self-start bg-black hover:bg-[#00D2E2] text-white px-5 py-3 transition-all duration-300'>ENVIAR MENSAJE</button>
      </form>
      <div className='mt-10 md:flex-1 md:flex md:flex-col md:items-center'>
        <h3 className='font-semibold px-5 text-sm'>Info de Contacto:</h3>
        <div className='border-4 flex flex-col justify-center gap-14 border-[#00D2E2] bg-black mx-5 mt-5 px-5 h-[300px] md:w-[70%]'>
          <div className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00D2E2" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span className='font-semibold text-[#00D2E2] text-sm'>Av. 28 de Junio 79, P3600 Formosa</span>
          </div>
          <div className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00D2E2" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <span className='font-semibold text-[#00D2E2] text-sm'>370 478-9947</span>
          </div>
          <div className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00D2E2" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <span className='font-semibold text-[#00D2E2] text-sm'>guizatec@mail.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact