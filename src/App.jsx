import './App.css'
import About from './components/About';
import Carousel from './components/Carousel';
import Categories from './components/Categories';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Logo from './components/Logo';
import Map from './components/Map';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <main>
      <Logo />
      <Navbar />
      <Carousel />
      <About />
      <Categories />
      <Clients />
      <Services />
      <Map />
      <Contact />
      <div className='w-screen h-5 bg-[#731523] mt-10'></div>
    </main>
  )
}

export default App
