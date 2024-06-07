import React from 'react'
import Slider from 'react-infinite-logo-slider'

const data = [
  {
    id: 1,
    name: "AMD",
    image: "/images/marcas/amd_icon.png",
  },
  {
    id: 2,
    name: "APPLE",
    image: "/images/marcas/apple_icon.png",
  },
  {
    id: 3,
    name: "ASUS",
    image: "/images/marcas/asus_icon.png",
  },
  {
    id: 4,
    name: "DELL",
    image: "/images/marcas/dell_icon.png",
  },
  {
    id: 5,
    name: "HP",
    image: "/images/marcas/hp_icon.png",
  },
  {
    id: 6,
    name: "INTEL",
    image: "/images/marcas/intel_icon.png",
  },
  {
    id: 7,
    name: "LENOVO",
    image: "/images/marcas/lenovo_icon.png",
  },
  {
    id: 8,
    name: "LG",
    image: "/images/marcas/lg_icon.png",
  },
  {
    id: 9,
    name: "LOGITECH",
    image: "/images/marcas/logitech_icon.png",
  },
  {
    id: 10,
    name: "NVIDIA",
    image: "/images/marcas/nvidia_icon.png",
  },
  {
    id: 11,
    name: "SAMSUNG",
    image: "/images/marcas/samsung_icon.png",
  },
]

const Clients = () => {
  return (
    <>
      {/* carrusel */}
      <div className='bg-[#818181] gap-10 h-[200px] flex flex-col justify-center py-40 border-y-4 border-y-[#00D2E2]'>
        <h1 className='text-white text-[30px] text-center font-semibold'>NUESTRAS MARCAS</h1>
        <Slider
          width="150px"
          duration={40}
          pauseOnHover={true}
          blurBorders={false}
          blurBorderColor="#FFF"
        >
          {data.map(brand => (
            <Slider.Slide key={brand.id}>
              <img src={brand.image} alt="" className='w-20 md:w-32' />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Clients