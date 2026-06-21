import { PROJECTS_DATA } from '../data';
import { ArrowRight, Github } from 'lucide-react';

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
          {PROJECTS_DATA.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-white rounded-[24px] border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden group"
                id={`project-card-${project.id}`}
              >
                {/* Project Image Header */}
                {project.image && (
                  <div className="w-full h-64 sm:h-72 overflow-hidden relative bg-[#F8F9FE] border-b border-slate-100 flex items-center justify-center p-6">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-in-out drop-shadow-sm" 
                    />
                  </div>
                )}

                <div className="p-8 sm:p-10 flex flex-col flex-grow space-y-6">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold font-sans tracking-wide text-purple-600 bg-purple-50/50 px-2.5 py-1 rounded-md uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-sans leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-3 flex-grow pt-2">
                    {project.bullets.slice(0, 3).map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3 text-sm">
                        <div className="w-4 h-4 rounded-full border border-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-600 font-sans leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-8 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(project.id)}
                      className="px-6 py-2.5 rounded-xl text-sm font-bold font-sans flex items-center gap-2 transition-all duration-300 text-purple-700 bg-purple-50 hover:bg-purple-100"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                        title="View Source on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
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
