import { CERTIFICATIONS_DATA } from '../data';
import { Award, ShieldCheck, CheckCircle2, Link } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-transparent relative overflow-hidden border-t border-purple-100/30 dark:border-purple-900/20">
      {/* Soft abstract graphic background elements */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-blue-50/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-widest text-[11px] font-mono font-bold">
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Rigorous validation programs certifying hands-on experience under corporate mentors.
          </p>
        </div>

        {/* Certificate Tiles Grid */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div
              key={cert.title}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:shadow-md hover:border-slate-200 hover:scale-[1.01] transition-all duration-300 group"
              id={`cert-card-${idx}`}
            >
              <div className="flex items-start gap-4">
                {/* Decorative Emblem Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-500 to-teal-400 text-white flex items-center justify-center shadow-md shadow-blue-100 shrink-0 group-hover:rotate-3 transition-transform">
                  <Award className="w-7 h-7" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 font-sans">
                    <span className="font-bold text-slate-700">{cert.issuer}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full hidden sm:block" />
                    <span className="font-medium font-mono text-blue-600">{cert.date}</span>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-100 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Certificate</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
