import { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenResume: () => void;
  isProjectView: boolean;
  onBackToHome: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export default function Navbar({ onNavigate, activeSection, onOpenResume, isProjectView, onBackToHome, isDarkMode, onToggleDarkMode }: NavbarProps) {
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
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Achievements', id: 'achievements' },
    { label: ' Reach Out     ', id: 'contact' },
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
          ? 'bg-white/95 dark:bg-[#07060F]/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white/40 dark:bg-[#07060F]/20 backdrop-blur-xs py-5'
      }`}
    >
      {/* Dynamic bottom border line for high visibility */}
      <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-opacity duration-300 ${
        isScrolled ? 'opacity-90' : 'opacity-30'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          
          {/* Logo - Cursive 3D brand logo as requested */}
          <div 
            onClick={onBackToHome}
            className="flex items-center gap-1 cursor-pointer group select-none"
          >
            <span className="text-3xl font-cursive tracking-normal bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent filter drop-shadow-[0.5px_1px_1px_rgba(168,85,247,0.15)] group-hover:scale-105 transition-transform duration-300">
              Spurthi
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-gray-50/70 dark:bg-gray-950/40 p-1 rounded-full border border-gray-100 dark:border-gray-850">
            {navLinks.map((link) => {
              const active = !isProjectView && activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    active
                      ? 'text-purple-600 dark:text-purple-400 bg-white dark:bg-slate-900 shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white/40 dark:hover:bg-slate-850/40'
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
            <a
              href="/SPURTHI_RESUME_DATASCIENCE_.pdf"
              download="Spurthi_Resume.pdf"
              id="btn-resume-download"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-sans text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all duration-300 group cursor-pointer"
            >
              <FileText className="w-4 h-4 group-hover:rotate-6 transition-transform" />
              <span>Download Resume</span>
            </a>
            
            {/* Functional theme toggler */}
            <button
              onClick={onToggleDarkMode}
              className="w-9 h-9 rounded-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-slate-700 transition-all duration-300 cursor-pointer"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-yellow-500 animate-pulse" />
              ) : (
                <Moon className="w-4 h-4 text-purple-600" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-1.5">
            <button
              onClick={onToggleDarkMode}
              className="p-1.5 rounded-full bg-gray-50 dark:bg-slate-800 text-gray-500 dark:text-gray-300 border border-gray-100 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              title="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 text-purple-600" />
              )}
            </button>
            <a
              href="/SPURTHI_RESUME_DATASCIENCE_.pdf"
              download="Spurthi_Resume.pdf"
              id="btn-resume-download-mobile"
              className="p-1.5 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 text-purple-600 dark:text-purple-400 border border-purple-100/60 dark:border-purple-900/40 hover:bg-purple-100 dark:hover:bg-purple-900/10 transition-colors"
              title="Download Resume"
            >
              <FileText className="w-4 h-4" />
            </a>
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
        <div className="md:hidden bg-white/95 dark:bg-[#07060F]/95 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 shadow-xl absolute top-full left-0 w-full py-4 px-4 transition-all duration-300">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = !isProjectView && activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-2xl font-sans text-sm font-bold tracking-wide transition-all ${
                    active
                      ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800/40'
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
