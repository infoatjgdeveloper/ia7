import React, { useState, useEffect } from 'react';

const JGRewardsPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show after 12 seconds, only if not dismissed before
    const alreadyDismissed = sessionStorage.getItem('jgrewards_dismissed');
    if (alreadyDismissed) return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem('jgrewards_dismissed', 'true');
  };

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in">
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-in { animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      <div className="bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#0055ff] via-emerald-400 to-[#0055ff]" />

        <div className="p-6">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">New · JGRewards</span>
          </div>

          {/* Content */}
          <h3 className="text-white font-black text-xl heading uppercase tracking-tight leading-tight mb-2">
            Reward Your Customers.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055ff] to-emerald-400">
              Grow Your Business.
            </span>
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            JGRewards is our SaaS loyalty & rewards platform — built for businesses that want to retain customers 
            and drive repeat purchases. Try the live kiosk demo now.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {[
              "Points & Rewards",
              "Kiosk Mode",
              "Customer Dashboard",
              "Easy Integration",
            ].map(f => (
              <div key={f} className="flex items-center gap-2 text-slate-400 text-xs">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-3">
            <a
              href="https://jg-rewards.vercel.app/kiosk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#0055ff] text-white py-3 rounded-xl text-xs font-black uppercase tracking-[0.15em] hover:bg-[#0044dd] transition-all"
              onClick={handleDismiss}
            >
              Try Demo →
            </a>
            <button
              onClick={handleDismiss}
              className="flex-1 text-center border border-white/10 text-slate-400 py-3 rounded-xl text-xs font-black uppercase tracking-[0.15em] hover:border-white/20 hover:text-white transition-all"
            >
              Maybe Later
            </button>
          </div>

          <p className="text-slate-600 text-[10px] text-center mt-3">
            By JG AI R&D · <a href="https://www.jgdeveloper.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">jgdeveloper.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JGRewardsPopup;
