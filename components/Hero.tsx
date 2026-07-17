import React from 'react';

const stats = [
  { value: '37+', label: 'Countries served' },
  { value: '48h', label: 'Chatbot deploy time' },
  { value: '3', label: 'Global offices' },
  { value: 'Berlin', label: 'Registered in' },
];

const Hero: React.FC = () => (
  <section style={{ paddingTop: 80, borderBottom: '1px solid #e8eeff', background: '#fff' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', minHeight: 'calc(100vh - 80px)', paddingBottom: 64 }}>

        {/* LEFT */}
        <div>
          <p className="t-label" style={{ marginBottom: 22 }}>Berlin, Germany — AI solutions for Europe</p>
          <h1 className="t-h1" style={{ marginBottom: 26 }}>
            Custom AI software<br />for growing businesses<br />in Germany and Europe.
          </h1>
          <p className="t-body" style={{ maxWidth: 460, marginBottom: 38, fontSize: 16 }}>
            We build AI chatbots, web applications, and automation tools — delivered from our R&D team, managed from Berlin, secured by our US cybersecurity partner.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 60 }}>
            <a href="https://jgai-demo.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{ fontSize: 14, padding: '13px 28px' }}>
              Try AI chatbot demo
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSepDnB0Iwe85gTNT1HbeIAqv-pQLm1aFhE0Qz8iTCeMEwaVPw/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: 14, padding: '13px 28px' }}>
              Book a free call
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, paddingTop: 32, borderTop: '1px solid #e8eeff' }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 28, fontWeight: 600, color: '#0055ff', letterSpacing: '-0.025em', lineHeight: 1 }}>{s.value}</div>
                <div className="t-label" style={{ marginTop: 7, color: '#aaa', fontSize: 10 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — JGRewards kiosk live embed */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: -14, left: 20, zIndex: 10, background: '#fff', border: '1px solid #e8eeff', borderRadius: 8, padding: '7px 14px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 4px 16px rgba(0,85,255,0.08)' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: '#0f0f0f' }}>JGRewards — Live Demo</span>
          </div>
          <div style={{ border: '1px solid #e8eeff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 12px 48px rgba(0,85,255,0.1)', background: '#fff', height: 580 }}>
            <iframe src="https://jg-rewards.vercel.app/kiosk" title="JGRewards Kiosk Demo" style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} loading="lazy" allow="clipboard-write" />
          </div>
          <div style={{ position: 'absolute', bottom: -14, right: 20, zIndex: 10, background: '#fff', border: '1px solid #e8eeff', borderRadius: 8, padding: '7px 14px', boxShadow: '0 4px 16px rgba(0,85,255,0.08)' }}>
            <div style={{ fontSize: 11, color: '#888', marginBottom: 1 }}>Our SaaS product</div>
            <a href="https://jg-rewards.vercel.app/kiosk" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 500, color: '#0055ff' }}>jg-rewards.vercel.app →</a>
          </div>
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) {
        section > .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        section > .container > div > div:last-child { display: none !important; }
      }
    `}</style>
  </section>
);

export default Hero;
