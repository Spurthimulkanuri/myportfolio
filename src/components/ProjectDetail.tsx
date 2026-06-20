import { PROJECTS_DATA } from '../data';
import { ArrowLeft, Check, Sparkles, AlertCircle, Cpu, ShieldAlert, CheckCircle } from 'lucide-react';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = PROJECTS_DATA.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="py-24 text-center">
        <p className="text-slate-500">Project not found.</p>
        <button onClick={onBack} className="text-blue-600 hover:underline">Go Back</button>
      </div>
    );
  }

  const isCounselor = project.id === 'counselor';

  return (
    <div className={`min-h-screen pt-24 pb-20 animate-fade-in transition-all duration-500 ${
      isCounselor ? 'bg-gradient-to-b from-indigo-50/40 via-white to-slate-50' : 'bg-gradient-to-b from-teal-50/30 via-white to-slate-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 group text-sm font-sans font-semibold text-slate-600 hover:text-slate-900 mb-8 px-4 py-2 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer"
          id="btn-detail-back"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>

        <div className={`relative rounded-3xl overflow-hidden shadow-sm border border-slate-100 mb-12 p-8 sm:p-12 flex flex-col justify-between min-h-[300px] ${
          isCounselor 
            ? 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800 text-white' 
            : 'bg-gradient-to-br from-blue-700 via-sky-700 to-teal-600 text-white'
        }`} id="project-detail-hero">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-emerald-100 border border-white/15">
              Detailed Case Study & Architecture
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-none">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-blue-100 font-sans font-medium">
              {project.tagline}
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-2 pt-6">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-mono bg-white/15 backdrop-blur-md text-white border border-white/10 px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-lg font-display font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className={`w-1.5 h-6 rounded ${isCounselor ? 'bg-indigo-600' : 'bg-teal-500'}`} />
                Executive Summary
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                {project.overview}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-lg font-display font-bold text-slate-800 tracking-tight flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                The Problem / Business Need
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                {project.problem}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-lg font-display font-bold text-slate-800 tracking-tight flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-600" />
                Core Pipeline & Workflow Architecture
              </h3>

              {isCounselor ? (
                <div className="space-y-4 font-sans">
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-3">
                    <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest block">
                      Fine-Tuning Architecture Scheme
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs font-semibold py-2">
                      <div className="bg-indigo-50/70 text-indigo-700 p-4 rounded-xl border border-indigo-100 flex flex-col items-center justify-center gap-1.5">
                        <span className="font-bold text-lg font-mono">Step 1</span>
                        <span className="text-[11px] leading-snug">Bhagavad Gita translation dataset parsing in conversational QA format</span>
                      </div>
                      <div className="bg-blue-50/70 text-blue-700 p-4 rounded-xl border border-blue-100 flex flex-col items-center justify-center gap-1.5">
                        <span className="font-bold text-lg font-mono">Step 2</span>
                        <span className="text-[11px] leading-snug">Mistral 7B quantized in 4-bit NF4 double validation</span>
                      </div>
                      <div className="bg-teal-50/70 text-teal-700 p-4 rounded-xl border border-teal-100 flex flex-col items-center justify-center gap-1.5">
                        <span className="font-bold text-lg font-mono">Step 3</span>
                        <span className="text-[11px] leading-snug">Empathetic alignment using PEFT / LoRA target modules</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50">
                    <div className="bg-slate-200/50 p-2 text-[10px] font-mono text-slate-500 px-4 border-b border-slate-100 flex justify-between">
                      <span>VALIDATED MISTRAL-7B LORA AGENT TERMINAL</span>
                      <span className="text-emerald-600 font-bold">STATUS: COMPLIANT</span>
                    </div>
                    <div className="p-4 space-y-3.5 text-xs">
                      <div className="space-y-1">
                        <span className="font-semibold text-slate-505 font-mono">[User Expression of Duty Distress]</span>
                        <p className="bg-white p-3 rounded-xl border border-slate-100 text-slate-700 leading-relaxed shadow-sm">
                          "I am completely overwhelmed by my exam results and career pressure. I feel like static noise. What is the correct action?"
                        </p>
                      </div>
                      <div className="space-y-1">
                        <span className="font-semibold text-indigo-600 font-mono">[Empathetic QLoRA Active Alignment]</span>
                        <p className="bg-gradient-to-r from-indigo-50 to-blue-50 p-3.5 rounded-xl border border-indigo-100/40 text-slate-800 leading-relaxed shadow-sm">
                          "It is natural to feel heavy when your actions appear tied only to future victories. Rest your racing mind momentarily. Recall that you have a fundamental right only to perform your duties, never to the fruit thereof."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 font-sans">
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-3">
                    <span className="text-[10px] font-mono font-bold text-teal-600 uppercase tracking-widest block">
                      RAG Document Matching Sequence
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs font-semibold py-2">
                      <div className="bg-slate-100/80 p-3 rounded-lg border border-slate-200">
                        <span className="block font-mono text-[10px] text-slate-400 font-bold mb-1">01. INGESTION</span>
                        <span className="font-bold text-[11px] text-slate-700">Catalog Segmenting / Chunking</span>
                      </div>
                      <div className="bg-sky-50/70 p-3 rounded-lg border border-sky-100 text-sky-800">
                        <span className="block font-mono text-[10px] text-sky-500 font-bold mb-1">02. EMBEDDINGS</span>
                        <span className="font-bold text-[11px]">Sentence Transformers encoding</span>
                      </div>
                      <div className="bg-blue-50/70 p-3 rounded-lg border border-blue-100 text-blue-800">
                        <span className="block font-mono text-[10px] text-blue-500 font-bold mb-1">03. STORAGE</span>
                        <span className="font-bold text-[11px]">FAISS Vector Index local matches</span>
                      </div>
                      <div className="bg-teal-50/70 p-3 rounded-lg border border-teal-100 text-teal-800">
                        <span className="block font-mono text-[10px] text-teal-500 font-bold mb-1">04. LEAD GATE</span>
                        <span className="font-bold text-[11px]">Format & MX Regex validation</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-lg font-display font-bold text-slate-800 tracking-tight flex items-center gap-2">
                <span className={`w-1.5 h-6 rounded ${isCounselor ? 'bg-indigo-600' : 'bg-teal-500'}`} />
                The Technical Solution Approach
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                {project.approach}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400">
                Key Parameters
              </h4>
              
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-slate-400 font-medium font-sans">Core Target</span>
                  <div className="text-sm font-sans font-bold text-slate-800">
                    {isCounselor ? 'Mental Health & Spiritual Counselor' : 'SaaS Lead Conversion Ingestion'}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium font-sans">Status</span>
                  <div className="text-sm font-sans font-bold text-emerald-600 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-ping" />
                    Complete & Deployment Ready
                  </div>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium font-sans">Compute Footprint</span>
                  <div className="text-sm font-mono font-bold text-slate-700">
                    {isCounselor ? 'HuggingFace PEFT QLoRA' : 'LangChain / FAISS Vectors'}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400">
                Key Features Designed
              </h4>
              <div className="space-y-3">
                {project.features.map((feat) => (
                  <div key={feat} className="flex gap-2.5 items-start">
                    <div className={`p-1 rounded-md shrink-0 mt-0.5 ${isCounselor ? 'bg-indigo-50 text-indigo-600' : 'bg-teal-50 text-teal-600'}`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-medium text-slate-700 leading-relaxed font-sans">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 text-white p-6 rounded-2xl shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Impact & Outcomes
              </h4>
              <div className="space-y-3 pt-2">
                {project.outcomes.map((outcome, oIdx) => (
                  <p key={oIdx} className="text-xs text-slate-300 font-sans leading-relaxed">
                    {outcome}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100 shadow-sm space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                Technical Constraints Handled
              </h4>
              <div className="space-y-3 pt-1">
                {project.challenges.map((chal, cIdx) => (
                  <p key={cIdx} className="text-xs text-slate-700 font-sans leading-relaxed">
                    {chal}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-blue-50/40 p-6 rounded-2xl border border-blue-100 shadow-sm space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-800 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Next Implementation Roadmap
              </h4>
              <div className="space-y-2 pt-1 font-sans">
                {project.futureScope.map((scope, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                    <span className="font-mono text-blue-600 font-bold">{`0${sIdx+1}.`}</span>
                    <span>{scope}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
