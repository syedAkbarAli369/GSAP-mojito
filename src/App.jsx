
import gsap from 'gsap'
import {ScrollTrigger, SplitText} from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'
import MenuSection from './components/MenuSection'
import Contact from './components/Contact'


const App = () => {
  return (
    <main className='overflow-hidden'>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <MenuSection />
      <Contact />
    </main>
  )
}

export default App
