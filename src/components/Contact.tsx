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

  const handleSubmit = async (e: FormEvent) => {
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

    try {
      const response = await fetch('https://formspree.io/f/xrewzzrv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email, subject, message })
      });

      if (response.ok) {
        setIsSuccess(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setErrorMsg('Oops! There was a problem delivering your message. Please try again.');
      }
    } catch (error) {
      setErrorMsg('Oops! There was a network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white/30 dark:bg-slate-900/20 backdrop-blur-[2px] relative overflow-hidden border-t border-purple-100/30 dark:border-purple-900/20">
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
          <div className="lg:col-span-7 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-slate-800/60 p-8 sm:p-10 shadow-2xl shadow-indigo-500/5 dark:shadow-black/20 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
            
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
                    <label htmlFor="form-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-sans block">
                      Name <span className="text-red-500 dark:text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ashok Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-md"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-email" className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-sans block">
                      Email Address <span className="text-red-500 dark:text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-md"
                    />
                  </div>

                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="form-subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-sans block">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="form-subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Schedule Data Science Interview"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-md"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="form-message" className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-sans block">
                    Message <span className="text-red-500 dark:text-red-400">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your opening, key technologies, and schedule constraints..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-md resize-none"
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
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 disabled:opacity-50 transition-all cursor-pointer border border-indigo-500/50"
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
