
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { searchEuropeTrends } from '../services/geminiService';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [signal, setSignal] = useState<string>('SYNCHRONIZING SYSTEMS...');

  useEffect(() => {
    searchEuropeTrends().then(setSignal);
  }, []);

  return (
    <section className="relative pt-32 md:pt-40 pb-24 px-6 hero-gradient min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#0055ff]/5 border border-[#0055ff]/10 text-[#0055ff] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0055ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0055ff]"></span>
              </span>
              {t('hero.badge')}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl leading-[0.9] uppercase heading tracking-tighter text-slate-900">
              {t('hero.title_prefix')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055ff] to-emerald-500">{t('hero.title_suffix')}</span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          <div className="lg:col-span-4 lg:pl-12">
            <div className="p-8 glass-card rounded-3xl space-y-8">
              <div className="space-y-4">
                <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">{t('hero.market_intelligence')}</div>
                <p className="text-sm text-slate-700 leading-relaxed font-medium italic">
                  "{signal}"
                </p>
              </div>

              <div className="h-px bg-slate-100" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold heading text-[#0055ff]">99.99</div>
                  <div className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">{t('hero.core_uptime')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold heading text-slate-900">4.0.2</div>
                  <div className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">{t('hero.system_revision')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
