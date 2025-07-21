
import gsap from "gsap"
import { navLinks } from "../constants"

const Navbar = () => {

  const navTweens = gsap.timeline({
    scrollTrigger: {
      trigger: 'nav',
      start: 'bottom top',
      // markers: true
    }
  })

  navTweens.fromTo('nav', {backgroundColor: 'transparent'}, {
    backgroundColor: '#00000050',
    backdropFilter: 'blur(9px)',
    duration: 1,
    ease: 'power1.inOut'
  })

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="logo" />
          <h1>Cheel Pour</h1>
        </a>
        <ul>
          {navLinks.map((link) => (
            <a href={`${link.title}`}>
              <li key={link.id}>{link.title}</li>
            </a>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar