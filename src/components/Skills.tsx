import React, { useState } from 'react';
import { Sparkles, Terminal, Info } from 'lucide-react';

interface SkillItem {
  name: string;
  category: string;
  level: number;
  iconSymbol: string;
  svgIcon: React.ReactNode;
  shortDesc: string;
  longDesc: string;
  colorClass: string;
  bgLight: string;
  bgDark: string;
  textLight: string;
  textDark: string;
  progressGradient: string;
  waveFill: string;
}

export default function Skills({ isDarkMode }: { isDarkMode?: boolean }) {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('All');
  const [hoveredSkillName, setHoveredSkillName] = useState<string | null>(null);

  const categories = [
    'All',
    'Languages',
    'Machine Learning',
    'Deep Learning',
    'Generative AI',
    'Data Analysis',
    'Data Visualization',
    'Databases',
    'Tools & Platforms'
  ];

  const skillsData: SkillItem[] = [
    {
      name: 'Python',
      category: 'Languages',
      level: 95,
      iconSymbol: '</>',
      svgIcon: (
        <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 6.13 2.5 6.13 4.5v2.2h5.87v.6H3.64C1.64 7.3 1 8.2 1 12.1c0 3.9.78 4.8 2.78 4.8H6.1v-2.2c0-3.3 2.2-4.6 5.4-4.6H17.37V4.5C17.37 2.5 16.52 2 12 2z" fill="#306998" />
          <path d="M12 22c5.52 0 5.87-.5 5.87-2.5v-2.2H12v-.6h8.36c2 0 2.64-.9 2.64-4.8 0-3.9-.78-4.8-2.78-4.8H17.9v2.2c0 3.3-2.2 4.6-5.4 4.6H6.63v5.6c0 2 1.15 2.5 5.37 2.5z" fill="#FFE873" />
          <circle cx="9" cy="5.5" r="0.75" fill="#fff" />
          <circle cx="15" cy="18.5" r="0.75" fill="#22d3ee" />
        </svg>
      ),
      shortDesc: 'A versatile foundational language for modern AI, data structures and pipeline automation.',
      longDesc: 'Deep knowledge of Python data structures, object-oriented software patterns, lambda expressions, multi-threading, logging, and integration interfaces for AI/ML modeling.',
      colorClass: 'purple',
      bgLight: 'bg-purple-50',
      bgDark: 'dark:bg-purple-955/30',
      textLight: 'text-purple-700',
      textDark: 'dark:text-purple-450',
      progressGradient: 'from-purple-505 via-indigo-505 to-purple-505',
      waveFill: '#c084fc'
    },
    {
      name: 'Scikit-learn',
      category: 'Machine Learning',
      level: 90,
      iconSymbol: '🧠',
      svgIcon: (
        <div className="flex items-center gap-1">
          <svg className="h-11 w-11" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="18" r="9" fill="#3199ce" />
            <circle cx="25" cy="22" r="10" fill="#f89939" fillOpacity="0.85" />
            <circle cx="12" cy="12" r="4" fill="#a5f3fc" opacity="0.6" />
            <path d="M15 18 C 18 10, 22 15, 25 22" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </div>
      ),
      shortDesc: 'Classical ML frameworks including classification, robust cluster analysis, and statistics.',
      longDesc: 'Architecting pre-processing workflows, scaling/standardizing columns, K-Fold cross-validation, GridSearchCV optimization, and evaluating metrics like ROC-AUC, F1-scores and confusion matrixes.',
      colorClass: 'pink',
      bgLight: 'bg-pink-50',
      bgDark: 'dark:bg-pink-955/30',
      textLight: 'text-pink-600',
      textDark: 'dark:text-pink-450',
      progressGradient: 'from-pink-505 via-rose-505 to-pink-505',
      waveFill: '#f472b6'
    },
    {
      name: 'TensorFlow',
      category: 'Deep Learning',
      level: 85,
      iconSymbol: '⚛️',
      svgIcon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#FF6F00" opacity="0.1" />
          <path d="M12 2.5 L3.5 7.2v9.6L12 21.5V2.5z" fill="#FF6F00" />
          <path d="M12 2.5 L20.5 7.2v9.6L12 21.5V2.5z" fill="#FFA000" />
          <path d="M7 8.5 h10 v2.5 h-3.5 v7.5 h-3 v-7.5 h-3.5 v-2.5z" fill="white" />
        </svg>
      ),
      shortDesc: 'Neural networks, multi-layered perceptrons and custom loss optimization setups.',
      longDesc: 'Designing convolutional stacks (CNNs) for vision, recurrent sequential networks (RNNs/LSTMs) for forecasting, writing custom fit/train loops, and TensorBoard logging verification.',
      colorClass: 'amber',
      bgLight: 'bg-amber-50',
      bgDark: 'dark:bg-amber-955/30',
      textLight: 'text-amber-600',
      textDark: 'dark:text-amber-450',
      progressGradient: 'from-amber-505 via-yellow-405 to-amber-505',
      waveFill: '#fb923c'
    },
    {
      name: 'LLMs & GenAI',
      category: 'Generative AI',
      level: 90,
      iconSymbol: '✨',
      svgIcon: (
        <svg className="w-11 h-11 text-[#10a37f] dark:text-[#3cd4a0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5-1.25-2.5-3.25-2.5-5.5a6.5 6.5 0 0 1 12.05-3.32" />
          <path d="M12 11h.01M16.5 4.5c1.25 1.5 3.25 2.5 5.5 2.5A6.5 6.5 0 0 1 18.68 19" />
          <path d="M11 12h.01M19.5 7.5C18.25 9 16.25 10 14 10a6.5 6.5 0 0 1-5.32-12.05" />
          <path d="M12 13h.01M7.5 19.5c-1.25-1.5-3.25-2.5-5.5-2.5a6.5 6.5 0 0 1 3.32-12.05" />
          <path d="M13 12h.01M4.5 7.5C5.75 6 7.75 5 10 5a6.5 6.5 0 0 1 5.32 12.05" />
          <path d="M19.5 16.5c1.25-1.5 2.25-3.5 2.25-5.5a6.5 6.5 0 0 1-12.05 3.32" />
        </svg>
      ),
      shortDesc: 'Generative AI orchestrations, Prompt systems, and RAG knowledge configurations.',
      longDesc: 'Implementing agent structures using Gemini API, vector search indexing (Milvus/Faiss), chunking documents, designing structured outputs, and creating customized chat playgrounds.',
      colorClass: 'emerald',
      bgLight: 'bg-emerald-50',
      bgDark: 'dark:bg-emerald-955/30',
      textLight: 'text-emerald-600',
      textDark: 'dark:text-emerald-450',
      progressGradient: 'from-emerald-505 via-teal-405 to-emerald-505',
      waveFill: '#34d399'
    },
    {
      name: 'Pandas',
      category: 'Data Analysis',
      level: 90,
      iconSymbol: '📊',
      svgIcon: (
        <div className="flex items-center gap-1.5">
          <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="10" width="4" height="10" rx="1" fill="#150458" />
            <rect x="10" y="4" width="4" height="16" rx="1" fill="#e70488" />
            <rect x="17" y="7" width="4" height="13" rx="1" fill="#3b82f6" fillOpacity="0.8" />
            <path d="M2 21h20" stroke="#150458" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      ),
      shortDesc: 'High-speed tabular computation, data sanitization, aggregation, and queries.',
      longDesc: 'Performing complex merge/join lookups, multi-indexing setups, group-by summarizations, custom vector functions mapping, and handling missing tabular dataset interpolations.',
      colorClass: 'orange',
      bgLight: 'bg-orange-50',
      bgDark: 'dark:bg-orange-955/30',
      textLight: 'text-orange-600',
      textDark: 'dark:text-orange-450',
      progressGradient: 'from-orange-405 via-amber-405 to-orange-405',
      waveFill: '#fb923c'
    },
    {
      name: 'Matplotlib',
      category: 'Data Visualization',
      level: 85,
      iconSymbol: '📈',
      svgIcon: (
        <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2 2" />
          <path d="M12 12 L12 4 A8 8 0 0 1 18 8 Z" fill="#F59E0B" fillOpacity="0.85" />
          <path d="M12 12 L18 8 A8 8 0 0 1 20 14 Z" fill="#EF4444" fillOpacity="0.85" />
          <path d="M12 12 L20 14 A8 8 0 0 1 12 20 Z" fill="#3B82F6" fillOpacity="0.85" />
          <path d="M12 12 L12 20 A8 8 0 0 1 6 15 Z" fill="#10B981" fillOpacity="0.85" />
          <path d="M12 12 L6 15 A8 8 0 0 1 12 4 Z" fill="#8B5CF6" fillOpacity="0.85" />
        </svg>
      ),
      shortDesc: 'Dynamic publication-rate charts, regression distributions, and 2D matrices.',
      longDesc: 'Plotting complex categorical distributions, bivariate density contour lines, custom colormap spectrums, multi-axis subplots arrangements, and styled scatter configurations.',
      colorClass: 'indigo',
      bgLight: 'bg-indigo-50',
      bgDark: 'dark:bg-indigo-955/30',
      textLight: 'text-indigo-600',
      textDark: 'dark:text-indigo-450',
      progressGradient: 'from-indigo-405 via-purple-405 to-indigo-405',
      waveFill: '#818cf8'
    },
    {
      name: 'MySQL',
      category: 'Databases',
      level: 85,
      iconSymbol: '🗄️',
      svgIcon: (
        <div className="flex flex-col items-center -space-y-1.5 select-none">
          <svg className="w-13 h-10" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 3.5c-.8-.8-2.2-1.2-3.5-1.1-1.4.1-2.5.8-3.1 1.8-.4.7-.6 1.5-.5 2.3.1.8.4 1.5.9 2H10c-2 0-3.5 1.5-3.5 3.3v2c0 1.2.7 2.3 1.8 2.8 1.1.5 2.4.3 3.3-.5l4.5-4.5c.8-.8 1.2-2 1.1-3.3s-.8-2.4-1.8-3c-.7-.4-1.5-.6-2.3-.5C14 4.5 15.5 4 17 4.2c1.3.2 2.3 1 2.8 2.2" stroke="#00758F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="18" cy="8.5" r="1.1" fill="#F29111" />
          </svg>
          <span className="font-sans font-black text-[#00758F] dark:text-[#339db5] text-[13px] tracking-tight">MySQL</span>
        </div>
      ),
      shortDesc: 'Relational logic, database structure design, constraints indexes, and normalization.',
      longDesc: 'Writing complex multi-table JOINS, analytical window functions (ROW_NUMBER, LEAD/LAG), subqueries optimization, stored procedures, and fine-tuning query execution speeds.',
      colorClass: 'sky',
      bgLight: 'bg-sky-50',
      bgDark: 'dark:bg-sky-955/30',
      textLight: 'text-sky-700',
      textDark: 'dark:text-sky-450',
      progressGradient: 'from-sky-505 via-blue-505 to-sky-505',
      waveFill: '#38bdf8'
    },
    {
      name: 'Jupyter Notebook',
      category: 'Tools & Platforms',
      level: 90,
      iconSymbol: '📓',
      svgIcon: (
        <div className="flex items-center gap-1.5 select-none">
          <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#71717a" strokeWidth="0.8" strokeDasharray="3 2" transform="rotate(-15, 12, 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#71717a" strokeWidth="0.8" strokeDasharray="3 2" transform="rotate(45, 12, 12)" />
            <circle cx="12" cy="12" r="2.8" fill="#F37626" />
            <circle cx="18.5" cy="5.5" r="1.2" fill="#71717a" />
            <circle cx="5.5" cy="18.5" r="1.2" fill="#71717a" />
          </svg>
        </div>
      ),
      shortDesc: 'Exploratory codebooks, live visualization integration, and computational essays.',
      longDesc: 'Rapid testing of prototypes, embedding interactive plots, structuring reproducible research data-flow, and compiling markdown cells with explanatory research insights.',
      colorClass: 'red',
      bgLight: 'bg-red-50',
      bgDark: 'dark:bg-red-955/30',
      textLight: 'text-red-650',
      textDark: 'dark:text-red-450',
      progressGradient: 'from-red-505 via-orange-405 to-red-505',
      waveFill: '#ef4444'
    }
  ];

  const filteredSkills = skillsData.filter(
    (skill) => selectedSkillCategory === 'All' || skill.category === selectedSkillCategory
  );

  return (
    <section id="skills" className="py-20 bg-[#FAF9FC] dark:bg-[#0A0914] border-y border-gray-200/50 dark:border-gray-800/40 relative overflow-hidden z-10 transition-colors duration-300">
      
      {/* 1. squiggly line from visual graph */}
      <div className="absolute top-12 left-6 z-0 pointer-events-none opacity-80 dark:opacity-40 hidden lg:block">
        <svg className="w-16 h-24 text-purple-400/60 dark:text-purple-600/30" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,10 C40,40 10,70 40,100 C10,130 45,160 20,190" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* 2. Floating Crystals and leaf branches in Corners mirroring exactly the layout */}
      <div className="absolute -bottom-10 -left-10 z-0 pointer-events-none opacity-60 dark:opacity-35 hidden md:block">
        <svg className="w-44 h-44" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="40,160 90,120 120,180" fill="url(#crystalGrad1)" opacity="0.18" />
          <polygon points="90,120 150,90 120,180" fill="url(#crystalGrad2)" opacity="0.25" />
          <polygon points="20,120 90,120 40,160" fill="url(#crystalGrad3)" opacity="0.12" stroke="#c084fc" strokeWidth="0.5" />
          <defs>
            <linearGradient id="crystalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="crystalGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="crystalGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 3. Floating Organic bean on the right */}
      <div className="absolute top-1/4 -right-12 z-0 pointer-events-none opacity-80 dark:opacity-45 hidden lg:block animate-float">
        <svg className="w-24 h-24 text-blue-500/10 dark:text-blue-600/5" viewBox="0 0 100 100" fill="currentColor">
          <path d="M20,50 C20,20 50,15 75,30 C100,45 90,75 70,85 C50,95 20,80 20,50 Z" />
        </svg>
      </div>

      {/* 4. Dot meshes representing technical core */}
      <div className="absolute top-24 right-1/3 z-0 pointer-events-none opacity-30 dark:opacity-20 hidden xl:block">
        <div className="grid grid-cols-6 gap-2 w-24">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-300 dark:bg-purple-800" />
          ))}
        </div>
      </div>

      {/* 5. Gorgeous bottom right branch stem */}
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none opacity-80 dark:opacity-35 hidden md:block">
        <svg className="w-48 h-64 text-indigo-400 dark:text-indigo-600" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main stem */}
          <path d="M190,290 C150,230 140,150 160,50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          {/* Leaf 1 */}
          <path d="M165,210 C130,210 110,180 130,160 C150,155 160,180 165,210" fill="url(#leafGrad)" />
          {/* Leaf 2 */}
          <path d="M160,150 C120,140 105,110 120,95 C135,90 150,115 160,150" fill="url(#leafGrad2)" />
          {/* Leaf 3 */}
          <path d="M153,95 C125,80 115,50 130,40 C145,40 150,65 153,95" fill="url(#leafGrad)" />
          {/* Leaf 4 (Right side) */}
          <path d="M172,185 C195,170 205,140 190,130 C175,130 170,155 172,185" fill="url(#leafGrad2)" />
          <defs>
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.75" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Elegant Segment Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 text-xs font-extrabold uppercase tracking-wider mb-2 border border-purple-100/50 dark:border-purple-900/30">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
              <span>MY EXPERTISE</span>
            </div>
            <h2 className="text-3.5xl sm:text-4xl font-display font-black text-gray-900 dark:text-white tracking-tight">
              Skills <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">& Technologies</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm max-w-xl leading-relaxed">
              A meticulously curated bento grid of tools, libraries, and frameworks I use to build robust generative AI structures, statistics classifiers, and rich telemetry models.
            </p>
          </div>

          {/* "Always Learning" side box matching the header style exactly */}
          <div className="bg-white dark:bg-[#121121] rounded-[24px] border border-gray-150 dark:border-gray-800 p-4.5 flex items-center gap-4.5 shadow-sm hover:shadow-md transition-all duration-300 max-w-sm w-full shrink-0 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-blue-500/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform" />
            <div className="w-11 h-11 rounded-full bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100/35 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 shadow-sm relative group-hover:bg-blue-100/35 transition-all duration-300">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="leading-snug">
              <h4 className="font-display font-black text-[#1E293B] dark:text-white text-sm tracking-tight flex items-center gap-1.5">
                Always Exploring
                <span className="animate-bounce text-xs">🚀</span>
              </h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed font-semibold mt-0.5">
                Investigating LLM reasoning chains, deep neuroevolution techniques, and reactive agent wrappers daily.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Menu */}
        <div className="flex flex-wrap gap-1.5 mb-10 pb-3 border-b border-gray-150/50 dark:border-gray-800/50">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedSkillCategory(category)}
              className={`px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-wide transition-all uppercase cursor-pointer ${
                selectedSkillCategory === category
                  ? 'bg-purple-600 dark:bg-purple-500 text-white shadow-md scale-102 font-extrabold'
                  : 'bg-white dark:bg-slate-900/70 hover:bg-gray-50 dark:hover:bg-slate-800/80 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Bento Grid - 4 Column Layout: Cards are compact and beautiful */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
          {filteredSkills.map((skill) => {
            const isHovered = hoveredSkillName === skill.name;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkillName(skill.name)}
                onMouseLeave={() => setHoveredSkillName(null)}
                className="bg-white dark:bg-[#12111d] rounded-3xl border border-gray-150/90 dark:border-gray-800/85 p-5 shadow-2xs hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden min-h-[235px]"
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Category Header Tag */}
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-100 dark:border-gray-800">
                    <div className={`p-1 px-2.5 rounded-full ${skill.bgLight} ${skill.bgDark} ${skill.textLight} ${skill.textDark} font-black text-[9.5px] tracking-wide uppercase flex items-center gap-1`}>
                      <span className="text-[10.5px]">{skill.iconSymbol}</span>
                      <span>{skill.category}</span>
                    </div>

                    <div className="text-gray-300 dark:text-gray-700 hover:text-purple-500 transition-colors pointer-events-none">
                      <Terminal className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Centered Brand Logo */}
                  <div className="h-18 flex items-center justify-center my-1 select-none">
                    {skill.svgIcon}
                  </div>

                  {/* Level percentage & Label text */}
                  <div className="mt-auto space-y-2 relative pt-2">
                    <div className="text-center relative">
                      <div className="text-2.5xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
                        {skill.level}%
                      </div>
                      <div className="text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">
                        {skill.name}
                      </div>
                    </div>

                    {/* Continuous Animating fluid progress bar */}
                    <div className="h-2 rounded-full bg-gray-100 dark:bg-slate-800/80 overflow-hidden relative shadow-inner">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.progressGradient} animate-fluid-flow`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Overlapping liquid wavy graphic layers at bottom back of levels */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0 opacity-60 dark:opacity-40 select-none">
                  <svg className="w-full h-16" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0,160 C320,220 640,140 960,190 C1280,240 1440,170 1440,170 L1440,320 L0,320 Z" fill={skill.waveFill} fillOpacity="0.10" />
                    <path d="M0,210 C360,250 720,200 1080,230 C1440,260 1440,320 1440,320 L0,320 Z" fill={skill.waveFill} fillOpacity="0.05" />
                  </svg>
                </div>

                {/* Floating translucent bubbles in bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 h-20 overflow-hidden pointer-events-none z-0">
                  <span className="absolute bottom-1 left-[15%] w-1.5 h-1.5 rounded-full bg-purple-300/30 dark:bg-indigo-300/10 blur-[0.3px] animate-float opacity-50" style={{ animationDelay: '0.1s', animationDuration: '4s' }} />
                  <span className="absolute bottom-7 left-[55%] w-2 h-2 rounded-full bg-pink-300/20 dark:bg-pink-300/10 blur-[0.3px] animate-float opacity-30" style={{ animationDelay: '1.2s', animationDuration: '6s' }} />
                  <span className="absolute bottom-3 right-[25%] w-1 h-1 rounded-full bg-blue-300/40 dark:bg-sky-300/15 blur-[0.3px] animate-float opacity-60" style={{ animationDelay: '0.6s', animationDuration: '3s' }} />
                </div>

                {/* Rich Hover Tooltip Card explanation */}
                <div
                  className={`absolute inset-0 z-20 bg-slate-950/95 dark:bg-[#070610]/98 p-5 flex flex-col justify-between transition-all duration-300 pointer-events-none select-none rounded-3xl ${
                    isHovered ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 translate-y-4 invisible'
                  }`}
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="flex items-center gap-1.5 text-pink-400">
                        <Info className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-pink-400">TECHNOLOGY KEY</span>
                      </div>
                      <span className="text-[10px] text-zinc-500 font-mono font-bold">{skill.name}</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white text-xs font-black tracking-tight tracking-wide font-sans">
                        {skill.shortDesc}
                      </h4>
                      <p className="text-[11px] text-zinc-300 leading-relaxed font-semibold font-sans">
                        {skill.longDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10 mt-auto">
                    <span className="text-[9px] text-zinc-500 font-bold font-mono">PROFICIENCY LEVEL:</span>
                    <span className="text-xs sm:text-sm font-black text-emerald-400">{skill.level}% Verified</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Highly Polished Bottom Statistics Banner */}
        <div className="mt-14 p-5 sm:p-6 bg-white/70 dark:bg-[#12111d]/75 backdrop-blur-md rounded-2xl border border-gray-150/90 dark:border-gray-800/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/2 via-transparent to-pink-500/2 opacity-70 pointer-events-none" />
          
          {/* Stat 1 */}
          <div className="flex-1 flex items-center gap-3.5 md:justify-center px-4 md:border-r border-gray-150/70 dark:border-gray-800/60">
            <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100/60 dark:border-blue-900/30 flex items-center justify-center text-blue-650 dark:text-blue-400 shrink-0">
              <svg className="w-5 h-5 text-blue-650" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <div className="leading-snug">
              <div className="text-xl font-black text-gray-900 dark:text-white font-sans tracking-tight">8+</div>
              <div className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">Technologies Mastered</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex-1 flex items-center gap-3.5 md:justify-center px-4 md:border-r border-gray-150/70 dark:border-gray-800/60">
            <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100/60 dark:border-indigo-900/30 flex items-center justify-center text-indigo-650 dark:text-indigo-400 shrink-0">
              <svg className="w-5 h-5 text-indigo-650" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <div className="leading-snug">
              <div className="text-xl font-black text-gray-900 dark:text-white font-sans tracking-tight">4+</div>
              <div className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">AI / ML Projects Built</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex-1 flex items-center gap-3.5 md:justify-center px-4 md:border-r border-gray-150/70 dark:border-gray-800/60">
            <div className="w-10 h-10 rounded-full bg-pink-50 dark:bg-pink-950/30 border border-pink-100/60 dark:border-pink-900/30 flex items-center justify-center text-pink-500 shrink-0">
              <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58l.004-.004a.2.2 0 00-.003-.312L13 12.12M12 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="1.8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.3 14.89l2.77 2.77a1 1 0 001.42 0l2.25-2.25a1 1 0 000-1.42l-2.77-2.77" />
              </svg>
            </div>
            <div className="leading-snug">
              <div className="text-xl font-black text-gray-900 dark:text-white font-sans tracking-tight">12K+</div>
              <div className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">Rows of Raw Data Cleaned</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex-1 flex items-center gap-3.5 md:justify-center px-4 md:border-r border-gray-150/70 dark:border-gray-800/60">
            <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-955/30 border border-amber-100/65 dark:border-amber-900/30 flex items-center justify-center text-amber-550 dark:text-amber-450 shrink-0">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-5.25c-.621 0-1.125.504-1.125 1.125v3.375m9 0V9M5.25 18.75V9m4.25-6.75h5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-5a.75.75 0 01-.75-.75V3a.75.75 0 01.75-.75z" />
              </svg>
            </div>
            <div className="leading-snug">
              <div className="text-xl font-black text-gray-900 dark:text-white font-sans tracking-tight">1+ Year</div>
              <div className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">Applied Pipeline Experience</div>
            </div>
          </div>

          {/* Stat 5 */}
          <div className="flex-1 flex items-center gap-3.5 md:justify-center px-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100/60 dark:border-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="leading-snug">
              <div className="text-xl font-black text-gray-900 dark:text-white font-sans tracking-tight">100%</div>
              <div className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">Dedicated Learner Vibe</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
