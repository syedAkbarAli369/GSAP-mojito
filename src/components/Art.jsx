import { useGSAP } from "@gsap/react"
import { featureLists, goodLists } from "../constants"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"


const Art = () => {

  const isMobile = useMediaQuery({maxWidth: 767});

  const start = isMobile ? 'top 30%': 'top top'

  useGSAP(() => {

    const maskedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start,
        end: 'bottom center',
        scrub: 1.5,
        pin: true,
      }
    });

    maskedTimeline.to('.will-fade', {
      opacity: 0,
      stagger: 0.2,
      ease: 'power1.inOut'
    })
    .to('.masked-img', {
      maskSize: '400%',
      duration: 1.8,
      scale: 1.3,
      maskPosition: 'center',
      ease: 'power1.inOut'
    })
    .to('#masked-content', {
      opacity: 1,
      ease: 'power1.inOut',
    })
  })

  return (
    <div id="art">
      <div className="mx-auto container h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content">

          <ul className="will-fade space-y-4">
            {goodLists.map((list, index) => (
              <li key={index} className="flex items-center gap-3">
                <img src="/images/check.png" alt="check" />
                <p>{list}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img src="/images/under-img.jpg" alt="under image" className="abs-center masked-img size-full object-contain"/>
          </div>  

          <ul className="will-fade space-y-4">
            {featureLists.map((list, index) => (
              <li key={index} className="flex items-center justify-start gap-3">
                <img src="/images/check.png" alt="check" />
                <p>{list}</p>
              </li>
            ))}
          </ul>

        </div>

        <div className="masked-container">
            <h2 className="will-fade">Sip-worthy Perfection</h2>
            <div id="masked-content" className="mt-3">
              <h3>Made with Craft, Poured with Passion</h3>
              <p>This isn't just a drink, It's a carefully crafted moment made just for you.</p>
          </div>  
        </div>    
      </div>
    </div>
  )
}

export default Art