import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'adityathakur123456sharma@gmail.com',
      icon: Mail,
      href: 'mailto:adityathakur123456sharma@gmail.com',
      color: 'hover:text-[#f87171] hover:border-[#f87171] hover:shadow-[0_0_20px_rgba(248,113,113,0.3)]'
    },
    {
      name: 'GitHub',
      value: 'github.com/adityasharma9336',
      icon: Github,
      href: 'https://github.com/adityasharma9336',
      color: 'hover:text-[#a78bfa] hover:border-[#a78bfa] hover:shadow-[0_0_20px_rgba(167,139,250,0.3)]'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/aditya709',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aditya709',
      color: 'hover:text-[#60a5fa] hover:border-[#60a5fa] hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]'
    },
    {
      name: 'Phone',
      value: '+91-9336988762',
      icon: Phone,
      href: 'tel:+919336988762',
      color: 'hover:text-[#4ade80] hover:border-[#4ade80] hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]'
    }
  ];

  // Particle generation for cosmic background
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <section id="contact" className="section-container pb-32 relative overflow-hidden min-h-[80vh] flex items-center justify-center">
      
      {/* Cosmic Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#020617]">
        {/* Core glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-brand-primary)]/10 rounded-full blur-[150px]"></div>
        
        {/* Animated Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, p.size > 3 ? 50 : -50, 0],
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}

        {/* Floating gradient blobs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen"
        />
      </div>

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-[#38bdf8] drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">Connect</span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            I am actively seeking <strong className="text-white font-semibold glow-text">Job and Internship</strong> opportunities. Ready to build high-performance applications and solve complex puzzles together? 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' && link.name !== 'Phone' ? "_blank" : "_self"}
                rel={link.name !== 'Email' && link.name !== 'Phone' ? "noreferrer" : ""}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                whileHover={{ y: -8, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative overflow-hidden p-8 flex flex-col items-center justify-center text-center gap-5 transition-all duration-300 border border-slate-700/50 bg-[#0f172a]/40 backdrop-blur-xl rounded-2xl ${link.color} shadow-lg`}
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#1e293b]/80 border border-slate-600/50 flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-inner group-hover:bg-current">
                  <Icon className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors duration-300 drop-shadow-md" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-current transition-colors duration-300">{link.name}</h3>
                  <p className="text-slate-400 font-mono text-sm tracking-wider opacity-80 group-hover:opacity-100">{link.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
