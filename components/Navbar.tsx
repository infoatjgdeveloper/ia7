import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <div className="text-xl font-bold tracking-tighter uppercase heading flex items-center gap-2">
            <div className="w-6 h-6 bg-[#0055ff] flex items-center justify-center text-white text-[10px] rounded-[4px]">7</div>
            IA7 <span className="text-[#0055ff]">GLOBAL TECH</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">
            <a href="#services" className="hover:text-[#0055ff] transition-colors">{t('navbar.services')}</a>
            <a href="#partner" className="hover:text-[#0055ff] transition-colors">{t('navbar.rd_lab')}</a>
            <a href="#consult" className="hover:text-[#0055ff] transition-colors">{t('navbar.inquiry')}</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-50 transition-all duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} style={{ top: '73px' }}>
        <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold uppercase tracking-widest text-slate-900 hover:text-[#0055ff] transition-colors"
          >
            {t('navbar.services')}
          </a>
          <a
            href="#partner"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold uppercase tracking-widest text-slate-900 hover:text-[#0055ff] transition-colors"
          >
            {t('navbar.rd_lab')}
          </a>
          <a
            href="#consult"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold uppercase tracking-widest text-slate-900 hover:text-[#0055ff] transition-colors"
          >
            {t('navbar.inquiry')}
          </a>

          <div className="pt-8 border-t border-slate-100 w-48 flex justify-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
