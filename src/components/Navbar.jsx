import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Coding', href: '/#coding' },
    { name: 'Education', href: '/#education' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Resume', href: '/resume' }, // Added Resume link
  ];

  useEffect(() => {
    // Scroll progress handler
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);

      // Only calculate progress and sections if on homepage
      if (document.documentElement) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolledProgress = (winScroll / height) * 100;
        const progressBar = document.getElementById('scroll-progress');
        if (progressBar) progressBar.style.width = `${scrolledProgress}%`;
      }

      if (isHome) {
        const sections = ['home', 'about', 'skills', 'projects', 'experience', 'coding', 'education', 'contact'];
        let current = '';
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element && window.scrollY >= element.offsetTop - 200) {
            current = section;
          }
        });
        if (current) setActiveTab(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const targetHash = href.substring(1); // "#about"
      if (!isHome) {
        navigate(targetHash); // Navigate home and then scroll
      } else {
        const element = document.getElementById(targetHash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href); // handle /resume
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1050px] px-6 py-3 flex justify-between items-center z-[1000] rounded-full transition-all duration-400 border border-[var(--color-border-subtle)] backdrop-blur-xl ${
        scrolled
          ? 'top-2 bg-[rgba(255,255,255,0.05)] shadow-[0_10px_40px_rgba(0,0,0,0.3)]'
          : 'bg-[rgba(15,23,42,0.3)]'
      }`}
    >
      <div className="logo cursor-pointer hidden md:block">
        <a href="/#home" onClick={(e) => handleNavClick(e, '/#home')} className="font-mono font-extrabold text-xl text-[var(--color-text-bright)]">
          {/* Logo empty but takes up space, you can add text or image here later */}
        </a>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-5 lg:gap-6 flex-wrap justify-center items-center w-full md:w-auto">
        {navLinks.map((link) => {
          let isActive = false;
          if (link.href.startsWith('/#') && isHome) {
            isActive = activeTab === link.href.substring(2);
          } else if (link.href === location.pathname) {
            isActive = true;
          }

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                isActive ? 'text-[var(--color-text-bright)] drop-shadow-[0_0_8px_var(--color-brand-primary)]' : 'text-[var(--color-text-main)] hover:text-[var(--color-text-bright)]'
              }`}
            >
              {link.name}
            </a>
          );
        })}
        <button 
          onClick={toggleTheme} 
          className="ml-4 p-2 rounded-full border border-[var(--color-border-subtle)] text-[var(--color-text-main)] hover:text-[var(--color-text-bright)] hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/10 transition-all duration-300"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
      </div>
      
      {/* Mobile Menu Toggle (simplified for now) */}
      <div className="md:hidden flex items-center">
        <button className="text-[var(--color-text-bright)]">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
