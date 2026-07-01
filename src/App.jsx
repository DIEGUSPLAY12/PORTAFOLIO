import Aurora from './components/Aurora'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Reflections from './components/Reflections'
import Contact from './components/Contact'
import Footer from './components/Footer'

//hola

export default function App() {
  return (
    <>
      <Aurora />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Reflections />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
