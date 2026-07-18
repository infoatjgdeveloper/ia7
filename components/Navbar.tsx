import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'AI Chatbot', href: '#ai-chatbot' },
    { label: 'Our group', href: '#group' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? 'rgba(255,255,255,0.96)' : '#fff', borderBottom: '1px solid #e8eeff', backdropFilter: scrolled ? 'blur(12px)' : 'none', transition: 'all 0.2s ease' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo.png" alt="IA7 Global Tech" style={{ height: 36, width: 'auto', display: 'block' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hide-mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ fontSize: 13, color: '#666', fontWeight: 400, transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0055ff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#666')}>
              {l.label}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }} className="hide-mobile">
          <LanguageSwitcher />
          <a href="#contact" className="btn btn-dark" style={{ fontSize: 12, padding: '8px 18px' }}>Get started</a>
        </div>
        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }} className="show-mobile">
          <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ display: 'block', height: 1.5, background: '#0f0f0f', transition: 'all 0.2s', transform: open ? 'rotate(45deg) translateY(6px)' : 'none' }} />
            <span style={{ display: 'block', height: 1.5, background: '#0f0f0f', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', height: 1.5, background: '#0f0f0f', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
          </div>
        </button>
      </div>
      {open && (
        <div style={{ borderTop: '1px solid #e8eeff', background: '#fff', padding: '20px 36px 28px' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '12px 0', fontSize: 16, fontWeight: 500, color: '#0f0f0f', borderBottom: '1px solid #f5f5f5' }}>{l.label}</a>
          ))}
          <div style={{ marginTop: 20, display: 'flex', gap: 12, alignItems: 'center' }}>
            <LanguageSwitcher />
            <a href="#contact" className="btn btn-dark">Get started</a>
          </div>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) { .hide-mobile { display: none !important; } .show-mobile { display: flex !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </nav>
  );
};
export default Navbar;
