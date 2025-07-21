

import React from 'react'
import { openingHours, socials } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Contact = () => {

  useGSAP(() => {

    const titleSplit = SplitText.create('#contact h2', {type: 'words'})

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#contact',
            start: 'top center',
        }
    });

    timeline.from(titleSplit.words, {opacity: 0, yPercent: 100, stagger: 0.02})
    .from('#contact h3, #contact p', {opacity: 0, yPercent: 100, stagger: 0.02})
    .to('#f-left-leaf', {duration: 1, ease: 'power1.inOut', y: '-50'})
    .to('#f-right-leaf', {duration: 1, ease: 'power1.inOut', y: '-50'})


  })  

  return (
    <div id='contact'>

      <img src="/images/footer-left-leaf.png" alt="left-leaf" id='f-left-leaf'/>  
      <img src="/images/footer-right-leaf.png" alt="right-leaf" id='f-right-leaf'/>  

      <div className='content'>
        <h2>Where to Find Us</h2>

        <div>
            <h3>visit our store</h3>
            <p>456, Raq Bivd, #365, Los Angeles, CA 90210</p>
        </div>

        <div>
            <h3>contact us</h3>
            <p>(666) 369-8237</p>
            <p>cheel@gmail.com</p>
        </div>

        <div>
            <h3>open every day</h3>
            {
                openingHours.map((openingTime) => (
                    <p>{openingTime.day}: {openingTime.time}</p>
                ))
            }
        </div>

        <div>
            <h3>Socials</h3>
            <div className='flex-center gap-5'>
                {
                    socials.map((social) => (
                        <a href={social.url} key={social.name}>
                            <img src={social.icon} alt={social.name} />
                        </a>
                    ))
                }
            </div>
        </div>

      </div>
    </div>
  )
}

export default Contact