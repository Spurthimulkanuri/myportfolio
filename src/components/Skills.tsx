import React from 'react';
import { BookOpen, Rocket, ShieldAlert, Award, Globe, Code, Layers, Cpu, Sparkles, Binary, FileSpreadsheet, LayoutGrid } from 'lucide-react';
import { motion } from 'motion/react';

interface SkillsProps {
  isDarkMode?: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="skills" 
      className="py-24 bg-[#FAF9FC] dark:bg-[#070613] relative overflow-hidden z-10 select-none transition-colors duration-300"
    >
      
      {/* Background ambient light circles for that modern premium glow */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-purple-500/5 dark:bg-purple-500/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-blue-500/3 blur-3xl pointer-events-none" />

      {/* Decorative dot mesh on the right as shown in reference design */}
      <div className="absolute top-16 right-10 opacity-30 pointer-events-none hidden lg:block">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-pink-400/50" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* UPPER TITLE BLOCK (Matches Image layout) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 text-[10px] font-extrabold tracking-wider bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 rounded-full uppercase">
              My Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-hero-display font-extrabold text-[#1E1B4B] dark:text-white tracking-tight">
              Skills <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">& Technologies</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold max-w-xl leading-relaxed">
              A collection of tools, frameworks and technologies I work with to build intelligent and impactful data-driven solutions.
            </p>
          </div>

          {/* Top-Right "Always Improving" Box */}
          <div className="bg-white/80 dark:bg-[#13112c]/80 backdrop-blur-md rounded-3xl border border-gray-100 dark:border-purple-900/20 p-5 flex items-center gap-4 shadow-xs hover:shadow-md transition-shadow duration-300 max-w-md w-full relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-purple-100/70 dark:bg-purple-955/35 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 shadow-3xs relative">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h1m8-9v1m8 8h1M9 16a4 4 0 1 1-2.5-3.5" />
                <path d="M12 21a5 5 0 0 0 5-5V8l-3 3-2-2-3 3" />
              </svg>
            </div>
            <div>
              <h4 className="font-hero-display font-extrabold text-slate-800 dark:text-white text-sm tracking-tight flex items-center gap-1.5 leading-none mb-1">
                Always Improving
                <span className="animate-bounce text-[13px]">🚀</span>
              </h4>
              <p className="text-[10.5px] text-gray-400 dark:text-gray-400 font-semibold leading-relaxed">
                I love exploring new technologies and building better solutions.
              </p>
            </div>
          </div>
        </div>

        {/* SIX SKILLS CARDS GRID (3x2 Layout as requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CARD 1: LANGUAGES */}
          <div className="bg-white dark:bg-[#13112b] rounded-[32px] border border-gray-105 dark:border-purple-950/20 p-7 shadow-xs flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-50 dark:border-purple-950/10">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 font-extrabold shadow-3xs">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-hero-display font-extrabold text-slate-850 dark:text-white leading-none">Languages</h3>
            </div>

            {/* Inner Content */}
            <div className="space-y-6 my-auto">
              
              {/* Python Item */}
              <div className="flex items-center gap-4">
                {/* Custom Fluid Blob with Brand Logo inside (Matches Image) */}
                <div className="relative w-32 h-18 rounded-[24px] bg-gradient-to-tr from-[#ece9fc] via-[#e5e0f9] to-[#edf0fe] dark:from-[#211b43] dark:to-[#171333] flex items-center justify-center p-2 shadow-inner group overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 dark:bg-black/10 mix-blend-overlay" />
                  <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.01 2.01c-5.52 0-5.87.49-5.87 2.49v2.2h5.87v.6H3.64c-2 0-2.64.9-2.64 4.8 0 3.9.64 4.8 2.64 4.8h3.36V14.7c0-3.3 2.19-4.6 5.42-4.6h3.69V4.5c0-2-1-.49-4.1-2.49z" fill="#306998" />
                    <path d="M12 22c5.52 0 5.87-.5 5.87-2.5v-2.2H12v-.6h8.36c2 0 2.64-.9 2.64-4.8 0-3.9-.64-4.8-2.64-4.8H17.9v2.2c0 3.3-2.2 4.6-5.42 4.6H6.63v5.6c0 2 1.15 2.5 5.37 2.5z" fill="#FFE873" />
                    <circle cx="9.01" cy="5.5" r="0.75" fill="#fff" />
                    <circle cx="15.01" cy="18.5" r="0.75" fill="#306998" />
                  </svg>
                </div>
                
                {/* Metric indicators */}
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-mono font-bold text-gray-400 dark:text-gray-500">Python</span>
                    <span className="text-lg font-hero-display font-black text-slate-800 dark:text-white leading-none">95%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-100 dark:bg-purple-955/30 overflow-hidden">
                    <div className="h-full rounded-full bg-indigo-500" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>

              {/* MySQL Item */}
              <div className="flex items-center gap-4">
                <div className="relative w-32 h-18 rounded-[24px] bg-gradient-to-tr from-[#ece9fc] via-[#e5e0f9] to-[#edf0fe] dark:from-[#211b43] dark:to-[#171333] flex items-center justify-center p-2 shadow-inner group overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 dark:bg-black/10 mix-blend-overlay" />
                  <div className="flex flex-col items-center select-none">
                    <svg className="w-12 h-9" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 3.5c-.8-.8-2.2-1.2-3.5-1.1-1.4.1-2.5.8-3.1 1.8-.4.7-.6 1.5-.5 2.3.1.8.4 1.5.9 2H10c-2 0-3.5 1.5-3.5 3.3v2c0 1.2.7 2.3 1.8 2.8 1.1.5 2.4.3 3.3-.5l4.5-4.5c.8-.8 1.2-2 1.1-3.3s-.8-2.4-1.8-3c-.7-.4-1.5-.6-2.3-.5C14 4.5 15.5 4 17 4.2c1.3.2 2.3 1 2.8 2.2" stroke="#00758F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="18" cy="8.5" r="1.1" fill="#F29111" />
                    </svg>
                    <span className="font-sans font-black text-[#00758F] text-[10px] tracking-tight leading-none">MySQL</span>
                  </div>
                </div>
                
                {/* Metric indicators */}
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-mono font-bold text-gray-400 dark:text-gray-500">MySQL</span>
                    <span className="text-lg font-hero-display font-black text-slate-800 dark:text-white leading-none">85%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-100 dark:bg-purple-955/30 overflow-hidden">
                    <div className="h-full rounded-full bg-[#00758F]" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* CARD 2: MACHINE LEARNING */}
          <div className="bg-white dark:bg-[#13112b] rounded-[32px] border border-gray-105 dark:border-purple-950/20 p-7 shadow-xs hover:scale-[1.01] transition-transform duration-300">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-50 dark:border-purple-950/10">
              <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950/50 flex items-center justify-center text-pink-600 shrink-0 font-extrabold shadow-3xs">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-hero-display font-extrabold text-slate-850 dark:text-white leading-none">Machine Learning</h3>
            </div>

            {/* Inner Content - List with watercolor-like wavy pink bars */}
            <div className="space-y-4 font-sans font-medium text-slate-700 dark:text-gray-300">
              
              {/* Regression */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 w-28 shrink-0">
                  <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M4 18l8-10 6 5 4-11" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="8" r="1.5" fill="currentColor" />
                    <circle cx="18" cy="13" r="1.5" fill="currentColor" />
                  </svg>
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-white leading-none">Regression</span>
                </div>
                {/* Wavy bar component */}
                <WavyProgressBar percent={90} gradientId="pink-reg" colorFrom="#fda4af" colorTo="#f43f5e" />
                <span className="text-xs font-bold shrink-0 text-slate-800 dark:text-white font-hero-display">90%</span>
              </div>

              {/* Classification */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 w-28 shrink-0">
                  <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="6" r="3" />
                    <path d="M6 18c0-3 2-4 6-4s6 1 6 4" />
                  </svg>
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-white leading-none">Classification</span>
                </div>
                <WavyProgressBar percent={90} gradientId="pink-class" colorFrom="#fda4af" colorTo="#f43f5e" />
                <span className="text-xs font-bold shrink-0 text-slate-800 dark:text-white font-hero-display">90%</span>
              </div>

              {/* Clustering */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 w-28 shrink-0">
                  <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5 text-pink-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                    <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                  </div>
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-white leading-none">Clustering</span>
                </div>
                <WavyProgressBar percent={80} gradientId="pink-cluster" colorFrom="#fbcfe8" colorTo="#ec4899" />
                <span className="text-xs font-bold shrink-0 text-slate-800 dark:text-white font-hero-display">80%</span>
              </div>

              {/* Model Evaluation */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 w-28 shrink-0">
                  <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-white leading-none">Model Evaluation</span>
                </div>
                <WavyProgressBar percent={85} gradientId="pink-eval" colorFrom="#fda4af" colorTo="#e11d48" />
                <span className="text-xs font-bold shrink-0 text-slate-800 dark:text-white font-hero-display">85%</span>
              </div>

            </div>
          </div>

          {/* CARD 3: DEEP LEARNING */}
          <div className="bg-white dark:bg-[#13112b] rounded-[32px] border border-gray-105 dark:border-purple-950/20 p-7 shadow-xs hover:scale-[1.01] transition-transform duration-300">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-50 dark:border-purple-950/10">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center text-blue-650 dark:text-blue-400 shrink-0 font-extrabold shadow-3xs">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-hero-display font-extrabold text-slate-850 dark:text-white leading-none">Deep Learning</h3>
            </div>

            {/* Inner Content - List with watercolor wavy blue progress bars */}
            <div className="space-y-5 font-sans font-medium text-slate-705 dark:text-gray-300">
              
              {/* Neural Networks */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 w-28 shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="18" cy="18" r="3" />
                    <line x1="9" y1="12" x2="15" y2="7" />
                    <line x1="9" y1="12" x2="15" y2="17" />
                  </svg>
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-white leading-none">Neural Networks</span>
                </div>
                <WavyProgressBar percent={90} gradientId="blue-nn" colorFrom="#93c5fd" colorTo="#2563eb" />
                <span className="text-xs font-bold shrink-0 text-slate-800 dark:text-white font-hero-display">90%</span>
              </div>

              {/* CNN */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 w-28 shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-white leading-none">CNN</span>
                </div>
                <WavyProgressBar percent={85} gradientId="blue-cnn" colorFrom="#bae6fd" colorTo="#0284c7" />
                <span className="text-xs font-bold shrink-0 text-slate-800 dark:text-white font-hero-display">85%</span>
              </div>

              {/* RNN */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 w-28 shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M21 12a9 9 0 0 1-9 9m-9-9a9 9 0 0 1 9-9" />
                    <path d="M12 3v9h9" strokeDasharray="3 3"/>
                  </svg>
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-white leading-none">RNN</span>
                </div>
                <WavyProgressBar percent={80} gradientId="blue-rnn" colorFrom="#a5f3fc" colorTo="#0891b2" />
                <span className="text-xs font-bold shrink-0 text-slate-800 dark:text-white font-hero-display">80%</span>
              </div>

            </div>
          </div>

          {/* CARD 4: GENERATIVE AI */}
          <div className="bg-white dark:bg-[#13112b] rounded-[32px] border border-gray-105 dark:border-purple-950/20 p-7 shadow-xs flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-50 dark:border-purple-950/10">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 font-extrabold shadow-3xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-hero-display font-extrabold text-slate-850 dark:text-white leading-none">Generative AI</h3>
            </div>

            {/* Inner Content with large OpenAI mint fluid shape (Matches Image exactly!) */}
            <div className="flex items-center gap-4 my-auto">
              {/* OpenAI Glow pouch */}
              <div className="relative w-32 h-24 rounded-[28px] bg-gradient-to-tr from-[#e6f4ea] via-[#edf7f1] to-[#f4fbf7] dark:from-[#1b3a24] dark:to-[#122419] flex items-center justify-center p-2.5 shadow-inner shrink-0 overflow-hidden group">
                <div className="absolute inset-0 bg-white/20 dark:bg-black/10 mix-blend-overlay" />
                {/* Float elements */}
                <div className="absolute left-[15%] top-[10%] w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <div className="absolute right-[20%] bottom-[15%] w-2 h-2 rounded-full bg-emerald-300 opacity-70 animate-pulse" />
                
                {/* Beautiful custom vector OpenAI swirl */}
                <svg className="w-12 h-12 text-[#10a37f] dark:text-[#5ceecc] filter drop-shadow-sm animate-spin [animation-duration:12s]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5-1.25-2.5-3.25-2.5-5.5a6.5 6.5 0 0 1 12.05-3.32" />
                  <path d="M12 11h.01M16.5 4.5c1.25 1.5 3.25 2.5 5.5 2.5A6.5 6.5 0 0 1 18.68 19" />
                  <path d="M11 12h.01M19.5 7.5C18.25 9 16.25 10 14 10a6.5 6.5 0 0 1-5.32-12.05" />
                  <path d="M12 13h.01M7.5 19.5c-1.25-1.5-3.25-2.5-5.5-2.5a6.5 6.5 0 0 1 3.32-12.05" />
                  <path d="M13 12h.01M4.5 7.5C5.75 6 7.75 5 10 5a6.5 6.5 0 0 1 5.32 12.05" />
                  <path d="M19.5 16.5c1.25-1.5 2.25-3.5 2.25-5.5a6.5 6.5 0 0 1-12.05 3.32" />
                </svg>
              </div>

              {/* Progress Rows on the right */}
              <div className="flex-1 space-y-4 font-sans font-medium">
                
                {/* LLMs Item */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] leading-none mb-0.5">
                    <span className="font-extrabold text-slate-700 dark:text-gray-300 tracking-tight">LLMs</span>
                    <span className="font-bold text-emerald-600 font-hero-display text-xs">90%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-emerald-50 dark:bg-purple-955/30 overflow-hidden">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: '90%' }} />
                  </div>
                </div>

                {/* Prompt Eng Item */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] leading-none mb-0.5">
                    <span className="font-extrabold text-slate-705 dark:text-gray-300 tracking-tight">Prompt Engineering</span>
                    <span className="font-bold text-emerald-600 font-hero-display text-xs">85%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-emerald-50 dark:bg-purple-955/30 overflow-hidden">
                    <div className="h-full rounded-full bg-emerald-400" style={{ width: '85%' }} />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* CARD 5: DATA ANALYSIS */}
          <div className="bg-white dark:bg-[#13112b] rounded-[32px] border border-gray-105 dark:border-purple-950/20 p-7 shadow-xs hover:scale-[1.01] transition-transform duration-300">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-50 dark:border-purple-950/10">
              <div className="w-10 h-10 rounded-2xl bg-[#fffbeb] dark:bg-amber-955/40 flex items-center justify-center text-amber-550 dark:text-amber-450 shrink-0 font-extrabold shadow-3xs">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-hero-display font-extrabold text-slate-850 dark:text-white leading-none">Data Analysis</h3>
            </div>

            {/* Content list with pastel yellow-orange watercolor wavy horizontal bars (Matches Image) */}
            <div className="space-y-4 font-sans font-medium text-slate-700 dark:text-gray-300">
              
              {/* EDA */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 w-28 shrink-0">
                  <svg className="w-4 h-4 text-amber-550" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <rect x="3" y="10" width="4" height="10" rx="1" />
                    <rect x="10" y="5" width="4" height="15" rx="1" />
                    <rect x="17" y="12" width="4" height="8" rx="1" />
                  </svg>
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-white leading-none">EDA</span>
                </div>
                <WavyProgressBar percent={90} gradientId="amber-eda" colorFrom="#fcd34d" colorTo="#f59e0b" />
                <span className="text-xs font-bold shrink-0 text-slate-800 dark:text-white font-hero-display">90%</span>
              </div>

              {/* Data Cleaning */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 w-28 shrink-0">
                  <svg className="w-4 h-4 text-amber-555" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-white leading-none">Data Cleaning</span>
                </div>
                <WavyProgressBar percent={90} gradientId="amber-clean" colorFrom="#fde68a" colorTo="#d97706" />
                <span className="text-xs font-bold shrink-0 text-slate-800 dark:text-white font-hero-display">90%</span>
              </div>

              {/* Preprocessing */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 w-28 shrink-0">
                  <svg className="w-4 h-4 text-amber-550" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-white leading-none">Preprocessing</span>
                </div>
                <WavyProgressBar percent={90} gradientId="amber-preprocess" colorFrom="#fcd34d" colorTo="#ea580c" />
                <span className="text-xs font-bold shrink-0 text-slate-800 dark:text-white font-hero-display">90%</span>
              </div>

              {/* Data Validation */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 w-28 shrink-0">
                  <svg className="w-4 h-4 text-amber-550" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-white leading-none">Data Validation</span>
                </div>
                <WavyProgressBar percent={85} gradientId="amber-val" colorFrom="#fde68a" colorTo="#d97706" />
                <span className="text-xs font-bold shrink-0 text-slate-800 dark:text-white font-hero-display">85%</span>
              </div>

            </div>
          </div>

          {/* CARD 6: LIBRARIES & TOOLS */}
          <div className="bg-white dark:bg-[#13112b] rounded-[32px] border border-gray-105 dark:border-purple-950/20 p-7 shadow-xs hover:scale-[1.01] transition-transform duration-300">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-50 dark:border-purple-950/10">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/40 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 font-extrabold shadow-3xs">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-hero-display font-extrabold text-slate-850 dark:text-white leading-none">Libraries & Tools</h3>
            </div>

            {/* Content: A high fidelity grid of libraries exactly like screenshot 6 */}
            <div className="grid grid-cols-2 gap-3.5 pt-1.5">
              
              {/* NumPy */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-[#17143a]/40 border border-slate-100 dark:border-purple-950/25 rounded-xl shadow-3xs">
                <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-blue-50/50 dark:bg-blue-950/20 rounded-lg">
                  <svg className="w-4 h-4 text-[#013243]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2z" fill="#013243" opacity="0.1" />
                    <path d="M12 2L4 6.5v9l8 4.5V2z" fill="#013243" />
                    <path d="M12 2l8 4.5v9L12 20V2z" fill="#76ADDB" />
                    <path d="M12 2L4 6.5l8 4.5 8-4.5-8-4.5z" fill="#1C5E96" />
                  </svg>
                </div>
                <span className="text-[11px] font-extrabold text-[#1E293B] dark:text-white tracking-tight">NumPy</span>
              </div>

              {/* Pandas */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-[#17143a]/40 border border-slate-100 dark:border-purple-950/25 rounded-xl shadow-3xs">
                <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-pink-50/50 dark:bg-pink-950/20 rounded-lg">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="10" width="4" height="10" rx="1" fill="#150458" />
                    <rect x="10" y="4" width="4" height="16" rx="1" fill="#e70488" />
                    <rect x="17" y="7" width="4" height="13" rx="1" fill="#3b82f6" fillOpacity="0.8" />
                  </svg>
                </div>
                <span className="text-[11px] font-extrabold text-[#1E293B] dark:text-white tracking-tight">Pandas</span>
              </div>

              {/* Scikit-learn */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-[#17143a]/40 border border-slate-100 dark:border-purple-950/25 rounded-xl shadow-3xs">
                <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-amber-50/50 dark:bg-amber-950/20 rounded-lg">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="11" r="5" fill="#3199ce" />
                    <circle cx="15" cy="13" r="5" fill="#f89939" fillOpacity="0.85" />
                  </svg>
                </div>
                <span className="text-[11px] font-extrabold text-[#1E293B] dark:text-white tracking-tight">Scikit-learn</span>
              </div>

              {/* Matplotlib */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-[#17143a]/40 border border-slate-100 dark:border-purple-950/25 rounded-xl shadow-3xs">
                <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-teal-50/50 dark:bg-teal-950/20 rounded-lg">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="1 1" />
                    <path d="M12 12 L12 4 A8 8 0 0 1 18 8 Z" fill="#F59E0B" fillOpacity="0.85" />
                    <path d="M12 12 L18 8 A8 8 0 0 1 20 14 Z" fill="#EF4444" fillOpacity="0.85" />
                    <path d="M12 12 L20 14 A8 8 0 0 1 12 20 Z" fill="#3B82F6" fillOpacity="0.85" />
                  </svg>
                </div>
                <span className="text-[11px] font-extrabold text-[#1E293B] dark:text-white tracking-tight">Matplotlib</span>
              </div>

              {/* Seaborn */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-[#17143a]/40 border border-slate-100 dark:border-purple-950/25 rounded-xl shadow-3xs">
                <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-indigo-50/50 dark:bg-indigo-950/20 rounded-lg">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14c2-4 4-6 8-6s6 2 8 6" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M4 11c2-3 5-5 8-5s6 2 8 5" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[11px] font-extrabold text-[#1E293B] dark:text-white tracking-tight">Seaborn</span>
              </div>

              {/* Streamlit */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-[#17143a]/40 border border-slate-100 dark:border-purple-950/25 rounded-xl shadow-3xs">
                <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-red-50/50 dark:bg-red-950/20 rounded-lg">
                  <svg className="w-4 h-4 text-[#ff4b4b]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L2 21h20L12 3z" fill="#ff4b4b" opacity="0.1" />
                    <path d="M12 3L2 21h4L12 7l6 14h4L12 3z" fill="#ff4b4b" />
                  </svg>
                </div>
                <span className="text-[11px] font-extrabold text-[#1E293B] dark:text-white tracking-tight">Streamlit</span>
              </div>

              {/* Google Colab */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-[#17143a]/40 border border-slate-100 dark:border-purple-950/25 rounded-xl shadow-3xs">
                <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-amber-50/30 dark:bg-amber-950/15 rounded-lg">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 7.5A4.5 4.5 0 0 0 4 12a4.5 4.5 0 0 0 4.5 4.5c1.8 0 3.3-1 4.1-2.5" fill="#F97316" />
                    <path d="M15.5 7.5c-1.5 0-2.8.5-3.8 1.5c.8.4 1.4 1 1.8 1.7A4.5 4.5 0 0 1 15.5 16.5A4.5 4.5 0 0 1 20 12" fill="#F59E0B" />
                  </svg>
                </div>
                <span className="text-[11px] font-extrabold text-[#1E293B] dark:text-white tracking-tight">Colab</span>
              </div>

              {/* Jupyter Notebook */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-[#17143a]/40 border border-slate-100 dark:border-purple-950/25 rounded-xl shadow-3xs">
                <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-amber-50/30 dark:bg-amber-950/15 rounded-lg">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#F97316" strokeWidth="1" transform="rotate(35, 12, 12)" />
                    <circle cx="12" cy="12" r="3.2" fill="#F37626" />
                  </svg>
                </div>
                <span className="text-[11px] font-extrabold text-[#1E293B] dark:text-white tracking-tight">Jupyter</span>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM METRIC BAR (Replicating Image Metric Indicators) */}
        <div className="mt-12 p-6 bg-white/70 dark:bg-[#13112b]/80 backdrop-blur-md rounded-3xl border border-gray-105 dark:border-purple-950/20 shadow-xs flex flex-wrap md:flex-row md:items-center justify-between gap-6">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/2 via-transparent to-indigo-505/2 pointer-events-none opacity-50" />
          
          {/* Stat 1: Technologies Mastered */}
          <div className="flex-1 min-w-[150px] flex items-center gap-4 px-4 md:border-r border-gray-100 dark:border-purple-950/10 justify-center">
            <div className="w-11 h-11 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100/50 dark:border-blue-900/30 flex items-center justify-center text-blue-600 shrink-0 shadow-3xs">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <div className="leading-snug">
              <div className="text-2xl font-black text-slate-800 dark:text-white font-hero-display tracking-tight leading-none mb-1">6+</div>
              <div className="text-[10px] text-gray-450 dark:text-gray-500 font-bold uppercase tracking-wider leading-none">Technologies Mastered</div>
            </div>
          </div>

          {/* Stat 2: AI/ML Projects */}
          <div className="flex-1 min-w-[150px] flex items-center gap-4 px-4 md:border-r border-gray-100 dark:border-purple-950/10 justify-center">
            <div className="w-11 h-11 rounded-full bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100/50 dark:border-indigo-900/30 flex items-center justify-center text-indigo-600 shrink-0 shadow-3xs">
              <BookOpen className="w-5 h-5 text-indigo-550" />
            </div>
            <div className="leading-snug">
              <div className="text-2xl font-black text-slate-800 dark:text-white font-hero-display tracking-tight leading-none mb-1">2+</div>
              <div className="text-[10px] text-gray-450 dark:text-gray-500 font-bold uppercase tracking-wider leading-none">AI/ML Projects Built</div>
            </div>
          </div>

          {/* Stat 3: Records Processed */}
          <div className="flex-1 min-w-[150px] flex items-center gap-4 px-4 md:border-r border-gray-100 dark:border-purple-950/10 justify-center">
            <div className="w-11 h-11 rounded-full bg-pink-50 dark:bg-pink-950/30 border border-pink-100/50 dark:border-pink-900/30 flex items-center justify-center text-pink-600 shrink-0 shadow-3xs">
              <Rocket className="w-5 h-5 text-pink-500" />
            </div>
            <div className="leading-snug">
              <div className="text-2xl font-black text-slate-800 dark:text-white font-hero-display tracking-tight leading-none mb-1">11K+</div>
              <div className="text-[10px] text-gray-450 dark:text-gray-500 font-bold uppercase tracking-wider leading-none">Records Processed</div>
            </div>
          </div>

          {/* Stat 4: Years Learning */}
          <div className="flex-1 min-w-[150px] flex items-center gap-4 px-4 md:border-r border-gray-100 dark:border-purple-950/10 justify-center">
            <div className="w-11 h-11 rounded-full bg-amber-50 dark:bg-amber-955/30 border border-amber-100/50 dark:border-amber-900/30 flex items-center justify-center text-amber-500 shrink-0 shadow-3xs">
              <Award className="w-5 h-5 text-amber-500" />
            </div>
            <div className="leading-snug">
              <div className="text-2xl font-black text-slate-800 dark:text-white font-hero-display tracking-tight leading-none mb-1">1+</div>
              <div className="text-[10px] text-gray-450 dark:text-gray-500 font-bold uppercase tracking-wider leading-none">Years Learning</div>
            </div>
          </div>

          {/* Stat 5: Passion & Dedication */}
          <div className="flex-1 min-w-[150px] flex items-center gap-4 px-4 justify-center">
            <div className="w-11 h-11 rounded-full bg-purple-50 dark:bg-purple-950/30 border border-purple-100/50 dark:border-purple-900/30 flex items-center justify-center text-purple-650 shrink-0 shadow-3xs">
              <Globe className="w-5 h-5 text-purple-600" />
            </div>
            <div className="leading-snug">
              <div className="text-2xl font-black text-slate-800 dark:text-white font-hero-display tracking-tight leading-none mb-1">100%</div>
              <div className="text-[10px] text-gray-450 dark:text-gray-500 font-bold uppercase tracking-wider leading-none">Passion & Dedication</div>
            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
}

{/* Helper component for watercolor wavy progress indicators */}
interface WavyProgressBarProps {
  percent: number;
  gradientId: string;
  colorFrom: string;
  colorTo: string;
}

function WavyProgressBar({ percent, gradientId, colorFrom, colorTo }: WavyProgressBarProps) {
  return (
    <div className="relative flex-1 h-5 bg-slate-50 dark:bg-[#1E1B4B]/30 rounded-lg overflow-hidden border border-slate-100/60 dark:border-purple-950/10 shadow-3xs">
      <div 
        className="absolute top-0 left-0 h-full rounded-lg transition-all duration-1000"
        style={{ width: `${percent}%` }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colorFrom} stopOpacity="0.8" />
              <stop offset="100%" stopColor={colorTo} stopOpacity="0.95" />
            </linearGradient>
          </defs>
          
          {/* Sinuosity curves to match a watercolor painted look */}
          <path 
            d="M 0 5 Q 12 1 25 5 T 50 5 T 75 5 T 100 5 L 100 20 L 0 20 Z" 
            fill={`url(#${gradientId})`} 
          />
          {/* Subtle upper light reflection streak */}
          <path 
            d="M 0 4 Q 25 0 50 3 T 100 4" 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="0.8" 
            strokeOpacity="0.4" 
          />
        </svg>
      </div>
    </div>
  );
}
