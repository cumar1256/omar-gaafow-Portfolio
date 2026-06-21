import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { developerProfile } from "../data";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Narrative Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-center md:text-left"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-container mb-6 tracking-tight leading-tight"
          id="hero-title"
        >
          Hi, I'm <span className="text-primary font-display font-black">omar-gaafow</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-sans text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-normal"
          id="hero-subtitle"
        >
          {developerProfile.tagline}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-secondary-container text-primary-container font-sans font-bold text-[15px] px-8 py-4 rounded-2xl hover:bg-secondary-container/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            id="hero-btn-projects"
          >
            View Projects
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-primary-container text-primary-container font-sans font-bold text-[15px] px-8 py-4 rounded-2xl hover:bg-primary-container/5 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            id="hero-btn-contact"
          >
            Get in Touch
          </button>
        </motion.div>
      </motion.div>

      {/* Image Gallery Mockup */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7, type: "spring", stiffness: 80 }}
        className="flex-1 relative w-full max-w-md md:max-w-none flex justify-center"
      >
        <div className="relative w-full max-w-[380px] aspect-square">
          {/* Framed organic visual */}
          <div className="w-full h-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-8 border-surface-container shadow-2xl relative z-10 bg-surface-container-low">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              src={developerProfile.profileImage}
              alt="Portrait of omar-gaafow, technology solutions expert"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Decorative blur elements inside the grid */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-container rounded-full blur-3xl opacity-30 z-0"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-container rounded-full blur-3xl opacity-20 z-0"></div>
        </div>
      </motion.div>
    </section>
  );
}
