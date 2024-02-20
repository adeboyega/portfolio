// import DownloadButton from './DownloadButton'
import './App.css'
import { FiAlignJustify, FiX  } from "react-icons/fi";
import image from './assets/me.png'
import Typewriter from "typewriter-effect"
import Nav from './components/Nav';
import React, {useState} from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
function App() {
  const [active, setactive] = useState(false)
  const handleclick =()=>{
    setactive(!active)
  }
  return (
    <div className='bg-[#0B3F30] text-gray-100'>
    <Nav />
    <Home />
    <About />
    <Skills />
    <Work />
    </div>
  )
}

export default App
