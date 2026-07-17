import React from 'react';

const entities = [
  {
    name: "JG AI R&D",
    fullName: "JG AI Research & Development Pvt. Ltd.",
    country: "India 🇮🇳",
    role: "HQ & R&D Backbone",
    description: "DPIIT-recognized AI startup powering all three entities. Builds custom LLMs, AI agents, RAG systems, and automation tools deployed across 37+ countries.",
    link: "https://www.jgdeveloper.com",
    linkLabel: "jgdeveloper.com",
    color: "#0055ff",
    lightBg: "#EEF4FF",
    tags: ["AI Agents", "LLM Development", "RAG Systems", "Web & App Dev"],
    badge: "DPIIT Recognized",
  },
  {
    name: "IA7 Global Tech",
    fullName: "IA7 Global Trading UG (haftungsbeschränkt)",
    country: "Germany 🇩🇪",
    role: "European Arm",
    description: "The European face of the group. Delivers AI-powered software, custom web applications, and IT solutions to businesses in Germany and across the EU.",
    link: "https://www.ia7globaltech.eu",
    linkLabel: "ia7globaltech.eu",
    color: "#0E7C5A",
    lightBg: "#E3F5EE",
    tags: ["EU Market", "Custom Software", "AI Integration", "IT Consulting"],
    badge: "Amtsgericht Berlin · HRB 269255",
    highlight: true,
  },
  {
    name: "BRJU InfoSec",
    fullName: "BRJU InfoSec Inc.",
    country: "USA 🇺🇸",
    role: "Security Partner",
    description: "North American cybersecurity firm with 30+ years of expertise. Handles all security services, compliance, and forensics for the group's clients worldwide.",
    link: "https://www.brjuinfosec.com",
    linkLabel: "brjuinfosec.com",
    color: "#C95F0A",
    lightBg: "#FEF0E4",
    tags: ["Cybersecurity", "Odoo Partner", "Forensics", "Compliance"],
    badge: "Odoo Certified Partner",
  },
];

const EcosystemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#0f172a]" id="ecosystem">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-block px-4 py-1.5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-[#0055ff] rounded-full mb-6">
            Global Entity Network
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl heading uppercase leading-[0.9] tracking-tighter text-white">
            One Group. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055ff] to-emerald-400">Three Entities.</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl leading-relaxed">
            IA7 Global Tech is part of a connected group of companies spanning India, Europe, and North America — designed to deliver AI, software, and security services under one coordinated network.
          </p>
        </div>

        {/* Entity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {entities.map((e) => (
            <div
              key={e.name}
              className={`relative rounded-2xl border p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 ${
                e.highlight
                  ? 'border-[#0055ff]/40 bg-[#0055ff]/5'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              {e.highlight && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-[#0055ff] text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                    You Are Here
                  </span>
                </div>
              )}

              {/* Entity name + country */}
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2" style={{ color: e.color }}>
                  {e.country} · {e.role}
                </div>
                <h3 className="text-2xl font-black text-white heading uppercase tracking-tight">
                  {e.name}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1">{e.fullName}</p>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                {e.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {e.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                    style={{ color: e.color, borderColor: `${e.color}40`, backgroundColor: `${e.color}10` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Badge + Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                  {e.badge}
                </span>
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-black uppercase tracking-wider hover:underline transition-all"
                  style={{ color: e.color }}
                >
                  {e.linkLabel} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How it works for clients */}
        <div className="mt-16 p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02]">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4">How It Works For You</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { step: "01", title: "Contact IA7 in Europe", desc: "Single point of contact for all EU clients. We handle contracts, communication, and delivery." },
              { step: "02", title: "Powered by JGAI R&D", desc: "All AI development, custom software, and technical work is executed by our India R&D team." },
              { step: "03", title: "Secured by BRJU", desc: "Every solution is built with security in mind — or handed to BRJU InfoSec for dedicated security needs." },
            ].map(item => (
              <div key={item.step} className="space-y-3">
                <div className="text-4xl font-black text-white/10 heading">{item.step}</div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EcosystemSection;
