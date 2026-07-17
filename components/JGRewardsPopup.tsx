import React, { useState, useEffect } from 'react';
const JGRewardsPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem('jgr_seen')) return;
    const t = setTimeout(() => setVisible(true), 14000);
    return () => clearTimeout(t);
  }, []);
  const dismiss = () => { setVisible(false); sessionStorage.setItem('jgr_seen', '1'); };
  if (!visible) return null;
  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 200, width: 300 }} className="popup-enter">
      <div style={{ background: '#fff', border: '1px solid #e8eeff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,85,255,0.12)' }}>
        <div style={{ height: 3, background: '#0055ff' }} />
        <div style={{ padding: 22, position: 'relative' }}>
          <button onClick={dismiss} style={{ position: 'absolute', top: 14, right: 14, background: 'none', border: 'none', cursor: 'pointer', color: '#bbb', fontSize: 18, lineHeight: 1 }}>&times;</button>
          <p className="t-label" style={{ marginBottom: 10 }}>New — JGRewards</p>
          <h3 className="t-h3" style={{ marginBottom: 10, lineHeight: 1.35 }}>Reward your customers.<br />Grow faster.</h3>
          <p className="t-small" style={{ marginBottom: 18, lineHeight: 1.8 }}>Our SaaS loyalty platform — points system, kiosk mode, customer dashboard. Built by JGAI.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 18 }}>
            {['Points & Rewards', 'Kiosk Mode', 'Easy Integration', 'White Label'].map(f => (
              <div key={f} style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#0055ff', flexShrink: 0 }} />
                <span className="t-small">{f}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <a href="https://jg-rewards.vercel.app/kiosk" target="_blank" rel="noopener noreferrer" onClick={dismiss} className="btn btn-dark" style={{ flex: 1, justifyContent: 'center', fontSize: 12, padding: '9px 12px' }}>Try demo</a>
            <button onClick={dismiss} className="btn btn-outline" style={{ flex: 1, fontSize: 12, padding: '9px 12px' }}>Maybe later</button>
          </div>
          <p className="t-small" style={{ textAlign: 'center', marginTop: 12 }}>By <a href="https://www.jgdeveloper.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0055ff' }}>JG AI R&D</a></p>
        </div>
      </div>
    </div>
  );
};
export default JGRewardsPopup;
