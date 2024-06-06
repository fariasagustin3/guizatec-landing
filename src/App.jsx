import './App.css'
import About from './components/About';
import Carousel from './components/Carousel';
import Categories from './components/Categories';
import Logo from './components/Logo';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Logo />
      <Navbar />
      <Carousel />
      <About />
      <Categories />
    </main>
  )
}

export default App
