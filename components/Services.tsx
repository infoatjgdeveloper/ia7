
import React from 'react';

const serviceData = [
  {
    title: "Web App Development",
    desc: "Architecting high-performance, scalable web applications using cutting-edge headless stacks and edge computing.",
    id: "DEVELOPMENT",
    icon: "◎"
  },
  {
    title: "Cloud Computing",
    desc: "Sovereign cloud strategies, migration, and FinOps optimization within secure European infrastructure environments.",
    id: "INFRASTRUCTURE",
    icon: "⊞"
  },
  {
    title: "Cybersecurity",
    desc: "Zero-trust architecture, NIS2 compliance auditing, and proactive threat intelligence to shield critical assets.",
    id: "SECURITY",
    icon: "▣"
  },
  {
    title: "AI/ML",
    desc: "Deployment of proprietary neural architectures, RAG systems, and custom model integration for enterprise logic.",
    id: "INTELLIGENCE",
    icon: "◈"
  },
  {
    title: "AI Training",
    desc: "Specialized training programs for technical teams to master LLM orchestration and ethical AI deployment protocols.",
    id: "EDUCATION",
    icon: "◪"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 space-y-4">
          <div className="text-[11px] font-black text-[#0055ff] tracking-[0.3em] uppercase">Core Capabilities</div>
          <h2 className="text-5xl md:text-7xl heading uppercase text-slate-900">Precision <br/>Services.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((s) => (
            <div key={s.id} className="p-10 glass-card rounded-[32px] group relative overflow-hidden bg-white h-full flex flex-col">
              <div className="flex justify-between items-start mb-16">
                <span className="text-4xl text-[#0055ff]">{s.icon}</span>
                <div className="text-[9px] font-bold text-slate-300 tracking-widest uppercase">{s.id}</div>
              </div>
              <h3 className="text-2xl font-bold heading uppercase mb-4 text-slate-900">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{s.desc}</p>
              
              <div className="pt-6 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0055ff]">Detailed Inquiry</span>
                <div className="w-1.5 h-1.5 bg-[#0055ff] rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
