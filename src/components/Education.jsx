import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) – Computer Science Engineering",
      institution: "Lovely Professional University",
      period: "2023 – Present",
      description: "Currently in the 3rd year, building strong expertise in full-stack development and modern web technologies.",
      icon: <GraduationCap className="w-6 h-6 text-[#6d28d9]" />,
      color: "var(--color-brand-primary)"
    },
    {
      degree: "Higher Secondary Education (Class XII)",
      institution: "Gorakhpur Public School",
      period: "Completed",
      description: "Completed with a solid foundation in core academic subjects.",
      icon: <BookOpen className="w-6 h-6 text-[#0891b2]" />,
      color: "var(--color-brand-secondary)"
    },
    {
      degree: "Secondary Education (Class X)",
      institution: "Gorakhpur Public School",
      period: "Completed",
      description: "Developed strong analytical thinking and problem-solving skills.",
      icon: <Award className="w-6 h-6 text-[#be185d]" />,
      color: "var(--color-brand-accent)"
    }
  ];

  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-6 text-[var(--color-text-bright)]">
          Education Profile
          <span className="h-[1px] flex-grow bg-[var(--color-border-subtle)] block"></span>
        </h2>

        <div className="relative border-l border-[var(--color-border-subtle)] ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="relative group cursor-pointer transition-transform duration-300"
            >
              {/* Timeline Dot */}
              <motion.div 
                className="absolute -left-[41px] md:-left-[57px] top-0 w-12 h-12 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-deep)] flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110"
                style={{ boxShadow: `0 0 15px ${item.color}30` }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {item.icon}
              </motion.div>

              {/* Education Card */}
              <div 
                className="cosmic-card p-6 md:p-8"
                style={{ '--hover-color': item.color }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-4 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-bright)] leading-snug">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-sm px-3 py-1 rounded bg-white/5 whitespace-nowrap text-[var(--color-text-dim)] border border-[var(--color-border-subtle)]">
                    {item.period}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-[var(--color-text-bright)] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                  {item.institution}
                </h4>
                
                <p className="text-[var(--color-text-main)] text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
