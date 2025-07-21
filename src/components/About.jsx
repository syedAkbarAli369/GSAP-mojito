

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"


const About = () => {

  useGSAP(() => {
    const splitTitle = new SplitText('#about h2', {type: 'words'});

    const screenTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: 'top center',
            end: 'bottom top',
        }
    })

    screenTimeline.from(splitTitle.words, {
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.02,
        yPercent: 100,
    })
    .from('.top-grid, .bottom-grid', {
        opacity: 0,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.02,

    }, "-=0.5")

  })  ;


  return (
    <div id="about">
      <div className="mb-16 md:mt-27 md:px-9 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>Where every detail matters-from muddle to garnish</h2>
          </div>
          <div className="sub-content">
            <p>Every cocktail we serve is a reflection of our obsession with detail - from the first muddle to the final garnish. That core is what turns a simple drink into something truly memorable.</p>
            <div>
                <p>
                    <span>4.5</span>/5
                </p>
                More than +12000 customers.
            </div>
          </div>  
        </div>      
      </div>

      {/* 3 photos */}
      <div className="top-grid">
        <div className="md:col-span-3">
            <div className="noisy"/>
            <img src="/images/abt1.png" alt="abt1" />
        </div>
        <div className="md:col-span-6">
            <div className="noisy"/>
            <img src="/images/abt2.png" alt="abt2" />
        </div>
        <div className="md:col-span-3">
            <div className="noisy"/>
            <img src="/images/abt5.png" alt="abt5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy"/>  
          <img src="/images/abt3.png" alt="abt3" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy"/>  
          <img src="/images/abt4.png" alt="abt4" />
        </div>
      </div>
    </div>
  )
}

export default About