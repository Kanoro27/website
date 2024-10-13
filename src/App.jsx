import './App.css'
import NAV from "./components/NAV/NAV.jsx"
import Hero from "./components/hero/Hero.jsx"
import Aboutme from "./components/aboutme/Aboutme.jsx"
import Skills from "./components/skills/Skills.jsx"
import Parallax from './components/parallax/Parallax.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Contact from "./components/contact/Contact.jsx"

function App() {
  return (  
    <>
      <div className='portfolio'>
        <section id='Homepage' className='homepage'>
          <NAV />
          <Hero />
        </section>
        <section id='About Me' className='aboutme'>
          <Aboutme />
        </section>
        <section className='skills'>
          <Skills />
        </section>
        <section id='Projects'><Parallax /></section>
        <Portfolio/>
        {/* <section id='More about me'>More about me</section> */}
        <section id='Contact'>
          <Contact />     
        </section>
      </div> 
    </>
  )
}

export default App
