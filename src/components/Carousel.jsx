import { useEffect, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel'

const Carousel = () => {
  const mock = [
    {
      id: 1,
      image: "/images/fondo_1.png",
      className: "w-screen flex items-center justify-center"
    },
    {
      id: 2,
      image: "/images/fondo_2.png",
      className: "w-screen flex items-center justify-center"
    },
    {
      id: 3,
      image: "/images/fondo_3.png",
      className: "w-screen flex items-center justify-center"
    },
  ]

  const { carouselFragment, slideToNextItem } = useSpringCarousel({
    withLoop: true,
    items: mock.map(item => {
      return {
        id: item.id,
        renderItem: (
          <div className={item.className}>
            <img src={item.image} alt="" />
          </div>
        )
      }
    })
  })

  useEffect(() => {
    setInterval(() => {
      slideToNextItem()
    }, 4000)
  }, [])

  return (
    <div className='h-[250px] md:h-screen overflow-auto'>
      <div className='h-full overflow-hidden'>
        {carouselFragment}
      </div>
    </div>
  )
}

export default Carousel