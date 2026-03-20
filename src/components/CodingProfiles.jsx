import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Trophy, Code2 } from 'lucide-react';

const GraphCard = ({ 
  platform, 
  icon: Icon, 
  profileUrl, 
  dataPoints, 
  yLabels, 
  xLabels, 
  lineColor, 
  fillGradientId,
  hoverValues
}) => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div className="bg-[#0f172a] rounded-2xl border border-[var(--color-border-subtle)] p-6 md:p-8 flex flex-col gap-6 w-full shadow-lg relative overflow-hidden transition-all duration-300 hover:border-[#334155]">
      
      {/* Header */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#1e293b] border border-[#334155] flex items-center justify-center shadow-inner">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white tracking-wide">{platform}</h3>
      </div>

      {/* Graph Area */}
      <div className="relative w-full h-[250px] mt-6">
        
        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-500 font-medium py-[10px] pb-[30px]">
          {yLabels.map((lbl, i) => (
            <span key={i}>{lbl}</span>
          ))}
        </div>

        {/* X-Axis Labels */}
        <div className="absolute left-[40px] right-[10px] bottom-0 flex justify-between text-xs text-slate-500 font-medium px-2">
          {xLabels.map((lbl, i) => (
            <span key={i}>{lbl}</span>
          ))}
        </div>

        {/* SVG Graph */}
        <div className="absolute left-[40px] right-[10px] top-[10px] bottom-[30px]">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id={fillGradientId} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={lineColor} stopOpacity="0.4" />
                <stop offset="100%" stopColor={lineColor} stopOpacity="0.0" />
              </linearGradient>
            </defs>
            
            {/* Fill Area */}
            <path
              d={`${dataPoints} L 100 100 L 0 100 Z`}
              fill={`url(#${fillGradientId})`}
            />

            {/* Line Graph */}
            <motion.path
              d={dataPoints}
              fill="none"
              stroke={lineColor}
              strokeWidth="2.5"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Data Points Dots */}
            {dataPoints.split('L').map((point, i) => {
              if (!point.trim()) return null;
              const [x, y] = point.replace('M', '').trim().split(' ');
              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={hoveredIndex === i ? "5" : "3"}
                  fill={hoveredIndex === i ? lineColor : "#ffffff"}
                  stroke={lineColor}
                  strokeWidth={hoveredIndex === i ? "2" : "1.5"}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + (i * 0.1), duration: 0.3 }}
                  className="cursor-pointer transition-all duration-200 cursor-crosshair"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              );
            })}
          </svg>

          {/* Tooltip Overlay */}
          {hoveredIndex !== null && hoverValues && hoverValues[hoveredIndex] && (() => {
            const pointStr = dataPoints.split('L')[hoveredIndex];
            if (!pointStr || !pointStr.trim()) return null;
            const [x, y] = pointStr.replace('M', '').trim().split(' ');
            return (
              <div 
                className="absolute z-50 bg-[#1e293b] text-white py-1.5 px-3 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-slate-600 pointer-events-none whitespace-nowrap transform -translate-x-1/2 -translate-y-[130%]"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <span className="font-mono text-[10px] mr-2 text-slate-400 uppercase tracking-wider">{platform === 'LeetCode' ? 'Rating' : 'Solved'}</span>
                <strong className="text-sm shadow-sm" style={{ color: lineColor }}>{hoverValues[hoveredIndex]}</strong>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Footer / Visit Profile */}
      <div className="mt-4 flex justify-center">
        <a 
          href={profileUrl} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 text-[#fb7185] hover:text-[#f43f5e] text-sm font-semibold tracking-wide transition-colors"
        >
          Visit Profile <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const GFGIcon = ({ className }) => <span className={`text-xl font-extrabold ${className}`}>G</span>;

const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Custom data points mimicking the provided image
  const leetcodeData = "M 0 60 L 5 60 L 5 85 L 20 85 L 25 45 L 60 45 L 65 42 L 80 30 L 90 27 L 95 20 L 100 20";
  const gfgData = "M 0 85 L 45 70 L 55 50 L 60 40 L 65 25 L 75 25 L 100 5";
  
  // Custom tooltips
  const lcHoverVals = ['1436', '1436', '1376', '1376', '1496', '1496', '1505', '1530', '1540', '1608', '1608'];
  const gfgHoverVals = ['5', '12', '25', '38', '45', '45', '56'];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <GraphCard 
            platform="LeetCode"
            icon={Code2}
            profileUrl="https://leetcode.com/u/Aditya709/"
            dataPoints={leetcodeData}
            yLabels={['1608', '1496', '1436', '1376']}
            xLabels={['Jul', 'Sept', 'Nov', 'Jan', 'Mar']}
            lineColor="#facc15" // Yellow/Orange
            fillGradientId="lc-gradient"
            hoverValues={lcHoverVals}
          />

          <GraphCard 
            platform="GeeksForGeeks"
            icon={GFGIcon}
            profileUrl="https://www.geeksforgeeks.org/profile/aditya709/" 
            dataPoints={gfgData}
            yLabels={['56', '38', '20', '5']}
            xLabels={['Oct', 'Nov', 'Dec', 'Jan', 'Feb']}
            lineColor="#4ade80" // Green
            fillGradientId="gfg-gradient"
            hoverValues={gfgHoverVals}
          />

        </div>
      </motion.div>
    </section>
  );
};

export default CodingProfiles;
