
'use client';
import { useRef, useState } from 'react'
import { allCocktails } from '../constants'

import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const MenuSection = () => {

  const contentRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0); 
  
  useGSAP(() => {
    gsap.fromTo('#title', {opacity: 0}, {opacity: 1, duration: 1});

    gsap.fromTo('.cocktail img', {xPercent: -100, opacity: 0}, {xPercent: 0, opacity: 1, ease: 'power1.inOut'})

    gsap.fromTo('.details h2', {opacity: 0, yPercent: 100}, {opacity: 1, duration: 1, yPercent: 0, ease: 'power1.inOut'})

    gsap.fromTo('.details p', {opacity: 0, yPercent: 100}, {opacity: 1, duration: 1, yPercent: 0, ease: 'power1.inOut'})

  }, [currentIndex]);

  const totalCocktailsLength = allCocktails.length;

  function goToSlide(index){

    const newIndex = (index + totalCocktailsLength) % totalCocktailsLength;

    setCurrentIndex(newIndex);
  }

  function getcocktailAt(indexOffset){
    return allCocktails[(currentIndex + indexOffset + totalCocktailsLength) % totalCocktailsLength]
  }

  const nextCocktail = getcocktailAt(1);
  const currentCocktail = getcocktailAt(0);
  const prevCocktail = getcocktailAt(-1);

  return (
    <section id='menu' aria-labelledby='menu-heading'>

      <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf' />  
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf' />  

      <nav className='cocktail-tabs' aria-label='Cocktail navigation'>

        {allCocktails.map((cocktail, index) => {

            const isActive = index === currentIndex;

            return (<button key={index}
            onClick={() => goToSlide(index)}    
            className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}
            >
                {cocktail.name}
            </button>)
        })
        }
      </nav>

      <div className='content' ref={contentRef}>
        <div className='arrows'>
            <button
            onClick={() => goToSlide(currentIndex - 1)}
            >
                <span>{prevCocktail.name}</span>
                <img src="/images/right-arrow.png" alt="right-arrow" />
            </button>

            <button
            onClick={() => goToSlide(currentIndex + 1)}
            >
                <span>{nextCocktail.name}</span>
                <img src="/images/left-arrow.png" alt="left-arrow" />
            </button>
        </div>

        <div className='cocktail'>
          <img src={currentCocktail.image} alt={currentCocktail.title} />
        </div>

        <div className='recipe'>
          <div className='info'>
            Recipes for:
            <h1 id='title'>{currentCocktail.name}</h1>
          </div>

          <div className='details'>
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
            <p></p>
          </div>  
        </div>

      </div>



    </section>
  )
}

export default MenuSection