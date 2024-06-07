import React, { useEffect, useState } from 'react'
import './categories.css';

// son todas imágenes en blanco y negro
// categories: computadoras, perifericos, cartelera digital, audio
const data = [
  {
    id: 1,
    name: "CELULARES Y TELEFONÍA",
    image: "/images/blanco_negro/celulares_y_telefonia.jpg",
    category: "computadoras",
  },
  {
    id: 2,
    name: "COMPONENTES PC",
    image: "/images/blanco_negro/componentes_pc.png",
    category: "computadoras",
  },
  {
    id: 3,
    name: "GAMING",
    image: "/images/blanco_negro/gaming.png",
    category: "perifericos",
  },
  {
    id: 4,
    name: "IMPRESORAS",
    image: "/images/blanco_negro/impresoras.png",
    category: "perifericos",
  },
  {
    id: 5,
    name: "LICENCIAS DIGITALES",
    image: "/images/blanco_negro/licencias_digitales.png",
    category: "cartelera_digital",
  },
  {
    id: 6,
    name: "MANTENIMIENTO PC",
    image: "/images/blanco_negro/mantenimiento_pc.png",
    category: "computadoras",
  },
  {
    id: 7,
    name: "MONITORES",
    image: "/images/blanco_negro/monitores.png",
    category: "perifericos",
  },
  {
    id: 8,
    name: "NOTEBOOKS Y TABLETS",
    image: "/images/blanco_negro/notebooks_y_tablets.png",
    category: "computadoras",
  },
  {
    id: 9,
    name: "PC ESCRITORIO, MINI PC Y ALL IN ONE",
    image: "/images/blanco_negro/pc_escritorio_mini_pc_y_all_in_one.png",
    category: "computadoras",
  },
  {
    id: 10,
    name: "PERIFÉRICOS",
    image: "/images/blanco_negro/perifericos.png",
    category: "perifericos",
  },
  {
    id: 11,
    name: "SEGURIDAD ELECTRÓNICA",
    image: "/images/blanco_negro/seguridad_electronica.png",
    category: "perifericos",
  },
  {
    id: 12,
    name: "TONER ORIGINALES Y ALTERNATIVOS",
    image: "/images/blanco_negro/toner_originales_y_aternativos.png",
    category: "perifericos",
  },
]

const HoverElement = ({ id, hoverId, product }) => {
  return (
    <div className='relative h-full w-full'>
      <div className={id === hoverId ? 'h-full absolute transition-opacity duration-500 left-0 right-0 top-0 bottom-0 m-auto' : "h-full opacity-0 left-0 right-0 top-0 bottom-0 m-auto transition-opacity duration-500"}>
        <div className='flex flex-col h-full items-center justify-center'>
          <h1 className='z-10 text-white opacity-1 text-sm text-center'>{product.name}</h1>
          <button className='z-10 bg-[#00D2E2] px-3 py-2 font-semibold text-white opacity-1'>Consultanos</button>
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

  useEffect(() => {
    if (selected === "todos") {
      setProducts(data)
    } else if (selected === "computadoras") {
      setProducts(data.filter(product => product.category === "computadoras"))
    } else if (selected === "perifericos") {
      setProducts(data.filter(product => product.category === "perifericos"))
    } else if (selected === "computadoras") {
      setProducts(data.filter(product => product.category === "computadoras"))
    } else if (selected === "cartelera_digital") {
      setProducts(data.filter(product => product.category === "cartelera_digital"))
    } else if (selected === "audio") {
      setProducts(data.filter(product => product.category === "audio"))
    }
  }, [selected])

  return (
    <div>
      <div className='w-screen border-t-4 border-t-[#00D2E2]' />
      {/* elemento que tiene el fondo negro con el triangulo en el medio */}
      <div className='relative flex items-center justify-center bg-black w-screen h-20 mb-60'>
        <h1 className='text-[#00D2E2] text-2xl font-semibold'>CATEGORIAS DE PRODUCTOS</h1>
        <div className='absolute top-[90%] w-[150px] md:w-[250px] bg-black h-10 md:h-16 triangulo mb-40'></div>
      </div>

      {/* botones toggle */}
      <div className='w-screen flex items-center flex-wrap px-5 md:pl-24 gap-5 md:gap-10 mb-10'>
        <button
          onClick={() => setSelected("todos")}
          className={selected === "todos" ? 'py-5 px-3 text-sm font-semibold text-white hover:text-black transition-all duration-500 bg-[#00D2E2] rounded-md' : "bg-transparent font-semibold hover:text-[#00D2E2] transition-all duration-500 py-5"}>TODOS</button>
        <button
          onClick={() => setSelected("computadoras")}
          className={selected === "computadoras" ? 'py-5 px-3 text-sm font-semibold text-white hover:text-black transition-all duration-500 bg-[#00D2E2] rounded-md' : "bg-transparent font-semibold hover:text-[#00D2E2] transition-all duration-500 py-5"}>COMPUTADORAS</button>
        <button
          onClick={() => setSelected("perifericos")}
          className={selected === "perifericos" ? 'py-5 px-3 text-sm font-semibold text-white hover:text-black transition-all duration-500 bg-[#00D2E2] rounded-md' : "bg-transparent font-semibold hover:text-[#00D2E2] transition-all duration-500 py-5"}>PERIFÉRICOS</button>
        <button
          onClick={() => setSelected("cartelera_digital")}
          className={selected === "cartelera_digital" ? 'py-5 px-3 text-sm font-semibold text-white hover:text-black transition-all duration-500 bg-[#00D2E2] rounded-md' : "bg-transparent font-semibold hover:text-[#00D2E2] transition-all duration-500 py-5"}>CARTELERA DIGITAL</button>
        <button
          onClick={() => setSelected("audio")}
          className={selected === "audio" ? 'py-5 px-3 text-sm font-semibold text-white hover:text-black transition-all duration-500 bg-[#00D2E2] rounded-md' : "bg-transparent font-semibold hover:text-[#00D2E2] transition-all duration-500 py-5"}>AUDIO</button>
      </div>

      {/* listado de categorias de productos */}
      {/* <div className='flex items-center justify-center flex-wrap gap-5 mb-20'>
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

            <HoverElement id={product.id} product={product} hoverId={showHoverElement} />
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Categories