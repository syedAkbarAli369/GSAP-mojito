import { useGSAP } from "@gsap/react";
import { useRef } from "react"
import { useMediaQuery } from "react-responsive";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {

    const videoRef = useRef();

    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(() => {

        const headingSplit = new SplitText('.title', {type: 'chars, words'});

        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});

        headingSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(headingSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.09,
        });

        gsap.from(paragraphSplit.lines, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.09,
            delay: 1,
            opacity: 0,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
        .to('.right-leaf', {y: 200}, 0)
        .to('.left-leaf', {y: -200}, 0);

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? 'bottom top' : 'bottom top';

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            })
        };


    }, [])


    return (
        <>
            <section id="hero" >

                {/* Heading */}
                <h1 className="title">Cocktail</h1>

                {/* Two leafs */}
                <img src="/images/hero-left-leaf.png" alt="hero-left-leaf" className="left-leaf" />
                <img src="/images/hero-right-leaf.png" alt="hero-right-leaf" className="right-leaf" />

                <div className="body">
                    <div className="content">

                        {/* Only for large device */}
                        <div className="hidden lg:block">
                            <p>Cool. Crisp. Classic</p>
                            <p>Sip the Spirit <br /> of Summer</p>
                        </div>

                        <div className="view-cocktails" >
                            <p className="subtitle">Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes - designed to delight your senses</p>
                            <a href="#view-cocktails">
                                View cocktails
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video src="/videos/input.mp4" 
                muted
                playsInline
                preload="auto"
                ref={videoRef}
                />
            </div>
        </>

    )
}

export default Hero