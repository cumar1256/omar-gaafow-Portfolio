import React from "react";
import { Terminal, Database, Smartphone, Cloud } from "lucide-react";
import { motion } from "motion/react";
import { skillsData } from "../data";

const iconMap: Record<string, React.ComponentType<any>> = {
  Terminal: Terminal,
  Database: Database,
  Smartphone: Smartphone,
  Cloud: Cloud
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface-container-lowest border-y border-outline-variant/20 scroll-mt-20">
      <div className="px-6 max-w-[1200px] mx-auto">
        {/* Title with style-accurate golden accent bar */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl font-extrabold text-primary-container mb-4"
            id="skills-title"
          >
            Core Expertise
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1.5 bg-secondary-container mx-auto rounded-full"
            id="skills-divider"
          />
        </div>

        {/* 4-Column expertise layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Terminal;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-surface border border-outline-variant/30 p-8 rounded-[1.5rem] hover:border-primary-container hover:bg-surface-container-low/30 transition-all duration-300 flex flex-col items-center text-center shadow-sm"
                id={`skill-card-${skill.title.toLowerCase()}`}
              >
                {/* Wrapped icon in soft rounded surface container */}
                <div 
                  className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-2xl mb-6 text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-all duration-300"
                  id={`skill-icon-wrapper-${skill.title.toLowerCase()}`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>

                <h3 
                  className="font-display text-xl font-bold text-primary-container mb-3"
                  id={`skill-name-${skill.title.toLowerCase()}`}
                >
                  {skill.title}
                </h3>
                
                <p 
                  className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6 flex-grow"
                  id={`skill-desc-${skill.title.toLowerCase()}`}
                >
                  {skill.description}
                </p>

                {/* Sub-pills for visual hierarchy using JetBrains Mono font-mono */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-container-low text-on-surface-variant font-mono text-[12px] font-medium rounded-full border border-outline-variant/10 group-hover:border-primary-container/20 transition-all"
                      id={`skill-tag-${tag.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
