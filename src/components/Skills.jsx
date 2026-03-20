import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: '_languages',
      skills: ['C++', 'JavaScript', 'Python', 'Java', 'C'],
    },
    {
      title: '_frameworks_&_stacks',
      skills: ['React.js', 'Node.js', 'Express.js', 'MERN Stack', 'Tailwind CSS', 'Bootstrap', 'Next.js'],
    },
    {
      title: '_infrastructure_&_tools',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git / GitHub', 'Postman', 'Jira', 'Docker'],
    },
  ];

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-6 text-[var(--color-text-bright)]">

          Technical Stack
          <span className="h-[1px] flex-grow bg-[var(--color-border-subtle)] block"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="cosmic-card p-8"
            >
              <h3 className="font-mono text-base text-[var(--color-brand-primary)] mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 bg-white/5 border border-[var(--color-border-subtle)] rounded-md text-sm text-[var(--color-text-main)] hover:text-[var(--color-text-bright)] hover:border-[var(--color-brand-primary)] transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
