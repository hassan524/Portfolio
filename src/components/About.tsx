import React from 'react';

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center px-6 py-10 text-slate-900"
        >

            <div className="container mx-auto flex flex-col md:flex-row items-start gap-12">

                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/about2.png" alt="About me illustration" className="w-[300px] md:w-[400px] object-contain" data-aos="fade-down" data-aos-duration={1000} />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left flex md:items-start items-center flex-col gap-6">
                    <h2 className="text-5xl font-bold cursor-pointer" data-aos="fade-down" data-aos-duration={1000}>About Me</h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-7" data-aos="fade-down" data-aos-duration={1000}>
                        Hey! I'm Hassan Rehan, a full stack application developer. I've been into development for the past 3 years and still learning new things every day — because tech and computers genuinely excite me.
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 leading-7" data-aos="fade-down" data-aos-duration={1000}>
                        So, with great knowledge in development, I can help you create your website whether it’s for yourself, your business, or a portfolio. I’ll give my 100% to deliver smooth performance, beautiful UI/UX design, and maintain REST APIs using technologies like ReactJS, NextJS, NodeJS, and TypeScript.
                    </p>

                    <a href="/dev.jpg" download>
                        <button
                            className="bg-slate-900 cursor-pointer border border-transparent hover:border-slate-900 transition duration-300 hover:text-slate-900 hover:bg-transparent text-white px-4 py-2 rounded-lg tracking-wide"
                            data-aos="fade-down"
                            data-aos-duration={1000}
                        >
                            Download Resume
                        </button>
                    </a>

                </div>

            </div>

        </section>
    );
};

export default About;
