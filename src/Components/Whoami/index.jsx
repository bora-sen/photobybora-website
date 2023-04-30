import React from "react"

function Whoami() {
  return (
    <section className="w-full h-auto my-12 md:my-0 md:h-[100svh] flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full md:w-4/6 gap-4">
        <div className="aspect-[4/5] w-full md:w-1/2">
          <img className="w-full h-full object-cover object-center" src="/photobybora-website/pictures/whoami_photo.jpg" alt="" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h3 className="font-display text-4xl">Bahattin Bora Şen</h3>
          <h4 className="text-xl opacity-80 mb-4">Photographer / Istanbul</h4>
          <p className="leading-relaxed md:text-lg">
            Eager to explore the world through the lens of their camera. With a passion for capturing moments and telling stories, they work hard to improve
            their skills and bring their unique perspective to their craft.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Whoami
