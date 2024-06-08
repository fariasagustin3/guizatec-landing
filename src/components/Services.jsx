import React from 'react'

const Services = () => {
  return (
    <div className='flex flex-col pb-10'>
      <div className='relative flex items-center justify-center bg-black w-screen h-20 mb-20'>
        <h1 className='text-[#FFF] text-2xl font-semibold'>SOMOS SERVICIO</h1>
        <div className='absolute top-[90%] w-[150px] md:w-[250px] bg-black h-10 md:h-16 triangulo mb-40'></div>
      </div>
      <div className='h-32 flex flex-col md:flex-row md:justify-center gap-5 md:gap-0 items-center px-5 md:mt-10'>
        <div className='flex flex-col items-center gap-5 md:flex-1 md:justify-center'>
          <div className='flex flex-col items-center bg-[#731523] p-7 rounded-full border-white border-4 hover:border-[#731523] hover:bg-black transition-all duration-500'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill='#FFF' className='w-12 h-12'>
              <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
            </svg>
          </div>
          <h3 className='text-center font-semibold text-xl'>ENVÍOS A TODO EL PAÍS</h3>
          <span className='text-center text-sm'>Realizamos entregas a todo el territorio nacional</span>
        </div>

        <div className='flex flex-col items-center gap-5 md:flex-1 md:justify-center'>
          <div className='flex flex-col items-center bg-[#731523] p-7 rounded-full border-white border-4 hover:border-[#731523] hover:bg-black transition-all duration-500'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
          </div>
          <h3 className='text-center font-semibold text-xl'>DESCUENTOS</h3>
          <span className='text-center text-sm'>Consulte para mejorar cualquier presupuesto</span>
        </div>

        <div className='flex flex-col items-center gap-5 md:flex-1 md:justify-center'>
          <div className='flex flex-col items-center bg-[#731523] p-7 rounded-full border-white border-4 hover:border-[#731523] hover:bg-black transition-all duration-500'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
            </svg>
          </div>
          <h3 className='text-center font-semibold text-xl'>SOPORTE</h3>
          <p className='text-center text-sm'>Brindamos asesoramiento y servicio técnico pre y post venta</p>
        </div>
      </div>
    </div>
  )
}

export default Services