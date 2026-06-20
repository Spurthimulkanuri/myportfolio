import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data';
import { ArrowRight, Code, Database, Brain, Sparkles } from 'lucide-react';

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
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
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
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
              {/* Outer orbit rings */}
              <div className="absolute inset-0 rounded-full border border-blue-100 animate-spin" style={{ animationDuration: '40s' }} />
              
              {/* Interactive nodes */}
              <div className="absolute top-0 left-12 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center border border-slate-100 text-blue-600">
                <Code className="w-4 h-4" />
              </div>
              <div className="absolute bottom-12 right-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-slate-100 text-teal-600">
                <Database className="w-5 h-5" />
              </div>
              <div className="absolute top-1/2 -right-4 w-11 h-11 rounded-full bg-indigo-50 shadow-md flex items-center justify-center text-indigo-600">
                <Brain className="w-5 h-5" />
              </div>
              <div className="absolute bottom-4 left-10 w-9 h-9 rounded-full bg-teal-50 shadow-md flex items-center justify-center text-teal-500">
                <Sparkles className="w-4 h-4" />
              </div>

              {/* Central Premium Profile illustration */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-blue-100 via-white to-teal-50 p-1.5 shadow-xl">
                <div className="w-full h-full rounded-full bg-sky-50 overflow-hidden flex flex-col justify-center items-center relative border border-white">
                  <img 
                    src="https://ik.imagekit.io/njxa1mbn3/SM.png" 
                    alt="Spurthi Mulkanuri" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-0 right-0 text-center z-10 px-2">
                    <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-mono font-bold text-slate-800 shadow-sm border border-slate-100">
                      Hyderabad, India
                    </span>
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
