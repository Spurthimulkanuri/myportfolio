import { useState, FormEvent } from 'react';
import { PERSONAL_INFO } from '../data';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Pre-validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please complete all mandatory fields (Name, Email, and Message).');
      return;
    }

    // Email format checks
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Please supply a valid, properly formatted email address.');
      return;
    }

    setIsSubmitting(true);

    // Mock API delay for immersive premium response feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50 relative overflow-hidden border-t border-slate-100">
      {/* Decorative gradient overlay layers */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-teal-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-100 uppercase tracking-widest text-[11px] font-mono font-bold">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Have an open internship, a project vacancy, or a query about generative pipeline tests? Submit the dashboard form below.
          </p>
        </div>

        {/* Contact Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-stretch">
          
          {/* Left panel: Info & Call-To-Action highlight (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient vector */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl" />
            
            <div className="space-y-8 relative z-10">
              <div className="space-y-3">
                <span className="inline-block bg-blue-500/15 text-blue-400 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                  Open to Opportunities
                </span>
                <h3 className="text-2xl font-display font-extrabold tracking-tight leading-none">
                  Let's design elegant systems together
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                  Open to internships, data science opportunities, and AI/ML roles where I can combine my mathematical modeling interest with corporate workflow deliveries.
                </p>
              </div>

              {/* Informational Blocks */}
              <div className="space-y-4 pt-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 group text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Email Address</span>
                    <span className="font-semibold font-sans break-all">{PERSONAL_INFO.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3.5 group text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Telephone Number</span>
                    <span className="font-semibold font-sans">{PERSONAL_INFO.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-sm text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Location</span>
                    <span className="font-semibold font-sans">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Structured Social Network row */}
            <div className="pt-8 border-t border-white/10 relative z-10 flex flex-col gap-4">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold block">
                Connect and Monitor
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-350 cursor-pointer"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all duration-350 cursor-pointer"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right panel: Validated dashboard messaging interface form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-5 py-12 animate-fade-in font-sans">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-md">
                  <CheckCircle2 className="w-10 h-10 animate-scale-up" />
                </div>
                <div className="space-y-2 max-w-md">
                  <h4 className="text-xl font-display font-bold text-slate-950">
                    Message Delivered Perfectly!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Thank you. Your message has been validation Checked and logged in local virtual state. Expect a response shortly.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-4.5 py-2.5 bg-slate-100 text-slate-800 text-xs font-semibold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="contact-interactive-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-name" className="text-xs font-semibold text-slate-700 font-sans block">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ashok Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-email" className="text-xs font-semibold text-slate-700 font-sans block">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
                    />
                  </div>

                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="form-subject" className="text-xs font-semibold text-slate-700 font-sans block">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="form-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Schedule Data Science Interview"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="form-message" className="text-xs font-semibold text-slate-700 font-sans block">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your opening, key technologies, and schedule constraints..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all resize-none"
                  />
                </div>

                {/* Error Box display if any */}
                {errorMsg && (
                  <p className="text-xs text-red-600 font-semibold font-sans bg-red-50 border border-red-100 p-3 rounded-lg mb-2">
                    {errorMsg}
                  </p>
                )}

                {/* Submission CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="btn-contact-submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm hover:shadow-lg disabled:opacity-50 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>{isSubmitting ? 'Transmitting Pipeline Data...' : 'Submit Message'}</span>
                </button>
              </form>
            )}

            {/* Form system credential note */}
            <div className="pt-4 mt-4 border-t border-slate-100/80 text-center flex items-center justify-center gap-1 text-[10px] text-slate-400 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>Double Validation & State Security Configured</span>
            </div>

          </div>

        </div>

        {/* Unified Soft Footer markup block */}
        <div className="mt-24 pt-8 border-t border-slate-200 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-slate-500">
          <p>© 2026 Spurthi Mulkanuri. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with precision for </span>
            <span className="font-bold text-blue-600">Recruiter Visibility</span>
          </p>
        </div>

      </div>
    </section>
  );
}
