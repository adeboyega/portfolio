import DownloadButton from './DownloadButton'
import './App.css'
import image from './assets/me.png'
import Typewriter from "typewriter-effect"
function App() {
  return (
    <div className='container'>
      <nav>
        <h3><span>Abayomi</span> Aremo</h3>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Portfolio</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
      <section>
        <div>
          <h3>Hello, i am</h3>
          <h2>Abayomi Aremo</h2>
          <h3 className='type'>And i am a
            <Typewriter
            className='Typewriter'
            options={{
              strings: ["Web Developer","Front-end-Engineer"],
              autoStart: true,
              loop: true,
            }}/></h3>
          <p>Hi i am Abayomi Aremo, a passionate web-developer
            specializing in translating design consepts into
            seamless and interactive web experiences using
            HTML, CSS, and JavaScript. React tailwind etc...
          </p>
          <DownloadButton />
        </div>
        <img src={image} alt="me" />
        
      </section>
    </div>
  )
}

export default App
