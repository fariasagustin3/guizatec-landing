import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen bg-black py-5 mt-10 flex flex-col md:flex-row md:items-center justify-center md:justify-between md:px-40'>
      <div className='flex flex-col items-center py-5'>
        <h1 className='text-white text-2xl'>Guizatec</h1>
        <h3 className='text-white'>IVA Responsable Inscripto</h3>
      </div>
      <div className='flex flex-col items-center py-5'>
        <h1 className='text-white text-2xl'>Días y horarios:</h1>
        <p className='text-white'>Lunes a viernes de 8:00 a 20:00</p>
      </div>
    </div>
  )
}

export default Footer