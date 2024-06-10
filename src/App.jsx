import './App.css'
import About from './components/About';
import Carousel from './components/Carousel';
import Categories from './components/Categories';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Map from './components/Map';
import Navbar from './components/Navbar';
import Services from './components/Services';
import WhatsApp from './components/WhatsApp';

function App() {
  return (
    <main className='relative'>
      <Logo />
      <Navbar />
      <Carousel />
      <About />
      <Categories />
      <Clients />
      <Services />
      <Map />
      <Contact />
      <WhatsApp />
      <Footer />
    </main>
  )
}

export default App
