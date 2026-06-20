import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Reflections from './components/Reflections'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Reflections />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
