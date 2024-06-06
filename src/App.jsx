import './App.css'
import About from './components/About';
import Carousel from './components/Carousel';
import Logo from './components/Logo';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Logo />
      <Navbar />
      <Carousel />
      <About />
    </main>
  )
}

export default App
