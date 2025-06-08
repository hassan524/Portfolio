'use client';
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // If not imported globally

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className='nav h-[14vh] sm:px-10 px-5 flex items-center top-0 left-0 justify-between fixed text-slate-900 w-full shadow-xs z-50 bg-white'>
      
      {/* Logo */}
      <div id='logo' className="w-[10rem]">
        <img src="/logo.png" alt="logo" />
      </div>

      {/* Desktop Menu */}
      <ul className='md:flex gap-8 text-xl hidden'>
        <li><a className='anchors' href="#">Home</a></li>
        <li><a className='anchors' href="#about">About</a></li>
        <li><a className='anchors' href="">Services</a></li>
        <li><a className='anchors' href="">Projects</a></li>
        <li><a className='anchors' href="">Contact</a></li>
      </ul>

      {/* Mobile Toggle Button */}
      <div className="md:hidden z-50">
        <button onClick={toggleMenu} className="text-2xl">
          <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full shadow-sm bg-white border-t border-slate-100 text-start overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <ul className='flex flex-col gap-4 text-lg px-5 py-5'>
          <li className='flex items-center'><a href="#" onClick={closeMenu} className='anchors'>Home</a></li>
          <li className='flex items-center'><a href="#" onClick={closeMenu} className='anchors'>About</a></li>
          <li className='flex items-center'><a href="#" onClick={closeMenu} className='anchors'>Projects</a></li>
          <li className='flex items-center'><a href="#" onClick={closeMenu} className='anchors'>Services</a></li>
          <li className='flex items-center'><a href="#" onClick={closeMenu} className='anchors'>Contact</a></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
