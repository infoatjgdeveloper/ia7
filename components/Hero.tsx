import React from 'react';

const stats = [
  { value: '37+', label: 'Countries Served' },
  { value: '48h', label: 'Chatbot Deploy Time' },
  { value: '3', label: 'Global Entities' },
  { value: '100%', label: 'GDPR Compliant' },
];

const trustedBy = [
  { name: 'DPIIT Recognized', flag: '🇮🇳' },
  { name: 'Odoo Partner', flag: '🟢' },
  { name: 'EU Registered', flag: '🇪🇺' },
  { name: 'GDPR Ready', flag: '🔒' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 px-6 bg-white overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.5 }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0055ff]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* EU trust badge */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {trustedBy.map(t => (
            <span key={t.name} className="eu-badge">
              <span>{t.flag}</span>
              <span>{t.name}</span>
            </span>
          ))}
        </div>

        {/* Headline */}
        <div className="max-w-4xl mb-8">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1] tracking-tight text-slate-900 uppercase mb-6">
            AI-Powered<br />
            <span className="gradient-text">Software for</span><br />
            European Business.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl font-light">
            IA7 Global Tech delivers custom AI tools, chatbots, and web applications to growing companies in Germany and across Europe — built by our R&D team, secured by our US cybersecurity partner.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href="https://jgai-demo.netlify.app/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0055ff] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[#0044dd] transition-all shadow-lg shadow-[#0055ff]/20">
            <span>Try AI Chatbot Demo</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSepDnB0Iwe85gTNT1HbeIAqv-pQLm1aFhE0Qz8iTCeMEwaVPw/viewform?usp=publish-editor"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full text-sm font-bold hover:border-[#0055ff] hover:text-[#0055ff] transition-all">
            Book a Free Call
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-100">
          {stats.map(s => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-1">{s.value}</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
