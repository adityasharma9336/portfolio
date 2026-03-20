import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {


  return (
    <section id="about" className="section-container">
      <motion.div
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
            <div className="space-y-6 text-lg text-[var(--color-text-main)]">
              <p>
                Passionate about full-stack web development and problem-solving, with a strong interest in building modern and impactful digital solutions. My journey in technology began with a curiosity about how websites and applications work, which gradually evolved into a commitment to developing efficient and user-focused software.
              </p>
              <p>
                I have hands-on experience with JavaScript technologies, including React, Node.js, Express, and MongoDB, enabling me to build responsive front-end interfaces and reliable backend systems.
              </p>
              <p>
                I actively practice competitive programming on platforms like LeetCode and CodeChef, which has strengthened my logical thinking and algorithmic problem-solving skills. I am a continuous learner, always exploring new technologies and staying updated with industry trends.
              </p>
              <p>
                I enjoy working on real-world projects and transforming ideas into practical applications. With a quick learning ability and a strong problem-solving mindset, I am always ready to take on new challenges. I focus on writing clean, efficient, and maintainable code while continuously striving to grow as a developer.
              </p>
            </div>


          </div>

          <div className="relative aspect-[1/1.2] w-[80%] md:w-full max-w-[400px] mx-auto group">
            <div className="absolute -inset-4 border-2 border-[var(--color-brand-primary)] rounded-[30px] opacity-30 -z-10 animate-[float_4s_ease-in-out_infinite]"></div>
            <div className="absolute top-5 left-5 w-full h-full border-2 border-[var(--color-brand-primary)] rounded-xl -z-10 transition-transform duration-400 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
            <img
              src="/aditya.png"
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
