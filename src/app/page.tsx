'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ParticlesBackground from '@/components/ParticlesBackground';
import About from '@/components/About';
import Certificates from '@/components/Certificates';
import Services from '@/components/Services';
import ProjectStack from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';


const Page = () => {
  return (

    <>

    <Toaster position="bottom-center" reverseOrder={false} />

      <ParticlesBackground />

      <Navbar />

      <Hero />

      <About />

      <Services />

      <ProjectStack />
      
      <Certificates />

      <Contact />

      <Footer />

    </>

  );
};

export default Page;
