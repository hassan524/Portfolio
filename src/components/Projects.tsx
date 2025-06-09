import React from "react";

export default function ProjectStack() {
  const projects = [
    {
      img: "/p1.png",
      name: "PrimeNest",
      description:
        "A real estate platform where users can browse properties, upload their own listings with images, and directly chat with clients for inquiries.",
      tech: ["Typescript", "Nextjs", "MongoDB", "SocketIo", "Tailwindcss"],
      fade: 'fade-left',
      link: 'https://prime-nest-eim4.vercel.app/'
    },
    {
      img: "/p2.png",
      name: "SpotifyClone",
      description:
        "A full-featured Spotify desktop app clone with login via Spotify API. Users can view their playlists, recently played songs, and play music seamlessly.",
      tech: ["Typescript", "ReactJS", "ElectronJS", "SpotifyApi", "Tailwindcss"],
      fade: 'fade-right',
      link: 'https://github.com/hassan524/SpotifyClone'

    },
    {
      img: "/p3.png",
      name: "SuitsPhere",
      description:
        "An eCommerce web app with cart functionality and dynamic product filtering based on search and categories.",
      tech: ["Typescript", "ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Tailwindcss"],
      fade: 'fade-left',
      link: 'https://suit-sphere-xe18.vercel.app/'
    },
    {
      img: "/p4.png",
      name: "TaskManager",
      description:
        "A project and task management app where users can create projects, organize them into groups, manage tasks, and mark them as completed.",
      tech: ["Typescript", "ReactJS", "Tailwindcss", "Firebase", "Vite"],
      fade: 'fade-right',
      link: 'https://task-manager-13os.vercel.app/'
    },
  ];

  return (
    <div id='Project' className="min-h-screen flex justify-center py-10 px-6 md:px-12 text-slate-900">
      <div className="w-full max-w-6xl flex flex-col gap-12 justify-center items-center relative">
        <h2
          className="text-5xl font-bold text-center mb-10"
          data-aos="fade-down"
          data-aos-duration={1500}
        >
          My Recent Projects
        </h2>

        <div className="timeline overflow-hidden grid gap-4 relative">
          {projects.map((item, i) => (
            <div key={i} className="timeline-item relative">

              <div
                className={`timeline-card flex flex-col gap-5 relative w-[100%] sm:w-[47%] rounded transition duration-300 ease-in-out ${i % 2 === 0 ? "left-[53%]" : ""
                  }   sm:p-4`}
                data-aos={item.fade}
                data-aos-duration={1000}>
                  
                <div className="overflow-hidden rounded-md">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="object-cover border-2 border-slate-900 h-full w-full filter brightness-105 cursor-pointer hover:scale-[0.98] transition ease duration-300"
                    />
                  </a>
                </div>


                <div className="flex flex-col sm:gap-2 gap-3">
                  <h3 className="font-semibold text-2xl">{item.name}</h3>
                  <p className="text-base hidden sm:block text-gray-600 leading-7 mb-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, index) => (
                      <span
                        key={index}
                        className=" text-slate-800 px-2 py-1 rounded-full text-sm border border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="timeline-line absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-slate-500 to-slate-50"></div>
        </div>
      </div>
    </div>
  );
}
