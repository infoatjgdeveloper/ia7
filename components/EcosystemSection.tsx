import React from 'react';

const entities = [
  {
    flag: '🇮🇳',
    name: 'JG AI R&D',
    legal: 'JG AI Research & Development Pvt. Ltd.',
    location: 'Ahmedabad, India',
    role: 'R&D Backbone & HQ',
    desc: 'DPIIT-recognized AI startup. Builds all custom AI agents, LLMs, RAG systems, and web applications powering the group\'s products across 37+ countries.',
    link: 'https://www.jgdeveloper.com',
    badge: 'DPIIT Recognized',
    tags: ['AI Agents', 'LLM Dev', 'Web & Apps', 'Research'],
    color: '#0055ff',
  },
  {
    flag: '🇩🇪',
    name: 'IA7 Global Tech',
    legal: 'IA7 Global Trading UG (haftungsbeschränkt)',
    location: 'Berlin, Germany',
    role: 'European Arm — You Are Here',
    desc: 'The EU entity of the group. Contracts, delivers, and manages all services for European clients. Registered in Berlin, GDPR-compliant, German-law governed.',
    link: 'https://www.ia7globaltech.eu',
    badge: 'HRB 269255 · Berlin',
    tags: ['EU Market', 'GDPR Ready', 'German Law', 'Berlin HQ'],
    color: '#0E7C5A',
    highlight: true,
  },
  {
    flag: '🇺🇸',
    name: 'BRJU InfoSec',
    legal: 'BRJU InfoSec Inc.',
    location: 'Westmont, Illinois, USA',
    role: 'Cybersecurity Partner',
    desc: '30+ years of enterprise security expertise. Handles all cybersecurity services, pen testing, forensics, and compliance for the group — including as an Odoo Certified Partner.',
    link: 'https://www.brjuinfosec.com',
    badge: 'Odoo Certified Partner',
    tags: ['Cybersecurity', 'Odoo', 'Pen Testing', 'Compliance'],
    color: '#C95F0A',
  },
];

const EcosystemSection: React.FC = () => {
  return (
    <section id="ecosystem" className="py-20 md:py-28 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-4" style={{ color: '#60a5fa' }}>Global Entity Network</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight leading-tight">
            One Group.<br />
            <span className="gradient-text">Three Continents.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl leading-relaxed">
            When you work with IA7 Global Tech in Europe, you get access to a connected network — AI R&D from India, cybersecurity from the US, all coordinated from Berlin.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {entities.map((e) => (
            <div key={e.name} className={`relative rounded-2xl p-7 flex flex-col gap-5 border transition-all hover:-translate-y-1 duration-300 ${
              e.highlight
                ? 'bg-white/5 border-[#0055ff]/40 ring-1 ring-[#0055ff]/20'
                : 'bg-white/[0.03] border-white/10'
            }`}>
              {e.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-[#0055ff] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    You Are Here
                  </span>
                </div>
              )}

              {/* Flag + role */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{e.flag}</span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-white/5 px-2 py-1 rounded-full">
                    {e.badge}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight">{e.name}</h3>
                <p className="text-[10px] text-slate-500 mt-0.5">{e.legal}</p>
                <p className="text-[11px] font-semibold mt-1" style={{ color: e.color }}>{e.role}</p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed flex-1">{e.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {e.tags.map(t => (
                  <span key={t} className="text-[9px] font-bold uppercase tracking-wide px-2 py-1 rounded-full border"
                    style={{ color: e.color, borderColor: `${e.color}30`, background: `${e.color}10` }}>
                    {t}
                  </span>
                ))}
              </div>

              <a href={e.link} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors hover:underline"
                style={{ color: e.color }}>
                Visit Website →
              </a>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10">
          <p className="section-label mb-8 text-center" style={{ color: '#60a5fa' }}>How It Works For You As A Client</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: '01', title: 'Contact IA7 in Berlin', body: 'One point of contact in Europe. Contracts under German law, invoiced in EUR, fully GDPR-compliant.' },
              { n: '02', title: 'Built by JGAI in India', body: 'Your AI tools, chatbots, and web apps are engineered by our dedicated R&D team — fast and cost-efficient.' },
              { n: '03', title: 'Secured by BRJU (USA)', body: 'Any security needs — audits, pen testing, compliance — handled by our US cybersecurity partner.' },
            ].map(step => (
              <div key={step.n} className="text-center space-y-3">
                <div className="font-display text-5xl font-bold text-white/10">{step.n}</div>
                <h4 className="text-white font-bold uppercase tracking-wide text-sm">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EcosystemSection;
