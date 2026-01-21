
import React from 'react';
import { useTranslation } from 'react-i18next';

const PartnerSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="partner" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[48px] p-12 md:p-24 relative overflow-hidden group">
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-[#0055ff] rounded-full">{t('partner.badge')}</div>
                <h2 className="text-5xl md:text-7xl font-black heading uppercase leading-[0.9] text-white">
                  {t('partner.title_prefix')} <br />
                  <span className="text-slate-500">{t('partner.title_suffix')}</span>
                </h2>
              </div>

              <p className="text-slate-400 text-xl font-light leading-relaxed max-w-xl">
                {t('partner.description_prefix')} <span className="text-white font-bold underline decoration-[#0055ff] underline-offset-8">{t('partner.description_highlight')}</span>{t('partner.description_suffix')}
              </p>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
                  <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-3">{t('partner.accreditation')}</div>
                  <div className="text-2xl font-bold heading text-white tracking-tight">{t('partner.tier')}</div>
                </div>
                <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
                  <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-3">{t('partner.verification_id')}</div>
                  <div className="text-2xl font-bold heading text-white tracking-tight">#JG-IA7-26</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-[#0055ff]/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="w-full max-w-sm aspect-square bg-white p-2 rounded-[40px] shadow-2xl relative z-10">
                <div className="w-full h-full border-4 border-slate-50 p-12 flex flex-col justify-between rounded-[36px]">
                  <div className="flex justify-between items-start">
                    <div className="text-2xl font-black heading text-slate-900 tracking-tighter">IA7 <span className="text-[#0055ff]">GT</span></div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-300">CERT-88A</div>
                  </div>

                  <a
                    href="https://jgai.jgdeveloper.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                  >
                    <div className="w-24 h-24 border-[1px] border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-inner relative">
                      <div className="absolute inset-0 bg-[#0055ff]/5 rounded-full animate-pulse" />
                      <div className="text-3xl font-black italic text-[#0f172a]">JG</div>
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">{t('partner.verified_partner')}</div>
                  </a>

                  <div className="text-center pt-8 border-t border-slate-50">
                    <div className="text-[11px] font-black uppercase tracking-widest text-slate-900">{t('partner.company_name')}</div>
                    <div className="text-[9px] text-slate-400 mt-2 font-bold uppercase tracking-[0.1em]">{t('partner.role')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
