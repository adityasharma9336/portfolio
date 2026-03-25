import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Competitive Programming Training',
      company: 'Lovely Professional University',
      duration: 'June 2025 – July 2025',
      description: [
        'Successfully completed a 28-day intensive training program focused on strengthening problem-solving skills and building a strong foundation in data structures and algorithms.',
        'Practiced core topics including arrays, recursion, dynamic programming, graphs, and sliding window techniques.',
        'Improved logical thinking and coding efficiency through daily problem-solving.',
        'Gained hands-on experience with real-world coding challenges and competitive programming patterns.',
        'Enhanced speed and accuracy in solving problems for technical interviews and coding platforms.'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="section-container relative overflow-hidden py-24">
      
      {/* Animated Training Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[-5%] w-[300px] h-[300px] bg-[var(--color-brand-primary)]/10 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#38bdf8]/10 rounded-full blur-[140px] mix-blend-screen"
        />
        {/* Particle Grid mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-6 text-[var(--color-text-bright)]">
          <Briefcase className="w-8 h-8 text-[var(--color-brand-primary)]" />
          Training & Experience
          <span className="h-[1px] flex-grow bg-[var(--color-border-subtle)] block"></span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="cosmic-card p-6 md:p-8 relative group hover:border-[var(--color-brand-primary)] transition-all duration-300"
            >
              {/* Decorative timeline dot */}
              <div className="hidden md:block absolute -left-[2.85rem] top-8 w-4 h-4 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_10px_var(--color-brand-primary)] z-10"></div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 border-b border-[var(--color-border-subtle)] pb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-bright)] mb-2">
                    {exp.role}
                  </h3>
                  <div className="text-[var(--color-text-main)] font-medium text-lg">
                    {exp.company}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-[var(--color-text-dim)] font-mono text-sm bg-white/5 px-3 py-1.5 rounded-full border border-white/10 w-fit">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--color-text-main)] leading-relaxed">
                    <ChevronRight className="w-5 h-5 mt-0.5 text-[var(--color-brand-primary)] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
