import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedCircle = ({ value, total, color, label, triggerAnimation }) => {
  const percentage = total > 0 ? (value / total) * 100 : 0;
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="8"
          />
          {/* Animated Foreground Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={triggerAnimation ? { strokeDashoffset } : {}}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            style={{ filter: `drop-shadow(0 0 8px ${color}80)` }}
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-[var(--color-text-bright)]">{value}</span>
        </div>
      </div>
      <span className="text-[10px] md:text-xs font-mono tracking-wider" style={{ color }}>{label}</span>
    </div>
  );
};

const CodingProfiles = () => {
  const [lcStats, setLcStats] = useState({ total: 0, easy: 0, medium: 0, hard: 0 });
  const [gfgStats, setGfgStats] = useState({ total: 344, easy: 215, medium: 108, hard: 21 }); // Fallback values
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      // Fetch LeetCode Real Stats utilizing more stable Vercel hosted community API
      fetch('https://leetcode-api-faisalshohag.vercel.app/Aditya709')
        .then((res) => res.json())
        .then((data) => {
          if (data && data.totalSolved !== undefined) {
            setLcStats({
              total: data.totalSolved,
              easy: data.easySolved,
              medium: data.mediumSolved,
              hard: data.hardSolved,
            });
          }
        })
        .catch(() => {
          // Fallback if API fails to his current actual stats
          setLcStats({ total: 166, easy: 64, medium: 77, hard: 25 });
        });
    }
  }, [isInView]);

  return (
    <section id="coding" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-6 text-[var(--color-text-bright)]">

          Competitive Programming
          <span className="h-[1px] flex-grow bg-[var(--color-border-subtle)] block"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LeetCode Card */}
          <a href="https://leetcode.com/u/Aditya709/" target="_blank" rel="noreferrer" className="cosmic-card block p-6 md:p-8 flex flex-col gap-6 w-full border border-[var(--color-border-subtle)] hover:border-[#00b8a3] hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,184,163,0.3)] transition-all h-full cursor-pointer group">
            <div className="flex items-center gap-4 border-b border-[var(--color-border-subtle)] pb-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png" alt="LeetCode" className="w-8 h-8" />
              <h3 className="flex-1 m-0 text-xl font-bold text-[var(--color-text-bright)]">LeetCode</h3>
              <span className="font-mono text-[#00b8a3] text-sm group-hover:underline">
                @Aditya709
              </span>
            </div>

            <div className="flex justify-between md:justify-around items-end flex-grow pt-4">
              <AnimatedCircle value={lcStats.easy} total={lcStats.total} color="#00b8a3" label="EASY" triggerAnimation={isInView} />
              <AnimatedCircle value={lcStats.medium} total={lcStats.total} color="#ffc01e" label="MEDIUM" triggerAnimation={isInView} />
              <AnimatedCircle value={lcStats.hard} total={lcStats.total} color="#ff375f" label="HARD" triggerAnimation={isInView} />
            </div>
            
            <div className="text-center mt-4 bg-white/5 py-3 rounded-lg border border-[var(--color-border-subtle)]">
              <span className="text-sm font-mono text-[var(--color-text-dim)] mr-2">Total Solved:</span>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00b8a3] to-[#ffc01e]">{lcStats.total}</span>
            </div>
          </a>

          {/* GFG Card */}
          <a href="https://www.geeksforgeeks.org/profile/aditya709/" target="_blank" rel="noreferrer" className="cosmic-card block p-6 md:p-8 flex flex-col gap-6 w-full border border-[var(--color-border-subtle)] hover:border-[#2F8D46] hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(47,141,70,0.3)] transition-all h-full cursor-pointer group">
            <div className="flex items-center gap-4 border-b border-[var(--color-border-subtle)] pb-4">
              <div className="w-8 h-8 bg-[#2F8D46] rounded flex items-center justify-center font-extrabold text-white text-lg">G</div>
              <h3 className="flex-1 m-0 text-xl font-bold text-[var(--color-text-bright)]">GeeksForGeeks</h3>
              <span className="font-mono text-[#2F8D46] text-sm group-hover:underline">
                @aditya709
              </span>
            </div>

            <div className="flex justify-between md:justify-around items-end flex-grow pt-4">
              <AnimatedCircle value={gfgStats.easy} total={gfgStats.total} color="#4ade80" label="LEVEL 1" triggerAnimation={isInView} />
              <AnimatedCircle value={gfgStats.medium} total={gfgStats.total} color="#2F8D46" label="LEVEL 2" triggerAnimation={isInView} />
              <AnimatedCircle value={gfgStats.hard} total={gfgStats.total} color="#14532d" label="LEVEL 3" triggerAnimation={isInView} />
            </div>

            <div className="text-center mt-4 bg-white/5 py-3 rounded-lg border border-[var(--color-border-subtle)]">
              <span className="text-sm font-mono text-[var(--color-text-dim)] mr-2">Total Solved:</span>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4ade80] to-[#2F8D46]">{gfgStats.total}</span>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CodingProfiles;
