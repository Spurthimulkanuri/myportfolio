import { X, Mail, Phone, MapPin, Printer, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, EXPERIENCE_DATA } from '../data';
import { useState } from 'react';

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const resumeText = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.primaryRole}
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}

SUMMARY:
${PERSONAL_INFO.bio}

SKILLS PROFILE:
${SKILLS_DATA.map(cat => `${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}

EXPERIENCE:
${EXPERIENCE_DATA.role} - ${EXPERIENCE_DATA.company} (${EXPERIENCE_DATA.period})
${EXPERIENCE_DATA.bullets.map(b => `- ${b}`).join('\n')}
    `;
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4.5 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            <h3 className="font-display font-bold text-base sm:text-lg">Résumé Profile Viewer</h3>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="p-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1 cursor-pointer"
              title="Copy details"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1 cursor-pointer"
              title="Print document"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-slate-800 space-y-8 print:p-0">
          
          {/* Resume Header Area */}
          <div className="border-b border-slate-200 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base font-bold text-blue-600 font-sans uppercase tracking-wide">
                {PERSONAL_INFO.primaryRole}
              </p>
            </div>
            
            <div className="flex flex-col text-xs text-slate-500 space-y-1 font-medium font-mono text-center sm:text-right">
              <span className="flex items-center justify-center sm:justify-end gap-1.5 leading-none">
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                {PERSONAL_INFO.email}
              </span>

              <span className="flex items-center justify-center sm:justify-end gap-1.5 leading-none">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* 1. Summary Block */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
              Professional Summary
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* 2. Structured Skills Profile */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
              Structured Skill Matrix
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILLS_DATA.map((cat) => (
                <div key={cat.title} className="text-sm">
                  <span className="font-bold text-slate-900 tracking-tight block mb-1">
                    {cat.title}
                  </span>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Core Experience details */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
              Experience Record
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-start flex-wrap gap-2 text-sm">
                <div>
                  <span className="font-bold text-slate-900">{EXPERIENCE_DATA.role}</span>
                  <span className="text-slate-400 font-medium"> — {EXPERIENCE_DATA.company}</span>
                </div>
                <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                  {EXPERIENCE_DATA.period}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-600 leading-relaxed pl-2 font-sans">
                {EXPERIENCE_DATA.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer warning */}
        <div className="bg-slate-50 px-6 py-3 text-center text-[10px] text-slate-400 font-mono shrink-0 border-t border-slate-100">
          Recruiter verified printable summary matrix.
        </div>
      </div>
    </div>
  );
}
