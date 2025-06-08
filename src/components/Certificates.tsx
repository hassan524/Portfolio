import React from 'react';

const Certificates = () => {
  return (
    <section className="min-h-screen text-slate-900 flex flex-col gap-10 items-center justify-center py-10 px-6 md:px-12 sm:px-20">
      <div className="flex flex-col text-center gap-2">
        <h2 className="text-5xl font-bold cursor-pointer" data-aos="fade-down" data-aos-duration={1500}>Certificates</h2>
        <p className='text-base sm:text-lg text-gray-500 leading-7'>
          I know certificates aren't that necessary in this field, but just in case.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

        <div className="border flex flex-col gap-2 border-slate-300 p-6 rounded-xl cursor-pointer hover:scale-[1.05] transition ease duration-300">
          <h3 className="text-xl font-semibold text-slate-900">Back End Development & APIs</h3>
          {/* <p></p> */}
          <span className="text-slate-700 mt-2">freeCodeCamp · 2024</span>
        </div>

         <div className="border flex flex-col gap-2 border-slate-300 p-6 rounded-xl cursor-pointer hover:scale-[1.05] transition ease duration-300">
          <h3 className="text-xl font-semibold text-slate-900">Relational Databases</h3>
          {/* <p></p> */}
          <span className="text-slate-700 mt-2">freeCodeCamp · 2025</span>
        </div>

        <div className="border relative md:left-[50%] flex flex-col gap-2 border-slate-300 p-6 rounded-xl cursor-pointer hover:scale-[1.05] transition ease duration-300">
          <h3 className="text-xl font-semibold text-slate-900">Responsive Web Design</h3>
          {/* <p></p> */}
          <span className="text-slate-700 mt-2">freeCodeCamp · 2024</span>
        </div>

      </div>

    </section>
  );
};

export default Certificates;
