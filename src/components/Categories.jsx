import React, { useEffect, useState } from 'react'
import './categories.css';
import { productos, categories } from '../data';

const HoverElement = ({ id, hoverId, product }) => {
  return (
    <div className='relative h-full w-full'>
      <div className={id === hoverId ? 'h-full absolute transition-opacity duration-500 left-0 right-0 top-0 bottom-0 m-auto' : "h-full opacity-0 left-0 right-0 top-0 bottom-0 m-auto transition-opacity duration-500"}>
        <div className='flex flex-col h-full items-center justify-center'>
          <h1 className='z-10 text-white opacity-1 text-sm text-center'>{product.name}</h1>
          <button className='z-10 bg-[#731523] text-sm px-3 py-2 font-semibold text-white opacity-1'>Consultanos</button>
          <div className='absolute h-full w-full bg-black opacity-80'></div>
        </div>
      </div>
    </div>
  )
}

const Categories = () => {
  const [selected, setSelected] = useState("todos");
  const [products, setProducts] = useState([]);
  const [showHoverElement, setShowHoverElement] = useState(null)

  const handleShowComponent = (id) => {
    setShowHoverElement(id)
  }

  const handleHideComponent = () => {
    setShowHoverElement(null)
  }

  const getProductsByCategories = (category) => {
    if (selected === "todos") {
      setProducts(productos)
    } else {
      setProducts(productos.filter(product => product.category === category))
    }
  }

  useEffect(() => {
    getProductsByCategories(selected)
  }, [selected])

  return (
    <div id="categories">
      <div className='w-screen border-t-4 border-t-[#731523]' />
      {/* elemento que tiene el fondo negro con el triangulo en el medio */}
      <div className='relative flex items-center justify-center bg-black w-screen h-20 mb-20 md:mb-40'>
        <h1 className='text-[#FFF] text-2xl font-semibold'>CATEGORIAS DE PRODUCTOS</h1>
        <div className='absolute top-[90%] w-[150px] md:w-[250px] bg-black h-10 md:h-16 triangulo mb-40'></div>
      </div>

      {/* botones toggle */}
      <div className='w-screen flex items-center flex-wrap px-5 md:pl-24 gap-5 md:gap-10 mb-10'>
        {categories.map(category => (
          <button
            onClick={() => setSelected(category.value)}
            className={selected === category.value ? 'py-5 px-3 text-sm font-semibold text-white hover:text-gray-400 transition-all duration-500 bg-[#731523] rounded-md' : "bg-transparent font-semibold hover:text-[#000] transition-all duration-500 py-5"}>
            {category.name}
          </button>
        ))}
      </div>

      {/* listado de categorias de productos */}
      <div className='flex items-center justify-center flex-wrap gap-5 mb-20'>
        {products?.map(product => (
          <div
            onMouseEnter={() => handleShowComponent(product.id)}
            onMouseLeave={handleHideComponent}
            key={product.id}
            className='relative w-60 h-60'
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover"
            }}
          >
            <div className='relative h-full w-full'>
              <div className={product.id === showHoverElement ? 'h-full absolute transition-opacity duration-500 left-0 right-0 top-0 bottom-0 m-auto' : "h-full opacity-0 left-0 right-0 top-0 bottom-0 m-auto transition-opacity duration-500"}>
                <div className='flex flex-col h-full items-center justify-center'>
                  <h1 className='z-10 text-white opacity-1 text-sm text-center'>{product.name}</h1>
                  <a className='z-10 bg-[#731523] text-sm px-3 py-2 font-semibold text-white opacity-1' href="https://wa.me/543704789947" target='_blank'>
                    <button>Consultanos</button>
                  </a>
                  <div className='absolute h-full w-full bg-black opacity-80'></div>
                </div>
              </div>
            </div>
            {/* <HoverElement id={product.id} product={product} hoverId={showHoverElement} /> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories