import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AiSolutions from "./components/AiSolutions"

export default function App() {
  return (
    <div className="relative min-h-screen grid-bg overflow-hidden">
      {/* background glow */}
      <div className="glow top-[-200px] left-1/2 -translate-x-1/2 absolute"></div>

      {/* content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <AiSolutions />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
