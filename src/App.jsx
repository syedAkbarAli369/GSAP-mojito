
import gsap from 'gsap'
import {ScrollTrigger, SplitText} from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div className='flex-center h-[100rem]'>
      <h1 className="text-3xl text-white">GSAP</h1>
    </div>
  )
}

export default App
