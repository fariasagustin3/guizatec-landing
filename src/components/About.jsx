import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const About = () => {
  return (
    <div className='flex flex-col md:flex-row mb-20'>
      {/* acá va una imagen de envios */}
      <div className='w-screen h-[450px] bg-black flex-1' />
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
              bgColor="#00D2E2"
              animateOnRender
              initCompletedOnAnimation={0}
              transitionDuration="3s"
              height="5px"
              labelSize="10px"
              labelColor='#000000'
              labelClassName="font-medium text-xs"
              barContainerClassName="rounded-none"
            />
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-xs'>Asesoramiento</span>
            <ProgressBar
              completed={100}
              bgColor="#00D2E2"
              animateOnRender
              initCompletedOnAnimation={0}
              transitionDuration="3s"
              height="5px"
              labelSize="10px"
              labelColor='#000000'
              labelClassName="font-medium text-xs"
              barContainerClassName="rounded-none"
            />
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-xs'>Celeridad</span>
            <ProgressBar
              completed={100}
              bgColor="#00D2E2"
              animateOnRender
              initCompletedOnAnimation={0}
              transitionDuration="3s"
              height="5px"
              labelSize="10px"
              labelColor='#000000'
              labelClassName="font-medium text-xs"
              barContainerClassName="rounded-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About