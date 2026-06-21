import React, { useEffect } from "react";
import { X, Briefcase, GraduationCap, Code2, Award, Printer, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-on-surface/60 backdrop-blur-md"
        />

        {/* Modal content body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-surface w-full max-w-[850px] rounded-[2rem] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col border border-outline-variant/30 print:fixed print:inset-0 print:m-0 print:rounded-none print:max-h-none print:w-full print:h-full print:border-none print:shadow-none print:overflow-visible"
          id="resume-modal"
        >
          {/* Top action header */}
          <div className="bg-surface-container-low px-8 py-4 flex items-center justify-between border-b border-outline-variant/30 print:hidden shrink-0">
            <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">
              Omar Gaafow CV
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="hover:bg-surface-container-highest p-2 rounded-xl text-on-surface-variant hover:text-primary transition-all cursor-pointer flex items-center gap-1.5 text-xs font-sans font-semibold"
                title="Print CV"
                id="resume-print-btn"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="bg-surface-container-highest hover:bg-surface-variant text-on-surface p-2 rounded-full transition-all cursor-pointer"
                id="resume-close-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Core resume layout container */}
          <div className="p-8 sm:p-12 overflow-y-auto space-y-8 flex-grow print:p-0 print:overflow-visible">
            
            {/* Header section */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b border-outline-variant/20 pb-8">
              <div>
                <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-primary-container tracking-tight">
                  omar-gaafow
                </h1>
                <p className="text-secondary font-sans font-semibold text-lg mt-1">
                  Lead Full Stack Developer & UI System Architect
                </p>
                <p className="text-on-surface-variant font-sans text-sm max-w-lg mt-3 leading-relaxed">
                  Resourceful systems engineer with a background in designing responsive microservice frameworks, AR layouts, and advanced analytical stock monitoring telemetry.
                </p>
              </div>
              <div className="space-y-1.5 text-sm font-sans text-on-surface-variant shrink-0 text-left sm:text-right font-medium">
                <p>hello@omar-gaafow.com</p>
                <p>Remote / London, UK</p>
                <p>github.com/omar-gaafow</p>
                <p>linkedin.com/in/omar-gaafow</p>
              </div>
            </div>

            {/* Grid distribution */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Left sidebar: core attributes and skills */}
              <div className="space-y-6 md:border-r md:border-outline-variant/10 md:pr-6 print:border-r print:pr-6 print:col-span-1">
                <div>
                  <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-secondary" />
                    Stack Expertise
                  </h3>
                  <div className="space-y-3 font-sans">
                    <div>
                      <p className="text-xs font-bold text-on-surface-variant mb-1 font-mono uppercase">Frontend</p>
                      <p className="text-xs text-outline leading-relaxed">React, Next.js, Redux, Tailwind CSS, TypeScript, Framer Motion, D3.js</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface-variant mb-1 font-mono uppercase">Backend</p>
                      <p className="text-xs text-outline leading-relaxed">Node.js, Express, PostgreSQL, MongoDB, Redis, GraphQL, Drizzle ORM</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface-variant mb-1 font-mono uppercase">Mobile</p>
                      <p className="text-xs text-outline leading-relaxed">React Native, Expo, ARCore, iOS/Android Interface Bridge</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface-variant mb-1 font-mono uppercase">Cloud & Infra</p>
                      <p className="text-xs text-outline leading-relaxed">Docker, AWS, Git/CI-CD, Prometheus, Grafana, Nginx Server</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-secondary" />
                    Key Milestones
                  </h3>
                  <div className="space-y-3 text-xs font-sans text-on-surface-variant">
                    <p className="leading-relaxed">
                      <strong className="text-primary-container">AWS Solutions Architect</strong><br />
                      Associate Certification
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-primary-container">ARCore Spatial Developer</strong><br />
                      Google Developer Ecosystem Partner
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-primary-container">Outstanding Open Source</strong><br />
                      Contributor to React Native community libraries
                    </p>
                  </div>
                </div>
              </div>

              {/* Right area: Professional history */}
              <div className="md:col-span-2 space-y-6 print:col-span-2">
                <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-secondary" />
                  Engineering Experience
                </h3>

                <div className="space-y-6 font-sans">
                  
                  <div className="relative pl-4 border-l-2 border-secondary-container">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-bold text-base text-primary-container">Senior Systems Engineer</h4>
                        <p className="text-xs font-semibold text-secondary">AeroFinancial Systems</p>
                      </div>
                      <span className="text-xs font-medium text-outline shrink-0">2022 - Present</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 mt-2 text-xs text-on-surface-variant space-y-1.5 leading-relaxed">
                      <li>Designed and formulated FinStream, resolving dynamic telemetry browser rendering loads.</li>
                      <li>Architected cloud Docker infrastructures with autoscaling AWS metrics that optimized application load bandwidth of 25M monthly visitors.</li>
                      <li>Spearheaded transition from legacy Monolith to modular, typing-secure React/TypeScript structures.</li>
                    </ul>
                  </div>

                  <div className="relative pl-4 border-l-2 border-secondary-container">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-bold text-base text-primary-container">Full Stack Developer</h4>
                        <p className="text-xs font-semibold text-secondary">Veloce Luxury Digital</p>
                      </div>
                      <span className="text-xs font-medium text-outline shrink-0">2019 - 2022</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 mt-2 text-xs text-on-surface-variant space-y-1.5 leading-relaxed">
                      <li>Engineered LuxeCommerce cross-platform React Native experiences integrating WebXR cameras for furniture spatial layouts.</li>
                      <li>Created scalable Node.js JSON request pipelines parsing database aggregates with lower latencies.</li>
                      <li>Instructed and coached junior web contributors on robust clean-coding standards.</li>
                    </ul>
                  </div>

                </div>

                <div className="pt-6">
                  <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-secondary" />
                    Education
                  </h3>
                  <div className="space-y-4 font-sans relative pl-4 border-l-2 border-outline-variant/30">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-sm text-primary-container">BSc Computer Science & Engineering</h4>
                        <span className="text-xs font-medium text-outline">First Class Honours</span>
                      </div>
                      <p className="text-xs font-medium text-on-surface-variant mt-0.5">Imperial College London</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Modal bottom actions, hidden on print */}
          <div className="bg-surface-container-low px-8 py-4 flex justify-end gap-3 border-t border-outline-variant/20 print:hidden shrink-0">
            <button
              onClick={handlePrint}
              className="bg-secondary-container text-primary-container font-sans font-bold text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer hover:bg-secondary-container/90 flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print Resume</span>
            </button>
            <button
              onClick={onClose}
              className="bg-surface-container-highest hover:bg-surface-variant text-on-surface font-sans font-semibold text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
