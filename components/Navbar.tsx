
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <div className="text-xl font-bold tracking-tighter uppercase heading flex items-center gap-2">
            <div className="w-6 h-6 bg-[#0055ff] flex items-center justify-center text-white text-[10px] rounded-[4px]">7</div>
            IA7 <span className="text-[#0055ff]">GLOBAL TECH</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">
            <a href="#services" className="hover:text-[#0055ff] transition-colors">Services</a>
            <a href="#partner" className="hover:text-[#0055ff] transition-colors">R&D Lab</a>
            <a href="#consult" className="hover:text-[#0055ff] transition-colors">Inquiry</a>
          </div>
        </div>

        {/* <div className="flex items-center gap-4">
          <button className="bg-[#0f172a] text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider hover:bg-[#0055ff] transition-all rounded-full shadow-lg shadow-slate-200">
            Briefing
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
