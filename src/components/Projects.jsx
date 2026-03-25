import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const projects = [
    {
      title: 'Coder’s Playground',
      category: 'Full Stack Development',
      badge: 'Featured Project',
      description: 'An interactive coding platform where users can write, test, and experiment with code in real-time. Built to enhance learning and practice, providing a simple and user-friendly environment for developers.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      image: '/coders.png',
      images: ['/coders.png', '/coders_playground_dark.png'],
      github: 'https://github.com/adityasharma9336/codersplayground',
      live: '#',
    },
    {
      title: 'Jobify (Job Portal System)',
      category: 'Enterprise Solutions',
      description: 'A full-stack job portal web application that allows users to search and apply for jobs while enabling recruiters to post and manage job listings. Built with modern MERN stack technologies, focusing on secure authentication, efficient data handling, and a smooth user experience.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      image: '/jobifiy1.png',
      images: [
        '/jobifiy1.png',
        '/jobifiy2.png',
        '/jobifiy3.png',
        '/jobifiy4.png',
      ],
      github: 'https://github.com/adityasharma9336/jobify',
      live: '#',
    },
    {
      title: 'Society Management System',
      category: 'Full Stack Solution',
      description: 'A centralized platform to manage residential society operations, including member details, maintenance tracking, and communication. Designed to simplify daily management tasks and improve coordination within the community.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      image: '/society image /society.png',
      images: [
        '/society image /Screenshot 2026-03-20 at 1.13.41 AM.png',
        '/society image /Screenshot 2026-03-20 at 1.13.52 AM.png',
        '/society image /Screenshot 2026-03-20 at 1.14.48 AM.png',
        '/society image /Screenshot 2026-03-20 at 1.15.30 AM.png',
      ],
      github: 'https://github.com/adityasharma9336/society-hub',
      live: '#',
    },
    {
      title: 'Hospital Management System',
      category: 'Administrative Systems',
      description: 'A web-based system designed to manage hospital operations such as patient records, appointments, and doctor management. The project improves efficiency by organizing data and streamlining workflows for better healthcare service management.',
      tech: ['PHP', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
      image: '/Hospital/hospital.png',
      images: [
        '/Hospital/Screenshot 2026-03-20 at 1.40.58 AM.png',
        '/Hospital/Screenshot 2026-03-20 at 1.41.05 AM.png',
        '/Hospital/Screenshot 2026-03-20 at 1.41.13 AM.png',
        '/Hospital/Screenshot 2026-03-20 at 1.41.23 AM.png',
      ],
      github: 'https://github.com/adityasharma9336/hospital-ms',
      live: '#',
    },
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0.5,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0.5,
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length);
  };

  const nextGalleryImage = (e) => {
    e.stopPropagation();
    if (selectedProject?.images) {
      setGalleryIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevGalleryImage = (e) => {
    e.stopPropagation();
    if (selectedProject?.images) {
      setGalleryIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="projects" className="w-full relative min-h-[85vh] py-20 flex flex-col justify-center overflow-hidden bg-[#020617]">
      
      <div className="flex flex-col items-center justify-center text-center mb-8 relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-[#a78bfa]">Projects</span>
        </h2>
        <p className="text-slate-300 max-w-2xl font-light">Interactive showcases of my most prominent engineering works.</p>
      </div>

      {/* CINEMATIC SLIDER CONTAINER */}
      <div className="relative w-[95%] xl:w-[90%] max-w-[1400px] h-[55vh] md:h-[65vh] mx-auto flex items-center justify-center overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
        
        {/* Navigation Arrows */}
        <button 
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-black/40 backdrop-blur-md hover:bg-[var(--color-brand-primary)] border border-white/20 hover:border-transparent text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:-translate-x-1"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 -ml-1" />
        </button>

        <button 
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-black/40 backdrop-blur-md hover:bg-[var(--color-brand-primary)] border border-white/20 hover:border-transparent text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:translate-x-1"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 -mr-1" />
        </button>

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.6, ease: [0.25, 1, 0.5, 1] },
              opacity: { duration: 0.6 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 w-full h-full flex flex-col md:flex-row items-end md:items-center justify-start p-0 m-0"
          >
            {/* FULL BACKGROUND IMAGE */}
            <div 
              className="absolute inset-0 w-full h-full bg-black cursor-pointer group"
              onClick={() => {
                if (projects[currentIndex].images) {
                  setSelectedProject(projects[currentIndex]);
                  setGalleryIndex(0);
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 md:via-[#020617]/50 max-md:pb-60 to-transparent z-10 pointer-events-none transition-opacity duration-500"></div>
              
              {/* Optional Right-to-Left Gradient for desktop text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent md:w-[60%] z-10 pointer-events-none hidden md:block"></div>

              <img 
                src={projects[currentIndex].image} 
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 mix-blend-lighten filter brightness-90 md:brightness-110"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/1920x1080/1e293b/6d28d9?text=Preview'; }}
              />
              
              {/* Gallery Prompt Overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center md:items-end justify-center pb-[20%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--color-brand-primary)]/90 backdrop-blur-md text-white shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:bg-[#a78bfa] transition-colors hover:scale-105">
                  <Maximize2 className="w-5 h-5" />
                  <span className="font-semibold tracking-wide">View Full Gallery</span>
                </div>
              </div>
            </div>

            {/* FOREGROUND CONTENT SECTION */}
            <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-16 xl:px-24 pb-16 md:pb-0 pointer-events-none">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-full md:w-[65%] lg:w-[50%] flex flex-col pointer-events-auto"
              >
                <span className="text-[var(--color-brand-primary)] font-mono tracking-widest uppercase text-sm md:text-base mb-4 font-bold drop-shadow-md bg-black/30 w-max px-3 py-1 rounded-md border border-[var(--color-brand-primary)]/30 backdrop-blur-sm">
                  {projects[currentIndex].category}
                </span>
                
                <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                  {projects[currentIndex].title}
                </h3>
                
                <p className="text-slate-200 leading-relaxed text-base md:text-lg mb-8 drop-shadow-lg max-w-xl font-light">
                  {projects[currentIndex].description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {projects[currentIndex].tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-xs md:text-sm font-mono tracking-wider shadow-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  {projects[currentIndex].github && (
                    <a 
                      href={projects[currentIndex].github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-3 text-white bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] font-semibold hover:-translate-y-1"
                    >
                      <Github className="w-5 h-5" /> <span>Source Code</span>
                    </a>
                  )}
                  {projects[currentIndex].live && (
                    <a 
                      href={projects[currentIndex].live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-3 text-white bg-[var(--color-brand-primary)]/80 hover:bg-[var(--color-brand-primary)] border border-white/10 backdrop-blur-md px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] font-semibold hover:-translate-y-1"
                    >
                      <ExternalLink className="w-5 h-5" /> <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots Pagination */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex 
                ? 'w-10 h-2.5 bg-[var(--color-brand-primary)] shadow-[0_0_15px_rgba(139,92,246,0.8)]' 
                : 'w-2.5 h-2.5 bg-slate-400 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Gallery Modal Slider */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-[#020617]/95 backdrop-blur-2xl p-4 md:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors z-50 p-3 bg-white/5 rounded-full backdrop-blur-md border border-white/10 shadow-xl"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <div className="relative w-full max-w-7xl h-full flex flex-col justify-center gap-8">
              <div className="relative flex-grow flex items-center justify-center overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={galleryIndex}
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    src={selectedProject.images[galleryIndex]}
                    alt={`${selectedProject.title} screenshot ${galleryIndex + 1}`}
                    className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-slate-700/50 bg-black/50"
                    onClick={(e) => e.stopPropagation()}
                  />
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-[#020617]/70 hover:bg-[var(--color-brand-primary)] text-white p-4 rounded-full backdrop-blur-md transition-all border border-white/10 hidden md:flex hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                      onClick={prevGalleryImage}
                    >
                      <ChevronLeft className="w-8 h-8 -ml-1" />
                    </button>
                    <button
                      className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-[#020617]/70 hover:bg-[var(--color-brand-primary)] text-white p-4 rounded-full backdrop-blur-md transition-all border border-white/10 hidden md:flex hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                      onClick={nextGalleryImage}
                    >
                      <ChevronRight className="w-8 h-8 -mr-1" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex flex-col items-center gap-5 text-center">
                <h3 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-3 bg-black/30 px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
                  {selectedProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setGalleryIndex(idx);
                      }}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === galleryIndex ? 'bg-[var(--color-brand-primary)] w-10 shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'bg-slate-500 w-2.5 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
