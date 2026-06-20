import { ACHIEVEMENTS_DATA } from '../data';
import { Medal, Trophy, Star, GraduationCap, Sparkles } from 'lucide-react';

export default function Achievements() {
  // Map icons to pre-defined config
  const getIcon = (type: 'medal' | 'badge' | 'trophy' | 'academic') => {
    switch (type) {
      case 'trophy':
        return <Trophy className="w-6 h-6 text-amber-500 animate-pulse" />;
      case 'medal':
        return <Medal className="w-6 h-6 text-blue-500" />;
      case 'academic':
        return <GraduationCap className="w-6 h-6 text-teal-500" />;
      default:
        return <Star className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <section id="achievements" className="py-24 bg-white/30 dark:bg-slate-900/20 backdrop-blur-[2px] relative overflow-hidden">
      {/* Dynamic blob background elements */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-50/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-100 uppercase tracking-widest text-[11px] font-mono font-bold">
            Career Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Key Academic & Placement Achievements
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Demonstrated standards in rigorous competitive testing environments and workplace delivery benchmarks.
          </p>
        </div>

        {/* Milestone boxes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <div
              key={item.title}
              className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 sm:p-8 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              id={`achievement-card-${idx}`}
            >
              {/* Highlight background blob */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-50/30 rounded-full transition-transform group-hover:scale-110 duration-500 pointer-events-none" />

              <div className="space-y-4">
                {/* Visual Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-800 group-hover:scale-105 transition-transform">
                  {getIcon(item.iconType)}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Verified Badge footnote */}
              <div className="mt-6 pt-4 border-t border-slate-100/80 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Accredited Milestone
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
