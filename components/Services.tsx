
import React from 'react';
import { useTranslation } from 'react-i18next';



const Services: React.FC = () => {
  const { t } = useTranslation();

  const serviceData = [
    {
      title: t('services.items.development.title'),
      desc: t('services.items.development.desc'),
      id: "DEVELOPMENT",
      icon: "◎"
    },
    {
      title: t('services.items.infrastructure.title'),
      desc: t('services.items.infrastructure.desc'),
      id: "INFRASTRUCTURE",
      icon: "⊞"
    },
    {
      title: t('services.items.security.title'),
      desc: t('services.items.security.desc'),
      id: "SECURITY",
      icon: "▣"
    },
    {
      title: t('services.items.intelligence.title'),
      desc: t('services.items.intelligence.desc'),
      id: "INTELLIGENCE",
      icon: "◈"
    },
    {
      title: t('services.items.education.title'),
      desc: t('services.items.education.desc'),
      id: "EDUCATION",
      icon: "◪"
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 space-y-4">
          <div className="text-[11px] font-black text-[#0055ff] tracking-[0.3em] uppercase">{t('services.core_capabilities')}</div>
          <h2 className="text-5xl md:text-7xl heading uppercase text-slate-900">{t('services.title_prefix')} <br />{t('services.title_suffix')}</h2>
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
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0055ff]">{t('services.detailed_inquiry')}</span>
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
