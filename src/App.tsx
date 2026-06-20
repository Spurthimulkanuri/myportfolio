import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Cpu, 
  Layers, 
  Sparkles, 
  BarChart2, 
  Wrench, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  FileText, 
  Award, 
  Trophy, 
  CheckCircle2, 
  ArrowLeft, 
  Calendar, 
  Briefcase, 
  ArrowRight, 
  Send, 
  Check, 
  X,
  Target,
  ShieldCheck,
  Zap,
  Bookmark,
  ChevronRight,
  Database,
  Eye,
  Activity,
  Heart
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, EXPERIENCE_DATA, CERTIFICATIONS_DATA, ACHIEVEMENTS_DATA } from './data';
import { Project } from './types';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Loader from './components/Loader';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [fadeRole, setFadeRole] = useState(true);

  // Gemini Sparkle interactive particles state
  const [sparkles, setSparkles] = useState<{
    id: string;
    x: number;
    y: number;
    size: number;
    color: string;
    angle: number;
    distance: number;
    delay: number;
    created: number;
  }[]>([]);

  // Add click listener to window to generate sparks on any interactive touch or click
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Spawn elegant Gemini-inspired sparks (8 in a clean explosion circle)
      const count = 8;
      const newSparkles = [];
      const colors = [
        '#EC4899', // Pink
        '#8B5CF6', // Purple/Violet
        '#3B82F6', // Blue
        '#06B6D4', // Cyan
        '#F59E0B', // Gold/Amber
        '#F43F5E'  // Rose
      ];
      
      const clickId = Math.random().toString(36).substring(2, 9);
      const now = Date.now();
      
      for (let i = 0; i < count; i++) {
        const angle = (i * (360 / count)) + (Math.random() * 30 - 15);
        const distance = 30 + Math.random() * 50;
        const size = 10 + Math.random() * 15;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 0.08;

        newSparkles.push({
          id: `${clickId}-${i}`,
          x: e.clientX,
          y: e.clientY,
          size,
          color,
          angle,
          distance,
          delay,
          created: now
        });
      }

      setSparkles(prev => [...prev.slice(-32), ...newSparkles]);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  // Filter out outdated sparkles to ensure outstanding performance
  useEffect(() => {
    if (sparkles.length === 0) return;
    const interval = setInterval(() => {
      const now = Date.now();
      setSparkles(prev => prev.filter(s => now - s.created < 1100));
    }, 250);
    return () => clearInterval(interval);
  }, [sparkles.length]);

  // Adaptable Theme State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  
  // Contact form state
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [transmissionStep, setTransmissionStep] = useState(0);
  const [downloadingResume, setDownloadingResume] = useState(false);
  const [resumeDownloadStep, setResumeDownloadStep] = useState(0);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingLog, setLoadingLog] = useState("Initializing neural networks...");
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Initial snappy loading screen animation timer
  useEffect(() => {
    const logs = [
      "Initializing neural networks...",
      "Resolving data science matrices...",
      "Mapping deep learning CNN models...",
      "Emplacing Spurthi's core profile metrics...",
      "Configuring local responsive interfaces...",
      "Optimizing. Deploying portfolio secure gate..."
    ];
    let logsIdx = 0;
    const logInterval = setInterval(() => {
      if (logsIdx < logs.length - 1) {
        logsIdx++;
        setLoadingLog(logs[logsIdx]);
      }
    }, 280);

    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 15) + 5, 100);
      });
    }, 120);

    const timer = setTimeout(() => {
      setInitialLoading(false);
      clearInterval(logInterval);
      clearInterval(progressInterval);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  // Role cycler logic
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeRole(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.subRoles.length);
        setFadeRole(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Intersection observer for current viewport section tracking
  useEffect(() => {
    if (selectedProject) return;

    const sections = ['home', 'skills', 'projects', 'experience', 'certifications', 'achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  const handleNavigate = (sectionId: string) => {
    setSelectedProject(null);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }, 50);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseProjectDetail = () => {
    setSelectedProject(null);
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }, 50);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitting(true);
    setTransmissionStep(1);
    
    setTimeout(() => {
      setTransmissionStep(2);
    }, 1000);

    setTimeout(() => {
      setTransmissionStep(3);
    }, 2000);

    setTimeout(() => {
      setSubmitting(false);
      setTransmissionStep(0);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormState({ name: '', email: '', company: '', message: '' });
      }, 6000);
    }, 3000);
  };

  const handlePrintResume = () => {
    setDownloadingResume(true);
    setResumeDownloadStep(1);
    
    setTimeout(() => {
      setResumeDownloadStep(2);
    }, 850);

    setTimeout(() => {
      setResumeDownloadStep(3);
    }, 1700);

    setTimeout(() => {
      setDownloadingResume(false);
      setResumeDownloadStep(0);
      window.print();
    }, 2550);
  };

  // Helper mapping string category name to Lucide icons
  const renderSkillCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-purple-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-teal-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-pink-600" />;
      case 'BarChart2': return <BarChart2 className="w-5 h-5 text-cyan-600" />;
      default: return <Wrench className="w-5 h-5 text-purple-600" />;
    }
  };

  // Render achievement icon helper
  const renderAchievementIcon = (type: string) => {
    switch (type) {
      case 'trophy':
        return (
          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-sm shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
        );
      case 'medal':
      default:
        return (
          <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shadow-sm shrink-0">
            <Award className="w-6 h-6" />
          </div>
        );
    }
  };

  return (
    <AnimatePresence mode="wait">
      {initialLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-white z-[99999] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Ambient subtle lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
          
          <div className="relative flex items-center justify-center">
            {/* The Custom Loader SVG component */}
            <Loader />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen relative bg-[#FAF9FC] dark:bg-[#07060F] text-[#1E293B] dark:text-[#E2E8F0] font-sans selection:bg-purple-100 dark:selection:bg-purple-900 selection:text-purple-950 dark:selection:text-purple-100 overflow-x-hidden transition-colors duration-300"
        >
      {/* Ambient gradient backgrounds & gentle shimmering sparks across the entire website page height */}
      <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[550px] h-[550px] rounded-full bg-purple-200/30 dark:bg-purple-950/10 blur-[135px] transition-all duration-1000 animate-pulse-slow" />
        <div className="absolute top-[25%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-200/25 dark:bg-blue-950/10 blur-[115px] transition-all duration-1000 animate-pulse-delayed" />
        <div className="absolute top-[45%] right-[10%] w-[400px] h-[400px] rounded-full bg-pink-100/20 dark:bg-pink-950/10 blur-[105px] transition-all duration-1000 animate-pulse-slow" />
        <div className="absolute top-[70%] left-[5%] w-[500px] h-[500px] rounded-full bg-indigo-150/15 dark:bg-indigo-950/10 blur-[130px] transition-all duration-1000 animate-pulse-delayed" />
        <div className="absolute top-[85%] right-[5%] w-[480px] h-[480px] rounded-full bg-teal-100/15 dark:bg-teal-950/5 blur-[125px] transition-all duration-1000 animate-pulse-slow" />

        {/* Gently shifting passive particle stars shimmer */}
        <div className="absolute inset-0 opacity-45 dark:opacity-65">
          <div className="absolute top-[6%] left-[15%] w-1.5 h-1.5 rounded-full bg-purple-400 dark:bg-purple-300 blur-[0.5px] animate-particle-float" />
          <div className="absolute top-[18%] right-[20%] w-1 h-1 rounded-full bg-pink-400 dark:bg-pink-300 blur-[0.5px] animate-particle-float-slow" />
          <div className="absolute top-[28%] left-[8%] w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-400 blur-[1px] opacity-75 animate-particle-float" />
          <div className="absolute top-[38%] right-[10%] w-1.5 h-1.5 rounded-full bg-yellow-300 dark:bg-amber-300 blur-[0.5px] animate-particle-float-delayed" />
          <div className="absolute top-[48%] left-[25%] w-1 h-1 rounded-full bg-teal-400 dark:bg-teal-300 blur-[0.5px] animate-particle-float-slow" />
          <div className="absolute top-[58%] right-[22%] w-2 h-2 rounded-full bg-purple-400 dark:bg-purple-300 blur-[1.2px] opacity-65 animate-particle-float-delayed" />
          <div className="absolute top-[68%] left-[18%] w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-300 blur-[0.5px] animate-particle-float" />
          <div className="absolute top-[78%] right-[15%] w-1.5 h-1.5 rounded-full bg-pink-400 dark:bg-rose-450 blur-[0.5px] animate-particle-float-slow" />
          <div className="absolute top-[88%] left-[12%] w-1.5 h-1.5 rounded-full bg-cyan-400 dark:bg-cyan-300 blur-[0.5px] animate-particle-float-delayed" />
          <div className="absolute top-[96%] right-[18%] w-2 h-2 rounded-full bg-amber-400 dark:bg-amber-300 blur-[1px] opacity-80 animate-particle-float" />
        </div>
      </div>

      {/* Interactive Gemini Sparkles click visual particles overlay */}
      <AnimatePresence mode="popLayout">
        {sparkles.map(spark => {
          const rad = (spark.angle * Math.PI) / 180;
          const targetX = Math.cos(rad) * spark.distance;
          const targetY = Math.sin(rad) * spark.distance;

          return (
            <motion.div
              key={spark.id}
              initial={{ 
                opacity: 0.9, 
                scale: 0, 
                x: spark.x, 
                y: spark.y,
                rotate: 0 
              }}
              animate={{ 
                opacity: [0.9, 1, 0], 
                scale: [0, spark.size / 12, 0], 
                x: spark.x + targetX, 
                y: spark.y + targetY,
                rotate: spark.angle * 2 + 180
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.9, 
                delay: spark.delay, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="fixed pointer-events-none z-[100000]"
              style={{
                width: spark.size,
                height: spark.size,
                transform: 'translate(-50%, -50%)',
                left: 0,
                top: 0
              }}
            >
              <svg 
                viewBox="0 0 16 16" 
                width="100%" 
                height="100%" 
                fill={spark.color}
                style={{ filter: `drop-shadow(0 0 4px ${spark.color}aa)` }}
              >
                <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
              </svg>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Navigation */}
      <Navbar 
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onOpenResume={() => setIsResumeModalOpen(true)}
        isProjectView={selectedProject !== null}
        onBackToHome={() => setSelectedProject(null)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(prev => !prev)}
      />

      <div className="pt-20">
        {!selectedProject ? (
          /* =========================================================================
             ============================ MAIN LANDING VIEW ==========================
             ========================================================================= */
          <main>
            {/* HERO SECTION */}
            <motion.section 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              id="home" 
              className="relative min-h-[calc(100vh-80px)] flex items-center py-10 md:py-16 z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
                
                {/* Hero left content column */}
                <div id="hero-info-panel" className="lg:col-span-7 flex flex-col justify-center space-y-5">
                  
                  {/* Status Capsule tag (🚀 Aspiring Data Scientist) */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50/70 border border-purple-100 text-purple-700 text-xs font-bold tracking-wide w-fit animate-pulse-subtle shadow-xs">
                    <span>🚀</span>
                    <span>Aspiring Data Scientist</span>
                  </div>

                  {/* Primary Greeting Headline matching the image design */}
                  <div className="space-y-1">
                    <span className="text-xl font-extrabold text-blue-900 tracking-tight font-hero-display">Hi, I'm</span>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-hero-display font-extrabold tracking-tight text-gray-900 leading-none">
                      <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent filter drop-shadow-sm">
                        Spurthi Mulkanuri
                      </span>
                    </h1>
                    
                    {/* Secondary animated role line */}
                    <div className="h-8 flex items-center pr-2 pt-1">
                      <p className="text-sm sm:text-base font-semibold text-gray-700 tracking-wide font-mono flex flex-wrap gap-x-2">
                        {PERSONAL_INFO.subRoles.map((role, idx) => (
                          <span key={role} className="flex items-center">
                            <span className={currentRoleIndex === idx ? "text-purple-600 font-bold" : "text-gray-400 font-normal"}>
                              {role}
                            </span>
                            {idx < PERSONAL_INFO.subRoles.length - 1 && <span className="text-gray-300 ml-2">|</span>}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  {/* Pitch Summary Paragraph */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl font-medium">
                    {PERSONAL_INFO.bio}
                  </p>

                  {/* Custom CTA Action trigger buttons */}
                  <div className="flex flex-wrap gap-4 pt-1">
                    <button
                      onClick={() => handleNavigate('projects')}
                      id="hero-cta-viewwork"
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-650 via-purple-600 to-pink-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all duration-300 group cursor-pointer"
                    >
                      <span>View My Work</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                    
                    <button
                      onClick={() => handleNavigate('contact')}
                      id="hero-cta-contactme"
                      className="px-6 py-3 rounded-full bg-white border border-gray-200/80 text-gray-700 font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-xs cursor-pointer"
                    >
                      <Mail className="w-4 h-4 text-purple-500" />
                      <span>Contact Me</span>
                    </button>
                  </div>

                  {/* Interactive Socials aligned exactly like the image (LinkedIn, Github, Mail, location) */}
                  <div className="flex items-center gap-3 pt-3">
                    <a 
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white shadow-sm hover:scale-110 active:scale-95 transition-all"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    
                    <a 
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-900 hover:bg-black flex items-center justify-center text-white shadow-sm hover:scale-110 active:scale-95 transition-all"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="w-10 h-10 rounded-full bg-rose-500 hover:bg-rose-650 flex items-center justify-center text-white shadow-sm hover:scale-110 active:scale-95 transition-all"
                      title="Email Spurthi"
                    >
                      <Mail className="w-4 h-4" />
                    </a>

                    <div className="ml-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-[11px] font-bold tracking-wide flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{PERSONAL_INFO.location}</span>
                    </div>
                  </div>

                </div>

                {/* Hero Right visual graphic - Concentric orbits, Code block, stats stack, and bot mascot */}
                <div id="hero-interactive-stage" className="lg:col-span-5 flex justify-center items-center relative py-8">
                  
                  {/* Concentric rotating pathways */}
                  <div className="absolute w-[340px] sm:w-[400px] h-[340px] sm:h-[400px] rounded-full border border-purple-100/60 animate-orbit-cw pointer-events-none" />
                  <div className="absolute w-[280px] sm:w-[330px] h-[280px] sm:h-[330px] rounded-full border border-dashed border-pink-200/40 animate-orbit-ccw pointer-events-none" />
                  
                  {/* Interactive Currently Exploring Tech Widget */}
                  <div className="absolute bottom-1 bg-white/90 backdrop-blur-md border border-gray-150 py-2.5 px-4 rounded-2xl shadow-md z-20 flex flex-col items-center gap-1.5 animate-float-delayed">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Currently Exploring</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg border border-blue-105">
                        <span className="text-xs">🐍</span>
                        <span className="text-[10px] font-bold text-blue-700 font-mono">Python</span>
                      </div>
                      <div className="flex items-center gap-1 bg-teal-50 px-2 py-1 rounded-lg border border-teal-105">
                        <span className="text-xs">🔥</span>
                        <span className="text-[10px] font-bold text-teal-700 font-mono">Tensorflow</span>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg border border-amber-105">
                        <span className="text-xs">🤗</span>
                        <span className="text-[10px] font-bold text-amber-700 font-mono">HuggingFace</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Portrait Frame with customized vector illustrations */}
                  <div className="relative w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] rounded-full bg-gradient-to-tr from-purple-500/20 via-pink-400/10 to-blue-500/20 p-1 shadow-2xl animate-float">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden relative border-2 border-white flex flex-col justify-center items-center">
                      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/10 via-white/5 to-purple-50/60" />
                      
                      {/* Premium Portrait Art Illustration */}
                      <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-pink-500/15 flex items-center justify-center p-3 relative">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-inner relative overflow-hidden">
                          {/* Inner professional smart profile symbol */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 flex flex-col items-center justify-center text-white font-hero-display select-none">
                            <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">SM</span>
                            <span className="text-[10px] sm:text-xs font-mono tracking-wider font-semibold opacity-90 mt-1">DATA SCIENCE</span>
                          </div>
                          
                          {/* Real-life Profile Image Overlay */}
                          <img 
                            src="https://ik.imagekit.io/njxa1mbn3/SM.png" 
                            alt="Spurthi" 
                            referrerPolicy="no-referrer"
                            className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 hover:scale-105"
                            onError={(e) => {
                              // If image fails to load, gracefully hide this element to show fallback underneath
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Overlay Code Terminal Window exactly like the python IDE in image */}
                  <div className="absolute left-[-20px] sm:left-[-35px] top-[15%] w-[190px] p-3.5 rounded-2xl terminal-gradient border border-slate-750 shadow-xl z-20 text-[9.5px] font-mono text-slate-300 animate-float">
                    <div className="flex items-center gap-1 px-1 pb-2 border-b border-slate-800/80 mb-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[8px] text-gray-500 ml-1.5 font-sans">python_magic.py</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-slate-500 italic"># Data Science Magic</p>
                      <p><span className="text-indigo-400">import</span> pandas <span className="text-indigo-400">as</span> pd</p>
                      <p><span className="text-indigo-400">import</span> numpy <span className="text-indigo-400">as</span> np</p>
                      <p><span className="text-indigo-400">from</span> sklearn <span className="text-indigo-400">import</span> metrics</p>
                      <p className="pt-1"><span className="text-amber-300">print</span>(<span className="text-[#34d399]">"Insights Unleashed"</span>)</p>
                    </div>
                  </div>

                  {/* Vertical mini statistics stack to the right matching image */}
                  <div className="absolute right-[-20px] sm:right-[-40px] top-[10%] flex flex-col gap-2.5 z-20">
                    <div className="bg-white/95 border border-gray-100 p-2 px-3.5 rounded-2xl shadow-md flex items-center gap-2.5 hover:scale-105 transition-transform duration-300">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-xs font-extrabold text-gray-900">1+</p>
                        <p className="text-[9px] font-semibold text-gray-500 whitespace-nowrap">Years learning</p>
                      </div>
                    </div>

                    <div className="bg-white/95 border border-gray-100 p-2 px-3.5 rounded-2xl shadow-md flex items-center gap-2.5 hover:scale-105 transition-transform duration-300">
                      <div className="w-7 h-7 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                        <Database className="w-3.5 h-3.5" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-xs font-extrabold text-gray-900">11k+</p>
                        <p className="text-[9px] font-semibold text-gray-500 whitespace-nowrap">Records processed</p>
                      </div>
                    </div>

                    <div className="bg-white/95 border border-gray-100 p-2 px-3.5 rounded-2xl shadow-md flex items-center gap-2.5 hover:scale-105 transition-transform duration-300">
                      <div className="w-7 h-7 rounded-lg bg-teal-50 flex items-center justify-center text-teal-500 shrink-0">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-xs font-extrabold text-gray-900">2</p>
                        <p className="text-[9px] font-semibold text-gray-500 whitespace-nowrap">AI/ML Projects</p>
                      </div>
                    </div>

                    <div className="bg-white/95 border border-gray-100 p-2 px-3.5 rounded-2xl shadow-md flex items-center gap-2.5 hover:scale-105 transition-transform duration-300">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center text-purple-500 shrink-0">
                        <Heart className="w-3.5 h-3.5" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-xs font-extrabold text-gray-900">100%</p>
                        <p className="text-[9px] font-semibold text-gray-500 whitespace-nowrap">Passion & Dedication</p>
                      </div>
                    </div>
                  </div>

                  {/* Smiling responsive peak mascot assistant bot bottom right */}
                  <div className="absolute right-[-10px] bottom-[30px] z-10 w-16 h-16 animate-bounce [animation-duration:6s] pointer-events-none opacity-90 sm:opacity-100">
                    <div className="w-full h-full bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-2xl p-1 shadow-lg relative flex items-center justify-center">
                      <div className="w-full h-full bg-slate-900 rounded-[12px] flex flex-col items-center justify-center gap-1">
                        <div className="flex gap-1.5">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        </div>
                        <span className="text-[7px] font-bold font-mono text-cyan-400 uppercase tracking-widest leading-none">AI Bot</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </motion.section>

            <div className="font-remaining">
              {/* WHAT I DO SECTION - Pristine styled white horizontal blocks matching image */}
            <motion.section 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="py-14 bg-[#FAF9FC] relative z-10 border-t border-gray-200/50"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Image-accurate title layout */}
                <div className="flex flex-col sm:flex-row items-baseline gap-3 mb-10 pb-4 border-b border-gray-100">
                  <h2 className="text-2xl font-display font-extrabold text-blue-950 tracking-tight">
                    What I Do
                  </h2>
                  <span className="text-gray-300 hidden sm:inline">|</span>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    Turning data into decisions and ideas into intelligent solutions.
                  </p>
                </div>

                {/* Grid layout containing the 6 primary white block cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  
                  {/* Card 1: Data Analysis */}
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="bg-white rounded-2xl border border-gray-150 p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-orange-500 flex items-center justify-center shrink-0 shadow-xs">
                      <Database className="w-5.5 h-5.5" />
                    </div>
                    <div className="leading-tight">
                      <h3 className="font-display font-extrabold text-[#1E293B] text-sm tracking-tight">Data Analysis</h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5 leading-snug">Extracting meaningful insights and strategic matrices from unstructured data.</p>
                    </div>
                  </motion.div>

                  {/* Card 2: Machine Learning */}
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="bg-white rounded-2xl border border-gray-150 p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-105 text-blue-500 flex items-center justify-center shrink-0 shadow-xs">
                      <Cpu className="w-5.5 h-5.5 animate-pulse" />
                    </div>
                    <div className="leading-tight">
                      <h3 className="font-display font-extrabold text-[#1E293B] text-sm tracking-tight">Machine Learning</h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5 leading-snug">Building and scaling robust predictive models that make tangible impact.</p>
                    </div>
                  </motion.div>

                  {/* Card 3: Deep Learning */}
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="bg-white rounded-2xl border border-gray-150 p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-105 text-purple-500 flex items-center justify-center shrink-0 shadow-xs">
                      <Layers className="w-5.5 h-5.5" />
                    </div>
                    <div className="leading-tight">
                      <h3 className="font-display font-extrabold text-[#1E293B] text-sm tracking-tight">Deep Learning</h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5 leading-snug">Creating deep intelligent models, spatial neural layers, and sequential NLP.</p>
                    </div>
                  </motion.div>

                  {/* Card 4: Generative AI */}
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="bg-white rounded-2xl border border-gray-150 p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-110 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                      <Sparkles className="w-5.5 h-5.5" />
                    </div>
                    <div className="leading-tight">
                      <h3 className="font-display font-extrabold text-[#1E293B] text-sm tracking-tight">Generative AI</h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5 leading-snug">Exploring fine-tunes, context RAG frameworks, and prompt logic models.</p>
                    </div>
                  </motion.div>

                  {/* Card 5: Visualization */}
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="bg-white rounded-2xl border border-gray-150 p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-105 text-pink-500 flex items-center justify-center shrink-0 shadow-xs">
                      <BarChart2 className="w-5.5 h-5.5" />
                    </div>
                    <div className="leading-tight">
                      <h3 className="font-display font-extrabold text-[#1E293B] text-sm tracking-tight">Visualization</h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5 leading-snug">Converting highly nested query response parameters into stellar visuals.</p>
                    </div>
                  </motion.div>

                  {/* Card 6: Problem Solving */}
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="bg-white rounded-2xl border border-gray-150 p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-yellow-50 border border-yellow-105 text-yellow-600 flex items-center justify-center shrink-0 shadow-xs">
                      <Target className="w-5.5 h-5.5" />
                    </div>
                    <div className="leading-tight">
                      <h3 className="font-display font-extrabold text-[#1E293B] text-sm tracking-tight">Problem Solving</h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5 leading-snug">Solving actual complex problems via math algorithms and efficient script logic.</p>
                    </div>
                  </motion.div>

                </div>

              </div>
            </motion.section>

            {/* FEATURED PROJECTS SECTION - Highly styled cards replicating image styling */}
            <motion.section 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              id="projects" 
              className="py-20 bg-white relative z-10 border-t border-gray-150"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Title and Right-aligned clicker button */}
                <div className="flex justify-between items-end mb-12">
                  <div className="space-y-1">
                    <h2 className="text-3xl font-display font-extrabold text-gray-900 tracking-tight">
                      Featured Projects
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium leading-none">
                      Deployable systems and case studies built using state-of-the-art framework boundaries.
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => {
                      const el = document.getElementById('skills');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hidden sm:flex px-4 py-1.5 rounded-full border border-gray-200 hover:border-purple-500 text-xs font-bold text-gray-500 hover:text-purple-600 transition-all shadow-xs shrink-0 cursor-pointer"
                  >
                    Explore Technical Stack
                  </button>
                </div>

                {/* Dynamic Projects Grid containing pristine vector previews */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {PROJECTS_DATA.map((project, index) => (
                    <div 
                      key={project.id}
                      className="bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-purple-200 transition-all duration-400 flex flex-col group transform hover:-translate-y-1"
                    >
                      {/* Project Visual block header with realistic, highly relevant mockups based on Image 1 and Image 2 */}
                      <div className="relative pb-[65%] overflow-hidden border-b border-gray-200/60 select-none bg-slate-50">
                        {index === 0 ? (
                          /* Project 1: Counselor Visuals Replicating Image 1 (AI Counselor Dialogue & Serene Vibe) */
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#ece9fc] via-[#f5f3ff] to-[#f9f8fe] p-3 flex flex-col justify-between overflow-hidden">
                            {/* Floating decorative sparkles/circles */}
                            <div className="absolute left-[30%] top-[10%] w-2 h-2 rounded-full bg-purple-300 animate-pulse" />
                            <div className="absolute right-[25%] top-[15%] w-3 h-3 rounded-full bg-pink-200 animate-ping [animation-duration:4s]" />
                            <div className="absolute right-[40%] bottom-[20%] w-2 h-2 rounded-full bg-indigo-200 animate-pulse" />

                            {/* Top Mockup Header Bar */}
                            <div className="flex items-center justify-between bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/80 shadow-xs z-10">
                              <div className="flex items-center gap-1.5">
                                <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] text-white font-extrabold shadow-sm">🤖</span>
                                <span className="text-[11px] font-black text-slate-800 tracking-tight font-sans">AI Counselor</span>
                              </div>
                              <span className="text-[9px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">EQ System Live</span>
                            </div>

                            {/* Dialogue Area */}
                            <div className="relative z-10 flex flex-col gap-2.5 my-auto max-w-full">
                              
                              {/* Counselor Chat Bubble */}
                              <div className="flex gap-2 items-start max-w-[85%]">
                                <div className="w-6 h-6 rounded-full bg-indigo-100 border border-indigo-200 shrink-0 flex items-center justify-center text-xs shadow-xs">🧘‍♀️</div>
                                <div className="bg-white p-2.5 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 relative">
                                  <p className="text-[10px] sm:text-[11px] leading-relaxed text-slate-700 font-sans font-medium">
                                    I understand how you feel. It's okay to take things one step at a time. You are stronger than you think. <span className="text-pink-500">🌸</span>
                                  </p>
                                </div>
                              </div>


                              {/* Intermediate Meditating character (High-fidelity inline vector graphic replicating Image 1) */}
                              <div className="absolute left-[54%] top-[12px] -translate-x-1/2 pointer-events-none scale-100 flex flex-col items-center justify-center">
                                <svg viewBox="0 0 200 200" className="w-24 h-24 select-none filter drop-shadow-md">
                                  {/* Background soft aura */}
                                  <circle cx="100" cy="100" r="85" fill="url(#meditation-glow)" opacity="0.3" className="animate-pulse" />
                                  
                                  {/* Hair back */}
                                  <path d="M60,110 Q40,80 50,55 Q60,30 100,30 Q140,30 150,55 Q160,80 140,110 C160,130 170,160 165,185 L35,185 C30,160 40,130 60,110 Z" fill="#2d1747" />
                                  
                                  {/* Head & Ear support */}
                                  <circle cx="100" cy="80" r="26" fill="#fbcfe8" />
                                  <circle cx="100" cy="80" r="26" fill="#fed7aa" opacity="0.9" />
                                  <circle cx="73" cy="80" r="5" fill="#fed7aa" />
                                  <circle cx="127" cy="80" r="5" fill="#fed7aa" />
                                  
                                  {/* Hair Front (Locks framing the face) */}
                                  <path d="M72,72 C72,52 85,45 100,45 C115,45 128,52 128,72 C128,58 120,52 100,52 C80,52 72,58 72,72 Z" fill="#1e1030" />
                                  <path d="M73,55 Q82,42 100,46 Q118,42 127,55 Q135,75 132,105 Q134,120 137,135" fill="none" stroke="#1e1030" strokeWidth="6" strokeLinecap="round" />
                                  <path d="M73,55 Q62,75 68,105 Q66,120 63,135" fill="none" stroke="#1e1030" strokeWidth="6" strokeLinecap="round" />

                                  {/* Closed eyes of meditation */}
                                  <path d="M87,81 Q91,85 95,81" fill="none" stroke="#2d1747" strokeWidth="2" strokeLinecap="round" />
                                  <path d="M105,81 Q109,85 113,81" fill="none" stroke="#2d1747" strokeWidth="2" strokeLinecap="round" />
                                  
                                  {/* Eyebrows matching */}
                                  <path d="M84,75 Q90,72 96,76" fill="none" stroke="#1e1030" strokeWidth="1.5" strokeLinecap="round" />
                                  <path d="M104,76 Q110,72 116,75" fill="none" stroke="#1e1030" strokeWidth="1.5" strokeLinecap="round" />

                                  {/* Cheeks Blush */}
                                  <circle cx="82" cy="86" r="3.5" fill="#f43f5e" opacity="0.4" />
                                  <circle cx="118" cy="86" r="3.5" fill="#f43f5e" opacity="0.4" />

                                  {/* Serene Simile */}
                                  <path d="M96,90 Q100,94 104,90" fill="none" stroke="#be185d" strokeWidth="2" strokeLinecap="round" />

                                  {/* Neck */}
                                  <path d="M93,105 L107,105 L104,115 L96,115 Z" fill="#fdbaf8" />
                                  <path d="M93,105 L107,105 L104,115 L96,115 Z" fill="#fed7aa" opacity="0.9" />

                                  {/* Torso & lavender shirt */}
                                  <path d="M72,115 C58,124 54,138 54,185 L146,185 C146,138 142,124 128,115 Z" fill="#c084fc" />
                                  <path d="M72,115 C58,124 54,138 54,185 L146,185 C146,138 142,124 128,115 Z" fill="#d8b4fe" opacity="0.85" />
                                  <path d="M92,115 A8,8 0 0,0 108,115" fill="none" stroke="#fed7aa" strokeWidth="2.5" />

                                  {/* Arms gently folded over chest representing inner calm */}
                                  <path d="M62,152 Q82,145 96,145 C101,142 106,144 110,148 L98,165" fill="none" stroke="#a78bfa" strokeWidth="9" strokeLinecap="round" />
                                  <path d="M138,155 Q118,141 104,141 C98,139 95,142 91,146 L102,168" fill="none" stroke="#8b5cf6" strokeWidth="9" strokeLinecap="round" />

                                  {/* Hands Skin Highlights */}
                                  <path d="M92,143 C94,138 101,138 104,143 L100,149 Z" fill="#fed7aa" />
                                  <path d="M101,145 C103,140 108,141 110,145 L107,151 Z" fill="#fed7aa" opacity="0.9" />

                                  <defs>
                                    <radialGradient id="meditation-glow" cx="0.5" cy="0.5" r="0.5">
                                      <stop offset="0%" stopColor="#f472b6" />
                                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                                    </radialGradient>
                                  </defs>
                                </svg>
                              </div>

                              {/* Heart floating near avatar */}
                              <div className="absolute right-[22%] top-[10%] text-sm text-pink-500 animate-bounce [animation-duration:3s]">❤️</div>

                              {/* User Chat Bubble */}
                              <div className="flex gap-2 items-start justify-end max-w-[82%] ml-auto z-15">
                                <div className="bg-[#f3f0ff] p-2.5 rounded-2xl rounded-tr-none shadow-sm border border-purple-100 relative text-right">
                                  <span className="text-[8px] font-mono text-indigo-500 block font-bold mb-0.5">YOU</span>
                                  <p className="text-[10px] sm:text-[11px] leading-relaxed text-slate-700 font-sans font-medium">
                                    I feel stressed and overwhelmed with everything...
                                  </p>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-[#ede9fe] border border-purple-200 shrink-0 flex items-center justify-center text-xs shadow-xs">👤</div>
                              </div>

                            </div>

                            {/* Active Candle Mockup bottom left */}
                            <div className="flex justify-between items-end relative z-10 px-2">
                              <div className="flex items-center gap-1.5 pb-1">
                                <div className="w-4 h-6 bg-slate-800 rounded-md relative flex items-center justify-center shadow-md border border-slate-700">
                                  <div className="w-1.5 h-3 bg-amber-100 rounded-full absolute bottom-1.5" />
                                  <div className="w-2 h-2 bg-amber-500 rounded-full blur-[1px] absolute top-[-2px] animate-pulse" />
                                </div>
                                <span className="text-[8.5px] font-mono font-semibold text-slate-500">Therapeutic Ambiance Active</span>
                              </div>
                              
                              <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
                              </div>
                            </div>

                          </div>
                        ) : (
                          /* Project 2: Social-to-Lead chatbot visuals Replicating Image 2 (Lead capture board & pipelines) */
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#f0f7ff] via-[#e0f2fe] to-[#f4faff] p-3 flex flex-col justify-between overflow-hidden">
                            {/* Title banner */}
                            <div className="flex items-center justify-between bg-white/80 backdrop-blur-xs px-2.5 py-1.5 rounded-xl border border-white shadow-xs z-10">
                              <span className="text-[10px] font-black tracking-tight text-blue-900 font-sans">Convert Social Chats to Enterprise Leads</span>
                              <span className="text-[8px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 uppercase tracking-widest">RAG Engine</span>
                            </div>

                            {/* Main Body - Split layout like Screenshot 2 */}
                            <div className="grid grid-cols-12 gap-2 my-auto items-stretch relative z-10">
                              
                              {/* Left column: Social Channel inputs */}
                              <div className="col-span-3 flex flex-col justify-center items-center gap-1 bg-white/40 p-1.5 rounded-xl border border-white/50 text-center">
                                <span className="text-[7.5px] uppercase font-mono text-blue-500 font-extrabold tracking-wider leading-none mb-1">Socials</span>
                                <div className="grid grid-cols-2 gap-1.5">
                                  <span className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-[10px] border border-pink-200">📸</span>
                                  <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] border border-blue-200">📘</span>
                                  <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] border border-emerald-200">💬</span>
                                  <span className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center text-[10px] border border-sky-200">🐦</span>
                                </div>
                                {/* Connector arrow */}
                                <div className="text-[9px] text-blue-400 rotate-95 mt-1 animate-pulse">➡️</div>
                              </div>

                              {/* Center column: Active AI assistant chatbot working at desk (High-fidelity vector robot Replicating Image 2) */}
                              <div className="col-span-4 flex flex-col items-center justify-center bg-white/60 p-1 rounded-2xl border border-white shadow-xs text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-100/10" />
                                <div className="scale-95 flex items-center justify-center">
                                  <svg viewBox="0 0 200 200" className="w-[84px] h-[84px] select-none filter drop-shadow-sm">
                                    {/* Laptop base */}
                                    <path d="M40,145 L160,145 L170,165 L30,165 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
                                    <path d="M75,163 L125,163" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />

                                    {/* Laptop screen (glow in front of body) */}
                                    <path d="M56,110 L144,110 L146,145 L54,145 Z" fill="#1e293b" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                                    <rect x="62" y="116" width="76" height="23" rx="2" fill="#0f172a" />
                                    <polygon points="62,139 138,139 158,162 42,162" fill="url(#laptop-glow)" opacity="0.2" />

                                    {/* Robot Body */}
                                    <ellipse cx="100" cy="110" rx="24" ry="21" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                                    <circle cx="100" cy="110" r="10" fill="#3b82f6" />
                                    <text x="100" y="113" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">AI</text>

                                    {/* Robot Neck */}
                                    <rect x="95" y="76" width="10" height="12" rx="3" fill="#cbd5e1" />

                                    {/* Robot Head */}
                                    <rect x="70" y="44" width="60" height="38" rx="19" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                                    
                                    {/* Interactive blue screen visor */}
                                    <rect x="76" y="50" width="48" height="22" rx="11" fill="#0f172a" />
                                    
                                    {/* Cheerful luminous cyan LED eyes */}
                                    <ellipse cx="88" cy="61" rx="4" ry="4" fill="#22d3ee" className="animate-pulse" />
                                    <ellipse cx="112" cy="61" rx="4" ry="4" fill="#22d3ee" className="animate-pulse" />

                                    {/* Head Antenna */}
                                    <line x1="100" y1="44" x2="100" y2="30" stroke="#cbd5e1" strokeWidth="3" />
                                    <circle cx="100" cy="28" r="4" fill="#22d3ee" />

                                    {/* Arms working at computer keyboard */}
                                    <path d="M72,110 Q50,130 68,142" fill="none" stroke="#cbd5e1" strokeWidth="7" strokeLinecap="round" />
                                    <path d="M128,110 Q150,130 132,142" fill="none" stroke="#cbd5e1" strokeWidth="7" strokeLinecap="round" />
                                    
                                    {/* Robot Hands */}
                                    <circle cx="68" cy="142" r="3.5" fill="#94a3b8" />
                                    <circle cx="132" cy="142" r="3.5" fill="#94a3b8" />

                                    <defs>
                                      <linearGradient id="laptop-glow" x1="0.5" y1="0" x2="0.5" y2="1">
                                        <stop offset="0%" stopColor="#22d3ee" />
                                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                </div>
                                <span className="text-[8px] font-mono font-extrabold text-[#1E293B] uppercase tracking-wider mt-1 z-10 leading-none">RAG BOT</span>
                                <span className="text-[7px] text-blue-500 font-mono font-extrabold z-10 bg-blue-50 px-1 rounded-sm mt-0.5 border border-blue-100">Powered by FAISS</span>
                              </div>

                              {/* Right column: CRM lead capture card as requested */}
                              <div className="col-span-5 bg-white p-2 rounded-2xl border border-blue-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
                                {/* Header badge */}
                                <div className="flex items-center gap-1 border-b border-slate-50 pb-1 mb-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />

                                  <span className="text-[7.5px] font-mono font-extrabold text-slate-500 uppercase tracking-wider">Lead Recorded</span>
                                </div>
                                
                                {/* Fields */}
                                <div className="space-y-0.5 text-[8.5px] text-slate-700 leading-none font-sans">
                                  <p className="flex justify-between font-medium">
                                    <span className="text-slate-400">Name:</span> <span className="font-extrabold text-slate-800">John Doe</span>
                                  </p>
                                  <p className="flex justify-between font-medium">
                                    <span className="text-slate-400">Email:</span> <span className="text-blue-500 font-bold truncate max-w-[55%]">john.doe@email.com</span>
                                  </p>
                                  <p className="flex justify-between font-medium">
                                    <span className="text-slate-400">Interest:</span> <span className="font-bold text-slate-800">Enterprise Pricing</span>
                                  </p>
                                </div>

                                <div className="mt-1.5 py-0.5 text-center bg-emerald-500 text-white rounded-[6px] text-[7.5px] font-bold uppercase tracking-widest border border-emerald-600/10 shadow-3xs cursor-pointer">
                                  Added to CRM ✓
                                </div>
                              </div>

                            </div>

                            {/* Bottom pipeline flow diagram ("How It Works") */}
                            <div className="bg-[#0f172a] p-1.5 rounded-xl border border-slate-850 flex items-center justify-between text-[7px] font-mono text-slate-300">
                              <span className="text-cyan-400 font-bold">1. Chat Ingestion</span>
                              <span className="text-slate-500">➡️</span>
                              <span className="text-amber-300 font-bold">2. NLP Entity Extract</span>
                              <span className="text-slate-500">➡️</span>
                              <span className="text-emerald-400 font-bold">3. Database Push</span>
                            </div>

                          </div>
                        )}
                      </div>

                      {/* Project description list */}
                      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                        <div className="space-y-2.5">
                          {/* Tags row */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                              <span 
                                key={t}
                                className="px-2 py-0.5 rounded-md bg-purple-50/60 border border-purple-100 text-[9px] font-bold text-purple-700 font-mono uppercase tracking-wide"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <h3 className="font-display font-extrabold text-[#1E293B] text-xl tracking-tight leading-snug group-hover:text-purple-600 transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-xs text-gray-500 font-medium leading-relaxed">
                            {project.summary}
                          </p>

                          {/* Quick contributions checklist */}
                          <ul className="space-y-1.5 pt-1 border-t border-gray-100">
                            {project.bullets.slice(0, 3).map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2 text-xs text-gray-500">
                                <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Expandable Project Details triggers */}
                        <div className="flex items-center gap-2 pt-4 justify-between border-t border-gray-100">
                          <button
                            onClick={() => setSelectedProject(project)}
                            id={`btn-viewdoc-${project.id}`}
                            className="px-4.5 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                          >
                            <span>View Details</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <a 
                            href={PERSONAL_INFO.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200/80 hover:border-gray-900 hover:text-gray-900 flex items-center justify-center text-gray-500 transition-all"
                            title="GitHub Code"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </motion.section>

            {/* SKILLS SECTION */}
            <Skills isDarkMode={isDarkMode} />

            {/* EXPERIENCE SECTION - Hybrid modern card timeline */}
            <motion.section 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              id="experience" 
              className="py-20 bg-white relative z-10 border-b border-gray-200/50"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-3">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Work Engagement</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 tracking-tight">
                    Professional Experience
                  </h2>
                  <p className="text-gray-500 mt-2 font-medium text-xs sm:text-sm">
                    A hybrid milestone layout mapping completed data science workflows and validation pipelines.
                  </p>
                </div>

                {/* Experience layout card */}
                <div className="max-w-4xl mx-auto">
                  <div className="bg-[#FAF9FC] rounded-[24px] border border-gray-200 p-6 sm:p-8 relative overflow-hidden">
                    
                    {/* Visual glowing deco */}
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-purple-500/10 to-pink-500/10 rounded-bl-[100px] pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      
                      {/* Left Badge Column */}
                      <div className="md:col-span-4 space-y-3.5 md:border-r md:border-gray-200 md:pr-6">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-100 text-teal-700 text-[10px] font-bold uppercase tracking-wider animate-pulse">
                          Current Internship
                        </span>
                        
                        <div>
                          <h3 className="font-display font-extrabold text-[#1E293B] text-lg leading-tight">
                            {EXPERIENCE_DATA.role}
                          </h3>
                          <p className="text-sm font-semibold text-purple-600 mt-0.5">
                            {EXPERIENCE_DATA.company}
                          </p>
                        </div>
                        
                        <div className="space-y-1.5 pt-2">
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{EXPERIENCE_DATA.location} (India)</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>{EXPERIENCE_DATA.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right bullets and metrics columns */}
                      <div className="md:col-span-8 space-y-6">
                        
                        {/* Highlights Metric Chips */}
                        <div className="flex flex-wrap gap-2">
                          {EXPERIENCE_DATA.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="px-3 py-1.5 rounded-xl bg-white border border-gray-150 text-xs flex items-center gap-2 shadow-xs">
                              <span className="text-gray-400 font-bold text-[9px] uppercase tracking-wide">{metric.label}:</span>
                              <span className="text-gray-800 font-extrabold font-mono text-[11px] bg-gray-50 px-1.5 py-0.5 rounded-md border border-gray-100">{metric.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Contributions grid */}
                        <div className="space-y-3">
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Primary Responsibilities</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {EXPERIENCE_DATA.bullets.map((bullet, bIdx) => (
                              <div 
                                key={bIdx}
                                className="p-3.5 bg-white border border-gray-100 rounded-xl shadow-xs flex gap-2.5 hover:border-purple-200 transition-colors"
                              >
                                <div className="p-1 rounded-md bg-purple-50 text-purple-600 shrink-0 h-fit">
                                  <Check className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-xs leading-relaxed text-gray-650 font-medium">
                                  {bullet}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </motion.section>

            {/* CERTIFICATIONS & ACHIEVEMENTS BENTO */}
            <motion.section 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="py-20 bg-[#FAF9FC] relative z-10"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  
                  {/* Left Column: Certifications */}
                  <div id="certifications" className="lg:col-span-6 space-y-6">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-2">
                        <Award className="w-3.5 h-3.5" />
                        <span>Verified Syllabus</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 tracking-tight">
                        Certifications
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {CERTIFICATIONS_DATA.map((cert) => (
                        <div 
                          key={cert.title}
                          className="bg-white rounded-2xl border border-gray-150 p-5 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-650 shrink-0 group-hover:scale-105 transition-transform">
                            <Award className="w-6 h-6 animate-pulse" />
                          </div>
                          <div className="space-y-2 flex-grow">
                            <div>
                              <h3 className="font-display font-extrabold text-gray-900 text-sm sm:text-base leading-snug">
                                {cert.title}
                              </h3>
                              <p className="text-xs text-purple-600 font-bold mt-0.5">{cert.issuer}</p>
                            </div>
                            
                            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-50">
                              <span className="text-[10px] text-gray-400 font-mono font-bold flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                {cert.date}
                              </span>
                              
                              <button
                                onClick={() => {
                                  alert(`Program Scope: Standard python methodologies, NumPy, Pandas matrix manipulations, SQL normalization, Matplotlib dashboards, and flask backend structures.`);
                                }}
                                className="px-3 py-1 rounded-lg bg-gray-50 border border-gray-200 text-[10px] font-bold text-gray-500 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-colors cursor-pointer"
                              >
                                Inspect Syllabus
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Achievements */}
                  <div id="achievements" className="lg:col-span-6 space-y-6">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider mb-2">
                        <Trophy className="w-3.5 h-3.5" />
                        <span>Competitive Distinctions</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 tracking-tight">
                        Academic & Professional Highlights
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {ACHIEVEMENTS_DATA.map((ach) => (
                        <div 
                          key={ach.title}
                          className="bg-white rounded-2xl border border-gray-150 p-5 shadow-xs hover:shadow-md transition-all duration-300 flex gap-4 hover:border-purple-200 group"
                        >
                          {renderAchievementIcon(ach.iconType)}
                          <div className="space-y-1">
                            <h3 className="font-display font-extrabold text-gray-950 text-sm sm:text-base leading-snug group-hover:text-purple-600 transition-colors">
                              {ach.title}
                            </h3>
                            <p className="text-xs text-gray-500 font-medium leading-relaxed">
                              {ach.subtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </motion.section>

            {/* CONTACT MESSAGE PORTAL */}
            <motion.section 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              id="contact" 
              className="py-24 bg-white dark:bg-[#070611] relative z-10 border-t border-gray-150 dark:border-purple-950/20 transition-colors duration-300 overflow-hidden"
            >
              {/* Modern ambient backdrop glows */}
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/1 pointer-events-none blur-3xl rounded-full" />
              <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-teal-500/5 dark:bg-teal-500/1 pointer-events-none blur-3xl rounded-full" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
                  
                  {/* Left Column - Direct contact information */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between"
                  >
                    <div className="space-y-5">
                      <span className="inline-flex items-center gap-1 py-1 px-3 rounded-full bg-purple-50 dark:bg-purple-950/45 text-purple-700 dark:text-purple-400 text-[10.5px] font-bold uppercase tracking-wider">
                        <Mail className="w-3.5 h-3.5" />
                        <span>Communication routing</span>
                      </span>
                      
                      <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight whitespace-pre-wrap">
                        {" Reach Out     "}
                      </h2>
                      
                      <p className="text-xs sm:text-sm text-gray-550 dark:text-gray-400 leading-relaxed font-semibold">
                        Actively screening placement parameters, academic collaborations, graduate data engineering tracks, and professional machine learning scopes.
                      </p>

                      <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 shadow-xs">
                            <Mail className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <p className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest font-mono">Email Direct</p>
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                              {PERSONAL_INFO.email}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 shadow-xs">
                            <Phone className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <p className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest font-mono">Phone Direct</p>
                            <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                              {PERSONAL_INFO.phone}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 shadow-xs">
                            <MapPin className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <p className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest font-mono">Corporate Station</p>
                            <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200">
                              {PERSONAL_INFO.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 lg:pt-0 flex flex-wrap gap-2.5">
                      <a 
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4.5 py-2 rounded-xl bg-slate-50 dark:bg-[#13112a] border border-gray-200 dark:border-purple-900/20 hover:border-blue-500 hover:text-blue-600 text-gray-600 dark:text-gray-400 font-sans text-xs font-bold leading-none flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                        <span>LinkedIn</span>
                      </a>
                      <a 
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4.5 py-2 rounded-xl bg-slate-50 dark:bg-[#13112a] border border-gray-200 dark:border-purple-900/20 hover:border-black dark:hover:border-white text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-sans text-xs font-bold leading-none flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5 text-gray-900 dark:text-gray-100" />
                        <span>GitHub Profile</span>
                      </a>
                    </div>
                  </motion.div>

                  {/* Right Column - Validation Portal Form */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="lg:col-span-7"
                  >
                    <div className="bg-[#FAF9FC] dark:bg-[#110f27]/40 rounded-[24px] border border-gray-200 dark:border-purple-950/30 p-6 sm:p-8 shadow-xs relative overflow-hidden transition-colors duration-300">
                      
                      {/* Submitting Loading UI Overlay */}
                      <AnimatePresence>
                        {submitting && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-white/95 dark:bg-[#0c0a1de6 ] rounded-[24px] backdrop-blur-md flex flex-col justify-center items-center z-20 p-6 text-center border-2 border-purple-500/20"
                          >
                            {/* Concentric rotating glowing visual loader rings */}
                            <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                              <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30"
                              />
                              <motion.div 
                                animate={{ rotate: -360 }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                className="absolute inset-2 rounded-full border-t-2 border-b-2 border-purple-600"
                              />
                              <motion.div 
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                className="absolute w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400"
                              >
                                <Send className="w-4 h-4" />
                              </motion.div>
                            </div>

                            <div className="space-y-3 max-w-sm font-sans">
                              <h4 className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 font-mono animate-pulse">
                                {transmissionStep === 1 && "Verifying Security Tunnel"}
                                {transmissionStep === 2 && "Synthesizing Core Packets"}
                                {transmissionStep === 3 && "Finalizing Routing Link"}
                              </h4>
                              
                              {/* Visual glowing progress bar */}
                              <div className="h-1.5 w-48 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
                                <motion.div 
                                  initial={{ width: "10%" }}
                                  animate={{ 
                                    width: transmissionStep === 1 ? "35%" : transmissionStep === 2 ? "70%" : "100%" 
                                  }}
                                  transition={{ duration: 1 }}
                                  className="h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500"
                                />
                              </div>

                              <div className="bg-gray-50 dark:bg-[#07050f]/80 rounded-xl p-3 border border-gray-150 dark:border-purple-950/40 text-[11px] font-mono leading-relaxed text-gray-500 dark:text-gray-400 text-left space-y-1.5 max-w-xs shadow-xs mx-auto">
                                <div className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                                  <span className="font-bold text-gray-400">STATUS:</span> ACTIVE_TRANSMISSION
                                </div>
                                <p className="border-t border-gray-100 dark:border-gray-800/80 pt-1.5 min-h-[40px]">
                                  {transmissionStep === 1 && "> Establishing safe TLS websocket..."}
                                  {transmissionStep === 2 && "> Parsing organization scope & tags..."}
                                  {transmissionStep === 3 && "> Pushing telemetry bytes down socket..."}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Success Alert Overlay inside the card */}
                      <AnimatePresence>
                        {formSubmitted && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="absolute inset-0 bg-white/95 dark:bg-[#0c0a1de6] rounded-[24px] backdrop-blur-md flex flex-col justify-center items-center z-20 p-6 text-center border-2 border-emerald-500/20"
                          >
                            <div className="relative mb-6">
                              {/* Ripple ring elements */}
                              <motion.div 
                                animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute inset-0 rounded-full bg-emerald-500/10"
                              />
                              <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 relative z-10 shadow-sm">
                                <Check className="w-7 h-7" />
                              </div>
                            </div>

                            <div className="space-y-2 max-w-sm">
                              <h3 className="text-lg font-display font-extrabold text-gray-900 dark:text-white">
                                Payload Securely Transmitted!
                              </h3>
                              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                Your inquiry has been stored. The neural auto-router has acknowledged your address, and a response parameter is queued for delivery.
                              </p>
                              <div className="pt-2">
                                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-mono bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded-full border border-emerald-200/50 dark:border-emerald-800/20">
                                  Handshake Verified
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div>
                        <h3 className="font-display font-extrabold text-gray-900 dark:text-white text-lg leading-none">Transmission Interface</h3>
                        <p className="text-xs text-gray-400 dark:text-gray-400 mt-1 font-medium italic">Message requests are parsed via localized regex checks.</p>
                      </div>

                      <form onSubmit={handleContactSubmit} className="space-y-4 pt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest font-mono">Your Name *</label>
                            <input 
                              type="text" 
                              required
                              placeholder="Name"
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-purple-950/30 bg-white dark:bg-[#13112c]/45 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-105 dark:focus:ring-purple-950/40 outline-none text-xs sm:text-sm font-semibold transition-all text-gray-900 dark:text-white"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest font-mono">Email Address *</label>
                            <input 
                              type="email" 
                              required
                              placeholder="Email"
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-purple-950/30 bg-white dark:bg-[#13112c]/45 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-105 dark:focus:ring-purple-950/40 outline-none text-xs sm:text-sm font-semibold transition-all text-gray-900 dark:text-white"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest font-mono">Affiliation / Organization</label>
                          <input 
                            type="text" 
                            placeholder="e.g. Swinfy Solutions"
                            value={formState.company}
                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-purple-950/30 bg-white dark:bg-[#13112c]/45 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-105 dark:focus:ring-purple-950/40 outline-none text-xs sm:text-sm font-semibold transition-all text-gray-900 dark:text-white"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest font-mono">Message Scope *</label>
                          <textarea 
                            rows={4}
                            required
                            placeholder="State collaboration requirements..."
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-purple-950/30 bg-white dark:bg-[#13112c]/45 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-105 dark:focus:ring-purple-950/40 outline-none text-xs sm:text-sm font-semibold transition-all resize-none text-gray-900 dark:text-white"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          id="btn-contact-submit"
                          className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:brightness-110 duration-300 transition-all cursor-pointer disabled:opacity-75 disabled:pointer-events-none text-center"
                        >
                          <Send className="w-4 h-4" />
                          <span>Transmit Signal</span>
                        </button>
                      </form>

                    </div>
                  </motion.div>

                </div>

              </div>
            </motion.section>
            </div>
          </main>
        ) : (
          /* =========================================================================
             ============================ PROJECT DETAIL VIEW ========================
             ========================================================================= */
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-remaining">
            {/* Back to Projects button trigger */}
            <button
              onClick={handleCloseProjectDetail}
              id="detail-back-button"
              className="mb-8 px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-purple-500 text-gray-600 hover:text-purple-600 font-sans text-xs font-bold leading-none flex items-center gap-2 transition-all shadow-xs cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>

            {/* Custom high contrast illustrative project hero banner */}
            <div className="p-8 sm:p-12 rounded-[28px] text-white relative overflow-hidden mb-10 shadow-lg min-h-[300px] flex items-center bg-slate-900">
              {/* Actual realistic, related background image */}
              <img 
                src={selectedProject.id === 'counselor' 
                  ? "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
                  : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                } 
                alt={selectedProject.title}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.35] transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              {/* Dynamic glassmorphism gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r opacity-90 ${
                selectedProject.id === 'counselor' 
                  ? 'from-indigo-950/90 via-purple-900/60 to-transparent' 
                  : 'from-blue-950/90 via-teal-900/60 to-transparent'
              }`} />
              
              {/* Decorative rings */}
              <div className="absolute right-[-40px] bottom-[-40px] w-56 h-56 rounded-full border-4 border-white/10 pointer-events-none" />
              <div className="absolute right-[40px] top-[-40px] w-44 h-44 rounded-full border-2 border-white/5 pointer-events-none" />

              <div className="relative z-10 space-y-4 w-full">
                <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30 text-[10px] font-mono font-bold tracking-wider uppercase">
                  Technical Case Analysis
                </span>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight">
                  {selectedProject.title}
                </h1>
                
                <p className="text-sm sm:text-base text-white/95 leading-relaxed max-w-2xl font-medium italic">
                  {selectedProject.tagline}
                </p>

                {/* Tech chips wrapper */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {selectedProject.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-white/20 border border-white/30 text-white font-mono text-[10px] font-bold uppercase tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Structured Project Core Case Study body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Detailed breakdown */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Section 1: Overview */}
                <div className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-xs space-y-3.5">
                  <h3 className="text-lg font-display font-extrabold text-[#1E293B] flex items-center gap-2">
                    <Eye className="w-5 h-5 text-purple-600" />
                    <span>Project Overview</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-semibold">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* Section 2: Problem Statement */}
                <div className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-xs space-y-3.5">
                  <h3 className="text-lg font-display font-extrabold text-red-953 flex items-center gap-2">
                    <Target className="w-5 h-5 text-rose-500" />
                    <span>The Problem</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-semibold">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Section 3: Engineering Approach */}
                <div className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-xs space-y-3.5">
                  <h3 className="text-lg font-display font-extrabold text-[#1E293B] flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-indigo-600" />
                    <span>Solution Architecture & Engineering Approach</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-semibold">
                    {selectedProject.approach}
                  </p>

                  {/* Architecture bullet points */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2.5">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">High-level Workflow Diagram</p>
                    <div className="p-4 bg-gray-50 border border-gray-150 rounded-xl space-y-3.5 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[10px]">1</span>
                        <span className="text-gray-700">Retrieve Context (FAISS Dense Embeddings / Custom human Conversational dataset)</span>
                      </div>
                      <div className="w-0.5 h-3 bg-gray-300 ml-2.5" />
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[10px]">2</span>
                        <span className="text-gray-700">Align Prompt constraints with scripture-based translation indices</span>
                      </div>
                      <div className="w-0.5 h-3 bg-gray-300 ml-2.5" />
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[10px]">3</span>
                        <span className="text-gray-700">Execute Localized Fine-tuned Mistral weight matrices optimization checks</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4: Key Learnings & Future Scopes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Learnings */}
                  <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-xs space-y-3">
                    <h4 className="font-display font-extrabold text-sm text-[#1E293B] flex items-center gap-1.5 uppercase tracking-wide">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Key Challenges</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((c, idx) => (
                        <li key={idx} className="text-xs text-gray-550 leading-relaxed font-semibold list-disc pl-1.5 ml-3">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Future Scope */}
                  <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-xs space-y-3">
                    <h4 className="font-display font-extrabold text-sm text-[#1E293B] flex items-center gap-1.5 uppercase tracking-wide">
                      <Zap className="w-4 h-4 text-amber-500 animate-pulse" />
                      <span>Roadmap / Scope</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.futureScope.map((f, idx) => (
                        <li key={idx} className="text-xs text-gray-550 leading-relaxed font-semibold list-disc pl-1.5 ml-3">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>

              {/* Right Column: Sticky Metadata sidebar */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                
                {/* Meta details list */}
                <div className="bg-white rounded-2xl border border-gray-150 p-5 shadow-xs space-y-4">
                  <h4 className="font-display font-extrabold text-xs text-gray-400 uppercase tracking-widest leading-none">
                    Deployment Metrics
                  </h4>
                  
                  <div className="space-y-3 divide-y divide-gray-100">
                    <div className="pt-0">
                      <span className="text-[10px] font-bold text-gray-400 block font-mono">Primary Category</span>
                      <span className="text-xs font-bold text-gray-800 leading-none">
                        {selectedProject.id === 'counselor' ? 'Generative Artificial Intelligence' : 'NLP Retrieval Augmented Generation'}
                      </span>
                    </div>

                    <div className="pt-3">
                      <span className="text-[10px] font-bold text-gray-400 block font-mono">Source Quality Verification</span>
                      <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>All verification metrics compiled</span>
                      </span>
                    </div>

                    <div className="pt-3">
                      <span className="text-[10px] font-bold text-gray-400 block font-mono">Code Repository</span>
                      <a 
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-purple-650 hover:text-purple-700 flex items-center gap-1.5 mt-0.5"
                      >
                        <Github className="w-4 h-4" />
                        <span>SpurthiMulkanuri/Project</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Outcome highlighting impact checklist */}
                <div className="bg-[#FAF9FC] rounded-2xl border border-gray-200/80 p-5 shadow-xs space-y-3.5">
                  <h4 className="font-display font-extrabold text-xs text-[#1E293B] uppercase tracking-widest leading-none">
                    Impact & Outcomes
                  </h4>
                  
                  <div className="space-y-2.5">
                    {selectedProject.outcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex gap-2.5 items-start">
                        <div className="p-1 rounded-md bg-purple-50 text-purple-600 shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-gray-700 leading-snug">
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}
      </div>

      {/* FOOTER BLOCK */}
      <footer className="py-16 bg-white border-t border-gray-150 relative z-10 font-remaining">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="flex justify-center items-center gap-2 select-none">
            <span className="text-3xl font-cursive tracking-normal bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Spurthi
            </span>
            <span className="text-2xl font-light font-display text-gray-400">
              Mulkanuri
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-semibold max-w-2xl mx-auto">
            "Thank you for exploring my portfolio. I'm always excited to collaborate on innovative AI, Machine Learning, and Data Science projects. Let's create something impactful together."
          </p>

          <div className="w-12 h-[1px] bg-slate-200 mx-auto" />

          <div className="space-y-2">
            <p className="text-xs text-gray-400 font-bold font-mono tracking-tight leading-none">
              © 2026 Spurthi Mulkanuri. All Rights Reserved.
            </p>
            <p className="text-[10px] text-gray-400 font-semibold font-mono tracking-tight">
              Designed & Developed with ❤️ using React, Tailwind CSS & Framer Motion.
            </p>
          </div>
          
        </div>
      </footer>

      {/* DETAILED RESUME MODAL VIEWER */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 bg-[#070611]/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0c0a1e] rounded-3xl border border-gray-200 dark:border-purple-950/40 max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 animate-float-delayed font-remaining max-h-[92vh] flex flex-col">
            
            {/* Close button */}
            <button
              onClick={() => setIsResumeModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-purple-950/50 text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors cursor-pointer z-10"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Stepper / Loading interactive Overlay */}
            <AnimatePresence>
              {downloadingResume && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 dark:bg-[#0c0a1d]/95 backdrop-blur-md rounded-3xl flex flex-col justify-center items-center z-30 p-8 text-center"
                >
                  <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30"
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="absolute inset-3 rounded-full border-t-2 border-b-2 border-purple-600"
                    />
                    <motion.div 
                      className="absolute w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400"
                    >
                      <FileText className="w-5 h-5 animate-pulse" />
                    </motion.div>
                  </div>

                  <div className="space-y-4 max-w-md w-full font-sans">
                    <h3 className="text-sm font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400 font-mono animate-pulse">
                      {resumeDownloadStep === 1 && "Verifying Cryptographic Credentials"}
                      {resumeDownloadStep === 2 && "Synthesizing High-Fidelity PDF"}
                      {resumeDownloadStep === 3 && "Emplacing Vector Typography"}
                    </h3>
                    
                    {/* Visual glowing progress bar */}
                    <div className="h-1.5 w-64 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
                      <motion.div 
                        initial={{ width: "10%" }}
                        animate={{ 
                          width: resumeDownloadStep === 1 ? "40%" : resumeDownloadStep === 2 ? "75%" : "100%" 
                        }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"
                      />
                    </div>

                    <div className="bg-gray-50 dark:bg-[#07050f]/80 rounded-2xl p-4 border border-gray-150 dark:border-purple-950/40 text-[10px] sm:text-xs font-mono leading-relaxed text-gray-500 dark:text-gray-400 text-left space-y-2 max-w-sm mx-auto shadow-sm">
                      <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-purple-950/30">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                        <span className="font-bold text-gray-400 dark:text-gray-500">ENGINE STATION:</span> ACTIVE_BUILD
                      </div>
                      <p className="min-h-[50px] leading-relaxed">
                        {resumeDownloadStep === 1 && (
                          <>
                            &gt; Establishing handshake credentials...<br/>
                            &gt; Validating Spurthi Mulkanuri key pair values...
                          </>
                        )}
                        {resumeDownloadStep === 2 && (
                          <>
                            &gt; Initializing LaTeX file parsing hooks...<br/>
                            &gt; Building 7 section metadata tables...
                          </>
                        )}
                        {resumeDownloadStep === 3 && (
                          <>
                            &gt; Packing compressed binary file components...<br/>
                            &gt; Dispersing print routing vectors...
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Header branding */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-gray-100 dark:border-purple-950/20 gap-4 shrink-0">
              <div className="space-y-1">
                <h3 className="font-display font-extrabold text-gray-900 dark:text-white text-xl">Resume Credentials</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Verified professional summary of Spurthi Mulkanuri.</p>
              </div>
              <button
                onClick={handlePrintResume}
                className="no-print self-start sm:self-center inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-sans text-xs font-bold leading-none shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Download / Save as PDF</span>
              </button>
            </div>

            {/* Structured Page View - Emulating a true printable standard resume layout! */}
            <div className="bg-white text-black p-6 sm:p-10 rounded-2xl border border-gray-200/80 shadow-inner overflow-y-auto select-text font-serif text-[11px] sm:text-xs leading-normal space-y-4 flex-grow text-left">
              {/* Header */}
              <div className="text-center space-y-2 pb-2">
                <h2 className="text-2xl font-bold tracking-wide">Spurthi Mulkanuri</h2>
                <div className="font-sans text-[9px] sm:text-[10px] text-gray-600 flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
                  <span className="flex items-center gap-0.5 whitespace-nowrap">
                    <Phone className="w-2.5 h-2.5 text-gray-400" /> +91-9059538164
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="flex items-center gap-0.5 whitespace-nowrap">
                    <Mail className="w-2.5 h-2.5 text-gray-400" /> spurthimulkanuri@gmail.com
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="flex items-center gap-0.5 whitespace-nowrap">
                    <Github className="w-2.5 h-2.5 text-gray-400" /> SpurthiMulkanuri
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="flex items-center gap-0.5 whitespace-nowrap">
                    <Linkedin className="w-2.5 h-2.5 text-gray-400" /> SpurthiMulkanuri
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-1">
                <h4 className="font-bold text-[11.5px] uppercase tracking-wide border-b border-black pb-0.5">Professional Summary</h4>
                <p className="text-justify text-gray-800 leading-normal">
                  Aspiring Data Scientist with hands-on experience in Machine Learning, Generative AI. Skilled in Python, SQL, data preprocessing, predictive modeling, and AI-driven applications, with a strong passion for solving real-world problems using data and artificial intelligence.
                </p>
              </div>

              {/* Education */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-[11.5px] uppercase tracking-wide border-b border-black pb-0.5">Education</h4>
                <div className="space-y-2 text-gray-800">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="font-bold">• Bachelor of Technology in Computer Science and Engineering</span>
                      <p className="pl-3 text-gray-600 text-[10.5px]">Rajiv Gandhi University of Knowledge Technologies-Basar</p>
                    </div>
                    <div className="text-right whitespace-nowrap shrink-0">
                      <p className="font-mono text-[9px] text-gray-500">2022–2026</p>
                      <p className="font-bold text-[10.5px]">CGPA: 8.54</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="font-bold">• Pre University Course</span>
                      <p className="pl-3 text-gray-600 text-[10.5px]">Rajiv Gandhi University of Knowledge Technologies-Basar</p>
                    </div>
                    <div className="text-right whitespace-nowrap shrink-0">
                      <p className="font-mono text-[9px] text-gray-500">2020–2022</p>
                      <p className="font-bold text-[10.5px]">CGPA: 8.9</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="font-bold">• S.S.C</span>
                      <p className="pl-3 text-gray-600 text-[10.5px]">T.S. Model School-Mandamarri</p>
                    </div>
                    <div className="text-right whitespace-nowrap shrink-0">
                      <p className="font-mono text-[9px] text-gray-500">2020</p>
                      <p className="font-bold text-[10.5px]">CGPA: 10.0</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-[11.5px] uppercase tracking-wide border-b border-black pb-0.5">Experience</h4>
                <div className="space-y-1.5 text-gray-800">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="font-bold">• Data Science Intern</span>
                      <p className="pl-3 italic text-gray-600 text-[10.5px]">Exposys Data Labs company | Real-time project</p>
                    </div>
                    <div className="text-right whitespace-nowrap shrink-0">
                      <p className="font-mono text-[9px] text-gray-500">Current</p>
                      <p className="text-[10px] italic">Remote</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-0.5 leading-normal text-gray-800 text-justify text-[10.5px]">
                    <li>Cleaned and validated 11,000+ records using automated data preprocessing techniques.</li>
                    <li>Developed a Flask dashboard to monitor campaign performance and delivery metrics.</li>
                    <li>Performed EDA and created visual reports using Matplotlib for trend analysis.</li>
                    <li>Used SQL for data storage, querying, and analysis.</li>
                    <li>Applied data validation techniques including format checks and MX verification.</li>
                    <li>Generated dashboards and reports to support business insights and performance tracking.</li>
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-[11.5px] uppercase tracking-wide border-b border-black pb-0.5">Projects</h4>
                <div className="space-y-2.5 text-gray-800">
                  <div className="space-y-0.5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                      <span className="font-bold">• Emotionally Intelligent AI Counselor</span>
                      <span className="italic text-[9px] text-gray-500 font-sans">Python, Hugging Face Transformers, LoRA (PEFT), TRL</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-0.5 leading-normal text-justify text-[10.5px]">
                      <li>Addressed the lack of emotionally supportive AI responses by fine-tuning the Mistral-7B-Instruct model using LoRA (PEFT) and 4-bit NF4 quantization for efficient training on limited hardware.</li>
                      <li>Solved the problem of insufficient empathetic training data by creating a Bhagavad Gita-based Q&A dataset structured in Human–Assistant conversational format.</li>
                      <li>Improved response consistency and supportive behavior through supervised fine-tuning using TRL’s SFTTrainer and carefully designed system prompts.</li>
                      <li>Enhanced empathy and counselling response quality by evaluating and optimizing the model using the Psych8k mental health counselling dataset.</li>
                    </ul>
                  </div>

                  <div className="space-y-0.5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                      <span className="font-bold">• Intelligent Social-to-Lead AI Chatbot</span>
                      <span className="italic text-[9px] text-gray-500 font-sans">Python, LangChain, FAISS, Sentence Transformers, RAG</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-0.5 leading-normal text-justify text-[10.5px]">
                      <li>Developed an AI-powered chatbot to automate customer interaction and support for SaaS platforms.</li>
                      <li>Implemented RAG with FAISS and Sentence Transformers for accurate real-time response generation.</li>
                      <li>Automated lead capture with email validation to collect user details efficiently.</li>
                      <li>Successfully answered pricing queries, detected user intent, and captured customer leads automatically.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skills and Interests */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-[11.5px] uppercase tracking-wide border-b border-black pb-0.5">Skills and Interests</h4>
                <div className="space-y-1 text-gray-800 pl-1 leading-relaxed text-justify text-[10.5px]">
                  <p><strong>Languages:</strong> Python, MySQL</p>
                  <p><strong>Machine Learning:</strong> Regression, Classification, Clustering, Model Evaluation</p>
                  <p><strong>Deep Learning:</strong> Neural Networks, CNN, RNN</p>
                  <p><strong>Generative AI:</strong> Large Language Models (LLMs), Prompt Engineering</p>
                  <p><strong>Data Analysis:</strong> EDA, Data Cleaning, Preprocessing, Data Validation</p>
                  <p><strong>Libraries & Tools:</strong> NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn, Streamlit, Colab, Jupyter Notebook</p>
                  <p><strong>Soft Skills:</strong> Communication, Problem Solving, Teamwork</p>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-[11.5px] uppercase tracking-wide border-b border-black pb-0.5">Achievements</h4>
                <ul className="list-disc pl-5 space-y-0.5 leading-normal text-gray-800 text-justify text-[10.5px]">
                  <li>Selected for the Hire, Train, Deploy (HTD) Program in Data Science by Exposys Data Labs.</li>
                  <li>Secured a rank under 1000 in the Telangana POLYCET entrance examination.</li>
                </ul>
              </div>

              {/* Certificates */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-[11.5px] uppercase tracking-wide border-b border-black pb-0.5">Certificates</h4>
                <ul className="list-disc pl-5 space-y-0.5 leading-normal text-gray-800 text-justify text-[10.5px]">
                  <li>Received certification for successfully completing the 3-Month Data Science Skill Development Program conducted by Swinfy Solutions.</li>
                </ul>
              </div>
            </div>

            {/* Footer buttons */}
            <div className="pt-4 border-t border-gray-100 dark:border-purple-950/20 flex justify-end gap-3 no-print shrink-0">
              <button
                onClick={() => setIsResumeModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-gray-50 dark:bg-purple-950/20 hover:bg-gray-100 dark:hover:bg-purple-900/30 border border-gray-200 dark:border-purple-900/20 text-gray-650 dark:text-gray-300 text-xs font-bold transition-all cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={handlePrintResume}
                className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold text-xs shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                Print Resume Sheet
              </button>
            </div>

          </div>
        </div>
      )}

      {/* PERFECT A4 PRINTABLE RAW CONTAINER HELD SECURELY OUTSIDE VIEWPORT (hidden normally, visible on print) */}
      <div id="resume-print-container" className="hidden print:block text-black font-serif text-[11px] bg-white leading-normal space-y-4">
        {/* Header */}
        <div className="text-center space-y-1 pb-2">
          <h2 className="text-[22px] font-bold tracking-wide">Spurthi Mulkanuri</h2>
          <div className="font-sans text-[9px] text-[#334155] flex justify-center items-center gap-x-3">
            <span>Phone: +91-9059538164</span>
            <span>•</span>
            <span>Email: spurthimulkanuri@gmail.com</span>
            <span>•</span>
            <span>GitHub: SpurthiMulkanuri</span>
            <span>•</span>
            <span>LinkedIn: SpurthiMulkanuri</span>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-1">
          <h4 className="font-bold text-[11px] uppercase tracking-wide border-b border-black pb-0.5">Professional Summary</h4>
          <p className="text-justify text-gray-800 leading-normal">
            Aspiring Data Scientist with hands-on experience in Machine Learning, Generative AI. Skilled in Python, SQL, data preprocessing, predictive modeling, and AI-driven applications, with a strong passion for solving real-world problems using data and artificial intelligence.
          </p>
        </div>

        {/* Education */}
        <div className="space-y-1.5">
          <h4 className="font-bold text-[11px] uppercase tracking-wide border-b border-black pb-0.5">Education</h4>
          <div className="space-y-2 text-gray-800">
            <div className="flex justify-between items-start gap-2">
              <div>
                <span className="font-bold">• Bachelor of Technology in Computer Science and Engineering</span>
                <p className="pl-3 text-gray-650">Rajiv Gandhi University of Knowledge Technologies-Basar</p>
              </div>
              <div className="text-right whitespace-nowrap shrink-0">
                <p className="font-mono text-[8.5px]">2022–2026</p>
                <p className="font-bold text-[10px]">CGPA: 8.54</p>
              </div>
            </div>
            <div className="flex justify-between items-start gap-2">
              <div>
                <span className="font-bold">• Pre University Course</span>
                <p className="pl-3 text-gray-650">Rajiv Gandhi University of Knowledge Technologies-Basar</p>
              </div>
              <div className="text-right whitespace-nowrap shrink-0">
                <p className="font-mono text-[8.5px]">2020–2022</p>
                <p className="font-bold text-[10px]">CGPA: 8.9</p>
              </div>
            </div>
            <div className="flex justify-between items-start gap-2">
              <div>
                <span className="font-bold">• S.S.C</span>
                <p className="pl-3 text-gray-650">T.S. Model School-Mandamarri</p>
              </div>
              <div className="text-right whitespace-nowrap shrink-0">
                <p className="font-mono text-[8.5px]">2020</p>
                <p className="font-bold text-[10px]">CGPA: 10.0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-1.5">
          <h4 className="font-bold text-[11px] uppercase tracking-wide border-b border-black pb-0.5">Experience</h4>
          <div className="space-y-1.5 text-gray-800">
            <div className="flex justify-between items-start gap-2">
              <div>
                <span className="font-bold">• Data Science Intern</span>
                <p className="pl-3 italic text-gray-600">Exposys Data Labs company | Real-time project</p>
              </div>
              <div className="text-right whitespace-nowrap shrink-0">
                <p className="font-mono text-[8.5px]">Current</p>
                <p className="text-[9.5px] italic">Remote</p>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-0.5 leading-normal text-gray-800 text-justify">
              <li>Cleaned and validated 11,000+ records using automated data preprocessing techniques.</li>
              <li>Developed a Flask dashboard to monitor campaign performance and delivery metrics.</li>
              <li>Performed EDA and created visual reports using Matplotlib for trend analysis.</li>
              <li>Used SQL for data storage, querying, and analysis.</li>
              <li>Applied data validation techniques including format checks and MX verification.</li>
              <li>Generated dashboards and reports to support business insights and performance tracking.</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-1.5">
          <h4 className="font-bold text-[11px] uppercase tracking-wide border-b border-black pb-0.5">Projects</h4>
          <div className="space-y-2.5 text-gray-800">
            <div className="space-y-0.5">
              <div className="flex justify-between items-baseline gap-2">
                <span className="font-bold">• Emotionally Intelligent AI Counselor</span>
                <span className="italic text-[9.5px] text-gray-600 font-sans">Python, Hugging Face Transformers, LoRA (PEFT), TRL</span>
              </div>
              <ul className="list-disc pl-5 space-y-0.5 leading-normal text-justify">
                <li>Addressed the lack of emotionally supportive AI responses by fine-tuning the Mistral-7B-Instruct model using LoRA (PEFT) and 4-bit NF4 quantization for efficient training on limited hardware.</li>
                <li>Solved the problem of insufficient empathetic training data by creating a Bhagavad Gita-based Q&A dataset structured in Human–Assistant conversational format.</li>
                <li>Improved response consistency and supportive behavior through supervised fine-tuning using TRL’s SFTTrainer and carefully designed system prompts.</li>
                <li>Enhanced empathy and counselling response quality by evaluating and optimizing the model using the Psych8k mental health counselling dataset.</li>
              </ul>
            </div>

            <div className="space-y-0.5">
              <div className="flex justify-between items-baseline gap-2">
                <span className="font-bold">• Intelligent Social-to-Lead AI Chatbot</span>
                <span className="italic text-[9.5px] text-gray-600 font-sans">Python, LangChain, FAISS, Sentence Transformers, RAG</span>
              </div>
              <ul className="list-disc pl-5 space-y-0.5 leading-normal text-justify">
                <li>Developed an AI-powered chatbot to automate customer interaction and support for SaaS platforms.</li>
                <li>Implemented RAG with FAISS and Sentence Transformers for accurate real-time response generation.</li>
                <li>Automated lead capture with email validation to collect user details efficiently.</li>
                <li>Successfully answered pricing queries, detected user intent, and captured customer leads automatically.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills and Interests */}
        <div className="space-y-1.5">
          <h4 className="font-bold text-[11px] uppercase tracking-wide border-b border-black pb-0.5">Skills and Interests</h4>
          <div className="space-y-1 text-gray-800 pl-1 leading-relaxed text-justify">
            <p><strong>Languages:</strong> Python, MySQL</p>
            <p><strong>Machine Learning:</strong> Regression, Classification, Clustering, Model Evaluation</p>
            <p><strong>Deep Learning:</strong> Neural Networks, CNN, RNN</p>
            <p><strong>Generative AI:</strong> Large Language Models (LLMs), Prompt Engineering</p>
            <p><strong>Data Analysis:</strong> EDA, Data Cleaning, Preprocessing, Data Validation</p>
            <p><strong>Libraries & Tools:</strong> NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn, Streamlit, Colab, Jupyter Notebook</p>
            <p><strong>Soft Skills:</strong> Communication, Problem Solving, Teamwork</p>
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-1">
          <h4 className="font-bold text-[11px] uppercase tracking-wide border-b border-black pb-0.5">Achievements</h4>
          <ul className="list-disc pl-5 space-y-0.5 leading-normal text-gray-800 text-justify">
            <li>Selected for the Hire, Train, Deploy (HTD) Program in Data Science by Exposys Data Labs.</li>
            <li>Secured a rank under 1000 in the Telangana POLYCET entrance examination.</li>
          </ul>
        </div>

        {/* Certificates */}
        <div className="space-y-1">
          <h4 className="font-bold text-[11px] uppercase tracking-wide border-b border-black pb-0.5">Certificates</h4>
          <ul className="list-disc pl-5 space-y-0.5 leading-normal text-gray-800 text-justify">
            <li>Received certification for successfully completing the 3-Month Data Science Skill Development Program conducted by Swinfy Solutions.</li>
          </ul>
        </div>
      </div>

    </motion.div>
    )}
    </AnimatePresence>
  );

  // Wrapper handles transition tracking
  function handleProjectDetailOpen(project: Project) {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
