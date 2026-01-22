import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from './Hero';
import PartnerSection from './PartnerSection';
import Services from './Services';
import Footer from './Footer';

const HomePage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Hero />

            {/* Subtle Brand Marquee */}
            <section className="py-20 border-y border-slate-50 bg-white overflow-hidden">
                <div className="animate-marquee whitespace-nowrap">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-24 items-center px-12">
                            <span className="text-3xl font-black heading uppercase tracking-tighter text-slate-100 italic">Siemens</span>
                            <span className="text-3xl font-black heading uppercase tracking-tighter text-slate-100 italic">T-Systems</span>
                            <span className="text-3xl font-black heading uppercase tracking-tighter text-slate-100 italic">Schneider</span>
                            <span className="text-3xl font-black heading uppercase tracking-tighter text-slate-100 italic">Novartis</span>
                            <span className="text-3xl font-black heading uppercase tracking-tighter text-slate-100 italic">TotalEnergies</span>
                        </div>
                    ))}
                </div>
            </section>

            <Services />

            {/* Lab / Partnership Highlight */}
            <PartnerSection />

            {/* Strategic CTA */}
            <section className="py-24 md:py-48 px-6 bg-[#0f172a] text-white relative overflow-hidden" id="consult">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0055ff]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                    <div className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0055ff]">{t('cta.badge')}</div>
                    <h2 className="text-4xl md:text-6xl lg:text-8xl heading uppercase leading-[0.9] tracking-tighter">
                        {t('cta.title_prefix')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055ff] to-emerald-400">{t('cta.title_suffix')}</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                        {t('cta.description')}
                    </p>
                    <div className="pt-8">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSepDnB0Iwe85gTNT1HbeIAqv-pQLm1aFhE0Qz8iTCeMEwaVPw/viewform?usp=publish-editor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-[#0f172a] px-16 py-6 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-[#0055ff] hover:text-white transition-all shadow-2xl shadow-black/20"
                        >
                            {t('cta.button')}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default HomePage;
