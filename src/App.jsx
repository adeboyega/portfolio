import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Work from './pages/Work'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="bg-dark-bg text-text-primary min-h-screen">
      <Nav />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App
