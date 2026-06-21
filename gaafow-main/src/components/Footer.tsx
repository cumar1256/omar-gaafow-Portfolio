import React from "react";
import { Github, Linkedin, Twitter, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-outline-variant/20 py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-[1200px] mx-auto gap-8">
        
        {/* Brand/copyright group */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <a href="#hero" className="font-display text-2xl font-black text-primary hover:opacity-90 transition-opacity">
            omar-gaafow
          </a>
          <p className="text-on-surface-variant font-sans text-sm text-center md:text-left flex items-center gap-1.5">
            <span>&copy; {currentYear} omar-gaafow. Built with absolute precision.</span>
            <Sparkles className="w-3.5 h-3.5 text-secondary-container" />
          </p>
        </div>

        {/* Social interactions list */}
        <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors hover:scale-105 active:scale-95 duration-200 flex items-center gap-2 text-sm font-semibold cursor-pointer"
            id="footer-github-link"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors hover:scale-105 active:scale-95 duration-200 flex items-center gap-2 text-sm font-semibold cursor-pointer"
            id="footer-linkedin-link"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors hover:scale-105 active:scale-95 duration-200 flex items-center gap-2 text-sm font-semibold cursor-pointer"
            id="footer-twitter-link"
          >
            <Twitter className="w-4 h-4" />
            <span>Twitter</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
