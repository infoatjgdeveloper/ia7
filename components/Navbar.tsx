import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'AI Chatbot', href: '#ai-chatbot' },
    { label: 'Our Group', href: '#ecosystem' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      scrolled ? 'bg-white shadow-sm shadow-slate-100' : 'bg-white/80 backdrop-blur-xl'
    } border-b border-slate-100`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-[#0055ff] rounded-lg flex items-center justify-center text-white font-display font-bold text-sm group-hover:bg-[#0044dd] transition-colors">
            7
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-slate-900 uppercase">
            IA7 <span className="text-[#0055ff]">Global Tech</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-[12px] font-semibold text-slate-500 hover:text-[#0055ff] transition-colors uppercase tracking-wide">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <a href="#contact"
            className="bg-[#0055ff] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-[#0044dd] transition-colors">
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2" aria-label="Menu">
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-slate-900 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-slate-900 transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-slate-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-8 flex flex-col gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setIsOpen(false)}
              className="text-lg font-bold uppercase tracking-wider text-slate-900 hover:text-[#0055ff]">
              {l.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <LanguageSwitcher />
            <a href="#contact" className="bg-[#0055ff] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
