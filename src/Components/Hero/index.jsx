import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useLayoutEffect } from "react"
gsap.registerPlugin(ScrollTrigger)

function Hero() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      //TODO: Animate

      gsap.from("#White_circle", {
        opacity: 0,
        yPercent: 40,
        duration: 1,
        ease: "power4.inOut",
      })
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section_hero",
            start: "top top",
            end: "bottom+=10 top",
            pin: true,
            pinSpacer: false,
            scrub: 1.4,
          },
          defaults: {},
        })
        .to("#White_circle", {
          r: 1000,
        })
        .to("#bg_img", {
          opacity: 0,
        })
    })
    return () => ctx.revert()
  }, [])
  return (
    <section id="section_hero" className="w-full h-screen flex items-center justify-end overflow-hidden">
      <div className="absolute w-full h-full bg-black mix-blend-multiply">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="White Circle"
          viewbox="0 0 600 600"
          width="600"
          height="600"
          className="w-full h-full"
        >
          <circle id="White_circle" fill="#fff" cx="50%" cy="50%" r="240" />
        </svg>
      </div>
      <div className="absolute -z-10 w-full h-full aspect-video">
        <img id="bg_img" className="absolute w-full h-full object-cover object-center" src="/photobybora-website/pictures/hero_bg_1.jpg" alt="" />
        <img className="w-full h-full object-cover object-center" src="/photobybora-website/pictures/hero_bg_2.jpg" alt="" />
      </div>
    </section>
  )
}

export default Hero
