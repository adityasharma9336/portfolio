import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    fetch("https://formsubmit.co/ajax/adityathakur123456sharma@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
            _subject: "New Job/Internship Inquiry from Portfolio!"
        })
    })
    .then(response => response.json())
    .then(data => {
        setLoading(false);
        if (data.success === "true" || data.success === true) {
            setSuccess(true);
            e.target.reset();
            setTimeout(() => setSuccess(false), 5000);
        } else {
            setError(true);
            setTimeout(() => setError(false), 5000);
        }
    })
    .catch(err => {
        setLoading(false);
        setError(true);
        setTimeout(() => setError(false), 5000);
    });
  };

  return (
    <section id="contact" className="section-container pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-6 text-[var(--color-text-bright)]">

          Let's Connect
          <span className="h-[1px] flex-grow bg-[var(--color-border-subtle)] block"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          
          {/* Contact Info container */}
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-text-bright)] mb-6">Hire Me</h3>
            <p className="text-[var(--color-text-main)] text-lg mb-10 leading-relaxed">
              I am actively seeking <strong className="text-[var(--color-brand-primary)] drop-shadow-[0_0_8px_var(--color-brand-primary)]">Job and Internship</strong> opportunities. If your team is looking for a passionate Full-Stack Developer to build high-performance applications and solve complex puzzles, I would love to connect.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-[var(--color-text-main)] hover:text-[var(--color-brand-primary)] transition-colors">
                <Mail className="w-6 h-6" />
                <a href="mailto:adityathakur123456sharma@gmail.com" className="font-mono text-sm md:text-base">adityathakur123456sharma@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 text-[var(--color-text-main)] hover:text-[var(--color-brand-primary)] transition-colors">
                <Phone className="w-6 h-6" />
                <a href="tel:+919336988762" className="font-mono text-sm md:text-base">+91-9336988762</a>
              </div>
            </div>

            <div className="flex gap-6">
              <a href="https://github.com/adityasharma9336" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-main)] hover:bg-[var(--color-brand-primary)] hover:border-[var(--color-brand-primary)] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(109,40,217,0.4)]">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aditya709" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-main)] hover:bg-[var(--color-brand-primary)] hover:border-[var(--color-brand-primary)] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(109,40,217,0.4)]">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cosmic-card p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-primary)] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
            
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 relative z-10"
            >
              
              <div className="relative">
                <input 
                  type="text" 
                  name="name"  
                  id="name" 
                  required 
                  className="peer w-full bg-white/5 border border-[var(--color-border-subtle)] rounded-lg px-4 pt-6 pb-2 text-[var(--color-text-bright)] outline-none transition-all focus:border-[var(--color-brand-primary)] focus:bg-white/10"
                  placeholder=" "
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-4 top-4 text-sm text-[var(--color-text-dim)] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:max-h-0 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[var(--color-brand-primary)] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Full Name
                </label>
              </div>

              <div className="relative mt-2">
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="peer w-full bg-white/5 border border-[var(--color-border-subtle)] rounded-lg px-4 pt-6 pb-2 text-[var(--color-text-bright)] outline-none transition-all focus:border-[var(--color-brand-primary)] focus:bg-white/10"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-4 top-4 text-sm text-[var(--color-text-dim)] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[var(--color-brand-primary)] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Email Address
                </label>
              </div>

              <div className="relative mt-2">
                <textarea 
                  name="message" 
                  id="message" 
                  required 
                  rows="5"
                  className="peer w-full bg-white/5 border border-[var(--color-border-subtle)] rounded-lg px-4 pt-6 pb-2 text-[var(--color-text-bright)] outline-none transition-all focus:border-[var(--color-brand-primary)] focus:bg-white/10 resize-none"
                  placeholder=" "
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-4 top-4 text-sm text-[var(--color-text-dim)] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[var(--color-brand-primary)] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Message (Job Description, Internship Details, etc.)
                </label>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn-filled w-full py-4 text-sm rounded-lg mt-2 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? 'Sending Genesis...' : 'Send Message'}
                {!loading && <Send className="w-4 h-4 ml-2" />}
              </button>

              {success && (
                <p className="text-[#00b8a3] text-sm text-center mt-2 font-mono">Message delivered successfully!</p>
              )}
              {error && (
                <p className="text-[#ff375f] text-sm text-center mt-2 font-mono">Delivery failed. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
