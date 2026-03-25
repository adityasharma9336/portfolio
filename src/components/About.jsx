import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {


  return (
    <section id="about" className="section-container relative overflow-hidden py-24 pb-32">
      
      {/* Animated Cosmic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[0%] w-[300px] h-[300px] bg-[var(--color-brand-primary)]/10 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[0%] w-[500px] h-[500px] bg-[#38bdf8]/10 rounded-full blur-[150px] mix-blend-screen"
        />
        {/* Subtle Starry overlay */}
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-brand-primary)_0%,_transparent_70%)] opacity-20 blur-[100px]"
        />
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-6 text-[var(--color-text-bright)]">

          About Me
          <span className="h-[1px] flex-grow bg-[var(--color-border-subtle)] block"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-20 items-start">
          <div>
            <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
              <p>
                A passionate Full-Stack Developer with a strong focus on building scalable, efficient, and user-centric digital solutions. Driven by curiosity and a deep interest in how modern web technologies work, I have developed a solid foundation in creating dynamic and responsive applications.
              </p>
              <p>
                I bring hands-on experience with modern JavaScript technologies, including React, Node.js, Express, and MongoDB, enabling me to design seamless front-end experiences and develop robust backend systems.
              </p>
              <p>
                Alongside development, I actively engage in competitive programming on platforms like LeetCode and CodeChef, which has sharpened my problem-solving abilities and strengthened my understanding of algorithms and data structures.
              </p>
              <p>
                I am a continuous learner who stays updated with evolving industry trends and technologies. I enjoy transforming ideas into real-world applications and focus on writing clean, maintainable, and efficient code. With a proactive mindset and adaptability, I am always ready to take on new challenges and contribute meaningfully to impactful projects.
              </p>
            </div>


          </div>

          <div className="relative aspect-[1/1.2] w-[80%] md:w-full max-w-[400px] mx-auto group">
            <div className="absolute -inset-4 border-2 border-[var(--color-brand-primary)] rounded-[30px] opacity-30 -z-10 animate-[float_4s_ease-in-out_infinite]"></div>
            <div className="absolute top-5 left-5 w-full h-full border-2 border-[var(--color-brand-primary)] rounded-xl -z-10 transition-transform duration-400 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
            <img
              src="/aditya%202.png"
              alt="Aditya Sharma"
              className="w-full h-full object-cover rounded-xl filter saturate-110 contrast-110 transition-transform duration-400 group-hover:scale-[1.02]"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500/1e293b/6d28d9?text=AS'; }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
