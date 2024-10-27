
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Marquee from './components/Marquee'



function App() {

  return (
    <>
      <Navbar />
      <div className=' mx-auto max-w-7xl'>
          <Hero />
          <Portfolio />
          <Marquee />
          <Experience />
          <Contact />
          <Footer />
      </div>
    </>
  )
};

export default App
