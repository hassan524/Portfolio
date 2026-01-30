'use client';

import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = React.useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = React.useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{

          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 100,
                duration: 5,   
                speed: 0.4,      
                factor: 80,      
              },
            },
          },
          particles: {
            number: {
              value: 10,       
              limit: 20,     
            },
            color: {
              value: "#000000",
            },
            links: {
              enable: true,
              opacity: 0.3,
              distance: 200,
            },
            move: {
              enable: true,
              speed: { min: 1, max: 8 },
            },
            opacity: {
              value: { min: 0.4, max: 0.8 },
            },
            size: {
              value: { min: 1, max: 3 },
            },
            shape: {
              type: 'circle',
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
