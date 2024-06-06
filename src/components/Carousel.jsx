import { useEffect, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel'

const Carousel = () => {
  const mock = [
    {
      id: 1,
      title: "Item 1",
      className: "w-screen bg-red-500 flex items-center justify-center"
    },
    {
      id: 2,
      title: "Item 2",
      className: "w-screen bg-green-500 flex items-center justify-center"
    },
    {
      id: 3,
      title: "Item 3",
      className: "w-screen bg-blue-500 flex items-center justify-center"
    },
    {
      id: 4,
      title: "Item 4",
      className: "w-screen bg-yellow-500 flex items-center justify-center"
    },
  ]

  const { carouselFragment, slideToNextItem } = useSpringCarousel({
    withLoop: true,
    items: mock.map(item => {
      return {
        id: item.id,
        renderItem: (
          <div className={item.className}>
            <h1>{item.title}</h1>
          </div>
        )
      }
    })
  })

  useEffect(() => {
    setInterval(() => {
      slideToNextItem()
    }, 2000)
  }, [])

  return (
    <div className='h-[250px] md:h-[500px] overflow-auto'>
      <div className='h-full overflow-x-hidden'>
        {carouselFragment}
      </div>
    </div>
  )
}

export default Carousel