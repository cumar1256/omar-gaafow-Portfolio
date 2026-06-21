import React, { useState, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudyModal from "./components/CaseStudyModal";
import ResumeModal from "./components/ResumeModal";
import { Project } from "./types";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cliLogs, setCliLogs] = useState<string[]>([]);

  // Simulate gorgeous CLI style loading sequence
  useEffect(() => {
    const logs = [
      "Initializing omar-gaafow portfolio shell...",
      "Syncing style structures with visual rules...",
      "Purging placeholders, standardizing components...",
      "Aesthetic configurations paired successfully.",
      "Effortless Reliability: Launching viewport."
    ];

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setCliLogs((prev) => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-surface selection:bg-secondary-container selection:text-on-secondary-container relative text-on-surface overflow-x-hidden font-sans">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-primary-container text-white flex flex-col justify-center items-center p-6 select-none font-mono"
            id="portfolio-preseason-loader"
          >
            <div className="w-full max-w-lg bg-on-surface/30 p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative">
              
              {/* Virtual terminal window beads */}
              <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-white/40 ml-2 select-none uppercase font-mono tracking-widest font-bold">
                  shell@omar-gaafow
                </span>
              </div>

              {/* Incremental command logging */}
              <div className="space-y-2 text-xs sm:text-sm font-mono tracking-tight text-white/90">
                {cliLogs.map((log, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex gap-2 items-start"
                  >
                    <span className="text-secondary-container shrink-0">&gt;</span>
                    <span>{log}</span>
                  </motion.p>
                ))}
                
                {cliLogs.length < 5 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                    className="inline-block w-2.5 h-4 bg-secondary-container ml-6"
                  />
                )}
              </div>
            </div>
            
            <p className="absolute bottom-10 text-[10px] sm:text-xs text-white/30 tracking-widest uppercase font-semibold">
              Crafted with Architectural Precision
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Navigational Glass Headers */}
            <Header onOpenResume={() => setResumeOpen(true)} />

            {/* Main structural contents */}
            <main className="relative">
              <Hero />
              <Skills />
              <Projects onSelectProject={setSelectedProject} />
              <Contact />
            </main>

            {/* Common Footers */}
            <Footer />

            {/* Overlays and Modals */}
            <CaseStudyModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />

            <ResumeModal
              isOpen={resumeOpen}
              onClose={() => setResumeOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
