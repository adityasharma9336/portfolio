import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 w-full mx-auto relative flex flex-col items-center">
      {/* Background glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-brand-primary)] rounded-full blur-[200px] mix-blend-screen opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-5xl mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 text-[var(--color-text-dim)] hover:text-[var(--color-brand-primary)] mb-6 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[var(--color-text-bright)] tracking-tight"
          >
            Curriculum Vitae
          </motion.h1>
        </div>
        
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          href="/CV.png"
          download="Aditya_Sharma_Resume.png"
          className="btn btn-filled flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </motion.a>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-5xl bg-white p-2 md:p-6 rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all flex justify-center"
      >
        <img 
          src="/CV.png" 
          alt="Aditya Curriculum Vitae" 
          className="w-full h-auto object-contain rounded-md"
          onError={(e) => {
            e.target.onerror = null;
            // Fallback content instructions if the image is missing
            e.target.parentNode.innerHTML = `
              <div class="flex flex-col items-center justify-center py-32 text-gray-900 bg-white w-full rounded-md shadow-inner border-2 border-dashed border-gray-300">
                <p class="text-2xl font-bold mb-2">Image Not Found (/cv.png)</p>
                <p class="text-gray-600 text-center max-w-md">Please save your CV image as <b>cv.png</b> and place it inside the <b>public/</b> folder of your project to display it here on the white theme card.</p>
              </div>
            `;
          }}
        />
      </motion.div>
    </div>
  );
};

export default Resume;
