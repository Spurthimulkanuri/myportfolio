import { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenResume: () => void;
  isProjectView: boolean;
  onBackToHome: () => void;
}

export default function Navbar({ onNavigate, activeSection, onOpenResume, isProjectView, onBackToHome }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    if (isProjectView) {
      onBackToHome();
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      onNavigate(id);
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo - Cursive 3D brand logo as requested */}
          <div 
            onClick={onBackToHome}
            className="flex items-center gap-1 cursor-pointer group select-none"
          >
            <span className="text-3xl font-cursive tracking-normal bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent filter drop-shadow-[0.5px_1px_1px_rgba(168,85,247,0.15)] group-hover:scale-105 transition-transform duration-300">
              Spurthi
            </span>
            <span className="text-2xl font-light font-sans text-gray-400 group-hover:text-purple-600 transition-colors ml-1">
              Mulkanuri
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-gray-50/70 p-1 rounded-full border border-gray-100">
            {navLinks.map((link) => {
              const active = !isProjectView && activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    active
                      ? 'text-purple-600 bg-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-white/40'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Download Resume Block */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              id="btn-resume-download"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-sans text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all duration-300 group cursor-pointer"
            >
              <FileText className="w-4 h-4 group-hover:rotate-6 transition-transform" />
              <span>Download Resume</span>
            </button>
            
            {/* Soft decorative visual light mode placeholder indicator */}
            <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 transition-colors cursor-pointer" title="Light theme optimized">
              <Sun className="w-4 h-4 animate-spin-slow text-yellow-500" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenResume}
              id="btn-resume-download-mobile"
              className="p-1.5 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 border border-purple-100/60 hover:bg-purple-100 transition-colors"
              title="Download Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="btn-hamburger"
              className="p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl absolute top-full left-0 w-full py-4 px-4 transition-all duration-300">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = !isProjectView && activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-2xl font-sans text-sm font-bold tracking-wide transition-all ${
                    active
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
