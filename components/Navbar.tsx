
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
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
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
