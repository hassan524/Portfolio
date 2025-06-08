import React from 'react';

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center px-6 py-10 bg-gradient-to-b from-slate-50 to-transparent text-slate-900"
        >

            <div className="container mx-auto flex flex-col md:flex-row items-start gap-12">

                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/about2.png" alt="About me illustration" className="w-[300px] md:w-[400px] object-contain" data-aos="fade-down"  data-aos-duration={1500}/>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left flex md:items-start items-center flex-col gap-6">
                    <h2 className="text-5xl font-bold cursor-pointer" data-aos="fade-down"  data-aos-duration={1500}>About Me</h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-7" data-aos="fade-down"  data-aos-duration={1500}>
                        I'm Hassan, a full stack developer who’s passionate about building beautiful and efficient websites. I love working with technologies like React, Next.js, Tailwind CSS, Node.js, and more.
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 leading-7" data-aos="fade-down"  data-aos-duration={1500}>
                        With a focus on responsive design, smooth UI, and scalable backend, I ensure the best experience across all devices. Whether you're a startup or an individual, I can help turn your ideas into functional web solutions.
                    </p>
                    <button className="bg-slate-900 cursor-pointer border border-transparent hover:border-slate-900 transition duration-300 hover:text-slate-900 hover:bg-transparent text-white px-4 py-2 rounded-lg tracking-wide" data-aos="fade-down"  data-aos-duration={1500}>
                        Dowmload Resume
                    </button>
                </div>

            </div>

        </section>
    );
};

export default About;
