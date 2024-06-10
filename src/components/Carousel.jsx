import { useEffect, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel'
import { carousel } from '../data';

const Carousel = () => {
  const { carouselFragment, slideToNextItem } = useSpringCarousel({
    withLoop: true,
    items: carousel.map(item => {
      return {
        id: item.id,
        renderItem: (
          <div className={item.className}>
            <img src={item.image} alt="" className='w-screen' />
          </div>
        )
      }
    })
  })

  useEffect(() => {
    setInterval(() => {
      slideToNextItem()
    }, 3000)
  }, [])

  return (
    <div className='h-[250px] md:h-full md:w-screen overflow-auto'>
      <div className='h-full overflow-hidden'>
        {carouselFragment}
      </div>
    </div>
  )
}

export default Carousel