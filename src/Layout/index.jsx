import React from "react"

function Layout({ children }) {
  return (
    <main id="main_layout" className="w-full h-auto text-white">
      <div className="w-full h-full py-2 fixed top-0 z-50 mix-blend-difference">
        <ul className="absolute top-2 flex w-full justify-around text-xs md:text-2xl">
          <li className="">
            <span className="text-7xl md:text-9xl font-bold">
              <a href="/#">B</a>
            </span>
          </li>
          <li>
            <a href="#Photos">PHOTOGRAPHY</a>
          </li>
          <li>
            <a href="#">STUDIO</a>
          </li>
          <li className="hidden md:block font-bold">
            <span className="text-6xl">B</span>
          </li>
          <li>
            <a href="#">STREETS</a>
          </li>
          <li>
            <a href="#">ISTANBUL</a>
          </li>
          <li className="hidden md:block font-bold">
            <span className="text-7xl">Ş</span>
          </li>
        </ul>
        <ul className="absolute bottom-4 flex w-full justify-around font-display text-2xl md:text-[4rem] tracking-tighter">
          <li>
            <a href="mailto:bahattinborasen@gmail.com">GET IN TOUCH</a>
          </li>
          <li>
            <a href="https://instagram.com/photobybora">INSTAGRAM</a>
          </li>
        </ul>
        <div className="text-xs bottom-0 text-center absolute z-20 w-full">
          Copyright &copy; 2023 | Made by <a href="https://bborasen.com">BORA</a>
        </div>
      </div>
      <div className="w-full h-auto">{children}</div>
    </main>
  )
}

export default Layout
