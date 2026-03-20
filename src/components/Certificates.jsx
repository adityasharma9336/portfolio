import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Certificates = () => {
  const scrollContainerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  const certs = [
    {
      title: 'Developing Back-End Apps with Node.js and Express',
      issuer: 'IBM (Coursera)',
      date: 'Jan 29, 2026',
      description: 'Mastered core backend development concepts, created secure RESTful APIs, optimized routing, configured middleware, and robustly handled asynchronous operations.',
      image: '/cert-dev-backend.png',
      link: '#'
    },
    {
      title: 'Introduction to HTML, CSS, & JavaScript',
      issuer: 'IBM (Coursera)',
      date: 'Jan 29, 2026',
      description: 'Gained comprehensive foundational skills in building responsive, interactive, and beautifully accessible web interfaces from scratch.',
      image: '/cert-intro-html.png',
      link: '#'
    },
    {
      title: 'Data Structures and Algorithm',
      issuer: 'Lovely Professional University',
      date: 'Dec 05, 2024',
      description: 'Intensive coursework covering advanced algorithmic logic, data organization, code optimization, and efficient problem-solving strategies.',
      image: '/cert-dsa.png',
      link: '#'
    },
    {
      title: 'Mastering C++: From OOP to Dynamic Programming',
      issuer: 'Lovely Professional University',
      date: 'Jul 16, 2025',
      description: 'Achieved Grade A. Explored deep memory management, object-oriented principles, and advanced dynamic programming patterns in C++.',
      image: '/cert-cpp.png',
      link: '#'
    },
    {
      title: 'Human Computer Interaction',
      issuer: 'NPTEL (IIT Delhi)',
      date: 'Apr 2025',
      description: 'Analyzed cognitive psychology within UX frameworks to design highly usable, accessible, and human-centric software interfaces.',
      image: '/cert-hci.png',
      link: '#'
    },
    {
      title: 'Java Programming',
      issuer: 'Lovely Professional University',
      date: 'May 05, 2025',
      description: 'Comprehensive study of Java Programming, covering fundamental syntax, OOP concepts, and robust application development.',
      image: '/cert-java.png',
      link: '#'
    },
    {
      title: 'Object Oriented Programming',
      issuer: 'Lovely Professional University',
      date: 'Dec 05, 2024',
      description: 'Deep dive into Object Oriented Programming methodologies and their practical implementations in software creation.',
      image: '/cert-oop.png',
      link: '#'
    },
    {
      title: 'Computer Programming',
      issuer: 'Lovely Professional University',
      date: 'May 16, 2024',
      description: 'Foundational programming concepts covering algorithms, logic building, and basic computing principles.',
      image: '/cert-cp.png',
      link: '#'
    },
    {
      title: 'Computational Theory: Language Principle & Finite Automata Theory',
      issuer: 'Infosys Springboard',
      date: 'Aug 15, 2025',
      description: 'Explored computational models, finite automata, and language principles essential for parsing and compiler design.',
      image: '/cert-computational-theory.png',
      link: '#'
    },
    {
      title: 'PHP with Laravel for beginners',
      issuer: 'Udemy',
      date: 'Jan 5, 2026',
      description: 'Mastered PHP using Laravel framework, building robust MVC applications with modern web architecture.',
      image: '/cert-php-laravel.png',
      link: '#'
    }
  ];

  return (
    <section id="certificates" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-6 text-[var(--color-text-bright)] w-full md:w-auto">
            
            Certifications
            <span className="h-[1px] flex-grow md:w-32 bg-[var(--color-border-subtle)] block"></span>
          </h2>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scrollContainerRef.current?.scrollBy({ left: -420, behavior: 'smooth' })}
              className="p-3 rounded-full border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-primary)] text-[var(--color-text-main)] hover:text-[var(--color-brand-primary)] hover:shadow-[0_0_15px_var(--color-brand-primary)] transition-all bg-[var(--color-bg-base)] z-10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollContainerRef.current?.scrollBy({ left: 420, behavior: 'smooth' })}
              className="p-3 rounded-full border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-primary)] text-[var(--color-text-main)] hover:text-[var(--color-brand-primary)] hover:shadow-[0_0_15px_var(--color-brand-primary)] transition-all bg-[var(--color-bg-base)] z-10"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10, 
                rotateY: 2,
                rotateZ: 1,
                boxShadow: "0 20px 40px rgba(59,130,246,0.3)",
                transition: { type: 'spring', stiffness: 300, damping: 15 } 
              }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: 'spring', stiffness: 100, damping: 12, delay: index * 0.1 }}
              className="cosmic-card flex flex-col group overflow-hidden border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-primary)] transition-all duration-300 rounded-xl min-w-[85vw] md:min-w-[400px] max-w-[400px] snap-center shrink-0 cursor-pointer"
              style={{ transformOrigin: 'bottom center', perspective: '1000px' }}
              onClick={() => setSelectedImage(cert.image)}
            >
              {/* Image Container */}
              <div className="w-full h-48 bg-[rgba(255,255,255,0.9)] overflow-hidden relative border-b border-[var(--color-border-subtle)] flex items-center justify-center p-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-gray-200">
                <img 
                   src={cert.image} 
                   alt={cert.title} 
                   className="max-w-full max-h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500 rounded-sm"
                   onError={(e) => {
                     e.target.onerror = null;
                     e.target.parentNode.innerHTML = `
                       <div class="flex flex-col items-center justify-center h-full w-full text-gray-500 text-center text-xs p-4 bg-[var(--color-bg-base)]">
                         <span class="mb-2 opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></span>
                         Please place image <b>${cert.image.replace('/', '')}</b> in public/ folder.
                       </div>
                     `;
                   }}
                />
              </div>

              {/* Text Container */}
              <div className="p-6 flex flex-col flex-grow bg-[rgba(15,23,42,0.4)] backdrop-blur-sm">
                <h3 className="text-lg font-bold text-[var(--color-text-bright)] leading-tight mb-3 group-hover:text-[var(--color-brand-primary)] transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[rgba(255,255,255,0.05)] text-xs font-mono text-[var(--color-text-bright)] rounded-full border border-[var(--color-brand-primary)] shadow-[0_0_8px_rgba(59,130,246,0.3)]">
                    {cert.issuer}
                  </span>
                </div>

                <p className="text-sm text-[var(--color-text-main)] mb-6 flex-grow leading-relaxed">
                  {cert.description}
                </p>

                <div className="mt-auto pt-4 border-t border-[rgba(255,255,255,0.05)] flex flex-wrap gap-4 items-center justify-between text-xs font-mono text-[var(--color-text-dim)]">
                   <div className="flex items-center gap-1.5 hover:text-[var(--color-text-bright)] transition-colors">
                     <Calendar className="w-3.5 h-3.5" />
                     {cert.date}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-full flex items-center justify-center rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-[var(--color-border-subtle)] bg-white/5"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-[var(--color-brand-primary)] transition-colors backdrop-blur-sm shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              <motion.img 
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                src={selectedImage} 
                alt="Certificate full view" 
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-pointer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
