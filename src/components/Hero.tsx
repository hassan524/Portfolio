'use client'
import React from 'react'
import Typed from 'typed.js';


const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Hassan'],
      typeSpeed: 150,
      backSpeed: 40,
      backDelay: 1500,
      loop: false,
       showCursor: false, 
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main id='#' className="relative flex items-center justify-center text-slate-900 min-h-[100vh] px-7 sm:px-6 lg:px-8">

      <div
        className="z-10 max-w-4xl text-center flex items-center flex-col sm:gap-5 gap-4"
        data-aos="zoom-out"
        data-aos-duration={1500}
      >
        <h1 className="sm:text-6xl text-5xl font-semibold leading-14">
          Hey there, I'm <span ref={el} className=""></span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-medium">
          - Full Stack Web Developer -
        </h2>

        <p className="text-base sm:text-lg text-gray-600 leading-7 sm:max-w-2xl mx-auto">
          I build responsive, modern websites and full-stack web applications using technologies like React, Node.js, and more. I'm passionate about clean code, great UI/UX, and delivering smooth digital experiences.
        </p>

        <button className="bg-slate-900 cursour-pointer border border-transparent hover:border-slate-900 transition duration-300 hover:text-slate-900 hover:bg-transparent text-white px-5 py-3 rounded-lg tracking-wide">
          Contact Me
        </button>
      </div>
    </main>
  )
}

export default Hero
