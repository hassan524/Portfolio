import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col gap-12 justify-center items-center py-10 px-4 md:px-12 box-border overflow-x-hidden">

      {/* Heading */}
      <h2
        className="text-5xl sm:text-4xl md:text-5xl font-bold text-center"
        data-aos="fade-down"
        data-aos-duration={1500}
      >
        How Can I Help You
      </h2>

      {/* Service Item 1 */}
      <div
        className="w-full max-w-5xl bg-gradient-to-r from-[#EFECFD] to-transparent rounded-3xl p-8 flex flex-col lg:flex-row items-center gap-8"
        data-aos="fade-right"
        data-aos-duration={1500}
      >

        {/* Image */}
        <div className="w-full lg:w-1/2 sm:flex hidden justify-center">
          <img
            src="/dev.jpg"
            className="sm:w-60 sm:h-60 w-48 h-48 md:w-72 md:h-72 rounded-full object-contain grayscale"
            alt="developer"
          />
        </div>

        <div className="w-full lg:w-1/2 flex sm:hidden justify-center">
          <img
            src="/dev.jpg"
            alt="developer"
            className="max-w-full h-auto rounded-full object-contain grayscale sm:w-56 w-40 md:w-64"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:items-start items-center text-center lg:text-left gap-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Web Development Services
          </h3>
          <p className="text-base sm:text-lg text-gray-600 leading-7">
            Need a clean, fast, and mobile-first website? I design and develop custom solutions to bring your ideas to life — whether it's a personal portfolio or a business site.
          </p>
          <button className="mt-2 bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-700 transition">
            Hire Me
          </button>
        </div>

      </div>

      {/* Service Item 2 */}
      <div
        className="w-full max-w-5xl bg-gradient-to-r from-[#EFECFD] to-transparent rounded-3xl p-8 flex flex-col lg:flex-row-reverse items-center gap-8"
        data-aos="fade-left"
        data-aos-duration={1500}
      >

         {/* Image */}
        <div className="w-full lg:w-1/2 sm:flex hidden justify-center">
          <img
            src="/dev.jpg"
            className="sm:w-60 sm:h-60 w-48 h-48 md:w-72 md:h-72 rounded-full object-contain grayscale"
            alt="developer"
          />
        </div>

        <div className="w-full lg:w-1/2 flex sm:hidden justify-center">
          <img
            src="/dev.jpg"
            alt="developer"
            className="max-w-full h-auto rounded-full object-contain grayscale sm:w-56 w-40 md:w-64"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:items-start items-center text-center lg:text-left gap-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            UI/UX Design
          </h3>
          <p className="text-base sm:text-lg text-gray-600 leading-7">
            I create modern, user-friendly interfaces that ensure a seamless experience across all devices and screen sizes.
          </p>
          <button className="mt-2 bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-700 transition">
            Hire Me
          </button>
        </div>

      </div>

      {/* Service Item 3 */}
      <div
        className="w-full max-w-5xl bg-gradient-to-r from-[#EFECFD] to-transparent rounded-3xl p-8 flex flex-col lg:flex-row items-center gap-8"
        data-aos="zoom-in"
        data-aos-duration={1500}
      >

       {/* Image */}
        <div className="w-full lg:w-1/2 sm:flex hidden justify-center">
          <img
            src="/dev.jpg"
            className="sm:w-60 sm:h-60 w-48 h-48 md:w-72 md:h-72 rounded-full object-contain grayscale"
            alt="developer"
          />
        </div>

        <div className="w-full lg:w-1/2 flex sm:hidden justify-center">
          <img
            src="/dev.jpg"
            alt="developer"
            className="max-w-full h-auto rounded-full object-contain grayscale sm:w-56 w-40 md:w-64"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:items-start items-center text-center lg:text-left gap-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Website Maintenance & Optimization
          </h3>
          <p className="text-base sm:text-lg text-gray-600 leading-7">
            I help you maintain your website, improve speed, fix bugs, and ensure everything runs smoothly for your visitors.
          </p>
          <button className="mt-2 bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-700 transition">
            Hire Me
          </button>
        </div>

      </div>

    </div>
  );
};

export default Services;
