import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

interface HeaderProps {
  onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { id: "hero", label: "Hero" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-outline-variant/30 h-20 flex items-center transition-all duration-300">
      <nav className="flex justify-between items-center w-full px-6 max-w-[1200px] mx-auto">
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="font-display text-2xl md:text-3xl font-extrabold text-primary hover:opacity-95 transition-opacity"
          id="nav-brand"
        >
          omar-gaafow
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`font-sans font-semibold text-[15px] transition-all duration-200 py-1 ${
                activeSection === item.id
                  ? "text-primary border-b-2 border-secondary-container pb-1"
                  : "text-on-surface-variant hover:text-secondary"
              }`}
              id={`nav-link-${item.id}`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onOpenResume}
            className="ml-4 bg-primary-container text-on-primary font-sans font-semibold px-6 py-2.5 rounded-full hover:bg-primary transition-all duration-300 scale-95 active:scale-90 flex items-center gap-2 cursor-pointer"
            id="nav-btn-resume"
          >
            <FileText className="w-4 h-4" />
            Resume
          </button>
        </div>

        {/* Mobile Hamburguer */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary p-1 focus:outline-none"
          aria-label="Toggle Menu"
          id="hamburger-btn"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-surface border-b border-outline-variant/30 md:hidden animate-fade-in flex flex-col p-6 gap-4 shadow-xl z-40">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`font-sans font-semibold text-[16px] py-2 px-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? "bg-surface-container text-primary font-bold"
                  : "text-on-surface-variant hover:bg-surface-container-low"
              }`}
              id={`mobile-nav-link-${item.id}`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full bg-primary-container text-on-primary font-sans font-semibold py-3 px-4 rounded-xl hover:bg-primary transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            id="mobile-nav-btn-resume"
          >
            <FileText className="w-4 h-4" />
            Resume
          </button>
        </div>
      )}
    </header>
  );
}
