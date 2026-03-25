import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layers, Database, Terminal } from 'lucide-react';
import { 
  SiCplusplus, SiJavascript, SiPython, SiC, 
  SiReact, SiNodedotjs, SiExpress, SiNextdotjs, SiTailwindcss, SiBootstrap, 
  SiMongodb, SiMysql, SiPostgresql, SiGithub, SiDocker, SiPostman, SiJira 
} from 'react-icons/si';
import { FaJava, FaLayerGroup } from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Languages');

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'from-blue-500/20 to-cyan-500/20',
      activeColor: 'bg-blue-500/20 border-blue-500/50 text-blue-400',
      skills: [
        { name: 'C++', icon: SiCplusplus, color: 'group-hover:text-[#00599C]' },
        { name: 'JavaScript', icon: SiJavascript, color: 'group-hover:text-[#F7DF1E]' },
        { name: 'Python', icon: SiPython, color: 'group-hover:text-[#3776AB]' },
        { name: 'Java', icon: FaJava, color: 'group-hover:text-[#007396]' },
        { name: 'C', icon: SiC, color: 'group-hover:text-[#A8B9CC]' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      color: 'from-purple-500/20 to-pink-500/20',
      activeColor: 'bg-purple-500/20 border-purple-500/50 text-purple-400',
      skills: [
        { name: 'React.js', icon: SiReact, color: 'group-hover:text-[#61DAFB]' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'group-hover:text-[#339933]' },
        { name: 'Express.js', icon: SiExpress, color: 'group-hover:text-white' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'group-hover:text-white' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'group-hover:text-[#06B6D4]' },
        { name: 'Bootstrap', icon: SiBootstrap, color: 'group-hover:text-[#7952B3]' },
        { name: 'MERN Stack', icon: FaLayerGroup, color: 'group-hover:text-[#42b883]' },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-emerald-500/20 to-teal-500/20',
      activeColor: 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: 'group-hover:text-[#47A248]' },
        { name: 'MySQL', icon: SiMysql, color: 'group-hover:text-[#4479A1]' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'group-hover:text-[#4169E1]' },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: Terminal,
      color: 'from-orange-500/20 to-red-500/20',
      activeColor: 'bg-orange-500/20 border-orange-500/50 text-orange-400',
      skills: [
        { name: 'Git / GitHub', icon: SiGithub, color: 'group-hover:text-white' },
        { name: 'Docker', icon: SiDocker, color: 'group-hover:text-[#2496ED]' },
        { name: 'Postman', icon: SiPostman, color: 'group-hover:text-[#FF6C37]' },
        { name: 'Jira', icon: SiJira, color: 'group-hover:text-[#0052CC]' },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container relative overflow-hidden pt-20 pb-32">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-primary)]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <div className="flex flex-col items-center justify-center text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-bright)]">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-[#a78bfa]">Technologies</span>
          </h2>
        </div>

        {/* Clickable Tabs Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.title;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300 ${
                  isActive 
                  ? cat.activeColor + ' shadow-[0_0_20px_rgba(0,0,0,0.2)] scale-105' 
                  : 'bg-[#1e293b]/50 border-slate-700/50 text-slate-400 hover:bg-[#1e293b] hover:text-white hover:border-slate-500'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold tracking-wide">{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <div className="cosmic-card relative overflow-hidden p-8 md:p-12 min-h-[350px] border border-[var(--color-border-subtle)] bg-[#0f172a]/60 backdrop-blur-xl shadow-2xl flex items-center justify-center rounded-3xl">
          <AnimatePresence mode="wait">
            {skillCategories.map((cat) => {
              if (cat.title !== activeCategory) return null;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-wrap justify-center items-center gap-6 md:gap-8 w-full"
                >
                  {cat.skills.map((skill, i) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, type: 'spring', stiffness: 100, damping: 12 }}
                      >
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 3 + (i % 3) * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                          whileHover={{ scale: 1.1, y: -12, rotate: Math.random() > 0.5 ? 2 : -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="group cursor-pointer flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36 rounded-2xl bg-[#1e293b]/60 border border-slate-700/50 hover:border-[var(--color-brand-primary)] hover:bg-[#1e293b] shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                          
                          <SkillIcon className={`w-12 h-12 md:w-14 md:h-14 mb-3 text-slate-400 ${skill.color} transition-colors duration-300 drop-shadow-md group-hover:drop-shadow-[0_0_15px_currentColor]`} />
                          
                          <span className="text-sm md:text-base font-semibold text-slate-400 group-hover:text-white transition-all text-center px-2 z-10 tracking-wide">
                            {skill.name}
                          </span>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
