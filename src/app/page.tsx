'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ParticlesBackground from '@/components/ParticlesBackground';
import About from '@/components/About';
import Certificates from '@/components/Certificates';
import Services from '@/components/Services';
// import ProjectsTimeline from '@/components/Projects';
import ProjectStack from '@/components/Projects';


const Page = () => {
  return (
    <>
      {/* <ParticlesBackground /> */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectStack />
      <Certificates />

    </>
  );
};

export default Page;
