import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useLayoutEffect } from "react"
gsap.registerPlugin(ScrollTrigger)

function Photos() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".photo-card-animate").map((element) => {
        gsap.from(element, {
          opacity: 0,
          xPercent: 45,
          rotationZ: 12,
          duration: 1,
          scrollTrigger: element,
          ease: "power4.Out",
        })
      })
    })

    return () => ctx.revert()
  }, [])
  const photos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <>
      <section id="Photos" className="w-full h-auto overflow-hidden grid gap-12 grid-cols-1 md:grid-cols-2 md:p-12">
        {photos.map((val) => {
          return (
            <div key={val} className="w-full h-auto p-12">
              <img className="object-cover object-center w-full h-full" src={`/photobybora-website/pictures/photo-${val}.jpg`} alt="" />
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Photos
