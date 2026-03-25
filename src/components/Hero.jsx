import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles } from 'lucide-react';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';

const Hero = () => {
  const nameLetters = "Aditya".split("");

  // Random floating animation for background tech icons
  const floatVariants = {
    animate: (i) => ({
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 5 + i * 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]">
      
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Animated Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[var(--color-brand-primary)]/20 rounded-full blur-[100px] md:blur-[150px] mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-cyan-500/20 rounded-full blur-[120px] md:blur-[180px] mix-blend-screen pointer-events-none"
      />

      {/* Floating Tech Icons in Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div custom={1} variants={floatVariants} animate="animate" className="absolute top-[20%] right-[15%] text-cyan-500/10 hidden md:block">
          <SiReact className="w-32 h-32 md:w-48 md:h-48" />
        </motion.div>
        <motion.div custom={2} variants={floatVariants} animate="animate" className="absolute bottom-[10%] left-[10%] text-green-500/10 hidden md:block">
          <SiNodedotjs className="w-40 h-40 md:w-56 md:h-56" />
        </motion.div>
        <motion.div custom={3} variants={floatVariants} animate="animate" className="absolute top-[40%] right-[40%] text-green-600/10 hidden lg:block">
          <SiMongodb className="w-24 h-24 md:w-32 md:h-32" />
        </motion.div>
        <motion.div custom={4} variants={floatVariants} animate="animate" className="absolute bottom-[30%] right-[20%] text-white/5 hidden md:block">
          <SiExpress className="w-28 h-28 md:w-40 md:h-40" />
        </motion.div>
      </div>

      <div className="section-container relative z-10 w-full flex flex-col items-center md:items-start text-center md:text-left">
        


        {/* Main Heading with Staggered Letters */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-none mb-6 flex overflow-hidden drop-shadow-lg">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
              className={`inline-block ${i === 0 ? 'text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-cyan-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]' : 'text-white'}`}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Dynamic Subtitle */}
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-slate-300 mb-8 tracking-tight max-w-4xl leading-tight"
        >
          Full-Stack Developer <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">
            specializing in MERN Stack
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-[700px] mb-12 text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed font-light drop-shadow-md"
        >
          I architect and build modern, highly scalable web applications focused on performance, immaculate clean code, and brilliant user experiences.
        </motion.p>

        {/* Interactive Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, type: 'spring', stiffness: 100 }}
          className="flex flex-col sm:flex-row flex-wrap gap-6 w-full md:w-auto"
        >
          <a href="#projects" className="relative p-[2px] rounded-2xl overflow-hidden group shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-shadow">
            {/* Glowing rotating border effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-primary)] via-cyan-400 to-[var(--color-brand-primary)] opacity-70 group-hover:opacity-100 animate-[spin_3s_linear_infinite] rounded-2xl"></span>
            <span className="relative z-10 flex items-center justify-center gap-3 px-8 py-4 bg-[#020617] rounded-[14px] transition-all duration-300 group-hover:bg-opacity-0 font-bold text-white tracking-wide text-lg border border-slate-800">
              Explore Projects
              <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </span>
          </a>
          
          <a href="/CV.png" download="Aditya_CV.png" className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-slate-700 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-all duration-300 shadow-[0_0_0_transparent] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] font-semibold backdrop-blur-md group text-lg">
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
