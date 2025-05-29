
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Product from './components/Product'
import Workwithus from './components/Workwithus'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar/>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Product />} />
        <Route path="/workwithus" element={<Workwithus />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </>
  )
}

export default App
