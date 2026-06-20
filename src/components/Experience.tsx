import { EXPERIENCE_DATA } from '../data';
import { Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-slate-50 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 uppercase tracking-widest text-[11px] font-mono font-bold">
            Industry Practice
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Professional Experience & Metrics
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Rigorous deployment cycles, clean database alignments, and statistical insight delivery.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-slate-50/60 rounded-3xl border border-slate-100/90 shadow-sm p-6 sm:p-10 lg:p-12" id="experience-dashboard">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100/60 text-blue-800 font-mono text-xs font-bold uppercase tracking-wider">
                  Internship Profile
                </div>
                
                <h3 className="text-2xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                  {EXPERIENCE_DATA.role}
                </h3>
                
                <div className="flex flex-col text-slate-500 text-sm font-sans space-y-1">
                  <span className="font-bold text-slate-800 text-base">{EXPERIENCE_DATA.company}</span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {EXPERIENCE_DATA.location} (Remote Team Collaboration)
                  </span>
                  <span className="flex items-center gap-1 text-xs text-blue-600 font-semibold font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {EXPERIENCE_DATA.period}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 space-y-3.5">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Delivery KPI Stats
                </span>
                
                {EXPERIENCE_DATA.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex justify-between items-center bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs"
                  >
                    <span className="text-xs text-slate-500 font-sans font-semibold">
                      {metric.label}
                    </span>
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50/50 border border-blue-100/30 px-2 py-1 rounded-lg">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block border-b border-slate-50 pb-2">
                Action & Result Accomplishments
              </span>

              <div className="relative border-l border-slate-100 pl-4 sm:pl-6 space-y-6">
                {EXPERIENCE_DATA.bullets.map((bullet, idx) => (
                  <div key={idx} className="relative group" id={`exp-achievement-${idx}`}>
                    <div className="absolute -left-[24px] sm:-left-[32px] top-1.5 w-4 h-4 rounded-full bg-blue-50 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm text-slate-700 font-sans leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
