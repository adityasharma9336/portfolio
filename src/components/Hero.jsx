import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section-container relative flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-[-1] flex justify-center items-center opacity-30 pointer-events-none">
        {/* Decorative glowing orb behind hero text */}
        <div className="w-[500px] h-[500px] bg-[var(--color-brand-primary)] rounded-full blur-[150px] mix-blend-screen opacity-20 animate-pulse"></div>
      </div>

      <div className="w-full">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[var(--color-brand-primary)] text-sm md:text-base font-semibold mb-4 block tracking-wide"
        >
          Introduction
        </motion.span> 

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-4 text-[var(--color-text-bright)] tracking-tight"
        >
          Aditya
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-dim)] mb-8 tracking-tight"
        >
          Full-Stack Developer specializing in MERN Stack | Problem Solver
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-[600px] mb-10 text-lg md:text-xl text-[var(--color-text-main)]"
        >
          Crafting modern, scalable web applications with the MERN stack, focused on performance, clean code, and seamless user experiences. 🚀
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-6"
        >
          <a href="#projects" className="btn btn-filled group">
            Explore Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/CV.png" className="btn group" download="Aditya_CV.png">
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
