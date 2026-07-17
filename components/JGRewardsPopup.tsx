import React, { useState, useEffect } from 'react';

const JGRewardsPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('jgrewards_seen');
    if (seen) return;
    const t = setTimeout(() => setVisible(true), 14000);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem('jgrewards_seen', '1');
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 animate-pop-up">
      <div className="bg-white rounded-2xl shadow-2xl shadow-slate-900/20 border border-slate-100 overflow-hidden">
        {/* Top bar */}
        <div className="h-1 bg-gradient-to-r from-[#0055ff] to-emerald-400" />

        <div className="p-5 relative">
          <button onClick={dismiss} className="absolute top-4 right-4 text-slate-300 hover:text-slate-500 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded-full mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-600">New · JGRewards</span>
          </div>

          <h3 className="font-display text-lg font-bold text-slate-900 uppercase leading-tight mb-2">
            Reward Your Customers.<br />
            <span className="gradient-text">Grow Faster.</span>
          </h3>

          <p className="text-slate-500 text-xs leading-relaxed mb-4">
            JGRewards is a SaaS loyalty platform — points, kiosk mode, customer dashboard. Built by JGAI. Try the demo now.
          </p>

          <div className="grid grid-cols-2 gap-1.5 mb-4">
            {['Points & Rewards', 'Kiosk Mode', 'Easy Integration', 'White Label'].map(f => (
              <div key={f} className="flex items-center gap-1.5 text-[10px] text-slate-500">
                <span className="text-emerald-500 font-bold text-xs">✓</span> {f}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <a href="https://jg-rewards.vercel.app/kiosk" target="_blank" rel="noopener noreferrer"
              onClick={dismiss}
              className="flex-1 text-center bg-[#0055ff] text-white py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider hover:bg-[#0044dd] transition-colors">
              Try Demo →
            </a>
            <button onClick={dismiss}
              className="flex-1 text-center bg-slate-50 text-slate-500 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors">
              Later
            </button>
          </div>

          <p className="text-[9px] text-slate-300 text-center mt-3">
            By <a href="https://www.jgdeveloper.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">JG AI R&D</a> · jgdeveloper.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default JGRewardsPopup;
