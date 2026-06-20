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

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [fadeRole, setFadeRole] = useState(true);

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
    
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormState({ name: '', email: '', company: '', message: '' });
      }, 5000);
    }, 1200);
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
    <div className="min-h-screen bg-[#FAF9FC] dark:bg-[#07060F] text-[#1E293B] dark:text-[#E2E8F0] font-sans selection:bg-purple-100 dark:selection:bg-purple-900 selection:text-purple-950 dark:selection:text-purple-100 overflow-x-hidden transition-colors duration-300">
      {/* Dynamic decorative visual glow rings for high premium texture */}
      <div className="absolute top-0 left-0 w-full h-[650px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[550px] h-[550px] rounded-full bg-purple-200/40 dark:bg-purple-950/10 blur-[130px] transition-colors duration-300" />
        <div className="absolute top-[25%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-200/30 dark:bg-blue-950/10 blur-[110px] transition-colors duration-300" />
        <div className="absolute top-[45%] right-[15%] w-[350px] h-[350px] rounded-full bg-pink-100/20 dark:bg-pink-950/10 blur-[100px] transition-colors duration-300" />
      </div>

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
            <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center py-10 md:py-16 z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
                  <div className="relative w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] rounded-full bg-gradient-to-tr from-purple-500/20 via-pink-400/10 to-blue-500/20 p-2 shadow-2xl animate-float">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden relative border-4 border-white flex flex-col justify-center items-center">
                      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/10 via-white/5 to-purple-50/60" />
                      
                      {/* Premium Portrait Art Illustration */}
                      <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-pink-500/15 flex items-center justify-center p-3 relative">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-inner relative overflow-hidden">
                          {/* Inner professional smart profile symbol */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 flex flex-col items-center justify-center text-white font-hero-display select-none">
                            <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">SM</span>
                            <span className="text-[10px] sm:text-xs font-mono tracking-wider font-semibold opacity-90 mt-1">DATA SCIENCE</span>
                          </div>
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
            </section>

            {/* WHAT I DO SECTION - Pristine styled white horizontal blocks matching image */}
            <section className="py-14 bg-[#FAF9FC] relative z-10 border-t border-gray-200/50">
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
                  <div className="bg-white rounded-2xl border border-gray-150 p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-orange-500 flex items-center justify-center shrink-0 shadow-xs">
                      <Database className="w-5.5 h-5.5" />
                    </div>
                    <div className="leading-tight">
                      <h3 className="font-display font-extrabold text-[#1E293B] text-sm tracking-tight">Data Analysis</h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5 leading-snug">Extracting meaningful insights and strategic matrices from unstructured data.</p>
                    </div>
                  </div>

                  {/* Card 2: Machine Learning */}
                  <div className="bg-white rounded-2xl border border-gray-150 p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-105 text-blue-500 flex items-center justify-center shrink-0 shadow-xs">
                      <Cpu className="w-5.5 h-5.5 animate-pulse" />
                    </div>
                    <div className="leading-tight">
                      <h3 className="font-display font-extrabold text-[#1E293B] text-sm tracking-tight">Machine Learning</h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5 leading-snug">Building and scaling robust predictive models that make tangible impact.</p>
                    </div>
                  </div>

                  {/* Card 3: Deep Learning */}
                  <div className="bg-white rounded-2xl border border-gray-150 p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-105 text-purple-500 flex items-center justify-center shrink-0 shadow-xs">
                      <Layers className="w-5.5 h-5.5" />
                    </div>
                    <div className="leading-tight">
                      <h3 className="font-display font-extrabold text-[#1E293B] text-sm tracking-tight">Deep Learning</h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5 leading-snug">Creating deep intelligent models, spatial neural layers, and sequential NLP.</p>
                    </div>
                  </div>

                  {/* Card 4: Generative AI */}
                  <div className="bg-white rounded-2xl border border-gray-150 p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-110 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                      <Sparkles className="w-5.5 h-5.5" />
                    </div>
                    <div className="leading-tight">
                      <h3 className="font-display font-extrabold text-[#1E293B] text-sm tracking-tight">Generative AI</h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5 leading-snug">Exploring fine-tunes, context RAG frameworks, and prompt logic models.</p>
                    </div>
                  </div>

                  {/* Card 5: Visualization */}
                  <div className="bg-white rounded-2xl border border-gray-150 p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-105 text-pink-500 flex items-center justify-center shrink-0 shadow-xs">
                      <BarChart2 className="w-5.5 h-5.5" />
                    </div>
                    <div className="leading-tight">
                      <h3 className="font-display font-extrabold text-[#1E293B] text-sm tracking-tight">Visualization</h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5 leading-snug">Converting highly nested query response parameters into stellar visuals.</p>
                    </div>
                  </div>

                  {/* Card 6: Problem Solving */}
                  <div className="bg-white rounded-2xl border border-gray-150 p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-yellow-50 border border-yellow-105 text-yellow-600 flex items-center justify-center shrink-0 shadow-xs">
                      <Target className="w-5.5 h-5.5" />
                    </div>
                    <div className="leading-tight">
                      <h3 className="font-display font-extrabold text-[#1E293B] text-sm tracking-tight">Problem Solving</h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5 leading-snug">Solving actual complex problems via math algorithms and efficient script logic.</p>
                    </div>
                  </div>

                </div>

              </div>
            </section>

            {/* FEATURED PROJECTS SECTION - Highly styled cards replicating image styling */}
            <section id="projects" className="py-20 bg-white relative z-10 border-t border-gray-150">
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

                              {/* Intermediate Meditating character (Beautiful CSS Vector graphic represented elegantly) */}
                              <div className="absolute left-[54%] top-[-8px] -translate-x-1/2 w-28 h-28 opacity-85 pointer-events-none scale-110 flex flex-col items-center justify-center">
                                {/* Vector illustration of meditating head and shoulders */}
                                <div className="w-10 h-10 rounded-full bg-[#fce7f3] border-2 border-purple-200 relative shadow-sm overflow-hidden flex items-center justify-center bg-[linear-gradient(to_bottom,transparent_30%,#e9d5ff_30%)]">
                                  <div className="w-8 h-8 rounded-full bg-[#fae8ff] mt-auto relative" />
                                </div>
                                <div className="w-14 h-8 bg-[#f5f3ff] rounded-t-3xl border-2 border-purple-100 shadow-sm mt-0.5 flex items-center justify-center overflow-hidden">
                                  <div className="w-3 h-3 rounded-full bg-purple-400 mt-2 animate-pulse" />
                                </div>
                                <div className="w-16 h-1 bg-purple-300 rounded-full blur-[1px] mt-1 opacity-60" />
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

                              {/* Center column: Active AI assistant chatbot working at desk */}
                              <div className="col-span-4 flex flex-col items-center justify-center bg-white/60 p-2 rounded-2xl border border-white shadow-xs text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-100/10" />
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-xl shadow-md border-2 border-white animate-float z-10">🤖</div>
                                <span className="text-[8px] font-mono font-extrabold text-[#1E293B] uppercase tracking-wider mt-1.5 z-10 leading-none">RAG BOT</span>
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
            </section>

            {/* SKILLS SECTION */}
            <Skills isDarkMode={isDarkMode} />

            {/* EXPERIENCE SECTION - Hybrid modern card timeline */}
            <section id="experience" className="py-20 bg-white relative z-10 border-b border-gray-200/50">
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
            </section>

            {/* CERTIFICATIONS & ACHIEVEMENTS BENTO */}
            <section className="py-20 bg-[#FAF9FC] relative z-10">
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
            </section>

            {/* CONTACT MESSAGE PORTAL */}
            <section id="contact" className="py-20 bg-white relative z-10 border-t border-gray-150">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
                  
                  {/* Left Column - Direct contact information */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div className="space-y-5">
                      <span className="inline-flex items-center gap-1 py-1 px-3 rounded-full bg-purple-50 text-purple-700 text-[10.5px] font-bold uppercase tracking-wider">
                        <Mail className="w-3.5 h-3.5" />
                        <span>Communication routing</span>
                      </span>
                      
                      <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 tracking-tight leading-tight">
                        Reach Out
                      </h2>
                      
                      <p className="text-xs sm:text-sm text-gray-550 leading-relaxed font-semibold">
                        Actively screening placement parameters, academic collaborations, graduate data engineering tracks, and professional machine learning scopes.
                      </p>

                      <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0 shadow-xs">
                            <Mail className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-mono">Email Direct</p>
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-bold text-gray-800 hover:text-purple-600 transition-colors">
                              {PERSONAL_INFO.email}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0 shadow-xs">
                            <Phone className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-mono">Phone Direct</p>
                            <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-bold text-gray-800 hover:text-teal-600 transition-colors">
                              {PERSONAL_INFO.phone}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 shadow-xs">
                            <MapPin className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-mono">Corporate Station</p>
                            <p className="text-xs sm:text-sm font-bold text-gray-800">
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
                        className="px-4.5 py-2 rounded-xl bg-slate-50 border border-gray-200 hover:border-blue-500 text-gray-600 hover:text-blue-600 font-sans text-xs font-bold leading-none flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                        <span>LinkedIn</span>
                      </a>
                      <a 
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4.5 py-2 rounded-xl bg-slate-50 border border-gray-200 hover:border-black text-gray-600 hover:text-black font-sans text-xs font-bold leading-none flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5 text-gray-900" />
                        <span>GitHub Profile</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column - Validation Portal Form */}
                  <div className="lg:col-span-7">
                    <div className="bg-[#FAF9FC] rounded-[24px] border border-gray-200 p-6 sm:p-8 shadow-xs">
                      <div>
                        <h3 className="font-display font-extrabold text-gray-900 text-lg leading-none">Transmission Interface</h3>
                        <p className="text-xs text-gray-400 mt-1 font-medium italic">Message requests are parsed via localized regex checks.</p>
                      </div>

                      <form onSubmit={handleContactSubmit} className="space-y-4 pt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-mono">Your Name *</label>
                            <input 
                              type="text" 
                              required
                              placeholder="Name"
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-xs sm:text-sm font-semibold transition-all"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-mono">Email Address *</label>
                            <input 
                              type="email" 
                              required
                              placeholder="Email"
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-xs sm:text-sm font-semibold transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-mono">Affiliation / Organization</label>
                          <input 
                            type="text" 
                            placeholder="e.g. Swinfy Solutions"
                            value={formState.company}
                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-xs sm:text-sm font-semibold transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-mono">Message Scope *</label>
                          <textarea 
                            rows={4}
                            required
                            placeholder="State collaboration requirements..."
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-xs sm:text-sm font-semibold transition-all resize-none"
                          />
                        </div>

                        {formSubmitted && (
                          <div className="p-3 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold rounded-xl flex items-center gap-2.5 animate-pulse-subtle">
                            <Check className="w-4 h-4 text-teal-600 shrink-0" />
                            <span>Inquiry logged successfully. Auto response is active.</span>
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={submitting}
                          id="btn-contact-submit"
                          className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:brightness-110 duration-300 transition-all cursor-pointer disabled:opacity-75 disabled:pointer-events-none"
                        >
                          {submitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                              <span>Routing signal...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Transmit Signal</span>
                            </>
                          )}
                        </button>
                      </form>

                    </div>
                  </div>

                </div>

              </div>
            </section>
          </main>
        ) : (
          /* =========================================================================
             ============================ PROJECT DETAIL VIEW ========================
             ========================================================================= */
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
      <footer className="py-16 bg-white border-t border-gray-150 relative z-10">
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
        <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-gray-200 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-5 animate-float-delayed">
            
            <button
              onClick={() => setIsResumeModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pb-2 border-b border-gray-100">
              <h3 className="font-display font-extrabold text-[#1E293B] text-xl">Resume Credentials</h3>
              <p className="text-xs text-gray-500 font-medium">Verified professional summary of Spurthi Mulkanuri.</p>
            </div>

            {/* Structured view matching image data */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 text-xs">
              
              <div className="space-y-1">
                <p className="font-extrabold text-purple-700 uppercase tracking-widest text-[10px] font-mono leading-none">Education</p>
                <div className="p-3 bg-[#FAF9FC] rounded-xl border border-gray-100 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <p className="font-bold text-gray-900">B.Tech in Artificial Intelligence & Data Science</p>
                    <span className="text-gray-400 font-mono font-bold">CGPA: 8.9</span>
                  </div>
                  <p className="text-gray-500">Tier 1 Engineering Institution Affiliation</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="font-extrabold text-purple-700 uppercase tracking-widest text-[10px] font-mono leading-none">Expertise Coordinates</p>
                <p className="text-gray-600 leading-relaxed font-semibold">
                  Python, SQL Database Management, Exploratory Analysis, Machine Learning classifications, Deep Neural Convolution mappings, Hugging Face double quantization, LoRA finetuning setups.
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-extrabold text-purple-700 uppercase tracking-widest text-[10px] font-mono leading-none">Internship Summary</p>
                <p className="text-gray-600 leading-relaxed font-semibold">
                  Interned at Exposys Data Labs completing 11,000+ data storage sanitization entries, designing flask routing monitors, and executing robust pipeline performance structures.
                </p>
              </div>

            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
              <button
                onClick={() => setIsResumeModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 text-xs font-bold cursor-pointer"
              >
                Close
              </button>
              
              <button
                onClick={() => {
                  alert("Opening verified printable PDF document stream.");
                  setIsResumeModalOpen(false);
                }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold text-xs shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                Print PDF
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );

  // Wrapper handles transition tracking
  function handleProjectDetailOpen(project: Project) {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
