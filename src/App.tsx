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

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [fadeRole, setFadeRole] = useState(true);
  
  // Contact form state
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Active skills filter category
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('All');

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
    <div className="min-h-screen bg-[#FAF9FC] text-[#1E293B] font-sans selection:bg-purple-100 selection:text-purple-950 overflow-x-hidden">
      {/* Dynamic decorative visual glow rings for high premium texture */}
      <div className="absolute top-0 left-0 w-full h-[650px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[550px] h-[550px] rounded-full bg-purple-200/40 blur-[130px]" />
        <div className="absolute top-[25%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-200/30 blur-[110px]" />
        <div className="absolute top-[45%] right-[15%] w-[350px] h-[350px] rounded-full bg-pink-100/20 blur-[100px]" />
      </div>

      {/* Navigation */}
      <Navbar 
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onOpenResume={() => setIsResumeModalOpen(true)}
        isProjectView={selectedProject !== null}
        onBackToHome={() => setSelectedProject(null)}
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
                    <span className="text-xl font-extrabold text-blue-900 tracking-tight font-display">Hi, I'm</span>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-gray-900 leading-none">
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
                          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 flex flex-col items-center justify-center text-white font-display select-none">
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
                      {/* Project Visual block header with realistic, highly relevant mockups and Unsplash photos */}
                      <div className="relative pb-[58%] overflow-hidden bg-slate-900 border-b border-gray-200 flex items-center justify-center group/img">
                        
                        {index === 0 ? (
                          /* Project 1: Counselor Visuals featuring serene nature-mindfulness photography & chatbot overlays */
                          <div className="absolute inset-0 w-full h-full">
                            {/* Realistic related image background */}
                            <img 
                              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80" 
                              alt="Mindfulness and EQ Counseling" 
                              className="w-full h-full object-cover brightness-[0.4] contrast-[1.05] group-hover/img:scale-105 transition-transform duration-700"
                              referrerPolicy="no-referrer"
                            />
                            {/* Dark/violet cybernetic overlay layer */}
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/85 via-slate-900/40 to-transparent" />
                            
                            {/* Bespoke interactive counselor chat simulator mockup */}
                            <div className="absolute inset-x-4 bottom-4 top-4 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md p-3.5 flex flex-col justify-between text-white select-none shadow-2xl">
                              <div className="flex justify-between items-center pb-1.5 border-b border-white/10">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                  <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-purple-200">EQ Mistral-7B Session</span>
                                </div>
                                <span className="px-1.5 py-0.5 rounded bg-purple-500/30 text-[8px] font-mono font-extrabold uppercase text-purple-300">Active Fine-tune</span>
                              </div>

                              {/* Simulated Chat Dialogue */}
                              <div className="space-y-1.5 my-auto overflow-hidden">
                                <div className="flex items-start gap-1.5">
                                  <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-[10px] shrink-0 text-purple-800 font-bold font-sans">US</div>
                                  <div className="bg-white/15 px-2.5 py-1 rounded-r-lg rounded-bl-lg max-w-[80%]">
                                    <p className="text-[9.5px] leading-snug font-medium text-slate-100">"I'm feeling burnt out by massive data pipelines today..."</p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start gap-1.5 justify-end">
                                  <div className="bg-purple-600/70 px-2.5 py-1 rounded-l-lg rounded-br-lg max-w-[80%] border border-purple-500/30 text-right">
                                    <p className="text-[9.5px] leading-snug font-medium text-white">"I hear you. Let's step back, breathe deeply, and align."</p>
                                    <span className="text-[7.5px] text-purple-200 font-mono italic block mt-0.5">Sentiment score: 0.94 EQ Stable</span>
                                  </div>
                                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center text-[9px] shrink-0 font-bold">🧘‍♀️</div>
                                </div>
                              </div>

                              {/* Terminal Status line */}
                              <div className="flex justify-between items-center text-[8px] font-mono text-purple-300 opacity-90">
                                <span>🚀 LoRA Adaptor Active</span>
                                <span>Response: 184ms</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Project 2: Social-to-Lead chatbot visuals featuring a premium tech analytics background & pipeline overlay */
                          <div className="absolute inset-0 w-full h-full">
                            {/* Realistic related image background */}
                            <img 
                              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                              alt="Analytical Sales conversion dashboard" 
                              className="w-full h-full object-cover brightness-[0.35] contrast-[1.1] group-hover/img:scale-105 transition-transform duration-700"
                              referrerPolicy="no-referrer"
                            />
                            {/* Dark/cyan cybernetic overlay layer */}
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/85 via-slate-900/40 to-transparent" />

                            {/* Automation Pipeline mockup card */}
                            <div className="absolute inset-x-4 bottom-4 top-4 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md p-3.5 flex flex-col justify-between text-white select-none shadow-2xl">
                              <div className="flex justify-between items-center pb-1.5 border-b border-white/10">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                  <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-cyan-200">AI Lead Extraction Pipeline</span>
                                </div>
                                <span className="px-1.5 py-0.5 rounded bg-cyan-500/30 text-[8px] font-mono font-extrabold uppercase text-cyan-300">CRM Enabled</span>
                              </div>

                              {/* Automated Pipeline execution status log */}
                              <div className="space-y-1 my-auto font-mono text-[9px] text-slate-300">
                                <div className="flex items-center justify-between bg-white/5 p-1 rounded border border-white/5">
                                  <span className="text-cyan-300">⚡ Input query</span>
                                  <span className="text-white">"Need python developer for next-gen ML"</span>
                                </div>
                                <div className="flex items-center justify-between bg-white/5 p-1 rounded border border-white/5">
                                  <span className="text-amber-300">🎯 Intended Lead</span>
                                  <span className="text-white">@spurthi_ml_pro</span>
                                </div>
                                <div className="flex items-center justify-between bg-white/5 p-1 rounded border border-white/5">
                                  <span className="text-emerald-300">📦 FAISS Database</span>
                                  <span className="text-emerald-400">Match found & Saved!</span>
                                </div>
                              </div>

                              {/* Statistics indicators at bottom */}
                              <div className="flex justify-between items-center text-[7.5px] font-mono text-cyan-300">
                                <div>Efficiency: <span className="text-white font-extrabold">98.4%</span></div>
                                <div>Extracted Leads: <span className="text-white font-extrabold">11,204+</span></div>
                              </div>
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
            <section id="skills" className="py-20 bg-[#FAF9FC] border-y border-gray-200/50 relative overflow-hidden z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                
                {/* Elegant Segment Header mirroring the image layout exactly */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                      <span>MY EXPERTISE</span>
                    </div>
                    <h2 className="text-3.5xl sm:text-4xl font-display font-black text-gray-900 tracking-tight">
                      Skills <span className="text-purple-600">& Technologies</span>
                    </h2>
                    <p className="text-gray-500 font-medium text-xs sm:text-sm max-w-xl leading-relaxed">
                      A collection of tools, frameworks and technologies I work with to build intelligent and impactful data-driven solutions.
                    </p>
                  </div>

                  {/* "Always Learning" side card block */}
                  <div className="bg-white rounded-[20px] border border-gray-150 p-4.5 flex items-center gap-4.5 shadow-sm hover:shadow-md transition-all duration-300 max-w-sm w-full shrink-0 relative overflow-hidden group">
                    <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-blue-500/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform" />
                    <div className="w-13 h-13 rounded-full bg-blue-50/70 border-2 border-blue-100/50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm relative group-hover:bg-blue-100/20 transition-all duration-300">
                      <svg className="w-6 h-6 text-blue-600 animate-pulse-subtle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.663 17h4.673M12 3a7 7 0 00-7 7c0 2.22 1.03 4.193 2.628 5.486a4 4 0 011.372 3.014V19h6v-.5h-.005a4 4 0 011.378-3.014A7 7 0 0012 3z" />
                      </svg>
                    </div>
                    <div className="leading-snug">
                      <h4 className="font-display font-extrabold text-[#1E293B] text-sm tracking-tight flex items-center gap-1.5">
                        Always Learning
                        <span className="animate-bounce text-xs">🚀</span>
                      </h4>
                      <p className="text-[11px] text-gray-450 leading-relaxed font-semibold mt-0.5">
                        I love exploring new technologies and building better solutions every day.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive Category Filter Menu */}
                <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-gray-150/50">
                  {['All', 'Languages', 'Machine Learning', 'Deep Learning', 'Generative AI', 'Data Analysis', 'Data Visualization', 'Databases', 'Tools & Platforms'].map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedSkillCategory(category)}
                      className={`px-4 py-1.5 rounded-full text-[10.5px] font-extrabold tracking-wide transition-all uppercase cursor-pointer ${
                        selectedSkillCategory === category
                          ? 'bg-purple-600 text-white shadow-sm scale-102 font-extrabold'
                          : 'bg-white hover:bg-gray-50 text-gray-500 hover:text-gray-900 border border-gray-250'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Skills Bento Grid Dashboard - 4-columns layout matching exactly the image */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                  {/* 1. Python Card */}
                  {(selectedSkillCategory === 'All' || selectedSkillCategory === 'Languages') && (
                    <div className="bg-white rounded-3xl border border-gray-150/90 p-5.5 shadow-2xs hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden min-h-[250px]">
                      <div className="relative z-10 flex flex-col h-full justify-between">
                        {/* Header */}
                        <div className="flex items-center gap-2 pb-2 mb-3 border-b border-purple-50">
                          <div className="p-1 px-2 rounded-lg bg-purple-50 text-purple-600 font-bold text-[10px] tracking-wide flex items-center gap-1">
                            <span className="text-[11px]">{"</>"}</span>
                            <span>Languages</span>
                          </div>
                        </div>

                        {/* Centered Logo element */}
                        <div className="h-20 flex items-center justify-center my-2 select-none">
                          <svg className="w-13 h-13 animate-float" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 6.13 2.5 6.13 4.5v2.2h5.87v.6H3.64C1.64 7.3 1 8.2 1 12.1c0 3.9.78 4.8 2.78 4.8H6.1v-2.2c0-3.3 2.2-4.6 5.4-4.6H17.37V4.5C17.37 2.5 16.52 2 12 2z" fill="#306998" />
                            <path d="M12 22c5.52 0 5.87-.5 5.87-2.5v-2.2H12v-.6h8.36c2 0 2.64-.9 2.64-4.8 0-3.9-.78-4.8-2.78-4.8H17.9v2.2c0 3.3-2.2 4.6-5.4 4.6H6.63v5.6c0 2 1.15 2.5 5.37 2.5z" fill="#FFE873" />
                            <circle cx="9" cy="5.5" r="0.75" fill="#fff" />
                            <circle cx="15" cy="18.5" r="0.75" fill="#a5f3fc" />
                          </svg>
                        </div>

                        {/* Bottom stats & details */}
                        <div className="mt-auto space-y-2 relative pt-2">
                          <div className="text-center">
                            <div className="text-2xl font-black text-purple-650 tracking-tight">95%</div>
                            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Python</div>
                          </div>
                          
                          {/* Continuous animating progress bar */}
                          <div className="h-1.5 rounded-full bg-purple-50 overflow-hidden relative shadow-inner">
                            <div className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 animate-fluid-flow" style={{ width: '95%' }} />
                          </div>
                        </div>
                      </div>

                      {/* Wave overlay background */}
                      <svg className="absolute bottom-0 left-0 w-full pointer-events-none z-0 opacity-70" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,160 C320,240 640,120 960,200 C1280,280 1440,180 1440,180 L1440,320 L0,320 Z" fill="#c084fc" fillOpacity="0.14" />
                        <path d="M0,230 C360,280 720,220 1080,260 C1440,300 1440,320 1440,320 L0,320 Z" fill="#818cf8" fillOpacity="0.08" />
                      </svg>
                    </div>
                  )}

                  {/* 2. Scikit-learn Card */}
                  {(selectedSkillCategory === 'All' || selectedSkillCategory === 'Machine Learning') && (
                    <div className="bg-white rounded-3xl border border-gray-150/90 p-5.5 shadow-2xs hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden min-h-[250px]">
                      <div className="relative z-10 flex flex-col h-full justify-between">
                        {/* Header */}
                        <div className="flex items-center gap-2 pb-2 mb-3 border-b border-pink-50">
                          <div className="p-1 px-2 rounded-lg bg-pink-50 text-pink-600 font-bold text-[10px] tracking-wide flex items-center gap-1">
                            <span>🧠</span>
                            <span>Machine Learning</span>
                          </div>
                        </div>

                        {/* Centered Logo element */}
                        <div className="h-20 flex items-center justify-center my-2 select-none">
                          <svg className="h-12 w-32 animate-float-delayed" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="22" cy="18" r="8" fill="#3499CD" />
                            <circle cx="36" cy="22" r="10" fill="#F89938" />
                            <path d="M22 18Q29 10 36 22" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                            <text x="50" y="22" fill="#1e293b" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">scikit</text>
                            <text x="50" y="32" fill="#ec4899" fontSize="7.5" fontWeight="extrabold" fontFamily="monospace">learn</text>
                          </svg>
                        </div>

                        {/* Bottom stats & details */}
                        <div className="mt-auto space-y-2 relative pt-2">
                          <div className="text-center">
                            <div className="text-2xl font-black text-pink-600 tracking-tight">90%</div>
                            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Scikit-learn</div>
                          </div>
                          
                          {/* Continuous animating progress bar */}
                          <div className="h-1.5 rounded-full bg-pink-50 overflow-hidden relative shadow-inner">
                            <div className="h-full rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 animate-fluid-flow" style={{ width: '90%' }} />
                          </div>
                        </div>
                      </div>

                      {/* Wave overlay background */}
                      <svg className="absolute bottom-0 left-0 w-full pointer-events-none z-0 opacity-70" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,180 C320,120 640,240 960,160 C1280,80 1440,200 1440,200 L1440,320 L0,320 Z" fill="#f472b6" fillOpacity="0.12" />
                        <path d="M0,220 C360,260 720,200 1080,240 C1440,280 1440,320 1440,320 L0,320 Z" fill="#fda4af" fillOpacity="0.08" />
                      </svg>
                    </div>
                  )}

                  {/* 3. TensorFlow Card */}
                  {(selectedSkillCategory === 'All' || selectedSkillCategory === 'Deep Learning') && (
                    <div className="bg-white rounded-3xl border border-gray-150/90 p-5.5 shadow-2xs hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden min-h-[250px]">
                      <div className="relative z-10 flex flex-col h-full justify-between">
                        {/* Header */}
                        <div className="flex items-center gap-2 pb-2 mb-3 border-b border-amber-50">
                          <div className="p-1 px-2 rounded-lg bg-amber-50 text-amber-600 font-bold text-[10px] tracking-wide flex items-center gap-1">
                            <span>⚛️</span>
                            <span>Deep Learning</span>
                          </div>
                        </div>

                        {/* Centered Logo element */}
                        <div className="h-20 flex items-center justify-center my-2 select-none">
                          <svg className="w-13 h-13 animate-float" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2z" fill="#FF6F00" opacity="0.1" />
                            <path d="M12 3.5L5 7.5v9l7 4 7-4v-9L12 3.5z" fill="#FF6F00" />
                            <path d="M12 3.5v17l7-4v-9l-7-4z" fill="#FFA000" />
                            <path d="M8 8.5h8v2H8v-2zM11 10.5h2v7h-2v-7z" fill="#FFFFFF" />
                          </svg>
                        </div>

                        {/* Bottom stats & details */}
                        <div className="mt-auto space-y-2 relative pt-2">
                          <div className="text-center">
                            <div className="text-2xl font-black text-amber-600 tracking-tight">85%</div>
                            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">TensorFlow</div>
                          </div>
                          
                          {/* Continuous animating progress bar */}
                          <div className="h-1.5 rounded-full bg-amber-50 overflow-hidden relative shadow-inner">
                            <div className="h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 animate-fluid-flow" style={{ width: '85%' }} />
                          </div>
                        </div>
                      </div>

                      {/* Wave overlay background */}
                      <svg className="absolute bottom-0 left-0 w-full pointer-events-none z-0 opacity-70" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,150 C320,200 640,150 960,220 C1280,290 1440,160 1440,160 L1440,320 L0,320 Z" fill="#fb923c" fillOpacity="0.14" />
                        <path d="M0,230 C360,250 720,200 1080,240 C1440,280 1440,320 1440,320 L0,320 Z" fill="#fde047" fillOpacity="0.08" />
                      </svg>
                    </div>
                  )}

                  {/* 4. OpenAI Card */}
                  {(selectedSkillCategory === 'All' || selectedSkillCategory === 'Generative AI') && (
                    <div className="bg-white rounded-3xl border border-gray-150/90 p-5.5 shadow-2xs hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden min-h-[250px]">
                      <div className="relative z-10 flex flex-col h-full justify-between">
                        {/* Header */}
                        <div className="flex items-center gap-2 pb-2 mb-3 border-b border-emerald-50">
                          <div className="p-1 px-2 rounded-lg bg-emerald-50 text-emerald-600 font-bold text-[10px] tracking-wide flex items-center gap-1">
                            <span>✨</span>
                            <span>Generative AI</span>
                          </div>
                        </div>

                        {/* Centered Logo element */}
                        <div className="h-20 flex items-center justify-center my-2 select-none">
                          <svg className="w-13 h-13 text-[#10a37f] animate-float-delayed" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4.5 16.5c-1.5-1.25-2.5-3.25-2.5-5.5a6.5 6.5 0 0 1 12.05-3.32" />
                            <path d="M12 11h.01M16.5 4.5c1.25 1.5 3.25 2.5 5.5 2.5A6.5 6.5 0 0 1 18.68 19" />
                            <path d="M11 12h.01M19.5 7.5C18.25 9 16.25 10 14 10a6.5 6.5 0 0 1-5.32-12.05" />
                            <path d="M12 13h.01M7.5 19.5c-1.25-1.5-3.25-2.5-5.5-2.5a6.5 6.5 0 0 1 3.32-12.05" />
                            <path d="M13 12h.01M4.5 7.5C5.75 6 7.75 5 10 5a6.5 6.5 0 0 1 5.32 12.05" />
                            <path d="M19.5 16.5c1.25-1.5 2.25-3.5 2.25-5.5a6.5 6.5 0 0 1-12.05 3.32" />
                          </svg>
                        </div>

                        {/* Bottom stats & details */}
                        <div className="mt-auto space-y-2 relative pt-2">
                          <div className="text-center">
                            <div className="text-2xl font-black text-emerald-600 tracking-tight">90%</div>
                            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">LLMs / GenAI</div>
                          </div>
                          
                          {/* Continuous animating progress bar */}
                          <div className="h-1.5 rounded-full bg-emerald-50 overflow-hidden relative shadow-inner">
                            <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 animate-fluid-flow" style={{ width: '90%' }} />
                          </div>
                        </div>
                      </div>

                      {/* Wave overlay background */}
                      <svg className="absolute bottom-0 left-0 w-full pointer-events-none z-0 opacity-70" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,160 C320,120 640,240 960,180 C1280,120 1440,220 1440,220 L1440,320 L0,320 Z" fill="#34d399" fillOpacity="0.14" />
                        <path d="M0,230 C360,260 720,210 1080,245 C1440,280 1440,320 1440,320 L0,320 Z" fill="#2dd4bf" fillOpacity="0.08" />
                      </svg>
                    </div>
                  )}

                  {/* 5. Pandas Card */}
                  {(selectedSkillCategory === 'All' || selectedSkillCategory === 'Data Analysis') && (
                    <div className="bg-white rounded-3xl border border-gray-150/90 p-5.5 shadow-2xs hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden min-h-[250px]">
                      <div className="relative z-10 flex flex-col h-full justify-between">
                        {/* Header */}
                        <div className="flex items-center gap-2 pb-2 mb-3 border-b border-orange-50">
                          <div className="p-1 px-2 rounded-lg bg-orange-50 text-orange-600 font-bold text-[10px] tracking-wide flex items-center gap-1">
                            <span>📊</span>
                            <span>Data Analysis</span>
                          </div>
                        </div>

                        {/* Centered Logo element */}
                        <div className="h-20 flex items-center justify-center my-2 select-none">
                          <svg className="w-13 h-13 animate-float" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="9" width="3.5" height="11" rx="1" fill="#130654" />
                            <rect x="10.5" y="4" width="3.5" height="16" rx="1" fill="#E70488" />
                            <rect x="17" y="7" width="3.5" height="13" rx="1" fill="#3B82F6" />
                            <path d="M4 20h16.5" stroke="#130654" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>

                        {/* Bottom stats & details */}
                        <div className="mt-auto space-y-2 relative pt-2">
                          <div className="text-center">
                            <div className="text-2xl font-black text-orange-550 tracking-tight">90%</div>
                            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Pandas</div>
                          </div>
                          
                          {/* Continuous animating progress bar */}
                          <div className="h-1.5 rounded-full bg-orange-55 overflow-hidden relative shadow-inner">
                            <div className="h-full rounded-full bg-gradient-to-r from-orange-400 via-amber-350 to-orange-400 animate-fluid-flow" style={{ width: '90%' }} />
                          </div>
                        </div>
                      </div>

                      {/* Wave overlay background */}
                      <svg className="absolute bottom-0 left-0 w-full pointer-events-none z-0 opacity-70" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,170 C320,220 640,130 960,195 C1280,260 1440,150 1440,150 L1440,320 L0,320 Z" fill="#fb923c" fillOpacity="0.12" />
                        <path d="M0,240 C360,270 720,230 1080,255 C1440,280 1440,320 1440,320 L0,320 Z" fill="#fdba74" fillOpacity="0.08" />
                      </svg>
                    </div>
                  )}

                  {/* 6. Matplotlib Card */}
                  {(selectedSkillCategory === 'All' || selectedSkillCategory === 'Data Visualization') && (
                    <div className="bg-white rounded-3xl border border-gray-150/90 p-5.5 shadow-2xs hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden min-h-[250px]">
                      <div className="relative z-10 flex flex-col h-full justify-between">
                        {/* Header */}
                        <div className="flex items-center gap-2 pb-2 mb-3 border-b border-indigo-50">
                          <div className="p-1 px-2 rounded-lg bg-indigo-50 text-indigo-600 font-bold text-[10px] tracking-wide flex items-center gap-1">
                            <span>📈</span>
                            <span>Data Visualization</span>
                          </div>
                        </div>

                        {/* Centered Logo element */}
                        <div className="h-20 flex items-center justify-center my-2 select-none">
                          <svg className="w-13 h-13 animate-float-delayed" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />
                            <line x1="12" y1="2" x2="12" y2="22" stroke="#94a3b8" strokeWidth="0.5" />
                            <line x1="2" y1="12" x2="22" y2="12" stroke="#94a3b8" strokeWidth="0.5" />
                            <path d="M12 12 L12 6 A6 6 0 0 1 17 9 Z" fill="#F59E0B" fillOpacity="0.8" />
                            <path d="M12 12 L17 9 A7 7 0 0 1 18 15 Z" fill="#EF4444" fillOpacity="0.8" />
                            <path d="M12 12 L18 15 A8 8 0 0 1 11 20 Z" fill="#3B82F6" fillOpacity="0.8" />
                            <path d="M12 12 L11 20 A9 9 0 0 1 5 13 Z" fill="#10B981" fillOpacity="0.8" />
                          </svg>
                        </div>

                        {/* Bottom stats & details */}
                        <div className="mt-auto space-y-2 relative pt-2">
                          <div className="text-center">
                            <div className="text-2xl font-black text-purple-600 tracking-tight">85%</div>
                            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Matplotlib</div>
                          </div>
                          
                          {/* Continuous animating progress bar */}
                          <div className="h-1.5 rounded-full bg-purple-50 overflow-hidden relative shadow-inner">
                            <div className="h-full rounded-full bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 animate-fluid-flow" style={{ width: '85%' }} />
                          </div>
                        </div>
                      </div>

                      {/* Wave overlay background */}
                      <svg className="absolute bottom-0 left-0 w-full pointer-events-none z-0 opacity-70" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,140 C320,200 640,160 960,225 C1280,290 1440,190 1440,190 L1440,320 L0,320 Z" fill="#d8b4fe" fillOpacity="0.14" />
                        <path d="M0,220 C360,240 720,210 1080,245 C1440,280 1440,320 1440,320 L0,320 Z" fill="#f5d0fe" fillOpacity="0.08" />
                      </svg>
                    </div>
                  )}

                  {/* 7. MySQL Card */}
                  {(selectedSkillCategory === 'All' || selectedSkillCategory === 'Databases') && (
                    <div className="bg-white rounded-3xl border border-gray-150/90 p-5.5 shadow-2xs hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden min-h-[250px]">
                      <div className="relative z-10 flex flex-col h-full justify-between">
                        {/* Header */}
                        <div className="flex items-center gap-2 pb-2 mb-3 border-b border-blue-50">
                          <div className="p-1 px-2 rounded-lg bg-blue-50 text-blue-600 font-bold text-[10px] tracking-wide flex items-center gap-1">
                            <span>🗄️</span>
                            <span>Databases</span>
                          </div>
                        </div>

                        {/* Centered Logo element */}
                        <div className="h-20 flex items-center justify-center my-2 select-none">
                          <svg className="w-14 h-13 animate-float" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 4.5c-.8-.8-2-1.2-3.3-1.1-1.3.1-2.4.8-3 1.8-.4.7-.6 1.5-.5 2.3.1.8.4 1.5.9 2H8.8C7 9.5 5.5 11 5.5 12.8v2.7c0 1.2.7 2.3 1.8 2.8 1.1.5 2.4.3 3.3-.5l4.5-4.5c.8-.8 1.2-2 1.1-3.3s-.8-2.4-1.8-3c-.7-.4-1.5-.6-2.3-.5.7-1 2-1.5 3.3-1.3 1.3.2 2.3 1 2.8 2.2" stroke="#00758F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.5 10c.5 0 1-.5 1-1s-.5-1-1-1-1 .5-1 1 .5 1 1 1z" fill="#F29111" />
                            <path d="M3 21c3-1 5 1 8-1s5 1 8-1" stroke="#00758F" strokeWidth="1" strokeLinecap="round" />
                          </svg>
                        </div>

                        {/* Bottom stats & details */}
                        <div className="mt-auto space-y-2 relative pt-2">
                          <div className="text-center">
                            <div className="text-2xl font-black text-blue-600 tracking-tight">85%</div>
                            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">MySQL</div>
                          </div>
                          
                          {/* Continuous animating progress bar */}
                          <div className="h-1.5 rounded-full bg-blue-50 overflow-hidden relative shadow-inner">
                            <div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 animate-fluid-flow" style={{ width: '85%' }} />
                          </div>
                        </div>
                      </div>

                      {/* Wave overlay background */}
                      <svg className="absolute bottom-0 left-0 w-full pointer-events-none z-0 opacity-70" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,160 C320,240 640,120 960,200 C1280,280 1440,180 1440,180 L1440,320 L0,320 Z" fill="#60a5fa" fillOpacity="0.14" />
                        <path d="M0,230 C360,280 720,220 1080,260 C1440,300 1440,320 1440,320 L0,320 Z" fill="#7dd3fc" fillOpacity="0.08" />
                      </svg>
                    </div>
                  )}

                  {/* 8. Jupyter Notebook Card */}
                  {(selectedSkillCategory === 'All' || selectedSkillCategory === 'Tools & Platforms') && (
                    <div className="bg-white rounded-3xl border border-gray-150/90 p-5.5 shadow-2xs hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden min-h-[250px]">
                      <div className="relative z-10 flex flex-col h-full justify-between">
                        {/* Header */}
                        <div className="flex items-center gap-2 pb-2 mb-3 border-b border-rose-50">
                          <div className="p-1 px-2 rounded-lg bg-rose-50 text-rose-600 font-bold text-[10px] tracking-wide flex items-center gap-1">
                            <span>⚙️</span>
                            <span>Tools & Platforms</span>
                          </div>
                        </div>

                        {/* Centered Logo element */}
                        <div className="h-20 flex items-center justify-center my-2 select-none">
                          <svg className="w-13 h-13 animate-float-delayed" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#71717a" strokeWidth="0.75" strokeDasharray="3 3"/>
                            <circle cx="12" cy="12" r="2.5" fill="#F37626" />
                            <path d="M12 4.5 A7.5 7.5 0 0 0 6 12 A7.5 7.5 0 0 0 12 19.5" stroke="#F37626" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                            <path d="M12 4.5 A7.5 7.5 0 0 1 18 12 A7.5 7.5 0 0 1 12 19.5" stroke="#F37626" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                            <circle cx="12" cy="4.5" r="1.5" fill="#71717a" />
                            <circle cx="12" cy="19.5" r="1.5" fill="#71717a" />
                          </svg>
                        </div>

                        {/* Bottom stats & details */}
                        <div className="mt-auto space-y-2 relative pt-2">
                          <div className="text-center">
                            <div className="text-2xl font-black text-rose-600 tracking-tight">90%</div>
                            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Jupyter Notebook</div>
                          </div>
                          
                          {/* Continuous animating progress bar */}
                          <div className="h-1.5 rounded-full bg-rose-50 overflow-hidden relative shadow-inner">
                            <div className="h-full rounded-full bg-gradient-to-r from-red-500 via-orange-400 to-rose-500 animate-fluid-flow" style={{ width: '90%' }} />
                          </div>
                        </div>
                      </div>

                      {/* Wave overlay background */}
                      <svg className="absolute bottom-0 left-0 w-full pointer-events-none z-0 opacity-70" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,180 C320,120 640,240 960,160 C1280,80 1440,200 1440,200 L1440,320 L0,320 Z" fill="#f43f5e" fillOpacity="0.12" />
                        <path d="M0,220 C360,260 720,200 1080,240 C1440,280 1440,320 1440,320 L0,320 Z" fill="#fda4af" fillOpacity="0.08" />
                      </svg>
                    </div>
                  )}

                </div>

                {/* Highly Polished Bottom Statistics Banner from the image */}
                <div className="mt-14 p-5 sm:p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-gray-150/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/2 via-transparent to-pink-500/2 opacity-70 pointer-events-none" />
                  
                  {/* Stat 1 */}
                  <div className="flex-1 flex items-center gap-3.5 md:justify-center px-4 md:border-r border-gray-150/70">
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100/60 flex items-center justify-center text-blue-650 shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                    </div>
                    <div className="leading-snug">
                      <div className="text-xl font-black text-gray-900 font-sans tracking-tight">6+</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Technologies Mastered</div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex-1 flex items-center gap-3.5 md:justify-center px-4 md:border-r border-gray-150/70">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100/60 flex items-center justify-center text-indigo-655 shrink-0">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <div className="leading-snug">
                      <div className="text-xl font-black text-gray-900 font-sans tracking-tight">2+</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">AI/ML Projects Built</div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex-1 flex items-center gap-3.5 md:justify-center px-4 md:border-r border-gray-150/70">
                    <div className="w-10 h-10 rounded-full bg-pink-50 border border-pink-100/60 flex items-center justify-center text-pink-500 shrink-0">
                      <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58l.004-.004a.2.2 0 00-.003-.312L13 12.12M12 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="1.8" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.3 14.89l2.77 2.77a1 1 0 001.42 0l2.25-2.25a1 1 0 000-1.42l-2.77-2.77" />
                      </svg>
                    </div>
                    <div className="leading-snug">
                      <div className="text-xl font-black text-gray-900 font-sans tracking-tight">11K+</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Records Processed</div>
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="flex-1 flex items-center gap-3.5 md:justify-center px-4 md:border-r border-gray-150/70">
                    <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100/60 flex items-center justify-center text-amber-550 shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-5.25c-.621 0-1.125.504-1.125 1.125v3.375m9 0V9M5.25 18.75V9m4.25-6.75h5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-5a.75.75 0 01-.75-.75V3a.75.75 0 01.75-.75z" />
                      </svg>
                    </div>
                    <div className="leading-snug">
                      <div className="text-xl font-black text-gray-900 font-sans tracking-tight">1+</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Years Learning</div>
                    </div>
                  </div>

                  {/* Stat 5 */}
                  <div className="flex-1 flex items-center gap-3.5 md:justify-center px-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100/60 flex items-center justify-center text-emerald-600 shrink-0">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="leading-snug">
                      <div className="text-xl font-black text-gray-900 font-sans tracking-tight">100%</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Passion & Dedication</div>
                    </div>
                  </div>

                </div>

              </div>
            </section>

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
                        Let's collaborate on real problems
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
            <div className={`p-8 sm:p-12 rounded-[28px] text-white relative overflow-hidden mb-10 shadow-lg bg-gradient-to-tr ${
              selectedProject.id === 'counselor' 
                ? 'from-indigo-600 via-purple-600 to-pink-500' 
                : 'from-blue-600 via-teal-600 to-cyan-500'
            }`}>
              
              {/* Decorative rings */}
              <div className="absolute right-[-40px] bottom-[-40px] w-56 h-56 rounded-full border-4 border-white/10 pointer-events-none" />
              <div className="absolute right-[40px] top-[-40px] w-44 h-44 rounded-full border-2 border-white/5 pointer-events-none" />

              <div className="relative z-10 space-y-4">
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
      <footer className="py-12 bg-white border-t border-gray-150 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex justify-center items-center gap-2 select-none">
            <span className="text-3xl font-cursive tracking-normal bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Spurthi
            </span>
            <span className="text-2xl font-light font-display text-gray-400">
              Mulkanuri
            </span>
          </div>

          <p className="text-xs text-gray-400 font-medium font-mono leading-none">
            © 2026 Spurthi Mulkanuri. Structured & optimized for direct recruiter review.
          </p>
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
