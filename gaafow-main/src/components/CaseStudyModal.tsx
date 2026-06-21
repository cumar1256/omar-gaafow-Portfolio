import React, { useEffect } from "react";
import { X, CheckCircle2, Cpu, HelpCircle, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-on-surface/60 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-surface w-full max-w-[800px] rounded-[2rem] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col border border-outline-variant/30"
          id="case-study-modal"
        >
          {/* Header Banner Image */}
          <div className="relative h-48 sm:h-64 overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-90" />
            
            {/* Overlay titles */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-secondary-container text-primary-container font-mono text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                Engineering Case Study
              </span>
              <h2 className="text-white font-display text-2xl sm:text-3xl font-extrabold mt-2 leading-tight">
                {project.title}
              </h2>
            </div>

            {/* Sticky close handler */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/25 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Close case study"
              id="modal-close-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal content body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-grow">
            {/* Stack indicators */}
            <div className="flex flex-wrap gap-2 pb-4 border-b border-outline-variant/20">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface-container-low text-primary font-mono text-[12px] font-semibold px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Grid breakdowns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column: Context Summaries */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="font-display text-lg font-bold text-primary-container mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-secondary-container" />
                    Overview
                  </h4>
                  <p className="text-on-surface-variant text-[15px] leading-relaxed">
                    {project.caseStudy.overview}
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-lg font-bold text-primary-container mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-red-500" />
                    The Challenge
                  </h4>
                  <p className="text-on-surface-variant text-[15px] leading-relaxed font-sans">
                    {project.caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-lg font-bold text-primary-container mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-green-500" />
                    The Solution
                  </h4>
                  <p className="text-on-surface-variant text-[15px] leading-relaxed font-sans">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Right Column: High Outcomes */}
              <div className="space-y-6 bg-surface-container-low/55 p-6 rounded-2xl border border-outline-variant/20">
                <h4 className="font-display text-md font-bold text-primary-container">
                  Key Outcomes & Impact
                </h4>
                <ul className="space-y-3">
                  {project.caseStudy.impact.map((point, index) => (
                    <li key={index} className="flex gap-2 text-sm text-on-surface-variant leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-secondary-container shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Full technical stack tags */}
            <div className="pt-4 border-t border-outline-variant/20">
              <p className="text-xs font-mono text-outline uppercase tracking-wider font-bold mb-3">
                Full Project Infrastructure Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/5 text-primary-container font-mono text-[11px] px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky footer actions */}
          <div className="bg-surface-container-low px-6 py-4 flex justify-end gap-3 border-t border-outline-variant/20">
            <button
              onClick={onClose}
              className="bg-primary-container hover:bg-primary text-on-primary font-sans font-bold text-sm px-6 py-2.5 rounded-xl transition-all cursor-pointer"
              id="modal-footer-close-btn"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
