import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const About = () => {
  return (
    <div className='flex flex-col md:flex-row mb-20'>
      {/* acá va una imagen de envios */}
      <img src="/images/about_image.png" alt="" className='md:w-[250px] flex-1 bg-[#0f1035] rounded-xl px-10 mx-10 md:px-0 md:mx-0 md:ml-20' />
      <div className='mt-5 flex-1 px-5 md:px-20'>
        <h1 className='font-semibold text-[33px] whitespace-pre-line'>Guizatec, soluciones digitales para
          empresas.</h1>
        <p className='whitespace-normal leading-7 text-sm'>
          Comprendemos las necesidades específicas de
          las empresas en el mundo digital, nuestra misión
          es proporcionar soluciones tecnológicas
          confiables y eficientes para impulsar el éxito de tu
          organización. Ofrecemos una amplia gama de
          productos y servicios atendiendo siempre las
          demandas empresariales.
        </p>
        <div className='mt-5 flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <span className='text-xs'>Confianza</span>
            <ProgressBar
              completed={100}
              bgColor="#000"
              animateOnRender
              initCompletedOnAnimation={0}
              transitionDuration="3s"
              height="10px"
              labelSize="10px"
              labelColor='#fff'
              labelClassName="font-bold text-[9px] text-white"
              barContainerClassName="rounded-none"
            />
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-xs'>Asesoramiento</span>
            <ProgressBar
              completed={100}
              bgColor="#000"
              animateOnRender
              initCompletedOnAnimation={0}
              transitionDuration="3s"
              height="10px"
              labelSize="10px"
              labelColor='#fff'
              labelClassName="font-bold text-[9px] text-white"
              barContainerClassName="rounded-none"
            />
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-xs'>Celeridad</span>
            <ProgressBar
              completed={100}
              bgColor="#000"
              animateOnRender
              initCompletedOnAnimation={0}
              transitionDuration="3s"
              height="10px"
              labelSize="10px"
              labelColor='#fff'
              labelClassName="font-bold text-[9px] text-white"
              barContainerClassName="rounded-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About