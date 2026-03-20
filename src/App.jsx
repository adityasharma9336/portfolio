import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Scroll Progress Bar */}
      <div id="scroll-progress" className="fixed top-0 left-0 h-[2px] bg-[var(--color-brand-primary)] z-[1001] shadow-[0_0_10px_var(--color-brand-primary)]" />
      
      <Navbar />
      
      <main className="w-full">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <CodingProfiles />
              <Certificates />
              <Education />
              <Contact /> 
            </>
          } />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      
      <footer className="py-8 border-t border-[var(--color-border-subtle)] text-center mt-20">
        <p className="font-mono text-xs text-[var(--color-text-dim)]">
          Built from the ground up by Aditya &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
