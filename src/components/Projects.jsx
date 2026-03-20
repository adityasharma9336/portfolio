import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      image: '/Jobofiy .png',
      images: [
        '/jobifiy image /Screenshot 2026-03-20 at 12.51.52 AM.png',
        '/jobifiy image /Screenshot 2026-03-20 at 12.52.11 AM.png',
        '/jobifiy image /Screenshot 2026-03-20 at 12.53.07 AM.png',
        '/jobifiy image /Screenshot 2026-03-20 at 12.53.38 AM.png',
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
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
    <section id="projects" className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-6 text-[var(--color-text-bright)]">
          Featured Projects
          <span className="h-[1px] flex-grow bg-[var(--color-border-subtle)] block"></span>
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center relative group`}
            >
              <div 
                className="w-full md:w-[55%] relative z-10 cursor-pointer"
                onClick={() => {
                  if (project.images) {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }
                }}
              >
                <div className="relative rounded-xl overflow-hidden border border-[var(--color-border-subtle)] group-hover:border-[var(--color-brand-primary)] transition-colors duration-500 aspect-video w-full">
                  <div className="absolute inset-0 bg-[var(--color-brand-primary)] mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400/1e293b/6d28d9?text=Project+Preview'; }}
                  />
                  {project.images && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="bg-[var(--color-brand-primary)] text-white p-3 rounded-full shadow-lg">
                        <Maximize2 className="w-6 h-6" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className={`w-full md:w-[50%] relative z-20 ${index % 2 === 0 ? 'md:text-right md:-ml-12' : 'md:text-left md:-mr-12'}`}>
                <p className="font-mono text-[var(--color-brand-primary)] text-sm mb-2">{project.category}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-bright)] mb-6">
                  {project.title}
                </h3>

                <div className="cosmic-card p-6 md:p-8 mb-6 text-[var(--color-text-main)] shadow-xl relative top-0 hover:-translate-y-2 transition-transform duration-300">
                  <p className="text-justify leading-relaxed tracking-tighter" style={{ wordSpacing: '-1.5px', hyphens: 'auto' }}>{project.description}</p>
                </div>

                <ul className={`flex flex-wrap gap-4 font-mono text-sm text-[var(--color-text-dim)] mb-8 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {project.tech.map((tech) => (
                    <li key={tech} className="bg-white/5 px-2 py-1 rounded">{tech}</li>
                  ))}
                </ul>

                <div className={`flex gap-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--color-text-main)] hover:text-[var(--color-brand-primary)] transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-[var(--color-text-main)] hover:text-[var(--color-brand-primary)] transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gallery Modal Slider */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <div className="relative w-full max-w-6xl h-full flex flex-col justify-center gap-6">
              <div className="relative flex-grow flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
                    onClick={(e) => e.stopPropagation()}
                  />
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md transition-all hidden md:flex"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md transition-all hidden md:flex"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex flex-col items-center gap-4 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <div className="flex gap-2">
                  {selectedProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        idx === currentImageIndex ? 'bg-[var(--color-brand-primary)] w-8' : 'bg-white/30'
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
