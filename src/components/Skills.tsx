import { useState } from 'react';
import { SKILLS_DATA } from '../data';
import { Code, Cpu, Layers, Sparkles, BarChart2, Wrench, CheckCircle } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'BarChart2':
        return <BarChart2 className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-50/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 pb-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 uppercase tracking-widest text-[11px] font-mono font-bold">
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Data Science & AI Intelligence Core
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Rigorous hands-on practice crossing classical statistics, machine learning models, modern neural structures, and LLM orchestration.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-semibold transition-all duration-300 border ${
              selectedCategory === null
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Show All
          </button>
          {SKILLS_DATA.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-semibold transition-all duration-300 flex items-center gap-2 border ${
                selectedCategory === cat.title
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className="opacity-80">{getIcon(cat.iconName)}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {SKILLS_DATA.filter((cat) => selectedCategory === null || cat.title === selectedCategory).map((category, catIdx) => (
            <div
              key={category.title}
              className="bg-slate-50/50 rounded-2xl border border-slate-100/80 p-6 sm:p-7 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300 group"
              id={`skills-category-${catIdx}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-50 to-indigo-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                  {getIcon(category.iconName)}
                </div>
                <h3 className="font-display font-bold text-slate-800 text-lg tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={skill.name} className="space-y-1.5" id={`skill-${catIdx}-${sIdx}`}>
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-slate-700 font-sans">{skill.name}</span>
                      <span className="text-blue-600 font-mono">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-sans tracking-tight">
                      {skill.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-500 font-sans">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            Skill rates reflect applied academic benchmarks, real dataset processing pipelines, and deployment performance testing.
          </p>
        </div>

      </div>
    </section>
  );
}
