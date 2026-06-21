import React, { useState } from "react";
import { ArrowRight, Search, SlidersHorizontal, Layers } from "lucide-react";
import { motion } from "motion/react";
import { projectsData } from "../data";
import { Project } from "../types";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Filter lists dynamically from categories
  const allTags = ["All", "React", "React Native", "Docker", "AWS", "Firebase"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "All" || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="projects" className="py-24 bg-surface scroll-mt-20">
      <div className="px-6 max-w-[1200px] mx-auto">
        
        {/* Title Group with archive actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-extrabold text-primary-container mb-2 tracking-tight"
              id="projects-title"
            >
              Featured Projects
            </motion.h2>
            <p className="text-on-surface-variant font-sans text-md" id="projects-subtitle">
              A collection of systems I've designed and engineered.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            {/* Search Input Filter */}
            <div className="relative flex-grow sm:flex-grow-0">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects..."
                className="w-full sm:w-60 bg-surface-container-low border border-outline-variant/30 rounded-full px-5 py-2.5 pl-11 text-sm text-on-surface outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                id="project-search-input"
              />
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-on-surface-variant" />
            </div>

            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTag("All");
              }}
              className="group flex items-center justify-center gap-2 text-primary-container font-sans font-semibold text-sm hover:text-secondary hover:underline underline-offset-4 transition-colors p-2.5 cursor-pointer"
              id="projects-view-archives"
            >
              Reset Filters
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Filter categories pills bar */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none" id="projects-filter-bar">
          <div className="flex items-center gap-2 pr-2 border-r border-outline-variant/20 mr-1 text-on-surface-variant/80 text-xs font-semibold">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-full font-sans text-xs font-semibold transition-all cursor-pointer ${
                selectedTag === tag
                  ? "bg-primary-container text-on-primary scale-105 shadow-sm"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
              }`}
              id={`project-filter-${tag.replace(/[^a-zA-Z]/g, "-").toLowerCase()}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid stack representing actual catalog item cards */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="project-card group bg-surface-container-low rounded-[1.5rem] overflow-hidden border border-outline-variant/20 transition-all flex flex-col hover:border-primary-container/30 hover:bg-surface-container-low/80 shadow-md"
                id={`project-card-${project.id}`}
              >
                {/* Fullbleed image visual with aspect ratios */}
                <div className="aspect-video w-full overflow-hidden bg-primary/5 relative">
                  <img 
                    className="project-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Info and action panel */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-1.5 mb-4" id={`project-${project.id}-tags`}>
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="bg-surface-container-highest px-3 py-1 rounded-full text-[12px] font-mono font-medium text-primary-container"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 
                    className="font-display text-xl sm:text-2xl font-bold text-primary-container mb-3 group-hover:text-primary transition-colors"
                    id={`project-${project.id}-title`}
                  >
                    {project.title}
                  </h3>
                  
                  <p 
                    className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow"
                    id={`project-${project.id}-desc`}
                  >
                    {project.description}
                  </p>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center text-primary-container font-sans font-bold text-sm tracking-wide group-hover:text-secondary group-hover:underline decoration-secondary-container decoration-2 underline-offset-4 transition-all text-left self-start cursor-pointer group/btn"
                    id={`project-${project.id}-case-study-btn`}
                  >
                    View Case Study 
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-surface-container-low rounded-3xl border border-dashed border-outline-variant/40"
          >
            <Layers className="w-12 h-12 text-on-surface-variant/40 mx-auto mb-4" />
            <h3 className="font-display text-lg font-bold text-primary-container mb-1">
              No matching projects
            </h3>
            <p className="text-sm text-on-surface-variant px-4">
              Try adjusting your search terms or selecting another technology filter tag.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
