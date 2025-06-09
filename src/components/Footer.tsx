import React from 'react';

const Footer = () => {
  return (
   <footer className="w-full h-[30vh] py-6 bg-gradient-to-r from-gray-50 to-transparent text-slate-900 flex flex-col items-center justify-end gap-3 border-gray-200">


      {/* Social Icons */}
      <div className="flex gap-6 text-2xl">
        <a
          href="https://github.com/hassan524"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/hassan-rehan-075849283/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>

      {/* Copyright */}
      <p className="sm:text-md text-sm text-gray-600 text-center sm:tracking-wide">
        &copy; {new Date().getFullYear()} Hassan Rehan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
