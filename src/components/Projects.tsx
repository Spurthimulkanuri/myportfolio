import { PROJECTS_DATA } from '../data';
import { ArrowRight, Sparkles, CheckSquare } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (id: string) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 bg-white/30 dark:bg-slate-900/20 backdrop-blur-[2px] relative overflow-hidden border-t border-b border-purple-100/30 dark:border-purple-900/20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100 uppercase tracking-widest text-[11px] font-mono font-bold">
            Project Deliveries
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            High Impact AI & Data Engineering
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Real-world systems, fine-tuned foundational models, and reliable knowledge retrieval pipelines, built using reliable testing protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project, idx) => {
            const isCounselor = project.id === 'counselor';
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden group relative"
                id={`project-card-${project.id}`}
              >
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${
                    isCounselor ? 'from-indigo-500 to-blue-500' : 'from-blue-500 to-teal-400'
                  }`}
                />

                {project.image && (
                  <div className="w-full h-48 sm:h-56 overflow-hidden relative bg-slate-50 border-b border-slate-100">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                    />
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-5">
                  <div className="flex justify-between items-start gap-4">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      isCounselor ? 'text-indigo-700 bg-indigo-50' : 'text-teal-700 bg-teal-50'
                    }`}>
                      {isCounselor ? 'Generative AI fine-Tuning' : 'RAG Agent Intelligence'}
                    </span>
                    <span className="text-xs text-slate-400 font-medium font-sans">
                      {isCounselor ? 'PEFT / QLoRA' : 'Dense Vector Search'}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium font-sans">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 py-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-sans font-medium text-slate-600 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 bg-slate-50/50 rounded-xl p-4 border border-dashed border-slate-100 flex-grow">
                    <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-2">
                      Core Highlights
                    </span>
                    {project.bullets.slice(0, 3).map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs">
                        <CheckSquare className={`w-3.5 h-3.5 ${isCounselor ? 'text-indigo-500' : 'text-teal-500'} mt-0.5 shrink-0`} />
                        <span className="text-slate-600 font-sans leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Recruiter Verified</span>
                    </div>

                    <button
                      onClick={() => onSelectProject(project.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold font-sans flex items-center gap-1.5 transition-all duration-300 cursor-pointer border ${
                        isCounselor
                          ? 'border-indigo-100 text-indigo-700 bg-indigo-50/50 hover:bg-indigo-50 hover:border-indigo-200'
                          : 'border-blue-100 text-blue-700 bg-blue-50/50 hover:bg-blue-50 hover:border-blue-200'
                      }`}
                      id={`project-view-btn-${project.id}`}
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
