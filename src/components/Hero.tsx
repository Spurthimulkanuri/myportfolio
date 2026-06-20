import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data';
import { ArrowRight, Code, Database, Brain, Sparkles, BarChart3, Bot, Search, Network } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
  onContactMe: () => void;
}

export default function Hero({ onViewProjects, onContactMe }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const currentRole = PERSONAL_INFO.subRoles[roleIndex];

  // Typing speed configuration
  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const PAUSE_DURATION = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length - 1));
      }, DELETING_SPEED);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length + 1));
      }, TYPING_SPEED);
    }

    if (!isDeleting && typedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.subRoles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Decorative premium blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10 animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-teal-50/60 rounded-full blur-3xl -z-10 animate-pulse duration-[8000ms]" />

      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 -z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Batch */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono font-bold text-blue-800 uppercase tracking-wider">
                Exposys Data Labs Intern
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-none">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500">{PERSONAL_INFO.name}</span>
              </h1>
              
              {/* Cycling animated text */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-slate-800">
                  {typedText}
                  <span className="border-r-2 border-indigo-600 ml-1 text-indigo-600"></span>
                </span>
              </div>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-sans">
              {PERSONAL_INFO.bio}
            </p>

            {/* Quick Stat Mini Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                <span className="text-blue-600 font-mono font-bold text-lg">11,000+</span>
                <span className="text-xs text-slate-500 font-medium font-sans">Records Preprocessed</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                <span className="text-teal-600 font-mono font-bold text-lg">AI / ML</span>
                <span className="text-xs text-slate-500 font-medium font-sans">Project Pipelines</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                <span className="text-indigo-600 font-mono font-bold text-lg">SQL | Python</span>
                <span className="text-xs text-slate-500 font-medium font-sans">Robust Scripting</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                <span className="text-purple-600 font-mono font-bold text-lg">Fine-Tuned</span>
                <span className="text-xs text-slate-500 font-medium font-sans">7B Param LLMs</span>
              </div>
            </div>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-4 w-full pt-4">
              <button
                onClick={onViewProjects}
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-sans font-semibold text-sm shadow-md hover:shadow-xl hover:translate-y-[-1px] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                id="hero-cta-projects"
              >
                <span>Discover Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onContactMe}
                className="px-6 py-4 rounded-xl bg-white text-slate-800 border border-slate-200 font-sans font-semibold text-sm shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:translate-y-[-1px] transition-all duration-300 flex items-center justify-center cursor-pointer"
                id="hero-cta-contact"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Hero Right Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] group flex justify-center items-center mt-8 lg:mt-0">
              
              {/* Outer Orbit Ring 2 */}
              <div className="absolute inset-[-10px] sm:inset-[-20px] rounded-full border border-dashed border-purple-200/70 dark:border-purple-600/30 animate-[spin_120s_linear_infinite_reverse]">
                {/* Dots on orbit */}
                <div className="absolute top-[10%] left-[10%] w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                <div className="absolute bottom-[20%] right-[10%] w-2 h-2 rounded-full bg-purple-400" />
                <div className="absolute bottom-[5%] left-[30%] w-1.5 h-1.5 rounded-full bg-pink-400" />
              </div>

              {/* Inner Orbit Ring 1 */}
              <div className="absolute inset-10 sm:inset-12 rounded-full border border-dashed border-indigo-200/70 dark:border-indigo-600/30 animate-[spin_90s_linear_infinite]">
                {/* Dots on orbit */}
                <div className="absolute top-[20%] right-[15%] w-2 h-2 rounded-full bg-indigo-400" />
                <div className="absolute bottom-[15%] left-[20%] w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
              </div>

              {/* Floating Badges */}
              {/* Top Left - Brain */}
              <div className="absolute top-[5%] left-[15%] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-purple-600 dark:text-purple-400 z-10 animate-[bounce_3s_ease-in-out_infinite]">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              
              {/* Top Right - BarChart */}
              <div className="absolute top-[-2%] right-[15%] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 z-10 animate-[bounce_4s_ease-in-out_infinite_0.5s]">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Right - Database */}
              <div className="absolute top-[30%] right-[-5%] sm:right-[-8%] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 z-10 animate-[bounce_3.5s_ease-in-out_infinite_1s]">
                <Database className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>

              {/* Bottom Right - Network */}
              <div className="absolute bottom-[15%] right-[5%] sm:right-[10%] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-purple-600 dark:text-purple-400 z-10 animate-[bounce_4s_ease-in-out_infinite_0.8s]">
                <Network className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>

              {/* Bottom - Bot */}
              <div className="absolute bottom-[-5%] left-[45%] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 z-10 animate-[bounce_3s_ease-in-out_infinite_1.2s]">
                <Bot className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>

              {/* Bottom Left - Code */}
              <div className="absolute bottom-[15%] left-[0%] sm:left-[5%] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-purple-600 dark:text-purple-400 z-10 animate-[bounce_4s_ease-in-out_infinite_0.3s]">
                <Code className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>

              {/* Left - Search */}
              <div className="absolute top-[35%] left-[-8%] sm:left-[-12%] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 z-10 animate-[bounce_3.5s_ease-in-out_infinite_0.7s]">
                <Search className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>

              {/* Central Profile Picture (Double Ring Design) */}
              <div className="absolute w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-[3px] sm:p-[4px] bg-gradient-to-tr from-purple-500 via-fuchsia-400 to-indigo-400 shadow-[0_0_50px_rgba(168,85,247,0.25)] group-hover:shadow-[0_0_70px_rgba(168,85,247,0.4)] transition-shadow duration-500 z-0">
                {/* Inner White Gap */}
                <div className="w-full h-full rounded-full bg-white dark:bg-[#07060F] flex items-center justify-center p-[6px] sm:p-[8px]">
                  {/* Image Container */}
                  <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner bg-slate-100 dark:bg-slate-800">
                    <img 
                      src="https://ik.imagekit.io/njxa1mbn3/SM.png" 
                      alt="Spurthi Mulkanuri" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
