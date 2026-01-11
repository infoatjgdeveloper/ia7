
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerSection from './components/PartnerSection';
import Services from './components/Services';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#0055ff]/10 selection:text-[#0055ff] bg-white">
      <Navbar />
      <main>
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
        <section className="py-48 px-6 bg-[#0f172a] text-white relative overflow-hidden" id="consult">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0055ff]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0055ff]">Initiate Engagement</div>
            <h2 className="text-5xl md:text-8xl heading uppercase leading-[0.9] tracking-tighter">
              Ready for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055ff] to-emerald-400">Briefing?</span>
            </h2>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              Our lead consultants are standing by to architect your 2026 systems migration. High-precision strategy for elite operations.
            </p>
            <div className="pt-8">
              <button className="bg-white text-[#0f172a] px-16 py-6 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-[#0055ff] hover:text-white transition-all shadow-2xl shadow-black/20">
                Contact Strategy Node
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GeminiAssistant />
    </div>
  );
};

export default App;
